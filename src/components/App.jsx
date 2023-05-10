import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreButton } from "./Button/LoadModeButton";
import { FetchPhoto } from "./Api/Api";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
export class App extends React.Component   {
  state = {
    inputValue: '',
     data: [],
    page: 1,
    showModal: false,
    largeImage: '',
    error: '',
    loading: false,
  };
  
  handlerSumbitForm = value => {
    this.setState({ inputValue: value, data: [] })
  }

  incrementPage = () => {
    this.setState(prevState => {
       console.log(this.state.page)
      return { page: prevState.page + 1 };
     
    });
  }

  componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state
    if (inputValue !== prevState.inputValue || prevState.page !== page) {
      this.setState({loading: true})
      FetchPhoto(inputValue, page)
        .then(({ hits }) => this.setState(prevState => ({ data: [...prevState.data, ...hits] })))
        .catch(error => console.log(error.message)).finally(() => this.setState({loading: false}))
   }
  }
  
  toggleModal = () => {
    const { showModal } = this.state
   
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  chooseImage = (url) => {
    this.setState({largeImage: url})
  }


  render() {
    const { data, showModal, largeImage, loading } = this.state
    const dataLength = data.length > 0;
    return (
      <>
        <Searchbar onSubmit={this.handlerSumbitForm}/>
        <ImageGallery data={data} onClick={this.toggleModal} chooseImage={this.chooseImage} />
        {loading && <Loader/>}
        {dataLength && <LoadMoreButton onClick={this.incrementPage} />}
        {showModal && <Modal largeImage={largeImage } toggleModal={this.toggleModal} />}
      </>
    )
  }
};

import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreButton } from "./Button/LoadModeButton";
import { FetchPhoto } from "./Api/Api";
export class App extends React.Component   {
  state = {
    inputValue: '',
     data: [],
    page: 1,
  };
  
  handlerSumbitForm = value => {
    this.setState({ inputValue: value })
  }

  incrementPage = () => {
    console.log('sdfsd')
    this.setState(prevState => {
       console.log(this.state.page)
      return { page: prevState.page + 1 };
     
    });
  }

  componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state
    if (inputValue !== prevState.inputValue || prevState.page !== page) {
       FetchPhoto(inputValue, page).then(({hits}) => this.setState(prevState => ({data: [...prevState.data, ...hits]})))
   }
 }


  render() {
    const { data } = this.state
    const dataLength = data.length > 0;
    return (
      <>
        <Searchbar onSubmit={this.handlerSumbitForm}/>
        <ImageGallery data={data} />
        {dataLength && <LoadMoreButton onClick={this.incrementPage}/>}
      </>
    )
  }
};

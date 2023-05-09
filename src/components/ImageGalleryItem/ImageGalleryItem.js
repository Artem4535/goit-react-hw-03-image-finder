import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ data, children }) {
  return (
    <>
      {data.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id}>
          <img className={css.image} src={webformatURL} alt="ddewfx" />
        </li>
      ))}
    </>
  );
}

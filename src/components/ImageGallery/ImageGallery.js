import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ data }) {
  return (
    <ul className={css.list}>
      <ImageGalleryItem data={data} />
    </ul>
  );
}

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "images/wedding.jpg",
    thumbnail: "images/wedding.jpg",
  },
  {
    original: "images/wedding2.jpg",
    thumbnail: "images/wedding2.jpg",
  },
  {
    original: "images/wedding3.jpg",
    thumbnail: "images/wedding3.jpg",
  },
];
function Gallery() {
  return <ImageGallery items={images} />;
}

export default Gallery;

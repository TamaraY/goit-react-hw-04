import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images || images.length === 0) return null; // Якщо немає зображень, не рендеримо нічого

  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <li key={`${image.id}-${index}`} style={{ margin: "5px" }}>
            <ImageCard image={image} onImageClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

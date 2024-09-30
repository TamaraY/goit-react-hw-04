import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null); // Стан для вибраного зображення

  const handleOpenModal = (image) => {
    setSelectedImage(image); // Встановлюємо вибране зображення
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Закриваємо модальне вікно, очищаючи вибране зображення
  };

  if (!images || images.length === 0) return null; // Якщо немає зображень, не рендеримо нічого

  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <li key={`${image.id}-${index}`} style={{ margin: "5px" }}>
            <ImageCard
              image={image}
              onImageClick={() => handleOpenModal(image)}
            />
          </li>
        ))}
      </ul>

      {/* Модальне вікно зображення */}
      {selectedImage && (
        <ImageModal
          // перетворюємо об'єкт на булеве значення
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div onClick={onImageClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;

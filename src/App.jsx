import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setImages((prev) => [...prev, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue) => {
    // Виклик сповіщення при порожньому полі
    if (!searchValue.trim()) {
      toast.error("Please fill in the search field");
      return;
    }
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image); // Встановлюємо вибране зображення
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Закриваємо модальне вікно, очищаючи вибране зображення
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {isError && <ErrorMessage error="Something went wrong! Try again!" />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {selectedImage && (
        <ImageModal
          // перетворюємо об'єкт на булеве значення
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;

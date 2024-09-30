import Modal from "react-modal";
import { useEffect } from "react";

import styles from "./ImageModal.module.css";

// Прив'язка модального вікна до кореневого елемента
Modal.setAppElement("#root");

// Закриття вікна при натисканні ESC
const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <img
        src={image.urls.full}
        alt={image.alt_description}
        className={styles.modalImage}
      />
      <button onClick={onClose} className={styles.closeBtn}>
        ×
      </button>
    </Modal>
  );
};

export default ImageModal;

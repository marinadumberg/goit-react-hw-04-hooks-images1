import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import PropTypes from "prop-types";

const ModalRoot = document.querySelector("#modal-root");

export default function ModalHooks({ onClose, image }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  return createPortal(
    <div
      className={s.overlay}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={s.modal}>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>,
    ModalRoot
  );
}
ModalHooks.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

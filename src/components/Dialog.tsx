import React from "react";

interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  className?: string;
  dark?: boolean;
  rounded?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  closeOnOverlayClick?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  className = "",
  dark,
  rounded,
  children,
  onClose = () => {},
  closeOnOverlayClick = false,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <dialog
        className={`relative z-10 nes-dialog backdrop-blur ${className} ${
          dark ? "is-dark" : ""
        } ${rounded ? "is-rounded" : ""}`}
        onClick={handleDialogClick}
        open
        aria-labelledby="dialog-title"
        aria-describedby="dialog-message"
      >
        {children}
      </dialog>
    </div>
  );
};

export default Dialog;

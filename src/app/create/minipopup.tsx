// MiniPopup.tsx
import React from "react";

interface MiniPopupProps {
  message: string;
  onClose: () => void;
}

const MiniPopup: React.FC<MiniPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 mb-4 rounded relative">
        {message}
        <button
          className="absolute top-0 right-0 px-3 py-1 text-yellow-700 hover:text-yellow-900 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default MiniPopup;

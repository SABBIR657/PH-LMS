/* eslint-disable react/prop-types */
import { useRef } from 'react';

const ImageSelector = ({
  handleFileChange,
  children,
}) => {
  const imageRef = useRef(null);

  const handleButtonClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={imageRef}
        className="hidden"
        onChange={handleFileChange}
        accept=".jpg, .jpeg, .png, .gif"
      />
      <div className="cursor-pointer" onClick={handleButtonClick}>
        {children}
      </div>
    </div>
  );
};

export default ImageSelector;

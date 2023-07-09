"use client";

const Size = ({ size, selectedSize, handleSizeChange }) => {
  return (
    <div
      className={`flex justify-center items-center w-10 h-8 border rounded-md mr-2 cursor-pointer ${
        selectedSize === size
          ? "bg-secondary text-white border-secondary"
          : "border-tertiray"
      }`}
      onClick={() => handleSizeChange(size)}
    >
      {size}
    </div>
  );
};

export default Size;

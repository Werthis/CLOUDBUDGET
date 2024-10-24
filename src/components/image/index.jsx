import { useState } from "react";

const Image = ({
  src,
  alt,
  className,
  width = "auto",
  height = "auto",
  lazy = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {hasError ? (
        <div
          style={{
            minWidth: width,
            minHeight: height,
            fontSize: "16px",
          }}
        >
          Image failed to load
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading={lazy ? "lazy" : "auto"}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.01s ease-in",
          }}
        />
      )}
    </>
  );
};

export default Image;

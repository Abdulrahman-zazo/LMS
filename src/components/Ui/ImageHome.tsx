import { useState } from "react";
import { motion } from "framer-motion";
interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string;
}
const ImageWithSkeleton = ({
  src,
  alt,
  width = 500,
  height = "full",
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="mx-auto"
      style={{
        width,
        height,
      }}
    >
      {/* Skeleton Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="animate-pulse bg-gray-200 rounded"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}

      {/* Actual Image */}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mx-auto h-full object-contain"
          style={{
            display: isLoaded ? "block" : "none",
          }}
        />
      )}

      {/* If image failed to load */}
      {hasError && (
        <div className="text-center text-red-500 p-4">
          ❌ Failed to load image
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;

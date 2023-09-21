import NextImage from "next/image";

type ImageProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  fill?: boolean;
};
const Image = ({ className, src, width, height, alt, fill }: ImageProps) => {
  if (!src) {
    return (
      <div className={`${className} bg-gray-200`} style={{ width, height }} />
    );
  }

  return (
    <NextImage
      alt={alt || ""}
      className={className}
      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${src}`}
      layout="fixed"
      width={width}
      height={height}
      fill={fill}
    />
  );
};

export default Image;

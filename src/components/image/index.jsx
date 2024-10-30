// // NextImage.tsx
//
// import React from "react";
// import Image, { ImageProps } from "next/image";
//
// import classes from "./index.css";
//
// type NextImageType = {
//   width?: string | number;
//   height?: string | number;
//   aspectRatio?: number;
//   children?: React.ReactNode;
// } & Omit<ImageProps, "width" | "height">;
//
// const NextImage: React.FunctionComponent<NextImageType> = ({
//   aspectRatio,
//   width = "100%",
//   height = "100%",
//   src,
//   alt,
//   fill = true,
//   priority,
//   children,
//   ...props
// }) => {
//   return (
//     <div className={classes["next-image__wrapper"]} style={{ width, height }}>
//       <Image
//         src={src}
//         alt={alt}
//         fill={fill}
//         priority={priority}
//         style={{ aspectRatio }}
//         className={classes["next-image__image"]}
//         {...props}
//       />
//       {children}
//     </div>
//   );
// };
//
// export default NextImage;

const Image = ({
  src,
  srcSet,
  className,
  sizes,
  alt,
  width = "auto",
  height = "auto",
}) => {
  const handleImageError = (e) => {
    e.target.alt = "Image failed to load";
  };

  // "Think of all ways it could be used. Keep in mind all the best web practices,
  // performance needs, and trust your web dev instincts:
  // if you were crafting it for yourself, what would you put there?"

  // If I were to craft an Image component for myself,
  // I would actually use a third-party framework. Why reinvent the wheel?
  // Milena mentioned that your framework of choice is currently Astro, but since I haven't used it yet,
  // my framework of choice would be next.js and its "next/image". It's a great tool for optimizing performance
  // and requires only slight customisation to be ready-to-go. But since next.js requires different project structure,
  // I've decided to leave this comment and not restructure this whole project.

  // You can see my regular customisation of next/image Image component at the top of this file.

  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};

export default Image;

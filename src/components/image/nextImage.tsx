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

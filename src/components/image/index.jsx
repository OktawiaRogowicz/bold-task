const Image = ({ src, alt, width = "auto", height = "auto" }) => {
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
  // and requires only slight customisation to be ready-to-go.

  // You can see my regular customisation of next/image component in "components/image/nextImage".

  return (
    <img
      className="image"
      src={src}
      srcSet={srcset}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};

export default Image;

function Text({ className, color, size, style, children }) {
  const textStyle = {
    color: color || "black",
    fontSize: size || "1.6rem",
    lineHeight: "1.25",
    fontWeight: "400",
    ...style,
  };

  return (
    <p className={className} style={textStyle}>
      {children}
    </p>
  );
}

export default Text;

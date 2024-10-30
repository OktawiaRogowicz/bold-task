function Text({ className, color, size, style, children }) {
  const textStyle = {
    color: color || 'black',
    fontSize: size || '16px',
    lineHeight: '20px',
    fontWeight: "400",
    ...style,
  };

  return <p className={className} style={textStyle}>{children}</p>;
}

export default Text;

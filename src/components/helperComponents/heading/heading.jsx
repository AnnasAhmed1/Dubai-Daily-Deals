const commonStyles = {};
export const H1 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <h1
      style={{
        fontWeight: weight ? weight : 700,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-h1"
    >
      {children}
    </h1>
  );
};
export const H2 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <h2
      style={{
        fontWeight: weight ? weight : 700,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-h2"
    >
      {children}
    </h2>
  );
};
export const H3 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <h3
      style={{
        fontWeight: weight ? weight : 700,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-h3"
    >
      {children}
    </h3>
  );
};
export const H4 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <h4
      style={{
        fontWeight: weight ? weight : 700,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-h4"
    >
      {children}
    </h4>
  );
};
export const H5 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <h5
      style={{
        fontWeight: weight ? weight : 700,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-h5"
    >
      {children}
    </h5>
  );
};

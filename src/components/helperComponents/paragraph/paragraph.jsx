const commonStyles = {};
import "../../../styles/component.css";

export const P1 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-p1"
    >
      {children}
    </p>
  );
};
export const P2 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-p2"
    >
      {children}
    </p>
  );
};
export const P3 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-p3"
    >
      {children}
    </p>
  );
};
export const P4 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-p4"
    >
      {children}
    </p>
  );
};
export const P5 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-p5"
    >
      {children}
    </p>
  );
};
export const P6 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
  onClick,
  className,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      onClick={onClick}
      className={`helper-p6 ${className}`}
    >
      {children}
    </p>
  );
};
export const P7 = ({
  children,
  weight,
  underLine = false,
  textAlign,
  color,
  style,
}) => {
  return (
    <p
      style={{
        fontWeight: weight ? weight : 400,
        color: color ? `var(--${color})` : null,
        textDecoration: underLine ? "underline" : null,
        textAlign: textAlign ? textAlign : null,
        ...style,
        ...commonStyles,
      }}
      className="helper-p7"
    >
      {children}
    </p>
  );
};

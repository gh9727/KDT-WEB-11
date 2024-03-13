const Button = ({ link, children }) => {
  return (
    <a href={link}>
      <button>{children}</button>
    </a>
  );
};
export default Button;

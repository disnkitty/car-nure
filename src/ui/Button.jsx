function Button({ type = 'button', className = '', onClick, children, ...rest }) {
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;

const Button = ({ variant, onClick, children, className }) => {
    const getButtonStyles = () => {
      switch (variant) {
        case 'primary':
          return `bg-primary rounded-xl px-2 text-white w-full p-2 hover:bg-blue-500 focus:outline-none`;
        case 'secondary':
          return `bg-white border-2 border-outline rounded-xl px-2 text-black w-full p-2 hover:bg-outline focus:outline-none`;
        default:
          return `bg-primary rounded-xl px-2 text-white w-full p-2 hover:bg-blue-500 focus:outline-none`;
      }
    };
  
    const buttonStyles = `${getButtonStyles()} ${className || ''}`;

    return (
      <button className={buttonStyles}  onClick={onClick} >
        {children}
      </button>
    );
};

export default Button
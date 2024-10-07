interface ButtonProps {
  variant?: keyof typeof variantStyles;
  icon?: React.ReactNode;
  customClass?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const variantStyles = {
  addBtn: "flex-center w-full bg-white-100 py-2.5  text-xs font-medium gap-2",
  counterBtn: "w-7 h-7 bg-white p-1 flex-center bg-white",
  showBtn:
    "w-full p-2.5 flex-center gap-2 bg-white bg-white-100 text-14 font-medium leading-4",
};

const Button: React.FC<ButtonProps> = ({
  variant = "addBtn",
  icon,
  customClass = "",
  children,
  onClick,
}) => {
  return (
    <button
      className={` ${variantStyles[variant]} ${customClass} rounded-lg`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

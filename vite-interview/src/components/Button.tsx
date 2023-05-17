const Button = ({
  children,
  onClick,
}: {
  children: any;
  onClick: () => void;
}) => {
  return (
    <div
      style={{ backgroundColor: "red", margin: 10, color: "#e32356" }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;

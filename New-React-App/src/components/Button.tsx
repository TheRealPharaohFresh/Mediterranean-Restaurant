

interface ButtonProps {
  children: string;
  onClick?: () => void; 
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "danger" | "success";
}


const Button = ({ children, onClick, type = "button", color = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
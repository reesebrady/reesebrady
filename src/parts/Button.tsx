import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  //question mark lets the compiler know color is optional
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}
//give button a default color!!!!!!!!!!!!!
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} type="button" className={"btn btn-" + color} >
        {children}
      </button>
    </>
  );
};

export default Button;

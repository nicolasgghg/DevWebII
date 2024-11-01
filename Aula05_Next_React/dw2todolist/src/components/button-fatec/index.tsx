interface IButtonComponent {
  type?: "button" | "reset" | "submit";
  handleClick?: () => void;
  buttonText: string;

}

export default function ButtonFatec({ buttonText, type, handleClick }: IButtonComponent) {
  return (
    <>
      <button
        onClick = {handleClick}
        className="py-2 px-4 bg-amber-400 text-white hover:bg-amber-300 "
        type={type || "button"}
      >
        {buttonText}
      </button>
    </>
  );
}

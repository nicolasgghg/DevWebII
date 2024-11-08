interface IButtonFatecProps {
  type?: "button" | "reset" | "submit";
  handleClick?: () => void;
  buttonText: string;
  bgColor?: "red" | "green" | "blue" | "amber" | string;
  textColor?: "white" | "black";
}

const colorClasses = {
  amber: "bg-amber-400 hover:bg-amber-300",
  red: "bg-red-400 hover:bg-red-300",
  green: "bg-green-400 hover:bg-green-300",
  blue: "bg-blue-400 hover:bg-blue-300",
};

const textColorClasses = {
  white: "text-white",
  black: "text-black",
};

export default function ButtonFatec({
  buttonText,
  type = "button",
  handleClick,
  bgColor = "amber",
  textColor = "black",
}: IButtonFatecProps) {
  const validatedBgColor: keyof typeof colorClasses = colorClasses[
    bgColor as keyof typeof colorClasses
  ]
    ? (bgColor as keyof typeof colorClasses)
    : "amber";

  return (
    <>
      <button
        onClick={handleClick}
        className={`py-2 px-4 ${colorClasses[validatedBgColor]} ${textColorClasses[textColor]} rounded-md `}
        type={type}
      >
        {buttonText}
      </button>
    </>
  );
}

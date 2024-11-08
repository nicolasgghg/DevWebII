"use client";
import ButtonFatec from "@/components/button-fatec";
import NavBar from "@/components/nav-bar";
import { useState } from "react";

const buttons = [
  { color: "bg-red-500", text: "red" },
  { color: "bg-green-500", text: "green" },
  { color: "bg-blue-500", text: "blue" },
];

export default function Contador() {
  const [contagem, SetContagem] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleClick = (color: string) => {
    SetContagem(contagem + 1);
    setBackgroundColor(color);
  };

  return (
    <div
      className={`flex gap-4 items-center justify-center h-screen flex-col ${ backgroundColor}`}
    >
      <NavBar titlePage="Contador" />

      {buttons.map(({ color, text }) => (
        <ButtonFatec
          key={color}
          handleClick={() => handleClick(color)}
          buttonText={text.toUpperCase()}
          bgColor={text}
        />
      ))}

      <div>Contagem de Clicks: {contagem}</div>
    </div>
  );
}

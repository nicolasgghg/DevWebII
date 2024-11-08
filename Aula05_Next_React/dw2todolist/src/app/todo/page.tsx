"use client";
import NavBar from "@/components/nav-bar";
import { useState, useEffect } from "react";
import { ITodo, getTodos } from "./api";

export default function TodoList() {
  const [tarefas, setTarefas] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const listaTarefas = await getTodos();
      listaTarefas.splice(10);
      setTarefas(listaTarefas)
    };

    fetchTodos();
  }, []);
  return (
    <div className="flex gap-4 items-center justify-center h-screen flex-col">
      <NavBar titlePage="User" />

      <hr />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.title}</li>
        ))}
      </ul>
    </div>
  );
}

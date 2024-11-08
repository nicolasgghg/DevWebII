"use client";

import { useEffect, useState } from "react";
import { IUser, getUsers } from "./api";
import NavBar from "@/components/nav-bar";

export default function Users() {
  const [listUsers, setListUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const listaUsers = await getUsers();
      listaUsers.splice(10);
      setListUsers(listaUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex gap-4 items-center justify-center h-screen flex-col">
      <NavBar titlePage="Todo" />

      <hr />

      <ul>
        {listUsers.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.name}</li>
        ))}
      </ul>

      <section>
        <div>
            <label htmlFor="getName"></label>
            <input type="text" name="getName" id="getName" />
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="email" name="" id="" />
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="password" name="" id="" />
        </div>
      </section>
    </div>
  );
}

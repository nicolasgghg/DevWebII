export interface IUser {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async (): Promise<IUser[]> => {
  const resposta = await fetch("http://localhost:3001/api/users");
  return await resposta.json();
};

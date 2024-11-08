export interface ITodo{
    userId: number
    id: number
    title: string
    completed: boolean
  } 

export const getTodos = async (): Promise<ITodo[]> => {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await resposta.json()

}
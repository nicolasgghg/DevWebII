export interface IPropsInput {
  type?: "text" | "password" | "email" | undefined;
  placeHolder: string;
  textLabel?: string;
}

export default function index({ type = "text", placeHolder }: IPropsInput) {
  return <input type={type} placeholder={placeHolder} className="border p-2"/>;
}
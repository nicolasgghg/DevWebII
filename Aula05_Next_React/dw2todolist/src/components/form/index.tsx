import Input, { IPropsInput } from "../input";

interface IPropsForm {
  inputs: IPropsInput[];
}

export default function index({ inputs }: IPropsForm) {
  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <label>{input.textLabel}</label>
          <Input
            type={input.type}
            placeHolder={input.placeHolder}
          ></Input>
        </div>
      ))}
    </div>
  );
}

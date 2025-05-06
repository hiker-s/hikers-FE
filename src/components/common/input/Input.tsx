import * as Styled from "./styled";

type InputProps = {
  title: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input = ({ title, type, name, value, onChange, placeholder }: InputProps) => {
  return (
    <label>
      <Styled.inputField>
        <Styled.textTitle>{title}</Styled.textTitle>
        <Styled.InputBox type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </Styled.inputField>
    </label>
  );
};

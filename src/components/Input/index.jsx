import { Container, InputContainer } from "./styles";

const Input = ({ label, register, name, error = "", type }) => {
  return (
    <Container>
      <h4>{label}</h4>
      <InputContainer>
        <input type={type} {...register(name)} />
      </InputContainer>
      {!!error && <span>{error}</span>}
    </Container>
  );
};

export default Input;

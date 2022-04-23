import { Container, InputContainer } from "./styles";

const Input = ({ label, register, name, error = "" }) => {
  return (
    <Container>
      <h4>{label}</h4>
      <InputContainer>
        <input {...register(name)} />
      </InputContainer>
      {!!error && <span>{error}</span>}
    </Container>
  );
};

export default Input;

import { Container, InputContainer } from "./styles";

const Input = ({ label, register, name }) => {
  return (
    <Container>
      <h4>{label}</h4>
      <InputContainer>
        <input {...register(name)} />
      </InputContainer>
    </Container>
  );
};

export default Input;

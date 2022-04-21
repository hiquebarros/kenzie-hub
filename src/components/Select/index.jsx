import { Container, InputContainer } from "./styles";

const Select = ({ label, register, name }) => {
  return (
    <Container>
      <h4>{label}</h4>
      <InputContainer>
        <select {...register(name)}>
            <option value="Primeiro Módulo (Frontend avançado)">Primeiro Módulo</option>
            <option value="Segundo Módulo (Frontend avançado)">Segundo Módulo</option>
            <option value="Terceiro Módulo (Frontend avançado)">Terceiro Módulo</option>
            <option value="Quarto Módulo (Backend avançado)">Quarto Módulo</option>
            <option value="Quinto Módulo (Backend avançado)">Quinto Módulo</option>
            <option value="Sexto Módulo (Backend avançado)">Sexto Módulo</option>
        </select>
      </InputContainer>
    </Container>
  );
};

export default Select;

import { Container, InputContainer } from "./styles";

const Select = ({ label, register, name }) => {
  return (
    <Container>
      <h4>{label}</h4>
      <InputContainer>
        <select {...register(name)}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo</option>
            <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo</option>
            <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo</option>

        </select>
      </InputContainer>
    </Container>
  );
};

export default Select;

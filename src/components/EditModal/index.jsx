import { Container, Header, Content } from "./styles";

const EditModal = ({closeModal}) => {
  return (
    <Container>
      <Header>
        <h3>Editar tecnologias</h3>
        <button onClick={closeModal}>X</button>
      </Header>
      <Content>
        <form>
          <div className="label">
            <label>Nome</label>
          </div>
          <input></input>
          <div>
            <label>Selecionar status</label>
          </div>
          <select>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button>Salvar Alterações</button>
          <button>Excluir</button>
        </form>
      </Content>
    </Container>
  );
};

export default EditModal;

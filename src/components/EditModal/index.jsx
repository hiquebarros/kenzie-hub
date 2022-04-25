import { Container, Header, Content } from "./styles";


import { useForm } from "react-hook-form";
import api from "../../services/api";

const EditModal = ({closeModal, techId}) => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmitFunction = (data) => {
    const token = localStorage.getItem("@KenzieHub:token")

    api
    .put(`/users/techs/${techId}`, data,
     {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        }
  })
  .then((_) => closeModal())
  .then((error) => console.log(error))
  ;
  }

  const handleClick = () => {
    const token = localStorage.getItem("@KenzieHub:token")

    api
    .delete(`/users/techs/${techId}`,
     {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        }
  })
  .then((_) => closeModal())
  .then((error) => console.log(error))
  }

  return (
    <Container>
      <Header>
        <h3>Editar tecnologias</h3>
        <button onClick={closeModal}>X</button>
      </Header>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <label>Selecionar status</label>
          </div>
          <select {...register('status')}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select >
          <button type="submit">Salvar Alterações</button>
          <button onClick={handleClick}>Excluir</button>
        </form>
      </Content>
    </Container>
  );
};

export default EditModal;

import { Container, Header, Content } from "./styles";

import { useForm } from "react-hook-form";
import api from "../../services/api";

const AddModal = ({closeModal}) => {

    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmitFunction = (data) => {
        const token = localStorage.getItem("@KenzieHub:token")

        api
        .post("/users/techs", data,
         {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            }
      })
      .then((_) => closeModal())
      .then((error) => console.log(error))
      ;
    }

  return (
    <Container>
      <Header>
          <h3>Cadastrar tecnologia</h3>
          <button onClick={closeModal}>X</button>
      </Header>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="label">
            <label>Nome</label>
          </div>
          <input {...register('title')}></input>
          <div>
            <label>Selecionar status</label>
          </div>
          <select {...register('status')}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">
            Intermediário
            </option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </Content>
    </Container>
  );
};

export default AddModal;

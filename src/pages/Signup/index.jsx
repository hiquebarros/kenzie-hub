import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Container, Content, NavContainer } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

import api from "../../services/api";

import { toast } from "react-toastify";

const Login = ({ isAuthenticated }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleResponse = (res) => {
    console.log(res);
    toast.success("Sucesso ao criar a conta");
    history.push("/");
  };

  const handleError = (err) => {
    console.log(err);
    toast.error("Erro ao criar a conta, tente outro Email");
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error));
  };

  return (
    <Container>
      <NavContainer>
        <h1>Kenzie Hub</h1>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </NavContainer>

      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <a>Rapido e grátis, vamos nessa</a>
          <Input error={errors.name?.message} register={register} name={"name"} label={"Nome"}></Input>
          <Input error={errors.email?.message} register={register} name={"email"} label={"Email"}></Input>
          <Input error={errors.bio?.message} register={register} name={"bio"} label={"Bio"}></Input>
          <Input error={errors.contact?.message} register={register} name={"contact"} label={"Contato"}></Input>
          <Input error={errors.password?.message} register={register} name={"password"} label={"Senha"}></Input>
          <Select
            error={errors.course_module?.message}
            register={register}
            name={"course_module"}
            label={"Selecionar módulo"}
          >
          </Select>
          <Button type="submit" pinkSchema>
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;

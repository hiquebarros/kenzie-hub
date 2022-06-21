import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

import api from "../../services/api";

import { toast } from "react-toastify";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleResponse = (res) => {
    const { token } = res.data;

    localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
    localStorage.setItem("@KenzieHub:id", JSON.stringify(res.data.user.id));

    setIsAuthenticated(true);

    toast.success(`Bem vindo, ${res.data.user.name}!`);

    return history.push("/dashboard");
  };

  const handleError = (err) => {
    console.log(err);
    toast.error("Erro ao acessar a conta");
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => handleResponse(response))
      .catch((error) => handleError(error));
  };

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
<<<<<<< HEAD
          <Input type="text" error={errors.email?.message} register={register} name="email" label={"Email"}></Input>
          <Input type="password" error={errors.password?.message} register={register} name="password" label={"Senha"}></Input>
=======
          <Input type='text' error={errors.email?.message} register={register} name="email" label={"Email"}></Input>
          <Input type='password' error={errors.password?.message} register={register} name="password" label={"Senha"}></Input>
>>>>>>> 4e3c5a29ace6de8e1091493a66ee227c090ecdd4
          <Button>Entrar</Button>
          <a>Ainda não possui conta?</a>
          <Link to="/signup">
            <Button type="submit" greySchema>
              Cadastre-se
            </Button>
          </Link>
        </form>
      </Content>
    </Container>
  );
};

export default Login;

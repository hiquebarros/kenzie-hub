import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup.string().min(8).required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data)
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input register={register} name="email" label={"Email"}></Input>
          <Input register={register} name="password" label={"Senha"}></Input>
          <Button>Entrar</Button>
          <Link to="/signup"><a>Ainda não possui conta?</a></Link>
          <Button type="submit" greySchema>Cadastre-se</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Container, Content, NavContainer } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup.string().min(8).required("Campo obrigatório!"),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais")
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <NavContainer>
        <h1>Kenzie Hub</h1>
        <Link to="/"><button>Voltar</button></Link>
      </NavContainer>

      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <a>Rapido e grátis, vamos nessa</a>
          <Input register={register} name={"name"} label={"Nome"}></Input>
          <Input register={register} name={"email"} label={"Email"}></Input>
          <Input register={register} name={"password"} label={"Senha"}></Input>
          <Input
            register={register}
            name={"confirmedPassword"}
            label={"Confirmar Senha"}
          ></Input>
          <Select register={register} name={"course_module"} label={"Selecionar modulo"}> </Select>
          <Button type="submit" pinkSchema>
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;

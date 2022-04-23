import Card from "../../components/Card"
import { NavContainer, Container, Header, Main, MainHeader, CardContainer } from "./styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  return (
    <Container>
      <NavContainer>
        <h1>Kenzie Hub</h1>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </NavContainer>
      <Header>
        <div>
          <h2>Ola, Henrique</h2>
          <h5>Primeiro módulo</h5>
        </div>
      </Header>
      <Main>
        <MainHeader>
        <h3>Tecnologias</h3>
        <button>+</button>
        </MainHeader>
        <CardContainer>
          <Card></Card>
        </CardContainer>
      </Main>
    </Container>
  );
};

export default Dashboard;

import Card from "../../components/Card";

import {
  NavContainer,
  Container,
  Header,
  Main,
  MainHeader,
  CardContainer,
} from "./styles";

import { useEffect, useState } from "react";

import api from "../../services/api";
import { Redirect } from "react-router-dom";

const Dashboard = ({openModal, isAuthenticated, setIsAuthenticated}) => {
  const [user, setUser] = useState("");
  
  useEffect(() => {
    const id = localStorage.getItem("@KenzieHub:id");

    api
      .get(`/users/${JSON.parse(id)}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  const clearStorage = () => {
    localStorage.clear()
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <NavContainer>
        <h1>Kenzie Hub</h1>
          <button onClick={clearStorage}>Voltar</button>
      </NavContainer>
      <Header>
        <div>
          <h2>Ola, {user.name && user.name}</h2>
          <h5>{user.course_module && user.course_module}</h5>
        </div>
      </Header>
      <Main>
        <MainHeader>
          <h3>Tecnologias</h3>
          <button onClick={() => openModal('add')}>+</button>
        </MainHeader>
        <CardContainer>
          {user.techs &&
            user.techs.map((tech) => {
              return <Card openModal={openModal} key={tech.title} tech={tech}></Card>;
            })}
        </CardContainer>
      </Main>
    </Container>
  );
};

export default Dashboard;

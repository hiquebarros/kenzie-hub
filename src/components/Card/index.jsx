import { Container } from "./styles";

const Card = ({tech}) => {
  return (
    <Container>
      <h2>{tech.title}</h2>
      <h5>{tech.status}</h5>
    </Container>
  );
};

export default Card;

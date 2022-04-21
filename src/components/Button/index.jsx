import { Container } from "./styles";

const Button = ({children, greySchema, pinkSchema, type}) => {
  return <Container greySchema={greySchema} pinkSchema={pinkSchema} type={type}>
      {children}
  </Container>;
};

export default Button;

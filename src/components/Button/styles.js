import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  position: static;
  width: 259.9px;
  height: 38.5px;
  background: ${(props) => (props.greySchema ? '#868596' : props.pinkSchema ? '#59323F' : '#ff577f' )};
  border: none;
  box-sizing: border-box;
  border-radius: 4.06066px;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 22px 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;

  @media (min-width: 425px) {
    width: 324px;
    height: 48px;
  }
`;

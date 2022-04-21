import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  width: 266px;
  h1 {
    color: #ff577f;
  }
  button {
    padding: 0px 16.2426px;
    width: 79.54px;
    height: 25.58px;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    text-align: center;
    color: #f8f9fa;
    border: none;
  }
  @media (min-width: 425px) {
    width: 340px;
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 4px;
  width: 295.83px;
  height: 645.47px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  a {
    color: #868e96;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 425px) {
    width: 370px;
    height: 711px;
    padding: 42px 22px;
  }
`;

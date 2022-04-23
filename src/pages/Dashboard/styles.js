import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  width: 80%;
  h1 {
    color: #ff577f;
    font-size: 28px;
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
    margin-bottom: 25px;
  }
  
  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  height: 131px;
  width: 100%;
  background: #121214;
  border-bottom: 1px solid #212529;
  border-top: 1px solid #212529;

  div {
    text-align: left;
    width: 80%;

    @media (min-width: 768px) {
    width: 55%;
  }
  }
  h2 {
    width: 151px;
    height: 28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
  }
  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 10px 0px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 20px;

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }
  button {
    background: #212529;
    border-radius: 4px;
    color: #ffffff;
    border: none;
    height: 32px;
    width: 32.485294342041016px;
  }

  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 19px;
  width: 80%;
  height: 416.37px;
  background: #212529;
  border-radius: 4px;
  margin-top: 25px;

  @media (min-width: 768px) {
    width: 55%;
  }
`;


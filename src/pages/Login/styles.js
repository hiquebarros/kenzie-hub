import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    color: #ff577f;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 4px;
  width: 296px;
  height: 402.69px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  a {
    color: #868e96;
    order: 3;
    cursor: pointer;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 425px) {
    width: 369px;
    height: 502px;
    padding: 42px 22px;
  }
`;

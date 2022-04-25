import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 296px;
  border-radius: 3.208672046661377px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 296px;
  height: 40.11px;
  background: #343b41;
  border-radius: 3.20867px 3.20867px 0px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 11.2304px;
  line-height: 19px;
  color: #f8f9fa;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }
  button {
    border: none;
    background: none;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .label {
      text-align: left;
      color: #f8f9fa;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      height: 38.5px;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      box-sizing: border-box;
      border-radius: 4.06066px;
      margin: 17.6477px 0px;
      color: #ffffff;
    }

    input,
    select {
      background-color: #343b41;
      border-radius: 5px;
      border: none;
      height: 30px;
      margin: 5px;
      color: white;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 15px;
`;

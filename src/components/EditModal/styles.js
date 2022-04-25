import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 296px;
  height: 200.41px;
  border-radius: 3.208672046661377px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 296px;
  height: 39.97px;
  background: #343b41;
  border-radius: 3.19783px 3.19783px 0px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 11.2304px;
  line-height: 19px;
  color: #f8f9fa;
  div {
    display: flex;
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
  height: 90%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #f8f9fa;

    .label {
      text-align: left;
    }
    div {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    }
    select {
      background-color: #343b41;
      border-radius: 5px;
      border: none;
      height: 30px;
      margin: 5px;
      color: white;
    }
  }

  .button-save {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 163.09px;
    height: 38.37px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0px 17.5881px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7913px;
    line-height: 21px;
    color: #ffffff;
  }

  .button-delete {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    width: 78.35px;
    height: 38.37px;
    background: #868e96;
    border: 1.2182px solid #868e96;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0px 17.5881px;
    color: #FFFFFF;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

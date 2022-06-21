import styled from "styled-components"

export const Container = styled.div`
text-align: left;
margin: 0 0 5px 0;

h4{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12.182px;
line-height: 0px;
color: #F8F9FA;
margin: 15px 0 15px 0;
}

span{
    font-size: 12px;
    line-height: 0%;
    margin: 0;
}
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 0.9772px solid #F8F9FA;
background: #343B41;
border-radius: 3.20867px;
height: 38.504066467285156px;
width: 264.6582946777344px;
border-radius: 3.208672046661377px;
padding: 0px, 13px, 0px, 13px;

input{
    background: transparent;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #F8F9FA;
    margin-left: 5px;
}

@media (min-width: 425px){
    height: 48px;
    width: 329.92877197265625px;
    border-radius: 4px;
    padding: 0px, 16px, 0px, 16px;

}
`
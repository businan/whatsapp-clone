import styled from "styled-components"

const AppContainer=styled.div`
display: grid;
place-items: center;
height:100vh;
background-color: #dadbd3;
`
const StyledBody=styled.div`
display: flex;
margin-top: -50px;
background-color: #ededed;
height: 90vh;
width: 60vw;
box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`
export {
    AppContainer,
    StyledBody
}
import styled from "styled-components"

const ChatContainer=styled.div`
    border:2;
    display: flex;
    flex-direction: column;
    flex:0.65;
    margin-top: 10px;
`

const ChatHeader=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-right:1px solid lightgray;

    .MuiAvatar-root {
            width: 40px;
            height: 40px;
        }
    .MuıSvgIcon-root{
        margin-left: 2vw;
        height: 1em;
        width: 1em;
    }

    .MuiButtonBase-root{
        height: 1em;
        width: 1em;
        margin-left: 2vw;
    }
`
const StyledHeader=styled.div`
display:flex;
flex-direction: row;
`

const StyledText=styled.h5`
 margin:1px;
   
  
`
const StyledParagraph=styled.p`
    font-size: 10px;
    margin:1px;
`
const StyledMessage=styled.p`
    display:flex;
    flex-direction: column;
    justify-content:right;
    position: relative;
    border-radius: 10px;
    width: 80%;
    background-color: #ffffff;
`

const StyledBody = styled.div`
    display:flex;
    flex-direction: column;
    background-color:#e5e2e4;
    overflow: scroll;
    height: 100%;
`
const StyledTimeStamp=styled.span`
    font-size: xx-small;
    margin-left:10px;
`
const StyledName = styled.span`
    position: absolute;
    top:-15px;
    font-weight: 800;
    font-size: xx-small;`


const StyledFooter=styled.div`
display:flex;
.MuiSvgIcon-root{
    padding:10px;
    color:gray
}

`

const StyledForm=styled.form`
flex:1;
display:flex;
`

const StyledInput=styled.input`
flex:1;
border-radius:30px;
padding:10px;
border:none;
`
const StyledButton=styled.button`
display:none;
`

export {
    ChatContainer,
    ChatHeader,
    StyledHeader,
    StyledText,
    StyledParagraph,
    StyledMessage,
    StyledBody,
    StyledTimeStamp,
    StyledName,
    StyledFooter,
    StyledForm,
    StyledInput,
    StyledButton

}
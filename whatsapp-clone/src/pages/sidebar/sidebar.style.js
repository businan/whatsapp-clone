import styled from "styled-components"

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction:column;
    flex:0.35;

    
`

const SidebarHeader = styled.div `
    display:flex;
    justify-content: space-between;
    padding:20px;
    border:1px solid lightgray;
`
const HeaderRight=styled.div`
    min-width: 10vw;
    display:flex;
    align-items: center;
    min-width:10vw;
    
    .MuıSvgIcon-root{
            margin-right: 2vw;
        font-size:24px !important;
        }
    .MuiButtonBase-root{
            height: 1em;
            width: 1em;
            margin-left: 2vw;
    }
`
const SidebarSearch=styled.div`
    display:flex;
    align-items: center;
    background-color: #ededed;
    height: 25px;
    padding: 10px;
`

const SidebarSearchContainer=styled.div`
    display:flex;
    align-items: center;
    background-color:white;
    width: 100%;
    height:35px ;
    border-radius: 20px;

    .MuıSvgIcon-root{
            color:gray;
            padding:10px;
        }

`
const SideChatInfo=styled.div`
display:flex;
flex-direction:column;
`

const StyledInput=styled.input`
    border:none;
    outline-width: 0;
    margin-left:10px;
    
`
const  StyledChatPrg=styled.div`
    font-size: 16px;
    font-weight: bold;
    margin:2px;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
`

export {
    SideChatInfo,
    SidebarWrapper,
    SidebarHeader,
    HeaderRight,
    SidebarSearch,
    SidebarSearchContainer,
    StyledInput,
    StyledChatPrg,
}

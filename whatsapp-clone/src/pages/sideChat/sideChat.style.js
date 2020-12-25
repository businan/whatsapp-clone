import styled from "styled-components"

const SideChatWrapper = styled.div`
display:flex;
padding:10px;
cursor:pointer;
border-bottom:1px solid #dadada;

&:hover {
background-color:" #ebebeb";
  }
` 

const SideChatInfo=styled.div`
display:flex;
flex-direction:column;


`

const SidechatText= styled.h4`
margin:0px 10px;


`


const Sidechat_info_prgp= styled.p`
font-size: 10px;
margin:1px 10px;
`

export {SideChatWrapper,SidechatText,Sidechat_info_prgp,SideChatInfo}
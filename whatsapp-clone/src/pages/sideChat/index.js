import React from 'react'
import {Avatar } from "@material-ui/core"
import  {SideChatWrapper,SidechatText,Sidechat_info_prgp,SideChatInfo} from "./sideChat.style"

export  const SideChat = () => {
    return (
        <SideChatWrapper>
            <Avatar/>
            <SideChatInfo>
            <SidechatText>Room name</SidechatText>
            <Sidechat_info_prgp>there is a message..</Sidechat_info_prgp>
            </SideChatInfo>
        </SideChatWrapper>
    )
}

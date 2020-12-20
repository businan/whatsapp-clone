import React from 'react'
import { IconButton,Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import  {
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
} from "./chat.style"

 const Chat = () => {
    
    return (
    <ChatContainer>
            <ChatHeader>
                <StyledHeader>
                 <Avatar/>
                    <div>
                    <StyledText>Room Host</StyledText>
                    <StyledParagraph>Last seen...</StyledParagraph>
                    </div>
                 </StyledHeader>

                <div>
                <IconButton>
                    <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
            </ChatHeader>

           <StyledBody>
               <StyledMessage>
                  <StyledName>Henry</StyledName>
                  this is message
                    <StyledTimeStamp>{new Date().toUTCString()}</StyledTimeStamp>
                </StyledMessage>

                <StyledMessage>
                  <StyledName>Henry</StyledName>
                  this is message
                    <StyledTimeStamp>{new Date().toUTCString()}</StyledTimeStamp>
                </StyledMessage>

                <StyledMessage>
                  <StyledName>Henry</StyledName>
                  this is message
                    <StyledTimeStamp>{new Date().toUTCString()}</StyledTimeStamp>
                </StyledMessage>
            </StyledBody>

        
          
          <StyledFooter>
            <InsertEmoticonIcon/>
            <StyledForm>
                <StyledInput  placeholder="Type a message" 
                type="text" />
                <StyledButton type="button">Send a message</StyledButton>
             </StyledForm>
            <MicIcon/>
        </StyledFooter>
         
    </ChatContainer>
    )
}

export default Chat;
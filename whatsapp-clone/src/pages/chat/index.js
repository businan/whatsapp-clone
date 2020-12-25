import React, {useState} from 'react'
import axios from "axios";
import Pusher from "pusher-js";
import moment from 'moment';
import { IconButton, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {
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
    StyledButton,
   
} from "./chat.style"

const Chat = ({ messages }) => {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:9000/messages/new", {
            message: input,
            name: "Demo",
            timestamp: moment(),
            received: false,
        })
        setInput("");
    }

    return (
        <ChatContainer>
            <ChatHeader>
                <StyledHeader>
                    <Avatar />
                    <div>
                        <StyledText>Room Host</StyledText>
                        <StyledParagraph>Last seen...</StyledParagraph>
                    </div>
                </StyledHeader>

                <div>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </ChatHeader>

            <StyledBody>
                {messages.map((message) => (
    
                        <StyledMessage className={!message.received ? "received" : null} key={message._id}>
                        <StyledName>{message.name}</StyledName>
                        {message.message}
                        <StyledTimeStamp>{moment(message.timestamp).format("HH:mm:ss")}</StyledTimeStamp>

                    </StyledMessage>))}
            </StyledBody>
           

            <StyledFooter>
                <InsertEmoticonIcon />
                <StyledForm>
                    <StyledInput
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text" />
                    <StyledButton
                        onClick={sendMessage}
                        type="submit">Send a message</StyledButton>
                </StyledForm>
                <MicIcon />
            </StyledFooter>

        </ChatContainer>
    );
}

export default Chat;
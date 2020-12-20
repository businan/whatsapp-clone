import React from 'react';
import { IconButton,Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {SideChat} from "../sideChat/index"
import 
{   
    SidebarWrapper,
    SidebarHeader,
    HeaderRight,
    SidebarSearch,
    SidebarSearchContainer,
    StyledInput,
    StyledChatPrg

} from "./sidebar.style";


 const Sidebar = () => {
    return (
        <SidebarWrapper>
            

           <SidebarHeader>
            <Avatar alt="Hellen" src="https://www.teknozum.com/wp-content/uploads/2019/12/whatsapp-profil-foto%C4%9Fraflar%C4%B1-9-1024x639.png" />
              <HeaderRight>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </HeaderRight>
            </SidebarHeader>

            <SidebarSearch>
                <SidebarSearchContainer>
                 <SearchOutlinedIcon/>
                    <StyledInput placeholder="Enter to search" type="text"/>
                </SidebarSearchContainer>
            </SidebarSearch>

         <StyledChatPrg>
             <p>Add new Chat</p>
              <SideChat />
              <SideChat />
              <SideChat />
        </StyledChatPrg>

    </SidebarWrapper>
    )
}

export default Sidebar;
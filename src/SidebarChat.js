import React from 'react';
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className= "sidebarChat_Info">
                <h2>Room Name</h2>
                <p>This is the last message</p>

            </div>
        </div>
    )
}

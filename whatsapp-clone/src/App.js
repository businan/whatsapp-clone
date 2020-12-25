import React, { useEffect, useState } from "react";
import Sidebar from "./pages/sidebar/"
import Chat from "./pages/chat/"
import {
  AppContainer,
  StyledBody
} from "./App.syle";
import Pusher from "pusher-js";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
     axios.get("http://localhost:9000/messages/sync")
      .then(response => {
        console.log(response.data)
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('980f5bec2020c91a21cc', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])
  // burdaki useEffectte dependencye messages demek zorunda kaliyorum.

  console.log(messages);
  return (
    <AppContainer>
      <StyledBody>
      <Sidebar/>
      <Chat messages= {messages}/>
    </StyledBody>
    </AppContainer>
  );
}

export default App;

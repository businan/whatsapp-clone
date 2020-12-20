import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css"
import Pusher from "pusher-js";
// import axios from "./axios.";
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
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages= {messages} />
      </div>
    </div>
  );
}

export default App;

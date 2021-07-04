import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from "./axios";
import React, { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/all').then(response => {
      setMessages(response,data);
    });
  }, []);

useEffect(() => {
  const pusher = new Pusher('b52672d0137607d2d5fe', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
    setMessages([...messages, newMessage]);
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };

}, [messages]);
 
console.log(messages);


  return (
    <div className="App">
      <h1> CheetChat</h1>
   
   <div className="app_body">
     <Sidebar />
   <Chat messages={messages}/>
   </div>
    </div>
  );
}


export default App;




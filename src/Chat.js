import { Avatar, IconButton} from "@material-ui/core";
import React ,{ useState, useEffect }from 'react';
import React ,{Attachfile,MoreVert, SearchOutLined } from "react";
import "./Chat.css";
import axios from "./axios";


function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault ();

        await axios.post ("/messages/new" , {
        
        message: input,
        name: "DEMO APP",
        timestamp: "Just now!",
        received: false,
        });

        setInput ("") ;
    };

    const {seed ,setSeed}= useState(" ");
    useEffect(() => {
        setSeed(Math.floor(Math.random()= 6000));
    },[]);
        }
    return (
        <div className="chat">
            <div className="chat_header">
            <Avatar src= {" "}/>
         <div className="chat_headerinfo">
             <h3>Room name</h3>
             <p>LAST SEEN AT...</p>
         </div>
         <div className="chat_headerRight">
         <IconButton>
             <SearchOutLined />
         </IconButton>
         <IconButton>
             <Attachfile />
         </IconButton>
         <IconButton>
             <MoreVert />
         </IconButton>
         </div>
            </div>
            <div className="chat_body"></div>
            <div className="chat_footer"></div>



        </div>
    )

export default Chat

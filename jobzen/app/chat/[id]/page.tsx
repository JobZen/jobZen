"use client"

import Cookies from "js-cookie";
import { Message } from '@mui/icons-material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface Message{
    id:number,
    body:string,
    createdAt:Date,
    updatedAt:string,
    senders:number,
    reciever:number
}
const socket = io("http://localhost:3000"); 
const Chat = () => {
    const role = Cookies.get("role");
    const id=Cookies.get('id');
    const [messages, setMessages] = useState<Message[]|[]>([]);
    const [sender, setSender] = useState<Message[]|[]>([]);
    const [rieciver, setRieciver] = useState<Message[]|[]>([]);
    const [currentMessage, setCurrentMessage] = useState('');

  
    


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        socket.emit('message', currentMessage);
        setCurrentMessage('');
    };
    
 

    useEffect (()=> {

        var currentUrl = window.location.href;
        var ind=currentUrl.split("/")
        let req1
        let req2   

        var index= parseInt(ind[ind.length-1])
        if (role==="freelancer") {
          req1 = axios.get(`http://localhost:3000/freeMS/msg/${id}/${index}`)
         req2 = axios.get(`http://localhost:3000/jobMS/msg/${index}/${id}`)}
        else  {
            req2 = axios.get(`http://localhost:3000/freeMS/msg/${index}/${id}`)
            req1 = axios.get(`http://localhost:3000/jobMS/msg/${id}/${index}`)
        }

        axios.all([req1,req2])
        .then(axios.spread((...res)=>{
            setSender(res[0].data)
            setRieciver(res[1].data)
        }))
        .catch((error) => {console.log(error)})
    },[])





    return (
        <div>
          
            {sender.map((message, index) => (
                <p key={index}>you: {message.body}</p>
            ))}
            {rieciver.map((message, index) => (
                <p key={index}>him: {message.body}</p>
            ))}
        
            <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
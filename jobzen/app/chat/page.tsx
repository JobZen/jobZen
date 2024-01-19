"use client"

import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
  
    const [currentMessage, setCurrentMessage] = useState('');
   
    useEffect(() => {
       
        const socket = io();

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

    return (
        <div>
          
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
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
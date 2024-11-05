import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Navbar from './components/Navbar'

const MessageHome = () => {
    return (
        <div className='messageshome'>
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    );
};

export default MessageHome
import React from "react";
import call from '../../../assets/icons/call.png'
import video from '../../../assets/icons/video.png'
import more from '../../../assets/icons/more.png'
import Messages from "./Messages"
import Input from "./Input"

const Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={call}/>
                    <img src={video}/>
                    <img src={more}/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat
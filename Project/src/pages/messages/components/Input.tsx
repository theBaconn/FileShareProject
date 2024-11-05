import React from 'react'
import photo from "../../../assets/icons/photo.png"
import attachment from "../../../assets/icons/attachment.png"

const Input = () => {
    return(
        <div className='input'>
            <input type='text' placeholder='Type something...' />
            <div className='send'>
                <img src={photo} alt=""/>
                <input type='file' style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <img src={attachment} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input
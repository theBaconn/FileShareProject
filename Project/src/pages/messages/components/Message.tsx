import React from 'react'

const Message = () => {
    return(
        <div  className='message owner'>
            <div className='messageInfo'>
                <img
                src="https://th.bing.com/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt=""
                />
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>hello</p>
                <img src="https://th.bing.com/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
            </div>
        </div>
    )
}

export default Message
import React from 'react'

const Navbar = () => {
    //Commented sections are meant for firebase authentication

    //const {currentUser} = useContext{AuthContext}

    return(
        <div className='navbar'>
            <span className='logo'>Messages</span>
            <div className="user">
                <img src=/* {updateCurrentUser.photoURL} */"https://th.bing.com/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
                <span>{/* {updateCurrentUser.displayName} */}John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
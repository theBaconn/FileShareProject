import React, { useState } from 'react'
import { collection, query, where } from "firebase/firestore"
/* import {db} from "../../../firebase"
import {AuthContext} from "../context/AuthContext" */

//Comments are for firebase user database implementation

const Search = () => {
    /* const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const handleSearch = async ()=>{
        const q = query(
            collection(db, "users"),
            where("displayName", "==" , username)
        );

        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        }
        catch(err){
            setErr(true)
        }
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId = 
            currentUser.uid > user.uid 
                ? currentUser.uid + user.uid 
                : user.uid + currentUser.uid
        try {
            const res = await getDoc(doc(db,"chats",combinedId))

            if (!res.exists()){
                //create a chat in chats collection
                await setDoc(doc,(db,"chats",combinedId), { messages: [] })

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid),{
                    [combinedId+".userInfo"]: {
                        uid:user.uid,
                        displayeName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "userChats", user.uid),{
                    [combinedId+".userInfo"]: {
                        uid:currentUser.uid,
                        displayeName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                });
            }
        }catch (err){
    }
        

        //create user chats
    } */
    return(
        <div className='search'>
            <div className='searchForm'>
                <input 
                type="text" 
                placeholder='Find a user' 
                /* onKeyDown={handleKey} 
                onChange={e=>setUsername(e.target.value)} */
                />
            </div>
            {/* {err && <span>User not found!</span>} */}
            {/* {user &&  */}<div className='userChat' /* onClick={handleSelect} */>
                <img src = /*user.photoURL*/"https://th.bing.com/th/id/OIP.t25yBgPJMNShLkfpEI61ngHaH9?w=186&h=200&c=7&r=0&o=5&pid=1.7"/>
                <div className="userChatInfo">
                    <span>{/*{user.displayName}*/}Jane</span>
                </div>
            </div>{/* } */}
        </div>
    )
}

export default Search
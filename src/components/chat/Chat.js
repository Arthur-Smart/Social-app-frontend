import './chat.css';
import React, {useContext, useRef, useState, useEffect} from 'react'
import {ChatEngine} from 'react-chat-engine'
import { Context } from '../context/Context';
import axios from 'axios' 

function Chat() {
    const [loading, setLoading] = useState(true);
    const PF = 'https://media-app2.herokuapp.com/images/'
    const {user} = useContext(Context);
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], 'user.profilePic', {type:'image/jpeg'}) 
    }
    useEffect(() => {
     axios.get('https://api.chatengine.io/users/me', {
         headers: {
             "project-id":"88828b6a-2083-47f3-abfb-57632a886fd4",
             "user-name": user?.email,
             "user-secret": user?.uid
         }
     }).then(() => {
         setLoading(false)
     }).catch(()=> {
         let formdata =  new FormData();
         formdata.append('email', user?.email);
         formdata.append('username', user?.username);
         formdata.append('secret', user?.uid);

         getFile(user.photoUrl)
         .then((avatar) => {
            formdata.append('avatar', avatar, avatar.name)
            axios.post('https://api.chatengine.io/users',
            formdata,
             {headers:{"private-key":"8a7763d0-3481-45a7-b3bb-ce48ac2d5796"}}
            ).then(() => {
                setLoading(false)
            }).catch((err) => console.log(err));
         });

     })
    },[user])
    if(!user  || loading) return '...loading';
  return(
       <div className='chats'>
         <div className='chat-bar'>
              <ChatEngine
                  height='calc(100vh - 60px)'
                  projectId='88828b6a-2083-47f3-abfb-57632a886fd4'
                  userName={user?.email}
                  userSecret={user?.uid}
            />
         </div>
  </div>
  );
}

export default Chat;

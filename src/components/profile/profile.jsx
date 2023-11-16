import React from 'react'
import SideBar from "../common/SideBar"
import Header from "./Header"
import {myInfo} from "../data/myinfo";
import MyPost from "../profile/MyPost"
const Profile = () => {
    return (
        <div style={{display:"flex",gap:"5vw"}}>
            <SideBar/>
            <div>
                <Header myInfo={myInfo}/> 
                <MyPost post={myInfo.posts}/>
            </div>
            
            
        </div>
    )
}

export default Profile
import React from "react";
import UserProfile from "widgets/UserProfile/UserProfile";
import { UserPageProps } from "features/Registration/Registration.inteface";

const UserPage:React.FC<UserPageProps> = ({user}) => {

    return (

        <div> 
             <UserProfile user={user}/>
              </div>
    )
}

export default UserPage
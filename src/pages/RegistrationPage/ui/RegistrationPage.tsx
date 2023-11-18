import React from "react";
import Registration from "features/Registration";
import { RegistrationProps } from "features/Registration/Registration.inteface";


const RegistrationPage: React.FC<RegistrationProps> = ({handleSignOut,user}) => {

    return (

        <div>
            <Registration handleSignOut={handleSignOut} user={user}/>
        </div>
    )
}

export default RegistrationPage
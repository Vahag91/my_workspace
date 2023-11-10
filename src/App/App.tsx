import React from "react"
import RegistrationPage from "../pages/RegistrationPage"
import UserPage from "../pages/UserPage"
import SideBar from "../widgets/SideBar"
import Header from "../widgets/Header"

const App: React.FC = () => {


    return (
        <div>
            <Header/>
            <RegistrationPage />
            {/* <UserPage/> */}
            {/* <SideBar/> */}
        
        </div>
    )
}


export default App


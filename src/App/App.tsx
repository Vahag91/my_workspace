import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "../widgets/Header"
import Loading from "../features/Loading"

const MainPage = lazy(() => import('../pages/MainPage'))
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'))
const WorkspacePage = lazy(() => import('../pages/WorkspacePage'))
const UserPage = lazy(() => import('../pages/UserPage'))



const App: React.FC = () => {


    return (
        <BrowserRouter>
         <Header />
            <div>
               <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/workspace" element={<WorkspacePage />} />
                    <Route path="/" element={<MainPage />} />

                </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}


export default App


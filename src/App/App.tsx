import React, { lazy, Suspense, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged, User, signOut } from "firebase/auth"
import Header from "widgets/Header"
import Loading from "features/Loading"
import { auth } from '../firebase'
import WelcomePage from "pages/WelcomePage"
import { useDispatch } from "react-redux"
import { setEmail, setUsername,setIsLogged } from "userSlice"
import { useSelector } from "react-redux"
import { RootState } from "store"
import BoardPage from "pages/BoardPage"


const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const WorkspacePage = lazy(() => import('pages/WorkspacePage'))
const UserPage = lazy(() => import('pages/UserPage'))






const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);


const isLogged = useSelector((state:RootState)=>{
    return state.user.isLogged
})



    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                dispatch(setEmail(currentUser.email))
                dispatch(setUsername(currentUser.displayName))
                dispatch(setIsLogged())
                
            }
            
        });
        return unsubscribe;
    }, [dispatch]);

    const handleSignOut = () => {
        signOut(auth).catch(err => console.log(err));
      
    };





    return (
        <BrowserRouter>
                    
           

            <div>
                <Suspense fallback={<Loading />}>
                    {isLogged ? (
                        <>
                           <Header handleSignOut={handleSignOut} user={user} />
                            <Routes>
                              <Route path="/board" element={<BoardPage />} />
                                <Route path="/user" element={<UserPage />} />
                                <Route path="/workspace" element={<WorkspacePage />} />
                                <Route path="/" element={<WelcomePage />} />
                            </Routes>
                            </>
                        ) : (
                            <Routes>
                                <Route path="/" element={<RegistrationPage />} />
                            </Routes>
                        )
                   
                    }
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;


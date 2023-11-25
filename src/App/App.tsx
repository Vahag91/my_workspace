import React, { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged} from "firebase/auth"
import { auth } from '../firebase'
import { setEmail, setUsername, setUserPhotoUrl } from "userSlice"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "store"

import BoardPage from "pages/BoardPage"
import WelcomePage from "pages/WelcomePage"
import Header from "widgetss/Header"
import Loading from "features/Loading"


const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const WorkspacePage = lazy(() => import('pages/WorkspacePage'))
const UserPage = lazy(() => import('pages/UserPage'))






const App: React.FC = () => {

    const isLogged = useSelector((state: RootState) => {
        return state.user.isLogged
    })



    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                dispatch(setEmail(currentUser.email))
                dispatch(setUsername(currentUser.displayName))
                dispatch(setUserPhotoUrl(currentUser.photoURL))
            }
        });
        return unsubscribe;
    }, [dispatch]);

    // const handleSignOut = () => {
    //     signOut(auth).catch(err => console.log(err));

    // };

    return (
        <BrowserRouter>
            <div>
                <Suspense fallback={<Loading />}>
                    {isLogged ? (
                        <>
                            <Header />
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
                    )}
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;


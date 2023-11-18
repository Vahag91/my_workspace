import React, { lazy, Suspense, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged, User, signOut } from "firebase/auth"

import Header from "widgets/Header"
import Loading from "features/Loading"
import { auth } from '../firebase'

const MainPage = lazy(() => import('pages/MainPage'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const WorkspacePage = lazy(() => import('pages/WorkspacePage'))
const UserPage = lazy(() => import('pages/UserPage'))






const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [authChecked, setAuthChecked] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setAuthChecked(true);
        });
        return unsubscribe;
    }, []);

    const handleSignOut = () => {
        signOut(auth).catch(err => console.log(err));
    };

    console.log(user);

    return (
        <BrowserRouter>
            <Header handleSignOut={handleSignOut} user={user}/>

            <div>
                <Suspense fallback={<Loading />}>
                    {authChecked ? (
                        user ? (
                            <Routes>
                                <Route path="/user" element={<UserPage user={user}/>}  />
                                <Route path="/workspace" element={<WorkspacePage />} />
                                <Route path="/" element={<MainPage />} />
                            </Routes>
                        ) : (
                            <Routes>
                                <Route path="/" element={<RegistrationPage handleSignOut={handleSignOut} user={user} />} />
                            </Routes>
                        )
                    ) : (
                        <Loading />
                    )}
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;


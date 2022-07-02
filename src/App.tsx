import React from 'react';
import './App.css';
import {Header} from './component/header/Header';
import {Routes, Route} from 'react-router-dom';
import {PATH} from "./bll/path";
import {Login} from "./component/login/Login";
import {NewPassword} from "./component/new-password/NewPassword";
import {NotFoundPage} from "./component/not-found-page/NotFoundPage";
import {PasswordRecovery} from "./component/password-recovery/PasswordRecovery";
import {Profile} from "./component/profile/Profile";
import {Registration} from "./component/registration/Registration";
import {Test} from "./component/test/Test";
import {Main} from "./component/main/Main";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>

                <Route path={PATH.main} element={<Main/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.NewPassword} element={<NewPassword/>}/>
                <Route path={PATH.notFoundPage} element={<NotFoundPage/>}/>
                <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.registration} element={<Registration/>}/>
                <Route path={PATH.test} element={<Test/>}/>


            </Routes>
        </div>
    );
}

export default App;

import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../bll/path";
import style from './Header.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <span>  <NavLink to={PATH.login} className={style.link}>Login</NavLink> </span>
            <span>  <NavLink to={PATH.registration} className={style.link}>Registration</NavLink> </span>
            <span>  <NavLink to={PATH.profile} className={style.link}>Profile</NavLink> </span>
            <span>  <NavLink to={PATH.notFoundPage} className={style.link}>Not Found</NavLink> </span>
            <span>  <NavLink to={PATH.passwordRecovery} className={style.link}>Password Recovery</NavLink> </span>
            <span>  <NavLink to={PATH.NewPassword} className={style.link}>New Password</NavLink> </span>
            <span>  <NavLink to={PATH.test} className={style.link}>Test</NavLink> </span>
        </div>
    );
};


import React from 'react';
import style from './UniversalButton.module.css'

type UniversalButtonType = {
    name?: string
    callBack?: () => void
}

export const UniversalButton = React.memo((props: UniversalButtonType) => {

    const onClickHandler = () => {
        props.callBack && props.callBack()
    }

    return (
        <button className={`${style.customBtn} ${style.btn}`} onClick={onClickHandler}>{props.name}</button>
    );
});


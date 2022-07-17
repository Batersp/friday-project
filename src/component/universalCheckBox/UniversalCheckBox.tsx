import React, {ChangeEvent} from 'react';
import style from './UniversalCheckBox.module.css'

type UniversalCheckBoxType = {
    value?: boolean
    callBack?: (newValue: boolean) => void
}

export const UniversalCheckBox = React.memo((props: UniversalCheckBoxType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack && props.callBack(e.currentTarget.checked)
    }

    return (
        <input
            className={style.checkbox}
            type="checkbox"
            checked={props.value}
            onChange={onChangeHandler}
        />
    );
});


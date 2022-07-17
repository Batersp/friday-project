import React, {ChangeEvent} from 'react';
import style from './UniversalInput.module.css'

type SuperInputType = {
    value?: string
    onChange?: (value: string) => void
}

export const UniversalInput = React.memo((props: SuperInputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.currentTarget.value)
    }

    return (
        <>
            <input
                type="text"
                className={style.input}
                value={props.value}
                onChange={onChangeHandler}
            />

        </>
    );
});

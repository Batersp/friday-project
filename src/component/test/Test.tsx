import React, {useState} from 'react';
import {UniversalInput} from "../universalInput/UniversalInput";
import {UniversalButton} from "../universalButton/UniversalButton";
import {UniversalCheckBox} from "../universalCheckBox/UniversalCheckBox";


export const Test = () => {
    const [text, setText] = useState('')
    const [check, setCheck] = useState(false)
    return (
        <div>
            <div>
                <UniversalInput value={text} onChange={setText} />
            </div>
            <div>
                <UniversalButton name={'test'}/>
            </div>
            <div>
                <UniversalCheckBox value={check} callBack={setCheck}/>
            </div>

        </div>
    );
};


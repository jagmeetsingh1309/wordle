import React from 'react';
import KeyboardCell from './KeyboardCell';

const KeyboardComponent = ({onClickHandler}) => {
    const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keys2 = ["A","S","D","F","G","H","J","K","L"];
    const keys3 = ["Z","X","C","V","B","N","M"];

    return (
        <div>
            <div className='line1'>
                { keys1.map(key => {
                    return <KeyboardCell onClickHandler={onClickHandler} val={key} />
                })}
            </div>
            <div className='line2'>
            { keys2.map(key => {
                    return <KeyboardCell onClickHandler={onClickHandler} val={key} />
                })}
            </div>
            <div className='line3'>
            { keys3.map(key => {
                    return <KeyboardCell onClickHandler={onClickHandler} val={key} />
                })}
            </div>
        </div>
    );

}

export default KeyboardComponent;
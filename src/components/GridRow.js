import React from 'react';
import GridCell from './GridCell';


const GridRow = props => {
    let gridRowList = [];
    for (let i = 0; i < props.wordLength; i++){
        gridRowList.push(<GridCell alphabetValue="A" />);
    }
    return (
        <div className="d-flex" style={{"maxWidth":"80%"}}>
            {gridRowList}
        </div>
    );
}

export default GridRow;
import React from 'react';

const GridCell = props => {
    return (
        <div className="card text-center m-1" style={{"width":"5rem", "height":"3rem" }}>
            <h3>{props.alphabetValue}</h3>
        </div>
    );
}

export default GridCell;
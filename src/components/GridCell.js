import React from 'react';

class GridCell extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "",
            alphabetValue: ""
        }
    }


    render = () => {
        return (
            <div className="card">
                <h1>{this.state.alphabetValue}</h1>
            </div>
        );
    }
}

export default GridCell;
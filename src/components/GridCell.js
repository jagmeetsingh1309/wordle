import React from 'react';

class GridCell extends React.Component {
    state = {
        alphabetValue: ''
    }

    handleCellUpdateValue = val => {
        this.setState({
            alphabetValue: val
        })
    }

    render = () => {
        return (
            <div className="card text-center" style={{margin:"3px","width":"4rem", "height":"3rem",borderWidth:'2px'}}>
                <h3>{this.state.alphabetValue}</h3>
            </div>
        );
    }
}

export default GridCell;
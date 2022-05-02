import React from 'react';

class GridCell extends React.Component {

    state = {
        alphabetValue: '',
        bgColor: 'white',
        textColor: 'black'
    }

    resetCellCurrentState = () => this.setState({
        alphabetValue: '',
        bgColor: 'white',
        textColor: 'black'
    });

    handleCellUpdateValue = val => this.setState({
        alphabetValue: val
    });

    handleUpdateColor = color => this.setState({
        ...this.state,
        bgColor: color,
        textColor: 'white'
    });

    render = () => {
        return (
            <div 
                className="card text-center" 
                style={{backgroundColor: this.state.bgColor, color: this.state.textColor,margin:"3px","width":"4rem", "height":"3rem",borderWidth:'2px'}}
            >
                <h3>{this.state.alphabetValue}</h3>
            </div>
        );
    }
}

export default GridCell;
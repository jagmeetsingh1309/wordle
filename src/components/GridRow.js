import React from 'react';
import GridCell from './GridCell';


class GridRow extends React.Component {
    
    gridCellList = [];
    gridCellRef = [];

    state = {
        currentGuess: ''
    }

    constructor(props){
        super(props);
        for (let i = 0; i < this.props.wordLength; i++){
            this.gridCellList.push(<GridCell ref={el => this.gridCellRef.push(el)} key={i} />);
        }
    }

    handleRowUpdate = (value, cellNumber) => {
        this.gridCellRef[cellNumber].handleCellUpdateValue(value.toUpperCase());
        if(value === ''){
            this.setState({
                currentGuess: this.state.currentGuess.slice(0,this.state.currentGuess.length-1)
            })
        } else {
            this.setState({
                currentGuess: this.state.currentGuess.concat(value)
            })
        }
        
    }

    returnCurrentGuess = () => this.state.currentGuess

    render = () => {
        return (
            <div className="d-flex" style={{"maxWidth":"80%"}}>
                {this.gridCellList}
            </div>
        );
    }
}

export default GridRow;
import React from 'react';
import GridCell from './GridCell';

import { COLOR_BLACK, COLOR_GREEN, COLOR_YELLOW } from "../Constants";

class GridRow extends React.Component {
    
    gridCellList = [];
    gridCellRef = [];

    state = {
        currentGuess: '',
        givenWord: 'apple'
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

    computeResult = () => {
        let { currentGuess,givenWord } = this.state;
        for(let i = 0; i < currentGuess.length; i++){
            if(givenWord.includes(currentGuess[i])){
                this.gridCellRef[i].handleUpdateColor(COLOR_YELLOW);
            } else {
                this.gridCellRef[i].handleUpdateColor(COLOR_BLACK);
            }
            if(currentGuess[i] === givenWord[i]){
                this.gridCellRef[i].handleUpdateColor(COLOR_GREEN);
            }
        }

    }

    render = () => {
        return (
            <div className="d-flex" style={{"maxWidth":"80%"}}>
                {this.gridCellList}
            </div>
        );
    }
}

export default GridRow;
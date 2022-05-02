import React from 'react';
import GridCell from './GridCell';

import { COLOR_BLACK, COLOR_GREEN, COLOR_YELLOW } from "../Utility/Constants";

class GridRow extends React.Component {
    
    gridCellList = [];
    gridCellRef = [];

    constructor(props){
        super(props);
        for (let i = 0; i < this.props.wordLength; i++){
            this.gridCellList.push(<GridCell ref={el => this.gridCellRef.push(el)} key={i} />);
        }
    }

    clearCurrentRow = () => {
        for(let i = 0; i < this.props.wordLength; i++){
            this.gridCellRef[i].resetCellCurrentState();
        }
    }

    handleRowUpdate = (value, cellNumber) => {
        this.gridCellRef[cellNumber].handleCellUpdateValue(value.toUpperCase());
    }

    computeResult = (currentWord,wordGuessed) => {
        for(let i = 0; i < wordGuessed.length; i++){
            if(currentWord.includes(wordGuessed[i])){
                this.gridCellRef[i].handleUpdateColor(COLOR_YELLOW);
            } else {
                this.gridCellRef[i].handleUpdateColor(COLOR_BLACK);
            }
            if(wordGuessed[i] === currentWord[i]){
                this.gridCellRef[i].handleUpdateColor(COLOR_GREEN);
            }
        }
        return wordGuessed === currentWord;
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
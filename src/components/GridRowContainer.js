import React from "react";
import GridRow from "./GridRow";

class GridRowContainer extends React.Component {
    
    gridRowList = [];
    gridRowRef = [];
    state = {
        currentRow: 0,
        currentCell: 0,
        wordLength:5
    }

    constructor(props) {
        super(props);
        for(let i = 0; i < this.props.guessCount; i++){
            this.gridRowList.push(
                <GridRow ref={el => this.gridRowRef.push(el)} key={i} wordLength={this.state.wordLength} />
            )
        }
    }

    handleKeyDown = event => {
        if(event.keyCode >= 65 && event.keyCode <= 90){
            // key is alphabet
            this.gridRowRef[this.state.currentRow].handleRowUpdate(event.key,this.state.currentCell);
            if(this.state.currentCell === this.state.wordLength-1){
                // Do nothing.
            } else {
                this.setState({
                    ...this.state,
                    currentCell: this.state.currentCell+1
                });
            }
        } else if(event.keyCode === 8){
            // key is backspace
            this.gridRowRef[this.state.currentRow].handleRowUpdate('',this.state.currentCell);
        }
        else if(event.keyCode === 13){
            // key is enter
            // 1. print the result of current word/row.
            console.log("current guess is: ", this.gridRowRef[this.state.currentRow].returnCurrentGuess());
            this.setState({
                ...this.state,
                currentCell: 0,
                currentRow: this.state.currentRow+1
            });
        }
    }

    componentDidMount = () => {     
        document.addEventListener("keydown",this.handleKeyDown);
    }
    
    render = () => {
        return (
            <div className="m-2">
                {this.gridRowList}
            </div>
        );
    }
}

export default GridRowContainer;
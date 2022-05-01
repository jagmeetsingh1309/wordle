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
            this.gridRowRef[this.state.currentRow].handleUpdate(event.key,this.state.currentCell);
            if(this.state.currentCell === this.state.wordLength-1){
                this.setState({
                    ...this.state,
                    currentCell: 0
                });
            } else {
                this.setState({
                    ...this.state,
                    currentCell: this.state.currentCell+1
                });
            }
        } else if(event.keyCode === 8){
            // key is backspace
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
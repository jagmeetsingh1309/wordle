import React from "react";
import GridRow from "./GridRow";

class GridRowContainer extends React.Component {

    state = {
        gridRowList: [],
        gridRowRef: [],
        currentRow: 0,
        currentCell: -1
    }

    componentDidMount = () => {     
        let { gridRowList,gridRowRef } = this.state;
        if(gridRowList.length === 0){
            for(let i = 0; i < this.props.guessCount; i++){
                gridRowList.push(
                    <GridRow
                        ref={el => gridRowRef.push(el)} 
                        key={i} 
                        wordLength={this.props.wordLength} 
                    />
                )
            }
        }
    }

    handleAlphabetValue = key => {
        let { gridRowRef,currentCell,currentRow } = this.state;
        if(currentCell < 4){
            gridRowRef[currentRow].handleRowUpdate(key,currentCell+1);
            this.setState({
                ...this.state,
                currentCell: currentCell+1
            });
            if(currentCell === 4){
                this.setState({
                    ...this.state,
                    currentCell: currentCell
                });
            }
        }
    }

    handleBackSpaceValue = () => {
        let { currentCell,currentRow,gridRowRef } = this.state;
        this.setState({
            ...this.state,
            currentCell: currentCell-1
        });
        gridRowRef[currentRow].handleRowUpdate('',currentCell);
    }

    handleEnterKey = (currentWord,wordGuessed) => {
        let { gridRowRef,currentRow } = this.state;
        let result = gridRowRef[currentRow].computeResult(currentWord,wordGuessed);
        if(result === false){
            this.setState({
                ...this.state,
                currentCell: -1,
                currentRow: currentRow+1
            });
        } 
    }

    resetContainer = () => {
        this.state.gridRowRef.forEach(gridRow => gridRow.clearCurrentRow());
        this.setState({
            ...this.state,
            currentCell: -1,
            currentRow: 0
        });
    }
    
    render = () => {
        return (
            <div className="m-2">
                {this.state.gridRowList}
            </div>
        );
    }
}

export default GridRowContainer;
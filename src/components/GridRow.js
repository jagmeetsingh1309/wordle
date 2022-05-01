import React from 'react';
import GridCell from './GridCell';


class GridRow extends React.Component {
    
    gridCellList = [];
    gridCellRef = [];

    constructor(props){
        super(props);
        for (let i = 0; i < this.props.wordLength; i++){
            this.gridCellList.push(<GridCell ref={el => this.gridCellRef.push(el)} key={i} />);
        }
    }

    handleUpdate(value, cellNumber){
        console.log("Handle update called for cellNumber:",cellNumber," with value: ", value);
        this.gridCellRef[cellNumber].handleCellUpdateValue(value.toUpperCase());
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
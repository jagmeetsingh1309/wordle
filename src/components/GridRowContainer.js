import React from "react";
import GridRow from "./GridRow";

const GridRowContainer = () => {
    return (
        <div>
            <GridRow wordLength={5} />
            <GridRow wordLength={5} />
            <GridRow wordLength={5} />
            <GridRow wordLength={5} />
            <GridRow wordLength={5} />
        </div>
    );
}

export default GridRowContainer;
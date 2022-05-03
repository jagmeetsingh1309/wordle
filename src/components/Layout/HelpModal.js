import React from "react";
import GridCell from "../Grid/GridCell";
import Modal from "react-bootstrap/Modal";
import { COLOR_GREEN,COLOR_YELLOW,COLOR_BLACK } from "../Utility/Constants";

const HelpModal = ({ showModal,toggleHelpModal }) => {
    const handleClose = () => toggleHelpModal();
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>How to Play</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Guess the WORDLE in six tries.
                    Each guess must be a valid five-letter word. Hit the enter button to submit.
                    After each guess, 
                    the color of the tiles will change to show how close your guess was to the word.
                </div>
                <div>
                    Examples<br />
                    <div className="d-flex">
                        <GridCell alphabetValue="W" bgColor={COLOR_GREEN} textColor="white" />
                        <GridCell alphabetValue="E" />
                        <GridCell alphabetValue="A" />
                        <GridCell alphabetValue="R" />
                        <GridCell alphabetValue="Y" />
                    </div>   
                    The letter W is in the word and in the correct spot.<br/>
                    <div className="d-flex">
                        <GridCell alphabetValue="P" />
                        <GridCell alphabetValue="I" bgColor={COLOR_YELLOW} textColor="white" />
                        <GridCell alphabetValue="L" />
                        <GridCell alphabetValue="L" />
                        <GridCell alphabetValue="S" />
                    </div>
                    The letter I is in the word but in the wrong spot.<br/>
                    <div className="d-flex">
                        <GridCell alphabetValue="V" />
                        <GridCell alphabetValue="A" />
                        <GridCell alphabetValue="G" />
                        <GridCell alphabetValue="U" bgColor={COLOR_BLACK} textColor="white"  />
                        <GridCell alphabetValue="E" />
                    </div>
                    The letter U is not in the word in any spot.
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default HelpModal;
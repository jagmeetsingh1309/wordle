import React from "react";
import { AiFillSetting } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FaChartBar } from 'react-icons/fa';

const Header = ({ toggleHelpModal }) => {
    return (
        <div className="p-2" style={{"borderBottom":"2px solid black"}}>
            <div className="d-flex justify-content-between align-items-center" >
                <AiFillQuestionCircle 
                    onClick={toggleHelpModal}
                    style={{"fontSize":"1.75rem",cursor:"pointer"}}
                />
                <h2 className="fw-bold">Wordle</h2>
                <div className="d-flex ">
                    <FaChartBar style={{"fontSize":"1.75rem",marginRight:"1rem",cursor:"pointer"}} />
                    <AiFillSetting style={{"fontSize":"1.75rem",cursor:"pointer"}} />
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
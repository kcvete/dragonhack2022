import { Button } from '@mui/material';
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, collection, query, where, getDocs, getDoc, orderBy } from "firebase/firestore";
import templateImage from '../../assets/template-image.png';
import { useNavigate } from 'react-router-dom';


function TaskDescription(props) {
    return (
        <div className="task-description">
            <div className="section-title">{props.title}</div>
            <div className="detail-points-row">
                <span className="points-number">{props.points}</span>
                <span> points</span>
            </div>
        </div>
    );
}

export default TaskDescription;

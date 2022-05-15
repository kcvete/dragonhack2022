import { Button } from '@mui/material';
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, collection, query, where, getDocs, getDoc, orderBy } from "firebase/firestore";
import templateImage from '../../assets/template-image.png';
import { useNavigate } from 'react-router-dom';


function TaskDescription(props) {
    const navigate = useNavigate();
    const [task, setTask] = React.useState([]);

    useEffect(() => {
        const db = getFirestore();

        async function getData() {
            const docRef = doc(db, "tasks", props.task);
            const taskTmp = await getDoc(docRef);
            const taskData = taskTmp.data();
            setTask(taskData)
            props.func(taskData)
        }
        getData();
    }, []);

    return (
        <div className="task-description">
            <div className="section-title">{task.title}</div>
            <div className="detail-points-row">
                <span className="points-number">{task.points}</span>
                <span> points</span>
            </div>
        </div>
    );
}

export default TaskDescription;

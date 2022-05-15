import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCapturer from '../ImageCapturer';
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import UsersDropdown from './usersDropdown';

import templateImage from '../../assets/template-image.png';

function TaskDetails() {
  const [age, setAge] = React.useState("");
  const [image, setImage] = React.useState("");
  const [user, setUser] = React.useState("");
  const { id } = useParams()

  const uploadToFirebase = async () => {
    console.log("uploading to firebase");
    // Get a database reference
    const db = getFirestore();
    const rndId = Math.floor(Math.random() * 1000000).toString();
    const ref_c = doc(db, "completed_tasks", rndId);
    await setDoc(ref_c, {
      tid: id,
      uid: user,
      image: image,
      timestamp: Date.now()
    });

    console.log(rndId)
  };

  const pull_data = (data) => {
    setImage(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

  const getUser = (data) => {
    setUser(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const taskImage = templateImage;

  return (
    <div className="task-details">
      <div className="section-title">Task title</div>
      <div className="detail-points-row">
        <span className="points-number">10</span>
        <span> points</span>
      </div>
      <UsersDropdown func={getUser}></UsersDropdown>
      <div className="large-image">
        <ImageCapturer func={pull_data} />
      </div>

      <div className="button-row">
        <Button onClick={uploadToFirebase} variant="contained">Continue</Button>
      </div>
    </div>
  );
}

export default TaskDetails;

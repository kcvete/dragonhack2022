import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCapturer from '../ImageCapturer';
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, collection, query, where, getDocs, getDoc, orderBy } from "firebase/firestore";
import UsersDropdown from './usersDropdown';
import TaskDescription from './task-description';

import templateImage from '../../assets/template-image.png';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function TaskDetails(props) {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [image, setImage] = React.useState("");
  const [user, setUser] = React.useState({});
  const { id } = useParams()


  const task = {
    points: localStorage.getItem("points"),
    title: localStorage.getItem("title"),
    id: localStorage.getItem("id")
  }

  // useEffect(() => {
  //   const db = getFirestore();

  //   async function getData() {
  //     const docRef = doc(db, "tasks", id);
  //     const taskTmp = await getDoc(docRef);
  //     const taskData = taskTmp.data();
  //     setTask(taskData)
  //   }
  //   getData();
  // }, []);


  const uploadToFirebase = async () => {
    console.log("uploading to firebase");
    // Get a database reference
    const db = getFirestore();
    const storage = getStorage();
    const ref_c = doc(db, "completed_tasks", Math.floor(Math.random() * 1000000).toString());
    try {
      await setDoc(ref_c, {
        tid: id,
        uid: user.id,
        image: image,
        timestamp: Date.now()
      });
      toast("Succesfully awarded points.");
      setTimeout(() => {
        navigate("/feed");
      }, 2000);

      const ref_user = doc(db, "users", user.id.toString());
      await setDoc(ref_user, {
        name: user.name,
        avatar: user.avatar,
        points: parseInt(user.points) + parseInt(task.points),
        redeemable: parseInt(user.redeemable) + parseInt(task.points)
      });

    } catch (error) {
      console.log('error: ', error);
      toast.error("Could not award points");
    }
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
      <TaskDescription title={task.title} points={task.points}></TaskDescription>
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

import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import ImageCapturer from '../ImageCapturer';
import { doc, setDoc, collection } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


import templateImage from '../../assets/template-image.png';



function TaskDetails() {
  const [age, setAge] = React.useState("");
  const [uid, setUid] = React.useState("");
  const [tid, setTid] = React.useState("");
  const [image, setImage] = React.useState("");

  const uploadToFirebase = async () => {
    console.log("uploading to firebase");
    // Get a database reference
    const db = getFirestore();
    const storage = getStorage();
    const ref_c = doc(db, "completed_tasks", Math.floor(Math.random() * 1000000).toString());
    await setDoc(ref_c, {
      tid: "5151515",
      uid: "5151515151",
      image: image
    });
};

  const pull_data = (data) => {
    setImage(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const people = [
    {
      name: "Kevin Cvetežar",
      image:
        "https://www.ikea.com/au/en/images/products/monstera-potted-plant-swiss-cheese-plant__0902106_pe640705_s5.jpg?f=s",
    },
    { name: "Matic Šincek", image: "" },
  ];

  const taskImage = templateImage;

  return (
    <div className="task-details">
      <div className="section-title">Task title</div>
      <div className="detail-points-row">
        <span className="points-number">10</span>
        <span> points</span>
      </div>
      <div className="label-row">
        <span className="form-label">Employee: </span>
        <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
          <Select
            id="demo-select-small"
            value={age}
            displayEmpty
            onChange={handleChange}
          >
            {people.map((element) => (
              <MenuItem value={element.name}>
                <div className="center-row">
                  <img className="avatar-icon" src={element.image} />
                  <div>{element.name}</div>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="large-image">
        <ImageCapturer  func={pull_data}/>
      </div>

      <div className="button-row">
        <Button   onClick={uploadToFirebase} variant="contained">Continue</Button>
      </div>
    </div>
  );
}

export default TaskDetails;

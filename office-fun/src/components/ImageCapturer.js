import React, { useState, useCallback, useMemo } from "react";
import ImageCapture from "react-image-data-capture";
import { getDatabase, ref, set } from "firebase/database";
import { doc, setDoc, collection } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

const ImageCapturer = (props) => {
  // Get a database reference
  const db = getFirestore();


  const [showImgCapture, setShowImgCapture] = useState(true);
  const config = useMemo(() => ({ video: true }), []);
  /*
    { video: true } - Default Camera View
    { video: { facingMode: environment } } - Back Camera
    { video: { facingMode: "user" } } - Front Camera
  */
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = async (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    // Unmount component to stop the video track and release camera
    setShowImgCapture(false);

    //Upload to Imgur and to firebase
    let data = {
      tid: props.tid,
      uid: props.uid,
      image: "test"
    };

    // Add a new document in collection "completed_tasks"
    // const res = await db.collection('completed_tasks').add(data);

    debugger
    // Add a new document in collection "cities"
    const ref = doc(db, "completed_tasks", "23728163");
    await setDoc(ref, {
      tid: props.tid,
      uid: props.uid,
      image: "test"
    });

    // set(ref(db, 'completed_tasks/id123'), {
    //   tid: props.tid,
    //   uid: props.uid,
    //   image: "test"
    // });
  };
  const onError = useCallback((error) => {
    console.log(error);
  }, []);

  // imgFile can be used as a file upload form submission
  const formData = new FormData();
  formData.append("file", imgFile);

  return (
    <>
      {showImgCapture && (
        <ImageCapture
          onCapture={onCapture}
          onError={onError}
          width={400}
          userMediaConfig={config}
        />
      )}
      {imgSrc && (
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      )}
    </>
  );
};

export default ImageCapturer;

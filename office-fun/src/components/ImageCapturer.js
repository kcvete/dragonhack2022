import React, { useState, useCallback, useMemo } from "react";
import ImageCapture from "react-image-data-capture";
import { doc, setDoc, collection } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageCapturer = (props) => {
  // Get a database reference
  const db = getFirestore();
  const storage = getStorage();

  const [showImgCapture, setShowImgCapture] = useState(true);
  const config = useMemo(() => ({ video: true }), []);
  /*
    { video: true } - Default Camera View
    { video: { facingMode: environment } } - Back Camera
    { video: { facingMode: "user" } } - Front Camera
  */
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [img, setImg] = useState(null);

  const onCapture = async (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    // Unmount component to stop the video track and release camera
    setShowImgCapture(false);

    const storageRef = ref(storage, 'some-child');

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, imageData.blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(ref(storage, 'some-child'))
        .then((url) => {
          console.log(url);
          setImg(url);
        })
    });

    //Upload to Imgur and to firebase
    let data = {
      tid: props.tid,
      uid: props.uid,
      image: "test"
    };
    // Add a new document in collection "cities"
    const ref_c = doc(db, "completed_tasks", "23728163");
    await setDoc(ref_c, {
      tid: props.tid,
      uid: props.uid,
      image: "test"
    });
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
          <img src={img} alt="stored-img" />
        </div>
      )}
    </>
  );
};

export default ImageCapturer;

import AwardCard from './awards';
import React, { useEffect, useState } from "react";
import { doc, setDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

function AwardsList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "rewards"), orderBy("points", "desc"));
    debugger
    async function getRows() {
      const querySnapshot = await getDocs(q)
      var results = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let data = doc.data();

        results.push({
          title: data.title,
          points: data.points,
          image: data.image,
          id: doc.id
        });
      });
      setRows(results);
    }

    getRows();
  }, []);

  return (
    <div>
      <div class="section-title">Award list</div>
      <div class="award-list">
        {rows.map((element) => (
          <AwardCard id={element.id} title={element.title} points={element.points} image={element.image}></AwardCard>
        ))}
      </div>
    </div>
  );
}

export default AwardsList;

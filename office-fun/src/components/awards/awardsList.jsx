import { collection, doc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import AwardCard from './awards';

function AwardsList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "rewards"), orderBy("points", "desc"));
    async function getRows() {
      const querySnapshot = await getDocs(q);
      var results = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let data = doc.data();

        results.push({
          title: data.title,
          points: data.points,
          image: data.image,
          id: doc.id,
        });
      });
      setRows(results);
    }

    getRows();
  }, []);

  return (
    <div>
      <div class="section-title">Award list</div>
      <div class="task-list">
        {rows.map((element) => (
          <AwardCard
            id={element.id}
            title={element.title}
            points={element.points}
            image={element.image}
          ></AwardCard>
        ))}
      </div>
    </div>
  );
}

export default AwardsList;

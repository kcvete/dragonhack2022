import './Profile.css';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Profile(props) {
  const [userEntity, setUserEntity] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(
      collection(db, "users"),
      where("name", "==", props.user.displayName)
    );

    async function getUser() {
      const querySnapshot = await getDocs(q);
      var result = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let data = doc.data();

        result = {
          id: doc.id,
          name: data.name,
          points: data.points,
          redeemable: data.redeemable,
          avatar: data.avatar,
        };
      });
      setUserEntity(result);
      localStorage.setItem("user-local", JSON.stringify(result));
    }

    getUser();
  }, []);

  return (
    <div>
      <div className="section-title">Profile</div>
      <div className="centered margin-top-20">
        <Avatar
          className="middle"
          alt="Remy Sharp"
          src={userEntity.avatar}
          sx={{ width: 180, height: 180 }}
        />

        <p className="name text-center">{userEntity.name}</p>
        <p className="text-points text-center">Software developer</p>
        <div className="profile-facts">
          <div className="fact">
            <div className="fact-title">Rank</div>
            <div className="class-description">1st</div>
          </div>
          <div className="fact">
            <div className="fact-title">Points</div>
            <div className="class-description">{userEntity.points}</div>
          </div>
          <div className="fact">
            <div className="fact-title">Redeemable</div>
            <div className="class-description">{userEntity.redeemable}</div>
          </div>
        </div>
        <div className="button-container">
          <NavLink className="normal-text-link" to={"../awards"}>
            <Button variant="contained">Redeem</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

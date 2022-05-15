import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from "react";
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";


function UsersDropdown(props) {
  const [age, setAge] = React.useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "users"), orderBy("points", "desc"));

    async function getRows() {
      getDocs(q).then((querySnapshot) => {
        var results = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          let data = doc.data();

          results.push({
            id: doc.id,
            name: data.name,
            points: data.points,
            avatar: data.avatar,
            redeemable: data.redeemable
          });
        });
        setPeople(results);
      });
    }

    getRows();
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);

    props.func(event.target.value)
  };

  return (
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
            <MenuItem value={element.id}>
              <div className="center-row">
                <img className="avatar-icon" src={element.avatar} />
                <div>{element.name}</div>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default UsersDropdown;

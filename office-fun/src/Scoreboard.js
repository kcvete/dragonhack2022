import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import CardHeader from "@mui/material/CardHeader";

import { doc, setDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "users"), orderBy("points", "desc"));

    async function getRows() {
      const querySnapshot = await getDocs(q)
      var results = [];
      var i = 1;
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let data = doc.data();

        results.push({
          rank: i,
          name: data.name,
          points: data.points,
          redeemable: data.redeemable,
          avatar: data.avatar
        });
        i++;
      });
      setRows(results);
    }

    getRows();
  }, []);

  const columns = [
    { id: "name", label: "Mesto", minWidth: 170 },
    {
      id: "slika",
      label: "",
      minWidth: 170,
      align: "left",
    },
    { id: "code", label: "Sodelavec", minWidth: 100 },
    {
      id: "population",
      label: "Točke",
      minWidth: 170,
      align: "left",
    },
  ];

  // const rows = [
  //   { rank: 1, name: "Matic", points: "12" },
  //   { rank: 2, name: "Kevin", points: "12" },
  //   { rank: 3, name: "Matic", points: "12" },
  //   { rank: 4, name: "Kevin", points: "12" },
  // ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.3rem" }}>RANK</TableCell>
              <TableCell style={{ fontSize: "1.3rem" }}>NAME</TableCell>
              <TableCell style={{ fontSize: "1.3rem" }}>POINTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow style={{ fontSize: "4rem" }} key={row.name}>
                <TableCell align="left">{row.rank}</TableCell>
                <TableCell>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt="Remy Sharp"
                        src={row.avatar}
                      />
                    }
                    title={row.name}
                  />
                </TableCell>
                {/*<TableCell align="right">{row.name}</TableCell>*/}
                <TableCell align="left">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

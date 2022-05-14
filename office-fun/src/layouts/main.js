import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Home from '../components/home/Home';
import ImageCapturer from '../components/ImageCapturer';
import Navbar from '../components/navbar/navbar';
import TasksList from '../components/tasks/tasksList';
import Profile from '../components/user/profile';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function Main({ user }) {
  console.log("hello world");
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" ref={ref} element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/image" element={<ImageCapturer />} />
            <Route path="/tasks" element={<TasksList />} />
            <Route path="/task-details/:id" element={<TasksList />} />
          </Routes>
        </div>
      </List>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Navbar></Navbar>
      </Paper>
    </Box>
  );
}

export default Main;

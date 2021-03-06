import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../components/about/About';
import AwardsDetails from '../components/awards/awards-details';
import AwardsList from '../components/awards/awardsList';
import Contact from '../components/contact/Contact';
import ImageCapturer from '../components/ImageCapturer';
import Navbar from '../components/navbar/navbar';
import TaskDetails from '../components/tasks/tasks-details';
import TasksList from '../components/tasks/tasksList';
import Profile from '../Profile';
import Scoreboard from '../Scoreboard';
import Feed from '../components/feed/feed';

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
      <List className="no-padding">
        <div className="content">
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/contact" ref={ref} element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/image" element={<ImageCapturer />} />
            <Route path="/awards" element={<AwardsList />} />
            <Route path="/award-details/:id" element={<AwardsDetails />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/tasks" element={<TasksList />} />
            <Route path="/task-details/:id" element={<TaskDetails />} />
            <Route path="/feed/" element={<Feed />} />
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

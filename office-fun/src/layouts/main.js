import Navbar from '../components/navbar/navbar'
import React from 'react';
import { makeStyles } from '@mui/styles';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import Profile from '../components/user/profile'
import ImageCapturer from '../components/ImageCapturer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

function Main({ user }) {
    console.log("hello world")
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
                    </Routes>
                </div>
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <Navbar></Navbar>
            </Paper>
        </Box>
    )
}

export default Main;
import Navbar from '../components/navbar/navbar'
import  { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import Profile from '../components/user/profile'
import Container from '@material-ui/core/Container';

function Main() {
    console.log("hello world")
    return (
    
        <Container>
                <div className="content">       
                <Routes>
                    <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/profile/:username" element={<Profile/>}/> 
  
                    </Routes>
                </div>
                <Navbar></Navbar>
        </Container>
    )
}

export default Main;
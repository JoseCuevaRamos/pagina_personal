import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
//import SnowParticles from "./components/Snow/SnowParticles.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(0, 50, 150, 0.3) 0%, rgba(0, 30, 100, 0) 50%),
            linear-gradient(141.27deg, rgba(0, 40, 120, 0) 50%, rgba(0, 40, 120, 0.3) 100%);


`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        
        <Body>

          <HeroSection />

          <Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>
          <Wrapper>
            <Education />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }

        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

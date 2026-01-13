// src/Home.js
import React from 'react';
import '../assets/css/Home.css';
import Button from './Button';
import About from './About';
import Projects from './Projects';
import Process from './Process';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
    return (
        <>
            <section className="hero" id='home'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="myInfo">
                                <small>My Name</small>
                                <h1>Hay! I’m Name <br /> <span>I'm a FrontEnd Developer</span></h1>
                                <p>I am passionate about creating engaging and user-friendly web experiences. I enjoy working on projects that challenge me and help me grow my skills. I am dedicated to delivering high-quality work and continuously improving through collaboration and learning.</p>
                                <div className="infoBtn">
                                    <Button text="📄 Download CV" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="figure">
                                <img src="../images/home-banner.png" className='img-fluid' alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About />
            <Projects />
            <Process />
            <Contact />
            <Footer />
        </>
    );
};
export default Home;

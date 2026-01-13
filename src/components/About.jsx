import React from 'react'
import '../assets/css/About.css';
import Button from './Button';

const About = () => {
    return (
        <>
            <section className="about" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <figure><img src="../images/aboutImg.png" className='img-fluid' alt="aboutme" /></figure>
                        </div>
                        <div className="col-lg-7">
                            <div className="abCon">
                                <small>About Me</small>
                                <h2>I am currently available for<br /><span>UI/UX development projects.</span></h2>
                                <p>With a strong focus on user-centered design, I strive to create intuitive and visually appealing interfaces that enhance user experience. I am committed to delivering solutions that meet both business goals and user needs with precision and creativity.</p>
                                <div className="infoBtn">
                                    <Button text="📄 Download CV" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
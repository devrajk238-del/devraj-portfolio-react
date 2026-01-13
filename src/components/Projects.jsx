// src/Projects.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Projects.css';
import Button from '../components/Button';

const projectsAdd = [
    { id: 1, imgSrc: "../images/bmu.jpg", altText: "bmu" },
    { id: 2, imgSrc: "../images/plasindia.jpg", altText: "another" },
    { id: 3, imgSrc: "../images/aeukappolo.jpg", altText: "sample" },
    { id: 4, imgSrc: "../images/wikati.jpg", altText: "wikati" },
    { id: 5, imgSrc: "../images/bits.jpg", altText: "bits pilani" },
    { id: 6, imgSrc: "../images/namtech.jpg", altText: "namtech" },
    { id: 7, imgSrc: "../images/headstart.jpg", altText: "headstart" },
];

const ProjectCard = ({ imgSrc, altText }) => {
    return (
        <motion.div 
            className="proCon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <figure>
                <img src={imgSrc} className="img-fluid" alt={altText} />
            </figure>
            <div className="proText">
                <Button text="View live website" />
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = (e) => {
        console.log('Explore More button clicked');
        setVisibleCount(prevCount => prevCount + 3);
    };

    const sortedProjects = [...projectsAdd].reverse();
    const visibleProjects = sortedProjects.slice(0, visibleCount);
    const isAllVisible = visibleCount >= sortedProjects.length;

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="heading">
                    <small>Projects</small>
                    <h2>Recent <span>Projects</span></h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="proAll">
                            <AnimatePresence>
                                {visibleProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        imgSrc={project.imgSrc}
                                        altText={project.altText}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {!isAllVisible && (
                            <div className="proBtn">
                                <Button className="myBtn" text="Explore More" onClick={handleShowMore} /> 
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

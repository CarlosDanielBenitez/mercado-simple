import React from 'react';
import './style.css';


const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-image">
                    <img src='../../src/img/robot-waving.jpg' alt="Acerca de" />
                </div>
                <div className="about-info">
                    <p>
                        Welcome to our modern app! Here you can find everything you need to improve your digital experience.
                        Our app offers a wide range of functions and features that will amaze you.
                    </p>
                    <p>
                        We are committed to providing the best experience for our users. We are always working to improve and offer new and exciting features.
                    </p>
                    <p>
                        We hope you enjoy our app as much as we enjoyed creating it!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Footer from './Footer';

const Landing = () => {


    return (
        <div className="bg-black min-h-screen">
            <Navbar />

            {/* First Section - Hyperspeed with Text Overlay */}
            <section className="w-full h-screen">
                <Hero/>
            </section>
            
            <section className="w-full h-screen">
                <About/>
            </section>
            
            <section className="w-full h-screen">
                <Services/>
            </section>
            
            <section className="">
                <Footer/>
            </section>

            {/* Second Section
            <AboutUs/>

            {/* Second Section */}
            {/* <Services/> */}

            {/* Footer Section */}
            {/* <Footer/> */}
        </div>
    );
};

export default Landing;
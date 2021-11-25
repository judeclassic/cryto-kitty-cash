import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'

import Navbar from '../../components/home/Navbar'
import Header from '../../components/home/Header'
import Features from '../../components/home/Features'
// import More from '../../components/home/More'
import Chart from '../../components/home/Chart'
import Token from '../../components/home/Token'
import Distribute from '../../components/home/Distribute'
import Next from '../../components/home/Next'
import Roadmap from '../../components/home/Roadmap'
import Tele from '../../components/home/Tele'
import Footer from '../../components/home/Footer'


export const Home = () => {

    let container = useRef(null);
    
       useEffect(() => {
          
          new LocomotiveScroll({
             el: container,
             smooth: true,
             lerp: .06,
             multiplier: .65,
             reloadOnContextChange: true,
             inertia: 0.3
          });
    
       }, []);

    return (
        <div ref={el => container = el} className="container">
        
        <Navbar />
            
            <main>
                <Header /> 
                <Features /> 
                <Chart /> 
                <Token /> 
                <Next /> 
                <Distribute /> 
                <Roadmap /> 
                <Tele /> 
            </main>
            
        <Footer />  
        
        </div>
    )
}


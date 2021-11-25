import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'

import Navbar from '../../components/presale/Navbar'
import Tele from '../../components/home/Tele'
import Footer from '../../components/home/Footer'

import logo from "../../assets/svg/coin-norm.png";

import styles from "../../styles/presale/presale.module.scss";

export const Presale = () => {

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

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('December 25, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current)
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    // componentDidMount style
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        };
    });

    return (
        <div ref={el => container = el} className="container">
        
        <Navbar />
            
            <main>
                <section className={styles.presale}>
                    <div className={styles.wrapper}>
                        <img src={logo} className={styles.logo} alt="" />
                        <div className={styles.script}>
                            <h1>Badger Inu</h1>
                            <p>A deflationary meme token for decentralized finance.</p>
                        </div>
                        
                        <div className={styles.wrap}>
                            <div className={styles.item_r}>
                                <h1>{timerDays}</h1>
                                <p><small>days</small></p>
                            </div>

                            <div className={styles.item_r}>
                                <h1>{timerHours}</h1>
                                <p><small>hours</small></p>
                            </div>

                            <div className={styles.item_r}>
                                <h1>{timerMinutes}</h1>
                                <p><small>minutes</small></p>
                            </div>

                            <div className={styles.item_r}>
                                <h1>{timerSeconds}</h1>
                                <p><small>seconds</small></p>
                            </div>
                        </div>

                        <div className={styles.detail}>
                           <p>Please click the button to get more info about Badger Inu's presale <span>$BDG</span>.</p>
                        </div>

                        <div className={styles.paper}>
                            <a href="https://drive.google.com/file/d/1IC2QConAzAnvwgn8tvRWPo0Ynp8Lngje/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.a}>
                                <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"></path></svg>
                                <span>Presale</span>
                            </a>
                        </div>

                        <div className={styles.tele}>
                            <Tele />
                        </div>                        
                    </div>

                    <div className={styles.presale_i}>                         
                        <div className={styles.presale_w}>
                            <div className={styles.close}>
                                <button> 
                                    close
                                </button>         
                            </div> 
                            <div className={styles.pre_pre}>
                                               
                            </div>                   
                        </div>                     
                    </div>
                </section>
            </main>
            
        <Footer />  
        
        </div>
    )
}


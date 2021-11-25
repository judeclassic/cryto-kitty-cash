import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'

import Navbar from '../../components/general/Navbar'
import Footer from '../../components/home/Footer'

import styles from "../../styles/faq/faq.module.scss";

export const Faq = () => {

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
                <header className={styles.header}>
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </header>
                
                <section className={styles.faqSect}>
                    <div className={styles.faqWrap}>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Intoduction to Badger Inu?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    Badger Inu is a decentralized meme token that is forged from the promise of fostering an independent crypto community where holders from any part of the globe can trade crypto currency without restriction.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    Whats the token symbol?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    $BDG
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    What is $BDG's main objective?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                    The Badger Inu token is aimed at delivering 3 core values: Decentralization —  Passive Income — Charity. 
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's contract address
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                   0x9cbada2ab62cf64602a819812ca32c<br/>46e3c9a553
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    What is BDG's tagline?
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                <p>
                                   A deflationary meme token for decentralized finance.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Decentralized Exchange
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                    BDG DEX will operate in a decentralized manner, it will enable users to buy and sell cryptocurrencies with one another without any interference from a third party.
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Decentralized P2P Marketplace (fiat)
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                    Decentralized p2p marketplace that will enable users to buy and sell cryptocurrencies using FIAT with one another without the need of brokers or risking too much exposure of personal information. User can start trading immediately they connect their wallet. 
                                </p>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Decentralized Email Service Provider
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     BDGmail is a secure and easy-to-use online email service where the user accounts will stay encrypted and anonymous.
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Decentralized Network Marketing
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     Network marketing will be used by SHT to improve both offline and online presence, reputation and adoption. This will rely on individuals harnessing their personal networks to grow BDG whereby earning reward in return.
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Decentralized Ads Market Place
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     BDG ADS is a marketplace where ad networks and exchanges combine with advertisers and publishers of all sizes to create an exchange for all ads.
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Play To Earn Games
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     Players of BDG games can earn rewards in SHT, this comprises of both free and paid tournament, in-game token rewards, sports tournaments like soccer leagues etc.
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Betting and Lottery Site
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     This is an additional feature in BDG ecosystem to give BDG token holders the opportunity to earn massively by staking their BDG token.
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - ShillersNet
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     Shillersnet is an ads platform by BDG that will reward BDG token holders with more tokens for shilling or posting about an advertiser product. BDG will serve like a broker or marketplace connecting the advertisers and the publisher
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - NFT Marketplace
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     Merchandise like shirts, caps, trousers, etc. will be available for purchase to the public on the online store, apart from SHT merchandise other crypto related materials like mining rigs, crypto textbooks, educational contents, trading bots, arbitrage bots etc. will also be available.
                                </p>
                            </div>
                        </div>                                   

                        <div className={styles.faq}>
                            <div className={styles.faqHead}>
                                <h4>
                                    BDG's Ecosystem - Online Store and Merchandize
                                </h4>

                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>

                            <div className={styles.faqPara}>
                                 <p>
                                     You need to link a bank account to your profile to accept bookings. We'll deposit into that bank account weekly.
                                </p>
                            </div>
                        </div>                                   

                    </div>
                </section>

                <section className={styles.contact}>
                    <h1>
                        Would you need any further help?
                    </h1>

                    <a href="mailto:hello@tryklas.com">
                        contact support
                    </a>
                </section>

            </main>
            
        <Footer />  
        
        </div>
    )
}


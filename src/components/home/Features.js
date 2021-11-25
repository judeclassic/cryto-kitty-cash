import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/features.module.scss";


class Features extends Component{   

    render(){
        return(
            <div>
                <section className={styles.why_us}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                $BDG Ecosystem
                            </div>
                            
                            <div className={styles.wrap}>
                                <div className={styles.ft_wrap}> 
                                    
                                    <a>Decentralized Exchange</a>
                                </div> 
                                
                                <div className={styles.ft_wrap}> 
                                
                                    <a>Decentralized P2P Marketplace (fiat)</a>
                                </div> 

                                <div className={styles.ft_wrap}>
                                
                                    <a>Decentralized Email Service Provider</a>                                
                                </div> 
                                <div className={styles.ft_wrap}>
                                
                                    <a>Decentralized Network Marketing</a>                                
                                </div> 
                                
                                <div className={styles.ft_wrap}> 
                                    
                                    <a>Decentralized Ads Market Place</a>                               
                                </div> 
                                
                                <div className={styles.ft_wrap}> 
                                
                                    <a>Play To Earn Games</a>                               
                                </div> 
                                
                                <div className={styles.ft_wrap}> 
                                
                                    <a>Betting and Lottery Site</a>                               
                                </div> 
                                <div className={styles.ft_wrap}>  
                                
                                    <a>ShillersNet</a>                              
                                </div> 
                                <div className={styles.ft_wrap}>   
                                
                                    <a>NFT Marketplace</a>                             
                                </div> 
                                
                                <div className={styles.ft_wrap}>
                                
                                    <a>Online Store and Merchandize</a>                                
                                </div> 
                            </div>                            
                        </div> 
                    </section>
            </div>
        );
    }
}

export default Features;
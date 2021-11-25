import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/roadmap.module.scss";


class Roadmap extends Component{   

    render(){
        return(
            <div>
                <section className={styles.roadmap} id="roadmap">
                    <div className={styles.wrapper}>
                        <div className={styles._tag}>
                            BDG Roadmap 🛣️
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.road3}>
                                <div className={styles.rd}>
                                    phase-1 
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Core developers team and other units</p>
                                        <p>Website launch</p>
                                        <p>Building the ecosystem</p>
                                        <p>Public sale</p>
                                        <p>PancakeSwap listing</p>
                                        <p>Lock liquidity for 5 years</p> 
                                    </div>
                                </div>
                                <div className={styles.rd}>
                                    phase-2 
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Marketing campaign</p>
                                        <p>More dex listing</p>
                                    </div>
                                </div>
                                <div className={styles.rd}>
                                    phase-3 
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Marketing campaign</p>
                                        <p>Decentralized exchange</p>
                                        <p>Decentralized P2P exchnage</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.road2}>
                                <div className={styles.rd}>
                                    phase-4
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Marketing campaign</p>
                                        <p>Decentalized email system</p>
                                        <p>Shillers-network</p>
                                    </div>
                                </div>
                                <div className={styles.rd}>
                                    phase-5 
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Marketing campaign</p>
                                        <p>BDG market place</p>
                                        <p>BDG moonboxes</p>
                                    </div>
                                </div>
                                <div className={styles.rd}>
                                    phase-6 
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Marketing campaign</p>
                                        <p>Play to earn games</p>
                                        <p>Lottery</p>
                                        <p>Betting site</p> 
                                    </div>
                                </div>
                            </div>

                            <div className={styles.road1}>
                                <div className={styles.rd}>
                                    phase-7 
                                    <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
                                    
                                    <div className={styles.drop}>
                                        <p>Marketing campaign</p>
                                        <p>BDG merchandize</p>
                                        <p>BDG online-store</p>
                                        <p>BDG ads network</p>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Roadmap;
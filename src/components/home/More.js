import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/more.module.scss";


class More extends Component{   

    render(){
        return(
            <div>
                <section className={styles.more}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                More on BDG's Ecosystem
                            </div>
                            <div className={styles.card_wrap}>
                                <div className={styles.card}>
                                    <div className={styles.after}>                                    
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" class="svg-inline--fa fa-lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 223.1L368 224V144c0-79.41-64.59-144-144-144S80 64.59 80 144V224L64 223.1c-35.35 0-64 28.65-64 64v160c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64v-160C448 252.7 419.3 223.1 384 223.1zM144 144C144 99.88 179.9 64 224 64s80 35.88 80 80V224h-160V144z"></path></svg>
                                    </div>

                                    <div className={styles.content}>
                                        <div className={styles.title}>
                                            LOCKED LP
                                        </div>
                                        <div className={styles.desc}>                                         
                                            To earn more trust from the community Standard Hashrate Token has burnt its liquidity pool for 5 years so your fund are SAFU.
                                        </div>
                                    </div>
                                </div> 
                                <div className={styles.card}>
                                    <div className={styles.after}>                                    
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gripfire" class="svg-inline--fa fa-gripfire" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4 .4 3.3 .6 6.7 .6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path></svg>
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <div className={styles.title}>
                                            AUTOMATIC BURN
                                        </div>
                                    <div className={styles.desc}>
                                            Every transaction contribute to the automatic reduction of the total supply of BDG whereby creating a continuous rising price floor                                            
                                        </div>
                                    </div>
                                </div> 
                                <div className={styles.card}>
                                    <div className={styles.after}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M111.1 304C124.5 316.5 144.8 316.5 157.2 304L208 253.3l57.38 57.38C271.6 316.9 279.8 320 288 320s16.38-3.125 22.62-9.375l153.4-153.4c12.49-12.49 12.49-32.75 .0008-45.25c-12.5-12.5-32.76-12.5-45.25-.0018L288 242.8L230.6 185.4c-12.5-12.5-32.75-12.5-45.25 0L111.1 258.8C99.5 271.2 99.5 291.5 111.1 304zM480 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.6 14.4 32 32 32h448C497.7 480 512 465.7 512 448S497.7 416 480 416z"></path></svg>                                       
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <div className={styles.title}>
                                            RFI STATIC REWARDS
                                        </div>
                                        <div className={styles.desc}>                                         
                                            Holders earn passive reward through static reflection as they watch their BDG grow indefinitely.  
                                        </div>
                                    </div>
                                </div> 
                                <div className={styles.card}>
                                    <div className={styles.after}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M111.1 304C124.5 316.5 144.8 316.5 157.2 304L208 253.3l57.38 57.38C271.6 316.9 279.8 320 288 320s16.38-3.125 22.62-9.375l153.4-153.4c12.49-12.49 12.49-32.75 .0008-45.25c-12.5-12.5-32.76-12.5-45.25-.0018L288 242.8L230.6 185.4c-12.5-12.5-32.75-12.5-45.25 0L111.1 258.8C99.5 271.2 99.5 291.5 111.1 304zM480 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.6 14.4 32 32 32h448C497.7 480 512 465.7 512 448S497.7 416 480 416z"></path></svg>                                       
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <div className={styles.title}>
                                            RFI STATIC REWARDS
                                        </div>
                                        <div className={styles.desc}>                                         
                                            Holders earn passive reward through static reflection as they watch their BDG grow indefinitely.  
                                        </div>
                                    </div>
                                </div> 
                                
                                <div className={styles.card}>
                                    <div className={styles.after}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M111.1 304C124.5 316.5 144.8 316.5 157.2 304L208 253.3l57.38 57.38C271.6 316.9 279.8 320 288 320s16.38-3.125 22.62-9.375l153.4-153.4c12.49-12.49 12.49-32.75 .0008-45.25c-12.5-12.5-32.76-12.5-45.25-.0018L288 242.8L230.6 185.4c-12.5-12.5-32.75-12.5-45.25 0L111.1 258.8C99.5 271.2 99.5 291.5 111.1 304zM480 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.6 14.4 32 32 32h448C497.7 480 512 465.7 512 448S497.7 416 480 416z"></path></svg>                                       
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <div className={styles.title}>
                                            RFI STATIC REWARDS
                                        </div>
                                        <div className={styles.desc}>                                         
                                            Holders earn passive reward through static reflection as they watch their BDG grow indefinitely.  
                                        </div>
                                    </div>
                                </div>
                                 
                                <div className={styles.card}>
                                    <div className={styles.after}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M111.1 304C124.5 316.5 144.8 316.5 157.2 304L208 253.3l57.38 57.38C271.6 316.9 279.8 320 288 320s16.38-3.125 22.62-9.375l153.4-153.4c12.49-12.49 12.49-32.75 .0008-45.25c-12.5-12.5-32.76-12.5-45.25-.0018L288 242.8L230.6 185.4c-12.5-12.5-32.75-12.5-45.25 0L111.1 258.8C99.5 271.2 99.5 291.5 111.1 304zM480 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.6 14.4 32 32 32h448C497.7 480 512 465.7 512 448S497.7 416 480 416z"></path></svg>                                       
                                    </div>
                                    
                                    <div className={styles.content}>
                                        <div className={styles.title}>
                                            RFI STATIC REWARDS
                                        </div>
                                        <div className={styles.desc}>                                         
                                            Holders earn passive reward through static reflection as they watch their BDG grow indefinitely.  
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

export default More;
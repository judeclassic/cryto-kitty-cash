import React, { Component } from "react"
import { Link } from 'react-router-dom'

import styles from "../styles/home/chart.module.scss";

import pcoin from "../../assets/svg/pcoin.png";
import bsc from "../../assets/svg/bsc.png";

class Chart extends Component{   

    render(){
        return(
            <div>
                <section className={styles.chart}>
                    <div className={styles.wrapper}>
                        <div className={styles.box}>
                            <div className={styles.box}>
                               <img src={bsc} alt="" />
                            </div>
                            <div className={styles.btn}>
                               <Link to="#!" className={styles.a}>
                                    <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" class="svg-inline--fa fa-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"></path></svg>
                                    <span>BSc</span>
                                </Link>
                            </div>
                        </div>
                        
                        <div className={styles.box}>
                            <div className={styles.box}>
                               <img src={pcoin} alt="" />
                            </div>
                            <div className={styles.btn}>
                               <Link to="#!" className={styles.a}>
                                    <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" class="svg-inline--fa fa-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"></path></svg>
                                    <span>poocoin</span>
                                </Link>
                            </div>
                        </div>
                    </div> 
                </section>
            </div>
        );
    }
}

export default Chart;



{/*<div className={styles.wrapper}>
                        <div className={styles.btns}>
                            <button><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-contract" class="svg-inline--fa fa-file-contract" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM304 384c8.875 0 16 7.125 16 16S312.9 416 304 416h-47.25c-16.38 0-31.25-9.125-38.63-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.75 15.38C187.6 412.6 181.1 416 176 416H174.9c-6.5-.5-12-4.75-14-11L144 354.6L133.4 386.5C127.5 404.1 111 416 92.38 416H80C71.13 416 64 408.9 64 400S71.13 384 80 384h12.38c4.875 0 9.125-3.125 10.62-7.625l18.25-54.63C124.5 311.9 133.6 305.3 144 305.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12c2 4 6 6.5 10.12 6.5H304z"></path></svg>bsc scan</button>
                            <button><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-area" class="svg-inline--fa fa-chart-area" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.67 14.33 32 32 32h448C497.7 480 512 465.7 512 448S497.7 416 480 416zM480 236.1c0-7.773-2.828-15.28-7.961-21.12l-70.01-79.68c-9.562-10.88-26.5-10.88-36.06 0l-43.38 49.37l-63.78-80.44c-9.609-12.12-28-12.12-37.61 0L134.9 213.9C130.4 219.5 128 226.6 128 233.8V352h352V236.1z"></path></svg>poocoin chart</button>
                        </div> 

                        <div className={styles.img}>
                            <img src={coin} alt="" />
                        </div> 
</div> */}
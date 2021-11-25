import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/distribute.module.scss";


class Distribute extends Component{   

    render(){
        return(
            <div>
                <section className={styles.dist}>
                    <div className={styles.wrapper}>
                        <div className={styles._tag}>
                            Token Distribution 
                        </div>

                        <div className={styles.wrap}>
                            <div className={styles.dd}>
                                Presale 
                                <span>35%</span>
                            </div>

                            <div className={styles.dd}>
                                Liquidity 
                                <span>30%</span>
                            </div>

                            <div className={styles.dd}>
                                Marketing 
                                <span>10%</span>
                            </div>

                            <div className={styles.dd}>
                                Development 
                                <span>20%</span>
                            </div>

                            <div className={styles.dd}>
                                Dev allocation
                                <span>5%</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Distribute;
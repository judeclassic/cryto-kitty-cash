import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import telesvg from "../../assets/svg/telegram.svg";
    
import styles from "../styles/home/tele.module.scss";


class Tele extends Component{   

    render(){
        return(
            <div>
                <section className={styles.tele}>
                    <div className={styles.wrapper}>
                        <div className={styles.n_text}>
                        <a href="http://t.me/badgerinu">
                            Join Community <img src={telesvg} alt="" />
                        </a>    
                        </div>    
                    </div> 
                    </section>
            </div>
        );
    }
}

export default Tele;
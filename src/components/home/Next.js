import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/next.module.scss";


class Next extends Component{   

    render(){
        return(
            <div>
                <section className={styles.next}>
                    <div className={styles.wrapper}>
                        <div className={styles.n_text}>
                            Your Next X1000 coin
                        </div>    
                    </div> 
                    </section>
            </div>
        );
    }
}

export default Next;
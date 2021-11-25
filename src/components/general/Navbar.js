import React, {Component} from "react"
import { Link } from 'react-router-dom'
import { url } from '../../adapter/common'

import styles from "../styles/general/navbar.module.scss";

class Navbar extends Component{   

    
     componentDidMount(){
        window.scrollTo(0, 0)       
    }
    
    showNav = () => {
        let modal = document.getElementById('navOpen')
        modal.style.display = "grid"
        modal.style.opacity = 1
    }

    closeNav = () => {
        let modal = document.getElementById('navOpen')
        setTimeout(()=>{
            modal.style.display="none"
        },
        300)
        modal.style.opacity=0
    }

    render(){
        return(
            <div>
                <nav id={styles.nav}>
                    <div className={styles.navInner}>
                        <div className={styles.back}>
                            <Link to={url.home}>
                                <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg>
                                Back
                            </Link>
                        </div>
                        
                        <div className={styles.buy}>
                             <Link to={url.presale} className={styles.a}>
                                <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"></path></svg>
                                <span>presale</span>
                            </Link>
                        </div> 
                    </div>
                </nav>    
            </div>
        );
    }
}

export default Navbar;
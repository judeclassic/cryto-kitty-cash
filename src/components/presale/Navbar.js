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
                    </div>
                </nav>    
            </div>
        );
    }
}
   
export default Navbar;
                        
                        
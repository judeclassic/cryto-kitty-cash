import React, {Component} from "react"
import { Link } from 'react-router-dom'
import { url } from "../../adapter";

import logo from "../../assets/svg/bdg-logo.png";

import styles from "../styles/home/navbar.module.scss";

class Navbar extends Component{   

    
    componentDidMount(){
        window.scrollTo(0, 0)       
    }
    
    constructor (props){
        super(props)

        this.state = {
            navOpen: false
        }
    }    
    
    openMobileNav(){
        this.setState({
            navOpen: true
        })
        document.getElementsByClassName(styles.navbarM)[0].style.transform="scale(1)"
    }
    closeMobileNav(){
        this.setState({
            navOpen: false
        })
        document.getElementsByClassName(styles.navbarM)[0].style.transform="scale(0)"
    }

    render(){
        return(
            <div>
                <nav id={styles.nav}>

                    <div className={styles.navInner}>
                        <div className={styles.logo}>
                            <Link to="/" className={styles.a}>
                                <img src={logo} alt="" />
                                <div className={styles.l_text}>
                                   Badger Inu
                                </div>
                                <div className={styles.l_text_small}>
                                   BDG
                                </div>
                            </Link>
                        </div>                     
                    
                        <div className={styles.menuWrap}>
                            <ul className={styles.cageLarge}>
                                <li>
                                    <Link to={url.faq}>BscScan</Link>
                                </li>
                                <li>
                                    <Link to="#roadmap">CoinMarketCap</Link>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1oYne_918eO42yj--MlJ4T4n31RbhsFl3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                                </li>
                                <li>
                                    <Link to={url.faq}>faq</Link>
                                </li>
                            </ul>

                            <div className={styles.cageMenu} onClick={() => this.openMobileNav()}>
                                {
                                this.state.navOpen === false
                                ?
                               <svg height="24" viewBox="0 0 30 24" width="30"><g fill="#fff"><rect height="5.5" rx="2.75" width="29.333333"></rect><path d="m2.75 18.3333333h23.8333333c1.5187831 0 2.75 1.231217 2.75 2.75s-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75s1.23121695-2.75 2.75-2.75zm0-9.16666663h23.8333333c1.5187831 0 2.75 1.23121693 2.75 2.75000003 0 1.518783-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75 0-1.5187831 1.23121695-2.75000003 2.75-2.75000003z" opacity="0.3"></path></g></svg>
                               :
                               <svg height="24" viewBox="0 0 30 24" width="30"><g fill="#fff"><rect height="5.5" rx="2.75" width="29.333333"></rect><path d="m2.75 18.3333333h23.8333333c1.5187831 0 2.75 1.231217 2.75 2.75s-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75s1.23121695-2.75 2.75-2.75zm0-9.16666663h23.8333333c1.5187831 0 2.75 1.23121693 2.75 2.75000003 0 1.518783-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75 0-1.5187831 1.23121695-2.75000003 2.75-2.75000003z" opacity="0.3"></path></g></svg>
                                }
                            </div>
                        </div>
                    </div>               
                </nav>
                
                <nav className={styles.navbarM} onClick={() => this.closeMobileNav()}>
                    <div className={styles.wrapper}>
                        <ul className={styles.wrap}>
                            <li><svg height="10" width="10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256c0 141.4-114.6 256-256 256s-256-114.6-256-256s114.6-256 256-256S512 114.6 512 256z"></path></svg>BscScan</li>
                            
                            <li><svg height="10" width="10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256c0 141.4-114.6 256-256 256s-256-114.6-256-256s114.6-256 256-256S512 114.6 512 256z"></path></svg>CoinMarketCap</li>

                            <li><svg height="10" width="10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256c0 141.4-114.6 256-256 256s-256-114.6-256-256s114.6-256 256-256S512 114.6 512 256z"></path></svg>
                                <a href="https://drive.google.com/file/d/1oYne_918eO42yj--MlJ4T4n31RbhsFl3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                            </li>

                            <li><svg height="10" width="10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" class="svg-inline--fa fa-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256c0 141.4-114.6 256-256 256s-256-114.6-256-256s114.6-256 256-256S512 114.6 512 256z"></path></svg>
                                <Link to={ url.faq}>Faq</Link>
                            </li>
                        </ul>

                        <div className={styles.menu}>
                            
                            <div className={styles.socials}>
                                <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>

                                <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>

                                <svg height="15" width="15" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"></path></svg>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
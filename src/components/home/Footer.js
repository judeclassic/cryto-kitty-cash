import React, { Component } from "react"

import styles from "../styles/home/footer.module.scss";

import { url } from "../../adapter";
import { Link } from 'react-router-dom'

class Footer extends Component{   

    render(){
        return(
            <div>
                <footer id={styles.footer}>
                    <div className={styles.wrapper}>
                        <div className={styles.text_foot}>
                            <div>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate $BDG information.</div>

                            <div>Using the links below, you can join our various groups alongside the other members of the BDGArmy.</div>
                        </div>

                        <div className={styles.social_foot}>
                            <ul>
                                <li>
                                    <a href="https://twitter.com/BadgerInu" target="_blank">
                                    <img src="https://www.shibatoken.com/images/ico-tw.svg" alt="" />
                                    twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.reddit.com/user/Badgerinu" target="_blank">
                                    <img src="https://www.shibatoken.com/images/ico-red.svg" alt="" />
                                    reddit
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:support@badgerinu.com" target="_blank">
                                    <img src="https://cdn.icon-icons.com/icons2/196/PNG/128/mail_23797.png" alt="" />
                                    mail
                                    </a>
                                </li>
                                <li>
                                    <a href="https://fb.me/badgerinu" target="_blank">
                                    <img src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png" alt="" />
                                    facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://medium.com/@badgerinu" target="_blank">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Fimages%2Flarge%2F2x%2Fmedium-icon-white-on-black.png&f=1&nofb=1" alt="" />
                                    medium
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.link_foot}>
                            <ul>
                                <li>
                                    <Link to={url.faq}>Faq</Link>
                                </li>
                                <li>
                                    <Link to={url.faq}>Press kit</Link>
                                </li>
                                <li>BscScan</li>
                                <li>CoinMarketCap</li>
                                <li>CoinGecko</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
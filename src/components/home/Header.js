import React, {Component} from "react";
import { url } from '../../adapter/common'
import { Link } from 'react-router-dom'
// import Typed from "typed.js";
// import words from "./words";

import helmet from "../../assets/svg/helmet.png";
import coinN from "../../assets/svg/coin-norm.png";
import coinS from "../../assets/svg/coin-slant.png";
import coinSly from "../../assets/svg/coin-sly.png";
import bThumbs from "../../assets/svg/bdg-thumbs.jpeg";
import bThumbss from "../../assets/svg/bdg-thumbs.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

import styles from "../styles/home/header.module.scss";


class Header extends React.Component {
  
  render() {
    return (
      <>
        <header id={styles.header}>
            <div className={styles.wrapper}>                
                <div className={styles.big_texts}>
                    <a>Badger Inu</a>
              
                    <h1>
                      A Decentralized meme token with use case
                    </h1>
                    
                    <p>
                        The Badger Inu token <span>$BDG</span> is aimed at delivering 3 core values: Decentralization —  Passive Income — Charity. 
                    </p>
                
                    <button>
                        <Link to={url.presale}>
                          <span><svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"></path></svg></span> 
                          presale
                        </Link>
                    </button>
                </div>
                
                <div className={styles.img_right}>
                    <div className={styles.middle}>
                        <img src={bThumbss} alt="" />
                    </div>
                </div>
            </div>
            
                
            
        </header>
      </>
    );
  }
}
export default Header;
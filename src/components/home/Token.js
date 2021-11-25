import React, { Component } from "react"
// import { Link } from 'react-router-dom'

import styles from "../styles/home/token.module.scss";


class Token extends Component{   

    render(){
        return(
            <div>
                <section className={styles.token}>
                        <div className={styles.wrapper}>
                            <div className={styles._tag}>
                                Tokenomic
                            </div>
                        
                            <div className={styles.wrap}>
                                <div className={styles.t_content}>
                                    <div className={styles.desc}>
                                        7% tax is subtracted from all transactions, 5% to reward wallet, 1% to charity and 1% automatic burn. 
                                    </div>
                                    
                                    <button>
                                    <img src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=014" alt="" /> 
                                    <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"></path></svg>                                 
                                    Still on Presale
                                    </button>
                                </div>
                            
                                <ul className={styles.t_list}>
                                    <li><svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-dollar-to-slot" class="svg-inline--fa fa-circle-dollar-to-slot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 352h-16.5c-19.62 26-44.63 47.75-73 64H432c8.836 0 16 7.162 16 16c0 8.836-7.164 16-16 16h-352C71.16 448 64 440.8 64 432C64 423.2 71.16 416 80 416h57.38c-28.38-16.25-53.25-38-73-64H48C21.49 352 0 373.5 0 400v64C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-48v-64C512 373.5 490.5 352 464 352zM256 416c114.9 0 208-93.13 208-208S370.9 0 256 0S48 93.13 48 208S141.1 416 256 416zM249.4 231l-6.5-1.875C224.7 223.8 176.4 209.6 184.1 160.1c4.105-23.88 21.79-39.91 47.06-45.62V104c0-13.25 10.74-24 23.99-24s24.01 10.75 24.01 24v11.25c5.9 1.363 12.21 3.092 19.81 5.719c12.53 4.344 19.16 18 14.84 30.53C310.4 164 296.7 170.6 284.2 166.3c-8.281-2.875-14.72-4.641-19.66-5.422c-16.88-2.641-31.06 .6094-32.22 7.391C231.6 172.4 231 175.6 256.4 183.1l6.188 1.797c25.53 7.297 73.13 20.91 64.44 70.95c-4.115 23.86-21.73 39.99-47 45.71V312c0 13.25-10.76 24-24.01 24s-23.99-10.75-23.99-24V300.6C222.5 298.4 213.1 295.3 204.6 292.3L199.1 290.6C187.5 286.2 180.9 272.5 185.4 259.1s18.12-19.02 30.66-14.61l4.875 1.75C229.7 250.3 239.7 253.9 247.3 255c17.12 2.734 31.22-.5938 32.38-7.359C280.5 242.9 281 240.1 249.4 231z"></path></svg>7% Tax on all transactions..</li>
                                    
                                    <li><svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z"></path></svg>5% to Reward wallet.</li>
                                    
                                    <li><svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hand-holding-dollar" class="svg-inline--fa fa-hand-holding-dollar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z"></path></svg>1% to Charity.</li>
                                    
                                    <li><svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire" class="svg-inline--fa fa-fire" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z"></path></svg>1% automatic burn from supply.</li>
                                </ul>
                            </div>                       
                            
                            <div className={styles.numbers}>
                                <div className={styles.max}>
                                    100,000,000,000,000
                                </div>
                            </div>
                        </div> 
                    </section>
            </div>
        );
    }
}

export default Token;
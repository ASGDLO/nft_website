import logo from './logo.svg';
import './App.css';
import React from 'react';





class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header class="header bg-white10">
        <div class="container">
            <a href="#" class="logo bold white">FY<span class="lightpurple">FL</span></a>

            <div class="menu">
                <form action="" class="search-form">
                    <label for="search-box" class="fas fa-search"></label>
                    <input type="search" id="search-box" placeholder="Search items and collections"/>
                </form>
                <a href="#about">Story</a>
                <a href="#collections">Collections</a>
                <a href="#featured">Featured</a>
                <a href="#faq">FAQ</a>
                <div class="btn bg-purple wallet">Sellect Wallet</div>
            </div>

            <div class="fas fa-wallet" id="wallet"></div>
            <div class="fas fa-bars" id="bar"></div>
        </div>
    </header>

    <section id="home" class="spacetop15 spacebottom10">
        <div class="container">
            <div class="row jc-between ai-center col-reverse-s">
                <div class="col5 col6-md col12-s ta-center-s">
                    <h1 class="size5 bold spacebottom1">
                        The FYFL is unique and randomly geerated NFT Game
                    </h1>
                    <p class="size2 spacebottom3 halfwhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc
                        vulputate
                        libero et velit.
                    </p>

                    <div class="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
                        <a href="#collections" class="btn bg-purple size2 white ">Explore now</a>
                        <a href="#banner" class="btn bg-white10 size2 white ">Sell NFT</a>
                    </div>

                    <div class="row jc-between">
                        <div class="ta-center">
                            <p class="size3 bold">37k+</p>
                            <p class="size2 halfwhite">Artworks</p>
                        </div>
                        <div class="ta-center">
                            <p class="size3 bold">20k+</p>
                            <p class="size2 halfwhite">Artist</p>
                        </div>
                        <div class="ta-center">
                            <p class="size3 bold">99k+</p>
                            <p class="size2 halfwhite">Aucations</p>
                        </div>
                    </div>
                </div>
                <div class="col6 col12-s spacebottom3-s">
                    <img src="img/heroimage.png" alt="" class="img-responsive float"/>
                </div>
            </div>
        </div>
    </section>

    <section class="spacer5 spacer0-xs">
        <div class="container row jc-between jc-around-md">
            <img src="img/binance.svg" alt="" class="height6 img-responsive-md"/>
            <img src="img/ethereum.svg" alt="" class="height6 img-responsive-md"/>
            <img src="img/blockchain.svg" alt="" class="height6 img-responsive-md spacetop1-md"/>
        </div>
    </section>

    <section id="about" class="spacer10">
        <div class="container">
            <h1 class="bold size4 ta-center">About Us</h1>
            <p class="spacebottom3 halfwhite size2 ta-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="row ai-center jc-between flexcol-s">
                <div class="col5 col10-s spacebottom2-s">
                    <img src="img/about.png" class="img-responsive" alt=""/>
                </div>
                <div class="col6 col12-s ta-center-s">
                    <h3 class="size3 bold">Get Popular NFT</h3>
                    <p class="size2 spacetop1 spacebottom3 halfwhite">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                        accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                        condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                    </p>
                    <a href="#collections" class="btn bg-purple size2 white">Show more</a>
                </div>
            </div>

        </div>
    </section>

    <section class="collections spacer10" id="collections">
        <div class="container">
            <h1 class="bold size4 ta-center">Collections</h1>
            <p class="spacebottom3 halfwhite size2 ta-center">
                Lorem ipsum dolor sit amet, consectetur  adipiscing elit.
            </p>
            <div class="row spacebottom3 filter-buttons">
                <div class="col3 filter col6-xs spacebottom1-xs" data-filter="all">All</div>
                <div class="col3 filter col6-xs spacebottom1-xs" data-filter="art">Art</div>
                <div class="col3 filter col6-xs" data-filter="photograpy">Photograpy</div>
                <div class="col3 filter col6-xs" data-filter="pattern">Pattern</div>
            </div>
            <div class="row box-card jc-evenly-md">
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="art">
                    <img src="img/collection1.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="photograpy">
                    <img src="img/collection2.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="pattern">
                    <img src="img/collection3.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>

                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="art">
                    <img src="img/collection4.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="photograpy">
                    <img src="img/collection5.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="pattern">
                    <img src="img/collection6.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Angel
                            </p>
                            <h5 class="size2 bold">An Angel</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>

                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="art">
                    <img src="img/collection7.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="photograpy">
                    <img src="img/collection8.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
                <div class="col4 card collect bg-white10 col5-md col6-s" data-item="pattern">
                    <img src="img/collection9.png" class="img-responsive" alt=""/>
                    <div class="row jc-between spacetop2">
                        <div>
                            <p class="size2 halfwhite">
                                @Johny
                            </p>
                            <h5 class="size2 bold">Yellow Red</h5>
                        </div>
                        <div>
                            <p class="current halfwhite">Current bid</p>
                            <h5 class="size2 bold">0.005ETH</h5>
                        </div>
                    </div>
                    <a class="bid size2 ta-center">
                        Place a bid
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="featured spacer10" id="featured">
        <div class="container">
            <h1 class="bold size4 ta-center">Featured Artworks</h1>
            <p class="spacebottom3 halfwhite size2 ta-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="swiper card-slider row">
                <div class="swiper-wrapper">
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card bg-white10">
                            <img src="img/collection4.png" class="img-responsive" alt=""/>
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ETH</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                    </div>
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card bg-white10">
                            <img src="img/collection5.png" class="img-responsive" alt=""/>
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Johny
                                    </p>
                                    <h5 class="size2 bold">Yellow Red</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ETH</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                    </div>
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card bg-white10">
                            <img src="img/collection6.png" class="img-responsive" alt=""/>
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Angel
                                    </p>
                                    <h5 class="size2 bold">An Angel</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ETH</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                    </div>
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card bg-white10">
                            <img src="img/collection1.png" class="img-responsive" alt=""/>
                            <div class="row jc-between spacetop2">
                                <div>
                                    <p class="size2 halfwhite">
                                        @Angel
                                    </p>
                                    <h5 class="size2 bold">An Angel</h5>
                                </div>
                                <div>
                                    <p class="current halfwhite">Current bid</p>
                                    <h5 class="size2 bold">0.005ETH</h5>
                                </div>
                            </div>
                            <a class="bid size2 ta-center">
                                Place a bid
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="creator spacer10" id="featured">
        <div class="container">
            <h1 class="bold size4 ta-center">Top Creator</h1>
            <p class="spacebottom3 halfwhite size2 ta-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="swiper row creator-slider">
                <div class="swiper-wrapper">
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card-creator bg-white10 ta-center">
                            <img src="img/creator1.png" class="img-responsive" alt=""/>
                            <img src="img/photo1.png" class="photo" alt=""/>
                            <h5 class="spacer1 size2 bold">John Wick</h5>
                            <p class="spacebottom2 halfwhite desc">Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                                elit.</p>
                            <button class="follow ta-center bg-purple white">+ Follow</button>
                        </div>
                    </div>
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card-creator bg-white10 ta-center">
                            <img src="img/creator2.png" class="img-responsive" alt=""/>
                            <img src="img/photo2.png" class="photo" alt=""/>
                            <h5 class="spacer1 size2 bold">John Wick</h5>
                            <p class="spacebottom2 halfwhite desc">Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                                elit.</p>
                            <button class="follow ta-center bg-purple white">+ Follow</button>
                        </div>
                    </div>
                    <div class="col4 col5-md col7-s swiper-slide">
                        <div class="card-creator bg-white10 ta-center">
                            <img src="img/creator3.png" class="img-responsive" alt=""/>
                            <img src="img/photo3.png" class="photo" alt=""/>
                            <h5 class="spacer1 size2 bold">John Wick</h5>
                            <p class="spacebottom2 halfwhite desc">Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                                elit.</p>
                            <button class="follow ta-center bg-purple white">+ Follow</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="spacer10" id="faq">
        <div class="container">
            <h1 class="bold size4 ta-center">Freaquently Asked Question</h1>
            <p class="spacebottom3 halfwhite size2 ta-center">
                Wanna Ask Something?
            </p>
            <div class="row jc-between">
                <div class="box-faq col6 col12-s">
                    <div class="box spacebottom5">
                        <div class="title row jc-between">
                            <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                            <i class="fas fa-angle-down size2 halfwhite"></i>
                        </div>
                        <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                            ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                            molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
                    </div>
                    <div class="box spacebottom5">
                        <div class="title row jc-between">
                            <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                            <i class="fas fa-angle-down size2 halfwhite"></i>
                        </div>
                        <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                            ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                            molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
                    </div>
                    <div class="box spacebottom5">
                        <div class="title row jc-between">
                            <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                            <i class="fas fa-angle-down size2 halfwhite"></i>
                        </div>
                        <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                            ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                            molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
                    </div>
                </div>
                <div class="box-faq col6 col12-s">
                    <div class="box spacebottom5">
                        <div class="title row jc-between">
                            <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                            <i class="fas fa-angle-down size2 halfwhite"></i>
                        </div>
                        <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                            ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                            molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
                    </div>
                    <div class="box spacebottom5">
                        <div class="title row jc-between">
                            <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                            <i class="fas fa-angle-down size2 halfwhite"></i>
                        </div>
                        <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                            ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                            molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
                    </div>
                    <div class="box spacebottom5">
                        <div class="title row jc-between">
                            <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                            <i class="fas fa-angle-down size2 halfwhite"></i>
                        </div>
                        <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates
                            ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                            molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="spacer10" id="banner">
        <div class="container spacer5 bg-purple ta-center">
            <h1 class="size5 bold spacebottom2 size4-xs">Get ready to collect our NFT</h1>
            <a class="btn bg-halfwhite size2 started ">Get started</a>
        </div>
    </section>

    <footer class="spacer10">
        <div class="container row jc-between flexcol-s ta-center-s">
            <div class="row flexcol spacebottom3-s">
                <a href="#home" class="size2 bold white">Psycho<span class="lightpurple">Art</span></a>
                <p class="size2 halfwhite spacetop2">The best NFT marketplace website in the world and feel your
                    experience
                    in selling or buy our work</p>
            </div>
            <div class="row flexcol spacebottom3-s">
                <a href="#about" class="bold size2 white">About</a>
                <a href="#" class="size2 halfwhite spacetop2">Product</a>
                <a href="#" class="size2 halfwhite spacetop2">Resource</a>
                <a href="#" class="size2 halfwhite spacetop2">Term & Condition</a>
                <a href="#" class="size2 halfwhite spacetop2">FAQ</a>
            </div>
            <div class="row flexcol spacebottom3-s">
                <a href="#" class="bold size2 white">Company</a>
                <a href="#" class="size2 halfwhite spacetop2">Our Team</a>
                <a href="#" class="size2 halfwhite spacetop2">Partner With Us</a>
                <a href="#" class="size2 halfwhite spacetop2">Privacy & Policy</a>
                <a href="#" class="size2 halfwhite spacetop2">Features</a>
            </div>
            <div class="row flexcol spacebottom3-s">
                <h5 class="bold size2">Contact</h5>
                <a href="#" class="size2 halfwhite spacetop2">+012 3456789</a>
                <a href="#" class="size2 halfwhite spacetop2">xyz@gmail.com</a>
                <div class="row jc-between spacetop2 jc-evenly-s">
                    <a href="#" class="fab fa-youtube size2 halfwhite spacetop2"></a>
                    <a href="#" class="fab fa-discord size2 halfwhite spacetop2"></a>
                    <a href="#" class="fab fa-instagram size2 halfwhite spacetop2"></a>
                </div>
            </div>
        </div>
        <p class="size2 halfwhite spacetop5 ta-center">Created by <span class="white bold">Zarror</span> | All Right
            Reserved!</p>
    </footer>
    </div>
    
  );
}
}
export default App;

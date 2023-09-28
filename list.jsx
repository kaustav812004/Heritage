import React, { useState } from "react";
import Popup from "reactjs-popup";
import image from "./images/goan culture.jpg";
import img1 from "./images/heri.jpeg";
import img2 from "./images/heri2.jpeg";
import img3 from "./images/heri3.png";



function List() {
    return (

        <div className="container">


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" id="i1" src={img1} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" id="i1" src={img2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" id="i1" src={img3} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
            </div>

            <div className="text">
                
            <h1 className="heading">CULTURE OF INDIA</h1>
                Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.
            </div>
            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

            <div className="heritage">
                <img className="img" src={image} alt="heritage"></img>
                <Popup trigger=
                    {<button
                    > Goan Culture </button>}
                    position="right center">
                    <div className="poptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <a href="https://www.lipsum.com/">Click here</a>
                    </div>
                </Popup>
            </div>

        </div>

    );

}

export default List;

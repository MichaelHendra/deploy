import React from "react";
import cssModule from "./Home.module.css"
import { Link } from "react-router-dom";
//images
import Page from "../assets/bg.png"
import Simbol from "../assets/Netflix_Symbol.png"
import Play from "../assets/play.png"
import Info from "../assets/info.png"
import Baratcard from "../component/homeCom/Baratcard";


function Home () {
return(
    <div>
        <div className={cssModule.BG}>
            <div className={cssModule.containter}>
                <img src={Page} alt="BG" className={cssModule.imgBG}/>
                <div className={cssModule.Br}>
                    <div className={cssModule.Line}>
                        <img src={Simbol} alt="simbol"/>
                        <h3 className={cssModule.LineText}>New Movies</h3>
                    </div>
                    <p className={cssModule.BigText}>Home Less</p>
                    <div className={cssModule.Line}>
                        <Link to = "/play" className={cssModule.LinkLine}><img src={Play} alt="play"/><p className={cssModule.buttonTextHome}>Play</p></Link>
                        <div className={cssModule.gap}></div>
                        <Link to = "/more" className={cssModule.LinkLine2}><img src={Info} alt="Info"/><p className={cssModule.buttonTextHome}>More</p></Link>
                        {/* <button className={`${cssModule.LineButton} ${cssModule.Button1}`}><img src={Play} alt="play" />Play</button>
                        <div className={cssModule.gap}></div>
                        <button className={`${cssModule.LineButton} ${cssModule.Button2}`}><img src={Info} alt="Info"/>More Info</button> */}
                    </div>
                </div>
            </div>
            <Baratcard id = {1}/>
            <Baratcard id = {2}/>
            <Baratcard id = {3}/>
        </div>
    </div>
);
}
export default Home
// Header.js
import React from "react";

import { List } from "./List";
import { Image } from "./Image";
import { MeetingButton } from "./MeetingButton";

import logo from "../../Image/Logo/Logo.png";
import MadagascarFlag from "../../Image/Logo/Madagascar.png";
import Profile from "../../Image/Icone/UserIcon.png";
import Bag from "../../Image/Icone/PanierIcon.png";
import Cloche from "../../Image/Icone/Cloche.png"

import "../../CSS/Header.css";

export function Header() {
    return (
        <header>
            <div className="d-flex align-items-center FirstRow">
                
                {/*The left part of Header*/}
                
                <div className="d-flex align-items-center left"> 
                    <Image Source={MadagascarFlag} Alt={"Madaflag"} Width={'33px'} Height={'22px'} />
                    <div style={{ paddingLeft: "10px", width: "160px" }}>
                        <p className="pt-3" >102 Madagascar</p>
                    </div>

                    <div style={{ width: "15px" }}>
                        <p className="pt-3">|</p>
                    </div>

                    <div>
                        <p className="pt-3">Service client</p>
                    </div>

                    <div>
                        <img src={Cloche} alt="Cloche" width= "25px" height = "25px"/>
                    </div>
                </div>

                {/*The Center part of Header (Logo)*/}

                <div className="justify-content-center Center">
                    <Image Source={logo} Width={"225px"} alt={"Joiallerie Madagascar"} />
                </div>

                {/*The Right part of Header*/}
                
                <div className="Right" >
                    <div className="w-50">
                        <MeetingButton Content={"Prendre rendez-vous"} />
                    </div>
                    <div className="p-4 w-100">
                        <p className="mb-0 w-105 fs-10">+20 22 673 75</p>
                    </div>
                    <div>
                        <Image Source={Profile} alt="UserIcon" Width={"20px"} Height={"20px"} />
                    </div>
                    <div >
                        <Image Source={Bag} alt="UserIcon" Width={"20px"} Height={"20px"} />
                    </div>
                </div>
            </div>

            <div className="display-flex flex-direction-column SecondRow">
                <ul className="d-flex justify-content-center p-0">
                    <List Title={"Bagues de fiancailles"} Link={"#"} />
                    <List Title={"Mariage"} Link={"#"} />
                    <List Title={"Pierres précieuse"} Link={"#"} />
                    <List Title={"Bijoux"} Link={"/"} />
                    <List Title={"Collection"} Link={"#"} />
                    <List Title={"Atelier sur-mesure"} Link={"#"} />
                    <List Title={"Pierres précieuse"} Link={"#"} />
                </ul>
            </div>
        </header>
    );
}
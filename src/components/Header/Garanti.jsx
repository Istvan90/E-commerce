import React from "react";

import "../../CSS/GarrantiBar.css"

import SecurePay from "../../Image/Icone/SecureImage.png"
import Delivery from "../../Image/Icone/mbridelivery.png"
import Satisfaction from "../../Image/Icone/Satisfait.jpg"
import Paiement from "../../Image/Icone/Paiement CB.png"
import PosterDesign from "../../Image/Poster_Design.png"

export function GarrantieBar() {
    return (
        <div className="mt-5">
            <div className="GarrantiBar">
                <ul className="d-flex p-0">
                    <List SourceImage={SecurePay} Width={"35px"} Heigth={"35px"} Alt={"SecurePayImage"} Value={"Paiement 100% Sécurisé"} />
                    <List SourceImage={Delivery} Width={"35px"} Heigth={"35px"} Alt={"SecurePayImage"} Value={"Livraison offerte"} />
                    <List SourceImage={Satisfaction} Width={"60px"} Heigth={"50px"} Alt={"SecurePayImage"} Value={"Satisfait remboursé après <strong>15 jours</strong>"} />
                    <List SourceImage={Paiement} Width={"40px"} Heigth={"40px"} Alt={"SecurePayImage"} Value={"Paiement CB en 3 ou 4 fois"} />
                </ul>
            </div>

            <div className="Image">
                <img src={PosterDesign} alt="Poster" />
            </div>
        </div>
    );
}

function List({ SourceImage, Width, Heigth, Alt, Value, Key }) {
    return (
        <li key={Value}>
            <img src={SourceImage} alt={Alt} width={Width} height={Heigth} />
            <p style={
                {
                    paddingTop: "10px",
                    paddingLeft: "10px"
                }
            }
                dangerouslySetInnerHTML={{ __html: Value }}>
            </p>
        </li>
    );
}

import React from "react";

import "../../../CSS/GarrantiBar.css"

import SecurePay from "../../../Image/Icone/SecureImage.png"
import Delivery from "../../../Image/Icone/mbridelivery.png"
import Satisfaction from "../../../Image/Icone/Satisfait.jpg"
import Paiement from "../../../Image/Icone/Paiement CB.png"
import PosterDesign from "../../../Image/Poster_Design.png"

export function GarrantieBar() {
    const ListElement = [
        {
            SourceImage: SecurePay,
            Width: "35px",
            height: "35px",
            Value: "Paiement 100% Sécurisé"
        },
        {
            SourceImage: Delivery,
            Width: "35px",
            height: "35px",
            Value: "Livraison offerte"
        },
        {
            SourceImage: Satisfaction,
            Width: "60px",
            height: "50px",
            Value: "Satisfait remboursé après <strong>15 jours</strong>"
        },
        {
            SourceImage: Paiement,
            Width: "40px",
            Height: "40px",
            Value: "Paiement CB en 3 ou 4 fois"
        },
    ]

    return (
        <div className="mt-5">
            <div className="GarrantiBar">
                <ul className="d-flex p-0">
                    {
                        ListElement.map(
                            Objet => (
                                <List SourceImage={Objet.SourceImage} Width={Objet.Width} Heigth={Objet.Height} Value={Objet.Value} Alt={"Objet.Value"} />
                            )
                        )
                    }
                </ul>
            </div>

            <div className="Image">
                <img src={PosterDesign} alt="Poster" />
            </div>
        </div>
    );
}

function List({ SourceImage, Width, Heigth, Alt, Value }) {
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

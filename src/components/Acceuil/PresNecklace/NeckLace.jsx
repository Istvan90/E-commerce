import React from "react";

import NecklaceImage from "../../../Image/Collier Haute Joiallerie/Collier Baobab.jpg"

import { LinkRDV } from "../../Meeting/Meeting";

import "../../../CSS/Necklace.css"

export function Necklace() {
    return (
        <div className="d-flex Necklace">
            <img src={NecklaceImage} alt="NeckLace" className="NecklaceImage" />

            <Details />
        </div>
    );
}

function Details() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column gap-5 DetailsNecklace">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Baobab Necklace </h1>
                <h1>2024 : </h1>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column">
                <p className="font-lateef">Decouvrez la dernière création de Leonardo AI qui a su</p>
                <p className="font-lateef">exprimé sa créativité à travers le collier Baobab.</p>
            </div>

            <LinkRDV Value={"En savoir plus"} Link="{% url 'home' %}" />
        </div >
    );
}
import React, { useState, useRef } from "react";

import { AddBoutton } from "./AddBoutton";
import { Link } from "react-router-dom";

import PaginationDroite from "../../../Image/Icone/paginationVdroite.png";
import PaginationGauche from "../../../Image/Icone/paginationVgauche.png";

import "../../../CSS/MarketPlaceCard.css"

export function Card({ product, Index, Image, FirstDescription, SecondDescription, ThirdDescription, Price }) {
    const theScrollImages = useRef()

    const theLeftScroll = () => {
        const scrollAmount = theScrollImages.current.scrollLeft - theScrollImages.current.offsetWidth;
        theScrollImages.current.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    const theRightScroll = () => {
        const scrollAmount = theScrollImages.current.scrollLeft + theScrollImages.current.offsetWidth;
        theScrollImages.current.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    return (
        <div className="Card" id={Index}>
            <div className="PaginationCover">
                <img src={PaginationGauche} alt="PaginationGauche" className="PaginationLeft" onClick={theLeftScroll} />

                <div className="BlackSquare">
                    <Link to={"/details-produits/" + product.id}>
                        <div className="d-flex Defilement" ref={theScrollImages}>
                            <img src={Image} className="ThisImage" />
                            <img src={Image} className="ThisImage" />
                            <img src={Image} className="ThisImage" />
                        </div>
                    </Link>
                </div>

                <img src={PaginationDroite} alt="PaginationDroite" className="PaginationRight" onClick={theRightScroll} />
            </div>

            <ul className="RingDescription">
                <li>{FirstDescription}</li>
                <li>{SecondDescription}</li>
                <li>{ThirdDescription}</li>
            </ul>

            <AddBoutton Product={product} ThePrice={Price} />
        </div >
    );
}
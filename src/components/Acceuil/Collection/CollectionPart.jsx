import React, { useRef } from "react";
import "../../../CSS/CollectionPart.css";

import PaginationDroite from "../../../Image/Icone/paginationVdroite.png";
import PaginationGauche from "../../../Image/Icone/paginationVgauche.png";

import RingOne from "../../../Image/Bague (Nos Collection)/RingOne.jpg";
import RingTwo from "../../../Image/Bague (Nos Collection)/RingTwo.jpg";
import RingThree from "../../../Image/Bague (Nos Collection)/RingThree.jpg";
import RingFour from "../../../Image/Bague (Nos Collection)/RingFour.jpg";
import RingFive from "../../../Image/Bague (Nos Collection)/RingFive.jpg";

import { CardCollection } from "./CollectionComponents/CollectionCard"

const CollectionList = [
    {
        Image: RingOne,
        CollectionName: "Larah"
    },
    {
        Image: RingTwo,
        CollectionName: "Harlequin"
    },
    {
        Image: RingThree,
        CollectionName: "Milanosa"
    },
    {
        Image: RingFour,
        CollectionName: "Dianoh"
    },
    {
        Image: RingFive,
        CollectionName: "Highteen"
    },
]

export function Collection() {
    const scrollImages = useRef();

    const leftScroll = () => {
        scrollImages.current.scrollBy({
            left: -100,
            behavior: "smooth"
        });
    }

    const rightScroll = () => {
        scrollImages.current.scrollBy({
            left: 100,
            behavior: "smooth"
        });
    }

    return (
        <div className="Cover mt-5">
            <h1 className="Title d-flex justify-content-center align-items-center">COLLECTION</h1>
            <div className="custom-bar"></div>

            <div className="TheCollection">
                <img className="ButtonLeft" src={PaginationGauche} alt="Previous" onClick={leftScroll} />

                <div className="Cards d-flex justify-content-center mt-5" ref={scrollImages}>
                    {
                        CollectionList.map(
                            List => (
                                <CardCollection Image={List.Image} CollectionName={List.CollectionName} />
                            )
                        )
                    }
                </div>

                <img className="ButtonRight" src={PaginationDroite} alt="Next" onClick={rightScroll} />
            </div>
        </div>
    );
}
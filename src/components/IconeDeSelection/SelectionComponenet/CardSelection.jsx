import Harlequin from "../../../Image/Bague (Nos selection)/entaille-iconic.png"
import Everbloom from "../../../Image/Bague (Nos selection)/everbloom.png"
import Lana from "../../../Image/Bague (Nos selection)/lefkos-4-chocolat.png"

import "../../../CSS/Selection.css"
import React from "react";

import { Link } from "react-router-dom";

export function ParSelection() {
    return (
        <div className="Collection">
            <h1 className="Title d-flex justify-content-center mb-24 align-items-center">
                Nos icones de selection
            </h1>

            <div className="container container-centered Cover-Card-Selection flex gap-20">
                <SelectionList
                    SelectionName={"Harlequin"}
                    SelectionImage={Harlequin}
                    DetailSelection={"La selection Lana en Saphir decoré de diamant, en illustrent un savoir-faire d’exception. "}
                />
                <SelectionList
                    SelectionName={"Everbloom"}
                    SelectionImage={Everbloom}
                    DetailSelection={"La selection Lana en Saphir decoré de diamant, en illustrent un savoir-faire d’exception. "}
                />
                <SelectionList
                    SelectionName={"Lana"}
                    SelectionImage={Lana}
                    DetailSelection={"La selection Lana en Saphir decoré de diamant, en illustrent un savoir-faire d’exception. "}
                />
            </div>
        </div>
    );
}

function SelectionList({ SelectionImage, SelectionName, DetailSelection }) {
    return (
        <div className="w-1/3 items-center flex flex-column text-center">
            <img className="h-3/4 mb-5 selection-image" src={SelectionImage} alt="Harlequin" />
            <div>
                <h1 className="selection-name">
                    {SelectionName}
                </h1>

                <p>
                    {DetailSelection}
                </p>

                <Link to="/" className="text-black">
                    <p>En savoir plus </p>
                </Link>
            </div>
        </div>
    );
}
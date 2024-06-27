import React from "react";

import { Header } from "./Header/HeaderPart";
import { ListeProduits } from "./DetailsProduits/DetailsProduits";
import { MyFooter } from "./Footer/footer";
import { PresentationBystyle } from "./MarketPlace/MarketPlaceComponents/ByStyle";

import ImageOne from "../Image/Dans la Partie vente/tiffany-foreveralliance-16028932_1020727_ED_M.webp"
import ImageTwo from "../Image/Dans la Partie vente/Tiffany.webp"
import ImageThree from "../Image/Dans la Partie vente/alliance-tiffany-setting-16083135_934442_ED_M.webp"
import ImageFour from "../Image/Dans la Partie vente/tiffany-foreveralliance-36342315_973801_ED_M.webp"

export function DetailsProduits() {
    return (
        <>
            <Header />

            <ListeProduits />

            <PresentationBystyle
                Title={"Vous aimeriez aussi"}
                
                ImageOne={ImageOne}
                NameOne={"Rings"}
                ImageTwo={ImageTwo}
                NameTwo={"Celline"}
                ImageThree={ImageThree}
                NameThree={"Fraicheur"}
                ImageFour={ImageFour}
                NameFour={"Blue"}
            />

            <MyFooter />
        </>
    );
}
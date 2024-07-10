import React from "react";
import "../../CSS/MarketPlace.css";

import { RingDemo } from "./MarketPlaceComponents/RingDemo";
import { Card } from "./MarketPlaceComponents/Card";
import { ThisFilterBy } from "./MarketPlaceComponents/FilterBy/FilterBy";
import { PresentationBystyle } from "./MarketPlaceComponents/ByStyle";
import { Meeting } from "../Meeting/Meeting";

import MyRing from "../../Image/Bague (Nos selection)/entaille-iconic.png";

import PresTophOne from "../../Image/Dans la Partie vente/ModeleToph.webp";
import PresTophTwo from "../../Image/Dans la Partie vente/PresBagueMixte.webp";

import Alliance from "../../Image/Dans la Partie vente/tiffany-foreveralliance-36342315_973801_ED_M.webp";
import ForMan from "../../Image/Dans la Partie vente/tiffany-co-schlumberger-bague-deux-rangs-rope-25963288_1044072_ED_M.webp";
import Diamanta from "../../Image/Dans la Partie vente/alliance-tiffany-setting-16083135_934442_ED_M.webp";
import IceBlue from "../../Image/Dans la Partie vente/tiffany-foreveralliance-16028932_1020727_ED_M.webp";

import { MarketPlaceProduct } from "./Product";

export function RingMarketPlace() {
    return (
        <div className="body-container">
            <RingDemo Image={MyRing} />

            <div className="container container-centered browse-grid-page">
                <ThisFilterBy />

                <div className="mt-5">
                    <div className="MyColumn">
                        {
                            MarketPlaceProduct.map((Product, index) => (
                                <>
                                    <Card
                                        key={Product.id}
                                        product={Product}
                                        Image={Product.Image}
                                        FirstDescription={Product.FirstDescription}
                                        SecondDescription={Product.SecondDescription}
                                        ThirdDescription={Product.ThirdDescription}
                                        Price={Product.Price}
                                        Index={index}
                                    />
                                </>
                            ))
                        }
                    </div>
                </div>
                < PresentationBystyle
                    ImageOne={Alliance}
                    NameOne={'Alliance'}
                    ImageTwo={IceBlue}
                    NameTwo={'Cellini Rings'}
                    ImageThree={Diamanta}
                    NameThree={'Diamanta'}
                    ImageFour={ForMan}
                    NameFour={'Bijoux pour Homme'}
                />

            </div>

            <Meeting />
        </div >
    );
}
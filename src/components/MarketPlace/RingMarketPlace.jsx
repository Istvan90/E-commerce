import React from "react";
import "../../CSS/MarketPlace.css";

import { RingDemo } from "./MarketPlaceComponents/RingDemo";
import { Card } from "./MarketPlaceComponents/Card";
import { ThisFilterBy } from "./MarketPlaceComponents/FilterBy/FilterBy";
import { PresentationBystyle } from "./MarketPlaceComponents/ByStyle";
import { Meeting } from "../Meeting/Meeting";

import MyRing from "../../Image/Bague (Nos selection)/entaille-iconic.png";
import RingToSell from "../../Image/Dans la Partie vente/DiamantD'oré.webp";
import PresTophOne from "../../Image/Dans la Partie vente/ModeleToph.webp";
import PresTophTwo from "../../Image/Dans la Partie vente/PresBagueMixte.webp";

import Alliance from "../../Image/Dans la Partie vente/tiffany-foreveralliance-36342315_973801_ED_M.webp";
import ForMan from "../../Image/Dans la Partie vente/tiffany-co-schlumberger-bague-deux-rangs-rope-25963288_1044072_ED_M.webp";
import Diamanta from "../../Image/Dans la Partie vente/alliance-tiffany-setting-16083135_934442_ED_M.webp";
import IceBlue from "../../Image/Dans la Partie vente/tiffany-foreveralliance-16028932_1020727_ED_M.webp";

export function RingMarketPlace() {
    return (
        <div className="body-container">
            <RingDemo Image={MyRing} />

            <div className="MarketPlace">
                <ThisFilterBy />

                <div className="CardList">
                    <div className="Row">
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T5 en Argent"} SecondDescription={"10 carats."} ThirdDescription={"Largeur : 1, 7 mm"} Price={"2500 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                    </div>

                    <div className="Row">
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                    </div>

                    <div className="Row">
                        <img className="Modele" src={PresTophOne} alt="Modele" width='60%' />

                        <div className="CardColumn">
                            <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                            <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        </div>
                    </div>
                </div>
            </div>

            <PresentationBystyle
                ImageOne={Alliance}
                NameOne={'Alliance'}
                ImageTwo={IceBlue}
                NameTwo={'Cellini Rings'}
                ImageThree={Diamanta}
                NameThree={'Diamanta'}
                ImageFour={ForMan}
                NameFour={'Bijoux pour Homme'}
            />

            <div className="MarketPlace">
                <div className="CardList">
                    <div className="Row">
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                    </div>

                    <div className="Row">
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                    </div>

                    <div className="Row">
                        <div className="CardColumn">
                            <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                            <Card Image={RingToSell} FirstDescription={"Bague T1 Tiffani en or jaune"} SecondDescription={"18 carats et diamants."} ThirdDescription={"Largeur : 2,5 mm"} Price={"5000 $"} />
                        </div>

                        <img className="Modele" src={PresTophTwo} alt="Modele" width='60%' />
                    </div>
                </div>
            </div>

            <Meeting />
        </div>
    );
}

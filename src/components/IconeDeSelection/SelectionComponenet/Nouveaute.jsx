import { Necklace } from "../../Acceuil/PresNecklace/NeckLace";

import BagueImage from "../../../Image/Dans la Partie vente/tiffany-foreveralliance-36342315_973801_ED_M.webp"

const BraceletImage = "https://www.celinni.com/24912-large_default/bracelet-riviere-diamants-noirs.jpg"
const  MontreImage = "https://images.ocarat.com/254232-thickbox_default/divers-sixty-five-01-733-7707-4055-07-8-20-18-oris.jpg"

const Categorie = [
    {
        ImageCategorie: BagueImage,
        NameCategorie: "Bague"
    },
    {
        ImageCategorie: MontreImage,
        NameCategorie: "Montre"
    },
    {
        ImageCategorie: BraceletImage,
        NameCategorie: "Bracelet"
    },
    {
        ImageCategorie: "https://images.hbjo-online.com/webp/images/13450-YG-messika.jpg?w=820&h=820",
        NameCategorie: "Boucle d'oreille"
    }
]

export function Nouveautes() {
    return (
        <div className="pt-40 pb-28">
            <h1 className="text-center text-3xl">DECOUVREZ LA SELECTION PAR CATEGORIE</h1>
            <p className="text-center">Un design audacieux et un savoir-faire incomparable.</p>

            <div className="BoxCategories flex">
                {
                    Categorie.map(
                        CategorieList => (
                            <a className="w-1/4 h-96 flex flex-col text-decoration-none text-black text-center" href="#">
                                <img className="object-cover w-50 aling-items-center ml-auto mr-auto m-16"
                                    src={CategorieList.ImageCategorie}
                                    alt={CategorieList.NameCategorie} />


                                <p>{CategorieList.NameCategorie}</p>
                            </a>
                        )
                    )}
                <div className="Categorie">

                </div>
            </div>
        </div>
    );
}
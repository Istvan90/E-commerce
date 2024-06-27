import RingUp from "../../Image/Up.webp"
import RingDown from "../../Image/Down.webp"
import RingCoteLeft from "../../Image/Left.webp"
import RingCoteRight from "../../Image/Right.webp"

import "../../CSS/DetailsProduits.css"

export function ListeProduits() {
    return (
        <>
            <div className="cover">
                <Images Front={RingUp} Right={RingDown} Left={RingCoteLeft} Up={RingCoteRight} />
                
                <Details
                    Details={"Bagues de fiancailles True. Ornée d'un diamant taille brillant sur un anneau en platine 950 millimetres et diamants"}
                    Prix={"2150 $"}
                    Description={"Icone de l'amour moderne, la bague de fiancaille Nova présente une monture aux lignes graphiques. Composée d'un anneau raffiné en platine 950 millièmes..."}
                />
            </div>
        </>
    );
}

function Images({ Front, Up, Left, Right }) {
    return (
        <div className="Images">
            <img src={Front} alt={"Front"} />
            <img src={Left} alt={"Left"} />
            <img src={Up} alt={"Up"} />
            <img src={Right} alt={"Right"} />
        </div>
    );
}

function Details({ Details, Prix, Description }) {
    return (
        <div className="d-flex details">
            <p className="BigTitle">
                {Details}
            </p>

            <p className="Price">
                Prix : {Prix}
            </p>

            <button className="AddPannier">Ajouter au Pannier</button>

            <button className="GetMeeting">Prendre rendez-vous</button>

            <p className="Description">
                {Description}
            </p>
        </div>
    );
}
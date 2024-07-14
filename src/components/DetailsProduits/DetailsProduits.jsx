import RingUp from "../../Image/Up.webp"
import RingDown from "../../Image/Down.webp"
import RingCoteLeft from "../../Image/Left.webp"
import RingCoteRight from "../../Image/Right.webp"

import "../../CSS/DetailsProduits.css"
import { useParams } from "react-router-dom"
import { addCart } from "../../redux/action"
import { useDispatch } from "react-redux"

import { MarketPlaceProduct } from "../MarketPlace/Product"

export function ListeProduits() {
    const { id } = useParams()
    const product = MarketPlaceProduct.find(p => p.id === parseInt(id))

    return (
        <>
            <div className="cover gap-20">
                <Images Front={product.Image} Right={product.Image} Left={product.Image} Up={product.Image} />

                <Details
                    product={product}
                    Details={product.Details}
                    Prix={product.Price}
                    Description={product.Description}
                />
            </div>
        </>
    );
}

function Images({ Front, Up, Left, Right }) {
    return (
        <div className="d-flex flex-wrap Images">
            <img src={Front} alt={"Front"} />
            <img src={Left} alt={"Left"} />
            <img src={Up} alt={"Up"} />
            <img src={Right} alt={"Right"} />
        </div>
    );
}

function Details({ product, Details, Prix, Description }) {
    const dispatch = useDispatch()

    function AddProduct(product) {
        dispatch(addCart(product))
    }

    return (
        <div className="d-flex details">
            <p className="BigTitle">
                {Details}
            </p>

            <p className="Price">
                Prix : {Prix}
            </p>

            <button className="AddPannier"
                onClick={() => {
                    AddProduct(product)
                }}
            >
                Ajouter au Pannier
            </button>

            <button className="GetMeeting">Prendre rendez-vous</button>

            <p className="Description">
                {Description}
            </p>
        </div>
    );
}
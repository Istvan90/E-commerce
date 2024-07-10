import { useState, React } from "react";
import '../../../CSS/AddBoutton.css';
import { addCart } from "../../../redux/action";
import { useDispatch } from "react-redux";

export function AddBoutton({ ThePrice, Product }) {
    const [clicked, setClicked] = useState(false);
    const [isHandlingClick, setIsHandlingClick] = useState(false)

    const dispatch = useDispatch();

    const handleClick = () => {
        setClicked(true);
        setIsHandlingClick(true)

        setTimeout(() => {
            setClicked(false);
            setIsHandlingClick(false)
        }, 3000);
    };

    const addProduct = (Product) => {
        if (!isHandlingClick) {
            dispatch(addCart(Product))
        }
    }

    return (
        <div>
            <button
                className={`button ${clicked ? 'checked' : 'not-checked'} ${clicked && 'checked-reset'

                    }`}
                data-content="Ajouté au pannier"

                onClick={
                    () => {
                        handleClick();
                        addProduct(Product);
                    }
                }
            >
                <span className="button-text">{ThePrice} Ajouter au panier</span>
            </button>
        </div>
    );
}
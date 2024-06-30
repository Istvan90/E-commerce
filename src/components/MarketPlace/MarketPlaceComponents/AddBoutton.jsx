import { useState, React } from "react";
import '../../../CSS/AddBoutton.css';

export function AddBoutton({ThePrice}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 3000);
    };

    return (
        <div>
            <button
                className={`button ${clicked ? 'checked' : 'not-checked'} ${
                    clicked && 'checked-reset'
                }`}
                data-content="Ajouté au pannier"
                onClick={handleClick}
            >
                <span className="button-text">{ThePrice} Ajouter au panier</span>
            </button>
        </div>
    );
}

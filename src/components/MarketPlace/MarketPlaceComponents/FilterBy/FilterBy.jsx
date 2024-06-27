import React from 'react';

export function ThisFilterBy() {
    return (
        <div>
            <h5>Accueil / Bijoux créateurs :</h5>

            <div className="d-flex Filtre">
                <h6 className="FiltrerPar">Filtrer par :</h6>

                <ul>
                    <List Title={"Par matériaux"} OptionList={["Or", "Or blanc", "Or Jaune", "Argent"]} />
                    <List Title={"Gemme"} OptionList={["Gemme pas", "GemmeBien", "Nuancier de couleur", "Vertis"]} />
                    <List Title={"Prix"} OptionList={["500 $ à 600 $", "600 $ à 700 $", "700 $ à 800 $", "800 $ à 900 $", "5000 $ et plus"]} />
                </ul>
            </div>
        </div>
    );
}

function List({ Title, OptionList }) {
    return (
        <li>
            <label htmlFor={Title} style={{ cursor: 'pointer' }}>
                {Title}
            </label>
            <select name={Title} id={Title}>
                {OptionList.map((Option, index) => (
                    <option key={index} value={Option} className="Option">
                        {Option}
                    </option>
                ))}
            </select>
        </li>
    );
}

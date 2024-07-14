import React from "react";
import MeetingLogo from "../../Image/Icone/PrendreRDV.jpg";
import { Link } from "react-router-dom";

export function Meeting() {
    return (
        <div className="meeting-responsive w-100 d-flex justify-content-center align-items-center flex-column gap-3"

            style={
                { marginTop: "300px" }
            }>

            <img src={MeetingLogo} alt="Meeting" className="img-fluid" style={{ width: "25px", height: "25px" }} />

            <h1 className="font-lateef">
                VENEZ NOUS RENCONTRER
            </h1>

            <div className="font-lateef d-flex justify-content-center align-items-center flex-column fs-5 text-center">
                <p >
                    Personnaliser votre bijou parmi notre collection avec des éléments tels que la gravure qui est offerte.
                </p>

                <p>Créer votre bijou en or et en platine à partir de votre imagination.</p>
            </div>

            <LinkRDV Value={"Prendre rendez-vous maintenant"} />
        </div>

    );
}

export function LinkRDV({ Value }) {
    return (
        <div className="Meet">
            <Link to="/prendre-rdv" className="text-decoration-none"
                style={
                    {
                        fontSize: "17px"
                    }
                }>
                {Value}
            </Link>
        </div>
    );
}
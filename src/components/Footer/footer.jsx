import "../../CSS/footer.css"
import { MeetingButton } from "../Header/HeaderComponents/MeetingButton";
import { Column } from "./FooterComponents/ListsColumn";
import { MyInput } from "./FooterComponents/TheInput";

export function MyFooter() {
    return (
        <div style={
            {
                marginTop: "100px"
            }
        }>
            <hr />
            <footer>
                <div className="d-flex One">
                    <Column ColumnName={"Service Client"} RowList={[
                        "Votre baguier offert",
                        "Satisfait remboursé",
                        "Contactez-nous",
                        "Paiement 3fois sans frais",
                        "Foire aux question",
                        "Systeme de livraison",
                        "Avis aux clients",
                    ]}
                    />

                    <Column ColumnName={"Notre entreprise"} RowList={[
                        "Recrutement",
                        "Nos politiques",
                        "Nos engagements",
                        "Votre bague sur mesure",
                        "Notre histoire",
                    ]}
                    />

                    <Column ColumnName={"Nous suivre"} RowList={[
                        "Satisfait remboursé",
                        "Contactez-nous",
                        "Systeme de livraison"
                    ]}
                    />
                </div>

                <div className="AddElectronique">
                    <h1 className="ColumnTitle">Joiallerie Madagascar</h1>
                    <div className="FooterlistP">
                        <p>
                            Soyez les premiers informés de nos dernieres créations,
                            d'inauguration de nos boutiques et bien plus encore
                        </p>

                        <MyInput/>

                        <MeetingButton Content={"S'inscrire maintenant"} />
                    </div>
                </div>
            </footer>
        </div>
    );
}
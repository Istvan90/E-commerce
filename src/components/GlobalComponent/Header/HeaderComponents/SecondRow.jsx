import { Link } from "react-router-dom";

export function SecondRow() {
    const List = [
        "Bagues de fiancailles",
        "Mariage",
        "Pierres précieuse",
        "Bijoux",
        "Collection",
        "Atelier sur-mesure",
        "Pierres précieuse"
    ]

    return (
        <div className="display-flex flex-direction-column SecondRow">
            <ul className="d-flex justify-content-center p-0">
                {
                    List.map(
                        List => (
                            <TheList Title={List} />
                        )
                    )
                }
            </ul>
        </div>
    );
}

export function TheList({ Title }) {
    return (
        <li key={Title}>
            <Link
                to="/market-place"
            >
                <p id="style-2"
                    style={
                        {
                            fontSize: "13px",
                            textTransform: "uppercase"
                        }
                    }
                >
                    {Title}
                </p>
            </Link>
            <hr />
        </li>
    );
}
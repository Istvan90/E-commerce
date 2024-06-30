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
                            <TheList Title={List} Link={List} />
                        )
                    )
                }
            </ul>
        </div>
    );
}

export function TheList({ Title, Link }) {
    return (
        <li key={Title}>
            <a
                id="style-2"
                href={'/' + Link}
                style={
                    {
                        fontSize: "13px",
                        textTransform: "uppercase"
                    }
                }
            >
                {Title}
            </a>

            <hr />
        </li>
    );
}

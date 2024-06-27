export function SecondRow() {
    return (
        <div className="display-flex flex-direction-column SecondRow">
            <ul className="d-flex justify-content-center p-0">
                <List Title={"Bagues de fiancailles"} Link="/MarketPlace" />
                <List Title={"Mariage"} Link="/MarketPlace" />
                <List Title={"Pierres précieuse"} Link="/MarketPlace" />
                <List Title={"Bijoux"} Link="/MarketPlace" />
                <List Title={"Collection"} Link="/MarketPlace" />
                <List Title={"Atelier sur-mesure"} Link="/MarketPlace" />
                <List Title={"Pierres précieuse"} Link="/MarketPlace" />
            </ul>
        </div>
    );
}

export function List({ Title, Link }) {
    return (
        <li>
            <a href={Link} style={
                {
                    fontSize: "13px",
                    textTransform: "uppercase"
                }
            }>
                {Title}
            </a>
        </li>
    );
}

export function CardCollection({ Image , CollectionName}) {
    return (
        <div className="CardCollection">
            <p className="CollectionName">{CollectionName}</p>
            <div className="bar"></div>
            <img src={Image} alt="Collection item" className="collection-image" />
        </div>
    );
}
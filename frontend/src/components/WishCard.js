import categoriesMap from "../utils/categoriesMap";

function WishCard(props) {
    const wish = props.wish

    return (
        <div className="card " style={ { maxWidth: "16rem" } }>
            <img src={wish.image} className="card-img-top" alt="Imagem de desejo"/>
            <div className="card-body">
                <h5 className="card-title">{wish.name}</h5>
                <p className="card-text">R${parseFloat(wish.price).toFixed(2)}</p>
                <a href={wish.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Confira!</a>
            </div>
            <div className="card-footer">
                <span className={`small category ${wish.category}`}>{categoriesMap[wish.category]}</span>
            </div>
        </div>
    )
}

export default WishCard;
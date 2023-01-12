import categoriesMap from "../utils/categoriesMap";

function WishFilter(props) {

    const categoryClickHandler = category => {
        props.onCategoryFilterChange(category);
    } 

    const sortClickHandler = event => {
        const selected = event.target.value;
        const sort = selected === "Nome" ? "name" : "price";
        props.onSortParamChange(sort);
    } 

    return (
        <div className="wish-filter">
            <div className="category-filter">
                <span onClick={() => categoryClickHandler("")} className={`large category all`}>{categoriesMap["all"]}</span>
                <span onClick={() => categoryClickHandler("misc")} className={`large category misc`}>{categoriesMap["misc"]}</span>
                <span onClick={() => categoryClickHandler("device")} className={`large category device`}>{categoriesMap["device"]}</span>
                <span onClick={() => categoryClickHandler("game")} className={`large category game`}>{categoriesMap["game"]}</span>
                <span onClick={() => categoryClickHandler("music")} className={`large category music`}>{categoriesMap["music"]}</span>
                <span onClick={() => categoryClickHandler("decoration")} className={`large category decoration`}>{categoriesMap["decoration"]}</span>
                <span onClick={() => categoryClickHandler("course")} className={`large category course`}>{categoriesMap["course"]}</span>
            </div>
            <select className="form-select form-select-sm sort-select" onChange={sortClickHandler}>
                <option>Nome</option>
                <option>Preço</option>
            </select>
        </div>
    )
}        

export default WishFilter;
import { useEffect, useState } from "react";
import WishCard from "../components/WishCard";
import * as _ from "lodash";
import WishFilter from "../components/WishFilter";

function Home() {
    const [wishlist, setWishlist] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sortParam, setSortParam] = useState("name");

    const fetchWishlist = async () => {
        const response = await fetch("http://localhost:4000/api/wishes");
        const json = await response.json();

        if(response.ok) {
            setWishlist(json);
        }
    }

    const categoryFilterChangeHandler = (category) => {
        setCategoryFilter(category);
    }

    const sortParamChangeHandler = (sortParam) => {
        setSortParam(sortParam);
    }

    const handleSort = (filteredList) => {
        if (sortParam === "price") {
            return _.orderBy(filteredList, "price", "desc");
        }
        return _.orderBy(filteredList, "name", "asc");
    }

    useEffect(() => {
        fetchWishlist();
    }, []);

    const filteredList = wishlist.filter(wish => wish.category.includes(categoryFilter));
    const sortedList = handleSort(filteredList);

    return (
        <div className="home container">
            <WishFilter onCategoryFilterChange={categoryFilterChangeHandler} onSortParamChange={sortParamChangeHandler}/>
            <section className="grid">
                {sortedList && sortedList.map((wish => (
                    <WishCard key={wish._id} wish={wish} />
                )))}
            </section>
        </div>
    )
}

export default Home;
import { useEffect, useState } from "react";
import WishCard from "../components/WishCard";

function Home() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            const response = await fetch("http://localhost:4000/api/wishes");
            const json = await response.json();
            console.log(json);

            if(response.ok) {
                setWishlist(json);
            }
        }

        fetchWishlist();
    }, []);

    return (
        <div className="home container">
            <section className="grid">
                {wishlist && wishlist.map((wish => (
                    <WishCard key={wish._id} wish={wish} />
                )))}
            </section>
        </div>
    )
}

export default Home;
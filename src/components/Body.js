import RestaurantCard from "./RestaurantCard.js";

const Body =()=>{
    return(
        <div className="body">
            <div className="Filter">
                <button className="filter-btn" onMouseOver={()=>{console.log("Button Clicked")}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                <RestaurantCard
                resname="KFC"
                cuisine="Fried Chicken ,  American"
                stars="4.4 Stars"
                />
                <RestaurantCard
                resname="Maria"
                cuisine="chicken Biriyani ,  Iyanamabakkam"
                stars="4.3 Stars"
                />
                <RestaurantCard
                resname="A2B"
                cuisine="Sweets ,  Adyar"
                stars="4.2 Stars"
                />
                <RestaurantCard
                resname="Aryas"
                cuisine="Sambar rice ,  Nagerkovil"
                stars="4.1 Stars"
                />
                <RestaurantCard
                resname="Amman"
                cuisine="Chicken lollipup ,  Peelamedu"
                stars="4.0 Stars"
                />
                <RestaurantCard
                resname="Meenakshi"
                cuisine="Barotta ,  Madurai"
                stars="4.8 Stars"
                />
                <RestaurantCard
                resname="Barbeqew"
                cuisine="Fried Chicken ,  Vanagaram"
                stars="4.7 Stars"
                />
                <RestaurantCard
                resname="RR Biriyani"
                cuisine="Mutton Biriyani ,  Salem"
                stars="4.8 Stars"
                />
                
            </div>
        </div>
    )
}

export default Body;
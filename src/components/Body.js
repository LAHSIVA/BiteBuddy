import RestaurantCard from "./RestaurantCard.js";
import {useState} from "react";
import { LOGO_URL } from "../utils/constants.js";

const Body =()=>{
    const [listofRestaurants,setlistofRestaurants]=useState([
        {
            data:{
                id:"1234",
                name:"KFC",
                cloudinaryImageId:{LOGO_URL},
                cuisines:["burgers"],
                costForTwo:40000,
                deliveryTime:36,
                avgRating:"4.5",
            }
        },
        {
            data:{
                id:"1235",
                name:"Dominos",
                cloudinaryImageId:{LOGO_URL},
                cuisines:["burgers"],
                costForTwo:40000,
                deliveryTime:36,
                avgRating:"3.5",
            }
        },
        {
            data:{
                id:"1236",
                name:"McDonalds",
                cloudinaryImageId:{LOGO_URL},
                cuisines:["burgers"],
                costForTwo:40000,
                deliveryTime:36,
                avgRating:"4.8",
            }
        },
    ]);


    return(
        <div className="body">
            <div className="Filter">
                <button 
                className="filter-btn"
                 onClick={()=>{
                    const filterList = listofRestaurants.filter(
                        (res)=>res.data.avgRating>4
                    );
                    setlistofRestaurants(filterList);
                 }}
            >
                TopRatedRestaurants
            </button>
            </div>
            <div className="res-container">
                {listofRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
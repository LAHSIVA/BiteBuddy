import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


const RestaurantCard=(props)=>{
    const{resData}=props;
    
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17824.JPG"            
            />
            <h3>{props.name}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.avgRating}</h4>
        </div>
    )
}


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
    
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
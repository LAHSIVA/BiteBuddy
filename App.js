import React from "react"
import ReactDOM from "react-dom/client"



const Header =() =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9T_b7XTjvXI85fTQKSWFfcKHuJLi2oGClw&s"/>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li className="nav-Home">Home</li>
                    <li className="nav-About">About</li>
                    <li className="nav-Contact">Contact</li>
                    <li className="nav-Cart">Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17824.JPG"            
            />
            <h3>KFC</h3>
            <h4>Fried Chicken ,  American</h4>
            <h4>4.4 Stars</h4>
        </div>
    )
}
const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
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
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

const RestaurantCard=(props)=>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17824.JPG"            
            />
            <h3>{props.resname}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars}</h4>
        </div>
    )
}
const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
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
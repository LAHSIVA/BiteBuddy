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

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    );
    
};

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
import {LOGO_URL} from "../utils/constants.js";

const Header =() =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
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

export default Header;
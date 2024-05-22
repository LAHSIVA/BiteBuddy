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

export default RestaurantCard;
import React from "react";

export default function CardStatistic({title, value, icon}){
    return (
        <div className="card-statistic" style={cardStyle}>
            <div className="icon">{icon}</div>
            <div className="info">
                <h3>{title}</h3>
                <p style={{fontWeight:'bold', margin:'15px',fontSize:'20px'}}>{value}</p>
            </div>
        </div>
    );
}

const cardStyle = {
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px #f1356d",
    backgroundColor: "white",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
    margin: "20px"
}
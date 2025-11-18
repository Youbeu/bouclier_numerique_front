import React from "react";

export default function CardStatistic({title, value, icon}){
    return (
        <div className="stat-card">
            <div className="stat-card-icon">
                {icon}
            </div>
            <div className="stat-card-content">
                <h3 className="stat-card-title">{title}</h3>
                <p className="stat-card-value">{value}</p>
            </div>
        </div>
    );
}
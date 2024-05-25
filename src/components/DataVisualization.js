import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataVisualization.css';

const DataVisualization = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="main-content">
            {data ? (
                <div className="section">
                    <h1>Data Analytics Showcase</h1>
                    <h2>Model Predictions:</h2>
                    <ul>
                        {data.predictions.map((prediction, index) => (
                            <li key={index}>{prediction}</li>
                        ))}
                    </ul>
                    <img src="/static/age_distribution_r.png" alt="Age Distribution" />
                </div>
            ) : (
                <div className="section">
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default DataVisualization;
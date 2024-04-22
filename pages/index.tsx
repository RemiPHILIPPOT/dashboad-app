import React, { useEffect, useState } from "react";
import { fetchActivityData } from "../lib/api";
import { WidgetData } from "../lib/types";

const Home: React.FC = () => {
    const [activityData, setActivityData] = useState<WidgetData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchActivityData();
                setActivityData(data);
            } catch (error) {
                console.error("Error fetching activity data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {activityData.map((item) => (
                    <li key={item.id}>
                        Timestamp: {item.timestamp}, Value: {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

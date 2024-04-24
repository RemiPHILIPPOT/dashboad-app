import React, { useEffect, useState } from "react";
import { fetchActivityData } from "../lib/api";
import { WidgetData } from "../lib/types";
import ChartWidget from "../components/Dashboard/ChartWidget";
import TableWidget from "../components/Dashboard/TableWidget";
import KPIWidget from "../components/Dashboard/KPIWidget";
import MapWidget from "../components/Dashboard/MapWidget";
import DashboardSettings from "../components/Dashboard/DashboardSettings";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import "tailwindcss/tailwind.css";

const Home: React.FC = () => {
    const [activityData, setActivityData] = useState<WidgetData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showChart, setShowChart] = useState<boolean>(true);
    const [showMap, setShowMap] = useState<boolean>(true);
    const [showKPI, setShowKPI] = useState<boolean>(true);
    const [showTable, setShowTable] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchActivityData();
                setActivityData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching activity data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <DashboardSettings
                setShowChart={setShowChart}
                setShowMap={setShowMap}
                setShowKPI={setShowKPI}
                setShowTable={setShowTable}
            />
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="grid grid-cols-2 gap-2">
                    {showChart && (
                        <ChartWidget data={activityData} isActive={showChart} />
                    )}
                    {showMap && (
                        <MapWidget data={activityData} isActive={showMap} />
                    )}
                    {showKPI && (
                        <KPIWidget data={activityData} isActive={showKPI} />
                    )}
                    {showTable && (
                        <TableWidget data={activityData} isActive={showTable} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;

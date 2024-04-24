import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { WidgetData } from "../../lib/types";

interface MapWidgetProps {
    data: WidgetData[];
    isActive: boolean;
}

const MapWidget: React.FC<MapWidgetProps> = ({ data, isActive }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!chartRef.current || !isActive) return;

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        const chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: data.map((entry) => entry.timestamp),
                datasets: [
                    {
                        label: "Values",
                        data: data.map((entry) => entry.value),
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data, isActive]);

    return (
        <div className={`border p-4 ${isActive ? "" : "hidden"}`}>
            <h2>Map Widget</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default MapWidget;

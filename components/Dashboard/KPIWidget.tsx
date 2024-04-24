import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { WidgetData } from "../../lib/types";

interface KPIWidgetProps {
    data: WidgetData[];
    isActive: boolean;
}

const KPIWidget: React.FC<KPIWidgetProps> = ({ data, isActive }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!chartRef.current || !isActive) return;

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: data.map((entry) => entry.timestamp),
                datasets: [
                    {
                        label: "Values",
                        data: data.map((entry) => entry.value),
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data, isActive]);

    return (
        <div className={`border p-4 ${isActive ? "" : "hidden"}`}>
            <h2>KPI Widget</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default KPIWidget;

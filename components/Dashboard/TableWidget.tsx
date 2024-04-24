import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { WidgetData } from "../../lib/types";

interface TableWidgetProps {
    data: WidgetData[];
    isActive: boolean;
}

const TableWidget: React.FC<TableWidgetProps> = ({ data, isActive }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!chartRef.current || !isActive) return;

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        const chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.map((entry) => entry.timestamp),
                datasets: [
                    {
                        label: "Values",
                        data: data.map((entry) => entry.value),
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
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
            <h2>Table Widget</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default TableWidget;

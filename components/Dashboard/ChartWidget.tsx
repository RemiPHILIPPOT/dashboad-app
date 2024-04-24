import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { WidgetData } from "../../lib/types";

interface ChartWidgetProps {
    data: WidgetData[];
    isActive: boolean;
    onInteraction?: () => void;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({
    data,
    isActive,
    onInteraction,
}) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        if (isActive) {
            chartInstance.current = new Chart(ctx, {
                type: "line",
                data: {
                    labels: data.map((entry: WidgetData) => entry.timestamp),
                    datasets: [
                        {
                            label: "Values",
                            data: data.map((entry: WidgetData) => entry.value),
                            fill: false,
                            borderColor: "rgb(75, 192, 192)",
                            tension: 0.1,
                        },
                    ],
                },
            });

            return () => {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
            };
        }
    }, [data, isActive]);

    useEffect(() => {
        // Si le widget devient inactif, détruire le graphique
        if (!isActive && chartInstance.current) {
            chartInstance.current.destroy();
        }
    }, [isActive]);

    return (
        <div className={`border p-4 ${isActive ? "" : "hidden"}`}>
            <h2>Chart Widget</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default ChartWidget;

import React, { useState, useEffect } from "react";

interface DashboardSettingsProps {
    setShowChart: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
    setShowKPI: React.Dispatch<React.SetStateAction<boolean>>;
    setShowTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSettings: React.FC<DashboardSettingsProps> = ({
    setShowChart,
    setShowMap,
    setShowKPI,
    setShowTable,
}) => {
    const [activeWidgets, setActiveWidgets] = useState<string[]>([]);

    useEffect(() => {
        const initialActiveWidgets: string[] = [];
        // Vérifier si le widget doit être activé en fonction de la valeur du state associé
        setShowChart((prev) => {
            if (prev) initialActiveWidgets.push("Chart");
            return prev;
        });
        setShowMap((prev) => {
            if (prev) initialActiveWidgets.push("Map");
            return prev;
        });
        setShowKPI((prev) => {
            if (prev) initialActiveWidgets.push("KPI");
            return prev;
        });
        setShowTable((prev) => {
            if (prev) initialActiveWidgets.push("Table");
            return prev;
        });
        setActiveWidgets(initialActiveWidgets);
    }, [setShowChart, setShowMap, setShowKPI, setShowTable]);

    const toggleWidget = (widget: string) => {
        if (activeWidgets.includes(widget)) {
            setActiveWidgets(activeWidgets.filter((w) => w !== widget));
            switch (widget) {
                case "Chart":
                    setShowChart(false);
                    break;
                case "Map":
                    setShowMap(false);
                    break;
                case "KPI":
                    setShowKPI(false);
                    break;
                case "Table":
                    setShowTable(false);
                    break;
                default:
                    break;
            }
        } else {
            setActiveWidgets([...activeWidgets, widget]);
            switch (widget) {
                case "Chart":
                    setShowChart(true);
                    break;
                case "Map":
                    setShowMap(true);
                    break;
                case "KPI":
                    setShowKPI(true);
                    break;
                case "Table":
                    setShowTable(true);
                    break;
                default:
                    break;
            }
        }
    };

    const isWidgetActive = (widget: string) => {
        return activeWidgets.includes(widget);
    };

    return (
        <div className="dashboard-settings bg-gray-200 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold mb-2">Dashboard Settings</h2>
            <div className="flex space-x-2">
                <button
                    onClick={() => toggleWidget("Chart")}
                    className={`py-2 px-4 rounded ${
                        isWidgetActive("Chart")
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Toggle Chart
                </button>
                <button
                    onClick={() => toggleWidget("Map")}
                    className={`py-2 px-4 rounded ${
                        isWidgetActive("Map")
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Toggle Map
                </button>
                <button
                    onClick={() => toggleWidget("KPI")}
                    className={`py-2 px-4 rounded ${
                        isWidgetActive("KPI")
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Toggle KPI
                </button>
                <button
                    onClick={() => toggleWidget("Table")}
                    className={`py-2 px-4 rounded ${
                        isWidgetActive("Table")
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    }`}
                >
                    Toggle Table
                </button>
            </div>
        </div>
    );
};

export default DashboardSettings;

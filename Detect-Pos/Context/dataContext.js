import React from "react";
import { createContext } from "react";

export const dataContext = createContext();

export const dataProvider = ({ children }) => {
    const [data, setData] = React.useState({
        accelerometerData: { x: 0, y: 0, z: 0 },
        gyroscopeData: { x: 0, y: 0, z: 0 },
        magnetometerData: { x: 0, y: 0, z: 0 },
    });

    return (
        <dataContext.Provider value={{ data, setData }}>
            {children}
        </dataContext.Provider>
    );
}

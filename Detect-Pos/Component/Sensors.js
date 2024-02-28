import React from "react";
import * as Sensors from "expo-sensors";
import { useState } from "react";
import { useEffect } from "react";


export const useSensor = () => {
    const [sensorData, setSensorData] = useState({
        accelerometerData: { x: 0, y: 0, z: 0 },
        gyroscopeData: { x: 0, y: 0, z: 0 },
        magnetometerData: { x: 0, y: 0, z: 0 },

    });

    Sensors.Accelerometer.setUpdateInterval(1000);
    Sensors.Gyroscope.setUpdateInterval(1000);
    Sensors.Magnetometer.setUpdateInterval(1000);

    useEffect(() => {
       
        const subscription = Sensors.Accelerometer.addListener((accelerometerData) => {
            setSensorData((prev) => ({ ...prev, accelerometerData }));
        });

        const gyroscopeSubscription = Sensors.Gyroscope.addListener((gyroscopeData) => {
            setSensorData((prev) => ({ ...prev, gyroscopeData }));
        });

        const magnetometerSubscription = Sensors.Magnetometer.addListener((magnetometerData) => {
            setSensorData((prev) => ({ ...prev, magnetometerData }));
        });

        return () => {
            subscription.remove();
            gyroscopeSubscription.remove();
            magnetometerSubscription.remove();
        };
    });

    return sensorData;
}


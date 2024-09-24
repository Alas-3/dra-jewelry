import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';

// Directly use the JSON URL for the animation data
const checkMarkAnimation = 'https://lottie.host/2a3a928d-a421-4d2b-a8b5-89ee4e0775aa/8kjljHhNfF.json';

const CheckMark = () => {
    const lottieRef = useRef(null);
    const [animationData, setAnimationData] = useState(null);

    // Load animation data
    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch(checkMarkAnimation);
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error('Failed to load animation data:', error);
            }
        };

        fetchAnimation();
    }, []);

    // Start playing the animation and adjust speed
    useEffect(() => {
        if (lottieRef.current && animationData) {
            lottieRef.current.setSpeed(1); // Set animation speed to 1
            lottieRef.current.play(); // Start playing the animation
            
            // Stop just before the animation ends
            const duration = lottieRef.current.getDuration(true); // Get the total duration
            const stopTime = duration - 0.001; // Stop 1 millisecond before the end

            // Set a timeout to stop the animation just before it ends
            const timer = setTimeout(() => {
                if (lottieRef.current) {
                    lottieRef.current.goToAndStop(stopTime, true); // Go to the stopTime and hold
                }
            }, duration * 1000 - 1); // Convert duration to milliseconds and subtract 1

            return () => clearTimeout(timer); // Clear the timer on unmount
        }
    }, [animationData]);

    return (
        <div style={{ width: '80px', height: '80px' }}>
            {animationData ? (
                <Lottie 
                    lottieRef={lottieRef} 
                    animationData={animationData} 
                    loop={false} 
                />
            ) : null} {/* No loading placeholder, just render the Lottie directly */}
        </div>
    );
};

export default CheckMark;

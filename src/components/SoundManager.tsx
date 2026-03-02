import React, { useState, useEffect, useCallback } from 'react';

const sounds = {
    click: '/sounds/click.mp3',
    hover: '/sounds/hover.mp3',
    alert: '/sounds/alert.mp3',
    startup: '/sounds/startup.mp3'
};

export const SoundManager = () => {
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const savedMute = localStorage.getItem('isMuted');
        if (savedMute !== null) {
            setIsMuted(JSON.parse(savedMute));
        }
    }, []);

    const toggleMute = () => {
        const newMute = !isMuted;
        setIsMuted(newMute);
        localStorage.setItem('isMuted', JSON.stringify(newMute));
    };

    const playSound = useCallback((soundName: keyof typeof sounds) => {
        if (isMuted) return;
        const audio = new Audio(sounds[soundName]);
        audio.volume = 0.2;
        audio.play().catch(() => { }); // Catch play errors (e.g. user hasn't interacted)
    }, [isMuted]);

    // Expose playSound globally for Astro components to use
    useEffect(() => {
        (window as any).playSound = playSound;
    }, [playSound]);

    return null;
};

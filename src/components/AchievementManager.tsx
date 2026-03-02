import React, { useState, useEffect } from 'react';

const BADGES = [
    { id: 'boot', label: 'SYSTEM_UPTIME', icon: '🚀', requirement: 'BOOT SEQUENCE COMPLETED' },
    { id: 'skills', label: 'SKILLS_REVEALED', icon: '🛠️', requirement: 'VIEW TECHNICAL SKILLS' },
    { id: 'threat', label: 'THREAT_MONITOR', icon: '🛡️', requirement: 'ACTIVE MONITORING ENGAGED' },
    { id: 'projects', label: 'PROJECTS_SYNC', icon: '📂', requirement: 'ALL PROJECTS DATABASE INDEXED' },
    { id: 'contact', label: 'SECURE_CHANNEL', icon: '📧', requirement: 'COMMUNICATION SYSTEMS TESTED' },
];

export const AchievementManager = () => {
    const [unlocked, setUnlocked] = useState<string[]>([]);
    const [toast, setToast] = useState<{ id: string, label: string, icon: string } | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('unlockedAchievements');
        if (saved) {
            setUnlocked(JSON.parse(saved));
        }

        const handleAchievement = (event: CustomEvent<string>) => {
            const id = event.detail;
            const alreadyUnlocked = JSON.parse(localStorage.getItem('unlockedAchievements') || '[]');

            if (!alreadyUnlocked.includes(id)) {
                const badge = BADGES.find(b => b.id === id);
                if (badge) {
                    const newUnlocked = [...alreadyUnlocked, id];
                    setUnlocked(newUnlocked);
                    localStorage.setItem('unlockedAchievements', JSON.stringify(newUnlocked));
                    setToast(badge);
                    if ((window as any).playSound) (window as any).playSound('alert');

                    setTimeout(() => {
                        setToast(null);
                    }, 5000);
                }
            }
        };

        window.addEventListener('achievementUnlocked' as any, handleAchievement as any);
        return () => window.removeEventListener('achievementUnlocked' as any, handleAchievement as any);
    }, []);

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div className="fixed top-8 right-8 z-[101] flex items-center gap-4 p-4 rounded-2xl bg-black/80 border border-cyber-purple/50 backdrop-blur-xl animate-in slide-in-from-top-12 duration-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] min-w-[300px]">
                    <div className="w-12 h-12 rounded-xl bg-cyber-purple/20 flex items-center justify-center text-2xl border border-cyber-purple/30">
                        {toast.icon}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-cyber-purple uppercase tracking-[0.3em] font-bold">SECURITY CLEARANCE INCREASED</span>
                        <span className="text-white font-bold font-mono tracking-tighter">{toast.label}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-cyber-purple animate-progress" style={{ animationDuration: '5s' }}></div>
                </div>
            )}

            {/* Floating Badge Counter */}
            <div className="fixed bottom-8 left-8 z-[100] flex gap-2">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">CLEARANCE_LEVEL:</span>
                    <span className="text-cyber-purple font-bold font-mono text-xs">{unlocked.length}/{BADGES.length}</span>
                </div>
            </div>
        </>
    );
};

export const unlockAchievement = (id: string) => {
    window.dispatchEvent(new CustomEvent('achievementUnlocked', { detail: id }));
};

import { useState, useEffect, useRef } from 'react';

const ATTACKS = [
    { id: 1, type: "DDOS", origin: "DE-01", target: "PORT:80", status: "BLOCKED", color: "text-red-500" },
    { id: 2, type: "WAF_BLOCK", origin: "US-22", target: "API:ENDPOINT", status: "MITIGATED", color: "text-blue-500" },
    { id: 3, type: "PHISHING", origin: "YEM-01", target: "SMTPS:LOGIN", status: "ISOLATED", color: "text-emerald-500" },
    { id: 4, type: "SQL_INJ", origin: "RU-54", target: "DB:RECORDS", status: "DROPPED", color: "text-orange-500" },
    { id: 5, type: "XSS_DET", origin: "IN-12", target: "STATIC:RESOURCES", status: "FILTERED", color: "text-cyber-purple" },
];

export const ThreatMap = () => {
    const [activeAttacks, setActiveAttacks] = useState<typeof ATTACKS>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const newAttack = ATTACKS[Math.floor(Math.random() * ATTACKS.length)];
            setActiveAttacks(prev => [newAttack, ...prev.slice(0, 4)]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number, y: number, vx: number, vy: number, life: number }[] = [];

        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 800;
            canvas.height = canvas.parentElement?.clientHeight || 400;
        };

        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Grid Background
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 40) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();
            }
            for (let i = 0; i < canvas.height; i += 40) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }

            // Draw random data flow lines
            if (Math.random() > 0.95) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 100
                });
            }

            particles = particles.filter(p => p.life > 0);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 1;
                ctx.fillStyle = `rgba(168, 85, 247, ${p.life / 100 * 0.5})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="relative w-full h-full bg-[#030303] border border-white/5 rounded-3xl overflow-hidden group">
            <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">LIVE_THREAT_DETECTION</span>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-600 uppercase">ACTIVE_FILTERS: ALL</div>
                </div>

                <div className="flex-1 space-y-2 font-mono text-[9px] overflow-hidden">
                    {activeAttacks.map((attack, i) => (
                        <div
                            key={`${attack.id}-${i}`}
                            className={`flex items-center justify-between border-b border-white/5 pb-1 animate-in slide-in-from-right duration-500`}
                        >
                            <div className="flex gap-4">
                                <span className={`font-bold ${attack.color}`}>{attack.type}</span>
                                <span className="text-zinc-600">[{attack.origin}]</span>
                                <span className="text-zinc-400">-{">"} {attack.target}</span>
                            </div>
                            <span className={`px-1.5 py-0.5 rounded border border-current scale-[0.8] opacity-70 ${attack.color}`}>
                                {attack.status}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-end">
                    <div className="space-y-1">
                        <div className="text-[8px] text-zinc-700 font-mono">GLOBAL_INCIDENTS_24H</div>
                        <div className="text-xl font-bold font-mono text-white/40">124,592</div>
                    </div>
                    <div className="w-32 h-8 bg-cyber-purple/5 border border-cyber-purple/20 rounded flex items-center justify-center">
                        <span className="text-[8px] font-mono text-cyber-purple animate-pulse font-bold tracking-[0.2em]">THREAT_SCAN_OK</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

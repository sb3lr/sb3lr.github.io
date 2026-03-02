import { useState, useEffect } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const commands = [
    { cmd: 'whoami', out: 'saeed\nrole: cybersecurity_student\nstatus: active_security_researcher' },
    { cmd: 'ls /etc/content_creation', out: 'youtube_video_01.mp4\nphishing_awareness_labs\nsocial_engineering_concepts' },
    { cmd: 'nmap -sV target.local', out: 'Starting Nmap 7.93...\nPORT   STATE SERVICE\n80/tcp open  http (Web Security Fundamentals)\nReady.' },
    { cmd: './run_vulnerability_scan.sh', out: 'Initializing scan...\nScanning for common web vulnerabilities [DONE]\nSecurity level: HIGH.' }
];


export function TerminalWidget() {
    const [history, setHistory] = useState<{ cmd: string, out: string }[]>([]);
    const [cmdIndex, setCmdIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [currentTyped, setCurrentTyped] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (cmdIndex >= commands.length) return;

        const currentCommand = commands[cmdIndex].cmd;
        let charIndex = 0;
        setIsTyping(true);

        const typeInterval = setInterval(() => {
            setCurrentTyped((prev) => prev + currentCommand.charAt(charIndex));
            charIndex++;

            if (charIndex === currentCommand.length) {
                clearInterval(typeInterval);
                setIsTyping(false);

                // Wait a bit, then show output and queue next command
                setTimeout(() => {
                    setHistory(prev => [...prev, commands[cmdIndex]]);
                    setCurrentTyped('');
                    setCmdIndex(prev => prev + 1);
                }, 600);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [cmdIndex]);

    const handleCopy = () => {
        const text = history.map(h => `$ ${h.cmd}\n${h.out}`).join('\n');
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full h-full min-h-[300px] flex flex-col font-mono text-sm bg-black/40 rounded-xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-zinc-900/80 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2 text-zinc-400">
                    <Terminal className="w-4 h-4" />
                    <span className="text-xs">saeed@kali:~</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                    title="Copy Terminal Output"
                >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-1 overflow-y-auto text-left" dir="ltr">
                {history.map((item, idx) => (
                    <div key={idx} className="mb-4">
                        <div className="flex items-center gap-2 text-emerald-400 mb-1">
                            <span className="text-sky-400">➜</span>
                            <span className="text-zinc-300">~</span>
                            <span className="text-emerald-400">{item.cmd}</span>
                        </div>
                        <div className="text-zinc-400 whitespace-pre-wrap pl-6 leading-relaxed">
                            {item.out}
                        </div>
                    </div>
                ))}

                {/* Current Typing Command */}
                {cmdIndex < commands.length && (
                    <div className="flex items-center gap-2 text-emerald-400">
                        <span className="text-sky-400">➜</span>
                        <span className="text-zinc-300">~</span>
                        <span className="text-emerald-400 bg-transparent flex items-center">
                            {currentTyped}
                            {isTyping && <span className="w-2 h-4 bg-emerald-400 inline-block ml-1 animate-pulse" />}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export type PortfolioNodeData = {
    label: string;
    category: 'saeed' | 'university' | 'certificates' | 'skills' | 'projects' | 'contact';
    description?: string;
    descriptionEn?: string;
    details?: string[];
    detailsEn?: string[];
    link?: string;
    labelEn?: string;
};

export const initialNodes: any[] = [
    // Center Node (Saeed)
    {
        id: 'saeed',
        data: {
            label: 'سعيد بران',
            labelEn: 'Saeed Barran',
            category: 'saeed',
            description: 'طالب بكالوريوس أمن سيبراني (تخرج متوقع 2027) مع خبرة بحثية عملية لأكثر من 5 سنوات في الهندسة الاجتماعية، فحص الشبكات، واختبار اختراق المواقع.',
            descriptionEn: 'BSc Cybersecurity student (expected graduation in 2027) with 5+ years of hands-on research in social engineering, network assessment, and web penetration testing.',
        },
    },

    // University
    {
        id: 'university',
        data: {
            label: 'جامعة العلوم والتكنولوجيا',
            labelEn: 'University of Science and Technology',
            category: 'university',
            description: 'بكالوريوس أمن سيبراني (2023 - 2027 المتوقع).',
            descriptionEn: 'BSc in Cybersecurity (2023 - 2027 expected).',
        },
    },

    // Certificates
    {
        id: 'certs-root',
        data: { label: 'الشهادات', labelEn: 'Certificates', category: 'certificates' },
    },
    {
        id: 'cert-google',
        data: {
            label: 'Google Cybersecurity Professional Certificate – Coursera',
            labelEn: 'Google Cybersecurity Professional Certificate – Coursera',
            category: 'certificates',
            description: 'شهادة مهنية من كورسيرا في الأمن السيبراني.',
            descriptionEn: 'Professional certificate from Coursera in Cybersecurity.'
        },
    },
    {
        id: 'cert-webdev',
        data: {
            label: 'Professional Web Developer Certificate',
            labelEn: 'Professional Web Developer Certificate',
            category: 'certificates',
            description: 'شهادة مطور ويب محترف.',
            descriptionEn: 'Professional web developer certificate.'
        },
    },
    {
        id: 'cert-icdl',
        data: {
            label: 'ICDL – International Computer Driving License',
            labelEn: 'ICDL – International Computer Driving License',
            category: 'certificates',
            description: 'رخصة قيادة الحاسوب الدولية.',
            descriptionEn: 'International Computer Driving License.'
        },
    },
    {
        id: 'cert-english',
        data: {
            label: 'English American Files – Starter',
            labelEn: 'English American Files – Starter',
            category: 'certificates',
            description: 'سلسلة English American Files – المستوى المبتدئ.',
            descriptionEn: 'English American Files series – Starter level.'
        },
    },

    // Skills
    {
        id: 'skills',
        data: {
            label: 'المهارات التقنية',
            labelEn: 'Technical Skills',
            category: 'skills',
            details: [
                'الهندسة الاجتماعية (Social Engineering)',
                'فحص الشبكات وتحليلها (Network Assessment)',
                'فحص واختبار اختراق المواقع (Web Pentesting)',
                'Nmap, Wireshark, Burp Suite',
                'Linux (Kali, Ubuntu)',
                'Python Scripting'
            ],
            detailsEn: [
                'Social Engineering',
                'Network Assessment and Scanning',
                'Web Penetration Testing',
                'Nmap, Wireshark, Burp Suite',
                'Linux (Kali, Ubuntu)',
                'Python Scripting'
            ]
        },
    },

    // Experience & Projects
    {
        id: 'experience-root',
        data: { label: 'الخبرات والمشاريع', labelEn: 'Experience & Projects', category: 'projects' },
    },
    {
        id: 'exp-portfolio',
        data: {
            label: 'منصة البورتفوليو الشخصية',
            labelEn: 'Personal Portfolio Platform',
            category: 'projects',
            description: 'تصميم وتطوير موقع شخصي كامل بهوية أمنية احترافية لعرض المشاريع والأدوات والشروحات.',
            descriptionEn: 'Designed and developed a full personal cybersecurity-styled platform to showcase projects, tools, and tutorials.',
            link: 'https://github.com/sb3lr'
        },
    },
    {
        id: 'exp-arp',
        data: {
            label: 'محاكاة هجمات ARP ومراقبة حركة الشبكة',
            labelEn: 'ARP Attack Simulation & Network Sniffing',
            category: 'projects',
            description: 'تنفيذ مختبر عملي لمحاكاة ARP Spoofing داخل بيئة اختبارية وتحليل تأثيره على أمن الشبكة.',
            descriptionEn: 'Built a practical lab to simulate ARP spoofing in a controlled environment and analyze its network security impact.',
            link: 'https://github.com/sb3lr'
        },
    },
    {
        id: 'exp-monitor',
        data: {
            label: 'نظام مراقبة شبكة مصغر (Mini-SIEM)',
            labelEn: 'Mini Network Monitoring System',
            category: 'projects',
            description: 'تطوير مشروع لمراقبة أحداث الشبكة وتحليلها بشكل مبسط، مستوحى من فكرة Splunk ولكن بحجم أخف.',
            descriptionEn: 'Developed a lightweight network event monitoring and analysis project inspired by Splunk concepts.'
        },
    },

    // Contact
    {
        id: 'contact',
        data: {
            label: 'التواصل',
            labelEn: 'Contact',
            category: 'contact',
            details: ['sb3ly@proton.me', '+967 779-624-646', 'Al-Mukalla, Yemen'],
            detailsEn: ['sb3ly@proton.me', '+967 779-624-646', 'Al-Mukalla, Yemen'],
        },
    },
];

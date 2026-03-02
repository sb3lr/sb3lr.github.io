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
            description: 'طالب أمن سيبراني وصانع محتوى تقني متخصص في التوعية الأمنية وتبسيط المفاهيم المعقدة.',
            descriptionEn: 'Cybersecurity student and technical content creator specialized in security awareness and simplifying complex concepts.',
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
            label: 'Google Cybersecurity',
            labelEn: 'Google Cybersecurity',
            category: 'certificates',
            description: 'شهادة مهنية من كورسيرا.',
            descriptionEn: 'Professional certificate from Coursera.'
        },
    },
    {
        id: 'cert-webdev',
        data: {
            label: 'Web Developer',
            labelEn: 'Web Developer',
            category: 'certificates',
            description: 'شهادة مطور ويب محترف.',
            descriptionEn: 'Professional web developer certificate.'
        },
    },
    {
        id: 'cert-icdl',
        data: {
            label: 'ICDL',
            labelEn: 'ICDL',
            category: 'certificates',
            description: 'رخصة قيادة الحاسوب الدولية.',
            descriptionEn: 'International Computer Driving License.'
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
                'Cybersecurity Awareness',
                'Phishing Attacks',
                'Web Security Fundamentals',
                'Network Security Basics',
                'Nmap, Wireshark, Burp Suite',
                'Linux (Kali, Ubuntu)',
                'Python Scripting'
            ],
            detailsEn: [
                'Cybersecurity Awareness',
                'Phishing Attacks',
                'Web Security Fundamentals',
                'Network Security Basics',
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
        id: 'exp-youtube',
        data: {
            label: 'صانع محتوى - YouTube',
            labelEn: 'Content Creator - YouTube',
            category: 'projects',
            description: 'نشر محتوى تعليمي حول التهديدات السيبرانية والهندسة الاجتماعية (@0xsb3lr).',
            descriptionEn: 'Publishing educational content about cyber threats and social engineering (@0xsb3lr).',
            link: 'https://youtube.com/@0xsb3lr'
        },
    },
    {
        id: 'exp-github',
        data: {
            label: 'مشاريع GitHub',
            labelEn: 'GitHub Projects',
            category: 'projects',
            description: 'توثيق مختبرات عملية وسكربتات Python للأمن السيبراني.',
            descriptionEn: 'Documenting practical labs and Python scripts for cybersecurity.',
            link: 'https://github.com/sb3lr'
        },
    },
    {
        id: 'exp-speaker',
        data: {
            label: 'متحدث تقني',
            labelEn: 'Technical Speaker',
            category: 'projects',
            description: 'تقديم جلسات توعوية حول تقنيات التصيد والوقاية منها.',
            descriptionEn: 'Delivering awareness sessions on phishing techniques and prevention.'
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

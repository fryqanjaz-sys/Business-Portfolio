const base = import.meta.env.BASE_URL || '/';

const img = (name) => `${base}team/${name}`;

const images = {
    ishaq: img('ishaq.jpeg'),
    osama: img('osama.jpeg'),
    hassan: img('hassan.jpeg'),
    ahmad: img('ahmad.png'),
    mohammed: img('mohammed.jpeg'),
    issa: img('issa.jpeg'),
    ibrahim: img('ibrahim.jpeg'),
    othman: img('othman.jpeg'),
    idris: img('idris.jpeg'),
};

const teamData = {
    ar: [
        {
            id: 1,
            name: "إسحاق موسى هارون",
            role: "مؤسس الفريق",
            bio: "",
            image: images.ishaq,
            social: {
                whatsapp: "https://wa.me/966555211667",
                snapchat: "#",
                email: "#"
            }
        },
        {
            id: 2,
            name: "اسامة عبدالوهاب",
            role: "عضو فريق وتقني",
            bio: "تقني مبرمج تطبيقات جوال",
            image: images.osama,
            social: {
                whatsapp: "https://wa.me/966530196610",
                snapchat: "#",
                email: "osmaa10321@gmail.com"
            }
        },
        {
            id: 3,
            name: "حسن إبراهيم",
            role: "عضو فريق وسكرتير",
            bio: "",
            image: images.hassan,
            social: {
                whatsapp: "https://wa.me/966534542190",
                snapchat: "https://snapchat.com/t/uxKJdOxn",
                email: "h321h321hh@gmail.com"
            }
        },
        {
            id: 4,
            name: "احمد محمد",
            role: "عضو فريق وتقني",
            bio: "",
            image: images.ahmad,
            social: {
                whatsapp: "https://wa.me/966550873299",
                snapchat: "https://snapchat.com/t/i2mSBGCB",
                email: "ahmadflatahp@gmail.com"
            }
        },
        {
            id: 5,
            name: "محمد عبدالوهاب",
            role: "عضو فريق وتقني",
            bio: "مصمم جرافيك",
            image: images.mohammed,
            social: {
                whatsapp: "https://wa.me/966577125554",
                snapchat: "https://snapchat.com/t/Op3Vd9tN",
                email: "kwmhmd457@gmail.com"
            }
        },
        {
            id: 6,
            name: "عيسى الحاج",
            role: "عضو فريق",
            bio: "استشاري",
            image: images.issa,
            social: {
                whatsapp: "https://wa.me/966558073401",
                snapchat: "https://snapchat.com/t/FozvvABW",
                email: "Issa.s.alhaj@gmail.com"
            }
        },
        {
            id: 7,
            name: "إبراهيم غندو",
            role: "عضو فريق",
            bio: "",
            image: images.ibrahim,
            social: {
                whatsapp: "https://wa.me/966500629984",
                snapchat: "https://snapchat.com/t/HWrONvme",
                email: "ibraheem.9051@gmail.com"
            }
        },
        {
            id: 8,
            name: "عثمان سيدي",
            role: "عضو فريق",
            bio: "",
            image: images.othman,
            social: {
                whatsapp: "https://wa.me/966566516532",
                snapchat: "https://snapchat.com/t/Hk9UJtcp",
                email: "thmansydy5@gmail.com"
            }
        },
        {
            id: 8,
            name: "إدريس إبراهيم",
            role: "عضو فريق",
            bio: "",
            image: images.idris,
            social: {
                whatsapp: "https://wa.me/966599173248",
                snapchat: "#",
                email: "#"
            }
        },
    ],
    en: [
        {
            id: 1,
            name: "Ishaq Musa Haroun",
            role: "Team Founder",
            bio: "",
            image: images.ishaq,
            social: {
                whatsapp: "https://wa.me/966555211667",
                snapchat: "#",
                email: "#"
            }
        },
        {
            id: 2,
            name: "Osama Abdulwahab",
            role: "Team Member & Technician",
            bio: "Mobile application developer and technician",
            image: images.osama,
            social: {
                whatsapp: "https://wa.me/966530196610",
                snapchat: "https://snapchat.com/t/ZJ0q4mSk",
                email: "osmaa10321@gmail.com"
            }
        },
        {
            id: 3,
            name: "Hassan Ibrahim",
            role: "Team Member & Secretary",
            bio: "",
            image: images.hassan,
            social: {
                whatsapp: "https://wa.me/966534542190",
                snapchat: "https://snapchat.com/t/uxKJdOxn",
                email: "h321h321hh@gmail.com"
            }
        },
        {
            id: 4,
            name: "Ahmad Mohammed",
            role: "Team Member & Technician",
            bio: "",
            image: images.ahmad,
            social: {
                whatsapp: "https://wa.me/966550873299",
                snapchat: "https://snapchat.com/t/i2mSBGCB",
                email: "ahmadflatahp@gmail.com"
            }
        },
        {
            id: 5,
            name: "Mohammed Abdulwahab",
            role: "Team Member & Technician",
            bio: "Graphic designer",
            image: images.mohammed,
            social: {
                whatsapp: "https://wa.me/966577125554",
                snapchat: "https://snapchat.com/t/Op3Vd9tN",
                email: "kwmhmd457@gmail.com"
            }
        },
        {
            id: 6,
            name: "Issa Al-Haj",
            role: "Team Member",
            bio: "Consultant",
            image: images.issa,
            social: {
                whatsapp: "https://wa.me/966558073401",
                snapchat: "https://snapchat.com/t/FozvvABW",
                email: "Issa.s.alhaj@gmail.com"
            }
        },
        {
            id: 7,
            name: "Ibrahim Ghandou",
            role: "Team Member",
            bio: "",
            image: images.ibrahim,
            social: {
                whatsapp: "https://wa.me/966500629984",
                snapchat: "https://snapchat.com/t/HWrONvme",
                email: "ibraheem.9051@gmail.com"
            }
        },
        {
            id: 8,
            name: "Othman Sidi",
            role: "Team Member",
            bio: "",
            image: images.othman,
            social: {
                whatsapp: "https://wa.me/966566516532",
                snapchat: "https://snapchat.com/t/Hk9UJtcp",
                email: "thmansydy5@gmail.com"
            }
        },
        {
            id: 8,
            name: "Idris Ibrahim",
            role: "Team Member",
            bio: "",
            image: images.idris,
            social: {
                whatsapp: "https://wa.me/966599173248",
                snapchat: "#",
                email: "#"
            }
        }
    ]
};

export default teamData;
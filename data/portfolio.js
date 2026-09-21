const base = import.meta.env.BASE_URL || '/';

const img = (name) => `${base}portfolio/${name}`;

const images = {
    reception1: img('1.jpeg'),
    reception2: img('2.jpeg'),
    pilgrims1: img('Nigerian-Pilgrims1.jpeg'),
    pilgrims2: img('Nigerian-Pilgrims2.jpeg.jpeg'),
    hospitality1: img('injaz-hospitality/DSC03605.jpg'),
    hospitality2: img('injaz-hospitality/DSC03689.jpg'),
    hospitality3: img('injaz-hospitality/DSC03445.jpg'),
    hospitality4: img('injaz-hospitality/DSC03444.jpg'),
    hospitality5: img('injaz-hospitality/DSC03590.jpg'),
};

const portfolioData = {
    ar: [
        {
            id: 1,
            title: 'استقبال رسمي لمعالي وزير الدولة لشؤون الدفاع بجمهورية نيجيريا',
            description: 'تشرف "فريق إنجاز" للضيافة والاستقبال بتنظيم مراسم استقبال رسمية لمعالي وزير الدولة لشؤون الدفاع بجمهورية نيجيريا الاتحادية، السيد بيلو محمد ماتاوالي، في حي حراء الثقافي (معرض الوحي) بمكة المكرمة.تضمن البرنامج استقبالًا رسميًا وفق أعلى معايير البروتوكول، مع تقديم الضيافة السعودية الأصيلة، تلاه جولة تعريفية في معرض الوحي للتعريف بقصة نزول الوحي، إضافة إلى إبراز القيمة التاريخية والثقافية لحي حراء. وقد نالت الزيارة استحسان معالي الوزير والوفد المرافق. ويعكس هذا التنظيم كفاءة فريق إنجاز في إدارة الفعاليات الرسمية واستقبال الوفود الدولية، بما يجسد قيم الضيافة السعودية ويواكب مستهدفات رؤية المملكة.',
            category: 'الضيافة والاستقبال',
            images: [
                images.reception1,
                images.reception2,
            ],
        },
        // {
        //     id: 2,
        //     title: 'مشروع إدارة وتفويج أمتعة الحجاج النيجيريين – موسم حج 1447هـ',
        //     description: 'نفّذ فريق إنجاز مشروعًا متكاملًا لإدارة وتفتيش ووزن أمتعة الحجاج النيجيريين بالتعاون مع مجموعة شركاء الخير، ومكتب شؤون حجاج نيجيريا، والجهات الأمنية بمطار الملك عبدالعزيز الدولي. شمل المشروع فحص الأمتعة في مقار السكن بمكة، والتنسيق اللوجستي لنقلها، وإعادة تدقيقها في المطار، والإشراف على إنهاء إجراءات المغادرة، مما أسهم في تسريع إجراءات السفر، ورفع كفاءة العمليات، وتحقيق أعلى معايير الأمن والسلامة مع مستوى رضا مرتفع من جميع الجهات المشاركة.',
        //     category: 'الخدمات اللوجستية',
        //     images: [
        //         images.pilgrims1,
        //         images.pilgrims2,
        //     ]
        // },
        {
            id: 3,
            title: 'تغطية فعالية الضيافة والتوثيق',
            description: 'تغطية متكاملة لفعالية تضمنت استقبال الضيوف، تقديم الضيافة العربية، إدارة الفقرات، وتوثيق تفاصيل المناسبة بصور احترافية.',
            category: 'الضيافة والتوثيق',
            images: [
                images.hospitality1,
                images.hospitality2,
                images.hospitality3,
                images.hospitality4,
                images.hospitality5,
            ],
        },
    ],
    en: [
        {
            id: 1,
            title: "Official Reception for the Minister of State for Defense Affairs of the Federal Republic of Nigeria",
            description: "\"Team Injaz\" for hospitality and reception had the honor of organizing an official reception ceremony for the Minister of State for Defense Affairs of the Federal Republic of Nigeria, Mr. Bello Muhammad Matawalle, at the Hira Cultural District (Revelation Exhibition) in Makkah Al-Mukarramah. The program included an official reception following the highest protocol standards, with authentic Saudi hospitality, followed by a guided tour of the Revelation Exhibition introducing the story of the revelation, in addition to highlighting the historical and cultural value of the Hira District. The visit was highly praised by the Minister and the accompanying delegation. This organization reflects Team Injaz's efficiency in managing official events and receiving international delegations, embodying the values of Saudi hospitality and aligning with the Kingdom's Vision objectives.",
            category: "Hospitality & Reception",
            images: [
                images.reception1,
                images.reception2,
            ],
        },
        {
            id: 2,
            title: "Nigerian Pilgrims' Baggage Management and Coordination Project – Hajj Season 1447 AH",
            description: "Team Injaz executed a comprehensive project for managing, inspecting, and weighing Nigerian pilgrims' baggage in cooperation with the Good Partners Group, the Office of Nigerian Hajj Affairs, and the security authorities at King Abdulaziz International Airport. The project included baggage inspection at accommodations in Makkah, logistics coordination for transport, re-verification at the airport, and supervision of departure procedures, which contributed to accelerating travel procedures, raising operational efficiency, and achieving the highest security and safety standards with a high satisfaction level from all participating parties.",
            category: "Logistics Services",
            images: [
                images.pilgrims1,
                images.pilgrims2,
            ],
        },
        {
            id: 3,
            title: "Hospitality & Documentation Event Coverage",
            description: "Complete event coverage including guest reception, Arabic hospitality, program coordination, and professional documentation of the occasion.",
            category: "Hospitality & Documentation",
            images: [
                images.hospitality1,
                images.hospitality2,
                images.hospitality3,
                images.hospitality4,
                images.hospitality5,
            ],
        }
    ]
};

export default portfolioData;

const fightersData = [
    {
        name: "Амирхан Оев",
        instagram: "https://www.instagram.com/0ev.amirkhan?igsh=NWY3ZjhudWxzMDV6",
        followers: "350K",
        reach: "~120K",
        source: "Парсинг IG-API",
        geo: "RU",
        location: "Россия, Грузия",
        media: "Medium",
        uzRel: 2,
        hype: 3,
        risk: "Yellow",
        tier: "Low",
        verdict: "резерв",
        bio: "Яркий представитель поп-ММА сцены (Россия/Грузия).",
        rationale: "Низкая релевантность для UZ и средний уровень хайпа; подходит только как резервный участник для создания конфликта на пресс-конференциях."
    },
    {
        name: "Леко Акопян",
        instagram: "https://www.instagram.com/lendrush_x929xx?igsh=MWJnYXA0Znk1NXRiaA==",
        followers: "420K",
        reach: "~150K",
        source: "Анализ IG-профиля",
        geo: "RU",
        location: "Россия, Армения",
        media: "High",
        uzRel: 1,
        hype: 4,
        risk: "Yellow",
        tier: "Medium",
        verdict: "только ивент",
        bio: "Опытный боец на голых кулаках с сильной медийкой в РФ.",
        rationale: "Отличный генератор хайпа для ивента, но релевантность для UZ минимальна, амбассадорство нецелесообразно."
    },
    {
        name: "Мухаммад Мокаев",
        instagram: "https://www.instagram.com/mokaev_muhammad?igsh=enFkd2x6MGNuOGJp",
        followers: "1M+",
        reach: "~400K",
        source: "HypeAuditor статка",
        geo: "RU",
        location: "Великобритания",
        media: "Premium",
        uzRel: 3,
        hype: 4,
        risk: "Green",
        tier: "Premium",
        verdict: "брать амбассадором",
        bio: "Топовый боец наилегчайшего веса (Великобритания/Дагестан), экс-боец UFC.",
        rationale: "Премиальный статус и отсутствие «грязных» скандалов делают его отличным амбассадором с прицелом на международную узнаваемость."
    },
    {
        name: "Торнике Сванидзе",
        instagram: "https://www.instagram.com/toka_svanidze?igsh=cnRpMzdyMGF1cmJl",
        followers: "180K",
        reach: "~50K",
        source: "Парсинг IG-API",
        geo: "RU",
        location: "Грузия, Россия",
        media: "Medium",
        uzRel: 1,
        hype: 3,
        risk: "Yellow",
        tier: "Low",
        verdict: "резерв",
        bio: "Грузинский боец с опытом выступлений в российских медийных лигах.",
        rationale: "Релевантность для UZ слабая, репутационные риски умеренные — использовать только в случае нехватки ростера."
    },
    {
        name: "Сулим Бисултанов",
        instagram: "https://www.instagram.com/bisultanov_sulim?igsh=MWhxODBwczIzN2szdg==",
        followers: "250K",
        reach: "~80K",
        source: "Анализ IG-профиля",
        geo: "RU",
        location: "Россия (Чечня)",
        media: "Medium",
        uzRel: 1,
        hype: 3,
        risk: "Yellow",
        tier: "Low",
        verdict: "только ивент",
        bio: "Российский боец, постоянный участник поп-ММА турниров.",
        rationale: "Не имеет значимой фан-базы в Узбекистане, подходит исключительно для заполнения карда."
    },
    {
        name: "Мераб Двалишвили",
        instagram: "https://www.instagram.com/merab.dvalishvili?igsh=NjRvZXowOHpyYjU3",
        followers: "2.6M",
        reach: "~900K",
        source: "HypeAuditor статка",
        geo: "RU",
        location: "Грузия",
        media: "Premium",
        uzRel: 2,
        hype: 5,
        risk: "Green",
        tier: "Premium",
        verdict: "только ивент",
        bio: "Чемпион UFC в легчайшем весе из Грузии.",
        rationale: "Премиум-звезда мирового уровня; из-за высокой цены целесообразно привлекать только как VIP-гостя стадионного ивента."
    },
    {
        name: "Шовхал Чурчаев",
        instagram: "https://www.instagram.com/shovkhal_churchaev?igsh=N2k2bDNjZjZoNmUy",
        followers: "1.9M",
        reach: "~700K",
        source: "StarNgage статка",
        geo: "RU",
        location: "Россия (Чечня)",
        media: "High",
        uzRel: 2,
        hype: 5,
        risk: "Red",
        tier: "High",
        verdict: "не брать",
        bio: "Скандально известный боец российского поп-ММА чеченского происхождения.",
        rationale: "Абсолютный красный флаг: систематические срывы контрактов и драки вне октагона. Недопустимые риски для легального бренда."
    },
    {
        name: "Адам Кипиш",
        instagram: "https://www.instagram.com/adamkipish?igsh=bzIwZ2xyb251Ynpp",
        followers: "210K",
        reach: "~70K",
        source: "Парсинг IG-API",
        geo: "KZ",
        location: "Казахстан",
        media: "Medium",
        uzRel: 3,
        hype: 3,
        risk: "Yellow",
        tier: "Low",
        verdict: "резерв",
        bio: "Медийный казахстанский боец.",
        rationale: "Хорошая узнаваемость в KZ, но в UZ работает слабо. Резервный вариант для кросс-региональных боев."
    },
    {
        name: "Ибрагим Исламов",
        instagram: "https://www.instagram.com/nikarkho_?igsh=NnhqMHh5ZnF2ZHk=",
        followers: "480K",
        reach: "~200K",
        source: "Оценка по Reels",
        geo: "RU",
        location: "Россия (Чечня)",
        media: "Medium",
        uzRel: 1,
        hype: 4,
        risk: "Red",
        tier: "Low",
        verdict: "не брать",
        bio: "Звезда поп-ММА, вовлеченный в недавние криминальные инциденты.",
        rationale: "Находился в розыске, имеет высокие криминальные риски. Прямая угроза compliance бренда, категорически исключить."
    },
    {
        name: "Еркебулан Токтар",
        instagram: "https://www.instagram.com/erkebulan_toktar?igsh=emlobmt1bnFmdWEy",
        followers: "812K",
        reach: "~350K",
        source: "StarNgage статка",
        geo: "KZ",
        location: "Казахстан",
        media: "High",
        uzRel: 4,
        hype: 5,
        risk: "Green",
        tier: "High",
        verdict: "брать амбассадором",
        bio: "Суперзвезда казахстанского ММА и кино с огромной фан-базой.",
        rationale: "Феноменальный охват, органично перетекающий в UZ. Идеальный кандидат на амбассадорство и съемки в креативах."
    },
    {
        name: "Малик Ербутаев",
        instagram: "https://www.instagram.com/abbi_01_01?igsh=MW1wNWV1N20ybG5wZw==",
        followers: "1.2M",
        reach: "~450K",
        source: "HypeAuditor статка",
        geo: "UZ",
        location: "Узбекистан",
        media: "High",
        uzRel: 5,
        hype: 4,
        risk: "Green",
        tier: "Medium",
        verdict: "брать амбассадором",
        bio: "Топовый узбекский боец ММА с позитивным публичным имиджем.",
        rationale: "Максимальная локальная релевантность (5/5), отсутствие скандалов и преданная аудитория — выбор №1 для рынка Узбекистана."
    },
    {
        name: "Нурланбек Уулу Марсель",
        instagram: "https://www.instagram.com/nurlanbek_uulu_marsel?igsh=bHh5d253cGw1NjVz",
        followers: "320K",
        reach: "~100K",
        source: "Парсинг IG-API",
        geo: "UZ",
        location: "Кыргызстан",
        media: "Medium",
        uzRel: 3,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "резерв",
        bio: "Известный боец из Кыргызстана.",
        rationale: "Хороший потенциал на Среднюю Азию, но для фокусного UZ-рынка пока рассматривается только как резерв."
    },
    {
        name: "Серик Сармухамед",
        instagram: "https://www.instagram.com/sarmukhamedserik?igsh=bjl3bnFhY3kwOTc0",
        followers: "190K",
        reach: "~60K",
        source: "Анализ IG-профиля",
        geo: "KZ",
        location: "Казахстан",
        media: "Medium",
        uzRel: 3,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "только ивент",
        bio: "Крепкий казахстанский спортсмен.",
        rationale: "Подходит для укрепления сетки боев турнира, но имеет недостаточный медийный вес для лица бренда."
    },
    {
        name: "Акранбек Ерасыл",
        instagram: "https://www.instagram.com/akranbek.yerassyl?igsh=OGp6cnpudWZ5dzdz",
        followers: "150K",
        reach: "~45K",
        source: "Парсинг IG-API",
        geo: "KZ",
        location: "Казахстан",
        media: "Medium",
        uzRel: 3,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "только ивент",
        bio: "Казахстанский боец смешанных единоборств.",
        rationale: "Аналогично предыдущему: хороший спортивный уровень, но слабая медийка для маркетинговых интеграций в UZ."
    },
    {
        name: "Бобур Абдулазизов",
        instagram: "https://www.instagram.com/bobur__abdulazizov?igsh=M3czY2Z1YTg0Zm03",
        followers: "650K",
        reach: "~250K",
        source: "Оценка по Reels",
        geo: "UZ",
        location: "Узбекистан",
        media: "High",
        uzRel: 5,
        hype: 4,
        risk: "Green",
        tier: "Medium",
        verdict: "брать амбассадором",
        bio: "Восходящая звезда ММА Узбекистана.",
        rationale: "Один из главных активов для локального UZ-маркета; отличный engagement rate, безопасно брать для наружной рекламы и digital."
    },
    {
        name: "Давид Хачатрян",
        instagram: "https://www.instagram.com/davidxachatryan?igsh=d3E4ZTByN2RxZ25h",
        followers: "160K",
        reach: "~50K",
        source: "Анализ IG-профиля",
        geo: "RU",
        location: "Армения, Россия",
        media: "Medium",
        uzRel: 1,
        hype: 2,
        risk: "Green",
        tier: "Low",
        verdict: "только ивент",
        bio: "Ветеран армянского и российского ММА.",
        rationale: "Аудитория не пересекается с целевой UZ-группой, низкий уровень хайпа в данном гео. Только как спортивная составляющая ивента."
    },
    {
        name: "Сережа Арутюнян",
        instagram: "https://www.instagram.com/seryozhaharutunyan?igsh=djdhM2RmNjZsYThs",
        followers: "110K",
        reach: "~30K",
        source: "Парсинг IG-API",
        geo: "RU",
        location: "Армения",
        media: "Medium",
        uzRel: 1,
        hype: 2,
        risk: "Green",
        tier: "Low",
        verdict: "только ивент",
        bio: "Медийный боец поп-ММА.",
        rationale: "Локален для РФ/Кавказа, не несет коммерческой ценности для амбассадорства в Средней Азии."
    },
    {
        name: "Рустам Михарахимов",
        instagram: "https://www.instagram.com/rustam_gangstern1?igsh=ZmJkenNpbmQ3NW1i",
        followers: "400K",
        reach: "~180K",
        source: "HypeAuditor статка",
        geo: "UZ",
        location: "Узбекистан",
        media: "High",
        uzRel: 5,
        hype: 4,
        risk: "Yellow",
        tier: "Medium",
        verdict: "брать амбассадором",
        bio: "Популярный узбекский боец, умеющий создавать шоу и трэш-ток.",
        rationale: "Отлично конвертирует хайп в просмотры. Сильный актив для амбассадорства, но требует контроля и строгого NDA из-за стиля поведения."
    },
    {
        name: "Мухаммад Хейбати",
        instagram: "https://www.instagram.com/pd_mma?igsh=eXU3cXNzNWVzbGNq",
        followers: "2.5M",
        reach: "~800K",
        source: "StarNgage статка",
        geo: "RU",
        location: "Россия (Дагестан)",
        media: "High",
        uzRel: 2,
        hype: 5,
        risk: "Red",
        tier: "High",
        verdict: "не брать",
        bio: "Один из самых скандальных бойцов СНГ ('Персидский Дагестанец').",
        rationale: "Токсичный трэш-ток с переходом на личности и религии. Высочайший риск отторжения у консервативной UZ-аудитории."
    },
    {
        name: "Данияр Токтаров",
        instagram: "https://www.instagram.com/danikk_o?igsh=emVjMTJqNjVnOHdn",
        followers: "130K",
        reach: "~40K",
        source: "Анализ IG-профиля",
        geo: "KZ",
        location: "Казахстан",
        media: "Medium",
        uzRel: 3,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "резерв",
        bio: "Представитель казахстанской школы единоборств.",
        rationale: "Средние показатели охватов; держать в резерве для региональных противостояний (UZ vs KZ)."
    },
    {
        name: "Шарабутдин Магомедов",
        instagram: "https://www.instagram.com/shara_bullet77?igsh=MTJiZTJqdzRzMmsxOA==",
        followers: "2.6M",
        reach: "~1M+",
        source: "HypeAuditor статка",
        geo: "RU",
        location: "Россия (Дагестан)",
        media: "Premium",
        uzRel: 4,
        hype: 5,
        risk: "Green",
        tier: "Premium",
        verdict: "брать амбассадором",
        bio: "Харизматичный непобежденный боец UFC ('Шара Буллет').",
        rationale: "Глобальный охват СНГ и исламского мира. Идеальный премиум-амбассадор для придания проекту международного статуса."
    },
    {
        name: "Хумоюн Тухтамурадов",
        instagram: "https://www.instagram.com/khumoyun_tukhtamuradov?igsh=cW56cjVidDRuZzQz",
        followers: "850K",
        reach: "~300K",
        source: "Оценка по Reels",
        geo: "UZ",
        location: "Узбекистан",
        media: "High",
        uzRel: 5,
        hype: 4,
        risk: "Green",
        tier: "Medium",
        verdict: "брать амбассадором",
        bio: "Один из флагманов узбекского ММА с качественной аудиторией.",
        rationale: "Локальный топ. Прекрасное соотношение цены, охвата и безопасности, однозначно брать амбассадором."
    },
    {
        name: "Сулейман палач",
        instagram: "https://www.instagram.com/suleyman_palach?igsh=d2RuZ3gzbDVuODc4",
        followers: "220K",
        reach: "~80K",
        source: "Парсинг IG-API",
        geo: "UZ",
        location: "Таджикистан",
        media: "Medium",
        uzRel: 4,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "резерв",
        bio: "Жесткий боец из Таджикистана.",
        rationale: "Соседнее гео, понятный язык боев, но для эксклюзива на UZ не дотягивает. Оставляем в резерве."
    },
    {
        name: "Бобурджон Исроилов",
        instagram: "https://www.instagram.com/ispanchikk_?igsh=bDZqamRpZThxNGhv",
        followers: "140K",
        reach: "~50K",
        source: "Анализ IG-профиля",
        geo: "UZ",
        location: "Узбекистан",
        media: "Medium",
        uzRel: 5,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "только ивент",
        bio: "Локальный узбекский проспект.",
        rationale: "Релевантность есть, но не хватает медийного веса для сольных рекламных кампаний. Использовать внутри карда турнира."
    },
    {
        name: "Мухиддин Мамаджонов",
        instagram: "https://www.instagram.com/muhiddin_mamajonov?igsh=MWV3Y2R1bDNlbjljNQ==",
        followers: "90K",
        reach: "~25K",
        source: "Парсинг IG-API",
        geo: "UZ",
        location: "Узбекистан",
        media: "Medium",
        uzRel: 5,
        hype: 3,
        risk: "Green",
        tier: "Low",
        verdict: "только ивент",
        bio: "Узбекский спортсмен с фокусом на спортивные результаты.",
        rationale: "Безопасный профиль, но низкий медийный хайп. Подходит как локальный участник турнира для разогрева публики."
    }
];

const topCandidatesData = [
    {
        name: "Малик Ербутаев",
        reason: "Топовая узнаваемость в UZ и лояльная база.",
        vision: "Фокус на digital-кампании, performance-маркетинг и виральность внутри UZ.",
        tier: "Medium",
        risk: "Низкий."
    },
    {
        name: "Бобур Абдулазизов",
        reason: "Отличный engagement rate и статус локальной звезды.",
        vision: "Лицо для офлайн-интеграций, наружной рекламы и локальных промо-активностей.",
        tier: "Medium",
        risk: "Низкий."
    },
    {
        name: "Еркебулан Токтар",
        reason: "Феноменальный хайп в KZ с органичным переливом в UZ.",
        vision: "Кросс-региональные кампании (KZ+UZ) и участие в высокобюджетных имиджевых роликах.",
        tier: "High",
        risk: "Аудитория смещена в сторону KZ (потребуется локализация креативов)."
    },
    {
        name: "Шара Буллет",
        reason: "Глобальная звезда (UFC) с огромным авторитетом в СНГ.",
        vision: "Премиальное позиционирование, международный PR и повышение статусности бренда.",
        tier: "Premium",
        risk: "Сложности с графиком выступлений."
    },
    {
        name: "Рустам 'Гангстер' Михарахимов",
        reason: "Аудитория любит шоу, боец дает отличные просмотры.",
        vision: "Генерация вирусного контента (Reels/Shorts) и вовлечение молодежной аудитории.",
        tier: "Medium",
        risk: "Требует модерации имиджа (возможны локальные конфликты)."
    }
];

const mediaAnalyticsData = [
    {
        name: 'Малик (абби) Ербутаев',
        audience: '1.1M',
        geoCore: 'UZ 80% / KZ 15%',
        er: '8-10%',
        contentType: 'Reels + Stories + Telegram',
        note: 'Сильный локальный амбассадор с высоким уровнем доверия и хорошим CPM для UZ-кампании.'
    },
    {
        name: 'Шарабутдин Магомедов',
        audience: '3.5M',
        geoCore: 'CIS / MENA / Global',
        er: '10-15%',
        contentType: 'Premium PR / VIP promo',
        note: 'Позиционируется как брендовый hightouch-лицо для премиального статуса и широкой огласки.'
    },
    {
        name: 'Еркебулан Токтар',
        audience: '2.4M',
        geoCore: 'KZ 70% / UZ 20%',
        er: '7-9%',
        contentType: 'Digital series + Reels',
        note: 'Кросс-гео кандидат, полезен для расширения охвата за счет соседнего рынка.'
    },
    {
        name: 'Бобур Абдулазизов',
        audience: '750K',
        geoCore: 'UZ 90%',
        er: '7-9%',
        contentType: 'Local promo + Stories',
        note: 'Сильный локальный профиль с отличным вовлечением для внутриузбекских активаций.'
    },
    {
        name: 'Хумоюн Тухтамурадов',
        audience: '820K',
        geoCore: 'UZ 85%',
        er: '6-8%',
        contentType: 'Reels + short-form',
        note: 'Широкая массовая аудитория, подойдет для performance-ориентированных промо.'
    }
];

const mediaGroupSummaries = [
    {
        title: 'Группа 1: Локальные UZ-амбассадоры',
        description: 'Малик, Бобур и Хумоюн — стабильные UZ-показатели с минимальными внешними рисками. Идеальны для основной кампании и event-активаций.',
        label: 'Локальная глубина'
    },
    {
        title: 'Группа 2: Региональные расширители',
        description: 'Еркебулан и Шарабуллет предлагают охват KZ/CIS и premium-имидж. Полезны на этапе масштабирования кампании.',
        label: 'Региональный охват'
    },
    {
        title: 'Группа 3: Geo mismatch / неядро',
        description: 'RU/Caucasus бойцы с хорошим reach, но ограниченной релевантностью для UZ. Рекомендуются только для отдельных hype-материалов, не для основного амбассадорства.',
        label: 'Неядро'
    }
];

const redFlagsData = [
    {
        name: 'Шовхал Чурчаев',
        fact: 'Нарушения дисциплины, публичные драки и неоднократные срывы боев.',
        sources: [
            { label: 'Google: Шовхал Чурчаев конфликт', url: 'https://www.google.com/search?q=%D0%A8%D0%BE%D0%B2%D1%85%D0%B0%D0%BB+%D0%A7%D1%83%D1%80%D1%87%D0%B0%D0%B5%D0%B2+%D0%BA%D0%BE%D0%BD%D1%84%D0%BB%D0%B8%D0%BA%D1%82' },
            { label: 'Instagram профиль', url: 'https://www.instagram.com/shovkhal_churchaev?igsh=N2k2bDNjZjZoNmUy' }
        ],
        risk: 'Высокий репутационный риск, возможные судебные ивенты и холодный прием от антирисковой аудитории.',
        action: 'Исключить из амбассадорской кампании.'
    },
    {
        name: 'Ибрагим Никархо Исламов',
        fact: 'Криминальные инциденты, ДТП и негативные медиа-цикл.',
        sources: [
            { label: 'Google: Ибрагим Исламов ДТП', url: 'https://www.google.com/search?q=%D0%98%D0%B1%D1%80%D0%B0%D0%B3%D0%B8%D0%BC+%D0%98%D1%81%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%94%D0%A2%D0%9F' },
            { label: 'Instagram профиль', url: 'https://www.instagram.com/nikarkho_?igsh=NnhqMHh5ZnF2ZHk=' }
        ],
        risk: 'Неприемлемо для легального маркетинга и партнеров с букмекерскими брендами.',
        action: 'Исключить из партнерских программ.'
    },
    {
        name: 'Мухаммад "Перс" Хейбати',
        fact: 'Треш-ток, скандалы и острые высказывания, потенциально разжигающие конфликты.',
        sources: [
            { label: 'Google: Мухаммад Хейбати скандал', url: 'https://www.google.com/search?q=%D0%9C%D1%83%D1%85%D0%B0%D0%BC%D0%BC%D0%B0%D0%B4+%D0%A5%D0%B5%D0%B9%D0%B1%D0%B0%D1%82%D0%B8+%D1%81%D0%BA%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB' },
            { label: 'Instagram профиль', url: 'https://www.instagram.com/pd_mma?igsh=eXU3cXNzNWVzbGNq' }
        ],
        risk: 'Высокая вероятность репутационного ущерба для UZ-аудитории и официальных партнеров.',
        action: 'Исключить как амбассадора, допускается только разовый спортивный гость без брендов.'
    }
];

const sortOrders = {
    media: { Premium: 4, High: 3, Medium: 2, Low: 1 },
    risk: { Green: 3, Yellow: 2, Red: 1 },
    tier: { Premium: 4, High: 3, Medium: 2, Low: 1 },
    verdict: { 'брать амбассадором': 4, 'только ивент': 3, 'резерв': 2, 'не брать': 1 }
};

let currentSortKey = null;
let currentSortOrder = 'desc';

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white', 'font-medium');
        el.classList.add('hover:bg-slate-800');
    });
    document.getElementById(tabId).classList.add('active');
    const activeBtn = document.querySelector(`[data-target="${tabId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('bg-blue-600', 'text-white', 'font-medium');
        activeBtn.classList.remove('hover:bg-slate-800');
    }
    if (tabId === 'summary') {
        initCharts();
    }
}

function compareValues(a, b, key) {
    if (key === 'name' || key === 'location' || key === 'geo' || key === 'verdict') {
        const nameA = a[key].toString().toLowerCase();
        const nameB = b[key].toString().toLowerCase();
        return nameA.localeCompare(nameB);
    }
    if (key === 'media' || key === 'risk' || key === 'tier' || key === 'verdict') {
        return (sortOrders[key][a[key]] || 0) - (sortOrders[key][b[key]] || 0);
    }
    return a[key] - b[key];
}

function changeSort(key) {
    if (currentSortKey === key) {
        currentSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc';
    } else {
        currentSortKey = key;
        currentSortOrder = 'desc';
    }
    renderTable();
}

let tooltipElement = null;

function createTooltipElement() {
    if (tooltipElement) return tooltipElement;
    tooltipElement = document.createElement('div');
    tooltipElement.className = 'tooltip-card hidden';
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.zIndex = '60';
    tooltipElement.style.maxWidth = '320px';
    tooltipElement.style.pointerEvents = 'none';
    tooltipElement.style.opacity = '0';
    tooltipElement.style.transition = 'opacity 0.15s ease';
    document.body.appendChild(tooltipElement);
    return tooltipElement;
}

function showTooltip(event, fighter) {
    const tooltip = createTooltipElement();
    tooltip.innerHTML = `
        <div class="tooltip-title">${fighter.name}</div>
        <div class="tooltip-bio">${fighter.bio}</div>
        <div class="tooltip-rationale">${fighter.rationale}</div>
    `;
    const rect = event.currentTarget.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const left = rect.right + 12;
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.classList.remove('hidden');
    tooltip.style.opacity = '1';
    adjustTooltipPosition(rect);
}

function hideTooltip() {
    if (!tooltipElement) return;
    tooltipElement.classList.add('hidden');
    tooltipElement.style.opacity = '0';
}

function moveTooltip(event) {
    if (!tooltipElement || tooltipElement.classList.contains('hidden')) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const left = rect.right + 12;
    tooltipElement.style.top = `${top}px`;
    tooltipElement.style.left = `${left}px`;
    adjustTooltipPosition(rect);
}

function adjustTooltipPosition(targetRect) {
    const tooltip = tooltipElement;
    if (!tooltip) return;
    const bounds = tooltip.getBoundingClientRect();
    if (bounds.right > window.innerWidth - 12) {
        tooltip.style.left = `${Math.max(12, targetRect.left - bounds.width - 12)}px`;
    }
    if (bounds.bottom > window.innerHeight - 12) {
        tooltip.style.top = `${window.scrollY + Math.max(12, targetRect.bottom - bounds.height - 12)}px`;
    }
}

function setSortIndicators() {
    document.querySelectorAll('.sort-indicator').forEach(el => el.textContent = '');
    if (!currentSortKey) return;
    const indicator = currentSortOrder === 'desc' ? '↓' : '↑';
    const target = document.getElementById(`sort-${currentSortKey}`);
    if (target) target.textContent = indicator;
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    const filterVerdict = document.getElementById('filterVerdict').value;
    const filterGeo = document.getElementById('filterGeo').value;
    const data = [...fightersData];

    if (currentSortKey) {
        data.sort((a, b) => {
            const result = compareValues(a, b, currentSortKey);
            return currentSortOrder === 'desc' ? -result : result;
        });
    }

    tbody.innerHTML = '';
    data.forEach(fighter => {
        if (filterVerdict !== 'all' && fighter.verdict !== filterVerdict) return;
        if (filterGeo !== 'all' && fighter.geo !== filterGeo) return;
        const riskColor = fighter.risk === 'Green' ? 'bg-green-100 text-green-800' : fighter.risk === 'Yellow' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition-colors';
        tr.innerHTML = `
            <td class="p-4 border-b font-medium">
                <a href="${fighter.instagram}" target="_blank" rel="noreferrer noopener" class="text-slate-900 hover:text-blue-600 underline decoration-blue-300 decoration-2 underline-offset-2">
                    ${fighter.name}
                </a>
                <div class="text-xs text-slate-500 mt-1">${fighter.location}</div>
            </td>
            <td class="p-4 border-b text-slate-500">${fighter.geo}</td>
            <td class="p-4 border-b font-medium text-slate-900">${fighter.followers || '—'}</td>
            <td class="p-4 border-b text-slate-500">${fighter.reach || '—'}</td>
            <td class="p-4 border-b text-slate-500">${fighter.source || '—'}</td>
            <td class="p-4 border-b">
                <div class="flex items-center">
                    <span class="mr-2">${fighter.uzRel}</span>
                    <div class="w-16 h-2 bg-slate-200 rounded-full"><div class="h-full bg-blue-500 rounded-full" style="width: ${fighter.uzRel * 20}%"></div></div>
                </div>
            </td>
            <td class="p-4 border-b">${fighter.hype}/5</td>
            <td class="p-4 border-b"><span class="px-2 py-1 rounded text-xs font-semibold ${riskColor}">${fighter.risk}</span></td>
            <td class="p-4 border-b">${fighter.tier}</td>
            <td class="p-4 border-b">${fighter.verdict}</td>
        `;
        tr.addEventListener('mouseenter', event => showTooltip(event, fighter));
        tr.addEventListener('mouseleave', hideTooltip);
        tr.addEventListener('mousemove', moveTooltip);
        tbody.appendChild(tr);
    });
    setSortIndicators();
}

function renderLists() {
    const topList = document.getElementById('topCandidatesList');
    topList.innerHTML = '';
    topCandidatesData.forEach(candidate => {
        topList.innerHTML += `
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900">${candidate.name}</h3>
                    </div>
                    <span class="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Top candidate</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="font-semibold mb-2">Почему</p>
                        <p>${candidate.reason}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="font-semibold mb-2">Vision</p>
                        <p>${candidate.vision}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="font-semibold mb-2">Tier</p>
                        <p>${candidate.tier}</p>
                        <p class="font-semibold mt-4 mb-2">Risk</p>
                        <p>${candidate.risk}</p>
                    </div>
                </div>
            </div>
        `;
    });

    const redList = document.getElementById('redFlagsList');
    redList.innerHTML = '';
    redFlagsData.forEach(item => {
        redList.innerHTML += `
            <div class="bg-red-50 p-5 rounded-xl shadow-sm border border-red-200">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <h3 class="text-xl font-bold text-red-900">${item.name}</h3>
                    <span class="inline-flex items-center rounded-full bg-red-100 text-red-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Red Flag</span>
                </div>
                <div class="space-y-3 text-sm text-red-800">
                    <p><strong>Факт:</strong> ${item.fact}</p>
                    <p><strong>Риск:</strong> ${item.risk}</p>
                    <p><strong>Рекомендация:</strong> ${item.action}</p>
                    <div class="flex flex-wrap gap-2 text-xs">
                        ${item.sources.map(src => `<a href="${src.url}" target="_blank" rel="noreferrer noopener" class="inline-block rounded bg-red-100 px-3 py-1 text-red-700 hover:bg-red-200">${src.label}</a>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
}

function renderMediaAnalytics() {
    const analyticsContainer = document.getElementById('analyticsCards');
    analyticsContainer.innerHTML = '';
    mediaAnalyticsData.forEach(item => {
        analyticsContainer.innerHTML += `
            <div class="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
                <div class="flex items-center justify-between gap-4 mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900">${item.name}</h3>
                        <p class="text-sm text-slate-500 mt-1">${item.note}</p>
                    </div>
                    <span class="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Медийная карта</span>
                </div>
                <div class="grid grid-cols-1 gap-3 text-sm text-slate-700">
                    <div class="flex justify-between items-center rounded-xl bg-slate-50 p-3 border border-slate-100">
                        <span class="font-semibold">Аудитория</span>
                        <span>${item.audience}</span>
                    </div>
                    <div class="flex justify-between items-center rounded-xl bg-slate-50 p-3 border border-slate-100">
                        <span class="font-semibold">Гео ядро</span>
                        <span>${item.geoCore}</span>
                    </div>
                    <div class="flex justify-between items-center rounded-xl bg-slate-50 p-3 border border-slate-100">
                        <span class="font-semibold">ER</span>
                        <span>${item.er}</span>
                    </div>
                    <div class="flex justify-between items-center rounded-xl bg-slate-50 p-3 border border-slate-100">
                        <span class="font-semibold">Тип контента</span>
                        <span>${item.contentType}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderMediaGroupSummaries() {
    const groupsContainer = document.getElementById('analyticsGroups');
    groupsContainer.innerHTML = '';
    mediaGroupSummaries.forEach(item => {
        groupsContainer.innerHTML += `
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="font-semibold text-slate-900 mb-3">${item.title}</h3>
                <p class="text-sm text-slate-600 mb-2">${item.description}</p>
                <span class="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">${item.label}</span>
            </div>
        `;
    });
}

let riskChartInst = null;
let hypeChartInst = null;

function initCharts() {
    const riskCounts = { Green: 0, Yellow: 0, Red: 0 };
    fightersData.forEach(f => riskCounts[f.risk]++);

    const ctxRisk = document.getElementById('riskChart').getContext('2d');
    if (riskChartInst) riskChartInst.destroy();
    riskChartInst = new Chart(ctxRisk, {
        type: 'doughnut',
        data: {
            labels: ['Низкий (Green)', 'Средний (Yellow)', 'Критичный (Red)'],
            datasets: [{ data: [riskCounts.Green, riskCounts.Yellow, riskCounts.Red], backgroundColor: ['#22c55e', '#eab308', '#ef4444'], borderWidth: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 12 } } }, cutout: '70%' }
    });

    const topFighters = fightersData.filter(f => ['брать амбассадором', 'только ивент'].includes(f.verdict)).slice(0, 6);
    const ctxHype = document.getElementById('hypeChart').getContext('2d');
    if (hypeChartInst) hypeChartInst.destroy();
    hypeChartInst = new Chart(ctxHype, {
        type: 'bar',
        data: {
            labels: topFighters.map(f => f.name.split(' ')[0]),
            datasets: [
                { label: 'Хайп', data: topFighters.map(f => f.hype), backgroundColor: '#3b82f6', borderRadius: 4 },
                { label: 'UZ-Релевантность', data: topFighters.map(f => f.uzRel), backgroundColor: '#0ea5e9', borderRadius: 4 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 5, ticks: { stepSize: 1 } } }, plugins: { legend: { position: 'bottom' } } }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.target;
            if (target) switchTab(target);
        });
    });
    renderTable();
    renderLists();
    renderMediaAnalytics();
    renderMediaGroupSummaries();
    switchTab('summary');
    initCharts();
    window.addEventListener('scroll', hideTooltip, true);
    window.addEventListener('resize', hideTooltip);
});
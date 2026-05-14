const fightersData = [
    { name: 'Амирхан "Белый Лев" Оев', instagram: 'https://www.instagram.com/0ev.amirkhan?igsh=NWY3ZjhudWxzMDV6', geo: 'RU', location: 'Россия, Грузия', media: 'Medium', uzRel: 2, hype: 3, risk: 'Yellow', tier: 'Low', verdict: 'резерв' },
    { name: 'Леко Акопян', instagram: 'https://www.instagram.com/lendrush_x929xx?igsh=MWJnYXA0Znk1NXRiaA==', geo: 'RU', location: 'Россия, Армения', media: 'High', uzRel: 1, hype: 4, risk: 'Yellow', tier: 'Medium', verdict: 'только ивент' },
    { name: 'Мухаммад Мокаев', instagram: 'https://www.instagram.com/mokaev_muhammad?igsh=enFkd2x6MGNuOGJp', geo: 'RU', location: 'Великобритания', media: 'Premium', uzRel: 3, hype: 4, risk: 'Green', tier: 'Premium', verdict: 'брать амбассадором' },
    { name: 'Торнике "тока газ" Сванидзе', instagram: 'https://www.instagram.com/toka_svanidze?igsh=cnRpMzdyMGF1cmJl', geo: 'RU', location: 'Грузия, Россия', media: 'Medium', uzRel: 1, hype: 3, risk: 'Yellow', tier: 'Low', verdict: 'резерв' },
    { name: 'Сулим Бисултанов', instagram: 'https://www.instagram.com/bisultanov_sulim?igsh=MWhxODBwczIzN2szdg==', geo: 'RU', location: 'Россия (Чечня)', media: 'Medium', uzRel: 1, hype: 3, risk: 'Yellow', tier: 'Low', verdict: 'только ивент' },
    { name: 'Мераб Двалишвили', instagram: 'https://www.instagram.com/merab.dvalishvili?igsh=NjRvZXowOHpyYjU3', geo: 'RU', location: 'Грузия', media: 'Premium', uzRel: 2, hype: 5, risk: 'Green', tier: 'Premium', verdict: 'только ивент' },
    { name: 'Шовхал Чурчаев', instagram: 'https://www.instagram.com/shovkhal_churchaev?igsh=N2k2bDNjZjZoNmUy', geo: 'RU', location: 'Россия (Чечня)', media: 'High', uzRel: 2, hype: 5, risk: 'Red', tier: 'High', verdict: 'не брать' },
    { name: 'Адам Кипиш', instagram: 'https://www.instagram.com/adamkipish?igsh=bzIwZ2xyb251Ynpp', geo: 'KZ', location: 'Казахстан', media: 'Medium', uzRel: 3, hype: 3, risk: 'Yellow', tier: 'Low', verdict: 'резерв' },
    { name: 'Ибрагим Никархо Исламов', instagram: 'https://www.instagram.com/nikarkho_?igsh=NnhqMHh5ZnF2ZHk=', geo: 'RU', location: 'Россия (Чечня)', media: 'Medium', uzRel: 1, hype: 4, risk: 'Red', tier: 'Low', verdict: 'не брать' },
    { name: 'Еркебулан Токтар', instagram: 'https://www.instagram.com/erkebulan_toktar?igsh=emlobmt1bnFmdWEy', geo: 'KZ', location: 'Казахстан', media: 'High', uzRel: 4, hype: 5, risk: 'Green', tier: 'High', verdict: 'брать амбассадором' },
    { name: 'Малик (абби) Ербутаев', instagram: 'https://www.instagram.com/abbi_01_01?igsh=MW1wNWV1N20ybG5wZw==', geo: 'UZ', location: 'Узбекистан', media: 'High', uzRel: 5, hype: 4, risk: 'Green', tier: 'Medium', verdict: 'брать амбассадором' },
    { name: 'Нурланбек Уулу Марсель', instagram: 'https://www.instagram.com/nurlanbek_uulu_marsel?igsh=bHh5d253cGw1NjVz', geo: 'UZ', location: 'Кыргызстан', media: 'Medium', uzRel: 3, hype: 3, risk: 'Green', tier: 'Low', verdict: 'резерв' },
    { name: 'Серик Сармухамед', instagram: 'https://www.instagram.com/sarmukhamedserik?igsh=bjl3bnFhY3kwOTc0', geo: 'KZ', location: 'Казахстан', media: 'Medium', uzRel: 3, hype: 3, risk: 'Green', tier: 'Low', verdict: 'только ивент' },
    { name: 'Акранбек Ерасыл', instagram: 'https://www.instagram.com/akranbek.yerassyl?igsh=OGp6cnpudWZ5dzdz', geo: 'KZ', location: 'Казахстан', media: 'Medium', uzRel: 3, hype: 3, risk: 'Green', tier: 'Low', verdict: 'только ивент' },
    { name: 'Бобур Абдулазизов', instagram: 'https://www.instagram.com/bobur__abdulazizov?igsh=M3czY2Z1YTg0Zm03', geo: 'UZ', location: 'Узбекистан', media: 'High', uzRel: 5, hype: 4, risk: 'Green', tier: 'Medium', verdict: 'брать амбассадором' },
    { name: 'Давид Хачатрян', instagram: 'https://www.instagram.com/davidxachatryan?igsh=d3E4ZTByN2RxZ25h', geo: 'RU', location: 'Армения, Россия', media: 'Medium', uzRel: 1, hype: 2, risk: 'Green', tier: 'Low', verdict: 'только ивент' },
    { name: 'Сережа Арутюнян', instagram: 'https://www.instagram.com/seryozhaharutunyan?igsh=djdhM2RmNjZsYThs', geo: 'RU', location: 'Армения', media: 'Medium', uzRel: 1, hype: 2, risk: 'Green', tier: 'Low', verdict: 'только ивент' },
    { name: 'Рустам "гангстер" Михарахимов', instagram: 'https://www.instagram.com/rustam_gangstern1?igsh=ZmJkenNpbmQ3NW1i', geo: 'UZ', location: 'Узбекистан', media: 'High', uzRel: 5, hype: 4, risk: 'Yellow', tier: 'Medium', verdict: 'брать амбассадором' },
    { name: 'Мухаммад "Перс" Хейбати', instagram: 'https://www.instagram.com/pd_mma?igsh=eXU3cXNzNWVzbGNq', geo: 'RU', location: 'Россия (Дагестан)', media: 'High', uzRel: 2, hype: 5, risk: 'Red', tier: 'High', verdict: 'не брать' },
    { name: 'Данияр Токтаров', instagram: 'https://www.instagram.com/danikk_o?igsh=emVjMTJqNjVnOHdn', geo: 'KZ', location: 'Казахстан', media: 'Medium', uzRel: 3, hype: 3, risk: 'Green', tier: 'Low', verdict: 'резерв' },
    { name: 'Шарабутдин Магомедов', instagram: 'https://www.instagram.com/shara_bullet77?igsh=MTJiZTJqdzRzMmsxOA==', geo: 'RU', location: 'Россия (Дагестан)', media: 'Premium', uzRel: 4, hype: 5, risk: 'Green', tier: 'Premium', verdict: 'брать амбассадором' },
    { name: 'Хумоюн Тухтамурадов', instagram: 'https://www.instagram.com/khumoyun_tukhtamuradov?igsh=cW56cjVidDRuZzQz', geo: 'UZ', location: 'Узбекистан', media: 'High', uzRel: 5, hype: 4, risk: 'Green', tier: 'Medium', verdict: 'брать амбассадором' },
    { name: 'Сулейман палач', instagram: 'https://www.instagram.com/suleyman_palach?igsh=d2RuZ3gzbDVuODc4', geo: 'UZ', location: 'Таджикистан', media: 'Medium', uzRel: 4, hype: 3, risk: 'Green', tier: 'Low', verdict: 'резерв' },
    { name: 'Бобурджон Исроилов', instagram: 'https://www.instagram.com/ispanchikk_?igsh=bDZqamRpZThxNGhv', geo: 'UZ', location: 'Узбекистан', media: 'Medium', uzRel: 5, hype: 3, risk: 'Green', tier: 'Low', verdict: 'только ивент' },
    { name: 'Мухиддин Мамаджонов', instagram: 'https://www.instagram.com/muhiddin_mamajonov?igsh=MWV3Y2R1bDNlbjljNQ==', geo: 'UZ', location: 'Узбекистан', media: 'Medium', uzRel: 5, hype: 3, risk: 'Green', tier: 'Low', verdict: 'только ивент' }
];

const topCandidatesData = [
    {
        name: 'Малик (абби) Ербутаев',
        summary: 'Лучший локальный исполнитель для UZ-кампании: высокий уровень доверия, широкая аудитория и минимум внешних рисков.',
        strategy: 'Позиционировать как ключевого амбассадора UZ: 2-3 спонсорских видео, несколько branded Reels и эксклюзивный Telegram-партнер.',
        deliverables: '1 промо-пост + 3 stories до боя, 1 пост после, short-form контент в TikTok/Instagram.',
        risk: 'Низкий. Лучший вариант для длительного партнерства с брендом.'
    },
    {
        name: 'Бобур Абдулазизов',
        summary: 'Сильный локальный UZ кандидат с яркой фан-базой и высоким вовлечением.',
        strategy: 'Концентрация на локальной активации: раздача промокодов, city- тур, live Q&A в Telegram.',
        deliverables: 'Анонс + активные stories + съемка backstage в день боя.',
        risk: 'Низкий. Высокая операционная надежность.'
    },
    {
        name: 'Хумоюн Тухтамурадов',
        summary: 'Проверенный UZ-герой с массой медийных кейсов и масс-маркет appeal.',
        strategy: 'Использовать стиль «заноза в теме»: прямой разговор с фанатами, челленджи, челлендж-ставки.',
        deliverables: '3 reels/shorts + брендированные сторис + Telegram-рассылки.',
        risk: 'Средний-низкий. Лучше комбинировать с другим локальным лицом.'
    },
    {
        name: 'Еркебулан Токтар',
        summary: 'Ключевой кандидат для регионального расширения: KZ + UZ, свежая эмоциональная связь с молодым сегментом.',
        strategy: 'Позиционировать как кросс-граничную звезду. Использовать digital-first кейс и branded mini-series.',
        deliverables: 'Спецпроект «UZ x KZ», видеодневник подготовки, интегрированная Telegram-кампания.',
        risk: 'Средний. Требует адаптации месседжей под Узбекистан.'
    },
    {
        name: 'Шарабутдин Магомедов',
        summary: 'Глобальный драйвер доверия: сильная узнаваемость и премиум-имидж в СНГ.',
        strategy: 'Роль special guest / бренд-амбассадора для нишевого high-end позиционирования.',
        deliverables: 'VIP-промо, limited merch, premium digital-контент.',
        risk: 'Средний. Высокая стоимость и логистика, но отличный эффект узнаваемости.'
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
            <td class="p-4 border-b">${fighter.media}</td>
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
                        <p class="text-sm text-slate-500 mt-1">${candidate.summary}</p>
                    </div>
                    <span class="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">Top candidate</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="font-semibold mb-2">Стратегия</p>
                        <p>${candidate.strategy}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="font-semibold mb-2">Обязательные deliverables</p>
                        <p>${candidate.deliverables}</p>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p class="font-semibold mb-2">Риск</p>
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
    renderTable();
    renderLists();
    initCharts();
});

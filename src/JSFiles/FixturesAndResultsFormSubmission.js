document.addEventListener('DOMContentLoaded', ()=>{
    
//  DECLARING VARIABLES FOR HARD-CODED PARTS

    let currentDivision = 'PREMIER';
    let currentCategory = 'Season Table';

    const divisionButtons = document.querySelectorAll('#division-tabs button');
    const categoryButtons = document.querySelectorAll('#category-buttons button')
    const submitButton = document.getElementById('submit-form');
    const dataDisplayArea = document.getElementById('data-display-area');

//  ADDING LISTENERS FOR BUTTONS

//  DIVISION LISTENERS

    divisionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentDivision = e.target.innerText.trim();
            divisionButtons.forEach(b => {
                b.className = 'bg-[#c2cdd8] px-3 py-1 text-gray-700 hover:bg-white';
            });
            e.target.className = 'bg-[#488cd8] px-3 py-1 text-white border-2 border-[#1a4b8c]';
        });
    });

//  CATEGORY LISTENERS

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {  
            const clickedButton = e.currentTarget;
            const textInsideCategory = clickedButton.querySelector('span');
            currentCategory = textInsideCategory.innerText.trim();
            categoryButtons.forEach(b => {
                b.classList.remove('from-[#488cd8]', 'border-2','border-[#0d2749]','text-white');
                b.classList.add('from-[#8e98a3]');
            });
            clickedButton.classList.remove('from-[#8e98a3]')
            clickedButton.classList.add('from-[#488cd8]', 'border-2','border-[#0d2749]','text-white');
        });
    });

//  DATA RENDERING FUNCTION

    async function renderData(division, category) {

        try {

//  RENDERING DATA FOR SEASON TABLE

            if (category.toUpperCase() === 'SEASON TABLE'){

                dataDisplayArea.innerHTML = `

                <div class="bg-gradient-to-b from-[#7babe9] to-[#051A35] p-4 overflow-x-auto text-white">
                    <table class="w-full text-center table-auto">
                        <thead>
                            <tr class="uppercase font-bold text-sm border-b border-[#5b6a7a]/30">
                                <th class="py-3 px-2 text-left w-12">Rank</th>
                                <th class="py-3 px-2 text-left">Team</th>
                                <th class="py-3 px-2">Played</th>
                                <th class="py-3 px-2">Win</th>
                                <th class="py-3 px-2">Lose</th>
                                <th class="py-3 px-2">Draw</th>
                                <th class="py-3 px-2">Sets For/Against</th>
                                <th class="py-3 px-2">Games For/Against</th>
                                <th class="py-3 px-2">Points</th>
                            </tr>
                        </thead>
                        <tbody id="season-table-body" class="text-sm font-semibold">
                        </tbody>
                    </table>
                </div>

                `;
                const response = await fetch ('SeasonTable.csv');
                const csvText = await response.text();

                const rows = csvText.split('\n').filter(row => row.trim() !== '');
                const divisionData = rows.filter(row => {
                    const columns = row.split(',');
                    return columns[0].trim().toUpperCase() === division.toUpperCase();
                });
                const tableBody = document.getElementById('season-table-body');
                tableBody.innerHTML = '';

//  COPIED FROM HomepageSeasonTable.js

                divisionData.forEach((row, index) => {
                    const cols = row.split(',');
                    const rank = cols[1].trim();
                    const team = cols[2].trim();
                    const played = cols[3].trim();
                    const win = cols[4].trim();
                    const lose = cols[5].trim();
                    const draw = cols[6].trim();
                    const sets = cols[7].trim();
                    const games = cols[8].trim();
                    const points = cols[9].trim();
                    const tr = document.createElement('tr');
                    const borderclass = index < divisionData.length -1 ? 'border-b border-[#5b6a7a]/10' : '';
                    tr.className = `${borderclass}hover:bg-white/20 transistion-colors`;
                    tr.innerHTML = `
                        <td class="py-2 px-2 text-left">${rank}</td>
                        <td class="py-2 px-2 text-left uppercase">${team}</td>
                        <td class="py-2 px-2">${played}</td>
                        <td class="py-2 px-2">${win}</td>
                        <td class="py-2 px-2">${lose}</td>
                        <td class="py-2 px-2">${draw}</td>
                        <td class="py-2 px-2">${sets}</td>
                        <td class="py-2 px-2">${games}</td>
                        <td class="py-2 px-2">${points}</td>
                    `;
                    tableBody.appendChild(tr);
                });     
            }

//  RENDERING DATA FOR RESULTS 

            if (category.toUpperCase() === 'RESULTS'){
                dataDisplayArea.innerHTML = `

                <div id="recent-matches" class="bg-[#7babe9] p-4 flex gap-4 flex-col overflow-y-auto scrollbar relative items-center max-h-[600px]">
                </div>

                `;

// COPIED FROM HomepageRecentMatches.js

                const response = await fetch ('RecentMatches.csv');
                const csvText = await response.text();
                const rows = csvText.split('\n').filter(row => row.trim() !== '');
                const divisionData = rows.filter(row => {
                    const columns = row.split(',');
                    return columns[0].trim().toUpperCase() === division.toUpperCase();
                });

                const container = document.getElementById('recent-matches');
                container.innerHTML = '';

                divisionData.forEach((row) => {
                    const cols = row.split(',');
                    const date = cols[1].trim();
                    const homeTeam = cols[2].trim();
                    const awayTeam = cols[3].trim();
                    const homeScore = cols[4].trim();
                    const awayScore = cols[5].trim();
                    const POTM = cols[6].trim();
                    const URL = cols[7].trim();

                    const homeScoreInt = parseInt(homeScore);
                    const awayScoreInt = parseInt(awayScore);

                    const matchDiv = document.createElement('a');
                    matchDiv.href = URL;
                    matchDiv.className = 'bg-[#f0f4f8] p-7 w-full text-center flex-shrink-0 block transition-transform duration-300 ease-in-out hover:scale-105';
                    if (homeScoreInt > awayScoreInt) {
                        matchDiv.innerHTML = `
                            <div class="flex justify-between font-bold text-sm mb-1 uppercase">
                                <span class="text-[#1a4b8c] md:text-2xl px-2">${homeTeam}</span>
                                <span class="px-2 md:text-2xl  ">${awayTeam}</span>
                            </div>
                            <div class="text-xs text-gray-500 mb-2">${date}</div>
                            <div class="text-5xl text-[#1a4b8c] mb-4 tracking-wider">${homeScore} <span class="3xl text-gray-400 font-normal">:</span> <span class="text-black"> ${awayScore}</span></div>
                            <div class="text-xs font-bold uppercase">POTM: <span>${POTM}</span></div>
                            `;
                    } else if (homeScoreInt < awayScoreInt) {
                        matchDiv.innerHTML = `
                            <div class="flex justify-between font-bold text-sm mb-1 uppercase">
                                <span class="px-2 md:text-2xl ">${homeTeam}</span>
                                <span class="text-[#1a4b8c] md:text-2xl px-2">${awayTeam}</span>
                            </div>
                            <div class="text-xs text-gray-500 mb-2">${date}</div>
                            <div class="text-5xl text-black mb-4 tracking-wider">${homeScore} <span class="3xl text-gray-400 font-normal">:</span> <span class="text-[#1a4b8c]"> ${awayScore}</span></div>
                            <div class="text-xs font-bold uppercase">POTM: <span>${POTM}</span></div>
                            `;
                    } else {
                        matchDiv.innerHTML = `
                            <div class="flex justify-between font-bold text-sm mb-1 uppercase">
                                <span class="px-2 md:text-2xl ">${homeTeam}</span>
                                <span class="px-2 md:text-2xl ">${awayTeam}</span>
                            </div>
                            <div class="text-xs text-gray-500 mb-2">${date}</div>
                            <div class="text-5xl text-black mb-4 tracking-wider">${homeScore} <span class="3xl text-gray-400 font-normal">:</span> <span class="text-black"> ${awayScore}</span></div>
                            <div class="text-xs font-bold uppercase">POTM: <span>${POTM}</span></div>
                            `;
                    }
                    container.appendChild(matchDiv);
                    
                });

            }

//  RENDERING DATA FOR PLAYER SEASON RANKINGS

            if (category.toUpperCase() === 'PLAYER SEASON RANKINGS'){
                dataDisplayArea.innerHTML=`
                
                <div class="bg-gradient-to-b from-[#7babe9] to-[#051A35] p-4 overflow-x-auto custom-scrollbar pb-6 text-white">
                    <table class="w-full text-center table-auto min-w-[800px]">
                        <thead>
                            <tr class="uppercase font-bold text-sm border-b border-[#5b6a7a]/30">
                                <th class="py-3 px-2 text-left w-12">Rank</th>
                                <th class="py-3 px-2 text-left">Player</th>
                                <th class="py-3 px-2 text-left">Team</th>
                                <th class="py-3 px-2">Played</th>
                                <th class="py-3 px-2">Won</th>
                                <th class="py-3 px-2">Lost</th>
                                <th class="py-3 px-2">Win %</th>
                            </tr>
                        </thead>
                        <tbody id="player-ranking-table-body" class="text-sm font-semibold">
                        </tbody>
                    </table>
                
                `;

//  COPIED FROM HomepagePlayerRankings.js

                const response = await fetch ('PlayerRankings.csv');
                const csvText = await response.text();
                const rows = csvText.split('\n').filter(row => row.trim() !== '');
                const divisionData = rows.filter(row => {
                    const columns = row.split(',');
                    return columns[0].trim().toUpperCase() === division.toUpperCase();
                });

                const tableBody = document.getElementById('player-ranking-table-body');
                tableBody.innerHTML = '';

                divisionData.forEach((row, index) => {
                    const cols = row.split(',');
                    const rank = cols[1].trim();
                    const player = cols[2].trim();
                    const team = cols[3].trim();
                    const played = cols[4].trim();
                    const won = cols[5].trim();
                    const lost = cols[6].trim();
                    const winPercentage = cols[7].trim();
                    const tr = document.createElement('tr');
                    const borderclass = index < divisionData.length -1 ? 'border-b border-[#5b6a7a]/10' : '';
                    tr.className = `${borderclass}hover:bg-white/20 transition-colors`;
                    tr.innerHTML = `
                        <td class="py-2 px-2 text-left">${rank}</td>
                        <td class="py-2 px-2 text-left uppercase font-sans">${player}</td>
                        <td class="py-2 px-2 text-left uppercase font-sans">${team}</td>
                        <td class="py-2 px-2">${played}</td>
                        <td class="py-2 px-2">${won}</td>
                        <td class="py-2 px-2">${lost}</td>
                        <td class="py-2 px-2">${winPercentage}</td>
                    `;
                    tableBody.appendChild(tr);
                });

            }

    } catch (error) {
            console.error (`Error loading ${category}:`, error);
        }
    }

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            renderData(currentDivision, currentCategory);
        });
    };
})
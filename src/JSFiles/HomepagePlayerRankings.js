document.addEventListener('DOMContentLoaded', () => {
async function loadPlayerRankings(divisionName){
    try{
        const response = await fetch ('PlayerRankings.csv');
        const csvText = await response.text();
        const rows = csvText.split('\n').filter(row => row.trim() !== '');
        const divisionData = rows.filter(row => {
            const columns = row.split(',');
            return columns[0].trim().toUpperCase() === divisionName.toUpperCase();
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
    } catch (error) {
        console.error('Error loading player rankings:', error);
        const tbody = document.getElementById('player-ranking-table-body');
        if (tbody) { '<tr><td colspan="8" class="text-center text-red-500">Failed to load player rankings. Make sure you are running a local server</td></tr>';
            }
    }
}
const PlayerTabGroup = document.getElementById('Player-tabs');

if (PlayerTabGroup) {
    const buttons = PlayerTabGroup.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => {
                b.className = 'bg-[#c2cdd8] px-3 py-1 text-gray-700 hover:bg-white flex-shrink-0 transition-colors';
            });
            button.className = 'bg-[#488cd8] px-3 py-1 text-white border-2 border-[#1a4b8c] flex-shrink-0 transition-colors';
            loadPlayerRankings(button.innerText);
        });
    });
    loadPlayerRankings('PREMIER');
}
});


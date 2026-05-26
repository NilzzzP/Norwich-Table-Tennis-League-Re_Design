document.addEventListener('DOMContentLoaded', () => {
async function loadSeasonData(divisionName){
    try{
        const response = await fetch ('SeasonTable.csv');
        const csvText = await response.text();

        const rows = csvText.split('\n').filter(row => row.trim() !== '');
        const divisionData = rows.filter(row => {
            const columns = row.split(',');
            return columns[0].trim().toUpperCase() === divisionName.toUpperCase();
        });

        const tableBody = document.getElementById('season-table-body');
        tableBody.innerHTML = '';

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
    } catch (error) {
        console.error('Error loading season data:', error);
        const tbody = document.getElementById('season-table-body');
        if (tbody) { '<tr><td colspan="9" class="text-center text-red-500">Failed to load season data. Make sure you are running a local server</td></tr>';
         }
    }
}
const SeasonTabGroup = document.getElementById('season-tabs');

if (SeasonTabGroup) {
    const buttons = SeasonTabGroup.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => {
                b.className = 'bg-[#c2cdd8] px-3 py-1 text-gray-700 hover:bg-white flex-shrink-0 transition-colors';
            });
            button.className = 'bg-[#488cd8] px-3 py-1 text-white border-2 border-[#1a4b8c] flex-shrink-0 transition-colors';

            loadSeasonData(button.innerText);
            });
    });
    loadSeasonData('PREMIER');
}

});

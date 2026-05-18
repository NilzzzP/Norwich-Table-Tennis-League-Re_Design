document.addEventListener('DOMContentLoaded', () => {
async function LoadRecentMatches(divisionName){
    try{
        const response = await fetch ('RecentMatches.csv');
        const csvText = await response.text();
        const rows = csvText.split('\n').filter(row => row.trim() !== '');
        const divisionData = rows.filter(row => {
            const columns = row.split(',');
            return columns[0].trim().toUpperCase() === divisionName.toUpperCase();
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

            const homeScoreInt = parseInt(homeScore);
            const awayScoreInt = parseInt(awayScore);

            const matchDiv = document.createElement('a');
            matchDiv.href = 'match-details.html'
            matchDiv.className = 'bg-[#f0f4f8] p-7 min-w-[200px] text-center flex-shrink-0 block transition-transform duration-300 ease-in-out hover:scale-105';
            if (homeScoreInt > awayScoreInt) {
                matchDiv.innerHTML = `
                    <div class="flex justify-between font-bold text-sm mb-1 uppercase">
                        <span class="text-[#1a4b8c] px-2">${homeTeam}</span>
                        <span class="px-2">${awayTeam}</span>
                    </div>
                    <div class="text-xs text-gray-500 mb-2">${date}</div>
                    <div class="text-5xl text-[#1a4b8c] mb-4 tracking-wider">${homeScore} <span class="3xl text-gray-400 font-normal">:</span> <span class="text-black"> ${awayScore}</span></div>
                    <div class="text-xs font-bold uppercase">POTM: <span>${POTM}</span></div>
                    `;
            } else if (homeScoreInt < awayScoreInt) {
                matchDiv.innerHTML = `
                    <div class="flex justify-between font-bold text-sm mb-1 uppercase">
                        <span class="px-2">${homeTeam}</span>
                        <span class="text-[#1a4b8c] px-2">${awayTeam}</span>
                    </div>
                    <div class="text-xs text-gray-500 mb-2">${date}</div>
                    <div class="text-5xl text-black mb-4 tracking-wider">${homeScore} <span class="3xl text-gray-400 font-normal">:</span> <span class="text-[#1a4b8c]"> ${awayScore}</span></div>
                    <div class="text-xs font-bold uppercase">POTM: <span>${POTM}</span></div>
                    `;
            } else {
                matchDiv.innerHTML = `
                    <div class="flex justify-between font-bold text-sm mb-1 uppercase">
                        <span class="px-2">${homeTeam}</span>
                        <span class="px-2">${awayTeam}</span>
                    </div>
                    <div class="text-xs text-gray-500 mb-2">${date}</div>
                    <div class="text-5xl text-black mb-4 tracking-wider">${homeScore} <span class="3xl text-gray-400 font-normal">:</span> <span class="text-black"> ${awayScore}</span></div>
                    <div class="text-xs font-bold uppercase">POTM: <span>${POTM}</span></div>
                    `;
            }
            container.appendChild(matchDiv);
        });
    } catch (error) {
        console.error('Error loading recent matches:', error);
        const container = document.getElementById('recent-matches');
        if (container) { container.innerHTML = '<div class="text-center text-red-500">Failed to load recent matches. Make sure you are running a local server</div>';
            }
    }
}
const RecentMatchesTabGroup = document.getElementById('recent-matches-tabs');

if (RecentMatchesTabGroup) {
    const buttons = RecentMatchesTabGroup.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => {
                b.className = 'bg-[#c2cdd8] px-3 py-1 text-gray-700 hover:bg-white flex-shrink-0 transition-colors';
            });
            button.className = 'bg-[#488cd8] px-3 py-1 text-white border-2 border-[#1a4b8c] flex-shrink-0 transition-colors';
            LoadRecentMatches(button.innerText);
        });
    });
    LoadRecentMatches('PREMIER');
}
});



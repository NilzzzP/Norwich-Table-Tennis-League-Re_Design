document.addEventListener('DOMContentLoaded', async () => {

    let allPlayers = []

    async function LoadData(){
        try{
            const response = await fetch('RankingData.csv');
            if (!response.ok) throw new Error("Could not load RankingData.csv");

            const csvText = await response.text();

            const lines = csvText.split('\n').filter(line => line.trim() !== '');   //same method used for other player ranking displays

            for (let i=1; i<lines.length;i++){
                const columns = lines[i].split(',').map(col => col.trim());

                if (columns.length === 4){
                    allPlayers.push({name: columns[0], seasonPlusMinus: columns[1], points: parseInt(columns[2],10), url: columns[3]});
                }
            }

            allPlayers.sort((a,b) => b.points - a.points);
            allPlayers.forEach((player, index) => {
                player.rank = index+1;
            });

            renderData(allPlayers);
            
        } catch (error){
            console.error("error loading rankings:", error);
        }
    }

    function renderData(players){
        const tableBody = document.getElementById('player-ranking-table-body');
        tableBody.innerHTML='';
        players.forEach(player => {
            const tr = document.createElement('tr');
            tr.className = 'border-b border-[#5b6a7a]/10 hover:bg-white/20 transition-colors';

            let seasonColor = 'text-white';
            if (player.seasonPlusMinus.startsWith('+')) seasonColor = 'text-green-100';
            if (player.seasonPlusMinus.startsWith('-')) seasonColor = 'text-red-100';

            tr.innerHTML = `
            
            <td class="py-2 px-2 text-left">${player.rank}</td>
            <td class="py-2 px-2 text-left ">
                <a href="${player.url}" class="hover-text[#7babe9] transition-all duration-200">
                    ${player.name}
                </a>\
            </td>
            <td class="py-2 px-2 ${seasonColor}">${player.seasonPlusMinus}</td>
            <td class="py-2 px-2">${player.points}</td>
            
            `
            tableBody.appendChild(tr);
        });
    }
    

    const searchInput = document.getElementById('search-rankings');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchPlayer = e.target.value.toLowerCase();

            const filteredPlayers = allPlayers.filter(player => player.name.toLowerCase().includes(searchPlayer));

            renderData(filteredPlayers);
            
        })
    }
LoadData();

    const rankingInformation = document.getElementById('ranking-information');
    const rankingInformationBody = document.getElementById('ranking-information-body')
    rankingInformation.addEventListener('click', (e) => {
        rankingInformationBody.classList.remove('hidden');
    });

    const rankingInformationBodyCloseButton = document.getElementById('info-close')
    rankingInformationBodyCloseButton.addEventListener('click', (e) => {
        rankingInformationBody.classList.add('hidden');
    });
    
})
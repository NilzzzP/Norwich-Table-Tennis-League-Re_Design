export async function DisplayPlayerHistory(JSONPath){

    let allMatches=[];
    const response = await fetch(JSONPath);
    if (!response) throw new Error("Could not locate PlayerProfile.JSON", Error);

    const playerData = await response.json();

    const responseCSV = await fetch(playerData.CSVURL);
    if (!responseCSV) throw new Error("Could not locate CSV", Error);

    const csvText = await responseCSV.text();

    try {
        const lines = csvText.split('\n').filter(line => line.trim() !== '');

        for (let i=1; i<lines.length;i++){
            const columns = lines[i].split(',').map(col => col.trim());
            allMatches.push({
                Opponent: columns[0],
                Versus: columns[1],
                Date: columns[2],
                Result: columns[3],
                MatchPlusMinus: columns[4],
                Points: parseInt(columns[5], 10)
            });

        }
            console.log(allMatches)
            allMatches.reverse();

            

            const tableBody = document.getElementById('player-History-table-body');
            tableBody.innerHTML='';
            let winCount=0;

            allMatches.forEach(match => {

                let matchColor = 'text-white';
                if (match.MatchPlusMinus.startsWith('+')) {
                    matchColor = 'text-green-100';
                    winCount++;
                }
                if (match.MatchPlusMinus.startsWith('-')) matchColor = 'text-red-100';

                const tr = document.createElement('tr');
                tr.className = 'border-b border-white/50 hover:bg-white/20 transition-colors';
                tr.innerHTML=`
                
                <td class="py-3 px-2 text-left">${match.Opponent}</td>
                <td class="py-3 px-2 text-left">${match.Versus}</td>
                <td class="py-3 px-2 text-left">${match.Date}</td>
                <td class="py-3 px-2">${match.Result}</td>
                <td class="py-3 px-2 ${matchColor}">${match.MatchPlusMinus}</td>
                <td class="py-3 px-2">${match.Points}</td>
                
                `
                tableBody.appendChild(tr);
            })

            const winRate = Math.round((winCount/allMatches.length)*100);
            document.getElementById('player-win-rate').textContent = `${winRate}%`;
            
        

    } catch (error){
        console.error("error loading matches:", error);
    }

    try{
        document.getElementById('player-profile-photo').src = playerData.ProfilePhotoURL;
        document.getElementById('player-name').textContent = playerData.Name;
        document.getElementById('player-rank').textContent = playerData.Rank;
        document.getElementById('player-points').textContent = playerData.Points;
        document.getElementById('player-season-difference').textContent = playerData.SeasonPerformance;

        

    } catch (error){
        console.error("ERROR LOADING DATA", error)
    };




    





}
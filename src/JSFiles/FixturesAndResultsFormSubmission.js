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
        dataDisplayArea.innerHTML = `<p>Displaying ${category} for ${division}</p>`;

        try {
            if (category.toUpperCase() === 'Season Table'){
                const response = await fetch ('seasonTable.csv');
                const csvText = await response.text();

                const rows = csvText.split('\n').filter(row => row.trim() !== '');
                const divisionData = rows.filter(row => {
                    const columns = row.split(',');
                    return columns[0].trim().toUpperCase() === division.toUpperCase();
                });
                const tableBody = document.getElementById('data-display-area');
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
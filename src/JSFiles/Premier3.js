document.addEventListener('DOMContentLoaded', async ()=>{

    

    //Declaring variables

    let HomeTeam;
    let AwayTeam;
    let HomeScore;
    let AwayScore;
    let MatchDate;
    let UploadDate;
    let UploadUser;
    let Home1;
    let Home2
    let Home3;
    let Away1;
    let Away2;
    let Away3;
    let Home1Image;
    let Home2Image;
    let Home3Image;
    let Away1Image;
    let Away2Image;
    let Away3Image;
    let POTM;
    let HomeDoubles;
    let AwayDoubles;
    let Match2v1;
    let Match1v3;
    let Match3v2;
    let Match2v3;
    let Match1v2;
    let Match3v3;
    let Match2v2;
    let Match1v1;
    let Doubles;


    const data = await fetchMatchData('match_data/Premier3.txt')
    console.log(data);

    //Fetching and parsing data

    if (!data) return;

    HomeTeam = data.HomeTeam;
    AwayTeam = data.AwayTeam;
    HomeScore = data.HomeScore;
    AwayScore = data.AwayScore;
    MatchDate = data.MatchDate;
    UploadDate = data.UploadDate;
    UploadUser = data.UploadUser;
    POTM = data.POTM;
    Home1 = data.Home1
    Home2 = data.Home2
    Home3 = data.Home3
    Away1 = data.Away1
    Away2 = data.Away2
    Away3 = data.Away3
    HomeDoubles = data.HomeDoubles
    AwayDoubles = data.AwayDoubles
    Home1Image = data.Home1Image
    Home2Image = data.Home2Image
    Home3Image = data.Home3Image
    Away1Image = data.Away1Image
    Away2Image = data.Away2Image
    Away3Image = data.Away3Image
    Match2v1 = data['2v1']
    Match1v3 = data['1v3']
    Match3v2 = data['3v2']
    Match2v3 = data['2v3']
    Match3v1 = data['3v1']
    Match1v2 = data['1v2']
    Match3v3 = data['3v3']
    Match2v2 = data['2v2']
    Match1v1 = data['1v1']
    Doubles = data.Doubles

    //Writing to match summary (overall score)

    if (HomeScore > AwayScore){
        const SummaryContainer = document.getElementById('MatchSummary')

        SummaryContainer.innerHTML = `
        
        <div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 border-4 border-[#1a4b8c] bg-[#e6ecef] relative">     
            <div class="absolute top-0 right-0 bg-[#1a4b8c] text-white text-xs sm:text-sm font-bold px-3 py-1 uppercase tracking-widest border-b-2 border-l-2 border-[#1a4b8c]">
                Winner
            </div>
            
            <h2 class="text-3xl sm:text-5xl font-black uppercase text-[#1a4b8c] mb-6 text-center tracking-tight">
                ${HomeTeam}
            </h2>
            <span class="text-7xl sm:text-9xl font-bold text-[#1a4b8c] leading-none">
                ${HomeScore}
            </span>
        </div>

        <div class="hidden md:flex flex-col items-center justify-center px-2">
            <span class="text-7xl font-black text-gray-300 tracking-widest">|</span>
        </div>

        <div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 border-4 border-transparent">
            
            <h2 class="text-3xl sm:text-5xl font-black uppercase text-white mb-6 text-center tracking-tight">
                ${AwayTeam}
            </h2>
            <span class="text-7xl sm:text-9xl font-bold text-white leading-none">
                ${AwayScore}
            </span>
        </div>
        
        `
    }
    if (HomeScore < AwayScore){
        const SummaryContainer = document.getElementById('MatchSummary')

        SummaryContainer.innerHTML = `
        
        <div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 border-4 border-transparent relative">
                        
            <h2 class="text-3xl sm:text-5xl font-black uppercase text-white mb-6 text-center tracking-tight">
                ${HomeTeam}
            </h2>
            <span class="text-7xl sm:text-9xl font-bold text-white leading-none">
                ${HomeScore}
            </span>
        </div>

        <div class="hidden md:flex flex-col items-center justify-center px-2">
            <span class="text-7xl font-black text-gray-300 tracking-widest">|</span>
        </div>

        <div class="absolute top-0 right-0 bg-[#1a4b8c] text-white text-xs sm:text-sm font-bold px-3 py-1 uppercase tracking-widest border-b-2 border-l-2 border-[#1a4b8c]">
            Winner
        </div>

        <div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 border-[#1a4b8c] bg-[#e6ecef]">
            
            <h2 class="text-3xl sm:text-5xl font-black uppercase text-[#1a4b8c] mb-6 text-center tracking-tight">
                ${AwayTeam}
            </h2>
            <span class="text-7xl sm:text-9xl font-bold text-[#1a4b8c] leading-none">
                ${AwayScore}
            </span>
        </div>
        
        `
    }
    if (HomeScore==AwayScore){

        const SummaryContainer = document.getElementById('MatchSummary')

        SummaryContainer.innerHTML = `
        
        <div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 border-4 border-transparent relative">
                        
            <h2 class="text-3xl sm:text-5xl font-black uppercase text-white mb-6 text-center tracking-tight">
                ${HomeTeam}
            </h2>
            <span class="text-7xl sm:text-9xl font-bold text-white leading-none">
                ${HomeScore}
            </span>
        </div>

        <div class="hidden md:flex flex-col items-center justify-center px-2">
            <span class="text-7xl font-black text-gray-300 tracking-widest">|</span>
        </div>

        <div class="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 border-4 border-transparent">
            
            <h2 class="text-3xl sm:text-5xl font-black uppercase text-white mb-6 text-center tracking-tight">
                ${AwayTeam}
            </h2>
            <span class="text-7xl sm:text-9xl font-bold text-white leading-none">
                ${AwayScore}
            </span>
        </div>
        
        `

    }

    //Writing to scorecard details

    const scorecardDetailsContainer = document.getElementById('ScorecardDetails')

    scorecardDetailsContainer.innerHTML=`
    
        <p>
            <span class="uppercase tracking-wider mr-2">Match Date:</span>
            <span>${MatchDate}</span>
        </p>
        <p>
            <span class="uppercase tracking-wider mr-2">Upload Date:</span>
            <span>${UploadDate}</span>
        </p>
        <p>
            <span class="uppercase tracking-wider mr-2">Approved By:</span> 
            <span>${UploadUser}</span>
        </p>
        <p>
            <span class="uppercase tracking-wider mr-2">Player Of The Match:</span> 
            <span>${POTM}</span>
        </p>

    
    `

    //writing to Team Members

    const HomeTeamContainer = document.getElementById('HomeTeamMembers')

    HomeTeamContainer.innerHTML=`
    
        <h3 class="text-2xl font-black uppercase text-[#020913] tracking-widest mb-2">Home Team</h3>

        <div class="flex items-center gap-4 sm:gap-6">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shrink-0 overflow-hidden bg-gray-800">
                <img src="${Home1Image}" alt="Home 1 Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl sm:text-3xl font-black text-[#020913] w-6 sm:w-8 text-center">1.</div>
            <div class="flex-1 flex gap-2 sm:gap-4">
                <div class="border-b-2 border-white/50 pb-1 flex-1 font-bold text-base sm:text-lg uppercase px-1 truncate tracking-wide">${Home1}</div>
            </div>
        </div>

        <div class="flex items-center gap-4 sm:gap-6">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shrink-0 overflow-hidden bg-gray-800">
                <img src="${Home2Image}" alt="Home 2 Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl sm:text-3xl font-black text-[#020913] w-6 sm:w-8 text-center">2.</div>
            <div class="flex-1 flex gap-2 sm:gap-4">
                <div class="border-b-2 border-white/50 pb-1 flex-1 font-bold text-base sm:text-lg uppercase px-1 truncate tracking-wide">${Home2}</div>
            </div>
        </div>

        <div class="flex items-center gap-4 sm:gap-6">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shrink-0 overflow-hidden bg-gray-800">
                <img src="${Home3Image}" alt="Home 3 Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl sm:text-3xl font-black text-[#020913] w-6 sm:w-8 text-center">3.</div>
            <div class="flex-1 flex gap-2 sm:gap-4">
                <div class="border-b-2 border-white/50 pb-1 flex-1 font-bold text-base sm:text-lg uppercase px-1 truncate tracking-wide">${Home3}</div>
            </div>
        </div>

        <div class="flex items-center gap-4 sm:gap-6 mt-4 pt-6 border-t-2 border-dashed border-white/30">
            <div class="text-2xl sm:text-3xl font-black text-gray-400 w-6 sm:w-8 text-center">D.</div>
            <div class="flex-1 border-b-2 border-gray-400 pb-1">
                <div class="font-bold text-base sm:text-lg uppercase text-white px-1 truncate tracking-wide">${HomeDoubles}</div>
            </div>
        </div>
    
    `
    const AwayTeamContainer = document.getElementById('AwayTeamMembers')

    AwayTeamContainer.innerHTML=`
    
        <h3 class="text-2xl font-black uppercase text-gray-300 tracking-widest mb-2">Away Team</h3>

        <div class="flex items-center gap-4 sm:gap-6">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shrink-0 overflow-hidden bg-gray-800">
                <img src="${Away1Image}" alt="Player 4 Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl sm:text-3xl font-black text-white/50 w-6 sm:w-8 text-center">1.</div>
            <div class="flex-1 flex gap-2 sm:gap-4">
                <div class="border-b-2 border-white/50 pb-1 flex-1 font-bold text-base sm:text-lg uppercase px-1 truncate tracking-wide">${Away1}</div>
            </div>
        </div>

        <div class="flex items-center gap-4 sm:gap-6">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shrink-0 overflow-hidden bg-gray-800">
                <img src="${Away2Image}" alt="Player 5 Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl sm:text-3xl font-black text-white/50 w-6 sm:w-8 text-center">2.</div>
            <div class="flex-1 flex gap-2 sm:gap-4">
                <div class="border-b-2 border-white/50 pb-1 flex-1 font-bold text-base sm:text-lg uppercase px-1 truncate tracking-wide">${Away2}</div>
            </div>
        </div>

        <div class="flex items-center gap-4 sm:gap-6">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shrink-0 overflow-hidden bg-gray-800">
                <img src="${Away3Image}" alt="Player 6 Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-2xl sm:text-3xl font-black text-white/50 w-6 sm:w-8 text-center">3.</div>
            <div class="flex-1 flex gap-2 sm:gap-4">
                <div class="border-b-2 border-white/50 pb-1 flex-1 font-bold text-base sm:text-lg uppercase px-1 truncate tracking-wide">${Away3}</div>
            </div>
        </div>

        <div class="flex items-center gap-4 sm:gap-6 mt-4 pt-6 border-t-2 border-dashed border-white/30">
            <div class="text-2xl sm:text-3xl font-black text-gray-400 w-6 sm:w-8 text-center">D.</div>
            <div class="flex-1 border-b-2 border-gray-400 pb-1">
                <div class="font-bold text-base sm:text-lg uppercase text-white px-1 truncate tracking-wide">${AwayDoubles}</div>
            </div>
        </div>
    
    `

    const Sets2v1 = Match2v1.length;
    const Sets1v3 = Match1v3.length;
    const Sets3v2 = Match3v2.length;
    const Sets2v3 = Match2v3.length;
    const Sets3v1 = Match3v1.length;
    const Sets1v2 = Match1v2.length;
    const Sets3v3 = Match3v3.length;
    const Sets2v2 = Match2v2.length;
    const Sets1v1 = Match1v1.length;
    const SetsDoubles = Doubles.length;
    
    let homegamecounter=0;
    let awaygamecounter=0;

    const matchesContainer = document.getElementById('MatchesContainer')
    const matchdiv2v1 = document.createElement('div')
    matchdiv2v1.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    // adding scores to page - 2v1 -------------------------------------------------------------------------------------------------------------------

    for (let i=0; i < Sets2v1; i++){

        let currentset = Match2v1[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv2v1.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home2}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away1}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv2v1scores = document.createElement('div')
        matchdiv2v1scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets2v1; i++){

            let currentset = Match2v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv2v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v1.append(matchdiv2v1scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv2v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v1.append(matchdiv2v1scores);
            }

        }
        matchesContainer.append(matchdiv2v1);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv2v1.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home2}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away1}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv2v1scores = document.createElement('div')
        matchdiv2v1scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets2v1; i++){

            let currentset = Match2v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv2v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v1.append(matchdiv2v1scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv2v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v1.append(matchdiv2v1scores);
            }
            
        }
    
        matchdiv2v1.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv2v1);
    }

    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 1v3 ------------------------------------------------------------------------------------------------------------------------------------

    const matchdiv1v3 = document.createElement('div')
    matchdiv1v3.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets1v3; i++){

        let currentset = Match1v3[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv1v3.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home1}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away3}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv1v3scores = document.createElement('div')
        matchdiv1v3scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v1; i++){

            let currentset = Match1v3[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv1v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v3.append(matchdiv1v3scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv1v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v3.append(matchdiv1v3scores);
            }

        }

        matchdiv1v3.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv1v3);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv1v3.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home1}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away3}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv1v3scores = document.createElement('div')
        matchdiv1v3scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets1v3; i++){

            let currentset = Match2v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv1v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v3.append(matchdiv1v3scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv1v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v3.append(matchdiv1v3scores);
            }
            
        }
    
        matchdiv1v3.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv1v3);
    }


    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 3v2 -----------------------------------------------------------------------------------------------------------------------------------

    const matchdiv3v2 = document.createElement('div')
    matchdiv3v2.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets3v2; i++){

        let currentset = Match3v2[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv3v2.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home3}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away2}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv3v2scores = document.createElement('div')
        matchdiv3v2scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v2; i++){

            let currentset = Match3v2[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv3v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v2.append(matchdiv3v2scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv3v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v2.append(matchdiv3v2scores);
            }

        }

        matchdiv3v2.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv3v2);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv3v2.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home3}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away2}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv3v2scores = document.createElement('div')
        matchdiv3v2scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v2; i++){

            let currentset = Match3v2[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv3v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v2.append(matchdiv3v2scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv3v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v2.append(matchdiv3v2scores);
            }
            
        }
    
        matchdiv3v2.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv3v2);
    }

    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 2v3 ----------------------------------------------------------------------------------------------------------------------------

    const matchdiv2v3 = document.createElement('div')
    matchdiv2v3.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets2v3; i++){

        let currentset = Match2v3[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv2v3.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home2}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away3}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv2v3scores = document.createElement('div')
        matchdiv2v3scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets2v3; i++){

            let currentset = Match2v3[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv2v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v3.append(matchdiv2v3scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv2v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v3.append(matchdiv2v3scores);
            }

        }

        matchdiv2v3.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv2v3);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv2v3.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home2}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away3}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv2v3scores = document.createElement('div')
        matchdiv2v3scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets2v3; i++){

            let currentset = Match2v3[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv2v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v3.append(matchdiv2v3scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv2v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v3.append(matchdiv2v3scores);
            }
            
        }
    
        matchdiv2v3.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv2v3);
    }


    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 3v1 ------------------------------------------------------------------------------------------------------------------------------------

    const matchdiv3v1 = document.createElement('div')
    matchdiv3v1.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets3v1; i++){

        let currentset = Match3v1[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv3v1.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home3}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away1}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv3v1scores = document.createElement('div')
        matchdiv3v1scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v1; i++){

            let currentset = Match3v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv3v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v1.append(matchdiv3v1scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv3v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v1.append(matchdiv3v1scores);
            }

        }

        matchdiv3v1.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv3v1);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv3v1.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home3}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away1}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv3v1scores = document.createElement('div')
        matchdiv3v1scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v1; i++){

            let currentset = Match3v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv3v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v1.append(matchdiv3v1scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv3v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v1.append(matchdiv3v1scores);
            }
            
        }
    
        matchdiv3v1.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv3v1);
    }

    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 1v2 -----------------------------------------------------------------------------------------------------------------------------------

    const matchdiv1v2 = document.createElement('div')
    matchdiv1v2.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets1v2; i++){

        let currentset = Match1v2[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv1v2.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home1}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away2}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv1v2scores = document.createElement('div')
        matchdiv1v2scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets1v2; i++){

            let currentset = Match1v2[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv1v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v2.append(matchdiv1v2scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv1v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v2.append(matchdiv1v2scores);
            }

        }

        matchdiv1v2.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv1v2);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv1v2.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home1}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away2}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv1v2scores = document.createElement('div')
        matchdiv1v2scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets1v2; i++){

            let currentset = Match1v2[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv1v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v2.append(matchdiv1v2scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv1v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v2.append(matchdiv1v2scores);
            }
            
        }
    
        matchdiv1v2.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv1v2);
    }

    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 3v3 -------------------------------------------------------------------------------------------------------------------------------------

    const matchdiv3v3 = document.createElement('div')
    matchdiv3v3.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets3v3; i++){

        let currentset = Match3v3[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv3v3.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home3}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away3}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv3v3scores = document.createElement('div')
        matchdiv3v3scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v3; i++){

            let currentset = Match3v3[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv3v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v3.append(matchdiv3v3scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv3v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v3.append(matchdiv3v3scores);
            }

        }

        matchdiv3v3.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv3v3);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv3v3.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home3}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away3}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv3v3scores = document.createElement('div')
        matchdiv3v3scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets3v3; i++){

            let currentset = Match3v3[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv3v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v3.append(matchdiv3v3scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv3v3scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv3v3.append(matchdiv3v3scores);
            }
            
        }
    
        matchdiv3v3.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv3v3);
    }

    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 2v2 -------------------------------------------------------------------------------------------------------------------------------------

    const matchdiv2v2 = document.createElement('div')
    matchdiv2v2.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets2v2; i++){

        let currentset = Match2v2[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv2v2.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home2}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away2}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv2v2scores = document.createElement('div')
        matchdiv2v2scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets2v2; i++){

            let currentset = Match2v2[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv2v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v2.append(matchdiv2v2scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv2v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v2.append(matchdiv2v2scores);
            }

        }

        matchdiv2v2.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv2v2);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv2v2.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home2}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away2}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv2v2scores = document.createElement('div')
        matchdiv2v2scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets2v2; i++){

            let currentset = Match2v2[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv2v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v2.append(matchdiv2v2scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv2v2scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv2v2.append(matchdiv2v2scores);
            }
            
        }
    
        matchdiv2v2.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv2v2);
    }


    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding 1v1 ---------------------------------------------------------------------------------------------------------------------------------------

    const matchdiv1v1 = document.createElement('div')
    matchdiv1v1.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < Sets1v1; i++){

        let currentset = Match1v1[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdiv1v1.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${Home1}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${Away1}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdiv1v1scores = document.createElement('div')
        matchdiv1v1scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets1v1; i++){

            let currentset = Match1v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv1v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v1.append(matchdiv1v1scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv1v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v1.append(matchdiv1v1scores);
            }

        }

        matchdiv1v1.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdiv1v1);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdiv1v1.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${Home1}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${Away1}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdiv1v1scores = document.createElement('div')
        matchdiv1v1scores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<Sets1v1; i++){

            let currentset = Match1v1[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdiv1v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v1.append(matchdiv1v1scores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdiv1v1scores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdiv1v1.append(matchdiv1v1scores);
            }
            
        }
    
        matchdiv1v1.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdiv1v1);
    }

    //resetting game counters

    homegamecounter=0;
    awaygamecounter=0;

    //adding Doubles ---------------------------------------------------------------------------------------------------------------------------------

    const matchdivDoubles = document.createElement('div')
    matchdivDoubles.className = 'border-4 border-[#5b6a7a] bg-[#e6ecef] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-4'

    for (let i=0; i < SetsDoubles; i++){

        let currentset = Doubles[i];
        let homepoints = currentset[0];
        let awaypoints = currentset[1];

        if (homepoints > awaypoints){
            homegamecounter++;
        } else if (awaypoints > homepoints){
            awaygamecounter++;
        } 
    }
    console.log("the home game counter is: " ,homegamecounter)
    console.log("the away game counter is: ", awaygamecounter)

    if (homegamecounter < awaygamecounter){ // if away team wins this match

        matchdivDoubles.innerHTML=`
        
            <div class="flex flex-col w-full md:w-2/5 gap-2">
                <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                    <span class="uppercase truncate pr-4">${HomeDoubles}</span>
                    <span>${homegamecounter}</span>
                </div>
                <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35]  text-lg sm:text-xl">
                    <span class="uppercase truncate pr-4">${AwayDoubles}</span>
                    <span>${awaygamecounter}</span>
                </div>
            </div>
        `
        const matchdivDoublesscores = document.createElement('div')
        matchdivDoublesscores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<SetsDoubles; i++){

            let currentset = Doubles[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdivDoublesscores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdivDoubles.append(matchdivDoublesscores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdivDoublesscores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdivDoubles.append(matchdivDoublesscores);
            }

        }

        matchdivDoubles.innerHTML+=`
        
            <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
            </div>
        `

        matchesContainer.append(matchdivDoubles);
    }
    

    if (homegamecounter > awaygamecounter){ //if home team wins this match

        matchdivDoubles.innerHTML=`
        
        <div class="flex flex-col w-full md:w-2/5 gap-2">
            <div class="flex justify-between items-center px-4 py-2 font-bold bg-[#a2c1e8] text-[#051A35] text-lg sm:text-xl">
                <span class="uppercase truncate pr-4">${HomeDoubles}</span>
                <span>${homegamecounter}</span>
            </div>
            <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-lg sm:text-xl border-2 border-transparent">
                <span class="uppercase truncate pr-4">${AwayDoubles}</span>
                <span>${awaygamecounter}</span>
            </div>
        </div>
        
        `

        const matchdivDoublesscores = document.createElement('div')
        matchdivDoublesscores.className = 'flex justify-center items-center gap-3 sm:gap-6 text-xl sm:text-2xl text-gray-800';
        
        for (let i=0; i<SetsDoubles; i++){

            let currentset = Doubles[i];

            if (currentset[0] > currentset[1]){ //meaning home team won this game

                matchdivDoublesscores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[0]}</div> 
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[1]}</div>
                </div>
                
                `
                matchdivDoubles.append(matchdivDoublesscores);

            }  else if (currentset[0] < currentset[1]){ //meaning away team won this game
                
                matchdivDoublesscores.innerHTML+=`
                
                <div class="flex flex-col items-center gap-3 border-r-4 border-[#5b6a7a]/20 pr-3 sm:pr-6">
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 border border-transparent">${currentset[0]}</div>
                    <div class="px-1.5 sm:px-3 py-0.5 sm-py-1 bg-[#a2c1e8] font-bold text-[#051A35]">${currentset[1]}</div>
                </div>
                
                `
                matchdivDoubles.append(matchdivDoublesscores);
            }
            
        }
    
        matchdivDoubles.innerHTML+=`
        
        <div class="w-full md:w-1/6 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <span class="text-4xl sm:text-5xl font-black text-[#1a4b8c] tracking-widest whitespace-nowrap">${homegamecounter} - ${awaygamecounter}</span>
        </div>
    
        `
        
        matchesContainer.append(matchdivDoubles);
    }













    
    

    




})

async function fetchMatchData(file){
    try{
        const response = await fetch(file)
        if (!response.ok){
            throw new Error(`CANNOT FIND ${file}`)
        }
        const raw = await response.text();
        console.log("RETURNED: ", raw);
        const matchData = {};
        const lines = raw.split(/\r?\n/);

        lines.forEach(line => {
            if (!line.trim() || !line.includes('='))return;

            const splitraw = line.indexOf('=');
            const variable = line.substring(0, splitraw).trim();
            let value = line.substring(splitraw + 1).trim();

            if (value.startsWith('[') && value.endsWith(']')){
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    console.error(`formatting error: variable ${variable}`);
                }
            }
            matchData[variable] = value;
        });
        return matchData;
        console.log(matchData);
    } catch (error) {
        console.error("Did not load Match Data: ", error)
        return null;
    }
}
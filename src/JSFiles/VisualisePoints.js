

export async function GenerateGraph(CSVPath) {

    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    async function drawChart() {

        try{
            const response = await fetch(CSVPath);
            if (!response) throw new Error("Could not locate CSV", Error);

            const csvText = await response.text();

            const chartDataSetup = [
                ['Date', 'Points']
            ];
             const lines = csvText.split('\n').filter(line => line.trim() !== '');   //same method used for other player ranking displays

             for (let i=1;i<lines.length;i++){
                const columns = lines[i].split(',').map(col => col.trim());
                const date = columns[2];
                const points = parseInt(columns[5], 10);
                chartDataSetup.push([date, points]);
            }

            const data = google.visualization.arrayToDataTable(chartDataSetup);

            const firstDate = chartDataSetup[1][0];
            const lastDate = chartDataSetup[chartDataSetup.length-1][0];

            const options = {
                title: 'Player Progression',
                hAxis: {title: 'Date', ticks: [firstDate, lastDate]},
                vAxis: {title: 'Points'},
            };

            const chartSection = document.getElementById('graph');
            const graph = new google.visualization.LineChart(chartSection);

            graph.draw(data, options);
        } catch (error){
            console.log("ERROR DRAWING CHART: ", error);
        }

    }   
    
}
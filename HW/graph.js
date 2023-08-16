const ctx=$("#gp")[0];

const day=["5월","6월","7월","8월","9월"];

const clove = [34,56,86,43,12]; 
const plove = [11,24,95,35,23]; 
const nlove =[8,43,100,100,100]; 
const hlove =[0,5,70,89,94,14];//선

const chartData = {
    labels: day,
    datasets: [
        {
            label: "hlove",
            data: hlove,
            borderColor: "orange",
            backgroundColor:"orange",
            tension: 0.2,
            pointStyle: "circle",
            type: "line", 
        },
        {
            label: "clove",
            data: clove,
            backgroundColor: "black",
            
        },
        {
            label: "plove",
            backgroundColor: "pink",
            data: plove,
            
        },
        {
            label: "nlove",
            backgroundColor: "purple",
            data: nlove,
            
        },
       
    ],
};

const chartOptions = {
    scales: {
        y: {
            min:0,
            max:120
        },

    },
};

new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: chartOptions,
});
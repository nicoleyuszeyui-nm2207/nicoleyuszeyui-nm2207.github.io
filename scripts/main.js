//var backgroundColorList = [];
function dataopen1(){//creating a function for my linechart
    const labelYear = ["1896","1900","1904","1906","1908","1912","1920","1924","1928","1932","1936"]
    const dataObj1 = {
            labels:labelYear, //x-axis labels
            datasets: [
                {
                    label: "Number of Countries",
                    data:[12,31,15,21,22,29,29,45,46,47,49],//y-axis data that corresponds to each point 
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"blue",
                    pointBackgroundColor: ['blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','red'], //the point that corresponds to data from 1936 is colored differently
                    borderColor: "blue",
                    pointRadius: [3,3,3,3,3,3,3,3,3,3,6] //the point that corresponds to data from 1936 is larger   
    
             }
            ]
    }

var chart1 = new Chart ("line-chart",//creating the line chart
{
type: "line",
data: dataObj1,
options: { 
    maintainAspectRatio: true,
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: true
    },
    title: {
        display: true,
        text: ['Number of countries that participated from 1896 to 1936'],
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: "Crimson",
    },
    scales: {
        xAxes:[{
          color: "black",
          scaleLabel:{
              display: true,
              labelString: 'Year',
              fontFamily: "TrebuchetMS",
              fontSize:12,
              fontColor: 'crimson'
          }
        }],
        yAxes:[{
          color: "black",
          ticks: {
              beginAtZero: true,
              autoSkip: false
      },
          scaleLabel:{
              display: true,
              labelString: 'Number of countries',
              fontFamily: "TrebuchetMS",
              fontSize:12,
              fontColor: 'crimson'
          }   
        }]
    
}

}});

}


function dataopen3(){//creating a function for my stacked bar graph
    clearCanvas();
const labelAthletes = ["Jesse Owens","Ralph Metcalfe","Godfrey Brown","Volmari Iso-Hollo","Gerhard Stock","Naoto Tajima","Tinus Osendarp"]
    const dataObj3 = {
            labels:labelAthletes,//x-axis labels
            datasets: [
                {
                    label: "Gold medals", //first level of stacked bar graph colored gold
                    data:[4,1,1,1,1,1,0], //number of gold medals for each athlete
                    backgroundColor:"gold"
             },
                {
                    label: "Silver medals",//second level of stacked bar graph colored silver
                    data:[0,1,1,0,0,0,0],//number of silver medals for each athlete
                    backgroundColor:"silver"
            },
                {
                    label: "Bronze medals",//third level of stacked bar graph colored bronze
                    data:[0,0,0,1,1,1,2],//number of bronze medals for each athlete
                    backgroundColor:"brown"
            }

            ]
    }

var chart3 = new Chart ("bar-chart",//creating the stacked bar graph
{
type: 'bar',
data: dataObj3,
options:{
    chartAreaBorder: {
        borderColor: 'black'
        },
    responsive: true,
    scales: {
      xAxes:[ {
        stacked: true,
        color: "black",
        scaleLabel:{
            display: true,
            labelString: 'Name of Athlete',
            fontFamily: "TrebuchetMS",
            fontSize:12,
            fontColor: 'crimson'
        }
      }],
      yAxes:[{
        stacked: true,
        color: "black",
        ticks: {
            stepSize: 1, //y-axis step size is changed to 1 so that no decimals are displayed
            beginAtZero: true,
            autoSkip: false
    },
        scaleLabel:{
            display: true,
            labelString: 'Medals',
            fontFamily: "TrebuchetMS",
            fontSize:12,
            fontColor: 'crimson'
        }
      
      }]
    },
  title: {
    display: true,
    text: ['Top 7 most decorated athletes in 1936 (Athletics)'],
    fontFamily: "TrebuchetMS",
    fontSize: 24,
    fontColor: 'crimson'
    }
}  
});
};

function dataopen4(){//creating a function for my line graph
    clearCanvas(); //calling the clearCanvas function
    clearCanvas1(); //calling the clearCanvas1 function
    const labelYear = ["1992","1996","2000","2004","2008","2012","2016"]
    const dataObj4 = {
            labels:labelYear,//x-axis labels
            datasets: [
                {
                    label: "Spain",
                    data:[4.030373832,3.855140187,2.453271028,1.752336449,4.088785047,3.679906542,2.628504673],//y-axis values corresponding to each point of data relating to Spain
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"green",
                    pointBackgroundColor: ['red', 'green', 'green','green','green','green','green'],//different point color used for the data point of the year Spain was host country
                    borderColor: "green",
                    pointRadius: [10,3,3,3,3,3,3]//larger point size used for the data point of the year Spain was host country 
    
             }, 
                {
                    label: "USA",
                    data:[13.08411215,15.12850467,14.13551402,15.36214953,18.51635514,14.48598131,15.42056075],//y-axis values corresponding to each point of data relating to USA
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"purple",
                    pointBackgroundColor: ['purple', 'red','purple','purple','purple','purple','purple'],//different point color used for the data point of the year USA was host country
                    borderColor: "purple",
                    pointRadius: [3,10,3,3,3,3,3] //larger point size used for the data point of the year USA was host country     

             },
                {
                    label: "Australia",
                    data:[3.329439252,7.710280374,10.68925234,9.170560748,8.703271028,6.658878505,4.789719626],//y-axis values corresponding to each point of data relating to Australia
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"darkorange",
                    pointBackgroundColor: ['darkorange','darkorange','red','darkorange','darkorange','darkorange','darkorange'],//different point color used for the data point of the year Australia was host country
                    borderColor: "darkorange",
                    pointRadius: [3,3,10,3,3,3,3]//larger point size used for the data point of the year Australia was host country     

            },
                {
                    label: "Greece",
                    data:[0.11682243,0.46728972,1.051401869,1.810747664,0.408878505,0.175233645,0.408878505],//y-axis values corresponding to each point of data relating to Greece
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"brown",
                    pointBackgroundColor: ['brown','brown','brown','red','brown','brown','brown'],//different point color used for the data point of the year Greece was host country
                    borderColor: "brown",
                    pointRadius: [3,3,3,10,3,3,3]//larger point size used for the data point of the year Greece was host country     

            },
                {
                    label: "China",
                    data:[4.789719626,5.754614549,3.942115768,4.697651174,9.095402867,6.439979392,5.585763717],//y-axis values corresponding to each point of data relating to China
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"blue",
                    pointBackgroundColor: ['blue', 'blue', 'blue', 'blue', 'red', 'blue', 'blue'],//different point color used for the data point of the year China was host country
                    borderColor: "blue",
                    pointRadius: [3,3,3,3,10,3,3]//larger point size used for the data point of the year China was host country     
        
            },
                {
                    label: "Great Britain",
                    data:[2.920560748,1.518691589,3.154205607,3.329439252,4.731308411,7.359813084,8.469626168],//y-axis values corresponding to each point of data relating to Great Britain
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"turquoise",
                    pointBackgroundColor: ['turquoise', 'turquoise','turquoise','turquoise','turquoise','red','turquoise'],//different point color used for the data point of the year Great Britain was host country
                    borderColor: "turquoise",
                    pointRadius: [3,3,3,3,3,10,3]//larger point size used for the data point of the year Great Britain was host country     
        
            },
                {
                    label: "Brazil",
                    data:[0.817757009,3.679906542,2.803738318,2.336448598,4.556074766,3.446261682,2.920560748],//y-axis values corresponding to each point of data relating to Brazil
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"fuchsia",
                    pointBackgroundColor: ['fuchsia', 'fuchsia','fuchsia','fuchsia','fuchsia','fuchsia','red'],//different point color used for the data point of the year Brazil was host country
                    borderColor: "fuchsia",
                    pointRadius: [3,3,3,3,3,3,10]//larger point size used for the data point of the year Brazil was host country     
        
            }

            ]
        
}
var chart2 = new Chart ("line-chart",//creating the line chart
{
type: "line",
data: dataObj4,
options: { 
    maintainAspectRatio: true,
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: true
    },
    title: {
        display: true,
        text: ['% of medals won by host country from 1992-2016'],
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: 'crimson',
    }   
    
    
}

});

};

function dataopen2(){//creating a function for my bargraph
    clearCanvas(); //calling the clearCanvas function
    clearCanvas1(); //calling the clearCanvas1 function
    const labelYear = ["1956 Melbourne","1964 Tokyo","1976 Montreal","1980 Moscow","1984 Los Angeles","1988 Seoul"]
    const dataObj4 = {
            labels:labelYear,//x-axis labels
            datasets: [
                {
                    label: "Number of countries that did not attend the Olympics (1956-1988)",
                    data:[8,3,34,66,18,7],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"#1d7874",
                    pointBackgroundColor: ['#1d7874','#1d7874','#1d7874','#1d7874','#1d7874','#1d7874'],
                    borderColor: "fuchsia",
                    pointRadius: [5,5,5,5,5,5]
        
            }

            ]
        
}
var chart4 = new Chart ("bar-graph",//creating the bargraph
{
type: "bar",
data: dataObj4,
options: { 
    maintainAspectRatio: true,
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: true
    },
    title: {
        display: true,
        text: ["Number of boycotts/non-attendance in Olympic history (1956-1988)"],
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: 'crimson',
    },
    scales: {
        yAxes: [{
            ticks: {
                display: true
            }
        }]
    }
    
    
}

});

};


function opendata0(evt,Datanum) {//this function displays the texts in the data story
    clearCanvas();//clearCanvas function is called
    clearCanvas1();//clearCanvas1 function is called
    clearCanvas2();//clearCanvas2 function is called
    var i, tabcontent, tablinks;//variables are declared here
  
    tabcontent = document.getElementsByClassName("tabcontent1");//all elements with class="tabcontent1" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent2");//all elements with class="tabcontent2" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent4");//all elements with class="tabcontent4" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent5");//all elements with class="tabcontent5" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tablinks = document.getElementsByClassName("tablinks"); //all elements with class = "tablinks" are taken
    for (i = 0; i < tablinks.length; i++) {//for lopp lopps through all elements in this class
      tablinks[i].className = tablinks[i].className.replace(" active", "");//all elements with class ="tablinks" are hidden by removing the "active" class
    }

    document.getElementById(Datanum).style.display = "block";   // set style.display property of the element with the ID specified by the "Datanum" parameter to "block"
    evt.currentTarget.className += " active";// adds the "active" class to the button that was clicked to open the tab 
  };

function opendata1(evt,Datanum) {//this function displays the texts in the data story
    clearCanvas();//clearCanvas function is called
    clearCanvas2();//clearCanvas2 function is called
    var i, tabcontent, tablinks;//variables are declared here
  
    tabcontent = document.getElementsByClassName("tabcontent0");//all elements with class="tabcontent0" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent2");//all elements with class="tabcontent2" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent4");//all elements with class="tabcontent4" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent5");//all elements with class="tabcontent5" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
  
    tablinks = document.getElementsByClassName("tablinks"); //all elements with class = "tablinks" are taken
    for (i = 0; i < tablinks.length; i++) {//for lopp lopps through all elements in this class
      tablinks[i].className = tablinks[i].className.replace(" active", "");//all elements with class ="tablinks" are hidden by removing the "active" class
    }

    document.getElementById(Datanum).style.display = "block";   // set style.display property of the element with the ID specified by the "Datanum" parameter to "block"
    evt.currentTarget.className += " active";// adds the "active" class to the button that was clicked to open the tab 
  };

  function opendata2(evt,Datanum) {//this function displays the texts in the data story
    clearCanvas();//clearCanvas function is called
    clearCanvas2();//clearCanvas2 function is called
    var i, tabcontent, tablinks;//variables are declared here
  
    tabcontent = document.getElementsByClassName("tabcontent0");//all elements with class="tabcontent0" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent1");//all elements with class="tabcontent1" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent4");//all elements with class="tabcontent4" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent5");//all elements with class="tabcontent5" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
  
    tablinks = document.getElementsByClassName("tablinks"); //all elements with class = "tablinks" are taken
    for (i = 0; i < tablinks.length; i++) {//for lopp lopps through all elements in this class
      tablinks[i].className = tablinks[i].className.replace(" active", "");//all elements with class ="tablinks" are hidden by removing the "active" class
    }

    document.getElementById(Datanum).style.display = "block";   // set style.display property of the element with the ID specified by the "Datanum" parameter to "block"
    evt.currentTarget.className += " active";// adds the "active" class to the button that was clicked to open the tab 
  };


function opendata4(evt,Datanum) {//this function displays the texts in the data story
    clearCanvas();//clearCanvas function is called
    clearCanvas2();//clearCanvas2 function is called
    var i, tabcontent, tablinks;//variables are declared here
    tabcontent = document.getElementsByClassName("tabcontent0");//all elements with class="tabcontent0" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    
    tabcontent = document.getElementsByClassName("tabcontent1");//all elements with class="tabcontent1" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent2");//all elements with class="tabcontent2" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent5");//all elements with class="tabcontent5" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
  
    tablinks = document.getElementsByClassName("tablinks"); //all elements with class = "tablinks" are taken
    for (i = 0; i < tablinks.length; i++) {//for lopp lopps through all elements in this class
      tablinks[i].className = tablinks[i].className.replace(" active", "");//all elements with class ="tablinks" are hidden by removing the "active" class
    }

    document.getElementById(Datanum).style.display = "block";   // set style.display property of the element with the ID specified by the "Datanum" parameter to "block"
    evt.currentTarget.className += " active";// adds the "active" class to the button that was clicked to open the tab 
  };

  function opendata5(evt,Datanum) {//this function displays the texts in the data story
    clearCanvas();//clearCanvas function is called
    clearCanvas1();//clearCanvas2 function is called
    var i, tabcontent, tablinks;//variables are declared here
    tabcontent = document.getElementsByClassName("tabcontent0");//all elements with class="tabcontent0" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    
    tabcontent = document.getElementsByClassName("tabcontent1");//all elements with class="tabcontent1" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent4");//all elements with class="tabcontent4" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
    tabcontent = document.getElementsByClassName("tabcontent2");//all elements with class="tabcontent2" are taken
    for (i = 0; i < tabcontent.length; i++) {//for loop loops through all the elements in this class
      tabcontent[i].style.display = "none";//all elements with class ="tabcontent" are hidden
    }
  
    tablinks = document.getElementsByClassName("tablinks"); //all elements with class = "tablinks" are taken
    for (i = 0; i < tablinks.length; i++) {//for lopp lopps through all elements in this class
      tablinks[i].className = tablinks[i].className.replace(" active", "");//all elements with class ="tablinks" are hidden by removing the "active" class
    }

    document.getElementById(Datanum).style.display = "block";   // set style.display property of the element with the ID specified by the "Datanum" parameter to "block"
    evt.currentTarget.className += " active";// adds the "active" class to the button that was clicked to open the tab 
  };

  function clearCanvas() {//function created to clear the content of the HTML canvas element with the ID "line-chart"
    var canvas = document.getElementById("line-chart");// variable with the name canvas is initialized to be the canvas element with ID "line-chart"
    var context = canvas.getContext("2d");//variable with the name context is initialized to be the 2D rendering context of the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);//clear the entire canvas by setting its top-left corner to (0,0) and its width and height to the canvas's width and height
}

  function clearCanvas1() {//function created to clear the content of the HTML canvas element with the ID "bar-chart"
    var canvas = document.getElementById("bar-chart");// variable with the name canvas is initialized to be the canvas element with ID "bar-chart"
    var context = canvas.getContext("2d");//variable with the name context is initialized to be the 2D rendering context of the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);//clear the entire canvas by setting its top-left corner to (0,0) and its width and height to the canvas's width and height
  };

  function clearCanvas2() {//function created to clear the content of the HTML canvas element with the ID "timeline"
    var canvas = document.getElementById("timeline");// variable with the name canvas is initialized to be the canvas element with ID "timeline"
    var context = canvas.getContext("2d");//variable with the name context is initialized to be the 2D rendering context of the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);//clear the entire canvas by setting its top-left corner to (0,0) and its width and height to the canvas's width and height
  };
    const tab1 = document.getElementById('defaultOpen');//initialize a variable tab 1 to be the element with ID "defaultOpen"
    const tab2 = document.getElementById('tab2');//initialize a variable tab 1 to be the element with ID "tab2"
    const tab3 = document.getElementById('tab3');//initialize a variable tab 1 to be the element with ID "tab3"

    tab1.addEventListener("click", clearCanvas);//once the tab is clicked, the clearVanvas function is called
    tab2.addEventListener("click", clearCanvas);//once the tab is clicked, the clearVanvas function is called
    tab3.addEventListener("click", clearCanvas);//once the tab is clicked, the clearVanvas function is called

  document.getElementById("defaultOpen").click(); //using the party.js to create some confetti when button is clicked
  party.confetti(runButton, {
	count: party.variation.range(400, 500),
    size: party.variation.range(3,4),
    spread: party.variation.range(400),
    shapes: ["star"]
});
  document.querySelector(".button").addEventListener("click", function (e) {
    party.confetti(this);
});






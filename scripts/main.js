//var backgroundColorList = [];
function dataopen1(){
    clearCanvas();
    const labelYear = ["1992","1996","2000","2004","2008","2012","2016"]
    const dataObj = {
            labels:labelYear,
            datasets: [
                {
                    label: "Spain",
                    data:[4.030373832,3.855140187,2.453271028,1.752336449,4.088785047,3.679906542,2.628504673],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"green",
                    pointBackgroundColor: ['red', 'green', 'green','green','green','green','green'],
                    borderColor: "green",
                    pointRadius: [10,3,3,3,3,3,3]    
    
             }, 
                {
                    label: "USA",
                    data:[13.08411215,15.12850467,14.13551402,15.36214953,18.51635514,14.48598131,15.42056075],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"purple",
                    pointBackgroundColor: ['purple', 'red','purple','purple','purple','purple','purple'],
                    borderColor: "purple",
                    pointRadius: [3,10,3,3,3,3,3]    

             },
                {
                    label: "Australia",
                    data:[3.329439252,7.710280374,10.68925234,9.170560748,8.703271028,6.658878505,4.789719626],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"darkorange",
                    pointBackgroundColor: ['darkorange','darkorange','red','darkorange','darkorange','darkorange','darkorange'],
                    borderColor: "darkorange",
                    pointRadius: [3,3,10,3,3,3,3]    

            },
                {
                    label: "Greece",
                    data:[0.11682243,0.46728972,1.051401869,1.810747664,0.408878505,0.175233645,0.408878505],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"brown",
                    pointBackgroundColor: ['brown','brown','brown','red','brown','brown','brown'],
                    borderColor: "brown",
                    pointRadius: [3,3,3,10,3,3,3]    

            },
                {
                    label: "China",
                    data:[4.789719626,5.754614549,3.942115768,4.697651174,9.095402867,6.439979392,5.585763717],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"blue",
                    pointBackgroundColor: ['blue', 'blue', 'blue', 'blue', 'red', 'blue', 'blue'],
                    borderColor: "blue",
                    pointRadius: [3,3,3,3,10,3,3]    
        
            },
                {
                    label: "Great Britain",
                    data:[2.920560748,1.518691589,3.154205607,3.329439252,4.731308411,7.359813084,8.469626168],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"turquoise",
                    pointBackgroundColor: ['turquoise', 'turquoise','turquoise','turquoise','turquoise','red','turquoise'],
                    borderColor: "turquoise",
                    pointRadius: [3,3,3,3,3,10,3]    
        
            },
                {
                    label: "Great Britain",
                    data:[0.817757009,3.679906542,2.803738318,2.336448598,4.556074766,3.446261682,2.920560748],
                    fill: false,
                    borderWidth: 2,
                    backgroundColor:"fuchsia",
                    pointBackgroundColor: ['fuchsia', 'fuchsia','fuchsia','fuchsia','fuchsia','fuchsia','red'],
                    borderColor: "fuchsia",
                    pointRadius: [3,3,3,3,3,3,10]    
        
            }

            ]
        
}
  
var chart1 = new Chart ("line-chart",
{
type: "line",
data: dataObj,
options: { 
    maintainAspectRatio: false,
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
        fontColor: 'rgb(0,120,0)',
    }   
    
}

});

}
// for (i = 0; i < chart1.data.datasets[0].data.length; i++) {
//     if(chart1.data.datasets[0].data[i]>6) {
//         backgroundColorList.push("red");
//         console.log("1");
//     }
//     else {
//         backgroundColorList.push("blue");
//         console.log("2");
//     }
// }
// console.log(backgroundColorList);
// //chart1.update();
// //changeDataPointColor(chart1 ,1, "blue");

function open(evt,Datanum) {
    clearCanvas();
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Datanum).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function clearCanvas() {
    var canvas = document.getElementById("line-chart");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }










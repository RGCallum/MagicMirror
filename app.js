const quotes = [
    {
      "quote": "Looking Good Today",
      "source": "Anonymous"
    },
    {
        "quote": "Beauty is not in the face; beauty is a light in the heart.",
        "source": "Kahlil Gibran"
      },
    {
      "quote": "If you don't smell good, then you don't look good.",
      "source": "Katy Elizabeth"
    },
    {
      "quote": "Because of your smile, you make life more beautiful.",
      "source": "TN Hanh"

    },
    {
        "quote": "Your happy ending may not be what you expect, but that is what will make it so special.",
        "source": "Snow White"
      },
  ]
  
  function randomQuote(){
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = `"${random.quote}"`;
    source.innerText = random.source;
  }
  setInterval(randomQuote, 1000);

//   setInterval(randomQuote, 10000);



//create function and set variables for time
// function displayTime() {
//     var date = new Date();
//     var y = date.getFullYear();
//     var o = date.getMonth()+ 1;
//     var d = date.getDate();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();
//     var tod = "AM";
//     // var n = date.toString();
//     var month=new Array();
//     month[0]="January";
//     month[1]="Feb";
//     month[2]="Mar";
//     month[3]="Apr";
//     month[4]="May";
//     month[5]="Jun";
//     month[6]="Jul";
//     month[7]="Aug";
//     month[8]="Sep";
//     month[9]="Oct";
//     month[10]="Nov";
//     month[11]="Dec";

    
// // create statements and conditions for returning time
// if (h == 0){
//     h = 12;
// }
// if (h > 12){
//     h = h - 12;
//     tod = "PM";
// }

// if (h< 10){
//     h = "0" + h;
// }

// if (m < 10){
//     m = "0" + m;
// }
// if (s < 10){
//     s = "0" + s;
// }


// // create statements and conditions for the alarm 
// // if (h == 08 && m == 07 && s == 00 && tod == "PM"){
// //     var snd = new Audio("Wake Up Audio2.mp3");
// //         snd.play();
// //         setTimeout(function(){alert("Wake Up, and get ready to WORK WORK WORK!")},22000);

// // }
// //create how to display time
//     var time = h + " :" + m + " :" + s + " " + tod;
//     document.getElementById("clock").innerHTML = time;
   
//     var time =  month[date.getMonth()] + " " + d + ", " + y;
//     document.getElementById("clockDate").innerHTML = time;
  

// }

// //function to display time including seconds
// displayTime();
// setInterval(displayTime, 1000);



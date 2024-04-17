/*
var names = ["Sandun", "Kasuni"];

for (var number = 0; number < names.length; number++){
    for( var i = 0; i < names[number].length; i++){
        console.log(names[number][i]);
    }
    console.log('-------');
}
*/

var months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];


for (var i = 0; i < months.length; i++){
    document.writeln(months[i] + "<br>");
}

document.writeln("<br>");

months.forEach (m =>{
    document.writeln(m);
})
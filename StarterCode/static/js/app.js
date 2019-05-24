// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select('tbody');
console.log(tableData);

tableData.forEach(function(ufoSight) {
    console.log(ufoSight);
    var row=tbody.append('tr');
    Object.entries(ufoSight).forEach(function([key,value]) {
        console.log(key,value);
        var cell=row.append('td');
        cell.text(value);
    })
});

var submit=d3.select('#filter-btn');
submit.on('click',function() {
    d3.event.preventDefault();
    var input=d3.select('#datetime');
    var inpvalue=input.property('value');
    var filtered=tableData.filter(tableData => tableData.datetime === inpvalue 
        || tableData.city === inpvalue 
        || tableData.state === inpvalue 
        || tableData.country === inpvalue 
        || tableData.shape === inpvalue 
        || tableData.durationMinutes === inpvalue 
        || tableData.comments === inpvalue);
// YAYAY! but now it's case sensitive.... ): and they have to know state initials
// I would now have the input be able to understand entire state entries 
    console.log(filtered);
    // if inpvalue = ``
        
    tbody.html(function() {
        return ``;
    });
    filtered.forEach(function(ufoSight) {
        var row=tbody.append('tr');
        Object.entries(ufoSight).forEach(function([key,value]) {
            var cell=row.append('td')
            cell.text(value);
        })
    })
});

// THANK YOU JASVIR!!!! yaaaayyyyy

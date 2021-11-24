// import the data from data.js
const tableData = data;
console.log(data);
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }



  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#year").property("value");
    console.log(date);

    // function add_img(date){
    //   var img=document.createElement('img');
    //   img.src='../maps/';
    //   console.log(img.src);
    //   document.getElementById('body').appendChild(img);
    //}



    let filteredData = tableData;
    console.log(filteredData);

    if (date) {

      console.log('inside if');
      filteredData = filteredData.filter(row => row.year == date);
      console.log(filteredData);

    }
    // str = filteredData+'.png';
    // console.log(str);
    
    buildTable(filteredData);
   
    //map(filteredData);
  }
  
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);



// function map(){
// console.log (filteredData);
// let rename= data_new+'.png';
// console.log(rename);
// let image_path='../maps/'+rename;
// console.log(image_path);
//let img= d3.select('img').image_path; 
//}






// function handleClick() {
//   // Grab the datetime value from the filter
//   let date = d3.select("#year").property("value");
//   console.log(date);
//   let filteredData = tableData;
//   console.log(filteredData);
//    // Check to see if a date was entered and filter the
//   // data using that date.
//   if (date) {
//     // Apply `filter` to the table data to only keep the
//     // rows where the `datetime` value matches the filter value
//     console.log('inside if');
//     filteredData = filteredData.filter(row => row.year == date);
//   console.log(filteredData);
//   }

//    // Rebuild the table using the filtered data
//   // @NOTE: If no date was entered, then filteredData will
//   // just be the original tableData.
//   buildTable(filteredData);
// }




// // Attach an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);

// // Build the table when the page loads
// buildTable(tableData);





//  // 1. Create a variable to keep track of all the filters as an object.
// var filters={};

// // 3. Use this function to update the filters. 
// function updateFilters() {

//     // 4a. Save the element that was changed as a variable. With d3.select, the first element that matches the selector string is selected
//     let changedElement = d3.select(this);
  
//     // 4b. Save the value that was changed as a variable.
//     let elementValue = changedElement.property('value');
//     console.log(elementValue);
//     // 4c. Save the id of the filter that was changed as a variable.
//     let filterID= changedElement.attr('id');
//     console.log(filterID);

  
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.
//     if (elementValue) { filters[filterID]= elementValue; }
//     else{  
//       delete filters[filterID]
//     }
  
//     // 6. Call function to apply all filters and rebuild the table 
//     filterTable();
  
//   }
  
//   // 7. Use this function to filter the table when data is entered.
//   function filterTable() {
  
//     // 8. Set the filtered data to the tableData.
//     let filterData=tableData;
  
//     // 9. Loop through all of the filters and keep any data that
//     // matches the filter values
//     Object.entries(filters).forEach(([key, value]) =>{
//       filterData=filterData.filter(row=> row[key]=== value);
//     });
  
//     // 10. Finally, rebuild the table using the filtered data
//     buildTable(filterData);
//   }
  

//   // 2. Attach an event to listen for changes to each filter
//   d3.selectAll("input").on("change",updateFilters);
  
  
//   // Build the table when the page loads
//   buildTable(tableData); 
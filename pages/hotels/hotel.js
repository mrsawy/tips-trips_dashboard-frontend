// let filteredItemsGlobal = [];

// function filterTable() {
//     let filteredItems = [];
//   var input = document.getElementById("filterInput");
//   var filter = input.value.toUpperCase();

//   var table = document.getElementById("hotelTable");
//   var rows = table.getElementsByTagName("tr");
//   for (var i = 1; i < rows.length; i++) {
//     var searchableColumns = rows[i].getElementsByClassName(`searchable`);
//     if ([...searchableColumns][0].textContent) {
//       const hotelName = [...searchableColumns][0].textContent;
//       const hotelCity = [...searchableColumns][1].textContent;
//       var regex = new RegExp(filter, "i");
//       if (regex.test(hotelName) || regex.test(hotelCity)) {
//         rows[i].style.display = "";
//         filteredItems.push(rows[i]);
//       } else {
//         rows[i].style.display = "none";
//         filteredItems.pop(rows[i]);

//     }
//     }
//   }
//   filteredItemsGlobal = filteredItems ;
//   displaySpecificItems(filteredItems);
// }
// /////////////////////////////////////////////

// ////////////////////////pagination //////////

// var items = document.querySelectorAll("#hotelTable tbody tr");
// var totalNumberOfHotels = items.length;
// var itemsPerPage = 3;
// var currentPage = 1;

// function displayItems() {
//   var startIndex = (currentPage - 1) * itemsPerPage;
//   var endIndex = startIndex + itemsPerPage;
//   for (var i = 0; i < items.length; i++) {
//     if (i >= startIndex && i < endIndex) {
//       items[i].style.display = "";
//     } else {
//       items[i].style.display = "none";
//     }
//   }
// }
// /////////////////
// function displaySpecificItems(items) {
//   var totalPages = Math.ceil(items.length / itemsPerPage);
//   var startIndex = (currentPage - 1) * itemsPerPage;
//   var endIndex = startIndex + itemsPerPage;
//   for (var i = 0; i < items.length; i++) {
//     if (i >= startIndex && i < endIndex) {
//       items[i].style.display = "";
//     } else {
//       items[i].style.display = "none";
//     }
//   }

//   generatePaginationButtons(totalPages, true, items);
// }
// /////////////////

// var totalPages = Math.ceil(totalNumberOfHotels / itemsPerPage);

// function generatePaginationButtons(totalPages, filtered, items) {
//   var paginationContainer = document.getElementById("paginationContainer");
//   paginationContainer.innerHTML = ""; // Clear previous buttons

//   // Generate pagination buttons
//   for (var i = 1; i <= totalPages; i++) {
//     var button = document.createElement("button");
//     button.innerText = i;
//     button.addEventListener("click", function () {
//       let buttons = document.querySelectorAll(".paginationContainer button");
//       buttons.forEach(function (btn) {
//         btn.classList.remove("active");
//       });

//       console.log(this.classList);
//       this.classList.add("active");
//       currentPage = parseInt(this.innerText);
//       if (!filtered) {
//         displayItems();
//       } else {
//         displaySpecificItems(items);
//       }
//     });
//     paginationContainer.appendChild(button);
//   }
//   let buttons = document.querySelectorAll(".paginationContainer button");

//   if(filteredItemsGlobal.length==0){
//       [...buttons][0].classList.add(`active`);
//     }

//   //  console.log(buttons)
// }
// displayItems();
// generatePaginationButtons(totalPages);

// ///////////

// ///////////////////////////////////////////

// // Get a reference to the select element
// var selectElement = document.getElementById("FormControlSelect1");

// // Add an event listener to the select element
// selectElement.addEventListener("change", function() {
//   var selectedValue = this.value; // Get the selected value

//   console.log(selectedValue);

//   console.log(filteredItemsGlobal);
//   // Call a function to filter the table data based on the selected value
// //   filterTableData(selectedValue);
// });

$(document).ready(function () {
  var dataTable = $("#hotelTable").DataTable();

  var selectElement = document.getElementById("FormControlSelect1");
  if (selectElement) {
    selectElement.addEventListener("change", function () {
      var selectedValue = this.value;
      dataTable.search(selectedValue).draw();
    });
  }
  $("#formGroupContainer").on("click", ".addCityButton", function (event) {
    console.log(event);
    var newFormGroup =
      '<div class="form-group row">' +
      '<div class="d-flex flex-row col-md-10">' +
      '<input type="text" class="form-control mr-4" placeholder="City">' +
      '<button class="text-center text-success border border-success rounded-lg btn btnHoverGreen" >' +
      "<span>+</span>" +
      "</button>" +
      "</div>" +
      "</div>";
    $(newFormGroup).insertAfter(".form-group:last");
  });

  const button = document.getElementById(`addCityByDifferentLanguage`);

  button.addEventListener("click", function (e) {
    // console.log(e);
  });

  $("#addCityByDifferentLanguage").one("click", function(event) {
    var newFormGroup =
      '<label for="exampleInputEmail3">city <span class="text-muted small">(arabic)</span></label>' +
      '<div class="form-group row">' +
      '<div class="d-flex flex-row col-md-10">' +
      '<input type="text" class="form-control mr-4" placeholder="arabic City">' +
      "</div>" +
      "</div>";
    $(newFormGroup).insertAfter(".form-group.city-english");
  });




  $('#addNameDifferentLanguage').one("click", function(event) {
    var newFormGroup =
    '<label for="exampleInputEmail3">Name <span class="text-muted small">(arabic)</span></label>'+
      '<div class="form-group row">' +
      '<div class="d-flex flex-row col-md-10">' +
      '<input type="text" class="form-control mr-4" placeholder="arabic name">' +
      "</div>" +
      "</div>";
    $(newFormGroup).insertAfter(".form-group.name-english");
    newFormGroup=``

  })










});

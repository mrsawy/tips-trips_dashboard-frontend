

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





///////////////////////////////////////////////////////////////////



function confirmDelete() {
    var result = confirm("Are you sure you want to delete this item?");
    if (result) {
      // User clicked "OK" - proceed with the deletion
      deleteItem();
    } else {
      // User clicked "Cancel" - do nothing
    }
  }

  function deleteItem() {
    // Code to delete the item goes here
    alert("Item deleted successfully!");
  }


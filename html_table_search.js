$(document).ready(function() {
  $(".search-input").on("input", function() {
    var tableId = $(this).data("table-id");
    var inputId = $(this).attr("id");
    filterTable(tableId, inputId);
  });

  function filterTable(tableId, inputId) {
    var input = $("#" + inputId);
    var filter = input.val().toUpperCase();
    var table = $("#" + tableId);
    var tr = table.find("tr");

    tr.each(function() {
      var row = $(this);
      var td = row.find("td");

      td.each(function() {
        var cell = $(this);
        var txtValue = cell.text().toUpperCase();
        if (txtValue.indexOf(filter) > -1) {
          row.show();
          return false;
        } else {
          row.hide();
        }
      });
    });
  }
});

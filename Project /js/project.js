//
// var tip-options function (){
//   if ("Household") {
//     console.log(data);
//
//   } else if ("Transportation") {
//       console.log(data);
//
//   } else if ("Health") {
//       console.log(data);
//
//   } else if ("Food")
//     console.log(data)
//
//
// var button = document.getElementById('submit');
// button.addEventListener('click', function() {
//     inputValue = document.getElementById('enter-tip').value;
//     console.log("You input:", inputValue);

  $("#submit").click(function() {

    if ($("#tip-options").val() == "household") {
      window.location.href = "Household/index.html";
    }

    else if ($("#tip-options").val() == "transportation") {
      window.location.href = "Transportation/index.html";
    }

    else if ($("#tip-options").val() == "health") {
      window.location.href = "Health/index.html";
    }

    else if ($("#tip-options").val() == "food") {
      window.location.href = "Food/index.html";
    }
});

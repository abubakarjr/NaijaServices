document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded

  // Select all input elements within the form
  var inputFields = document.querySelectorAll(".card-scroll input");

  // Function to hide all input fields except #nin
  function hideAllInputs() {
    inputFields.forEach(function (input) {
      // Exclude #nin from being hidden initially
      if (input.id !== "nin") {
        input.style.display = "none";
      }
    });
  }

  // Initially hide all input fields except #nin
  hideAllInputs();

  // Add an event listener to the select dropdown
  var selectService = document.querySelector(".card-scroll select");
  selectService.addEventListener("change", function () {
    // Get the selected value
    var selectedService = selectService.value;

    // Hide all input fields before showing specific ones
    hideAllInputs();

    // Show input fields based on the selected service
    switch (selectedService) {
      case "option1":
        document.getElementById("dob").style.display = "block";
        break;
      case "option2":
        document.getElementById("surname").style.display = "block";
        document.getElementById("middleName").style.display = "block";
        document.getElementById("firstName").style.display = "block";
        break;
      case "option3":
        document.getElementById("phoneNumber").style.display = "block";
        break;
      case "option4":
        document.getElementById("state").style.display = "block";
        document.getElementById("lga").style.display = "block";
        document.getElementById("address").style.display = "block";
        break;
      case "optionAll":
        // Display all input fields
        inputFields.forEach(function (input) {
          input.style.display = "block";
        });
        break;
      // Add cases for other options as needed
      default:
        // Default case: #nin is already visible
        break;
    }
  });
});

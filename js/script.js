function validateForm() {
    var fullName = document.forms["contactUsForm"]["fname"].value;
    var contactEmail = document.forms["contactUsForm"]["email"].value;
    var contactNum = document.forms["contactUsForm"]["pNumber"].value;
    var contactComment = document.forms["contactUsForm"]["comment"].value;
        if (fullName == "") {
              alert("Note: Fill in the Full name section");
              return false;

        } else if (contactEmail == ""){
              alert("Note: Fill in the email section");
              return false;

        } else if (contactNum == ""){
              alert("Note: Fill in the contact number section");
              return false;

        } else if (contactComment == ""){
              alert("Note: Fill in the comment section");
              return false;

        } else{
          return true;
        }
}


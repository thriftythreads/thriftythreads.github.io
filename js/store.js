function small() {
    // Get the checkbox
    var checkBox = document.getElementById("small");
    // Get the output text
    var allProd = document.getElementById("products");
    var smallProd = document.getElementById("productsSmall");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      smallProd.style.display = "block";
      allProd.style.display = "none";
    } else {
      allProd.style.display = "block";
      smallProd.style.display="none";
    }
  }

  function medium() {
    // Get the checkbox
    var checkBox = document.getElementById("medium");
    // Get the output text
    var allProd = document.getElementById("products");
    var mediumProd = document.getElementById("productsMedium");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      mediumProd.style.display = "block";
      allProd.style.display = "none";
    } else {
      allProd.style.display = "block";
      mediumProd.style.display="none";
    }
  }

  function large() {
    // Get the checkbox
    var checkBox = document.getElementById("large");
    // Get the output text
    var allProd = document.getElementById("products");
    var largeProd = document.getElementById("productsLarge");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      largeProd.style.display = "block";
      allProd.style.display = "none";
    } else {
      allProd.style.display = "block";
      largeProd.style.display="none";
    }
  }

  function xlarge() {
    // Get the checkbox
    var checkBox = document.getElementById("xLarge");
    // Get the output text
    var allProd = document.getElementById("products");
    var xlargeProd = document.getElementById("productsXLarge");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      xlargeProd.style.display = "block";
      allProd.style.display = "none";
    } else {
      allProd.style.display = "block";
      xlargeProd.style.display="none";
    }
  }

  function xxlarge() {
    // Get the checkbox
    var checkBox = document.getElementById("xxLarge");
    // Get the output text
    var allProd = document.getElementById("products");
    var xxlargeProd = document.getElementById("productsXXLarge");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      xxlargeProd.style.display = "block";
      allProd.style.display = "none";
    } else {
      allProd.style.display = "block";
      xxlargeProd.style.display="none";
    }
  }

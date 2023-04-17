
// form 1 start

function validateForm() {
    const name = document.getElementById("username").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
  
    
    if (lname === "") {
        alert("Please enter your lname.");
        return false;
      }
    

    if (phone === "") {
      alert("Please enter your phone number.");
      return false;
    } else if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    
    if (email === "") {
        alert("Please enter your email.");
        return false;
      } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

    form1();
    
  }
  



  function isValidEmail(email) {
    // Regex to validate email format.
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function isValidPhone(phone) {
    // Regex to validate phone number format.
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  }

// form 1 end

window.onload = function () {

    document.getElementById("form2").style.display = 'none';
    document.getElementById("form3").style.display = 'none';
};

function form1() {
     $("#form2").show();
    document.getElementById("form1").style.display = 'none';
    document.getElementById("form3").style.display = 'none';
   

}


function form2() {

    $("#form3").show();
    document.getElementById("form1").style.display = 'none';
    document.getElementById("form2").style.display = 'none';

}

function previous1() {
    $("#form1").show();
    document.getElementById("form2").style.display = 'none';
    document.getElementById("form3").style.display = 'none';

}

function previous2() {
    $("#form2").show();
    document.getElementById("form3").style.display = 'none';
    document.getElementById("form1").style.display = 'none';

}
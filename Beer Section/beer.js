function toggle() {
    const pageContent = document.querySelector('.Malibu');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }
  function toggle2() {
    const pageContent = document.querySelector('.Orchid');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }
  function toggle3() {
    const pageContent = document.querySelector('.Granadinee');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }
  function toggle4() {
    const pageContent = document.querySelector('.BlueCura');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle5() {
    const pageContent = document.querySelector('.Malii');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle6() {
    const pageContent = document.querySelector('.Amareto');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle7() {
    const pageContent = document.querySelector('.Coffee');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle8() {
    const pageContent = document.querySelector('.Granadineee');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle9() {
    const pageContent = document.querySelector('.Triple');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle10() {
    const pageContent = document.querySelector('.Curacao');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }function toggle11() {
    const pageContent = document.querySelector('.OrchidCo');
    const isExpanded = pageContent.classList.contains('expand-page');
    pageContent.classList.toggle('expand-page');
    if (isExpanded) {
      pageContent.style.display = "none";
    } else {
      pageContent.style.display = "block";
    }
  }




















  function remove(id) {
    const pageContent = document.querySelector('#' + id);
    pageContent.style.display = "none";
  }


















/*Order*/

/*footer*/
function sendMail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("emailed").value,
    websitename: document.getElementById("websitename").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_apysif4";
  const templateID = "template_j0bp1u9";  

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("emailed").value = "";
      document.getElementById("websitename").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your email was sent successfully!!");
    })
    .catch(err => {
      console.error("Error sending email:", err);
      alert("An error occurred while sending the email. Please try again later.");
    });
}


function sendOrder(firstnameID, lastnameID, emailID, websitenameID, messageID) {
  var params = {
    name: document.getElementById(firstnameID).value,
    address: document.getElementById(lastnameID).value,
    email: document.getElementById(emailID).value,
    number: document.getElementById(websitenameID).value,
    message: document.getElementById(messageID).value,
  };

  const serviceID = "service_apysif4";
  const templateID = "template_8piqffb";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      console.log(res);
      alert("Your order was sent successfully!!");
    })
    .catch(err => {
      console.error("Error sending email:", err);
      alert("An error occurred while sending the email. Please try again later.");
    });
}



function sendOrder2() {
  var params = {
    name: document.getElementById("name").value,
    address: document.getElementById("last").value,
    email: document.getElementById("emaile").value,
    number: document.getElementById("website").value,
    message: document.getElementById("messages").value,
  };

  const serviceID = "service_apysif4";
  const templateID = "template_8piqffb";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("last").value = "";
      document.getElementById("emaile").value = "";
      document.getElementById("website").value = "";
      document.getElementById("messages").value = "";
      console.log(res);
      alert("Your order was sent successfully!!");
    })
    .catch(err => {
      console.error("Error sending email:", err);
      alert("An error occurred while sending the email. Please try again later.");
    });
}

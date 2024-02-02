document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

// script.js

// function sendMessage() {
//   // Get form inputs
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("phone").value;
//   const message = document.getElementById("message").value;

//   // Check if required fields are filled
//   if (name && email && message) {
//       // Prepare the message with context
//       const fullMessage = `
//           Name: ${name}
//           Email: ${email}
//           Phone: ${phone}
          
//           Message:
//           ${message}
//       `;

//       // Use Formspree to send the message
//       const form = document.getElementById("contactForm");
//       form.setAttribute("action", "https://formspree.io/abhitri102001@gmail.com"); // Replace with your Formspree email

//       // You can add additional context or formatting as needed

//       // Submit the form
//       form.submit();

//       // After handling the message, you can reset the form or display a success message
//       resetForm();
//   } else {
//       // If required fields are not filled, you can display an error message
//       alert("Please fill in all required fields (Name, Email, and Message).");
//   }
// }

// function resetForm() {
//   // Add code to reset the form fields if needed
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("phone").value = "";
//   document.getElementById("message").value = "";

//   // You can also add additional logic for resetting other elements or displaying a success message
// }




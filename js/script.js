// ================= DARK MODE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


// ================= CLOSE MENU AFTER CLICK =================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


// ================= CONTACT FORM ALERT =================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully ✅");

  contactForm.reset();

});


// ================= LOGIN BUTTON =================

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

  alert("Login Page Coming Soon 🚀");

});


// ================= SIGNUP BUTTON =================

const signupBtn = document.querySelector(".signup-btn");

signupBtn.addEventListener("click", () => {

  alert("Sign Up Successfully ✅");

});
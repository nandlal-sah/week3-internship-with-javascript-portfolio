## Week 3 JavaScript Internship Project

# Author

**Name:** Nandlal Sah Kanu

**Course:** Computer Science and Engineering (CSE)

**College:** KPR Institute of Engineering and Technology (KPRIET), Tamil Nadu, India

**Project:** Interactive Portfolio Website

**Technologies Used:** HTML5, CSS3, JavaScript (ES6)


# Project Overview

This project is an **Interactive Portfolio Website** developed as part of the **Week 3 JavaScript Internship Assignment**.

The objective of this project is to demonstrate the use of JavaScript to make a static website interactive by implementing dynamic features, client-side validation, DOM manipulation, event handling, reusable functions, and Local Storage.

The website presents personal information, technical skills, hobbies, an interactive image gallery, and a contact form while providing an engaging and responsive user experience.


# Project Objectives

The main objectives of this project are:

* Create a responsive personal portfolio website.
* Apply JavaScript to create interactive web pages.
* Implement client-side form validation.
* Demonstrate DOM Manipulation techniques.
* Handle multiple user events.
* Create reusable JavaScript functions.
* Store user preferences using Local Storage.
* Improve overall user experience with dynamic content.


# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)


# Project Structure

Portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── image1.jpg
    ├── image2.jpg
    └── image3.jpg


# HTML Features

* Semantic HTML structure
* Responsive navigation bar
* About Me section
* Skills section
* Hobbies section
* Image Gallery
* Contact Form
* Footer with social media link


# CSS Features

* Responsive Design
* Modern UI
* Hover Effects
* Smooth Transitions
* Google Fonts
* Box Shadows
* Rounded Corners
* Mobile Responsive Layout
* Dark Mode Styling
* Responsive Image Gallery


#  JavaScript Features

The website includes the following JavaScript functionalities:

###  Contact Form Validation

* Validates Name field
* Validates Email format
* Validates Message length
* Displays error messages
* Displays success message
* Resets form after successful validation


### Real-Time Validation

Validation occurs while the user types.

Fields validated:

* Name
* Email
* Message

This improves user experience by providing immediate feedback.


### Dark Mode Toggle

Users can switch between Light Mode and Dark Mode.

Features:

* Toggle button
* Theme persistence using Local Storage
* Theme automatically restored after page refresh


### Skills Show/Hide

The Skills section can be hidden or displayed dynamically.

Features:

* Button changes text automatically
* No page refresh required
* Uses DOM manipulation


### Interactive Image Slider

The image gallery supports:

* Previous image
* Next image
* Automatic image sliding
* Infinite looping


### Dynamic Greeting

The website displays a greeting based on the current system time.

Examples:

* Good Morning
* Good Afternoon
* Good Evening


# JavaScript Concepts Used

The project demonstrates:

* Variables
* Data Types
* Arrays
* Functions
* Reusable Functions
* Conditional Statements
* Regular Expressions
* DOM Manipulation
* Event Handling
* Form Validation
* Local Storage
* Timers (`setInterval`)
* String Methods


# DOM Manipulation

The following DOM methods are used:

* document.getElementById()
* textContent
* innerHTML
* style.display
* style.color
* style.border
* classList.add()
* classList.remove()
* classList.toggle()

These methods dynamically update the webpage without reloading it.


#  Event Listeners Implemented

The project uses multiple JavaScript event listeners:

* DOMContentLoaded`
* click
* submit
* input
* mouseover
* mouseout

These events make the website interactive and responsive to user actions.


# Code Structure

The JavaScript code is organized into logical sections:

1. DOM Element Selection
2. Reusable Utility Functions
3. Contact Form Validation
4. Event Listeners
5. Dark Mode
6. Skills Toggle
7. Image Slider
8. Greeting Message

This modular structure improves readability, debugging, and future maintenance.


# Logic and Implementation

## Overall Logic

When the webpage loads, JavaScript initializes all required elements, restores the saved theme, displays a greeting based on the current time, initializes the image slider, and registers all event listeners.

Each interactive feature is handled by its own reusable function, making the code organized and easy to maintain.


# Contact Form Validation Logic

The contact form is validated before submission.

### Working Process

1. Read Name, Email, and Message.
2. Remove unnecessary spaces using trim().
3. Check if the Name field is empty.
4. Validate Email using a Regular Expression.
5. Verify that the Message contains at least 10 characters.
6. Display an appropriate error message if validation fails.
7. If validation succeeds:

   * Display a success message.
   * Reset the form.
   * Restore default input styles.

This ensures that only valid information is accepted.


# Real-Time Validation Logic

The project uses the input event to validate data while the user is typing.

Process:

* User enters data.
* JavaScript immediately checks the entered value.
* Invalid input is highlighted.
* Valid input is accepted instantly.

This improves usability and reduces user mistakes.


# Dark Mode Logic

Dark Mode improves accessibility and user comfort.

### Working Process

1. Check Local Storage when the page loads.
2. If the saved value is "dark", apply the Dark Mode CSS class.
3. When the user clicks the Dark Mode button:

   * Toggle the theme.
   * Save the selected theme in Local Storage.
4. Automatically restore the selected theme on the next visit.


# Skills Toggle Logic

The Skills list can be shown or hidden dynamically.

### Working Process

1. User clicks the Skills button.
2. JavaScript checks whether the skills list is currently visible.
3. If visible:

   * Hide the list.
   * Change button text to **Show Skills**.
4. If hidden:

   * Show the list.
   * Change button text to **Hide Skills**.


# Image Slider Logic

The gallery uses an array to manage images.

### Working Process

1. Store image paths inside an array.
2. Keep track of the current image index.
3. Next button increments the index.
4. Previous button decrements the index.
5. When the last image is reached, the slider loops back to the first image.
6. When moving backward from the first image, the slider displays the last image.
7. Images also change automatically after a fixed time interval.


# Greeting Logic

The greeting is generated using JavaScript's Date object.

Rules:

* Before 12:00 → Good Morning
* Between 12:00 PM and 5:59 PM → Good Afternoon
* After 6:00 PM → Good Evening

This demonstrates conditional statements and dynamic content generation.

# Reusable Functions

The project uses reusable functions to improve code quality and reduce duplication.

Examples include:

* showError()
* showSuccess()
* validateName()
* validateEmail()
* validateMessage()
* validateForm()
* toggleDarkMode()
* toggleSkillSection()
* updateSlider()
* nextImage()
* previousImage()
* updateGreeting()

Reusable functions make the code easier to understand, maintain, and extend.

#  Local Storage

Local Storage is used to remember the user's preferred theme.

Possible values:

* dark
* light

This allows the selected theme to remain active even after refreshing or reopening the website.

# Responsive Design

The website is fully responsive.

Tested on:

* Desktop
* Laptop
* Tablet
* Mobile Phone

Responsive features include:

* Flexible layout
* Responsive images
* Mobile-friendly navigation
* Adaptive buttons
* Optimized spacing

# Testing Evidence

## Test Case 1

**Input**

* Empty Name

**Expected Result**

Error message displayed.

**Status**

✅ Passed


## Test Case 2

**Input**

* Invalid Email

**Expected Result**

Email validation error displayed.

**Status**

✅ Passed


## Test Case 3

**Input**

* Message with fewer than 10 characters

**Expected Result**

Message validation error displayed.

**Status**

✅ Passed


## Test Case 4

**Input**

* Valid Name
* Valid Email
* Valid Message

**Expected Result**

Success message displayed and form reset.

**Status**

✅ Passed


## Test Case 5

**Action**

Toggle Dark Mode.

**Expected Result**

Theme changes correctly and remains after page refresh.

**Status**

✅ Passed


## Test Case 6

**Action**

Click Next and Previous buttons.

**Expected Result**

Gallery images change correctly.

**Status**

✅ Passed


## Test Case 7

**Action**

Click Show/Hide Skills button.

**Expected Result**

Skills list is hidden or displayed and button text updates.

**Status**

✅ Passed


# 📸 Visual Documentation

Include the following screenshots in your repository:

screenshots/

Home_Page.png
Dark_Mode.png
Gallery.png
Contact_Form_Validation.png
Mobile_View.png


# How to Run the Project

1. Download or clone the repository.
2. Ensure the following files are present:

   * index.html
   * style.css
   * script.js
   * README.md
   * images/ folder
3. Open index.html in any modern web browser.
4. Interact with the website features.

No additional software or installation is required.


# Future Improvements

* Backend integration for contact form submission
* Email sending functionality
* Resume download option
* Project showcase section
* Smooth scrolling animation
* More gallery images
* Social media icons
* Portfolio filtering
* Contact form database integration


# Learning Outcomes

Through this project, I gained practical experience in:

* Building responsive web pages using HTML and CSS.
* Writing modular JavaScript code.
* DOM Manipulation.
* Event Handling.
* Form Validation.
* Local Storage.
* Dynamic content generation.
* Creating reusable functions.
* Debugging JavaScript using browser developer tools.
* Organizing code into a clean and maintainable structure.


# Acknowledgement

This project was completed as part of the **Week 3 JavaScript Internship Program** to demonstrate practical understanding of JavaScript fundamentals, interactive web development, DOM manipulation, event handling, and client-side validation.

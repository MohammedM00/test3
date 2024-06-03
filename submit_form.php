<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Send email
    $to = "your@example.com"; // Change this to your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // If mail is sent successfully
        echo "<p>Thank you for contacting us, $name! We will get back to you shortly.</p>";
    } else {
        // If there was an error sending the email
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    // If the form is not submitted properly
    echo "<p>Something went wrong. Please try again later.</p>";
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $surname = htmlspecialchars(trim($_POST["surname"]));
    $name = htmlspecialchars(trim($_POST["name"]));
    $adresse = htmlspecialchars(trim($_POST["adresse"]));
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    if (!$email) {
        echo "Invalid email address.";
        exit;
    }

    if (empty($surname) || empty($name) || empty($adresse) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $email);

    $to = "omarbiber.67@gmail.com";
    $subject = "Nouveau message de contact";
    $body = "Surname: $surname\nName: $name\nAdresse: $adresse\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending.";
    }
} else {
    echo "Method not permitted.";
}
?>

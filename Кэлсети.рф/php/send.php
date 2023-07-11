<?php

    header('Refresh:5; URL= /index.html');

    $to = "kash.electric@mail.ru, 89851007467@mail.ru";
    $from = trim($_POST['email']); 


    $name = htmlspecialchars($_POST['name']);
    $name = urldecode($name);
    $name = trim($name);


    $message = htmlspecialchars($_POST['message']);
    $message = urldecode($message);
    $message = trim($message);

    $phone = htmlspecialchars($_POST['phone']);
    $phone = urldecode($phone);
    $phone = trim($phone);

    $headers = "От: $name" . "\r\n" . 
    "Почта: $from" . "\r\n" .
    "Телефон: $phone" . "\r\n" . 
    "X-Mailer: PHP/" . phpversion();

    if(mail("kash.electric@mail.ru, 89851007467@mail.ru", 
	    "Новое письмо с сайта:",
	    "ФИО: ".$name."\r\n ".
	   "Телефон: ".$phone."\r\n".
	    "Email: ".$from."\r\n" .
	    "Причина обращения: ".$message."\r\n")
) {
        echo('Письмо успешно отправленно');
    } else {
        echo('Возможна допущена ошибка, перепроверьте даные');
        
    }  
    
?>
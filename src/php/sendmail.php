<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguages('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  // від кого лист
  $mail->setFrom('from@DTL.com', 'DTL Site mailer');
  $mail->addAddress('doktormc25@gmail.com', 'V M'); 
  $mail->Subject = 'Лист з Сайту DTL';

  // тіло листа
  $body = "<h1>Лист з сайту DTL, форма зворотнього зв'язку</h1>"

  if (trim(!empty($_POST['name'])){
    $body = "<p><strong>Ім'я та по батькові:</strong> ".$_POST['name']."</p>";
  }

  if (trim(!empty($_POST['email'])){
    $body = "<p><strong>E-mail:</strong> ".$_POST['email']."</p>";
  }

  if (trim(!empty($_POST['tel'])){
    $body = "<p><strong>Телефон:</strong> ".$_POST['tel']."</p>";
  }

  if (trim(!empty($_POST['message'])){
    $body = "<p><strong>Текст листа:</strong> ".$_POST['message']."</p>";
  }
 
  $body->Body = $body;

  if (!$mail->send()) {
    $message = 'Помилка';
  }else{
    $message = 'Всі дані відправлено';
  }

  $response = ['message' => $message];

  header('Content-Type: application/json');
  echo json_encode($response);
>
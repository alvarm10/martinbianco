
<?php
include('SMTPconfig.php');
include('SMTPClass.php');
if($_SERVER["REQUEST_METHOD"] == "POST")
{
$to = "sergisanch29@gmail.com";
$name = $_POST['name'];
$from = $_POST['email'];
$subject = $_POST['subject'];
$body = $_POST['message'];
    
$SMTPMail = new SMTPClient ($SmtpServer, $SmtpPort, $SmtpUser, $SmtpPass, $from, $to, $subject, $body);
$SMTPChat = $SMTPMail->SendMail();
}

echo "<META HTTP-EQUIV=\"Refresh\" CONTENT=\"0;URL=http://www.in4all.es/contact_message.html\">";
?>
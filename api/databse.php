<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "apiuser";
$mysqli = new mysqli($servername, $username, $password, $dbname);

/* check connection */  
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
/* close connection */
?>
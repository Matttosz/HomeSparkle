<?php
include "ConnectionDB.php";
$UserName     = $_POST['UserName'];
$UserEmail    = $_POST['UserEmail'];
$UserAge      = $_POST['UserAge'];
$UserPassword = password_hash($_POST['UserPassword'], PASSWORD_DEFAULT);

$DataBaseConnection = new mysqli();
 if (!$DataBaseConnection->connect("localhost", "root", "", "SystemManagement")) {
    
    die ("Conexão Falhou: " . mysqli_connect_error());
};

$DataBaseUserInjection = "INSERT INTO UserRegister  ( UserName, UserAge , UserEmail , UserPassword) VALUES (?,?,?,?)";
$PreparingSqlInjection = $DataBaseConnection->prepare($DataBaseUserInjection);
$PreparingSqlInjection->bind_param("siss" , $UserName , $UserAge , $UserEmail , $UserPassword);

if ($PreparingSqlInjection->execute()) {
    echo "User  registered successfully.";
} else {
    echo "Error: " . htmlspecialchars($PreparingSqlInjection->error);
}

$DataBaseConnection->close();
?>
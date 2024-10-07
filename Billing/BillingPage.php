<?php session_start()?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="StyleBillingPage.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <title>Estimativa de Faturas</title>
</head>
<body>
    <div class="TitleBillingPage">
        <h1 class="TitlePage">Estimativa de Faturas</h1>
        <h2 class="SecondTitle">Sub-Titulo</h2>
    </div>

    <form action="" class="BillingFormBackground">
        <h1 class="HeadLableForm">Estime Suas Próximas Faturas!</h1>
        <label>Empresa Responsável Pelo Fornecimento</label>
            <input type="text" name="EnergyCompany" class="FormBillingInputArea"  placeholder="">
        <label>Data Atual</label>
            <input type="date" name="DateStartPreview" class="FormBillingInputArea"  placeholder="">
        <label>Data de Vencimento</label>
            <input type="date" name="DateLimitePreview" class="FormBillingInputArea"  placeholder="">
        <label>Insira os Volts de seus Equipamentos(ex: 450,220).</label>
            <input type="text" name="VoltsPerEquipment" class="FormBillingInputArea"  placeholder="">
        <label>Bill</label>
            <input type="text" name="Conta" class="FormBillingInputArea"  placeholder="">
        <input type="submit" value="Enviar" class="BillingFormSubmitButton">
    </form>
    <div class="MenuBillingPage">
        <h1 class="MenuTitle">HomeSparkle</h1>
        
        <a href="" class="MenuText">
            <i class="fa-solid fa-house"></i> Dashboard</a>
        <a href="" class="MenuText">
            <i class="fa-solid fa-chart-pie"></i> Reports</a>
        <a href="" class="MenuText">
            <i class="fa-solid fa-list"></i> Manage User</a>
        <a href="" class="MenuText">
            <i class="fa-solid fa-user"></i> Generate Bill</a>
        <a href="" class="MenuText">
            <i class="fa-solid fa-address-card"></i> Profile</a>
    </div>
</body>
</html>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ínicio</title>
    <link rel="stylesheet" href="HubScreenPage.css">
</head>
<body>
    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $userName = $_POST['User Name'];
        $userPassword = $_POST['User Password'];
        $confirmPassword = $_POST['ConfirmPassword'];

        if (empty($userName) || empty($userPassword) || empty($confirmPassword)) {
            throw new Exception("Todos os campos são obrigatórios.");
        }

        if ($userPassword !== $confirmPassword) {
            throw new Exception("A senha e a confirmação de senha não são iguais.");
        }
        echo "Cadastro realizado com sucesso!";
        
    } catch (Exception $e) {
        echo "Erro: " . $e->getMessage();
    }
}
?>
    <form action="DataBaseInjection.php" method="POST">
    <input type="text"  name="UserName" placeholder="Nome de Usuário">
    <input type="email" name="UserEmail" placeholder="E-mail">
    <input type="number" name="UserAge" placeholder="Idade">
    <input type="password" name="PasswordTest" placeholder="Senha">
    <input type="password" name="UserPassword" placeholder="Confirme sua senha"> 
    <input type="submit" value="Cadastre-se">
    </form>

</body>
</html>
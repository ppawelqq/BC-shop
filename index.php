<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>SKLEP INTERNETOWY</title>

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="style.css" rel="stylesheet">

    <script src="./scripts/check.js"></script>

  </head>

  <body>

    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Logowanie</h2>
        <label for="inputEmail" class="sr-only">Login</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Login" required autofocus>
        <label for="inputPassword" class="sr-only">Hasło</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Hasło" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Zapamiętaj mnie
          </label>
        </div>
          <div class="btn-group" role="group" aria-label="...">
            <button id="login" class="btn btn-lg btn-primary" type="submit">Zaloguj</button>
            <button id="register" class="btn btn-lg btn-primary" type="submit">Rejestracja</button>
          </div>
      </form>

    </div>
  </body>
</html>

<!-- START HEADER -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel='icon' href='img/favicon.ico' type='image/x-icon'/>
    <title>Lab 20 - Desarrollo de Aplicaciones Web</title>
    <!-- LAB 20 CSS -->
    <link rel="stylesheet" href="css/main.css">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Material Design Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body class="black">
<!-- END HEADER -->

<!-- START NAV -->
<!-- Start Nav -->
<div class="navbar-fixed"> 
            <nav>
                <div class="nav-wrapper indigo darken-4">
                    <a href="index.php" class="brand-logo white-text" style="font-family:semravut;font-size:4vw">
                        FisicApp
                    </a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons white-text">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a class="black-text" href="views/team.php"><i class="material-icons white-text">people</i></a></li>
                        <li>
                            <a class="waves-effect waves-light btn white indigo-text text-darken-4" href="">
                                Inicio<i class="material-icons right indigo-text text-darken-4">home</i>
                            </a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
                <ul class="sidenav indigo darken-4" id="mobile-demo">
                    <li><a class="white-text" href="index.php"><i class="material-icons white-text">home</i>Inicio</a></li>
                    <li><a class="white-text" href="views/team.php"><i class="material-icons white-text">people</i>Equipo</a></li>
                </ul>
<!-- End Nav -->
<!-- START NAV -->

<!-- START BODY -->
<?php include('sections/_welcome.php') ?>
<!-- END BODY -->

<!-- START FOOTER -->
<footer class="myFooter" id="preguntas">
            <div class="footer-copyright">
                <div class="container white-text" style="font-family:Arial;font-size:1,5vw;">
                    ©Copyright <a class="indigo-text text-lighten-3" href="http://github.com/irvingpercam">Irving Aguilar</a>
                    - Powered by Tecnológico de Monterrey.
                </div>
            </div>
        </footer>
<!-- End Footer -->
<!-- Start Scripts -->
    <!-- jQuery -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/init.js"></script>
    <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<!-- End Scripts -->
</body>
</html>
<!-- END FOOTER -->
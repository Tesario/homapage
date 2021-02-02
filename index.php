<!DOCTYPE html>
<html lang="cs-cz">

<head>
    <meta http-equiv="Pragma" content="no-cache">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mainpage - Autor: Vojtěch Tesař">
    <meta name="keywords" content="mainpage, Vojtěch Tesař">
    <meta name="author" content="Tesař Vojtěch">
    <link rel="stylesheet" href="homepage/css/normalize.css">
    <link rel="stylesheet" href="homepage/css/style.css">
    <link rel="shortcut icon" href="homepage/img/other/code-logo.png" type="image/x-icon">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>tesario.4fan.cz</title>
</head>

<body>
    <!-- Header Section -->
    <section id="header">
        <div class="header container">
            <div class="name">
                <h1><a href="#about">Vojtěch Tesař</a></h1>
            </div>
            <div class="hamburger">
                <span></span>
            </div>
            <div class="menu-container">
                <ul class="nav-menu">
                    <li><a onclick="hr_margin(0)" href="#main">Home</a></li>
                    <li><a onclick="hr_margin(25)" href="#about">O mně</a></li>
                    <li><a onclick="hr_margin(50)" href="#school">Škola</a></li>
                    <li><a onclick="hr_margin(75)" href="#other">Ostatní</a></li>
                </ul>
                <div class="hr-container">
                    <hr>
                </div>
            </div>
        </div>
    </section>
    <!-- End Header Section-->


    <!-- Main Section -->
    <section id="main">
        <div class="main container">
            <div class="motto">
                <div class="inscription">Eat<div class="img-box"><img src="homepage/img/other/eat-logo.png" alt="eat-logo"></div><span></span></div>
                <div class="inscription">Sleep<div class="img-box"><img src="homepage/img/other/sleep-logo.png" alt="sleep-logo"></div><span></span></div>
                <div class="inscription">Code<div class="img-box"><img src="homepage/img/other/code-logo.png" alt="code-logo"></div><span></span></div>
                <div class="inscription">Repeat<div class="img-box"><img class="repeat-logo" src="homepage/img/other/repeat-logo.png" alt="repeat-logo"></div><span></span></div>
            </div>
        </div>
    </section>
    <!-- End Main Section -->




    <!-- About Section -->
    <section id="about">
        <div class="about container">
            <div class="img-box">
                <img src="homepage/img/other/foto.png" alt="foto">
            </div>
            <div class="info-box">
                <h1>O mně</h1>
                <p>Jmenuji se Votěch Tesař a jsem studentem Střední průmyslové školy v Třebíči, obor informační technologie. Mezi mé oblíbené činnosti patří programování a tvorba webů, ze sportů je to např. fotbal, hokej nebo ping pong</p>
                <h2>O co se zajímám?</h2>
                <div class="language-items">
                    <a class="item" href="https://cs.wikipedia.org/wiki/PHP">
                        <img src="homepage/img/mainpage_icons/php.png" alt="programming language">
                    </a>
                    <a class="item" href="https://cs.wikipedia.org/wiki/JQuery">
                        <img src="homepage/img/mainpage_icons/jquery.png" alt="programming language">
                    </a>
                    <a class="item" href="https://cs.wikipedia.org/wiki/MySQL">
                        <img src="homepage/img/mainpage_icons/mysql.png" alt="programming language">
                    </a>
                    <a class="item" href="https://cs.wikipedia.org/wiki/Git">
                        <img src="homepage/img/mainpage_icons/git.png" alt="programming language">
                    </a>
                    <a class="item" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">
                        <img src="homepage/img/mainpage_icons/bootstrap.png" alt="programming language">
                    </a>
                    <a class="item" href="https://cs.wikipedia.org/wiki/Hypertext_Markup_Language">
                        <img src="homepage/img/mainpage_icons/html.png" alt="programming language">
                    </a>
                    <a class="item" href="https://cs.wikipedia.org/wiki/Kask%C3%A1dov%C3%A9_styly">
                        <img src="homepage/img/mainpage_icons/css.png" alt="programming language">
                    </a>
                    <a class="item" href="https://cs.wikipedia.org/wiki/JavaScript">
                        <img src="homepage/img/mainpage_icons/js.png" alt="programming language">
                    </a>
                    <a class="item" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)">
                        <img src="homepage/img/mainpage_icons/sass.png" alt="programming language">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- End About Section-->



    <!-- School Section -->
    <section id="school">
        <div class="school container">
            <h1>Škola</h1>
            <div class="school-container">
                <div class="school-projects">
                    <a class="project" href="https://www.netacad.com/">
                        <div class="img-box">
                            <img src="homepage/img/other/network.png" alt="school-item">
                        </div>
                        <h2>Network Academy</h2>

                    </a> netstat -nab
                    <a class="project" href="http://tesario.4fan.cz/homepage/other/school/">
                        <div class="img-box">
                            <img src="homepage/img/other/learning.png" alt="school-item">
                        </div>
                        <h2>Přehled učiva</h2>
                    </a>
                    <a class="project" href="http://tesario.4fan.cz/homepage/other/notes">
                        <div class="img-box">
                            <img src="homepage/img/other/note-editor.png" alt="school-item">
                        </div>
                        <h2>Editor poznámek</h2>
                    </a>
                    <a class="project" href="https://www.spst.cz/">
                        <div class="img-box">
                            <img class="spst" src="homepage/img/other/spst.png" alt="school-item">
                        </div>
                        <h2>SPŠT</h2>
                    </a>
                </div>
                <div class="school-info">
                    <table onclick="change(false)" class="timetable tt-even">
                        <tr>
                            <th>Sudý<br>týden</th>
                            <th>1.</th>
                            <th>2.</th>
                            <th>3.</th>
                            <th>4.</th>
                            <th>5.</th>
                            <th>6.</th>
                            <th>7.</th>
                            <th>8.</th>
                            <th>9.</th>
                        </tr>
                        <tr>
                            <th>Po</th>
                            <td>ČJL</td>
                            <td>EKO</td>
                            <td>ANJ</td>
                            <td>ANJ</td>
                            <td>KYB</td>
                            <td>KYB</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Út</th>
                            <td>WEB</td>
                            <td>WEB</td>
                            <td>OSY</td>
                            <td>OSY</td>
                            <td>ČJL</td>
                            <td>MIT</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>St</th>
                            <td>OSY</td>
                            <td>OSY</td>
                            <td>MAT</td>
                            <td>MAT</td>
                            <td>POS</td>
                            <td>POS</td>
                            <td>ANJ</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Čt</th>
                            <td>PRG</td>
                            <td>PRG</td>
                            <td>ČJL</td>
                            <td>OBN</td>
                            <td>POS</td>
                            <td>POS</td>
                            <td></td>
                            <td>MIT</td>
                            <td>MIT</td>
                        </tr>
                        <tr>
                            <th>Pá</th>
                            <td>TEV</td>
                            <td>TEV</td>
                            <td>PRG</td>
                            <td>PRG</td>
                            <td>MAT</td>
                            <td>EKO</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <table class="timetable tt-odd" onclick="change(true)">
                        <tr>
                            <th>Lichý<br>týden</th>
                            <th>1.</th>
                            <th>2.</th>
                            <th>3.</th>
                            <th>4.</th>
                            <th>5.</th>
                            <th>6.</th>
                            <th>7.</th>
                            <th>8.</th>
                            <th>9.</th>
                        </tr>
                        <tr>
                            <th>Po</th>
                            <td>ČJL</td>
                            <td>MAT</td>
                            <td>PRG</td>
                            <td>PRG</td>
                            <td>MIT</td>
                            <td>MIT</td>
                            <td></td>
                            <td>POS</td>
                            <td>POS</td>
                        </tr>
                        <tr>
                            <th>Út</th>
                            <td>KYB</td>
                            <td>KYB</td>
                            <td>TEV</td>
                            <td>TEV</td>
                            <td>ANJ</td>
                            <td>ANJ</td>
                            <td>EKO</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>St</th>
                            <td>ČJL</td>
                            <td>OBN</td>
                            <td>PRG</td>
                            <td>PRG</td>
                            <td>OSY</td>
                            <td>OSY</td>
                            <td>MIT</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Čt</th>
                            <td>POS</td>
                            <td>POS</td>
                            <td>OSY</td>
                            <td>OSY</td>
                            <td>MAT</td>
                            <td>ČJL</td>
                            <td>EKO</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Pá</th>
                            <td>MAT</td>
                            <td>ANJ</td>
                            <td>WEB</td>
                            <td>WEB</td>
                            <td>MIT</td>
                            <td>MIT</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <table class="notes">
                        <tr>
                            <th>Předmět</th>
                            <th>Poznámka</th>
                            <th>Datum splnění</th>
                        </tr>

                        <?php
                        $conn = mysqli_connect("localhost", "root", "", "my_database");
                        // Check connection
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }
                        $sql = "SELECT predmet, poznamka, datum FROM poznamky";
                        $result = $conn->query($sql);
                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo "<tr><td>" . $row["predmet"] . "</td><td>" . $row["poznamka"] . "</td><td>" . $row["datum"] . "</td></tr>";
                            }
                        }
                        $conn->close();
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <!-- End School Section -->



    <!-- Other Section -->
    <section id="other">
        <div class="other container">
            <h1>Další Projekty</h1>
            <div class="project-container">
                <a href="http://tesario.4fan.cz/homepage/other/cookie_clicker" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/cookie.png" alt="icon">
                    </div>
                    <h2>Cookie Clicker</h2>
                </a>
                <a href="http://tesario.4fan.cz/mainpage/other/prevody" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/math.png" alt="icon">
                    </div>
                    <h2>Převody jednotek</h2>
                </a>
                <a href="http://tesario.4fan.cz/WWW-doma/index.htm" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/internet.png" alt="icon">
                    </div>
                    <h2>Mainpage v1</h2>
                </a>
                <a href="http://tesario.4fan.cz/mainpage/index.php" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/internet.png" alt="icon">
                    </div>
                    <h2>Mainpage v2</h2>
                </a>
                <a href="http://tesario.4fan.cz/bistro" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/pizza.png" alt="icon">
                    </div>
                    <h2>Web pro BISTRO</h2>
                </a>
                <a href="http://tesario.4fan.cz/mainpage/other/websecss/" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/web.png" alt="icon">
                    </div>
                    <h2>Můj 1. web</h2>
                </a>
                <a href="http://tesario.4fan.cz/homepage/other/snake/" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/snake_icon.png" alt="icon">
                    </div>
                    <h2>Snake</h2>
                </a>
                <a href="http://tesario.4fan.cz/mainpage/other/knp/" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/tiktacktoe.png" alt="icon">
                    </div>
                    <h2>Piškvorky</h2>
                </a>

                <a href="http://tesario.4fan.cz/mainpage/other/knp/" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/rps.png" alt="icon">
                    </div>
                    <h2>Kámen, nůžky, papír</h2>
                </a>
                <a href="http://tesario.4fan.cz/homepage/other/growlage/" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/growlage.png" alt="icon">
                    </div>
                    <h2>Growlage</h2>
                </a>
                <a href="http://tesario.4fan.cz/mainpage/other/koule/" class="other-item">
                    <div class="img-box">
                        <img src="homepage/img/project-icons/ball.png" alt="icon">
                    </div>
                    <h2>Křišťálová koule</h2>
                </a>
            </div>
        </div>
    </section>
    <!-- End Other Section -->


    <!-- Footer Section -->
    <section id="footer">
        <div class="footer container">
            <p>This web was created with great patience and diligence</p>
            <hr>
            <p>Copyright © 2020 www.tesario.4fan.cz - Všechna práva vyhrazena</p>
        </div>
    </section>
    <!-- End Footer Section -->



    <!-- Loading -->
    <div id="loader" class="wrapper">
        <h1>Loading</h1>
        <span class="loader">
            <span class="loader-ball"></span>
            <span class="loader-ball"></span>
            <span class="loader-ball"></span>
            <span class="loader-ball"></span>
            <span class="loader-ball"></span>
        </span>
    </div>
    <!-- End Loading -->

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="homepage/js/script.js"></script>
</body>

</html>
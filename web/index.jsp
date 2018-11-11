<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <title>PlantIt.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="shortcut icon" type="image/png" href="img/logo.png"/>
        <link rel="stylesheet" type="text/css" href="css/style.css">
        
        <script src="js/jquery.js"></script>
        <script src="js/script.js"></script>
    </head>
    <body class="image-bg">
        <div class="dropdown">
            <div id="menuButton" class="menu-button-container">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <br>
            <div id="myDropdown" class="dropdown-content">
                <nav>
                    <a href="index.jsp">Home</a>
                    <a href="about.jsp">More Information</a>
                </nav>
            </div>
        </div>
        <div class="counter-area"></div>
        <div class="body-main">
            <a href="index.jsp"><img src="img/logo2_glow.png" height="80" alt /></a>
            <br>
            <br>
            <div class="searchbox"><gcse:search></gcse:search></div>
            <div class="body-text">
                <p>Because of you and other users, <br>
                    <font size="+6"><b>15,242,654</b></font> <br>
                    more mangroves are growing in the soil!</p>
            </div>
            <a href="https://www.globalmangrove.org/adopt-a-tree/" class="donation-button">Adopt a tree</a>
            <div class="footer">All Rights Reserved.</div>
        </div>
    </body>
</html>
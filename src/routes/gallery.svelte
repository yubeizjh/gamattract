<!DOCTYPE html>
<html lang="en">
<head>
<title>Gamattract</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>

body {font-family: "Lato", sans-serif; background-color: #1e1e1e;}
.mySlides {display: none}
.disImg {
  width: 500px;
  height: 250px;
  margin-top: 5px;
}
</style>
</head>
<body>

<!-- Navbar -->
<div class="w3-top">
    <div class="w3-bar w3-black w3-card">
      <a href="index.html" class="w3-bar-item w3-button w3-padding-large"><img src="logo.png" alt="logo" style="height: 15px; margin-top: -3px;"></a>
      <a href="index.html" class="w3-bar-item w3-button w3-padding-large">LATEST</a>
      <a href="gallery.svelte" class="w3-bar-item w3-button w3-padding-large w3-hide-small">GALLERY</a>
      <a href="gameFeeds.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">FEEDS</a>
      <a href="websiteGuide.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">WEBSITES</a>
      
      <div class="w3-dropdown-hover w3-hide-small">
        <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
        <div class="w3-dropdown-content w3-bar-block w3-card-4">
          <a href="moments.html" class="w3-bar-item w3-button">BEST MOMENTS</a>
          <a href="about.html" class="w3-bar-item w3-button">CONTACT</a>
        </div>
      </div>
      <a target="_blank" href="https://gameattract.wordpress.com/" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-thumbs-up"></i></a>
    </div>
  </div>

<!-- Page content -->
<div class="w3-content" style="max-width:2000px">
  <!-- First Photo Grid-->
  <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <a href="./details/gameDetails_01.html">
        <img src="./gameImages/elden-ring.jpeg" alt="elden_ring" style="width:100%" class="disImg w3-hover-opacity">
      </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <a href="./details/gD_genshin.html">
        <img src="./gameImages/genshin_impact.jpeg" alt="genshin_impact" style="width:100%" class="disImg w3-hover-opacity">
      </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <a href="./details/gD_horizon.html">
        <img src="./gameImages/horizon_forbidden_wests.jpeg" alt="horizon_forbidden_wests" style="width:100%" class="disImg w3-hover-opacity">
      </a>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <a href="./details/gD_control.html">
        <img src="./gameImages/control.jpeg" alt="control" style="width:100%" class="disImg w3-hover-opacity">
      </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <a href="./details/gD_dark_soul_3.html">
        <img src="./gameImages/dark-souls-iii.jpeg" alt="dark-souls-iii" style="width:100%" class="disImg w3-hover-opacity">
      </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <a href="./details/gD_deathloop.html">
        <img src="./gameImages/death_loop.jpeg" alt="death_loop" style="width:100%" class="disImg w3-hover-opacity">
      </a>
    </div>
  </div>

  
  <!-- Pagination -->
  <div class="w3-center w3-padding-32">
    <div class="w3-bar">
      <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
      <a href="#" class="w3-bar-item w3-black w3-button">1</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    </div>
  </div>

</div> 

<!-- Footer -->
<footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">ESSEC</a></p>
</footer>

<script>

</script>

</body>
</html>

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
</style>
</head>

<body>

	<div class="w3-top">
		<div class="w3-bar w3-black w3-card">
		  <a href="/index.svelte" class="w3-bar-item w3-button w3-padding-large"><img src="logo.png" alt="logo" style="height: 15px; margin-top: -3px;"></a>
		  <a href="/index.svelte" class="w3-bar-item w3-button w3-padding-large">LATEST</a>
		  <a href="/gallery.svelte" class="w3-bar-item w3-button w3-padding-large w3-hide-small">GALLERY</a>
		  <a href="/gameFeeds.svelte" class="w3-bar-item w3-button w3-padding-large w3-hide-small">FEEDS</a>
		  <a href="/websiteGuide.svelte" class="w3-bar-item w3-button w3-padding-large w3-hide-small">WEBSITES</a>
		  
		  <div class="w3-dropdown-hover w3-hide-small">
			<button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
			<div class="w3-dropdown-content w3-bar-block w3-card-4">
			  <a href="/moments.svelte" class="w3-bar-item w3-button">BEST MOMENTS</a>
			  <a href="/about.svelte" class="w3-bar-item w3-button">CONTACT</a>
			</div>
		  </div>
		  <a target="_blank" href="https://gameattract.wordpress.com/" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-thumbs-up"></i></a>
		</div>
	  </div>


<!-- Page content -->
<div class="w3-content" style="max-width:2000px">
  <!-- Automatic Slideshow Images -->
  <div class="mySlides w3-display-container w3-center">
    <img src="gameImages/elden-ring.jpeg" style="width:100%">
  </div>
  <div class="mySlides w3-display-container w3-center">
    <img src="gameImages/horizon_forbidden_wests.jpeg" style="width:100%">
  </div>
  <div class="mySlides w3-display-container w3-center">
    <img src="gameImages/genshin_impact.jpeg" style="width:100%">
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
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

</script>

</body>
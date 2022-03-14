
<svelte:head>
    <link rel="icon" type="image/svg" href="/static/favicon.png" />
  </svelte:head>

<!-- Navigator -->
<div class="w3-top">
    <div class="w3-bar w3-black w3-card">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <!-- hide when small -->
        <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" on:click={myFunction} title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
        <a href="/" class="w3-bar-item w3-button w3-padding-large"><img src="logo.png" alt="logo" style="height: 15px; margin-top: -3px;"></a>
        <a href="/" class="w3-bar-item w3-button w3-padding-large w3-hide-small">LATEST</a>
        <a href="/gallery" class="w3-bar-item w3-button w3-padding-large w3-hide-small">COLLECTION</a>
        <a href="/gameFeeds" class="w3-bar-item w3-button w3-padding-large w3-hide-small">FEEDS</a>
        <a href="/moments" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BEST MOMENTS</a>
        <a href="/websiteGuide" class="w3-bar-item w3-button w3-padding-large w3-hide-small">WEBSITES</a>
        <a href="/about" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
        <div class="w3-dropdown-hover w3-hide-small">
            <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="https://gameattract.wordpress.com/" class="w3-bar-item w3-button" target="_blank">GAMEATTRACT FEEDS</a>
            </div>
        </div>
        <a target="_blank" href="https://gameattract.wordpress.com/" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-thumbs-up"></i></a>
    </div>
</div>

<!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">

    <a href="/" class="w3-bar-item w3-button w3-padding-large" on:click={myFunction}>LATEST</a>
    <a href="/gallery" class="w3-bar-item w3-button w3-padding-large" on:click={myFunction}>COLLECTION</a>
    <a href="/gameFeeds" class="w3-bar-item w3-button w3-padding-large" on:click={myFunction}>FEEDS</a>
    <a href="/moments" class="w3-bar-item w3-button w3-padding-large" on:click={myFunction}>BEST MOMENTS</a>
    <a href="/websiteGuide" class="w3-bar-item w3-button w3-padding-large" on:click={myFunction}>WEBSITES</a>
    <a href="/about" class="w3-bar-item w3-button w3-padding-large" on:click={myFunction}>CONTACT</a>

  </div>

<!-- Page content -->
<div class="w3-content" style="max-width:2000px; margin-top:46px">
    <slot/>
</div> 
    
<!-- Footer -->
<footer class="w3-container w3-padding-32 w3-center w3-opacity w3-light-grey w3-xlarge">
    
    <a href="https://twitter.com/essec" target="_blank"><i class="fa fa-twitter w3-hover-opacity"></i></a>
    <p class="w3-medium">Powered by <a href="https://www.essec.edu/en/" target="_blank">ESSEC</a></p>
</footer>

<!-- Small Screen Navigator -->
<script>
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>
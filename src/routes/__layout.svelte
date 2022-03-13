<!-- Navigator -->
<div class="w3-top">
    <div class="w3-bar w3-black w3-card">
        <a href="/" class="w3-bar-item w3-button w3-padding-large"><img src="logo.png" alt="logo" style="height: 15px; margin-top: -3px;"></a>
        <a href="/" class="w3-bar-item w3-button w3-padding-large">LATEST</a>
        <a href="/gallery" class="w3-bar-item w3-button w3-padding-large w3-hide-small">GALLERY</a>
        <a href="/gameFeeds" class="w3-bar-item w3-button w3-padding-large w3-hide-small">FEEDS</a>
        <a href="/moments" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BEST MOMENTS</a>
        <a href="/websiteGuide" class="w3-bar-item w3-button w3-padding-large w3-hide-small">WEBSITES</a>
        <a href="/about" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
        <div class="w3-dropdown-hover w3-hide-small">
            <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="https://gameattract.wordpress.com/" class="w3-bar-item w3-button" target="_blank">PERSONAL WEBSITE</a>
            </div>
        </div>
        <a target="_blank" href="https://gameattract.wordpress.com/" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-thumbs-up"></i></a>
    </div>
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
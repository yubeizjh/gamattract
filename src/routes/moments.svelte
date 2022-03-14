<style>
.w3-third img{opacity: 0.8; cursor: pointer}
.w3-third img:hover{opacity: 1}

</style>

  <!-- Push down content on small screens --> 
  <div class="w3-hide-large" style="margin-top:83px"></div>
  
  <!-- use array to display image & alt information -->
  <!-- Photo grid -->
  <div class="w3-row">
    <div class="w3-third">
      <img src={rSrc[1]} style="width:100%" on:click={() => onClick(1)} alt="A boy surrounded by beautiful nature">
      <img src={rSrc[2]} style="width:100%" on:click={() => onClick(2)} alt="What a beautiful scenery this sunset">
      <img src={rSrc[3]} style="width:100%" on:click={() => onClick(3)} alt="The Beach. Me. Alone. Beautiful">
      <img src={rSrc[4]} style="width:100%" on:click={() => onClick(4)} alt="The Beach. Me. Alone. Beautiful">
      <img src={rSrc[5]} style="width:100%" on:click={() => onClick(5)} alt="The Beach. Me. Alone. Beautiful">
    </div>

    <div class="w3-third">
      <img src={rSrc[6]} style="width:100%" on:click={() => onClick(6)} alt="A boy surrounded by beautiful nature">
      <img src={rSrc[7]} style="width:100%" on:click={() => onClick(7)} alt="What a beautiful scenery this sunset">
      <img src={rSrc[8]} style="width:100%" on:click={() => onClick(8)} alt="The Beach. Me. Alone. Beautiful">
      <img src={rSrc[9]} style="width:100%" on:click={() => onClick(9)} alt="The Beach. Me. Alone. Beautiful">
      <img src={rSrc[10]} style="width:100%" on:click={() => onClick(10)} alt="The Beach. Me. Alone. Beautiful">
    </div>
    
    <div class="w3-third">
      <img src={rSrc[11]} style="width:100%" on:click={() => onClick(11)} alt="A boy surrounded by beautiful nature">
      <img src={rSrc[12]} style="width:100%" on:click={() => onClick(12)} alt="What a beautiful scenery this sunset">
      <img src={rSrc[13]} style="width:100%" on:click={() => onClick(13)} alt="The Beach. Me. Alone. Beautiful">
      <img src={rSrc[14]} style="width:100%" on:click={() => onClick(14)} alt="The Beach. Me. Alone. Beautiful">
      <img src={rSrc[15]} style="width:100%" on:click={() => onClick(15)} alt="The Beach. Me. Alone. Beautiful">
    </div>
  </div>

  <!-- Modal for full size images on click-->
  <div id="modal01" class="w3-modal w3-black" style="padding-top:0" alt="" on:click={onClickClose}>
    <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img src={useSrc} id="img01" alt="empty" class="w3-image">
      <p id="caption"></p>
    </div>
  </div>

  <script>
    let useSrc = 'gameImages/elden-ring.jpeg';
    let rSrc = [
      "",

      "gP/01.jpeg",
      "gP/02.jpeg",
      "gP/03.jpeg",
      "gP/04.jpeg",
      "gP/05.jpeg",

      "gP/06.jpeg",
      "gP/07.jpeg",
      "gP/08.jpeg",
      "gP/09.jpeg",
      "gP/10.jpeg",

      "gP/11.jpeg",
      "gP/12.jpeg",
      "gP/13.jpeg",
      "gP/14.jpeg",
      "gP/15.jpeg",
    ]

    let rAlt = [
      "",

      "GTSport",
      "Horizon: Forbidden West",
      "Uncharted: The Lost Legacy",
      "Spider Man",
      "Horizon: Forbidden West",

      "Genshin Impact, Yoimiya",
      "God of War",
      "Ascent The Game",
      "Rise Of The Tomb Raider",
      "Horizon: Forbidden West",

      "Red Dead Redemption II",
      "Spider Man",
      "Genshin Impact",
      "Genshin Impact",
      "Personal Demo"
    ]

    // Modal Image Gallery
    function onClick(indexNum) {
      useSrc = rSrc[indexNum];
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = rAlt[indexNum];
    }

    function onClickClose() {
      document.getElementById("modal01").style.display = "none";
    }
  </script>
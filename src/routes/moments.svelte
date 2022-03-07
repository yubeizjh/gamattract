<style>
.w3-third img{opacity: 0.8; cursor: pointer}
.w3-third img:hover{opacity: 1}
</style>

    <!-- Push down content on small screens --> 
  <div class="w3-hide-large" style="margin-top:83px"></div>
  
  <!-- Photo grid -->
  <div class="w3-row">
    <div class="w3-third">
      <img src="gameImages/elden-ring.jpeg" style="width:100%" alt="A boy surrounded by beautiful nature">
      <img src="gameImages/genshin_impact.jpeg" style="width:100%" alt="What a beautiful scenery this sunset">
      <img src="gameImages/horizon_forbidden_wests.jpeg" style="width:100%" alt="The Beach. Me. Alone. Beautiful">
    </div>

    <div class="w3-third">
      <img src="gameImages/genshin_impact.jpeg" style="width:100%" alt="Quiet day at the beach. Cold, but beautiful">
      <img src="gameImages/horizon_forbidden_wests.jpeg" style="width:100%" alt="Waiting for the bus in the desert">
      <img src="gameImages/elden-ring.jpeg" style="width:100%" alt="Nature again.. At its finest!">
    </div>
    
    <div class="w3-third">
      <img src="gameImages/horizon_forbidden_wests.jpeg" style="width:100%" alt="Canoeing again">
      <img src="gameImages/elden-ring.jpeg" style="width:100%" alt="A girl, and a train passing">
      <img src="gameImages/genshin_impact.jpeg" style="width:100%" alt="What a beautiful day!">
    </div>
  </div>

  <!-- Modal for full size images on click-->
  <div id="modal01" class="w3-modal w3-black" style="padding-top:0" alt="this.style.display='none'">
    <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" alt="empty" class="w3-image">
      <p id="caption"></p>
    </div>
  </div>

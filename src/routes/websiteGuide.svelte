<style>
a{text-decoration:none;}
h3{color: lightgray;}
.w3-sidebar {
  z-index: 3;
  width: 180px;
  top: 46px;
  bottom: 0;
  height: inherit;
  color: black;
}
.circular--landscape{
    display:inline-block;
    position:relative;
    width:50px;
    height:50px;
    overflow:hidden;
    border-radius:50%;
}
.card-hover{
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
}
.card-hover:hover{
    box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
    transform: translate(0,-5px);
    transition-delay: 0s !important;
    cursor: pointer;
}
.card-hover:hover span{
    color: gray;
}
.card-hover .hint-text{
    display: none;
}
.card-hover:hover .hint-text{
    display: inline;
}
</style>  

<!-- Sidebar -->
<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5" id="mySidebar">
    <h4 class="w3-bar-item"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#Platform">Platform</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#Shop">Shop</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#Rating">Rating & News</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#Forum">Forum</a>
</nav>


<!-- Page content -->   
<div class="w3-content" style="max-width:100%;margin-top:46px;margin-left:180px">
    
    <!-- Session -->  
    <div id="Platform" class="w3-container w3-margin-left">
        <h3>Platform</h3>
    </div>

    <div class="w3-row-padding">
        <a target="_blank"  href="https://store.steampowered.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/steam.png">
                <span class="w3-margin-left">Steam</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://www.epicgames.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/epic.png">
                <span class="w3-margin-left">Epic</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://www.playstation.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/playStation.png">
                <span class="w3-margin-left">Play Station</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
    </div>

    <div class="w3-row-padding">
        <a target="_blank"  href="https://www.nintendo.fr/Nintendo-eShop/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/nintendo.png">
                <span class="w3-margin-left">Nintendo eShop</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
    </div>

    <!-- Session -->  
    <div id="Shop"  class="w3-container w3-margin-left">
        <h3>Shop</h3>
    </div>

    <div class="w3-row-padding">
        <a target="_blank"  href="https://www.micromania.fr/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/micro.png">
                <span class="w3-margin-left">Micromania</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://shop42406197.m.youzan.com/v2/showcase/homepage?kdt_id=42214029" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/jump.png">
                <span class="w3-margin-left">JUMP</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>

    </div>

    <!-- Session -->  
    <div id="Rating" class="w3-container w3-margin-left">
        <h3>Rating & News</h3>
    </div>

    <div class="w3-row-padding">
        <a target="_blank"  href="https://www.ign.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/ign.png">
                <span class="w3-margin-left">IGN</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://www.metacritic.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/metacritic.png">
                <span class="w3-margin-left">Meta Critic</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://www.gamersky.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/gamersky.jpeg">
                <span class="w3-margin-left">GamerSky</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
    </div>

    <div class="w3-row-padding">
        <a target="_blank"  href="https://www.3dmgame.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/3dm.jpeg">
                <span class="w3-margin-left">3DM games</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="http://www.tgbus.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/tgbus.jpeg">
                <span class="w3-margin-left">TGbus</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://www.metacritic.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/yys.png">
                <span class="w3-margin-left">YYS</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
    </div>

    <!-- Session -->  
    <div id="Forum"  class="w3-container w3-margin-left">
        <h3>Forum</h3>
    </div>

    <div class="w3-row-padding">
        <a target="_blank"  href="https://www.reddit.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/reddit.jpeg">
                <span class="w3-margin-left">Reddit</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://tieba.baidu.com/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/tieba.png">
                <span class="w3-margin-left">Tieba</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>
        <a target="_blank"  href="https://nga.cn/" class="w3-col s4 w3-card-4 w3-margin-bottom">
            <div class="card-hover w3-container w3-white w3-round">
                <img class="w3-margin-top w3-margin-bottom circular--landscape" alt="empty" src="websiteIcon/nga.jpeg">
                <span class="w3-margin-left">NGA</span>
                <span class="hint-text"><em>------>GO!</em></span>
            </div>
        </a>

    </div>
</div>
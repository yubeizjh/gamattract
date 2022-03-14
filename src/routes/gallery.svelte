<style>
.disImg {
		margin-top: 20px;
		margin-bottom: -10px;
		max-width: 100%
	}
</style>

<!-- use array to random display image -->
<!-- First Photo Grid-->
<div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
        <a href={fHref[0]}>
        <img src={fSrc[0]} alt="elden_ring" style="" class="disImg w3-hover-opacity">
        </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
        <a href={fHref[1]}>
        <img src={fSrc[1]} alt="elden_ring" style="" class="disImg w3-hover-opacity">
        </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
        <a href={fHref[2]}>
        <img src={fSrc[2]} alt="elden_ring" style="" class="disImg w3-hover-opacity">
		</a>
    </div>
</div>

<!-- Second Photo Grid-->
<div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
        <a href={fHref[3]}>
        <img src={fSrc[3]} alt="elden_ring" style="" class="disImg w3-hover-opacity">
        </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
        <a href={fHref[4]}>
        <img src={fSrc[4]} alt="elden_ring" style="" class="disImg w3-hover-opacity">
        </a>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
        <a href={fHref[5]}>
        <img src={fSrc[5]} alt="elden_ring" style="" class="disImg w3-hover-opacity">
        </a>
    </div>
</div>

<div class="w3-center" style="margin-bottom: 10px;">
	<button class="w3-button w3-white w3-section w3-xlarge w3-round-large" on:click={onClick}>
		<i class="fa fa-american-sign-language-interpreting"></i> Where is my lucky game?
	</button>
</div>


<script>
// ref Array
let rHref = [
	"/details/gameDetails_01",
	"/details/gD_genshin",
	"/details/gD_horizon",
	"/details/gD_control",
	"/details/gD_dark_soul_3",
	"/details/gD_deathloop",

	"/details/gD_notready",
	"/details/gD_notready",
	"/details/gD_notready",
	"/details/gD_notready",
	"/details/gD_notready",
	"/details/gD_notready",

	"/details/gD_notready"
]
// src array
let rSrc = [
	"/gameImages/elden-ring.jpeg",
	"/gameImages/genshin_impact.jpeg",
	"/gameImages/horizon_forbidden_wests.jpeg",
	"/gameImages/control.jpeg",
	"/gameImages/dark-souls-iii.jpeg",
	"/gameImages/death_loop.jpeg",

	"/gameImages/apex.jpeg",
	"/gameImages/hades.jpeg",
	"/gameImages/honkai.jpeg",
	"/gameImages/ji_2.jpeg",
	"/gameImages/minecraft.jpeg",
	"/gameImages/valkyrie.jpeg",

	"/gameImages/wow.jpeg"
]

// result array
let fHref = [];
let fSrc = [];
let maxNum = rHref.length;
let maxNumOfPic = 6;

for (let i=0;i<maxNumOfPic;i++){
		fHref[i]=rHref[i];
		fSrc[i]=rSrc[i];
	}

// random button
function onClick () {
	const data = [];
	for (let i=0;i<maxNum;i++){
		data.push(i);
	}
	const r = Array.apply(null, { length: data.length })
	.map((n, i) => i)
	.map((n, i, all) => {
		const j = i + Math.floor(Math.random() * (all.length - i));
		const v = all[j];
		all[j] = n;
		return v;
	})
	.slice(0, maxNum)
	.map(i => {
		return data[i];
	});

	for (let i=0;i<maxNumOfPic;i++){
		fHref[i]=rHref[r[i]];
		fSrc[i]=rSrc[r[i]];
	}
}
</script>
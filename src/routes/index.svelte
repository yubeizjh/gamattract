<style>
	.titleImg {
		height: 800px;
	}
</style>


<svelte:component
  this={Carousel}
  bind:this={carousel}
  autoplay
  autoplayDuration={3000}
  autoplayProgressVisible
>
<div class="w3-display-container w3-center">
	<a href="/details/gameDetails_01">
		<img src="gameImages/elden-ring.jpeg" alt="" class="titleImg" style="width:100%">
	</a>
</div>

<div class="w3-display-container w3-center">
	<a href="/details/gD_genshin">
		<img src="gameImages/genshin_impact.jpeg" alt="" class="titleImg" style="width:100%">
	</a>
</div>

<div class="w3-display-container w3-center">
	<a href="/details/gD_horizon">
		<img src="gameImages/horizon_forbidden_wests.jpeg" alt="" class="titleImg" style="width:100%">
	</a>
</div>


</svelte:component>

<script>
	import { onMount } from 'svelte';
  
	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
	  const module = await import('svelte-carousel');
	  Carousel = module.default;
	});
  
	const handleNextClick = () => {
	  carousel.goToNext()
	}
</script>
 
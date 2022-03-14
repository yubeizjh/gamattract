<style>
h1, h3, h4, p {color: lightgray;}
.page {
        margin: 40px;
    }
</style>


<!-- About Section -->
<div class="w3-container w3-padding-32" id="about">
<h1 class="w3-padding-16 w3-center">About us</h1>
<h4 class="w3-center"> We love games <br>Play games everyday <br>Latest lover is Elden Ring</h4>
</div>

<div class="w3-row-padding">
<div class="w3-col l3 m6 w3-margin-bottom">
	<img src="./teamPic/rilakkuma.png" alt="John" style="width:100%">
	<h3>Rilakkuma</h3>
	<p class="w3-opacity">CEO & Founder</p>
	<p>Pancake is great!</p>
	<p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
</div>
<div class="w3-col l3 m6 w3-margin-bottom">
	<img src="./teamPic/korilakkuma.png" alt="Jane" style="width:100%">
	<h3>Korilakkuma</h3>
	<p class="w3-opacity">UI & UX designer</p>
	<p>Designing best pancakes...</p>
	<p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
</div>
<div class="w3-col l3 m6 w3-margin-bottom">
	<img src="./teamPic/kiiroitori.png" alt="Mike" style="width:100%">
	<h3>Kiiroitori</h3>
	<p class="w3-opacity">Programmer</p>
	<p>Making pancakes...</p>
	<p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
</div>
<div class="w3-col l3 m6 w3-margin-bottom">
	<img src="./teamPic/chairoikoguma.png" alt="Mike" style="width:100%">
	<h3>Chairoikoguma</h3>
	<p class="w3-opacity">Programmer</p>
	<p>Adding honey...</p>
	<p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
</div>
</div>

<!-- Contact Section -->
<div class="w3-container w3-padding-32 w3-center" id="contact" style="width: 50%;margin-left: 25%;">
<h1 class="w3-padding-16">Contact</h1>
<p style="margin-bottom: 40px;">Let us know which game you like to add or review</p>

<Form on:submit={handleSubmit}>

    <input
    class="w3-input w3-border"
    placeholder="Name" 
    id="name"
    name="name"
    on:change={handleChange}
    bind:value={$form.name}
    />

    <input
    class="w3-input w3-section w3-border"
    placeholder="Email" 
    id="email"
    name="email"
    on:change={handleChange}
    bind:value={$form.email}
    />

    <input
    class="w3-input w3-section w3-border"
    placeholder="Subject" 
    id="name"
    name="name"
    on:change={handleChange}
    bind:value={$form.title}
    />

    <input
    class="w3-input w3-section w3-border"
    placeholder="Comments"
    id="comments"
    name="comments"
    on:change={handleChange}
    bind:value={$form.comments}
    />

    <button class="w3-button w3-black w3-section" type="submit"><i class="fa fa-paper-plane"></i> SEND MESSAGE</button>
</Form>

<!-- apiResult Message -->
{#if apiResult != null}
    {#if apiResult == true}
        <h2 style="color: white; margin-bottom: -30px;">We've received! <br/>Thanks for your comments!</h2>
        {:else}
        <h2 style="color: white; margin-bottom: -30px;">Ops! Something wrong with your submit.</h2>
    {/if}    
{/if}

</div>


<script>
    
    // supabase & svelte forms

    import { supabase } from "../supabaseClient";

    import { createForm } from "svelte-forms-lib";

    import { TextInput, TextArea, Button, FormGroup, Form, InlineNotification } from "carbon-components-svelte";

    let apiResult = null;

    const { form, errors, handleChange, handleSubmit, isSubmitting, handleReset } = createForm({
        initialValues: { name: "", email: "", title: "" , comments: ""},
        onSubmit: async values => {

            try {
                var result = await supabase.from("contact").insert(values);

                if (result.data != null) {
                    apiResult = true;
                } else {
                    apiResult = false;
                }

            } catch (ex) {
                apiResult = false;
            }

            handleReset();
      }
    });

</script>
<div class="page">


    
</div>
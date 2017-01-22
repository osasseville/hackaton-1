<template>
  <div>
  	<md-card>
	<form novalidate @submit.stop.prevent="submit">
  		<md-card-header>
  			<div class="md-title">Setup</div>
  		</md-card-header>

  		<md-input-container>
			<md-button class="md-raised md-primary">RECORD</md-button>
	  	<md-input-container>
	  	<md-input-container>
	    	<label>Input a verification message</label>
	    	<md-input placeholder="Type something you'll remember!"></md-input>
	  	</md-input-container>

	  	<md-input-container>
	    	<label>What's your numbah?</label>
	    	<md-input type="number"></md-input>
	  	</md-input-container>
		</md-card>

		<md-button class="md-raised md-accent">Submit</md-button>
	</form>
  </div>
</template>

<script>
export default{
  name: 'Setup'
}
</script>

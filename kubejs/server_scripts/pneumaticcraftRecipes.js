// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
	event.custom({
			"type": "pneumaticcraft:explosion_crafting",
			"input": {
			  "item": "minecraft:iron_ingot"
			},
			"results": [
			  {
				"item": "pneumaticcraft:ingot_iron_compressed"
			  }
			],
			"loss_rate": 40
		  }
	)

	event.remove({id:'pneumaticcraft:explosion_crafting/compressed_iron_block'})
	event.custom({
			"type": "pneumaticcraft:explosion_crafting",
			"input": {
			  "item": "minecraft:iron_block"
			},
			"results": [
			  {
				"item": "pneumaticcraft:compressed_iron_block"
			  }
			],
			"loss_rate": 40
		  }
	)

	
})

onEvent('item.tags', event => {

	// event.get('forge:ethanol').add(Fluid.of('minecraft:water'))

})
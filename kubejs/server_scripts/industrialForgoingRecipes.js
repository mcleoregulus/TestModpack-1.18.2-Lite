// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({output:'industrialforegoing:plastic'})
	event.replaceInput({mod:'industrialforegoing'}, 'industrialforegoing:plastic', 'pneumaticcraft:plastic')
	event.replaceInput({id:'industrialforegoing:machine_frame_pity'}, 'minecraft:iron_ingot', 'pneumaticcraft:plastic')
	event.replaceInput({id:'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'pneumaticcraft:unassembled_pcb')

	event.remove({id:'industrialforegoing:dissolution_chamber/simple_machine_frame'})
	event.remove({id:'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
	event.remove({id:'industrialforegoing:dissolution_chamber/supreme_machine_frame'})

	event.custom({
		"input": [
		  {
			"item": "pneumaticcraft:plastic"
		  },
		  {
			"tag": "industrialforegoing:machine_frame/pity"
		  },
		  {
			"item": "pneumaticcraft:plastic"
		  },
		  {
			"item": "minecraft:nether_brick"
		  },
		  {
			"item": "minecraft:nether_brick"
		  },
		  {
			"item": "thermal:lumium_ingot"
		  },
		  {
			"item": "thermal:lumium_gear"
		  },
		  {
			"item": "thermal:lumium_ingot"
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
		"processingTime": 300,
		"output": {
		  "item": "industrialforegoing:machine_frame_simple",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })

	  event.custom({
		"input": [
		  {
			"item": "pneumaticcraft:plastic"
		  },
		  {
			"tag": "industrialforegoing:machine_frame/simple"
		  },
		  {
			"item": "pneumaticcraft:plastic"
		  },
		  {
			"item": "minecraft:netherite_scrap"
		  },
		  {
			"item": "minecraft:netherite_scrap"
		  },
		  {
			"item": "thermal:signalum_ingot"
		  },
		  {
			"item": "thermal:signalum_gear"
		  },
		  {
			"item": "thermal:signalum_ingot"
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
		"processingTime": 300,
		"output": {
		  "item": "industrialforegoing:machine_frame_advanced",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })

	  event.custom({
		"input": [
		  {
			"item": "pneumaticcraft:plastic"
		  },
		  {
			"tag": "industrialforegoing:machine_frame/advanced"
		  },
		  {
			"item": "pneumaticcraft:plastic"
		  },
		  {
			"item": "minecraft:netherite_ingot"
		  },
		  {
			"item": "minecraft:netherite_ingot"
		  },
		  {
			"item": "thermal:enderium_ingot"
		  },
		  {
			"item": "thermal:enderium_gear"
		  },
		  {
			"item": "thermal:enderium_ingot"
		  }
		],
		"inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:135}",
		"processingTime": 300,
		"output": {
		  "item": "industrialforegoing:machine_frame_supreme",
		  "count": 1
		},
		"type": "industrialforegoing:dissolution_chamber"
	  })

})



onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
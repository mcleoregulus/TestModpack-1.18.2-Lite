// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:'thermal:rubber_from_vine'})
	event.remove({id:'thermal:rubber_from_dandelion'})
	event.remove({id:'thermal:rubber_3'})
	event.remove({id:'thermal:smelting/cured_rubber_from_smelting'})

	event.replaceInput({}, '#forge:gears/diamond', 'thermal:diamond_gear')
	event.replaceInput({id:'thermal:press_gear_die'}, 'thermal:diamond_gear', 'industrialforegoing:diamond_gear')
	event.replaceInput({id:'thermal:machine_frame'}, 'thermal:tin_gear', 'thermal:invar_gear')
	event.replaceInput({id:'thermal:machine_frame'}, 'minecraft:iron_ingot', 'thermal:tin_ingot')

	event.shaped('industrialforegoing:diamond_gear', [
		' A ',
		'A A',
		' A '
	], {
		A: 'minecraft:diamond'
  	})

	event.recipes.thermal.crystallizer('pneumaticcraft:plastic', [Fluid.of('pneumaticcraft:plastic', 250), 'industrialforegoing:tinydryrubber'])

	event.recipes.thermal.press('pneumaticcraft:compressed_iron_gear',
	['4x pneumaticcraft:ingot_iron_compressed', 'thermal:press_gear_die'])
	
	event.recipes.thermal.press('thermal:emerald_gear',
	['4x minecraft:emerald', 'thermal:press_gear_die'])
							
	event.recipes.thermal.press('thermal:quartz_gear',
	['4x minecraft:quartz', 'thermal:press_gear_die'])

	event.recipes.thermal.press('thermal:diamond_gear',
	['4x minecraft:diamond', 'thermal:press_gear_die'])

	event.recipes.thermal.press('thermal:lapis_gear',
	['4x minecraft:lapis_lazuli', 'thermal:press_gear_die'])


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
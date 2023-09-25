// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({output:'#forge:rods/all_metal',type:'minecraft:crafting_shaped'})
	event.remove({output:'#forge:plates',type:'minecraft:crafting_shapeless'})
	event.remove({output:'#forge:wires',type:'minecraft:crafting_shapeless'})
	event.remove({id:'immersiveengineering:crusher/cobblestone'})
	event.remove({id:'immersiveengineering:crusher/gravel'})
	event.remove({id:'immersiveengineering:crusher/glass'})

	event.recipes.immersiveengineeringCrusher('minecraft:sand', 'minecraft:stone', Item.of('minecraft:glass').withChance(0.5))

	// event.custom({type:'immersiveengineering:crusher'})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
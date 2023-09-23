// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:'tconstruct:smeltery/alloys/molten_brass'})

	event.replaceInput({output:'tconstruct:grout'},'minecraft:gravel','#forge:gravel')
	event.replaceInput({output:'tconstruct:grout'},'#minecraft:sand','#forge:sand')

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	event.get('forge:gravel').add('kubejs:deepgravel')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:'botania:blaze_block'})
    event.remove({id:'botania:conversions/blazeblock_deconstruct'})
	event.shaped('botania:blaze_block', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: 'minecraft:blaze_powder',
		B: 'undergarden:shiverstone',
        C: 'undergarden:ditchbulb_paste'
  	})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
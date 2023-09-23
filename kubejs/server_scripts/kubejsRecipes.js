// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.shaped('kubejs:1x_tremblecrust', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'undergarden:tremblecrust'
  	})

    event.shaped('kubejs:2x_tremblecrust', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:1x_tremblecrust'
  	})

    event.shaped('kubejs:3x_tremblecrust', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:2x_tremblecrust'
  	})

    event.shapeless('9x kubejs:2x_tremblecrust', ['kubejs:3x_tremblecrust'])
    event.shapeless('9x kubejs:1x_tremblecrust', ['kubejs:2x_tremblecrust'])
    event.shapeless('9x undergarden:tremblecrust', ['kubejs:1x_tremblecrust'])


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
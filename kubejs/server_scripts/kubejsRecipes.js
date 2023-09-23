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

	event.replaceInput({output:'minecraft:iron_helmet'},'minecraft:iron_ingot','create:iron_sheet')
	event.replaceInput({output:'minecraft:iron_chestplate'},'minecraft:iron_ingot','create:iron_sheet')
	event.replaceInput({output:'minecraft:iron_leggings'},'minecraft:iron_ingot','create:iron_sheet')
	event.replaceInput({output:'minecraft:iron_boots'},'minecraft:iron_ingot','create:iron_sheet')

	event.replaceInput({output:'minecraft:golden_helmet'},'minecraft:gold_ingot','create:golden_sheet')
	event.replaceInput({output:'minecraft:golden_chestplate'},'minecraft:gold_ingot','create:golden_sheet')
	event.replaceInput({output:'minecraft:golden_leggings'},'minecraft:gold_ingot','create:golden_sheet')
	event.replaceInput({output:'minecraft:golden_boots'},'minecraft:gold_ingot','create:golden_sheet')

	event.remove({output:"minecraft:diamond_helmet"})
	event.remove({output:"minecraft:diamond_chestplate"})
	event.remove({output:"minecraft:diamond_leggings"})
	event.remove({output:"minecraft:diamond_boots"})


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
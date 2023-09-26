// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('recipes', event => {
	// Change recipes here

	event.remove({output:'#storagedrawers:drawers'})
	event.remove({output:'storagedrawers:oak_trim'})
	event.remove({output:'storagedrawers:spruce_trim'})
	event.remove({output:'storagedrawers:birch_trim'})
	event.remove({output:'storagedrawers:jungle_trim'})
	event.remove({output:'storagedrawers:acacia_trim'})
	event.remove({output:'storagedrawers:dark_oak_trim'})
	event.remove({output:'storagedrawers:crimson_trim'})
	event.remove({output:'storagedrawers:warped_trim'})

	event.replaceInput({output:'minecraft:repeater'}, 'minecraft:stone', '#forge:stone')
	event.replaceInput({output:'minecraft:comparator'}, 'minecraft:stone', '#forge:stone')
	event.replaceInput({output:'storagedrawers:controller'}, 'minecraft:stone', '#forge:stone')
	event.replaceInput({output:'storagedrawers:compacting_drawers_3'}, 'minecraft:stone', '#forge:stone')


	event.shaped('4x storagedrawers:oak_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	event.shaped('4x storagedrawers:spruce_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	event.shaped('4x storagedrawers:birch_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	  event.shaped('4x storagedrawers:jungle_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	  event.shaped('4x storagedrawers:acacia_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	  event.shaped('4x storagedrawers:dark_oak_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	  event.shaped('4x storagedrawers:crimson_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	  event.shaped('4x storagedrawers:warped_trim', [
		'ABA',
		'BCB',
        'ABA'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:rods/wooden',
        C: '#minecraft:logs'
  	})

	event.stonecutting('storagedrawers:oak_full_drawers_1', 'storagedrawers:oak_trim')
	event.stonecutting('storagedrawers:oak_full_drawers_2', 'storagedrawers:oak_trim')
	event.stonecutting('storagedrawers:oak_full_drawers_4', 'storagedrawers:oak_trim')
	event.stonecutting('storagedrawers:oak_half_drawers_1', 'storagedrawers:oak_trim')
	event.stonecutting('storagedrawers:oak_half_drawers_2', 'storagedrawers:oak_trim')
	event.stonecutting('storagedrawers:oak_half_drawers_4', 'storagedrawers:oak_trim')

	event.stonecutting('storagedrawers:spruce_full_drawers_1', 'storagedrawers:spruce_trim')
	event.stonecutting('storagedrawers:spruce_full_drawers_2', 'storagedrawers:spruce_trim')
	event.stonecutting('storagedrawers:spruce_full_drawers_4', 'storagedrawers:spruce_trim')
	event.stonecutting('storagedrawers:spruce_half_drawers_1', 'storagedrawers:spruce_trim')
	event.stonecutting('storagedrawers:spruce_half_drawers_2', 'storagedrawers:spruce_trim')
	event.stonecutting('storagedrawers:spruce_half_drawers_4', 'storagedrawers:spruce_trim')

	event.stonecutting('storagedrawers:birch_full_drawers_1', 'storagedrawers:birch_trim')
	event.stonecutting('storagedrawers:birch_full_drawers_2', 'storagedrawers:birch_trim')
	event.stonecutting('storagedrawers:birch_full_drawers_4', 'storagedrawers:birch_trim')
	event.stonecutting('storagedrawers:birch_half_drawers_1', 'storagedrawers:birch_trim')
	event.stonecutting('storagedrawers:birch_half_drawers_2', 'storagedrawers:birch_trim')
	event.stonecutting('storagedrawers:birch_half_drawers_4', 'storagedrawers:birch_trim')

	event.stonecutting('storagedrawers:jungle_full_drawers_1', 'storagedrawers:jungle_trim')
	event.stonecutting('storagedrawers:jungle_full_drawers_2', 'storagedrawers:jungle_trim')
	event.stonecutting('storagedrawers:jungle_full_drawers_4', 'storagedrawers:jungle_trim')
	event.stonecutting('storagedrawers:jungle_half_drawers_1', 'storagedrawers:jungle_trim')
	event.stonecutting('storagedrawers:jungle_half_drawers_2', 'storagedrawers:jungle_trim')
	event.stonecutting('storagedrawers:jungle_half_drawers_4', 'storagedrawers:jungle_trim')

	event.stonecutting('storagedrawers:acacia_full_drawers_1', 'storagedrawers:acacia_trim')
	event.stonecutting('storagedrawers:acacia_full_drawers_2', 'storagedrawers:acacia_trim')
	event.stonecutting('storagedrawers:acacia_full_drawers_4', 'storagedrawers:acacia_trim')
	event.stonecutting('storagedrawers:acacia_half_drawers_1', 'storagedrawers:acacia_trim')
	event.stonecutting('storagedrawers:acacia_half_drawers_2', 'storagedrawers:acacia_trim')
	event.stonecutting('storagedrawers:acacia_half_drawers_4', 'storagedrawers:acacia_trim')

	event.stonecutting('storagedrawers:dark_oak_full_drawers_1', 'storagedrawers:dark_oak_trim')
	event.stonecutting('storagedrawers:dark_oak_full_drawers_2', 'storagedrawers:dark_oak_trim')
	event.stonecutting('storagedrawers:dark_oak_full_drawers_4', 'storagedrawers:dark_oak_trim')
	event.stonecutting('storagedrawers:dark_oak_half_drawers_1', 'storagedrawers:dark_oak_trim')
	event.stonecutting('storagedrawers:dark_oak_half_drawers_2', 'storagedrawers:dark_oak_trim')
	event.stonecutting('storagedrawers:dark_oak_half_drawers_4', 'storagedrawers:dark_oak_trim')

	event.stonecutting('storagedrawers:crimson_full_drawers_1', 'storagedrawers:crimson_trim')
	event.stonecutting('storagedrawers:crimson_full_drawers_2', 'storagedrawers:crimson_trim')
	event.stonecutting('storagedrawers:crimson_full_drawers_4', 'storagedrawers:crimson_trim')
	event.stonecutting('storagedrawers:crimson_half_drawers_1', 'storagedrawers:crimson_trim')
	event.stonecutting('storagedrawers:crimson_half_drawers_2', 'storagedrawers:crimson_trim')
	event.stonecutting('storagedrawers:crimson_half_drawers_4', 'storagedrawers:crimson_trim')

	event.stonecutting('storagedrawers:warped_full_drawers_1', 'storagedrawers:warped_trim')
	event.stonecutting('storagedrawers:warped_full_drawers_2', 'storagedrawers:warped_trim')
	event.stonecutting('storagedrawers:warped_full_drawers_4', 'storagedrawers:warped_trim')
	event.stonecutting('storagedrawers:warped_half_drawers_1', 'storagedrawers:warped_trim')
	event.stonecutting('storagedrawers:warped_half_drawers_2', 'storagedrawers:warped_trim')
	event.stonecutting('storagedrawers:warped_half_drawers_4', 'storagedrawers:warped_trim')

	event.replaceInput({output:'storagedrawers:upgrade_template'},'#storagedrawers:drawers',[
			'storagedrawers:oak_trim','storagedrawers:spruce_trim','storagedrawers:birch_trim','storagedrawers:jungle_trim',
			'storagedrawers:acacia_trim','storagedrawers:dark_oak_trim','storagedrawers:crimson_trim','storagedrawers:warped_trim'])

	
	event.replaceInput({output:'storagedrawers:controller'},'#storagedrawers:drawers',[
			'storagedrawers:oak_trim','storagedrawers:spruce_trim','storagedrawers:birch_trim','storagedrawers:jungle_trim',
			'storagedrawers:acacia_trim','storagedrawers:dark_oak_trim','storagedrawers:crimson_trim','storagedrawers:warped_trim'])
	
	event.replaceInput({output:'storagedrawers:compacting_drawers_3'},'#storagedrawers:drawers',[
			'storagedrawers:oak_trim','storagedrawers:spruce_trim','storagedrawers:birch_trim','storagedrawers:jungle_trim',
			'storagedrawers:acacia_trim','storagedrawers:dark_oak_trim','storagedrawers:crimson_trim','storagedrawers:warped_trim'])
	

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
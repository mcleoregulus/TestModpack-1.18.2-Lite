// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:'ars_nouveau:apprentice_hood'})
	event.remove({id:'ars_nouveau:apprentice_robes'})
	event.remove({id:'ars_nouveau:apprentice_leggings'})
	event.remove({id:'ars_nouveau:apprentice_boots'})

	event.remove({id:'ars_nouveau:archmage_hood'})
	event.remove({id:'ars_nouveau:archmage_robes'})
	event.remove({id:'ars_nouveau:archmage_leggings'})
	event.remove({id:'ars_nouveau:archmage_boots'})

	event.recipes.createMechanicalCrafting('ars_nouveau:apprentice_hood', [
		'AAA',
		'ABA'
	], {
		A: 'ars_nouveau:blaze_fiber',
		B: 'ars_nouveau:novice_hood'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:apprentice_robes', [
		'ABA',
		'AAA',
		'AAA'
	], {
		A: 'ars_nouveau:blaze_fiber',
		B: 'ars_nouveau:novice_robes'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:apprentice_leggings', [
		'AAA',
		'ABA',
		'A A'
	], {
		A: 'ars_nouveau:blaze_fiber',
		B: 'ars_nouveau:novice_leggings'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:apprentice_boots', [
		'ABA',
		'A A'
	], {
		A: 'ars_nouveau:blaze_fiber',
		B: 'ars_nouveau:novice_boots'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:archmage_hood', [
		'AAA',
		'ABA'
	], {
		A: 'ars_nouveau:end_fiber',
		B: 'ars_nouveau:apprentice_hood'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:archmage_robes', [
		'ABA',
		'AAA',
		'AAA'
	], {
		A: 'ars_nouveau:end_fiber',
		B: 'ars_nouveau:apprentice_robes'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:archmage_leggings', [
		'AAA',
		'ABA',
		'A A'
	], {
		A: 'ars_nouveau:end_fiber',
		B: 'ars_nouveau:apprentice_leggings'
  	})

	event.recipes.createMechanicalCrafting('ars_nouveau:archmage_boots', [
		'ABA',
		'A A'
	], {
		A: 'ars_nouveau:end_fiber',
		B: 'ars_nouveau:apprentice_boots'
  	})


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:'tconstruct:smeltery/alloys/molten_brass'})
	event.remove({output:'tconstruct:seared_fuel_gauge'})
	event.remove({output:'tconstruct:seared_ingot_tank'})
	event.remove({output:'tconstruct:seared_ingot_gauge'})

	event.replaceInput({output:'tconstruct:grout'},'minecraft:gravel','#forge:gravel')
	event.replaceInput({output:'tconstruct:grout'},'#minecraft:sand','#forge:sand')
	event.replaceInput({output:'tconstruct:seared_fuel_tank'},'#forge:glass','create:fluid_tank')

	event.shaped('tconstruct:seared_fuel_gauge', [
		'ABA',
		'BCB',
		'ABA',
	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:glass',
		C: 'create:fluid_tank'
  	})

	  event.shaped('tconstruct:seared_ingot_tank', [
		'ABA',
		'ACA',
		'ABA',
	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:glass',
		C: 'create:fluid_tank'
  	})

	  event.shaped('tconstruct:seared_ingot_gauge', [
		'ABA',
		'BCB',
		'ABA',
	], {
		B: 'tconstruct:seared_brick',
		A: '#forge:glass',
		C: 'create:fluid_tank'
  	})


})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	event.get('forge:gravel').add('kubejs:deepgravel')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
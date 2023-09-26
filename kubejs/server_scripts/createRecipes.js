// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	event.remove({id:"create:crafting/materials/andesite_alloy"})
	event.remove({id:"create:crafting/materials/andesite_alloy_from_zinc"})
	event.remove({id:"create:mixing/andesite_alloy"})
	event.remove({id:"create:mixing/andesite_alloy_from_zinc"})
	event.remove({id:"create_mechanical_extruder:extruding/cobblestone"})
	event.remove({id:"create_mechanical_extruder:extruding/stone"})
	event.remove({id:'create:crafting/appliances/copper_diving_helmet'})
	event.remove({id:'create:crafting/appliances/copper_diving_boots'})
	event.remove({id:'create:crafting/appliances/copper_backtank'})
	event.remove({id:'create:crafting/appliances/netherite_diving_boots'})
	event.remove({id:'create:crafting/appliances/netherite_diving_boots_from_netherite'})
	event.remove({id:'create:crafting/appliances/netherite_diving_helmet'})
	event.remove({id:'create:crafting/appliances/netherite_diving_helmet_from_netherite'})
	event.remove({id:'create:crafting/appliances/netherite_backtank'})
	event.remove({id:'create:crafting/appliances/netherite_backtank_from_netherite'})
	event.remove({type:'createsifter:sifting'})


	// event.replaceOutput({mod:'createaddition', output:'createaddition:biomass'}, 'createaddition:biomass', '4x createaddition:biomass')

	// event.replaceInput({output:'create:empty_blaze_burner'},'minecraft:netherrack','undergarden:tremblecrust')


	event.shaped('create:andesite_alloy', [
		'AB',
		'BA',
	], {
		A: 'undergarden:cloggrum_nugget',
		B: 'undergarden:depthrock'
  	})

	event.recipes.createMechanicalCrafting('minecraft:diamond_helmet', [
		'AAA',
		'A A'
	  ], {
		A: 'minecraft:diamond'
	})

	event.recipes.createMechanicalCrafting('minecraft:diamond_chestplate', [
		'A A',
		'AAA',
		'AAA'
	  ], {
		A: 'minecraft:diamond'
	})

	event.recipes.createMechanicalCrafting('minecraft:diamond_leggings', [
		'AAA',
		'A A',
		'A A'
	  ], {
		A: 'minecraft:diamond'
	})

	event.recipes.createMechanicalCrafting('minecraft:diamond_boots', [
		'A A',
		'A A'
	  ], {
		A: 'minecraft:diamond'
	})

  	event.recipes.createMixing('create:andesite_alloy',[
		'undergarden:depthrock',
		'undergarden:cloggrum_nugget'
  	])

	  event.recipes.createMixing(Fluid.of('minecraft:lava',50),[
		'undergarden:tremblecrust',
		'undergarden:ditchbulb_paste',
		'minecraft:blaze_powder'
	])

	event.recipes.createMixing('create:brass_ingot',[
		'minecraft:copper_ingot',
		'create:zinc_ingot',
		'undergarden:ditchbulb_paste'
	])

	event.recipes.createMixing(Fluid.of('undergarden:virulent_mix_source',100),[
		Fluid.of('minecraft:water',100),
		'undergarden:ink_mushroom',
		'undergarden:blood_mushroom',
		'undergarden:veil_mushroom',
		'undergarden:indigo_mushroom'
	])

	event.recipes.createMilling('kubejs:deepgravel','undergarden:depthrock')
	event.recipes.createCrushing('kubejs:deepgravel','undergarden:depthrock')
	event.recipes.createMilling('undergarden:sediment','kubejs:deepgravel')
	event.recipes.createCrushing('undergarden:sediment','kubejs:deepgravel')

	event.recipes.createCrushing(['6x create:cinder_flour', Item.of('4x create:cinder_flour').withChance(0.75)], 'minecraft:nether_bricks')


	event.recipes.createMechanicalExtruderExtruding(Item.of('undergarden:tremblecrust'),
		[Fluid.of('minecraft:water'),Fluid.of('undergarden:virulent_mix_source')])

	event.recipes.createMechanicalExtruderExtruding(Item.of('undergarden:shiverstone'),
		[Fluid.of('minecraft:lava'),Fluid.of('undergarden:virulent_mix_source')])

	event.recipes.createMechanicalExtruderExtruding(Item.of('undergarden:depthrock'),
		[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')])
		.withCatalyst('kubejs:3x_tremblecrust')

	event.recipes.createsifterSifting([
			Item.of('minecraft:iron_nugget').withChance(0.8),
			Item.of('create:copper_nugget').withChance(0.6),
			Item.of('create:zinc_nugget').withChance(0.5),
			Item.of('minecraft:gold_nugget').withChance(0.4),
			Item.of('undergarden:depthrock_pebble').withChance(0.2),
			Item.of('minecraft:coal').withChance(0.2),
			Item.of('minecraft:quartz').withChance(0.3),
			Item.of('minecraft:flint').withChance(0.1)
		], [
			'kubejs:deepgravel','createsifter:andesite_mesh'
	]).processingTime(300)//.waterlogged()

	event.recipes.createsifterSifting([
			Item.of('minecraft:raw_iron').withChance(0.8),
			Item.of('minecraft:raw_copper').withChance(0.6),
			Item.of('create:raw_zinc').withChance(0.5),
			Item.of('minecraft:raw_gold').withChance(0.4),
			Item.of('minecraft:lapis_lazuli').withChance(0.35),
			Item.of('minecraft:coal').withChance(0.4),
			Item.of('minecraft:flint').withChance(0.2),
			Item.of('minecraft:quartz').withChance(0.25),
			Item.of('create:experience_nugget').withChance(0.3),
			Item.of('minecraft:diamond').withChance(0.05)

		], [
			'kubejs:deepgravel','createsifter:brass_mesh'
	]).processingTime(200)//.waterlogged()

	event.recipes.createsifterSifting([
			Item.of('minecraft:wheat_seeds').withChance(0.2),
			Item.of('undergarden:gloomgourd_seeds').withChance(0.2),
			Item.of('immersiveengineering:seed').withChance(0.2),
			Item.of('undergarden:ditchbulb').withChance(0.4),
			Item.of('undergarden:blisterberry').withChance(0.3),
			Item.of('undergarden:underbeans').withChance(0.4),
			Item.of('undergarden:droopvine_item').withChance(0.3),
			Item.of('undergarden:shimmerweed').withChance(0.2)
		], [
			'undergarden:deepsoil','createsifter:andesite_mesh'
	]).processingTime(300)//.waterlogged()

	event.recipes.createsifterSifting([
			Item.of('minecraft:rotten_flesh').withChance(0.6),
			Item.of('minecraft:bone').withChance(0.6),
			Item.of('minecraft:string').withChance(0.8),
			Item.of('minecraft:spider_eye').withChance(0.4),
			Item.of('minecraft:gunpowder').withChance(0.6),
			Item.of('minecraft:ender_pearl').withChance(0.3),
			Item.of('undergarden:goo_ball').withChance(0.3),
			Item.of('minecraft:blaze_rod').withChance(0.15)
		], [
			'undergarden:deepsoil','createsifter:brass_mesh'
	]).processingTime(200)//.waterlogged()

	event.recipes.createsifterSifting([
			Item.of('undergarden:glitterkelp').withChance(0.4),
			Item.of('undergarden:ink_mushroom').withChance(0.3),
			Item.of('undergarden:veil_mushroom').withChance(0.3),
			Item.of('undergarden:blood_mushroom').withChance(0.3),
			Item.of('undergarden:indigo_mushroom').withChance(0.3)
		], [
			'undergarden:deepsoil','createsifter:andesite_mesh'
	]).processingTime(300).waterlogged()

	event.recipes.createsifterSifting([
			Item.of('undergarden:glitterkelp').withChance(0.8),
			Item.of('undergarden:ink_mushroom').withChance(0.6),
			Item.of('undergarden:veil_mushroom').withChance(0.6),
			Item.of('undergarden:blood_mushroom').withChance(0.6),
			Item.of('undergarden:indigo_mushroom').withChance(0.6)
	], [
			'undergarden:deepsoil','createsifter:brass_mesh'
	]).processingTime(200).waterlogged()

	event.recipes.createsifterSifting([
			Item.of('minecraft:bone_meal').withChance(0.3),
			Item.of('minecraft:redstone').withChance(0.3),
			Item.of('minecraft:glowstone_dust').withChance(0.3),
			Item.of('minecraft:lapis_lazuli').withChance(0.2),
			Item.of('minecraft:gunpowder').withChance(0.2),
			Item.of('minecraft:blaze_powder').withChance(0.15)
		], [
			'undergarden:sediment','createsifter:andesite_mesh'
	]).processingTime(300)//.waterlogged()

	event.recipes.createsifterSifting([
			Item.of('minecraft:bone_meal').withChance(0.6),
			Item.of('minecraft:redstone').withChance(0.6),
			Item.of('minecraft:glowstone_dust').withChance(0.6),
			Item.of('minecraft:lapis_lazuli').withChance(0.4),
			Item.of('minecraft:blaze_powder').withChance(0.6)
		], [
			'undergarden:sediment','createsifter:brass_mesh'
	]).processingTime(200)//.waterlogged()

	event.recipes.createHaunting( 'minecraft:glow_berries', 'undergarden:droopvine_item')






})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
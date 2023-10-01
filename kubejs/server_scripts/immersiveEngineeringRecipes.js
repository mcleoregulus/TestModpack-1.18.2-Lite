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
	event.remove({id:'immersiveengineering:refinery/biodiesel'})

	event.replaceInput({id:'immersiveengineering:crafting/cokebrick'}, '#forge:sandstone', 'undergarden:sediment')

	event.recipes.immersiveengineeringCloche('2x undergarden:droopvine_item', 'undergarden:droopvine_item', 'undergarden:deepsoil')
	event.recipes.immersiveengineeringCloche('2x undergarden:ditchbulb', 'undergarden:ditchbulb', 'undergarden:deepsoil')

	event.remove({id:'immersiveengineering:mineral/uraninite'})

	event.custom({
		"type":"immersiveengineering:refinery",
		"result":{"fluid":"immersiveengineering:biodiesel","amount":16},
		"catalyst":{"item":"create:cinder_flour"},
		"input0":{"tag":"forge:plantoil","amount":8},
		"input1":{"tag":"forge:ethanol","amount":8},
		"energy":80
	})

	event.custom({
		"type":"immersiveengineering:mineral_mix",
		"ores":[{"chance":0.4,"output":{"item":"powah:uraninite_ore_poor"}},
				{"chance":0.3,"output":{"item":"powah:uraninite_ore"}},
				{"chance":0.2,"output":{"item":"powah:deepslate_uraninite_ore"}},
				{"chance":0.1,"output":{"item":"powah:deepslate_uraninite_ore_dense"}}],
		"spoils":[{"chance":0.5,"output":{"item":"minecraft:cobblestone"}},
				  {"chance":0.3,"output":{"item":"minecraft:cobbled_deepslate"}},
				  {"chance":0.2,"output":{"item":"minecraft:gravel"}}],
		"dimensions":["jamd:mining"],"weight":15,"fail_chance":0.15}
	)

	event.custom({
		"type":"immersiveengineering:mineral_mix",
		"ores":[{"chance":0.6,"output":{"item":"thermal:oil_sand"}},
				{"chance":0.3,"output":{"item":"thermal:oil_red_sand"}},
				{"chance":0.1,"output":{"item":"immersiveengineering:dust_sulfur"}}],
		"spoils":[{"chance":0.5,"output":{"item":"minecraft:sand"}},
				  {"chance":0.2,"output":{"item":"minecraft:sandstone"}},
				  {"chance":0.2,"output":{"item":"minecraft:red_sand"}},
				  {"chance":0.1,"output":{"item":"minecraft:red_sandstone"}},],
		"dimensions":["jamd:mining"],"weight":15,"fail_chance":0.15}
	)
	
	// event.custom({
	// 	"type":"immersiveengineering:refinery",
	// 	"result":{"fluid":"immersiveengineering:biodiesel","amount":16},
	// 	"catalyst":{"item":"create:cinder_flour"},
	// 	"input0":{"tag":"forge:plantoil","amount":8},
	// 	"input1":{"fluid":"createaddition:bioethanol","amount":8},
	// 	"energy":80
	// })


	event.recipes.immersiveengineeringCrusher('minecraft:sand', 'minecraft:stone', Item.of('minecraft:glass').withChance(0.5))

	/*immersiveengineeringAlloy

	event.recipes.immersiveengineeringAlloy(output, input1, input2)
	
	- immersiveengineeringBlastFurnace
	
	event.recipes.immersiveengineeringBlastFurnace(output, input)
	event.recipes.immersiveengineeringBlastFurnace(output, input, slag)
	
	- immersiveengineeringBlastFurnaceFuel
	
	event.recipes.immersiveengineeringBlastFurnaceFuel(input).time(300)
	
	- immersiveengineeringCokeOven
	
	event.recipes.immersiveengineeringCokeOven(output, input).creosote(250).time(900)
	
	- immersiveengineeringCloche
	
	event.recipes.immersiveengineeringCloche([outputs], input, soil)
	event.recipes.immersiveengineeringCloche([outputs], input, soil, render) // Render format: {type: 'crop', block: 'minecraft:wheat'}
	
	- immersiveengineeringFertilizer
	
	event.recipes.immersiveengineeringFertilizer(input).growthModifier(1.5)
	
	- immersiveengineeringMetalPress
	
	event.recipes.immersiveengineeringMetalPress(output, input, mold)
	
	- immersiveengineeringArcFurnace
	
	event.recipes.immersiveengineeringArcFurnace([outputs], input)
	event.recipes.immersiveengineeringArcFurnace([outputs], input, [additives])
	event.recipes.immersiveengineeringArcFurnace([outputs], input, [additives], slag)
	
	- immersiveengineeringCrusher
	
	event.recipes.immersiveengineeringCrusher(output, input)
	event.recipes.immersiveengineeringCrusher(output, input, [secondaries]) // Secondary output format: {chance: 0.5, output: 'item:id'}
	
	- immersiveengineeringSawmill
	
	 
	
	event.recipes.immersiveengineeringSawmill(output, input)
	
	event.recipes.immersiveengineeringSawmill(output, input, [secondaries]) // Secondary output format: {stripping: true, output: 'item:id'}
	
	event.recipes.immersiveengineeringSawmill(output, input, [secondaries], stripped)*/

})

onEvent('item.tags', event => {

	// event.get('forge:ethanol').add(Fluid.of('minecraft:water'))

})
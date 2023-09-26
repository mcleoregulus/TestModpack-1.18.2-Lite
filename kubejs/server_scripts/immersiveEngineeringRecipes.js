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


	event.recipes.immersiveengineeringCloche('undergarden:droopvine_item', 'undergarden:droopvine_item', 'undergarden:deepsoil')

	event.custom({
		"type":"immersiveengineering:refinery",
		"result":{"fluid":"immersiveengineering:biodiesel","amount":16},
		"catalyst":{"item":"create:cinder_flour"},
		"input0":{"tag":"forge:plantoil","amount":8},
		"input1":{"tag":"forge:ethanol","amount":8},
		"energy":80
	})

	
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
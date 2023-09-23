// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')


onEvent('block.registry', event => {
	// Register new blocks here

	// event.create('red_block1').material('rock').hardness(2.0).displayName('Bloody Block 1')
	// event.create('red_block2').material('rock').hardness(2.0).displayName('Bloody Block 2')
	// event.create('red_block3').material('rock').hardness(2.0).displayName('Bloody Block 3')

	event.create('deepgravel').material('clay').hardness(0.6)
		 .tagBlock('minecraft:mineable/shovel')
		 .displayName('渊邃砂砾')

	event.create('1x_tremblecrust').material('stone').hardness(5.0)
		 .tagBlock('minecraft:mineable/pickaxe')
		 .tagBlock('minecraft:needs_iron_tool')
		 .requiresTool(true).displayName('一重压缩颤动地壳')

	event.create('2x_tremblecrust').material('stone').hardness(7.0)
		 .tagBlock('minecraft:mineable/pickaxe')
		 .tagBlock('minecraft:needs_iron_tool')
		 .requiresTool(true).displayName('二重压缩颤动地壳')

	event.create('3x_tremblecrust').material('stone').hardness(9.0)
		 .tagBlock('minecraft:mineable/pickaxe')
		 .tagBlock('minecraft:needs_iron_tool')
		 .requiresTool(true).displayName('三重压缩颤动地壳')


})
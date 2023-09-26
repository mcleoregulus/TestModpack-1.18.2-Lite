// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here

	event.create('example_item').displayName('Item').burnTime(100)
	event.create('soul_shard').displayName('灵魂碎片').unstackable()


})
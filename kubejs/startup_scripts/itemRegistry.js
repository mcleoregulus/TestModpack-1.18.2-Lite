// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here

	event.create('example_item').displayName('Item').burnTime(100)
	event.create('soul_shard').displayName('灵魂碎片').unstackable()
	event.create('rubber_hand').displayName('橡胶手部零件')

})

onEvent('fluid.registry', event => {

    event.create("congestion").displayName("淤血")
		 .color(0x8A0000).bucketColor(0x8A0000).textureThin(0x8A0000).density(1000).viscosity(1000);

})
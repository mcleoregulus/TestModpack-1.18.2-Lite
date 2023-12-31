// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')


onEvent('item.modification', event => {

	// event.modify('minecraft:netherite_sword', item => {
	// item.attackDamage = 20
	// item.attackSpeed = 2})

	event.modify('botania:blaze_block', item => {item.burnTime = 3200})

	event.modify('chainmail_helmet', item => {item.armorProtection = 1})
	event.modify('chainmail_chestplate', item => {item.armorProtection = 2})
	event.modify('chainmail_leggings', item => {item.armorProtection = 2})
	event.modify('chainmail_boots', item => {item.armorProtection = 1})

	event.modify('leather_helmet', item => {item.armorProtection = 0.5})
	event.modify('leather_chestplate', item => {item.armorProtection = 1})
	event.modify('leather_leggings', item => {item.armorProtection = 1})
	event.modify('leather_boots', item => {item.armorProtection = 0.5})

	event.modify('iron_helmet', item => {item.armorProtection = 1})
	event.modify('iron_chestplate', item => {item.armorProtection = 3})
	event.modify('iron_leggings', item => {item.armorProtection = 2})
	event.modify('iron_boots', item => {item.armorProtection = 1})

	event.modify('golden_helmet', item => {item.armorProtection = 1})
	event.modify('golden_chestplate', item => {item.armorProtection = 2})
	event.modify('golden_leggings', item => {item.armorProtection = 1})
	event.modify('golden_boots', item => {item.armorProtection = 1})

	event.modify('diamond_helmet', item => {item.armorProtection = 2, item.armorToughness = 1})
	event.modify('diamond_chestplate', item => {item.armorProtection = 4, item.armorToughness = 1})
	event.modify('diamond_leggings', item => {item.armorProtection = 3, item.armorToughness = 1})
	event.modify('diamond_boots', item => {item.armorProtection = 1, item.armorToughness = 1})

	event.modify('netherite_helmet', item => {item.armorProtection = 2, item.armorToughness = 1, item.armorKnockbackResistance = 0.05})
	event.modify('netherite_chestplate', item => {item.armorProtection = 5, item.armorToughness = 1, item.armorKnockbackResistance = 0.05})
	event.modify('netherite_leggings', item => {item.armorProtection = 3, item.armorToughness = 1, item.armorKnockbackResistance = 0.05})
	event.modify('netherite_boots', item => {item.armorProtection = 1, item.armorToughness = 1, item.armorKnockbackResistance = 0.05})

	event.modify('minecraft:wooden_sword', item => {item.attackDamage = 2, item.attackSpeed = 1.6})
	event.modify('minecraft:stone_sword', item => {item.attackDamage = 2.5, item.attackSpeed = 1.6})
	event.modify('minecraft:iron_sword', item => {item.attackDamage = 3, item.attackSpeed = 1.6})
	event.modify('minecraft:golden_sword', item => {item.attackDamage = 2, item.attackSpeed = 1.6})
	event.modify('minecraft:diamond_sword', item => {item.attackDamage = 3.5, item.attackSpeed = 1.6})
	event.modify('minecraft:netherite_sword', item => {item.attackDamage = 4, item.attackSpeed = 1.6})

	event.modify('minecraft:wooden_axe', item => {item.attackDamage = 3.5, item.attackSpeed = 0.8})
	event.modify('minecraft:stone_axe', item => {item.attackDamage = 4.5, item.attackSpeed = 0.8})
	event.modify('minecraft:iron_axe', item => {item.attackDamage = 4.5, item.attackSpeed = 0.9})
	event.modify('minecraft:golden_axe', item => {item.attackDamage = 3.5, item.attackSpeed = 1.0})
	event.modify('minecraft:diamond_axe', item => {item.attackDamage = 4.5, item.attackSpeed = 1.0})
	event.modify('minecraft:netherite_axe', item => {item.attackDamage = 5, item.attackSpeed = 1.0})

	event.modify('minecraft:wooden_shovel', item => {item.attackDamage = 1.5, item.attackSpeed = 1.0})
	event.modify('minecraft:stone_shovel', item => {item.attackDamage = 2, item.attackSpeed = 1.0})
	event.modify('minecraft:golden_shovel', item => {item.attackDamage = 1.5, item.attackSpeed = 1.0})
	event.modify('minecraft:iron_shovel', item => {item.attackDamage = 2.5, item.attackSpeed = 1.0})
	event.modify('minecraft:diamond_shovel', item => {item.attackDamage = 3, item.attackSpeed = 1.0})
	event.modify('minecraft:netherite_shovel', item => {item.attackDamage = 3.5, item.attackSpeed = 1.0})

	event.modify('minecraft:wooden_pickaxe', item => {item.attackDamage = 1, item.attackSpeed = 1.2})
	event.modify('minecraft:stone_pickaxe', item => {item.attackDamage = 1.5, item.attackSpeed = 1.2})
	event.modify('minecraft:golden_pickaxe', item => {item.attackDamage = 1, item.attackSpeed = 1.2})
	event.modify('minecraft:iron_pickaxe', item => {item.attackDamage = 2, item.attackSpeed = 1.2})
	event.modify('minecraft:diamond_pickaxe', item => {item.attackDamage = 2.5, item.attackSpeed = 1.2})
	event.modify('minecraft:netherite_pickaxe', item => {item.attackDamage = 3, item.attackSpeed = 1.2})

	event.modify('minecraft:wooden_hoe', item => {item.attackDamage = 1, item.attackSpeed = 1})
	event.modify('minecraft:stone_hoe', item => {item.attackDamage = 1, item.attackSpeed = 1.5})
	event.modify('minecraft:golden_hoe', item => {item.attackDamage = 1, item.attackSpeed = 1})
	event.modify('minecraft:iron_hoe', item => {item.attackDamage = 1, item.attackSpeed = 2})
	event.modify('minecraft:diamond_hoe', item => {item.attackDamage = 1, item.attackSpeed = 3})
	event.modify('minecraft:netherite_hoe', item => {item.attackDamage = 1, item.attackSpeed = 3})




})
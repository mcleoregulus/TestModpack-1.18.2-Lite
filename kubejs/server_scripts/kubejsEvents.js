// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('block.right_click', event => {


    if (event.block == 'undergarden:sediment' && event.player.mainHandItem.id == 'kubejs:soul_shard') {
        event.server.runCommandSilent(
            `execute at ${event.player} run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:soul_sand`)
    }
})

// onEvent('block.break', event => {
//     event.cancel()
// })
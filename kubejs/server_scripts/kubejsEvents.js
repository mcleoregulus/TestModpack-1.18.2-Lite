// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('block.right_click', event => {

    // if (event.block == 'undergarden:sediment' && event.player.mainHandItem.id == 'kubejs:soul_shard'){
    //     event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:sand`)
    // }

    if (event.block == 'undergarden:sediment' && event.player.mainHandItem.id == "kubejs:soul_shard") {
        event.server.runCommandSilent(`give ${event.player} soul_sand`)
        event.server.runCommandSilent(`setblock ${event.player.x} ${event.player.y}^-1 ${event.player.z} minecraft:soul_sand`)
    }
})

// onEvent('block.break', event => {
//     event.cancel()
// })
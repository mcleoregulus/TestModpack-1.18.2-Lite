// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('worldgen.add', event => {
    const {anchors} = event

    event.addOre((ore) => {
        ore.id = "kubejs:mining_magma"
        ore.biomes = "mining_dimension:mining"

        ore.addTarget('minecraft:deepslate', 'minecraft:magma_block')

        ore.count([40,60])
                .squared()
                .triangleHeight(
                        anchors.aboveBottom(-32),
                        anchors.absolute(-32)
                )
        ore.size = 3
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
    })

    event.addOre((ore) => {
        ore.id = "kubejs:mining_coal"
        ore.biomes = "mining_dimension:mining"

        ore.addTarget('minecraft:deepslate', 'minecraft:coal_block')

        ore.count([30,40])
                .squared()
                .triangleHeight(
                        anchors.aboveBottom(0),
                        anchors.absolute(0)
                )
        ore.size = 3
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
    })

    event.addOre((ore) => {
        ore.id = "kubejs:mining_snow"
        ore.biomes = "mining_dimension:mining"

        ore.addTarget('minecraft:stone_ore_replaceables', 'minecraft:snow_block')

        ore.count([20,30])
                .squared()
                .triangleHeight(
                        anchors.aboveBottom(192),
                        anchors.absolute(192)
                )
        ore.size = 3
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
    })

    event.addOre((ore) => {
        ore.id = "kubejs:mining_ice1"
        ore.biomes = "mining_dimension:mining"

        ore.addTarget('minecraft:stone_ore_replaceables', 'minecraft:packed_ice')

        ore.count([30,40])
                .squared()
                .triangleHeight(
                        anchors.aboveBottom(256),
                        anchors.absolute(256)
                )
        ore.size = 3
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
    })

    event.addOre((ore) => {
        ore.id = "kubejs:mining_ice2"
        ore.biomes = "mining_dimension:mining"

        ore.addTarget('minecraft:stone_ore_replaceables', 'minecraft:blue_ice')

        ore.count([20,30])
                .squared()
                .triangleHeight(
                        anchors.aboveBottom(320),
                        anchors.absolute(320)
                )
        ore.size = 3
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
    })

    event.addOre((ore) => {
        ore.id = "kubejs:mining_ice3"
        ore.biomes = "mining_dimension:mining"

        ore.addTarget('minecraft:stone_ore_replaceables', 'powah:dry_ice')

        ore.count([40,60])
                .squared()
                .triangleHeight(
                        anchors.aboveBottom(350),
                        anchors.absolute(350)
                )
        ore.size = 4
        ore.worldgenLayer = "underground_ores"
        ore.chance = 0
    })

    event.addOre((ore) => {
        ore.id = "kubejs:mining_glowstone" // 指定当前结构的ID（可选，但推荐指定）
        ore.biomes = "mining_dimension:mining" // 群系过滤器（可选）

        // 添加目标示例
        ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:glowstone') // 将目标（#minecraft:stone_ore_replaceables标签下的方块）替换为minecraft:glowstone

        ore.count([30,40])                      // 设置矿簇的大小（15~50中随机选择），在此处你可以使用单个数字来生成固定数量的方块。
                .squared()                       // 设置跨区块生成矿石
                .uniformHeight(                 // （高度提供器）使用Triangular分布模式生成矿石（具体见上文）
                        anchors.aboveBottom(64), // 下边界锚，在世界最低高度（Y=-64）以上32格（即Y=-32）
                        anchors.absolute(128)     // 上边界锚，固定高度（Y = 96）
                )                                 // 总的来说，矿石可能在Y = -32 ~ 96范围内生成，概率最大高度为Y = (-32 + 96) / 2 = 32

        // 更多可选的参数，以下均为默认值
        ore.size = 3                            // 最大矿簇大小
        ore.noSurface = 0.5                     // 暴露于空气中的概率
        ore.worldgenLayer = "underground_ores"  // 矿石生成于世界生成中的阶段
          ore.chance = 0                            // 当该选项不为0且ore.count未被设置矿石将有1/n的概率在每个区块中生成
    })

    // 添加湖
    // 该功能将要于原版中废弃
    // event.addLake((lake) => {
    //     lake.id = "kubejs:funny_lake" // BlockStatePredicate
    //     lake.chance = 4
    //     lake.fluid = "minecraft:lava"
    //     lake.barrier = "minecraft:diamond_block"
    // })
})

onEvent('worldgen.remove', event => {
        event.removeFeatureById(id = "minecraft:stronghold")
})

onEvent('worldgen.add', event => {
        event.addFeatureJson((structure) => {
                structure.id = "kubejs:test"
                structure.biomes = "javd:void"

        })
})

// onEvent('worldgen.remove', event => {
//     console.info("HELP")
//     //console.debugEnabled = true;

//     // 打印给定群系过滤器中的所有结构
//     event.printFeatures('', 'minecraft:plains')

//     event.removeOres((props) => {
//         // 类似于添加矿石，移除矿石同样支持使用世界生成阶段
//         props.worldgenLayer = 'underground_ores'
//         // 使用群系过滤
//         props.biomes = [{
//             category: "icy",
//         }, {
//             category: "savanna",
//         }, {
//             category: "mesa",
//         }];

//         // 在上述给定的群系中移除铁矿和铜矿
//         // 注：此处无法使用标签
//         props.blocks = ["minecraft:iron_ore", "minecraft:copper_ore"]
//     })

//     // 通过指定ID来移除结构（第一个参数为生成步骤）
//     event.removeFeatureById('underground_ores', ['minecraft:ore_coal_upper', 'minecraft:ore_coal_lower'])
// })
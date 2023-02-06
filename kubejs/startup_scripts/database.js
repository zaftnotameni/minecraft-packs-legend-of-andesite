// priority: 10001

// const allItemIds = Ingredient.all.itemIds;
// 

const myFactory = () => {
  return /Ids\[(.*)\]/.exec(itemIds)[1].split(', ').reduce((a, v) => {
    const parts = v.split(':');
    let current = a;
    parts.forEach((part) => {
      current[part] = current[part] || { id: v };
      current = current[part];
    });
    return a;
  }, {});
};

const my = {
  "minecraft": {
    "id": "minecraft:stone",
    "stone": {
      "id": "minecraft:stone"
    },
    "granite": {
      "id": "minecraft:granite"
    },
    "polished_granite": {
      "id": "minecraft:polished_granite"
    },
    "diorite": {
      "id": "minecraft:diorite"
    },
    "polished_diorite": {
      "id": "minecraft:polished_diorite"
    },
    "andesite": {
      "id": "minecraft:andesite"
    },
    "polished_andesite": {
      "id": "minecraft:polished_andesite"
    },
    "deepslate": {
      "id": "minecraft:deepslate"
    },
    "cobbled_deepslate": {
      "id": "minecraft:cobbled_deepslate"
    },
    "polished_deepslate": {
      "id": "minecraft:polished_deepslate"
    },
    "calcite": {
      "id": "minecraft:calcite"
    },
    "tuff": {
      "id": "minecraft:tuff"
    },
    "dripstone_block": {
      "id": "minecraft:dripstone_block"
    },
    "grass_block": {
      "id": "minecraft:grass_block"
    },
    "dirt": {
      "id": "minecraft:dirt"
    },
    "coarse_dirt": {
      "id": "minecraft:coarse_dirt"
    },
    "podzol": {
      "id": "minecraft:podzol"
    },
    "rooted_dirt": {
      "id": "minecraft:rooted_dirt"
    },
    "mud": {
      "id": "minecraft:mud"
    },
    "crimson_nylium": {
      "id": "minecraft:crimson_nylium"
    },
    "warped_nylium": {
      "id": "minecraft:warped_nylium"
    },
    "cobblestone": {
      "id": "minecraft:cobblestone"
    },
    "oak_planks": {
      "id": "minecraft:oak_planks"
    },
    "spruce_planks": {
      "id": "minecraft:spruce_planks"
    },
    "birch_planks": {
      "id": "minecraft:birch_planks"
    },
    "jungle_planks": {
      "id": "minecraft:jungle_planks"
    },
    "acacia_planks": {
      "id": "minecraft:acacia_planks"
    },
    "dark_oak_planks": {
      "id": "minecraft:dark_oak_planks"
    },
    "mangrove_planks": {
      "id": "minecraft:mangrove_planks"
    },
    "crimson_planks": {
      "id": "minecraft:crimson_planks"
    },
    "warped_planks": {
      "id": "minecraft:warped_planks"
    },
    "oak_sapling": {
      "id": "minecraft:oak_sapling"
    },
    "spruce_sapling": {
      "id": "minecraft:spruce_sapling"
    },
    "birch_sapling": {
      "id": "minecraft:birch_sapling"
    },
    "jungle_sapling": {
      "id": "minecraft:jungle_sapling"
    },
    "acacia_sapling": {
      "id": "minecraft:acacia_sapling"
    },
    "dark_oak_sapling": {
      "id": "minecraft:dark_oak_sapling"
    },
    "mangrove_propagule": {
      "id": "minecraft:mangrove_propagule"
    },
    "bedrock": {
      "id": "minecraft:bedrock"
    },
    "sand": {
      "id": "minecraft:sand"
    },
    "red_sand": {
      "id": "minecraft:red_sand"
    },
    "gravel": {
      "id": "minecraft:gravel"
    },
    "coal_ore": {
      "id": "minecraft:coal_ore"
    },
    "deepslate_coal_ore": {
      "id": "minecraft:deepslate_coal_ore"
    },
    "iron_ore": {
      "id": "minecraft:iron_ore"
    },
    "deepslate_iron_ore": {
      "id": "minecraft:deepslate_iron_ore"
    },
    "copper_ore": {
      "id": "minecraft:copper_ore"
    },
    "deepslate_copper_ore": {
      "id": "minecraft:deepslate_copper_ore"
    },
    "gold_ore": {
      "id": "minecraft:gold_ore"
    },
    "deepslate_gold_ore": {
      "id": "minecraft:deepslate_gold_ore"
    },
    "redstone_ore": {
      "id": "minecraft:redstone_ore"
    },
    "deepslate_redstone_ore": {
      "id": "minecraft:deepslate_redstone_ore"
    },
    "emerald_ore": {
      "id": "minecraft:emerald_ore"
    },
    "deepslate_emerald_ore": {
      "id": "minecraft:deepslate_emerald_ore"
    },
    "lapis_ore": {
      "id": "minecraft:lapis_ore"
    },
    "deepslate_lapis_ore": {
      "id": "minecraft:deepslate_lapis_ore"
    },
    "diamond_ore": {
      "id": "minecraft:diamond_ore"
    },
    "deepslate_diamond_ore": {
      "id": "minecraft:deepslate_diamond_ore"
    },
    "nether_gold_ore": {
      "id": "minecraft:nether_gold_ore"
    },
    "nether_quartz_ore": {
      "id": "minecraft:nether_quartz_ore"
    },
    "ancient_debris": {
      "id": "minecraft:ancient_debris"
    },
    "coal_block": {
      "id": "minecraft:coal_block"
    },
    "raw_iron_block": {
      "id": "minecraft:raw_iron_block"
    },
    "raw_copper_block": {
      "id": "minecraft:raw_copper_block"
    },
    "raw_gold_block": {
      "id": "minecraft:raw_gold_block"
    },
    "amethyst_block": {
      "id": "minecraft:amethyst_block"
    },
    "budding_amethyst": {
      "id": "minecraft:budding_amethyst"
    },
    "iron_block": {
      "id": "minecraft:iron_block"
    },
    "copper_block": {
      "id": "minecraft:copper_block"
    },
    "gold_block": {
      "id": "minecraft:gold_block"
    },
    "diamond_block": {
      "id": "minecraft:diamond_block"
    },
    "netherite_block": {
      "id": "minecraft:netherite_block"
    },
    "exposed_copper": {
      "id": "minecraft:exposed_copper"
    },
    "weathered_copper": {
      "id": "minecraft:weathered_copper"
    },
    "oxidized_copper": {
      "id": "minecraft:oxidized_copper"
    },
    "cut_copper": {
      "id": "minecraft:cut_copper"
    },
    "exposed_cut_copper": {
      "id": "minecraft:exposed_cut_copper"
    },
    "weathered_cut_copper": {
      "id": "minecraft:weathered_cut_copper"
    },
    "oxidized_cut_copper": {
      "id": "minecraft:oxidized_cut_copper"
    },
    "cut_copper_stairs": {
      "id": "minecraft:cut_copper_stairs"
    },
    "exposed_cut_copper_stairs": {
      "id": "minecraft:exposed_cut_copper_stairs"
    },
    "weathered_cut_copper_stairs": {
      "id": "minecraft:weathered_cut_copper_stairs"
    },
    "oxidized_cut_copper_stairs": {
      "id": "minecraft:oxidized_cut_copper_stairs"
    },
    "cut_copper_slab": {
      "id": "minecraft:cut_copper_slab"
    },
    "exposed_cut_copper_slab": {
      "id": "minecraft:exposed_cut_copper_slab"
    },
    "weathered_cut_copper_slab": {
      "id": "minecraft:weathered_cut_copper_slab"
    },
    "oxidized_cut_copper_slab": {
      "id": "minecraft:oxidized_cut_copper_slab"
    },
    "waxed_copper_block": {
      "id": "minecraft:waxed_copper_block"
    },
    "waxed_exposed_copper": {
      "id": "minecraft:waxed_exposed_copper"
    },
    "waxed_weathered_copper": {
      "id": "minecraft:waxed_weathered_copper"
    },
    "waxed_oxidized_copper": {
      "id": "minecraft:waxed_oxidized_copper"
    },
    "waxed_cut_copper": {
      "id": "minecraft:waxed_cut_copper"
    },
    "waxed_exposed_cut_copper": {
      "id": "minecraft:waxed_exposed_cut_copper"
    },
    "waxed_weathered_cut_copper": {
      "id": "minecraft:waxed_weathered_cut_copper"
    },
    "waxed_oxidized_cut_copper": {
      "id": "minecraft:waxed_oxidized_cut_copper"
    },
    "waxed_cut_copper_stairs": {
      "id": "minecraft:waxed_cut_copper_stairs"
    },
    "waxed_exposed_cut_copper_stairs": {
      "id": "minecraft:waxed_exposed_cut_copper_stairs"
    },
    "waxed_weathered_cut_copper_stairs": {
      "id": "minecraft:waxed_weathered_cut_copper_stairs"
    },
    "waxed_oxidized_cut_copper_stairs": {
      "id": "minecraft:waxed_oxidized_cut_copper_stairs"
    },
    "waxed_cut_copper_slab": {
      "id": "minecraft:waxed_cut_copper_slab"
    },
    "waxed_exposed_cut_copper_slab": {
      "id": "minecraft:waxed_exposed_cut_copper_slab"
    },
    "waxed_weathered_cut_copper_slab": {
      "id": "minecraft:waxed_weathered_cut_copper_slab"
    },
    "waxed_oxidized_cut_copper_slab": {
      "id": "minecraft:waxed_oxidized_cut_copper_slab"
    },
    "oak_log": {
      "id": "minecraft:oak_log"
    },
    "spruce_log": {
      "id": "minecraft:spruce_log"
    },
    "birch_log": {
      "id": "minecraft:birch_log"
    },
    "jungle_log": {
      "id": "minecraft:jungle_log"
    },
    "acacia_log": {
      "id": "minecraft:acacia_log"
    },
    "dark_oak_log": {
      "id": "minecraft:dark_oak_log"
    },
    "mangrove_log": {
      "id": "minecraft:mangrove_log"
    },
    "mangrove_roots": {
      "id": "minecraft:mangrove_roots"
    },
    "muddy_mangrove_roots": {
      "id": "minecraft:muddy_mangrove_roots"
    },
    "crimson_stem": {
      "id": "minecraft:crimson_stem"
    },
    "warped_stem": {
      "id": "minecraft:warped_stem"
    },
    "stripped_oak_log": {
      "id": "minecraft:stripped_oak_log"
    },
    "stripped_spruce_log": {
      "id": "minecraft:stripped_spruce_log"
    },
    "stripped_birch_log": {
      "id": "minecraft:stripped_birch_log"
    },
    "stripped_jungle_log": {
      "id": "minecraft:stripped_jungle_log"
    },
    "stripped_acacia_log": {
      "id": "minecraft:stripped_acacia_log"
    },
    "stripped_dark_oak_log": {
      "id": "minecraft:stripped_dark_oak_log"
    },
    "stripped_mangrove_log": {
      "id": "minecraft:stripped_mangrove_log"
    },
    "stripped_crimson_stem": {
      "id": "minecraft:stripped_crimson_stem"
    },
    "stripped_warped_stem": {
      "id": "minecraft:stripped_warped_stem"
    },
    "stripped_oak_wood": {
      "id": "minecraft:stripped_oak_wood"
    },
    "stripped_spruce_wood": {
      "id": "minecraft:stripped_spruce_wood"
    },
    "stripped_birch_wood": {
      "id": "minecraft:stripped_birch_wood"
    },
    "stripped_jungle_wood": {
      "id": "minecraft:stripped_jungle_wood"
    },
    "stripped_acacia_wood": {
      "id": "minecraft:stripped_acacia_wood"
    },
    "stripped_dark_oak_wood": {
      "id": "minecraft:stripped_dark_oak_wood"
    },
    "stripped_mangrove_wood": {
      "id": "minecraft:stripped_mangrove_wood"
    },
    "stripped_crimson_hyphae": {
      "id": "minecraft:stripped_crimson_hyphae"
    },
    "stripped_warped_hyphae": {
      "id": "minecraft:stripped_warped_hyphae"
    },
    "oak_wood": {
      "id": "minecraft:oak_wood"
    },
    "spruce_wood": {
      "id": "minecraft:spruce_wood"
    },
    "birch_wood": {
      "id": "minecraft:birch_wood"
    },
    "jungle_wood": {
      "id": "minecraft:jungle_wood"
    },
    "acacia_wood": {
      "id": "minecraft:acacia_wood"
    },
    "dark_oak_wood": {
      "id": "minecraft:dark_oak_wood"
    },
    "mangrove_wood": {
      "id": "minecraft:mangrove_wood"
    },
    "crimson_hyphae": {
      "id": "minecraft:crimson_hyphae"
    },
    "warped_hyphae": {
      "id": "minecraft:warped_hyphae"
    },
    "oak_leaves": {
      "id": "minecraft:oak_leaves"
    },
    "spruce_leaves": {
      "id": "minecraft:spruce_leaves"
    },
    "birch_leaves": {
      "id": "minecraft:birch_leaves"
    },
    "jungle_leaves": {
      "id": "minecraft:jungle_leaves"
    },
    "acacia_leaves": {
      "id": "minecraft:acacia_leaves"
    },
    "dark_oak_leaves": {
      "id": "minecraft:dark_oak_leaves"
    },
    "mangrove_leaves": {
      "id": "minecraft:mangrove_leaves"
    },
    "azalea_leaves": {
      "id": "minecraft:azalea_leaves"
    },
    "flowering_azalea_leaves": {
      "id": "minecraft:flowering_azalea_leaves"
    },
    "sponge": {
      "id": "minecraft:sponge"
    },
    "wet_sponge": {
      "id": "minecraft:wet_sponge"
    },
    "glass": {
      "id": "minecraft:glass"
    },
    "tinted_glass": {
      "id": "minecraft:tinted_glass"
    },
    "lapis_block": {
      "id": "minecraft:lapis_block"
    },
    "sandstone": {
      "id": "minecraft:sandstone"
    },
    "chiseled_sandstone": {
      "id": "minecraft:chiseled_sandstone"
    },
    "cut_sandstone": {
      "id": "minecraft:cut_sandstone"
    },
    "cobweb": {
      "id": "minecraft:cobweb"
    },
    "grass": {
      "id": "minecraft:grass"
    },
    "fern": {
      "id": "minecraft:fern"
    },
    "azalea": {
      "id": "minecraft:azalea"
    },
    "flowering_azalea": {
      "id": "minecraft:flowering_azalea"
    },
    "dead_bush": {
      "id": "minecraft:dead_bush"
    },
    "seagrass": {
      "id": "minecraft:seagrass"
    },
    "sea_pickle": {
      "id": "minecraft:sea_pickle"
    },
    "white_wool": {
      "id": "minecraft:white_wool"
    },
    "orange_wool": {
      "id": "minecraft:orange_wool"
    },
    "magenta_wool": {
      "id": "minecraft:magenta_wool"
    },
    "light_blue_wool": {
      "id": "minecraft:light_blue_wool"
    },
    "yellow_wool": {
      "id": "minecraft:yellow_wool"
    },
    "lime_wool": {
      "id": "minecraft:lime_wool"
    },
    "pink_wool": {
      "id": "minecraft:pink_wool"
    },
    "gray_wool": {
      "id": "minecraft:gray_wool"
    },
    "light_gray_wool": {
      "id": "minecraft:light_gray_wool"
    },
    "cyan_wool": {
      "id": "minecraft:cyan_wool"
    },
    "purple_wool": {
      "id": "minecraft:purple_wool"
    },
    "blue_wool": {
      "id": "minecraft:blue_wool"
    },
    "brown_wool": {
      "id": "minecraft:brown_wool"
    },
    "green_wool": {
      "id": "minecraft:green_wool"
    },
    "red_wool": {
      "id": "minecraft:red_wool"
    },
    "black_wool": {
      "id": "minecraft:black_wool"
    },
    "dandelion": {
      "id": "minecraft:dandelion"
    },
    "poppy": {
      "id": "minecraft:poppy"
    },
    "blue_orchid": {
      "id": "minecraft:blue_orchid"
    },
    "allium": {
      "id": "minecraft:allium"
    },
    "azure_bluet": {
      "id": "minecraft:azure_bluet"
    },
    "red_tulip": {
      "id": "minecraft:red_tulip"
    },
    "orange_tulip": {
      "id": "minecraft:orange_tulip"
    },
    "white_tulip": {
      "id": "minecraft:white_tulip"
    },
    "pink_tulip": {
      "id": "minecraft:pink_tulip"
    },
    "oxeye_daisy": {
      "id": "minecraft:oxeye_daisy"
    },
    "cornflower": {
      "id": "minecraft:cornflower"
    },
    "lily_of_the_valley": {
      "id": "minecraft:lily_of_the_valley"
    },
    "wither_rose": {
      "id": "minecraft:wither_rose"
    },
    "spore_blossom": {
      "id": "minecraft:spore_blossom"
    },
    "brown_mushroom": {
      "id": "minecraft:brown_mushroom"
    },
    "red_mushroom": {
      "id": "minecraft:red_mushroom"
    },
    "crimson_fungus": {
      "id": "minecraft:crimson_fungus"
    },
    "warped_fungus": {
      "id": "minecraft:warped_fungus"
    },
    "crimson_roots": {
      "id": "minecraft:crimson_roots"
    },
    "warped_roots": {
      "id": "minecraft:warped_roots"
    },
    "nether_sprouts": {
      "id": "minecraft:nether_sprouts"
    },
    "weeping_vines": {
      "id": "minecraft:weeping_vines"
    },
    "twisting_vines": {
      "id": "minecraft:twisting_vines"
    },
    "sugar_cane": {
      "id": "minecraft:sugar_cane"
    },
    "kelp": {
      "id": "minecraft:kelp"
    },
    "moss_carpet": {
      "id": "minecraft:moss_carpet"
    },
    "moss_block": {
      "id": "minecraft:moss_block"
    },
    "hanging_roots": {
      "id": "minecraft:hanging_roots"
    },
    "big_dripleaf": {
      "id": "minecraft:big_dripleaf"
    },
    "small_dripleaf": {
      "id": "minecraft:small_dripleaf"
    },
    "bamboo": {
      "id": "minecraft:bamboo"
    },
    "oak_slab": {
      "id": "minecraft:oak_slab"
    },
    "spruce_slab": {
      "id": "minecraft:spruce_slab"
    },
    "birch_slab": {
      "id": "minecraft:birch_slab"
    },
    "jungle_slab": {
      "id": "minecraft:jungle_slab"
    },
    "acacia_slab": {
      "id": "minecraft:acacia_slab"
    },
    "dark_oak_slab": {
      "id": "minecraft:dark_oak_slab"
    },
    "mangrove_slab": {
      "id": "minecraft:mangrove_slab"
    },
    "crimson_slab": {
      "id": "minecraft:crimson_slab"
    },
    "warped_slab": {
      "id": "minecraft:warped_slab"
    },
    "stone_slab": {
      "id": "minecraft:stone_slab"
    },
    "smooth_stone_slab": {
      "id": "minecraft:smooth_stone_slab"
    },
    "sandstone_slab": {
      "id": "minecraft:sandstone_slab"
    },
    "cut_sandstone_slab": {
      "id": "minecraft:cut_sandstone_slab"
    },
    "petrified_oak_slab": {
      "id": "minecraft:petrified_oak_slab"
    },
    "cobblestone_slab": {
      "id": "minecraft:cobblestone_slab"
    },
    "brick_slab": {
      "id": "minecraft:brick_slab"
    },
    "stone_brick_slab": {
      "id": "minecraft:stone_brick_slab"
    },
    "mud_brick_slab": {
      "id": "minecraft:mud_brick_slab"
    },
    "nether_brick_slab": {
      "id": "minecraft:nether_brick_slab"
    },
    "quartz_slab": {
      "id": "minecraft:quartz_slab"
    },
    "red_sandstone_slab": {
      "id": "minecraft:red_sandstone_slab"
    },
    "cut_red_sandstone_slab": {
      "id": "minecraft:cut_red_sandstone_slab"
    },
    "purpur_slab": {
      "id": "minecraft:purpur_slab"
    },
    "prismarine_slab": {
      "id": "minecraft:prismarine_slab"
    },
    "prismarine_brick_slab": {
      "id": "minecraft:prismarine_brick_slab"
    },
    "dark_prismarine_slab": {
      "id": "minecraft:dark_prismarine_slab"
    },
    "smooth_quartz": {
      "id": "minecraft:smooth_quartz"
    },
    "smooth_red_sandstone": {
      "id": "minecraft:smooth_red_sandstone"
    },
    "smooth_sandstone": {
      "id": "minecraft:smooth_sandstone"
    },
    "smooth_stone": {
      "id": "minecraft:smooth_stone"
    },
    "bricks": {
      "id": "minecraft:bricks"
    },
    "bookshelf": {
      "id": "minecraft:bookshelf"
    },
    "mossy_cobblestone": {
      "id": "minecraft:mossy_cobblestone"
    },
    "obsidian": {
      "id": "minecraft:obsidian"
    },
    "torch": {
      "id": "minecraft:torch"
    },
    "end_rod": {
      "id": "minecraft:end_rod"
    },
    "chorus_plant": {
      "id": "minecraft:chorus_plant"
    },
    "chorus_flower": {
      "id": "minecraft:chorus_flower"
    },
    "purpur_block": {
      "id": "minecraft:purpur_block"
    },
    "purpur_pillar": {
      "id": "minecraft:purpur_pillar"
    },
    "purpur_stairs": {
      "id": "minecraft:purpur_stairs"
    },
    "chest": {
      "id": "minecraft:chest"
    },
    "crafting_table": {
      "id": "minecraft:crafting_table"
    },
    "farmland": {
      "id": "minecraft:farmland"
    },
    "furnace": {
      "id": "minecraft:furnace"
    },
    "ladder": {
      "id": "minecraft:ladder"
    },
    "cobblestone_stairs": {
      "id": "minecraft:cobblestone_stairs"
    },
    "snow": {
      "id": "minecraft:snow"
    },
    "ice": {
      "id": "minecraft:ice"
    },
    "snow_block": {
      "id": "minecraft:snow_block"
    },
    "cactus": {
      "id": "minecraft:cactus"
    },
    "clay": {
      "id": "minecraft:clay"
    },
    "jukebox": {
      "id": "minecraft:jukebox"
    },
    "oak_fence": {
      "id": "minecraft:oak_fence"
    },
    "spruce_fence": {
      "id": "minecraft:spruce_fence"
    },
    "birch_fence": {
      "id": "minecraft:birch_fence"
    },
    "jungle_fence": {
      "id": "minecraft:jungle_fence"
    },
    "acacia_fence": {
      "id": "minecraft:acacia_fence"
    },
    "dark_oak_fence": {
      "id": "minecraft:dark_oak_fence"
    },
    "mangrove_fence": {
      "id": "minecraft:mangrove_fence"
    },
    "crimson_fence": {
      "id": "minecraft:crimson_fence"
    },
    "warped_fence": {
      "id": "minecraft:warped_fence"
    },
    "pumpkin": {
      "id": "minecraft:pumpkin"
    },
    "carved_pumpkin": {
      "id": "minecraft:carved_pumpkin"
    },
    "jack_o_lantern": {
      "id": "minecraft:jack_o_lantern"
    },
    "netherrack": {
      "id": "minecraft:netherrack"
    },
    "soul_sand": {
      "id": "minecraft:soul_sand"
    },
    "soul_soil": {
      "id": "minecraft:soul_soil"
    },
    "basalt": {
      "id": "minecraft:basalt"
    },
    "polished_basalt": {
      "id": "minecraft:polished_basalt"
    },
    "smooth_basalt": {
      "id": "minecraft:smooth_basalt"
    },
    "soul_torch": {
      "id": "minecraft:soul_torch"
    },
    "glowstone": {
      "id": "minecraft:glowstone"
    },
    "infested_stone": {
      "id": "minecraft:infested_stone"
    },
    "infested_cobblestone": {
      "id": "minecraft:infested_cobblestone"
    },
    "infested_stone_bricks": {
      "id": "minecraft:infested_stone_bricks"
    },
    "infested_mossy_stone_bricks": {
      "id": "minecraft:infested_mossy_stone_bricks"
    },
    "infested_cracked_stone_bricks": {
      "id": "minecraft:infested_cracked_stone_bricks"
    },
    "infested_chiseled_stone_bricks": {
      "id": "minecraft:infested_chiseled_stone_bricks"
    },
    "infested_deepslate": {
      "id": "minecraft:infested_deepslate"
    },
    "stone_bricks": {
      "id": "minecraft:stone_bricks"
    },
    "mossy_stone_bricks": {
      "id": "minecraft:mossy_stone_bricks"
    },
    "cracked_stone_bricks": {
      "id": "minecraft:cracked_stone_bricks"
    },
    "chiseled_stone_bricks": {
      "id": "minecraft:chiseled_stone_bricks"
    },
    "packed_mud": {
      "id": "minecraft:packed_mud"
    },
    "mud_bricks": {
      "id": "minecraft:mud_bricks"
    },
    "deepslate_bricks": {
      "id": "minecraft:deepslate_bricks"
    },
    "cracked_deepslate_bricks": {
      "id": "minecraft:cracked_deepslate_bricks"
    },
    "deepslate_tiles": {
      "id": "minecraft:deepslate_tiles"
    },
    "cracked_deepslate_tiles": {
      "id": "minecraft:cracked_deepslate_tiles"
    },
    "chiseled_deepslate": {
      "id": "minecraft:chiseled_deepslate"
    },
    "reinforced_deepslate": {
      "id": "minecraft:reinforced_deepslate"
    },
    "brown_mushroom_block": {
      "id": "minecraft:brown_mushroom_block"
    },
    "red_mushroom_block": {
      "id": "minecraft:red_mushroom_block"
    },
    "mushroom_stem": {
      "id": "minecraft:mushroom_stem"
    },
    "iron_bars": {
      "id": "minecraft:iron_bars"
    },
    "chain": {
      "id": "minecraft:chain"
    },
    "glass_pane": {
      "id": "minecraft:glass_pane"
    },
    "melon": {
      "id": "minecraft:melon"
    },
    "vine": {
      "id": "minecraft:vine"
    },
    "glow_lichen": {
      "id": "minecraft:glow_lichen"
    },
    "brick_stairs": {
      "id": "minecraft:brick_stairs"
    },
    "stone_brick_stairs": {
      "id": "minecraft:stone_brick_stairs"
    },
    "mud_brick_stairs": {
      "id": "minecraft:mud_brick_stairs"
    },
    "mycelium": {
      "id": "minecraft:mycelium"
    },
    "lily_pad": {
      "id": "minecraft:lily_pad"
    },
    "nether_bricks": {
      "id": "minecraft:nether_bricks"
    },
    "cracked_nether_bricks": {
      "id": "minecraft:cracked_nether_bricks"
    },
    "chiseled_nether_bricks": {
      "id": "minecraft:chiseled_nether_bricks"
    },
    "nether_brick_fence": {
      "id": "minecraft:nether_brick_fence"
    },
    "nether_brick_stairs": {
      "id": "minecraft:nether_brick_stairs"
    },
    "sculk": {
      "id": "minecraft:sculk"
    },
    "sculk_vein": {
      "id": "minecraft:sculk_vein"
    },
    "sculk_catalyst": {
      "id": "minecraft:sculk_catalyst"
    },
    "sculk_shrieker": {
      "id": "minecraft:sculk_shrieker"
    },
    "enchanting_table": {
      "id": "minecraft:enchanting_table"
    },
    "end_portal_frame": {
      "id": "minecraft:end_portal_frame"
    },
    "end_stone": {
      "id": "minecraft:end_stone"
    },
    "end_stone_bricks": {
      "id": "minecraft:end_stone_bricks"
    },
    "sandstone_stairs": {
      "id": "minecraft:sandstone_stairs"
    },
    "ender_chest": {
      "id": "minecraft:ender_chest"
    },
    "emerald_block": {
      "id": "minecraft:emerald_block"
    },
    "oak_stairs": {
      "id": "minecraft:oak_stairs"
    },
    "spruce_stairs": {
      "id": "minecraft:spruce_stairs"
    },
    "birch_stairs": {
      "id": "minecraft:birch_stairs"
    },
    "jungle_stairs": {
      "id": "minecraft:jungle_stairs"
    },
    "acacia_stairs": {
      "id": "minecraft:acacia_stairs"
    },
    "dark_oak_stairs": {
      "id": "minecraft:dark_oak_stairs"
    },
    "mangrove_stairs": {
      "id": "minecraft:mangrove_stairs"
    },
    "crimson_stairs": {
      "id": "minecraft:crimson_stairs"
    },
    "warped_stairs": {
      "id": "minecraft:warped_stairs"
    },
    "beacon": {
      "id": "minecraft:beacon"
    },
    "cobblestone_wall": {
      "id": "minecraft:cobblestone_wall"
    },
    "mossy_cobblestone_wall": {
      "id": "minecraft:mossy_cobblestone_wall"
    },
    "brick_wall": {
      "id": "minecraft:brick_wall"
    },
    "prismarine_wall": {
      "id": "minecraft:prismarine_wall"
    },
    "red_sandstone_wall": {
      "id": "minecraft:red_sandstone_wall"
    },
    "mossy_stone_brick_wall": {
      "id": "minecraft:mossy_stone_brick_wall"
    },
    "granite_wall": {
      "id": "minecraft:granite_wall"
    },
    "stone_brick_wall": {
      "id": "minecraft:stone_brick_wall"
    },
    "mud_brick_wall": {
      "id": "minecraft:mud_brick_wall"
    },
    "nether_brick_wall": {
      "id": "minecraft:nether_brick_wall"
    },
    "andesite_wall": {
      "id": "minecraft:andesite_wall"
    },
    "red_nether_brick_wall": {
      "id": "minecraft:red_nether_brick_wall"
    },
    "sandstone_wall": {
      "id": "minecraft:sandstone_wall"
    },
    "end_stone_brick_wall": {
      "id": "minecraft:end_stone_brick_wall"
    },
    "diorite_wall": {
      "id": "minecraft:diorite_wall"
    },
    "blackstone_wall": {
      "id": "minecraft:blackstone_wall"
    },
    "polished_blackstone_wall": {
      "id": "minecraft:polished_blackstone_wall"
    },
    "polished_blackstone_brick_wall": {
      "id": "minecraft:polished_blackstone_brick_wall"
    },
    "cobbled_deepslate_wall": {
      "id": "minecraft:cobbled_deepslate_wall"
    },
    "polished_deepslate_wall": {
      "id": "minecraft:polished_deepslate_wall"
    },
    "deepslate_brick_wall": {
      "id": "minecraft:deepslate_brick_wall"
    },
    "deepslate_tile_wall": {
      "id": "minecraft:deepslate_tile_wall"
    },
    "anvil": {
      "id": "minecraft:anvil"
    },
    "chipped_anvil": {
      "id": "minecraft:chipped_anvil"
    },
    "damaged_anvil": {
      "id": "minecraft:damaged_anvil"
    },
    "chiseled_quartz_block": {
      "id": "minecraft:chiseled_quartz_block"
    },
    "quartz_block": {
      "id": "minecraft:quartz_block"
    },
    "quartz_bricks": {
      "id": "minecraft:quartz_bricks"
    },
    "quartz_pillar": {
      "id": "minecraft:quartz_pillar"
    },
    "quartz_stairs": {
      "id": "minecraft:quartz_stairs"
    },
    "white_terracotta": {
      "id": "minecraft:white_terracotta"
    },
    "orange_terracotta": {
      "id": "minecraft:orange_terracotta"
    },
    "magenta_terracotta": {
      "id": "minecraft:magenta_terracotta"
    },
    "light_blue_terracotta": {
      "id": "minecraft:light_blue_terracotta"
    },
    "yellow_terracotta": {
      "id": "minecraft:yellow_terracotta"
    },
    "lime_terracotta": {
      "id": "minecraft:lime_terracotta"
    },
    "pink_terracotta": {
      "id": "minecraft:pink_terracotta"
    },
    "gray_terracotta": {
      "id": "minecraft:gray_terracotta"
    },
    "light_gray_terracotta": {
      "id": "minecraft:light_gray_terracotta"
    },
    "cyan_terracotta": {
      "id": "minecraft:cyan_terracotta"
    },
    "purple_terracotta": {
      "id": "minecraft:purple_terracotta"
    },
    "blue_terracotta": {
      "id": "minecraft:blue_terracotta"
    },
    "brown_terracotta": {
      "id": "minecraft:brown_terracotta"
    },
    "green_terracotta": {
      "id": "minecraft:green_terracotta"
    },
    "red_terracotta": {
      "id": "minecraft:red_terracotta"
    },
    "black_terracotta": {
      "id": "minecraft:black_terracotta"
    },
    "hay_block": {
      "id": "minecraft:hay_block"
    },
    "white_carpet": {
      "id": "minecraft:white_carpet"
    },
    "orange_carpet": {
      "id": "minecraft:orange_carpet"
    },
    "magenta_carpet": {
      "id": "minecraft:magenta_carpet"
    },
    "light_blue_carpet": {
      "id": "minecraft:light_blue_carpet"
    },
    "yellow_carpet": {
      "id": "minecraft:yellow_carpet"
    },
    "lime_carpet": {
      "id": "minecraft:lime_carpet"
    },
    "pink_carpet": {
      "id": "minecraft:pink_carpet"
    },
    "gray_carpet": {
      "id": "minecraft:gray_carpet"
    },
    "light_gray_carpet": {
      "id": "minecraft:light_gray_carpet"
    },
    "cyan_carpet": {
      "id": "minecraft:cyan_carpet"
    },
    "purple_carpet": {
      "id": "minecraft:purple_carpet"
    },
    "blue_carpet": {
      "id": "minecraft:blue_carpet"
    },
    "brown_carpet": {
      "id": "minecraft:brown_carpet"
    },
    "green_carpet": {
      "id": "minecraft:green_carpet"
    },
    "red_carpet": {
      "id": "minecraft:red_carpet"
    },
    "black_carpet": {
      "id": "minecraft:black_carpet"
    },
    "terracotta": {
      "id": "minecraft:terracotta"
    },
    "packed_ice": {
      "id": "minecraft:packed_ice"
    },
    "dirt_path": {
      "id": "minecraft:dirt_path"
    },
    "sunflower": {
      "id": "minecraft:sunflower"
    },
    "lilac": {
      "id": "minecraft:lilac"
    },
    "rose_bush": {
      "id": "minecraft:rose_bush"
    },
    "peony": {
      "id": "minecraft:peony"
    },
    "tall_grass": {
      "id": "minecraft:tall_grass"
    },
    "large_fern": {
      "id": "minecraft:large_fern"
    },
    "white_stained_glass": {
      "id": "minecraft:white_stained_glass"
    },
    "orange_stained_glass": {
      "id": "minecraft:orange_stained_glass"
    },
    "magenta_stained_glass": {
      "id": "minecraft:magenta_stained_glass"
    },
    "light_blue_stained_glass": {
      "id": "minecraft:light_blue_stained_glass"
    },
    "yellow_stained_glass": {
      "id": "minecraft:yellow_stained_glass"
    },
    "lime_stained_glass": {
      "id": "minecraft:lime_stained_glass"
    },
    "pink_stained_glass": {
      "id": "minecraft:pink_stained_glass"
    },
    "gray_stained_glass": {
      "id": "minecraft:gray_stained_glass"
    },
    "light_gray_stained_glass": {
      "id": "minecraft:light_gray_stained_glass"
    },
    "cyan_stained_glass": {
      "id": "minecraft:cyan_stained_glass"
    },
    "purple_stained_glass": {
      "id": "minecraft:purple_stained_glass"
    },
    "blue_stained_glass": {
      "id": "minecraft:blue_stained_glass"
    },
    "brown_stained_glass": {
      "id": "minecraft:brown_stained_glass"
    },
    "green_stained_glass": {
      "id": "minecraft:green_stained_glass"
    },
    "red_stained_glass": {
      "id": "minecraft:red_stained_glass"
    },
    "black_stained_glass": {
      "id": "minecraft:black_stained_glass"
    },
    "white_stained_glass_pane": {
      "id": "minecraft:white_stained_glass_pane"
    },
    "orange_stained_glass_pane": {
      "id": "minecraft:orange_stained_glass_pane"
    },
    "magenta_stained_glass_pane": {
      "id": "minecraft:magenta_stained_glass_pane"
    },
    "light_blue_stained_glass_pane": {
      "id": "minecraft:light_blue_stained_glass_pane"
    },
    "yellow_stained_glass_pane": {
      "id": "minecraft:yellow_stained_glass_pane"
    },
    "lime_stained_glass_pane": {
      "id": "minecraft:lime_stained_glass_pane"
    },
    "pink_stained_glass_pane": {
      "id": "minecraft:pink_stained_glass_pane"
    },
    "gray_stained_glass_pane": {
      "id": "minecraft:gray_stained_glass_pane"
    },
    "light_gray_stained_glass_pane": {
      "id": "minecraft:light_gray_stained_glass_pane"
    },
    "cyan_stained_glass_pane": {
      "id": "minecraft:cyan_stained_glass_pane"
    },
    "purple_stained_glass_pane": {
      "id": "minecraft:purple_stained_glass_pane"
    },
    "blue_stained_glass_pane": {
      "id": "minecraft:blue_stained_glass_pane"
    },
    "brown_stained_glass_pane": {
      "id": "minecraft:brown_stained_glass_pane"
    },
    "green_stained_glass_pane": {
      "id": "minecraft:green_stained_glass_pane"
    },
    "red_stained_glass_pane": {
      "id": "minecraft:red_stained_glass_pane"
    },
    "black_stained_glass_pane": {
      "id": "minecraft:black_stained_glass_pane"
    },
    "prismarine": {
      "id": "minecraft:prismarine"
    },
    "prismarine_bricks": {
      "id": "minecraft:prismarine_bricks"
    },
    "dark_prismarine": {
      "id": "minecraft:dark_prismarine"
    },
    "prismarine_stairs": {
      "id": "minecraft:prismarine_stairs"
    },
    "prismarine_brick_stairs": {
      "id": "minecraft:prismarine_brick_stairs"
    },
    "dark_prismarine_stairs": {
      "id": "minecraft:dark_prismarine_stairs"
    },
    "sea_lantern": {
      "id": "minecraft:sea_lantern"
    },
    "red_sandstone": {
      "id": "minecraft:red_sandstone"
    },
    "chiseled_red_sandstone": {
      "id": "minecraft:chiseled_red_sandstone"
    },
    "cut_red_sandstone": {
      "id": "minecraft:cut_red_sandstone"
    },
    "red_sandstone_stairs": {
      "id": "minecraft:red_sandstone_stairs"
    },
    "magma_block": {
      "id": "minecraft:magma_block"
    },
    "nether_wart_block": {
      "id": "minecraft:nether_wart_block"
    },
    "warped_wart_block": {
      "id": "minecraft:warped_wart_block"
    },
    "red_nether_bricks": {
      "id": "minecraft:red_nether_bricks"
    },
    "bone_block": {
      "id": "minecraft:bone_block"
    },
    "shulker_box": {
      "id": "minecraft:shulker_box"
    },
    "white_shulker_box": {
      "id": "minecraft:white_shulker_box"
    },
    "orange_shulker_box": {
      "id": "minecraft:orange_shulker_box"
    },
    "magenta_shulker_box": {
      "id": "minecraft:magenta_shulker_box"
    },
    "light_blue_shulker_box": {
      "id": "minecraft:light_blue_shulker_box"
    },
    "yellow_shulker_box": {
      "id": "minecraft:yellow_shulker_box"
    },
    "lime_shulker_box": {
      "id": "minecraft:lime_shulker_box"
    },
    "pink_shulker_box": {
      "id": "minecraft:pink_shulker_box"
    },
    "gray_shulker_box": {
      "id": "minecraft:gray_shulker_box"
    },
    "light_gray_shulker_box": {
      "id": "minecraft:light_gray_shulker_box"
    },
    "cyan_shulker_box": {
      "id": "minecraft:cyan_shulker_box"
    },
    "purple_shulker_box": {
      "id": "minecraft:purple_shulker_box"
    },
    "blue_shulker_box": {
      "id": "minecraft:blue_shulker_box"
    },
    "brown_shulker_box": {
      "id": "minecraft:brown_shulker_box"
    },
    "green_shulker_box": {
      "id": "minecraft:green_shulker_box"
    },
    "red_shulker_box": {
      "id": "minecraft:red_shulker_box"
    },
    "black_shulker_box": {
      "id": "minecraft:black_shulker_box"
    },
    "white_glazed_terracotta": {
      "id": "minecraft:white_glazed_terracotta"
    },
    "orange_glazed_terracotta": {
      "id": "minecraft:orange_glazed_terracotta"
    },
    "magenta_glazed_terracotta": {
      "id": "minecraft:magenta_glazed_terracotta"
    },
    "light_blue_glazed_terracotta": {
      "id": "minecraft:light_blue_glazed_terracotta"
    },
    "yellow_glazed_terracotta": {
      "id": "minecraft:yellow_glazed_terracotta"
    },
    "lime_glazed_terracotta": {
      "id": "minecraft:lime_glazed_terracotta"
    },
    "pink_glazed_terracotta": {
      "id": "minecraft:pink_glazed_terracotta"
    },
    "gray_glazed_terracotta": {
      "id": "minecraft:gray_glazed_terracotta"
    },
    "light_gray_glazed_terracotta": {
      "id": "minecraft:light_gray_glazed_terracotta"
    },
    "cyan_glazed_terracotta": {
      "id": "minecraft:cyan_glazed_terracotta"
    },
    "purple_glazed_terracotta": {
      "id": "minecraft:purple_glazed_terracotta"
    },
    "blue_glazed_terracotta": {
      "id": "minecraft:blue_glazed_terracotta"
    },
    "brown_glazed_terracotta": {
      "id": "minecraft:brown_glazed_terracotta"
    },
    "green_glazed_terracotta": {
      "id": "minecraft:green_glazed_terracotta"
    },
    "red_glazed_terracotta": {
      "id": "minecraft:red_glazed_terracotta"
    },
    "black_glazed_terracotta": {
      "id": "minecraft:black_glazed_terracotta"
    },
    "white_concrete": {
      "id": "minecraft:white_concrete"
    },
    "orange_concrete": {
      "id": "minecraft:orange_concrete"
    },
    "magenta_concrete": {
      "id": "minecraft:magenta_concrete"
    },
    "light_blue_concrete": {
      "id": "minecraft:light_blue_concrete"
    },
    "yellow_concrete": {
      "id": "minecraft:yellow_concrete"
    },
    "lime_concrete": {
      "id": "minecraft:lime_concrete"
    },
    "pink_concrete": {
      "id": "minecraft:pink_concrete"
    },
    "gray_concrete": {
      "id": "minecraft:gray_concrete"
    },
    "light_gray_concrete": {
      "id": "minecraft:light_gray_concrete"
    },
    "cyan_concrete": {
      "id": "minecraft:cyan_concrete"
    },
    "purple_concrete": {
      "id": "minecraft:purple_concrete"
    },
    "blue_concrete": {
      "id": "minecraft:blue_concrete"
    },
    "brown_concrete": {
      "id": "minecraft:brown_concrete"
    },
    "green_concrete": {
      "id": "minecraft:green_concrete"
    },
    "red_concrete": {
      "id": "minecraft:red_concrete"
    },
    "black_concrete": {
      "id": "minecraft:black_concrete"
    },
    "white_concrete_powder": {
      "id": "minecraft:white_concrete_powder"
    },
    "orange_concrete_powder": {
      "id": "minecraft:orange_concrete_powder"
    },
    "magenta_concrete_powder": {
      "id": "minecraft:magenta_concrete_powder"
    },
    "light_blue_concrete_powder": {
      "id": "minecraft:light_blue_concrete_powder"
    },
    "yellow_concrete_powder": {
      "id": "minecraft:yellow_concrete_powder"
    },
    "lime_concrete_powder": {
      "id": "minecraft:lime_concrete_powder"
    },
    "pink_concrete_powder": {
      "id": "minecraft:pink_concrete_powder"
    },
    "gray_concrete_powder": {
      "id": "minecraft:gray_concrete_powder"
    },
    "light_gray_concrete_powder": {
      "id": "minecraft:light_gray_concrete_powder"
    },
    "cyan_concrete_powder": {
      "id": "minecraft:cyan_concrete_powder"
    },
    "purple_concrete_powder": {
      "id": "minecraft:purple_concrete_powder"
    },
    "blue_concrete_powder": {
      "id": "minecraft:blue_concrete_powder"
    },
    "brown_concrete_powder": {
      "id": "minecraft:brown_concrete_powder"
    },
    "green_concrete_powder": {
      "id": "minecraft:green_concrete_powder"
    },
    "red_concrete_powder": {
      "id": "minecraft:red_concrete_powder"
    },
    "black_concrete_powder": {
      "id": "minecraft:black_concrete_powder"
    },
    "turtle_egg": {
      "id": "minecraft:turtle_egg"
    },
    "dead_tube_coral_block": {
      "id": "minecraft:dead_tube_coral_block"
    },
    "dead_brain_coral_block": {
      "id": "minecraft:dead_brain_coral_block"
    },
    "dead_bubble_coral_block": {
      "id": "minecraft:dead_bubble_coral_block"
    },
    "dead_fire_coral_block": {
      "id": "minecraft:dead_fire_coral_block"
    },
    "dead_horn_coral_block": {
      "id": "minecraft:dead_horn_coral_block"
    },
    "tube_coral_block": {
      "id": "minecraft:tube_coral_block"
    },
    "brain_coral_block": {
      "id": "minecraft:brain_coral_block"
    },
    "bubble_coral_block": {
      "id": "minecraft:bubble_coral_block"
    },
    "fire_coral_block": {
      "id": "minecraft:fire_coral_block"
    },
    "horn_coral_block": {
      "id": "minecraft:horn_coral_block"
    },
    "tube_coral": {
      "id": "minecraft:tube_coral"
    },
    "brain_coral": {
      "id": "minecraft:brain_coral"
    },
    "bubble_coral": {
      "id": "minecraft:bubble_coral"
    },
    "fire_coral": {
      "id": "minecraft:fire_coral"
    },
    "horn_coral": {
      "id": "minecraft:horn_coral"
    },
    "dead_brain_coral": {
      "id": "minecraft:dead_brain_coral"
    },
    "dead_bubble_coral": {
      "id": "minecraft:dead_bubble_coral"
    },
    "dead_fire_coral": {
      "id": "minecraft:dead_fire_coral"
    },
    "dead_horn_coral": {
      "id": "minecraft:dead_horn_coral"
    },
    "dead_tube_coral": {
      "id": "minecraft:dead_tube_coral"
    },
    "tube_coral_fan": {
      "id": "minecraft:tube_coral_fan"
    },
    "brain_coral_fan": {
      "id": "minecraft:brain_coral_fan"
    },
    "bubble_coral_fan": {
      "id": "minecraft:bubble_coral_fan"
    },
    "fire_coral_fan": {
      "id": "minecraft:fire_coral_fan"
    },
    "horn_coral_fan": {
      "id": "minecraft:horn_coral_fan"
    },
    "dead_tube_coral_fan": {
      "id": "minecraft:dead_tube_coral_fan"
    },
    "dead_brain_coral_fan": {
      "id": "minecraft:dead_brain_coral_fan"
    },
    "dead_bubble_coral_fan": {
      "id": "minecraft:dead_bubble_coral_fan"
    },
    "dead_fire_coral_fan": {
      "id": "minecraft:dead_fire_coral_fan"
    },
    "dead_horn_coral_fan": {
      "id": "minecraft:dead_horn_coral_fan"
    },
    "blue_ice": {
      "id": "minecraft:blue_ice"
    },
    "conduit": {
      "id": "minecraft:conduit"
    },
    "polished_granite_stairs": {
      "id": "minecraft:polished_granite_stairs"
    },
    "smooth_red_sandstone_stairs": {
      "id": "minecraft:smooth_red_sandstone_stairs"
    },
    "mossy_stone_brick_stairs": {
      "id": "minecraft:mossy_stone_brick_stairs"
    },
    "polished_diorite_stairs": {
      "id": "minecraft:polished_diorite_stairs"
    },
    "mossy_cobblestone_stairs": {
      "id": "minecraft:mossy_cobblestone_stairs"
    },
    "end_stone_brick_stairs": {
      "id": "minecraft:end_stone_brick_stairs"
    },
    "stone_stairs": {
      "id": "minecraft:stone_stairs"
    },
    "smooth_sandstone_stairs": {
      "id": "minecraft:smooth_sandstone_stairs"
    },
    "smooth_quartz_stairs": {
      "id": "minecraft:smooth_quartz_stairs"
    },
    "granite_stairs": {
      "id": "minecraft:granite_stairs"
    },
    "andesite_stairs": {
      "id": "minecraft:andesite_stairs"
    },
    "red_nether_brick_stairs": {
      "id": "minecraft:red_nether_brick_stairs"
    },
    "polished_andesite_stairs": {
      "id": "minecraft:polished_andesite_stairs"
    },
    "diorite_stairs": {
      "id": "minecraft:diorite_stairs"
    },
    "cobbled_deepslate_stairs": {
      "id": "minecraft:cobbled_deepslate_stairs"
    },
    "polished_deepslate_stairs": {
      "id": "minecraft:polished_deepslate_stairs"
    },
    "deepslate_brick_stairs": {
      "id": "minecraft:deepslate_brick_stairs"
    },
    "deepslate_tile_stairs": {
      "id": "minecraft:deepslate_tile_stairs"
    },
    "polished_granite_slab": {
      "id": "minecraft:polished_granite_slab"
    },
    "smooth_red_sandstone_slab": {
      "id": "minecraft:smooth_red_sandstone_slab"
    },
    "mossy_stone_brick_slab": {
      "id": "minecraft:mossy_stone_brick_slab"
    },
    "polished_diorite_slab": {
      "id": "minecraft:polished_diorite_slab"
    },
    "mossy_cobblestone_slab": {
      "id": "minecraft:mossy_cobblestone_slab"
    },
    "end_stone_brick_slab": {
      "id": "minecraft:end_stone_brick_slab"
    },
    "smooth_sandstone_slab": {
      "id": "minecraft:smooth_sandstone_slab"
    },
    "smooth_quartz_slab": {
      "id": "minecraft:smooth_quartz_slab"
    },
    "granite_slab": {
      "id": "minecraft:granite_slab"
    },
    "andesite_slab": {
      "id": "minecraft:andesite_slab"
    },
    "red_nether_brick_slab": {
      "id": "minecraft:red_nether_brick_slab"
    },
    "polished_andesite_slab": {
      "id": "minecraft:polished_andesite_slab"
    },
    "diorite_slab": {
      "id": "minecraft:diorite_slab"
    },
    "cobbled_deepslate_slab": {
      "id": "minecraft:cobbled_deepslate_slab"
    },
    "polished_deepslate_slab": {
      "id": "minecraft:polished_deepslate_slab"
    },
    "deepslate_brick_slab": {
      "id": "minecraft:deepslate_brick_slab"
    },
    "deepslate_tile_slab": {
      "id": "minecraft:deepslate_tile_slab"
    },
    "scaffolding": {
      "id": "minecraft:scaffolding"
    },
    "redstone": {
      "id": "minecraft:redstone"
    },
    "redstone_torch": {
      "id": "minecraft:redstone_torch"
    },
    "redstone_block": {
      "id": "minecraft:redstone_block"
    },
    "repeater": {
      "id": "minecraft:repeater"
    },
    "comparator": {
      "id": "minecraft:comparator"
    },
    "piston": {
      "id": "minecraft:piston"
    },
    "sticky_piston": {
      "id": "minecraft:sticky_piston"
    },
    "slime_block": {
      "id": "minecraft:slime_block"
    },
    "honey_block": {
      "id": "minecraft:honey_block"
    },
    "observer": {
      "id": "minecraft:observer"
    },
    "hopper": {
      "id": "minecraft:hopper"
    },
    "dispenser": {
      "id": "minecraft:dispenser"
    },
    "dropper": {
      "id": "minecraft:dropper"
    },
    "lectern": {
      "id": "minecraft:lectern"
    },
    "target": {
      "id": "minecraft:target"
    },
    "lever": {
      "id": "minecraft:lever"
    },
    "lightning_rod": {
      "id": "minecraft:lightning_rod"
    },
    "daylight_detector": {
      "id": "minecraft:daylight_detector"
    },
    "sculk_sensor": {
      "id": "minecraft:sculk_sensor"
    },
    "tripwire_hook": {
      "id": "minecraft:tripwire_hook"
    },
    "trapped_chest": {
      "id": "minecraft:trapped_chest"
    },
    "tnt": {
      "id": "minecraft:tnt"
    },
    "redstone_lamp": {
      "id": "minecraft:redstone_lamp"
    },
    "note_block": {
      "id": "minecraft:note_block"
    },
    "stone_button": {
      "id": "minecraft:stone_button"
    },
    "polished_blackstone_button": {
      "id": "minecraft:polished_blackstone_button"
    },
    "oak_button": {
      "id": "minecraft:oak_button"
    },
    "spruce_button": {
      "id": "minecraft:spruce_button"
    },
    "birch_button": {
      "id": "minecraft:birch_button"
    },
    "jungle_button": {
      "id": "minecraft:jungle_button"
    },
    "acacia_button": {
      "id": "minecraft:acacia_button"
    },
    "dark_oak_button": {
      "id": "minecraft:dark_oak_button"
    },
    "mangrove_button": {
      "id": "minecraft:mangrove_button"
    },
    "crimson_button": {
      "id": "minecraft:crimson_button"
    },
    "warped_button": {
      "id": "minecraft:warped_button"
    },
    "stone_pressure_plate": {
      "id": "minecraft:stone_pressure_plate"
    },
    "polished_blackstone_pressure_plate": {
      "id": "minecraft:polished_blackstone_pressure_plate"
    },
    "light_weighted_pressure_plate": {
      "id": "minecraft:light_weighted_pressure_plate"
    },
    "heavy_weighted_pressure_plate": {
      "id": "minecraft:heavy_weighted_pressure_plate"
    },
    "oak_pressure_plate": {
      "id": "minecraft:oak_pressure_plate"
    },
    "spruce_pressure_plate": {
      "id": "minecraft:spruce_pressure_plate"
    },
    "birch_pressure_plate": {
      "id": "minecraft:birch_pressure_plate"
    },
    "jungle_pressure_plate": {
      "id": "minecraft:jungle_pressure_plate"
    },
    "acacia_pressure_plate": {
      "id": "minecraft:acacia_pressure_plate"
    },
    "dark_oak_pressure_plate": {
      "id": "minecraft:dark_oak_pressure_plate"
    },
    "mangrove_pressure_plate": {
      "id": "minecraft:mangrove_pressure_plate"
    },
    "crimson_pressure_plate": {
      "id": "minecraft:crimson_pressure_plate"
    },
    "warped_pressure_plate": {
      "id": "minecraft:warped_pressure_plate"
    },
    "iron_door": {
      "id": "minecraft:iron_door"
    },
    "oak_door": {
      "id": "minecraft:oak_door"
    },
    "spruce_door": {
      "id": "minecraft:spruce_door"
    },
    "birch_door": {
      "id": "minecraft:birch_door"
    },
    "jungle_door": {
      "id": "minecraft:jungle_door"
    },
    "acacia_door": {
      "id": "minecraft:acacia_door"
    },
    "dark_oak_door": {
      "id": "minecraft:dark_oak_door"
    },
    "mangrove_door": {
      "id": "minecraft:mangrove_door"
    },
    "crimson_door": {
      "id": "minecraft:crimson_door"
    },
    "warped_door": {
      "id": "minecraft:warped_door"
    },
    "iron_trapdoor": {
      "id": "minecraft:iron_trapdoor"
    },
    "oak_trapdoor": {
      "id": "minecraft:oak_trapdoor"
    },
    "spruce_trapdoor": {
      "id": "minecraft:spruce_trapdoor"
    },
    "birch_trapdoor": {
      "id": "minecraft:birch_trapdoor"
    },
    "jungle_trapdoor": {
      "id": "minecraft:jungle_trapdoor"
    },
    "acacia_trapdoor": {
      "id": "minecraft:acacia_trapdoor"
    },
    "dark_oak_trapdoor": {
      "id": "minecraft:dark_oak_trapdoor"
    },
    "mangrove_trapdoor": {
      "id": "minecraft:mangrove_trapdoor"
    },
    "crimson_trapdoor": {
      "id": "minecraft:crimson_trapdoor"
    },
    "warped_trapdoor": {
      "id": "minecraft:warped_trapdoor"
    },
    "oak_fence_gate": {
      "id": "minecraft:oak_fence_gate"
    },
    "spruce_fence_gate": {
      "id": "minecraft:spruce_fence_gate"
    },
    "birch_fence_gate": {
      "id": "minecraft:birch_fence_gate"
    },
    "jungle_fence_gate": {
      "id": "minecraft:jungle_fence_gate"
    },
    "acacia_fence_gate": {
      "id": "minecraft:acacia_fence_gate"
    },
    "dark_oak_fence_gate": {
      "id": "minecraft:dark_oak_fence_gate"
    },
    "mangrove_fence_gate": {
      "id": "minecraft:mangrove_fence_gate"
    },
    "crimson_fence_gate": {
      "id": "minecraft:crimson_fence_gate"
    },
    "warped_fence_gate": {
      "id": "minecraft:warped_fence_gate"
    },
    "powered_rail": {
      "id": "minecraft:powered_rail"
    },
    "detector_rail": {
      "id": "minecraft:detector_rail"
    },
    "rail": {
      "id": "minecraft:rail"
    },
    "activator_rail": {
      "id": "minecraft:activator_rail"
    },
    "saddle": {
      "id": "minecraft:saddle"
    },
    "minecart": {
      "id": "minecraft:minecart"
    },
    "chest_minecart": {
      "id": "minecraft:chest_minecart"
    },
    "furnace_minecart": {
      "id": "minecraft:furnace_minecart"
    },
    "tnt_minecart": {
      "id": "minecraft:tnt_minecart"
    },
    "hopper_minecart": {
      "id": "minecraft:hopper_minecart"
    },
    "carrot_on_a_stick": {
      "id": "minecraft:carrot_on_a_stick"
    },
    "warped_fungus_on_a_stick": {
      "id": "minecraft:warped_fungus_on_a_stick"
    },
    "elytra": {
      "id": "minecraft:elytra"
    },
    "oak_boat": {
      "id": "minecraft:oak_boat"
    },
    "oak_chest_boat": {
      "id": "minecraft:oak_chest_boat"
    },
    "spruce_boat": {
      "id": "minecraft:spruce_boat"
    },
    "spruce_chest_boat": {
      "id": "minecraft:spruce_chest_boat"
    },
    "birch_boat": {
      "id": "minecraft:birch_boat"
    },
    "birch_chest_boat": {
      "id": "minecraft:birch_chest_boat"
    },
    "jungle_boat": {
      "id": "minecraft:jungle_boat"
    },
    "jungle_chest_boat": {
      "id": "minecraft:jungle_chest_boat"
    },
    "acacia_boat": {
      "id": "minecraft:acacia_boat"
    },
    "acacia_chest_boat": {
      "id": "minecraft:acacia_chest_boat"
    },
    "dark_oak_boat": {
      "id": "minecraft:dark_oak_boat"
    },
    "dark_oak_chest_boat": {
      "id": "minecraft:dark_oak_chest_boat"
    },
    "mangrove_boat": {
      "id": "minecraft:mangrove_boat"
    },
    "mangrove_chest_boat": {
      "id": "minecraft:mangrove_chest_boat"
    },
    "turtle_helmet": {
      "id": "minecraft:turtle_helmet"
    },
    "scute": {
      "id": "minecraft:scute"
    },
    "flint_and_steel": {
      "id": "minecraft:flint_and_steel"
    },
    "apple": {
      "id": "minecraft:apple"
    },
    "bow": {
      "id": "minecraft:bow"
    },
    "arrow": {
      "id": "minecraft:arrow"
    },
    "coal": {
      "id": "minecraft:coal"
    },
    "charcoal": {
      "id": "minecraft:charcoal"
    },
    "diamond": {
      "id": "minecraft:diamond"
    },
    "emerald": {
      "id": "minecraft:emerald"
    },
    "lapis_lazuli": {
      "id": "minecraft:lapis_lazuli"
    },
    "quartz": {
      "id": "minecraft:quartz"
    },
    "amethyst_shard": {
      "id": "minecraft:amethyst_shard"
    },
    "raw_iron": {
      "id": "minecraft:raw_iron"
    },
    "iron_ingot": {
      "id": "minecraft:iron_ingot"
    },
    "raw_copper": {
      "id": "minecraft:raw_copper"
    },
    "copper_ingot": {
      "id": "minecraft:copper_ingot"
    },
    "raw_gold": {
      "id": "minecraft:raw_gold"
    },
    "gold_ingot": {
      "id": "minecraft:gold_ingot"
    },
    "netherite_ingot": {
      "id": "minecraft:netherite_ingot"
    },
    "netherite_scrap": {
      "id": "minecraft:netherite_scrap"
    },
    "wooden_sword": {
      "id": "minecraft:wooden_sword"
    },
    "wooden_shovel": {
      "id": "minecraft:wooden_shovel"
    },
    "wooden_pickaxe": {
      "id": "minecraft:wooden_pickaxe"
    },
    "wooden_axe": {
      "id": "minecraft:wooden_axe"
    },
    "wooden_hoe": {
      "id": "minecraft:wooden_hoe"
    },
    "stone_sword": {
      "id": "minecraft:stone_sword"
    },
    "stone_shovel": {
      "id": "minecraft:stone_shovel"
    },
    "stone_pickaxe": {
      "id": "minecraft:stone_pickaxe"
    },
    "stone_axe": {
      "id": "minecraft:stone_axe"
    },
    "stone_hoe": {
      "id": "minecraft:stone_hoe"
    },
    "golden_sword": {
      "id": "minecraft:golden_sword"
    },
    "golden_shovel": {
      "id": "minecraft:golden_shovel"
    },
    "golden_pickaxe": {
      "id": "minecraft:golden_pickaxe"
    },
    "golden_axe": {
      "id": "minecraft:golden_axe"
    },
    "golden_hoe": {
      "id": "minecraft:golden_hoe"
    },
    "iron_sword": {
      "id": "minecraft:iron_sword"
    },
    "iron_shovel": {
      "id": "minecraft:iron_shovel"
    },
    "iron_pickaxe": {
      "id": "minecraft:iron_pickaxe"
    },
    "iron_axe": {
      "id": "minecraft:iron_axe"
    },
    "iron_hoe": {
      "id": "minecraft:iron_hoe"
    },
    "diamond_sword": {
      "id": "minecraft:diamond_sword"
    },
    "diamond_shovel": {
      "id": "minecraft:diamond_shovel"
    },
    "diamond_pickaxe": {
      "id": "minecraft:diamond_pickaxe"
    },
    "diamond_axe": {
      "id": "minecraft:diamond_axe"
    },
    "diamond_hoe": {
      "id": "minecraft:diamond_hoe"
    },
    "netherite_sword": {
      "id": "minecraft:netherite_sword"
    },
    "netherite_shovel": {
      "id": "minecraft:netherite_shovel"
    },
    "netherite_pickaxe": {
      "id": "minecraft:netherite_pickaxe"
    },
    "netherite_axe": {
      "id": "minecraft:netherite_axe"
    },
    "netherite_hoe": {
      "id": "minecraft:netherite_hoe"
    },
    "stick": {
      "id": "minecraft:stick"
    },
    "bowl": {
      "id": "minecraft:bowl"
    },
    "mushroom_stew": {
      "id": "minecraft:mushroom_stew"
    },
    "string": {
      "id": "minecraft:string"
    },
    "feather": {
      "id": "minecraft:feather"
    },
    "gunpowder": {
      "id": "minecraft:gunpowder"
    },
    "wheat_seeds": {
      "id": "minecraft:wheat_seeds"
    },
    "wheat": {
      "id": "minecraft:wheat"
    },
    "bread": {
      "id": "minecraft:bread"
    },
    "leather_helmet": {
      "id": "minecraft:leather_helmet"
    },
    "leather_chestplate": {
      "id": "minecraft:leather_chestplate"
    },
    "leather_leggings": {
      "id": "minecraft:leather_leggings"
    },
    "leather_boots": {
      "id": "minecraft:leather_boots"
    },
    "chainmail_helmet": {
      "id": "minecraft:chainmail_helmet"
    },
    "chainmail_chestplate": {
      "id": "minecraft:chainmail_chestplate"
    },
    "chainmail_leggings": {
      "id": "minecraft:chainmail_leggings"
    },
    "chainmail_boots": {
      "id": "minecraft:chainmail_boots"
    },
    "iron_helmet": {
      "id": "minecraft:iron_helmet"
    },
    "iron_chestplate": {
      "id": "minecraft:iron_chestplate"
    },
    "iron_leggings": {
      "id": "minecraft:iron_leggings"
    },
    "iron_boots": {
      "id": "minecraft:iron_boots"
    },
    "diamond_helmet": {
      "id": "minecraft:diamond_helmet"
    },
    "diamond_chestplate": {
      "id": "minecraft:diamond_chestplate"
    },
    "diamond_leggings": {
      "id": "minecraft:diamond_leggings"
    },
    "diamond_boots": {
      "id": "minecraft:diamond_boots"
    },
    "golden_helmet": {
      "id": "minecraft:golden_helmet"
    },
    "golden_chestplate": {
      "id": "minecraft:golden_chestplate"
    },
    "golden_leggings": {
      "id": "minecraft:golden_leggings"
    },
    "golden_boots": {
      "id": "minecraft:golden_boots"
    },
    "netherite_helmet": {
      "id": "minecraft:netherite_helmet"
    },
    "netherite_chestplate": {
      "id": "minecraft:netherite_chestplate"
    },
    "netherite_leggings": {
      "id": "minecraft:netherite_leggings"
    },
    "netherite_boots": {
      "id": "minecraft:netherite_boots"
    },
    "flint": {
      "id": "minecraft:flint"
    },
    "porkchop": {
      "id": "minecraft:porkchop"
    },
    "cooked_porkchop": {
      "id": "minecraft:cooked_porkchop"
    },
    "painting": {
      "id": "minecraft:painting"
    },
    "golden_apple": {
      "id": "minecraft:golden_apple"
    },
    "enchanted_golden_apple": {
      "id": "minecraft:enchanted_golden_apple"
    },
    "oak_sign": {
      "id": "minecraft:oak_sign"
    },
    "spruce_sign": {
      "id": "minecraft:spruce_sign"
    },
    "birch_sign": {
      "id": "minecraft:birch_sign"
    },
    "jungle_sign": {
      "id": "minecraft:jungle_sign"
    },
    "acacia_sign": {
      "id": "minecraft:acacia_sign"
    },
    "dark_oak_sign": {
      "id": "minecraft:dark_oak_sign"
    },
    "mangrove_sign": {
      "id": "minecraft:mangrove_sign"
    },
    "crimson_sign": {
      "id": "minecraft:crimson_sign"
    },
    "warped_sign": {
      "id": "minecraft:warped_sign"
    },
    "bucket": {
      "id": "minecraft:bucket"
    },
    "water_bucket": {
      "id": "minecraft:water_bucket"
    },
    "lava_bucket": {
      "id": "minecraft:lava_bucket"
    },
    "powder_snow_bucket": {
      "id": "minecraft:powder_snow_bucket"
    },
    "snowball": {
      "id": "minecraft:snowball"
    },
    "leather": {
      "id": "minecraft:leather"
    },
    "milk_bucket": {
      "id": "minecraft:milk_bucket"
    },
    "pufferfish_bucket": {
      "id": "minecraft:pufferfish_bucket"
    },
    "salmon_bucket": {
      "id": "minecraft:salmon_bucket"
    },
    "cod_bucket": {
      "id": "minecraft:cod_bucket"
    },
    "tropical_fish_bucket": {
      "id": "minecraft:tropical_fish_bucket"
    },
    "axolotl_bucket": {
      "id": "minecraft:axolotl_bucket"
    },
    "tadpole_bucket": {
      "id": "minecraft:tadpole_bucket"
    },
    "brick": {
      "id": "minecraft:brick"
    },
    "clay_ball": {
      "id": "minecraft:clay_ball"
    },
    "dried_kelp_block": {
      "id": "minecraft:dried_kelp_block"
    },
    "paper": {
      "id": "minecraft:paper"
    },
    "book": {
      "id": "minecraft:book"
    },
    "slime_ball": {
      "id": "minecraft:slime_ball"
    },
    "egg": {
      "id": "minecraft:egg"
    },
    "compass": {
      "id": "minecraft:compass"
    },
    "recovery_compass": {
      "id": "minecraft:recovery_compass"
    },
    "bundle": {
      "id": "minecraft:bundle"
    },
    "fishing_rod": {
      "id": "minecraft:fishing_rod"
    },
    "clock": {
      "id": "minecraft:clock"
    },
    "spyglass": {
      "id": "minecraft:spyglass"
    },
    "glowstone_dust": {
      "id": "minecraft:glowstone_dust"
    },
    "cod": {
      "id": "minecraft:cod"
    },
    "salmon": {
      "id": "minecraft:salmon"
    },
    "tropical_fish": {
      "id": "minecraft:tropical_fish"
    },
    "pufferfish": {
      "id": "minecraft:pufferfish"
    },
    "cooked_cod": {
      "id": "minecraft:cooked_cod"
    },
    "cooked_salmon": {
      "id": "minecraft:cooked_salmon"
    },
    "ink_sac": {
      "id": "minecraft:ink_sac"
    },
    "glow_ink_sac": {
      "id": "minecraft:glow_ink_sac"
    },
    "cocoa_beans": {
      "id": "minecraft:cocoa_beans"
    },
    "white_dye": {
      "id": "minecraft:white_dye"
    },
    "orange_dye": {
      "id": "minecraft:orange_dye"
    },
    "magenta_dye": {
      "id": "minecraft:magenta_dye"
    },
    "light_blue_dye": {
      "id": "minecraft:light_blue_dye"
    },
    "yellow_dye": {
      "id": "minecraft:yellow_dye"
    },
    "lime_dye": {
      "id": "minecraft:lime_dye"
    },
    "pink_dye": {
      "id": "minecraft:pink_dye"
    },
    "gray_dye": {
      "id": "minecraft:gray_dye"
    },
    "light_gray_dye": {
      "id": "minecraft:light_gray_dye"
    },
    "cyan_dye": {
      "id": "minecraft:cyan_dye"
    },
    "purple_dye": {
      "id": "minecraft:purple_dye"
    },
    "blue_dye": {
      "id": "minecraft:blue_dye"
    },
    "brown_dye": {
      "id": "minecraft:brown_dye"
    },
    "green_dye": {
      "id": "minecraft:green_dye"
    },
    "red_dye": {
      "id": "minecraft:red_dye"
    },
    "black_dye": {
      "id": "minecraft:black_dye"
    },
    "bone_meal": {
      "id": "minecraft:bone_meal"
    },
    "bone": {
      "id": "minecraft:bone"
    },
    "sugar": {
      "id": "minecraft:sugar"
    },
    "cake": {
      "id": "minecraft:cake"
    },
    "white_bed": {
      "id": "minecraft:white_bed"
    },
    "orange_bed": {
      "id": "minecraft:orange_bed"
    },
    "magenta_bed": {
      "id": "minecraft:magenta_bed"
    },
    "light_blue_bed": {
      "id": "minecraft:light_blue_bed"
    },
    "yellow_bed": {
      "id": "minecraft:yellow_bed"
    },
    "lime_bed": {
      "id": "minecraft:lime_bed"
    },
    "pink_bed": {
      "id": "minecraft:pink_bed"
    },
    "gray_bed": {
      "id": "minecraft:gray_bed"
    },
    "light_gray_bed": {
      "id": "minecraft:light_gray_bed"
    },
    "cyan_bed": {
      "id": "minecraft:cyan_bed"
    },
    "purple_bed": {
      "id": "minecraft:purple_bed"
    },
    "blue_bed": {
      "id": "minecraft:blue_bed"
    },
    "brown_bed": {
      "id": "minecraft:brown_bed"
    },
    "green_bed": {
      "id": "minecraft:green_bed"
    },
    "red_bed": {
      "id": "minecraft:red_bed"
    },
    "black_bed": {
      "id": "minecraft:black_bed"
    },
    "cookie": {
      "id": "minecraft:cookie"
    },
    "shears": {
      "id": "minecraft:shears"
    },
    "melon_slice": {
      "id": "minecraft:melon_slice"
    },
    "dried_kelp": {
      "id": "minecraft:dried_kelp"
    },
    "pumpkin_seeds": {
      "id": "minecraft:pumpkin_seeds"
    },
    "melon_seeds": {
      "id": "minecraft:melon_seeds"
    },
    "beef": {
      "id": "minecraft:beef"
    },
    "cooked_beef": {
      "id": "minecraft:cooked_beef"
    },
    "chicken": {
      "id": "minecraft:chicken"
    },
    "cooked_chicken": {
      "id": "minecraft:cooked_chicken"
    },
    "rotten_flesh": {
      "id": "minecraft:rotten_flesh"
    },
    "ender_pearl": {
      "id": "minecraft:ender_pearl"
    },
    "blaze_rod": {
      "id": "minecraft:blaze_rod"
    },
    "ghast_tear": {
      "id": "minecraft:ghast_tear"
    },
    "gold_nugget": {
      "id": "minecraft:gold_nugget"
    },
    "nether_wart": {
      "id": "minecraft:nether_wart"
    },
    "potion": {
      "id": "minecraft:potion"
    },
    "glass_bottle": {
      "id": "minecraft:glass_bottle"
    },
    "spider_eye": {
      "id": "minecraft:spider_eye"
    },
    "fermented_spider_eye": {
      "id": "minecraft:fermented_spider_eye"
    },
    "blaze_powder": {
      "id": "minecraft:blaze_powder"
    },
    "magma_cream": {
      "id": "minecraft:magma_cream"
    },
    "brewing_stand": {
      "id": "minecraft:brewing_stand"
    },
    "cauldron": {
      "id": "minecraft:cauldron"
    },
    "ender_eye": {
      "id": "minecraft:ender_eye"
    },
    "glistering_melon_slice": {
      "id": "minecraft:glistering_melon_slice"
    },
    "allay_spawn_egg": {
      "id": "minecraft:allay_spawn_egg"
    },
    "axolotl_spawn_egg": {
      "id": "minecraft:axolotl_spawn_egg"
    },
    "bat_spawn_egg": {
      "id": "minecraft:bat_spawn_egg"
    },
    "bee_spawn_egg": {
      "id": "minecraft:bee_spawn_egg"
    },
    "blaze_spawn_egg": {
      "id": "minecraft:blaze_spawn_egg"
    },
    "cat_spawn_egg": {
      "id": "minecraft:cat_spawn_egg"
    },
    "cave_spider_spawn_egg": {
      "id": "minecraft:cave_spider_spawn_egg"
    },
    "chicken_spawn_egg": {
      "id": "minecraft:chicken_spawn_egg"
    },
    "cod_spawn_egg": {
      "id": "minecraft:cod_spawn_egg"
    },
    "cow_spawn_egg": {
      "id": "minecraft:cow_spawn_egg"
    },
    "creeper_spawn_egg": {
      "id": "minecraft:creeper_spawn_egg"
    },
    "dolphin_spawn_egg": {
      "id": "minecraft:dolphin_spawn_egg"
    },
    "donkey_spawn_egg": {
      "id": "minecraft:donkey_spawn_egg"
    },
    "drowned_spawn_egg": {
      "id": "minecraft:drowned_spawn_egg"
    },
    "elder_guardian_spawn_egg": {
      "id": "minecraft:elder_guardian_spawn_egg"
    },
    "enderman_spawn_egg": {
      "id": "minecraft:enderman_spawn_egg"
    },
    "endermite_spawn_egg": {
      "id": "minecraft:endermite_spawn_egg"
    },
    "evoker_spawn_egg": {
      "id": "minecraft:evoker_spawn_egg"
    },
    "fox_spawn_egg": {
      "id": "minecraft:fox_spawn_egg"
    },
    "frog_spawn_egg": {
      "id": "minecraft:frog_spawn_egg"
    },
    "ghast_spawn_egg": {
      "id": "minecraft:ghast_spawn_egg"
    },
    "glow_squid_spawn_egg": {
      "id": "minecraft:glow_squid_spawn_egg"
    },
    "goat_spawn_egg": {
      "id": "minecraft:goat_spawn_egg"
    },
    "guardian_spawn_egg": {
      "id": "minecraft:guardian_spawn_egg"
    },
    "hoglin_spawn_egg": {
      "id": "minecraft:hoglin_spawn_egg"
    },
    "horse_spawn_egg": {
      "id": "minecraft:horse_spawn_egg"
    },
    "husk_spawn_egg": {
      "id": "minecraft:husk_spawn_egg"
    },
    "llama_spawn_egg": {
      "id": "minecraft:llama_spawn_egg"
    },
    "magma_cube_spawn_egg": {
      "id": "minecraft:magma_cube_spawn_egg"
    },
    "mooshroom_spawn_egg": {
      "id": "minecraft:mooshroom_spawn_egg"
    },
    "mule_spawn_egg": {
      "id": "minecraft:mule_spawn_egg"
    },
    "ocelot_spawn_egg": {
      "id": "minecraft:ocelot_spawn_egg"
    },
    "panda_spawn_egg": {
      "id": "minecraft:panda_spawn_egg"
    },
    "parrot_spawn_egg": {
      "id": "minecraft:parrot_spawn_egg"
    },
    "phantom_spawn_egg": {
      "id": "minecraft:phantom_spawn_egg"
    },
    "pig_spawn_egg": {
      "id": "minecraft:pig_spawn_egg"
    },
    "piglin_spawn_egg": {
      "id": "minecraft:piglin_spawn_egg"
    },
    "piglin_brute_spawn_egg": {
      "id": "minecraft:piglin_brute_spawn_egg"
    },
    "pillager_spawn_egg": {
      "id": "minecraft:pillager_spawn_egg"
    },
    "polar_bear_spawn_egg": {
      "id": "minecraft:polar_bear_spawn_egg"
    },
    "pufferfish_spawn_egg": {
      "id": "minecraft:pufferfish_spawn_egg"
    },
    "rabbit_spawn_egg": {
      "id": "minecraft:rabbit_spawn_egg"
    },
    "ravager_spawn_egg": {
      "id": "minecraft:ravager_spawn_egg"
    },
    "salmon_spawn_egg": {
      "id": "minecraft:salmon_spawn_egg"
    },
    "sheep_spawn_egg": {
      "id": "minecraft:sheep_spawn_egg"
    },
    "shulker_spawn_egg": {
      "id": "minecraft:shulker_spawn_egg"
    },
    "silverfish_spawn_egg": {
      "id": "minecraft:silverfish_spawn_egg"
    },
    "skeleton_spawn_egg": {
      "id": "minecraft:skeleton_spawn_egg"
    },
    "skeleton_horse_spawn_egg": {
      "id": "minecraft:skeleton_horse_spawn_egg"
    },
    "slime_spawn_egg": {
      "id": "minecraft:slime_spawn_egg"
    },
    "spider_spawn_egg": {
      "id": "minecraft:spider_spawn_egg"
    },
    "squid_spawn_egg": {
      "id": "minecraft:squid_spawn_egg"
    },
    "stray_spawn_egg": {
      "id": "minecraft:stray_spawn_egg"
    },
    "strider_spawn_egg": {
      "id": "minecraft:strider_spawn_egg"
    },
    "tadpole_spawn_egg": {
      "id": "minecraft:tadpole_spawn_egg"
    },
    "trader_llama_spawn_egg": {
      "id": "minecraft:trader_llama_spawn_egg"
    },
    "tropical_fish_spawn_egg": {
      "id": "minecraft:tropical_fish_spawn_egg"
    },
    "turtle_spawn_egg": {
      "id": "minecraft:turtle_spawn_egg"
    },
    "vex_spawn_egg": {
      "id": "minecraft:vex_spawn_egg"
    },
    "villager_spawn_egg": {
      "id": "minecraft:villager_spawn_egg"
    },
    "vindicator_spawn_egg": {
      "id": "minecraft:vindicator_spawn_egg"
    },
    "wandering_trader_spawn_egg": {
      "id": "minecraft:wandering_trader_spawn_egg"
    },
    "warden_spawn_egg": {
      "id": "minecraft:warden_spawn_egg"
    },
    "witch_spawn_egg": {
      "id": "minecraft:witch_spawn_egg"
    },
    "wither_skeleton_spawn_egg": {
      "id": "minecraft:wither_skeleton_spawn_egg"
    },
    "wolf_spawn_egg": {
      "id": "minecraft:wolf_spawn_egg"
    },
    "zoglin_spawn_egg": {
      "id": "minecraft:zoglin_spawn_egg"
    },
    "zombie_spawn_egg": {
      "id": "minecraft:zombie_spawn_egg"
    },
    "zombie_horse_spawn_egg": {
      "id": "minecraft:zombie_horse_spawn_egg"
    },
    "zombie_villager_spawn_egg": {
      "id": "minecraft:zombie_villager_spawn_egg"
    },
    "zombified_piglin_spawn_egg": {
      "id": "minecraft:zombified_piglin_spawn_egg"
    },
    "experience_bottle": {
      "id": "minecraft:experience_bottle"
    },
    "fire_charge": {
      "id": "minecraft:fire_charge"
    },
    "writable_book": {
      "id": "minecraft:writable_book"
    },
    "item_frame": {
      "id": "minecraft:item_frame"
    },
    "glow_item_frame": {
      "id": "minecraft:glow_item_frame"
    },
    "flower_pot": {
      "id": "minecraft:flower_pot"
    },
    "carrot": {
      "id": "minecraft:carrot"
    },
    "potato": {
      "id": "minecraft:potato"
    },
    "baked_potato": {
      "id": "minecraft:baked_potato"
    },
    "poisonous_potato": {
      "id": "minecraft:poisonous_potato"
    },
    "map": {
      "id": "minecraft:map"
    },
    "golden_carrot": {
      "id": "minecraft:golden_carrot"
    },
    "skeleton_skull": {
      "id": "minecraft:skeleton_skull"
    },
    "wither_skeleton_skull": {
      "id": "minecraft:wither_skeleton_skull"
    },
    "player_head": {
      "id": "minecraft:player_head"
    },
    "zombie_head": {
      "id": "minecraft:zombie_head"
    },
    "creeper_head": {
      "id": "minecraft:creeper_head"
    },
    "dragon_head": {
      "id": "minecraft:dragon_head"
    },
    "nether_star": {
      "id": "minecraft:nether_star"
    },
    "pumpkin_pie": {
      "id": "minecraft:pumpkin_pie"
    },
    "firework_rocket": {
      "id": "minecraft:firework_rocket"
    },
    "firework_star": {
      "id": "minecraft:firework_star"
    },
    "enchanted_book": {
      "id": "minecraft:enchanted_book"
    },
    "nether_brick": {
      "id": "minecraft:nether_brick"
    },
    "prismarine_shard": {
      "id": "minecraft:prismarine_shard"
    },
    "prismarine_crystals": {
      "id": "minecraft:prismarine_crystals"
    },
    "rabbit": {
      "id": "minecraft:rabbit"
    },
    "cooked_rabbit": {
      "id": "minecraft:cooked_rabbit"
    },
    "rabbit_stew": {
      "id": "minecraft:rabbit_stew"
    },
    "rabbit_foot": {
      "id": "minecraft:rabbit_foot"
    },
    "rabbit_hide": {
      "id": "minecraft:rabbit_hide"
    },
    "armor_stand": {
      "id": "minecraft:armor_stand"
    },
    "iron_horse_armor": {
      "id": "minecraft:iron_horse_armor"
    },
    "golden_horse_armor": {
      "id": "minecraft:golden_horse_armor"
    },
    "diamond_horse_armor": {
      "id": "minecraft:diamond_horse_armor"
    },
    "leather_horse_armor": {
      "id": "minecraft:leather_horse_armor"
    },
    "lead": {
      "id": "minecraft:lead"
    },
    "name_tag": {
      "id": "minecraft:name_tag"
    },
    "mutton": {
      "id": "minecraft:mutton"
    },
    "cooked_mutton": {
      "id": "minecraft:cooked_mutton"
    },
    "white_banner": {
      "id": "minecraft:white_banner"
    },
    "orange_banner": {
      "id": "minecraft:orange_banner"
    },
    "magenta_banner": {
      "id": "minecraft:magenta_banner"
    },
    "light_blue_banner": {
      "id": "minecraft:light_blue_banner"
    },
    "yellow_banner": {
      "id": "minecraft:yellow_banner"
    },
    "lime_banner": {
      "id": "minecraft:lime_banner"
    },
    "pink_banner": {
      "id": "minecraft:pink_banner"
    },
    "gray_banner": {
      "id": "minecraft:gray_banner"
    },
    "light_gray_banner": {
      "id": "minecraft:light_gray_banner"
    },
    "cyan_banner": {
      "id": "minecraft:cyan_banner"
    },
    "purple_banner": {
      "id": "minecraft:purple_banner"
    },
    "blue_banner": {
      "id": "minecraft:blue_banner"
    },
    "brown_banner": {
      "id": "minecraft:brown_banner"
    },
    "green_banner": {
      "id": "minecraft:green_banner"
    },
    "red_banner": {
      "id": "minecraft:red_banner"
    },
    "black_banner": {
      "id": "minecraft:black_banner"
    },
    "end_crystal": {
      "id": "minecraft:end_crystal"
    },
    "chorus_fruit": {
      "id": "minecraft:chorus_fruit"
    },
    "popped_chorus_fruit": {
      "id": "minecraft:popped_chorus_fruit"
    },
    "beetroot": {
      "id": "minecraft:beetroot"
    },
    "beetroot_seeds": {
      "id": "minecraft:beetroot_seeds"
    },
    "beetroot_soup": {
      "id": "minecraft:beetroot_soup"
    },
    "dragon_breath": {
      "id": "minecraft:dragon_breath"
    },
    "splash_potion": {
      "id": "minecraft:splash_potion"
    },
    "spectral_arrow": {
      "id": "minecraft:spectral_arrow"
    },
    "tipped_arrow": {
      "id": "minecraft:tipped_arrow"
    },
    "lingering_potion": {
      "id": "minecraft:lingering_potion"
    },
    "shield": {
      "id": "minecraft:shield"
    },
    "totem_of_undying": {
      "id": "minecraft:totem_of_undying"
    },
    "shulker_shell": {
      "id": "minecraft:shulker_shell"
    },
    "iron_nugget": {
      "id": "minecraft:iron_nugget"
    },
    "music_disc_13": {
      "id": "minecraft:music_disc_13"
    },
    "music_disc_cat": {
      "id": "minecraft:music_disc_cat"
    },
    "music_disc_blocks": {
      "id": "minecraft:music_disc_blocks"
    },
    "music_disc_chirp": {
      "id": "minecraft:music_disc_chirp"
    },
    "music_disc_far": {
      "id": "minecraft:music_disc_far"
    },
    "music_disc_mall": {
      "id": "minecraft:music_disc_mall"
    },
    "music_disc_mellohi": {
      "id": "minecraft:music_disc_mellohi"
    },
    "music_disc_stal": {
      "id": "minecraft:music_disc_stal"
    },
    "music_disc_strad": {
      "id": "minecraft:music_disc_strad"
    },
    "music_disc_ward": {
      "id": "minecraft:music_disc_ward"
    },
    "music_disc_11": {
      "id": "minecraft:music_disc_11"
    },
    "music_disc_wait": {
      "id": "minecraft:music_disc_wait"
    },
    "music_disc_otherside": {
      "id": "minecraft:music_disc_otherside"
    },
    "music_disc_5": {
      "id": "minecraft:music_disc_5"
    },
    "music_disc_pigstep": {
      "id": "minecraft:music_disc_pigstep"
    },
    "disc_fragment_5": {
      "id": "minecraft:disc_fragment_5"
    },
    "trident": {
      "id": "minecraft:trident"
    },
    "phantom_membrane": {
      "id": "minecraft:phantom_membrane"
    },
    "nautilus_shell": {
      "id": "minecraft:nautilus_shell"
    },
    "heart_of_the_sea": {
      "id": "minecraft:heart_of_the_sea"
    },
    "crossbow": {
      "id": "minecraft:crossbow"
    },
    "loom": {
      "id": "minecraft:loom"
    },
    "flower_banner_pattern": {
      "id": "minecraft:flower_banner_pattern"
    },
    "creeper_banner_pattern": {
      "id": "minecraft:creeper_banner_pattern"
    },
    "skull_banner_pattern": {
      "id": "minecraft:skull_banner_pattern"
    },
    "mojang_banner_pattern": {
      "id": "minecraft:mojang_banner_pattern"
    },
    "globe_banner_pattern": {
      "id": "minecraft:globe_banner_pattern"
    },
    "piglin_banner_pattern": {
      "id": "minecraft:piglin_banner_pattern"
    },
    "goat_horn": {
      "id": "minecraft:goat_horn"
    },
    "composter": {
      "id": "minecraft:composter"
    },
    "barrel": {
      "id": "minecraft:barrel"
    },
    "smoker": {
      "id": "minecraft:smoker"
    },
    "blast_furnace": {
      "id": "minecraft:blast_furnace"
    },
    "cartography_table": {
      "id": "minecraft:cartography_table"
    },
    "fletching_table": {
      "id": "minecraft:fletching_table"
    },
    "grindstone": {
      "id": "minecraft:grindstone"
    },
    "smithing_table": {
      "id": "minecraft:smithing_table"
    },
    "stonecutter": {
      "id": "minecraft:stonecutter"
    },
    "bell": {
      "id": "minecraft:bell"
    },
    "lantern": {
      "id": "minecraft:lantern"
    },
    "soul_lantern": {
      "id": "minecraft:soul_lantern"
    },
    "sweet_berries": {
      "id": "minecraft:sweet_berries"
    },
    "glow_berries": {
      "id": "minecraft:glow_berries"
    },
    "campfire": {
      "id": "minecraft:campfire"
    },
    "soul_campfire": {
      "id": "minecraft:soul_campfire"
    },
    "shroomlight": {
      "id": "minecraft:shroomlight"
    },
    "honeycomb": {
      "id": "minecraft:honeycomb"
    },
    "bee_nest": {
      "id": "minecraft:bee_nest"
    },
    "beehive": {
      "id": "minecraft:beehive"
    },
    "honey_bottle": {
      "id": "minecraft:honey_bottle"
    },
    "honeycomb_block": {
      "id": "minecraft:honeycomb_block"
    },
    "lodestone": {
      "id": "minecraft:lodestone"
    },
    "crying_obsidian": {
      "id": "minecraft:crying_obsidian"
    },
    "blackstone": {
      "id": "minecraft:blackstone"
    },
    "blackstone_slab": {
      "id": "minecraft:blackstone_slab"
    },
    "blackstone_stairs": {
      "id": "minecraft:blackstone_stairs"
    },
    "gilded_blackstone": {
      "id": "minecraft:gilded_blackstone"
    },
    "polished_blackstone": {
      "id": "minecraft:polished_blackstone"
    },
    "polished_blackstone_slab": {
      "id": "minecraft:polished_blackstone_slab"
    },
    "polished_blackstone_stairs": {
      "id": "minecraft:polished_blackstone_stairs"
    },
    "chiseled_polished_blackstone": {
      "id": "minecraft:chiseled_polished_blackstone"
    },
    "polished_blackstone_bricks": {
      "id": "minecraft:polished_blackstone_bricks"
    },
    "polished_blackstone_brick_slab": {
      "id": "minecraft:polished_blackstone_brick_slab"
    },
    "polished_blackstone_brick_stairs": {
      "id": "minecraft:polished_blackstone_brick_stairs"
    },
    "cracked_polished_blackstone_bricks": {
      "id": "minecraft:cracked_polished_blackstone_bricks"
    },
    "respawn_anchor": {
      "id": "minecraft:respawn_anchor"
    },
    "candle": {
      "id": "minecraft:candle"
    },
    "white_candle": {
      "id": "minecraft:white_candle"
    },
    "orange_candle": {
      "id": "minecraft:orange_candle"
    },
    "magenta_candle": {
      "id": "minecraft:magenta_candle"
    },
    "light_blue_candle": {
      "id": "minecraft:light_blue_candle"
    },
    "yellow_candle": {
      "id": "minecraft:yellow_candle"
    },
    "lime_candle": {
      "id": "minecraft:lime_candle"
    },
    "pink_candle": {
      "id": "minecraft:pink_candle"
    },
    "gray_candle": {
      "id": "minecraft:gray_candle"
    },
    "light_gray_candle": {
      "id": "minecraft:light_gray_candle"
    },
    "cyan_candle": {
      "id": "minecraft:cyan_candle"
    },
    "purple_candle": {
      "id": "minecraft:purple_candle"
    },
    "blue_candle": {
      "id": "minecraft:blue_candle"
    },
    "brown_candle": {
      "id": "minecraft:brown_candle"
    },
    "green_candle": {
      "id": "minecraft:green_candle"
    },
    "red_candle": {
      "id": "minecraft:red_candle"
    },
    "black_candle": {
      "id": "minecraft:black_candle"
    },
    "small_amethyst_bud": {
      "id": "minecraft:small_amethyst_bud"
    },
    "medium_amethyst_bud": {
      "id": "minecraft:medium_amethyst_bud"
    },
    "large_amethyst_bud": {
      "id": "minecraft:large_amethyst_bud"
    },
    "amethyst_cluster": {
      "id": "minecraft:amethyst_cluster"
    },
    "pointed_dripstone": {
      "id": "minecraft:pointed_dripstone"
    },
    "ochre_froglight": {
      "id": "minecraft:ochre_froglight"
    },
    "verdant_froglight": {
      "id": "minecraft:verdant_froglight"
    },
    "pearlescent_froglight": {
      "id": "minecraft:pearlescent_froglight"
    },
    "frogspawn": {
      "id": "minecraft:frogspawn"
    },
    "echo_shard": {
      "id": "minecraft:echo_shard"
    }
  },
  "create_things_and_misc": {
    "id": "create_things_and_misc:glue_packaging",
    "glue_packaging": {
      "id": "create_things_and_misc:glue_packaging"
    },
    "slime_bucket": {
      "id": "create_things_and_misc:slime_bucket"
    },
    "porridge": {
      "id": "create_things_and_misc:porridge"
    },
    "spout_gun": {
      "id": "create_things_and_misc:spout_gun"
    },
    "spout_gun_water": {
      "id": "create_things_and_misc:spout_gun_water"
    },
    "spout_gun_lava": {
      "id": "create_things_and_misc:spout_gun_lava"
    },
    "spout_gun_chocolate": {
      "id": "create_things_and_misc:spout_gun_chocolate"
    },
    "spout_gun_honey": {
      "id": "create_things_and_misc:spout_gun_honey"
    },
    "spout_gun_slime": {
      "id": "create_things_and_misc:spout_gun_slime"
    },
    "radar": {
      "id": "create_things_and_misc:radar"
    },
    "neon_tube": {
      "id": "create_things_and_misc:neon_tube"
    },
    "portable_whistle": {
      "id": "create_things_and_misc:portable_whistle"
    },
    "netherite_portable_whistle": {
      "id": "create_things_and_misc:netherite_portable_whistle"
    },
    "magnifying_glass": {
      "id": "create_things_and_misc:magnifying_glass"
    },
    "sticky_boots_boots": {
      "id": "create_things_and_misc:sticky_boots_boots"
    },
    "crushed_magma": {
      "id": "create_things_and_misc:crushed_magma"
    },
    "rose_quartz_sheet": {
      "id": "create_things_and_misc:rose_quartz_sheet"
    },
    "experience_sheet": {
      "id": "create_things_and_misc:experience_sheet"
    },
    "vibration_mechanism": {
      "id": "create_things_and_misc:vibration_mechanism"
    },
    "mending_rune": {
      "id": "create_things_and_misc:mending_rune"
    },
    "empty_card": {
      "id": "create_things_and_misc:empty_card"
    },
    "card_reader": {
      "id": "create_things_and_misc:card_reader"
    },
    "card_press": {
      "id": "create_things_and_misc:card_press"
    },
    "copper_knife": {
      "id": "create_things_and_misc:copper_knife"
    },
    "zinc_knife": {
      "id": "create_things_and_misc:zinc_knife"
    },
    "brass_knife": {
      "id": "create_things_and_misc:brass_knife"
    },
    "brass_speaker": {
      "id": "create_things_and_misc:brass_speaker"
    },
    "copper_scaffolding": {
      "id": "create_things_and_misc:copper_scaffolding"
    },
    "sticky_launcher": {
      "id": "create_things_and_misc:sticky_launcher"
    },
    "brass_sticky_launcher": {
      "id": "create_things_and_misc:brass_sticky_launcher"
    },
    "powdered_obsidian_block": {
      "id": "create_things_and_misc:powdered_obsidian_block"
    },
    "train_stop": {
      "id": "create_things_and_misc:train_stop"
    },
    "brass_tiles": {
      "id": "create_things_and_misc:brass_tiles"
    },
    "brass_tiles_slab": {
      "id": "create_things_and_misc:brass_tiles_slab"
    },
    "brass_tiles_stair": {
      "id": "create_things_and_misc:brass_tiles_stair"
    },
    "brass_bricks": {
      "id": "create_things_and_misc:brass_bricks"
    },
    "brass_brick_slab": {
      "id": "create_things_and_misc:brass_brick_slab"
    },
    "brass_brick_stairs": {
      "id": "create_things_and_misc:brass_brick_stairs"
    },
    "sturdy_sheet_block": {
      "id": "create_things_and_misc:sturdy_sheet_block"
    },
    "sturdy_sheet_slab": {
      "id": "create_things_and_misc:sturdy_sheet_slab"
    },
    "sturdy_sheet_slab_stairs": {
      "id": "create_things_and_misc:sturdy_sheet_slab_stairs"
    },
    "sturdy_truss": {
      "id": "create_things_and_misc:sturdy_truss"
    },
    "copper_truss": {
      "id": "create_things_and_misc:copper_truss"
    },
    "brass_truss": {
      "id": "create_things_and_misc:brass_truss"
    },
    "train_buffer": {
      "id": "create_things_and_misc:train_buffer"
    },
    "andesite_casing_door": {
      "id": "create_things_and_misc:andesite_casing_door"
    },
    "andesite_casing_trapdoor": {
      "id": "create_things_and_misc:andesite_casing_trapdoor"
    },
    "copper_casing_door": {
      "id": "create_things_and_misc:copper_casing_door"
    },
    "copper_casing_trapdoor": {
      "id": "create_things_and_misc:copper_casing_trapdoor"
    },
    "brass_casing_door": {
      "id": "create_things_and_misc:brass_casing_door"
    },
    "brass_casing_trapdoor": {
      "id": "create_things_and_misc:brass_casing_trapdoor"
    },
    "train_sing": {
      "id": "create_things_and_misc:train_sing"
    },
    "train_sing_2": {
      "id": "create_things_and_misc:train_sing_2"
    },
    "train_sing_3": {
      "id": "create_things_and_misc:train_sing_3"
    },
    "train_sing_4": {
      "id": "create_things_and_misc:train_sing_4"
    },
    "train_sing_5": {
      "id": "create_things_and_misc:train_sing_5"
    },
    "train_sing_yellow_1": {
      "id": "create_things_and_misc:train_sing_yellow_1"
    },
    "train_sing_yellow_2": {
      "id": "create_things_and_misc:train_sing_yellow_2"
    },
    "train_sing_yellow_3": {
      "id": "create_things_and_misc:train_sing_yellow_3"
    },
    "train_sing_yellow_4": {
      "id": "create_things_and_misc:train_sing_yellow_4"
    },
    "train_sing_yellow_5": {
      "id": "create_things_and_misc:train_sing_yellow_5"
    },
    "redsing": {
      "id": "create_things_and_misc:redsing"
    },
    "redsing_1": {
      "id": "create_things_and_misc:redsing_1"
    },
    "redsing_2": {
      "id": "create_things_and_misc:redsing_2"
    },
    "green_sing": {
      "id": "create_things_and_misc:green_sing"
    },
    "green_sing_1": {
      "id": "create_things_and_misc:green_sing_1"
    },
    "green_sing_2": {
      "id": "create_things_and_misc:green_sing_2"
    },
    "green_sing_3": {
      "id": "create_things_and_misc:green_sing_3"
    },
    "green_sing_4": {
      "id": "create_things_and_misc:green_sing_4"
    },
    "green_sing_5": {
      "id": "create_things_and_misc:green_sing_5"
    },
    "green_sing_6": {
      "id": "create_things_and_misc:green_sing_6"
    },
    "speed_25": {
      "id": "create_things_and_misc:speed_25"
    },
    "speed_50": {
      "id": "create_things_and_misc:speed_50"
    },
    "speed_75": {
      "id": "create_things_and_misc:speed_75"
    },
    "speed_100": {
      "id": "create_things_and_misc:speed_100"
    }
  },
  "integratedterminals": {
    "id": "integratedterminals:terminal_storage_portable",
    "terminal_storage_portable": {
      "id": "integratedterminals:terminal_storage_portable"
    },
    "menril_glass": {
      "id": "integratedterminals:menril_glass"
    },
    "chorus_glass": {
      "id": "integratedterminals:chorus_glass"
    },
    "part_terminal_storage": {
      "id": "integratedterminals:part_terminal_storage"
    },
    "part_terminal_crafting_job": {
      "id": "integratedterminals:part_terminal_crafting_job"
    }
  },
  "create_jetpack": {
    "id": "create_jetpack:jetpack",
    "jetpack": {
      "id": "create_jetpack:jetpack"
    }
  },
  "cookingforblockheads": {
    "id": "cookingforblockheads:oven",
    "oven": {
      "id": "cookingforblockheads:oven"
    },
    "tool_rack": {
      "id": "cookingforblockheads:tool_rack"
    },
    "toaster": {
      "id": "cookingforblockheads:toaster"
    },
    "milk_jar": {
      "id": "cookingforblockheads:milk_jar"
    },
    "cow_jar": {
      "id": "cookingforblockheads:cow_jar"
    },
    "spice_rack": {
      "id": "cookingforblockheads:spice_rack"
    },
    "fruit_basket": {
      "id": "cookingforblockheads:fruit_basket"
    },
    "cooking_table": {
      "id": "cookingforblockheads:cooking_table"
    },
    "fridge": {
      "id": "cookingforblockheads:fridge"
    },
    "sink": {
      "id": "cookingforblockheads:sink"
    },
    "counter": {
      "id": "cookingforblockheads:counter"
    },
    "cabinet": {
      "id": "cookingforblockheads:cabinet"
    },
    "corner": {
      "id": "cookingforblockheads:corner"
    },
    "hanging_corner": {
      "id": "cookingforblockheads:hanging_corner"
    },
    "white_kitchen_floor": {
      "id": "cookingforblockheads:white_kitchen_floor"
    },
    "orange_kitchen_floor": {
      "id": "cookingforblockheads:orange_kitchen_floor"
    },
    "magenta_kitchen_floor": {
      "id": "cookingforblockheads:magenta_kitchen_floor"
    },
    "light_blue_kitchen_floor": {
      "id": "cookingforblockheads:light_blue_kitchen_floor"
    },
    "yellow_kitchen_floor": {
      "id": "cookingforblockheads:yellow_kitchen_floor"
    },
    "lime_kitchen_floor": {
      "id": "cookingforblockheads:lime_kitchen_floor"
    },
    "pink_kitchen_floor": {
      "id": "cookingforblockheads:pink_kitchen_floor"
    },
    "gray_kitchen_floor": {
      "id": "cookingforblockheads:gray_kitchen_floor"
    },
    "light_gray_kitchen_floor": {
      "id": "cookingforblockheads:light_gray_kitchen_floor"
    },
    "cyan_kitchen_floor": {
      "id": "cookingforblockheads:cyan_kitchen_floor"
    },
    "purple_kitchen_floor": {
      "id": "cookingforblockheads:purple_kitchen_floor"
    },
    "blue_kitchen_floor": {
      "id": "cookingforblockheads:blue_kitchen_floor"
    },
    "brown_kitchen_floor": {
      "id": "cookingforblockheads:brown_kitchen_floor"
    },
    "green_kitchen_floor": {
      "id": "cookingforblockheads:green_kitchen_floor"
    },
    "red_kitchen_floor": {
      "id": "cookingforblockheads:red_kitchen_floor"
    },
    "black_kitchen_floor": {
      "id": "cookingforblockheads:black_kitchen_floor"
    },
    "recipe_book": {
      "id": "cookingforblockheads:recipe_book"
    },
    "no_filter_edition": {
      "id": "cookingforblockheads:no_filter_edition"
    },
    "crafting_book": {
      "id": "cookingforblockheads:crafting_book"
    },
    "heating_unit": {
      "id": "cookingforblockheads:heating_unit"
    },
    "ice_unit": {
      "id": "cookingforblockheads:ice_unit"
    },
    "preservation_chamber": {
      "id": "cookingforblockheads:preservation_chamber"
    }
  },
  "integratedrest": {
    "id": "integratedrest:http",
    "http": {
      "id": "integratedrest:http"
    }
  },
  "sophisticatedbackpacks": {
    "id": "sophisticatedbackpacks:backpack",
    "backpack": {
      "id": "sophisticatedbackpacks:backpack"
    },
    "iron_backpack": {
      "id": "sophisticatedbackpacks:iron_backpack"
    },
    "gold_backpack": {
      "id": "sophisticatedbackpacks:gold_backpack"
    },
    "diamond_backpack": {
      "id": "sophisticatedbackpacks:diamond_backpack"
    },
    "netherite_backpack": {
      "id": "sophisticatedbackpacks:netherite_backpack"
    },
    "pickup_upgrade": {
      "id": "sophisticatedbackpacks:pickup_upgrade"
    },
    "advanced_pickup_upgrade": {
      "id": "sophisticatedbackpacks:advanced_pickup_upgrade"
    },
    "filter_upgrade": {
      "id": "sophisticatedbackpacks:filter_upgrade"
    },
    "advanced_filter_upgrade": {
      "id": "sophisticatedbackpacks:advanced_filter_upgrade"
    },
    "magnet_upgrade": {
      "id": "sophisticatedbackpacks:magnet_upgrade"
    },
    "advanced_magnet_upgrade": {
      "id": "sophisticatedbackpacks:advanced_magnet_upgrade"
    },
    "feeding_upgrade": {
      "id": "sophisticatedbackpacks:feeding_upgrade"
    },
    "advanced_feeding_upgrade": {
      "id": "sophisticatedbackpacks:advanced_feeding_upgrade"
    },
    "compacting_upgrade": {
      "id": "sophisticatedbackpacks:compacting_upgrade"
    },
    "advanced_compacting_upgrade": {
      "id": "sophisticatedbackpacks:advanced_compacting_upgrade"
    },
    "void_upgrade": {
      "id": "sophisticatedbackpacks:void_upgrade"
    },
    "advanced_void_upgrade": {
      "id": "sophisticatedbackpacks:advanced_void_upgrade"
    },
    "restock_upgrade": {
      "id": "sophisticatedbackpacks:restock_upgrade"
    },
    "advanced_restock_upgrade": {
      "id": "sophisticatedbackpacks:advanced_restock_upgrade"
    },
    "deposit_upgrade": {
      "id": "sophisticatedbackpacks:deposit_upgrade"
    },
    "advanced_deposit_upgrade": {
      "id": "sophisticatedbackpacks:advanced_deposit_upgrade"
    },
    "refill_upgrade": {
      "id": "sophisticatedbackpacks:refill_upgrade"
    },
    "advanced_refill_upgrade": {
      "id": "sophisticatedbackpacks:advanced_refill_upgrade"
    },
    "inception_upgrade": {
      "id": "sophisticatedbackpacks:inception_upgrade"
    },
    "everlasting_upgrade": {
      "id": "sophisticatedbackpacks:everlasting_upgrade"
    },
    "smelting_upgrade": {
      "id": "sophisticatedbackpacks:smelting_upgrade"
    },
    "auto_smelting_upgrade": {
      "id": "sophisticatedbackpacks:auto_smelting_upgrade"
    },
    "smoking_upgrade": {
      "id": "sophisticatedbackpacks:smoking_upgrade"
    },
    "auto_smoking_upgrade": {
      "id": "sophisticatedbackpacks:auto_smoking_upgrade"
    },
    "blasting_upgrade": {
      "id": "sophisticatedbackpacks:blasting_upgrade"
    },
    "auto_blasting_upgrade": {
      "id": "sophisticatedbackpacks:auto_blasting_upgrade"
    },
    "crafting_upgrade": {
      "id": "sophisticatedbackpacks:crafting_upgrade"
    },
    "stonecutter_upgrade": {
      "id": "sophisticatedbackpacks:stonecutter_upgrade"
    },
    "stack_upgrade_tier_1": {
      "id": "sophisticatedbackpacks:stack_upgrade_tier_1"
    },
    "stack_upgrade_tier_2": {
      "id": "sophisticatedbackpacks:stack_upgrade_tier_2"
    },
    "stack_upgrade_tier_3": {
      "id": "sophisticatedbackpacks:stack_upgrade_tier_3"
    },
    "stack_upgrade_tier_4": {
      "id": "sophisticatedbackpacks:stack_upgrade_tier_4"
    },
    "jukebox_upgrade": {
      "id": "sophisticatedbackpacks:jukebox_upgrade"
    },
    "tool_swapper_upgrade": {
      "id": "sophisticatedbackpacks:tool_swapper_upgrade"
    },
    "advanced_tool_swapper_upgrade": {
      "id": "sophisticatedbackpacks:advanced_tool_swapper_upgrade"
    },
    "tank_upgrade": {
      "id": "sophisticatedbackpacks:tank_upgrade"
    },
    "battery_upgrade": {
      "id": "sophisticatedbackpacks:battery_upgrade"
    },
    "pump_upgrade": {
      "id": "sophisticatedbackpacks:pump_upgrade"
    },
    "advanced_pump_upgrade": {
      "id": "sophisticatedbackpacks:advanced_pump_upgrade"
    },
    "xp_pump_upgrade": {
      "id": "sophisticatedbackpacks:xp_pump_upgrade"
    },
    "upgrade_base": {
      "id": "sophisticatedbackpacks:upgrade_base"
    }
  },
  "buildinggadgets": {
    "id": "buildinggadgets:gadget_building",
    "gadget_building": {
      "id": "buildinggadgets:gadget_building"
    },
    "gadget_exchanging": {
      "id": "buildinggadgets:gadget_exchanging"
    },
    "gadget_copy_paste": {
      "id": "buildinggadgets:gadget_copy_paste"
    },
    "gadget_destruction": {
      "id": "buildinggadgets:gadget_destruction"
    },
    "construction_paste_container_t1": {
      "id": "buildinggadgets:construction_paste_container_t1"
    },
    "construction_paste_container_t2": {
      "id": "buildinggadgets:construction_paste_container_t2"
    },
    "construction_paste_container_t3": {
      "id": "buildinggadgets:construction_paste_container_t3"
    },
    "construction_paste_container_creative": {
      "id": "buildinggadgets:construction_paste_container_creative"
    },
    "construction_paste": {
      "id": "buildinggadgets:construction_paste"
    },
    "construction_chunk_dense": {
      "id": "buildinggadgets:construction_chunk_dense"
    },
    "template": {
      "id": "buildinggadgets:template"
    },
    "construction_block": {
      "id": "buildinggadgets:construction_block"
    },
    "construction_block_dense": {
      "id": "buildinggadgets:construction_block_dense"
    },
    "construction_block_powder": {
      "id": "buildinggadgets:construction_block_powder"
    },
    "template_manager": {
      "id": "buildinggadgets:template_manager"
    }
  },
  "darkutils": {
    "id": "darkutils:charm_portal",
    "charm_portal": {
      "id": "darkutils:charm_portal"
    },
    "charm_sleep": {
      "id": "darkutils:charm_sleep"
    },
    "charm_warding": {
      "id": "darkutils:charm_warding"
    },
    "tome_enchanting": {
      "id": "darkutils:tome_enchanting"
    },
    "tome_sga": {
      "id": "darkutils:tome_sga"
    },
    "tome_illager": {
      "id": "darkutils:tome_illager"
    },
    "tome_shadows": {
      "id": "darkutils:tome_shadows"
    },
    "tome_runelic": {
      "id": "darkutils:tome_runelic"
    },
    "tome_pigpen": {
      "id": "darkutils:tome_pigpen"
    },
    "blank_plate": {
      "id": "darkutils:blank_plate"
    },
    "vector_plate": {
      "id": "darkutils:vector_plate"
    },
    "vector_plate_fast": {
      "id": "darkutils:vector_plate_fast"
    },
    "vector_plate_extreme": {
      "id": "darkutils:vector_plate_extreme"
    },
    "vector_plate_ultra": {
      "id": "darkutils:vector_plate_ultra"
    },
    "damage_plate": {
      "id": "darkutils:damage_plate"
    },
    "damage_plate_maim": {
      "id": "darkutils:damage_plate_maim"
    },
    "damage_plate_player": {
      "id": "darkutils:damage_plate_player"
    },
    "flame_plate": {
      "id": "darkutils:flame_plate"
    },
    "slowness_plate": {
      "id": "darkutils:slowness_plate"
    },
    "fatigue_plate": {
      "id": "darkutils:fatigue_plate"
    },
    "darkness_plate": {
      "id": "darkutils:darkness_plate"
    },
    "hunger_plate": {
      "id": "darkutils:hunger_plate"
    },
    "weakness_plate": {
      "id": "darkutils:weakness_plate"
    },
    "poison_plate": {
      "id": "darkutils:poison_plate"
    },
    "wither_plate": {
      "id": "darkutils:wither_plate"
    },
    "alert_plate": {
      "id": "darkutils:alert_plate"
    },
    "levitation_plate": {
      "id": "darkutils:levitation_plate"
    },
    "misfortune_plate": {
      "id": "darkutils:misfortune_plate"
    },
    "slowfall_plate": {
      "id": "darkutils:slowfall_plate"
    },
    "omen_plate": {
      "id": "darkutils:omen_plate"
    },
    "frost_plate": {
      "id": "darkutils:frost_plate"
    },
    "filter_player": {
      "id": "darkutils:filter_player"
    },
    "filter_undead": {
      "id": "darkutils:filter_undead"
    },
    "filter_arthropod": {
      "id": "darkutils:filter_arthropod"
    },
    "filter_illager": {
      "id": "darkutils:filter_illager"
    },
    "filter_raider": {
      "id": "darkutils:filter_raider"
    },
    "filter_hostile": {
      "id": "darkutils:filter_hostile"
    },
    "filter_animal": {
      "id": "darkutils:filter_animal"
    },
    "filter_child": {
      "id": "darkutils:filter_child"
    },
    "filter_pet": {
      "id": "darkutils:filter_pet"
    },
    "filter_slime": {
      "id": "darkutils:filter_slime"
    },
    "filter_villager": {
      "id": "darkutils:filter_villager"
    },
    "filter_fire_immune": {
      "id": "darkutils:filter_fire_immune"
    },
    "filter_golem": {
      "id": "darkutils:filter_golem"
    },
    "filter_water": {
      "id": "darkutils:filter_water"
    },
    "filter_named": {
      "id": "darkutils:filter_named"
    },
    "filter_freeze_immune": {
      "id": "darkutils:filter_freeze_immune"
    },
    "filter_equipment": {
      "id": "darkutils:filter_equipment"
    },
    "filter_passenger": {
      "id": "darkutils:filter_passenger"
    },
    "redstone_randomizer": {
      "id": "darkutils:redstone_randomizer"
    },
    "shielded_redstone": {
      "id": "darkutils:shielded_redstone"
    }
  },
  "createcafe": {
    "id": "createcafe:oreo",
    "oreo": {
      "id": "createcafe:oreo"
    },
    "oreo_half_raw": {
      "id": "createcafe:oreo_half_raw"
    },
    "oreo_half": {
      "id": "createcafe:oreo_half"
    },
    "oreo_dough": {
      "id": "createcafe:oreo_dough"
    },
    "oreo_crushed": {
      "id": "createcafe:oreo_crushed"
    },
    "apple_milk_tea": {
      "id": "createcafe:apple_milk_tea"
    },
    "pumpkin_milk_tea": {
      "id": "createcafe:pumpkin_milk_tea"
    },
    "sweetberry_milk_tea": {
      "id": "createcafe:sweetberry_milk_tea"
    },
    "watermelon_milk_tea": {
      "id": "createcafe:watermelon_milk_tea"
    },
    "oreo_milk_tea": {
      "id": "createcafe:oreo_milk_tea"
    },
    "boba_cup": {
      "id": "createcafe:boba_cup"
    },
    "empty_boba_cup": {
      "id": "createcafe:empty_boba_cup"
    },
    "boba": {
      "id": "createcafe:boba"
    },
    "raw_boba": {
      "id": "createcafe:raw_boba"
    },
    "tapioca_flour": {
      "id": "createcafe:tapioca_flour"
    },
    "coffee_fruit": {
      "id": "createcafe:coffee_fruit"
    },
    "coffee_beans": {
      "id": "createcafe:coffee_beans"
    },
    "roasted_coffee": {
      "id": "createcafe:roasted_coffee"
    },
    "cassava_seeds": {
      "id": "createcafe:cassava_seeds"
    },
    "cassava_root": {
      "id": "createcafe:cassava_root"
    },
    "melted_sugar_bucket": {
      "id": "createcafe:melted_sugar_bucket"
    },
    "filling_bucket": {
      "id": "createcafe:filling_bucket"
    },
    "oreo_tea_bucket": {
      "id": "createcafe:oreo_tea_bucket"
    },
    "mango_tea_bucket": {
      "id": "createcafe:mango_tea_bucket"
    },
    "lime_tea_bucket": {
      "id": "createcafe:lime_tea_bucket"
    },
    "lychee_tea_bucket": {
      "id": "createcafe:lychee_tea_bucket"
    },
    "kiwi_tea_bucket": {
      "id": "createcafe:kiwi_tea_bucket"
    },
    "mana_tea_bucket": {
      "id": "createcafe:mana_tea_bucket"
    },
    "blood_tea_bucket": {
      "id": "createcafe:blood_tea_bucket"
    },
    "lemon_tea_bucket": {
      "id": "createcafe:lemon_tea_bucket"
    },
    "watermelon_tea_bucket": {
      "id": "createcafe:watermelon_tea_bucket"
    },
    "strawberry_tea_bucket": {
      "id": "createcafe:strawberry_tea_bucket"
    },
    "blueberry_tea_bucket": {
      "id": "createcafe:blueberry_tea_bucket"
    },
    "vanilla_tea_bucket": {
      "id": "createcafe:vanilla_tea_bucket"
    },
    "orange_tea_bucket": {
      "id": "createcafe:orange_tea_bucket"
    },
    "peach_tea_bucket": {
      "id": "createcafe:peach_tea_bucket"
    },
    "pineapple_tea_bucket": {
      "id": "createcafe:pineapple_tea_bucket"
    },
    "banana_tea_bucket": {
      "id": "createcafe:banana_tea_bucket"
    },
    "yucca_tea_bucket": {
      "id": "createcafe:yucca_tea_bucket"
    },
    "cherry_tea_bucket": {
      "id": "createcafe:cherry_tea_bucket"
    },
    "plum_tea_bucket": {
      "id": "createcafe:plum_tea_bucket"
    },
    "aloe_tea_bucket": {
      "id": "createcafe:aloe_tea_bucket"
    },
    "apple_tea_bucket": {
      "id": "createcafe:apple_tea_bucket"
    },
    "blackberry_tea_bucket": {
      "id": "createcafe:blackberry_tea_bucket"
    },
    "pumpkin_tea_bucket": {
      "id": "createcafe:pumpkin_tea_bucket"
    },
    "jackfruit_tea_bucket": {
      "id": "createcafe:jackfruit_tea_bucket"
    },
    "coconut_tea_bucket": {
      "id": "createcafe:coconut_tea_bucket"
    },
    "dragonfruit_tea_bucket": {
      "id": "createcafe:dragonfruit_tea_bucket"
    },
    "apricot_tea_bucket": {
      "id": "createcafe:apricot_tea_bucket"
    },
    "avocado_tea_bucket": {
      "id": "createcafe:avocado_tea_bucket"
    },
    "sweetberry_tea_bucket": {
      "id": "createcafe:sweetberry_tea_bucket"
    },
    "durian_tea_bucket": {
      "id": "createcafe:durian_tea_bucket"
    },
    "fig_tea_bucket": {
      "id": "createcafe:fig_tea_bucket"
    },
    "tamarind_tea_bucket": {
      "id": "createcafe:tamarind_tea_bucket"
    },
    "gooseberry_tea_bucket": {
      "id": "createcafe:gooseberry_tea_bucket"
    },
    "grape_tea_bucket": {
      "id": "createcafe:grape_tea_bucket"
    },
    "grapefruit_tea_bucket": {
      "id": "createcafe:grapefruit_tea_bucket"
    },
    "papaya_tea_bucket": {
      "id": "createcafe:papaya_tea_bucket"
    },
    "guava_tea_bucket": {
      "id": "createcafe:guava_tea_bucket"
    },
    "passionfruit_tea_bucket": {
      "id": "createcafe:passionfruit_tea_bucket"
    },
    "pomegranate_tea_bucket": {
      "id": "createcafe:pomegranate_tea_bucket"
    },
    "persimmon_tea_bucket": {
      "id": "createcafe:persimmon_tea_bucket"
    },
    "raspberry_tea_bucket": {
      "id": "createcafe:raspberry_tea_bucket"
    },
    "starfruit_tea_bucket": {
      "id": "createcafe:starfruit_tea_bucket"
    },
    "lavender_tea_bucket": {
      "id": "createcafe:lavender_tea_bucket"
    },
    "pomelo_tea_bucket": {
      "id": "createcafe:pomelo_tea_bucket"
    },
    "mandarin_tea_bucket": {
      "id": "createcafe:mandarin_tea_bucket"
    },
    "citron_tea_bucket": {
      "id": "createcafe:citron_tea_bucket"
    },
    "redlove_tea_bucket": {
      "id": "createcafe:redlove_tea_bucket"
    },
    "barberry_tea_bucket": {
      "id": "createcafe:barberry_tea_bucket"
    }
  },
  "farmersdelight": {
    "id": "farmersdelight:stove",
    "stove": {
      "id": "farmersdelight:stove"
    },
    "cooking_pot": {
      "id": "farmersdelight:cooking_pot"
    },
    "skillet": {
      "id": "farmersdelight:skillet"
    },
    "cutting_board": {
      "id": "farmersdelight:cutting_board"
    },
    "basket": {
      "id": "farmersdelight:basket"
    },
    "carrot_crate": {
      "id": "farmersdelight:carrot_crate"
    },
    "potato_crate": {
      "id": "farmersdelight:potato_crate"
    },
    "beetroot_crate": {
      "id": "farmersdelight:beetroot_crate"
    },
    "cabbage_crate": {
      "id": "farmersdelight:cabbage_crate"
    },
    "tomato_crate": {
      "id": "farmersdelight:tomato_crate"
    },
    "onion_crate": {
      "id": "farmersdelight:onion_crate"
    },
    "rice_bale": {
      "id": "farmersdelight:rice_bale"
    },
    "rice_bag": {
      "id": "farmersdelight:rice_bag"
    },
    "straw_bale": {
      "id": "farmersdelight:straw_bale"
    },
    "safety_net": {
      "id": "farmersdelight:safety_net"
    },
    "oak_cabinet": {
      "id": "farmersdelight:oak_cabinet"
    },
    "spruce_cabinet": {
      "id": "farmersdelight:spruce_cabinet"
    },
    "birch_cabinet": {
      "id": "farmersdelight:birch_cabinet"
    },
    "jungle_cabinet": {
      "id": "farmersdelight:jungle_cabinet"
    },
    "acacia_cabinet": {
      "id": "farmersdelight:acacia_cabinet"
    },
    "dark_oak_cabinet": {
      "id": "farmersdelight:dark_oak_cabinet"
    },
    "mangrove_cabinet": {
      "id": "farmersdelight:mangrove_cabinet"
    },
    "crimson_cabinet": {
      "id": "farmersdelight:crimson_cabinet"
    },
    "warped_cabinet": {
      "id": "farmersdelight:warped_cabinet"
    },
    "tatami": {
      "id": "farmersdelight:tatami"
    },
    "full_tatami_mat": {
      "id": "farmersdelight:full_tatami_mat"
    },
    "half_tatami_mat": {
      "id": "farmersdelight:half_tatami_mat"
    },
    "canvas_rug": {
      "id": "farmersdelight:canvas_rug"
    },
    "organic_compost": {
      "id": "farmersdelight:organic_compost"
    },
    "rich_soil": {
      "id": "farmersdelight:rich_soil"
    },
    "rich_soil_farmland": {
      "id": "farmersdelight:rich_soil_farmland"
    },
    "rope": {
      "id": "farmersdelight:rope"
    },
    "canvas_sign": {
      "id": "farmersdelight:canvas_sign"
    },
    "white_canvas_sign": {
      "id": "farmersdelight:white_canvas_sign"
    },
    "orange_canvas_sign": {
      "id": "farmersdelight:orange_canvas_sign"
    },
    "magenta_canvas_sign": {
      "id": "farmersdelight:magenta_canvas_sign"
    },
    "light_blue_canvas_sign": {
      "id": "farmersdelight:light_blue_canvas_sign"
    },
    "yellow_canvas_sign": {
      "id": "farmersdelight:yellow_canvas_sign"
    },
    "lime_canvas_sign": {
      "id": "farmersdelight:lime_canvas_sign"
    },
    "pink_canvas_sign": {
      "id": "farmersdelight:pink_canvas_sign"
    },
    "gray_canvas_sign": {
      "id": "farmersdelight:gray_canvas_sign"
    },
    "light_gray_canvas_sign": {
      "id": "farmersdelight:light_gray_canvas_sign"
    },
    "cyan_canvas_sign": {
      "id": "farmersdelight:cyan_canvas_sign"
    },
    "purple_canvas_sign": {
      "id": "farmersdelight:purple_canvas_sign"
    },
    "blue_canvas_sign": {
      "id": "farmersdelight:blue_canvas_sign"
    },
    "brown_canvas_sign": {
      "id": "farmersdelight:brown_canvas_sign"
    },
    "green_canvas_sign": {
      "id": "farmersdelight:green_canvas_sign"
    },
    "red_canvas_sign": {
      "id": "farmersdelight:red_canvas_sign"
    },
    "black_canvas_sign": {
      "id": "farmersdelight:black_canvas_sign"
    },
    "flint_knife": {
      "id": "farmersdelight:flint_knife"
    },
    "iron_knife": {
      "id": "farmersdelight:iron_knife"
    },
    "diamond_knife": {
      "id": "farmersdelight:diamond_knife"
    },
    "netherite_knife": {
      "id": "farmersdelight:netherite_knife"
    },
    "golden_knife": {
      "id": "farmersdelight:golden_knife"
    },
    "straw": {
      "id": "farmersdelight:straw"
    },
    "canvas": {
      "id": "farmersdelight:canvas"
    },
    "tree_bark": {
      "id": "farmersdelight:tree_bark"
    },
    "sandy_shrub": {
      "id": "farmersdelight:sandy_shrub"
    },
    "wild_cabbages": {
      "id": "farmersdelight:wild_cabbages"
    },
    "wild_onions": {
      "id": "farmersdelight:wild_onions"
    },
    "wild_tomatoes": {
      "id": "farmersdelight:wild_tomatoes"
    },
    "wild_carrots": {
      "id": "farmersdelight:wild_carrots"
    },
    "wild_potatoes": {
      "id": "farmersdelight:wild_potatoes"
    },
    "wild_beetroots": {
      "id": "farmersdelight:wild_beetroots"
    },
    "wild_rice": {
      "id": "farmersdelight:wild_rice"
    },
    "brown_mushroom_colony": {
      "id": "farmersdelight:brown_mushroom_colony"
    },
    "red_mushroom_colony": {
      "id": "farmersdelight:red_mushroom_colony"
    },
    "cabbage": {
      "id": "farmersdelight:cabbage"
    },
    "tomato": {
      "id": "farmersdelight:tomato"
    },
    "onion": {
      "id": "farmersdelight:onion"
    },
    "rice_panicle": {
      "id": "farmersdelight:rice_panicle"
    },
    "rice": {
      "id": "farmersdelight:rice"
    },
    "cabbage_seeds": {
      "id": "farmersdelight:cabbage_seeds"
    },
    "tomato_seeds": {
      "id": "farmersdelight:tomato_seeds"
    },
    "rotten_tomato": {
      "id": "farmersdelight:rotten_tomato"
    },
    "fried_egg": {
      "id": "farmersdelight:fried_egg"
    },
    "milk_bottle": {
      "id": "farmersdelight:milk_bottle"
    },
    "hot_cocoa": {
      "id": "farmersdelight:hot_cocoa"
    },
    "apple_cider": {
      "id": "farmersdelight:apple_cider"
    },
    "melon_juice": {
      "id": "farmersdelight:melon_juice"
    },
    "tomato_sauce": {
      "id": "farmersdelight:tomato_sauce"
    },
    "wheat_dough": {
      "id": "farmersdelight:wheat_dough"
    },
    "raw_pasta": {
      "id": "farmersdelight:raw_pasta"
    },
    "pumpkin_slice": {
      "id": "farmersdelight:pumpkin_slice"
    },
    "cabbage_leaf": {
      "id": "farmersdelight:cabbage_leaf"
    },
    "minced_beef": {
      "id": "farmersdelight:minced_beef"
    },
    "beef_patty": {
      "id": "farmersdelight:beef_patty"
    },
    "chicken_cuts": {
      "id": "farmersdelight:chicken_cuts"
    },
    "cooked_chicken_cuts": {
      "id": "farmersdelight:cooked_chicken_cuts"
    },
    "bacon": {
      "id": "farmersdelight:bacon"
    },
    "cooked_bacon": {
      "id": "farmersdelight:cooked_bacon"
    },
    "cod_slice": {
      "id": "farmersdelight:cod_slice"
    },
    "cooked_cod_slice": {
      "id": "farmersdelight:cooked_cod_slice"
    },
    "salmon_slice": {
      "id": "farmersdelight:salmon_slice"
    },
    "cooked_salmon_slice": {
      "id": "farmersdelight:cooked_salmon_slice"
    },
    "mutton_chops": {
      "id": "farmersdelight:mutton_chops"
    },
    "cooked_mutton_chops": {
      "id": "farmersdelight:cooked_mutton_chops"
    },
    "ham": {
      "id": "farmersdelight:ham"
    },
    "smoked_ham": {
      "id": "farmersdelight:smoked_ham"
    },
    "pie_crust": {
      "id": "farmersdelight:pie_crust"
    },
    "apple_pie": {
      "id": "farmersdelight:apple_pie"
    },
    "sweet_berry_cheesecake": {
      "id": "farmersdelight:sweet_berry_cheesecake"
    },
    "chocolate_pie": {
      "id": "farmersdelight:chocolate_pie"
    },
    "cake_slice": {
      "id": "farmersdelight:cake_slice"
    },
    "apple_pie_slice": {
      "id": "farmersdelight:apple_pie_slice"
    },
    "sweet_berry_cheesecake_slice": {
      "id": "farmersdelight:sweet_berry_cheesecake_slice"
    },
    "chocolate_pie_slice": {
      "id": "farmersdelight:chocolate_pie_slice"
    },
    "sweet_berry_cookie": {
      "id": "farmersdelight:sweet_berry_cookie"
    },
    "honey_cookie": {
      "id": "farmersdelight:honey_cookie"
    },
    "melon_popsicle": {
      "id": "farmersdelight:melon_popsicle"
    },
    "glow_berry_custard": {
      "id": "farmersdelight:glow_berry_custard"
    },
    "fruit_salad": {
      "id": "farmersdelight:fruit_salad"
    },
    "mixed_salad": {
      "id": "farmersdelight:mixed_salad"
    },
    "nether_salad": {
      "id": "farmersdelight:nether_salad"
    },
    "barbecue_stick": {
      "id": "farmersdelight:barbecue_stick"
    },
    "egg_sandwich": {
      "id": "farmersdelight:egg_sandwich"
    },
    "chicken_sandwich": {
      "id": "farmersdelight:chicken_sandwich"
    },
    "hamburger": {
      "id": "farmersdelight:hamburger"
    },
    "bacon_sandwich": {
      "id": "farmersdelight:bacon_sandwich"
    },
    "mutton_wrap": {
      "id": "farmersdelight:mutton_wrap"
    },
    "dumplings": {
      "id": "farmersdelight:dumplings"
    },
    "stuffed_potato": {
      "id": "farmersdelight:stuffed_potato"
    },
    "cabbage_rolls": {
      "id": "farmersdelight:cabbage_rolls"
    },
    "salmon_roll": {
      "id": "farmersdelight:salmon_roll"
    },
    "cod_roll": {
      "id": "farmersdelight:cod_roll"
    },
    "kelp_roll": {
      "id": "farmersdelight:kelp_roll"
    },
    "kelp_roll_slice": {
      "id": "farmersdelight:kelp_roll_slice"
    },
    "cooked_rice": {
      "id": "farmersdelight:cooked_rice"
    },
    "bone_broth": {
      "id": "farmersdelight:bone_broth"
    },
    "beef_stew": {
      "id": "farmersdelight:beef_stew"
    },
    "chicken_soup": {
      "id": "farmersdelight:chicken_soup"
    },
    "vegetable_soup": {
      "id": "farmersdelight:vegetable_soup"
    },
    "fish_stew": {
      "id": "farmersdelight:fish_stew"
    },
    "fried_rice": {
      "id": "farmersdelight:fried_rice"
    },
    "pumpkin_soup": {
      "id": "farmersdelight:pumpkin_soup"
    },
    "baked_cod_stew": {
      "id": "farmersdelight:baked_cod_stew"
    },
    "noodle_soup": {
      "id": "farmersdelight:noodle_soup"
    },
    "bacon_and_eggs": {
      "id": "farmersdelight:bacon_and_eggs"
    },
    "pasta_with_meatballs": {
      "id": "farmersdelight:pasta_with_meatballs"
    },
    "pasta_with_mutton_chop": {
      "id": "farmersdelight:pasta_with_mutton_chop"
    },
    "mushroom_rice": {
      "id": "farmersdelight:mushroom_rice"
    },
    "roasted_mutton_chops": {
      "id": "farmersdelight:roasted_mutton_chops"
    },
    "vegetable_noodles": {
      "id": "farmersdelight:vegetable_noodles"
    },
    "steak_and_potatoes": {
      "id": "farmersdelight:steak_and_potatoes"
    },
    "ratatouille": {
      "id": "farmersdelight:ratatouille"
    },
    "squid_ink_pasta": {
      "id": "farmersdelight:squid_ink_pasta"
    },
    "grilled_salmon": {
      "id": "farmersdelight:grilled_salmon"
    },
    "roast_chicken_block": {
      "id": "farmersdelight:roast_chicken_block"
    },
    "roast_chicken": {
      "id": "farmersdelight:roast_chicken"
    },
    "stuffed_pumpkin_block": {
      "id": "farmersdelight:stuffed_pumpkin_block"
    },
    "stuffed_pumpkin": {
      "id": "farmersdelight:stuffed_pumpkin"
    },
    "honey_glazed_ham_block": {
      "id": "farmersdelight:honey_glazed_ham_block"
    },
    "honey_glazed_ham": {
      "id": "farmersdelight:honey_glazed_ham"
    },
    "shepherds_pie_block": {
      "id": "farmersdelight:shepherds_pie_block"
    },
    "shepherds_pie": {
      "id": "farmersdelight:shepherds_pie"
    },
    "rice_roll_medley_block": {
      "id": "farmersdelight:rice_roll_medley_block"
    },
    "dog_food": {
      "id": "farmersdelight:dog_food"
    },
    "horse_feed": {
      "id": "farmersdelight:horse_feed"
    }
  },
  "torchmaster": {
    "id": "torchmaster:megatorch",
    "megatorch": {
      "id": "torchmaster:megatorch"
    },
    "dreadlamp": {
      "id": "torchmaster:dreadlamp"
    },
    "feral_flare_lantern": {
      "id": "torchmaster:feral_flare_lantern"
    },
    "frozen_pearl": {
      "id": "torchmaster:frozen_pearl"
    }
  },
  "arsomega": {
    "id": "arsomega:arcane_book",
    "arcane_book": {
      "id": "arsomega:arcane_book"
    },
    "greater_mana_amulet": {
      "id": "arsomega:greater_mana_amulet"
    },
    "greater_regen_amulet": {
      "id": "arsomega:greater_regen_amulet"
    },
    "focus_of_mana": {
      "id": "arsomega:focus_of_mana"
    },
    "focus_of_alchemy": {
      "id": "arsomega:focus_of_alchemy"
    },
    "focus_of_advanced_alchemy": {
      "id": "arsomega:focus_of_advanced_alchemy"
    },
    "focus_of_regen": {
      "id": "arsomega:focus_of_regen"
    },
    "ring_regen": {
      "id": "arsomega:ring_regen"
    },
    "ring_boost": {
      "id": "arsomega:ring_boost"
    },
    "ring_arcane_discount": {
      "id": "arsomega:ring_arcane_discount"
    },
    "staff": {
      "id": "arsomega:staff"
    },
    "archmage_staff": {
      "id": "arsomega:archmage_staff"
    },
    "arcane_staff": {
      "id": "arsomega:arcane_staff"
    },
    "poison_flower": {
      "id": "arsomega:poison_flower"
    },
    "demonic_stone": {
      "id": "arsomega:demonic_stone"
    },
    "demonic_ore": {
      "id": "arsomega:demonic_ore"
    },
    "demonic_gem": {
      "id": "arsomega:demonic_gem"
    },
    "cleansing_gem": {
      "id": "arsomega:cleansing_gem"
    },
    "demonic_crystal": {
      "id": "arsomega:demonic_crystal"
    },
    "arcane_bloom_crop": {
      "id": "arsomega:arcane_bloom_crop"
    },
    "enchanters_wool": {
      "id": "arsomega:enchanters_wool"
    },
    "gorgon_gem": {
      "id": "arsomega:gorgon_gem"
    },
    "splash_bottle": {
      "id": "arsomega:splash_bottle"
    },
    "lingering_bottle": {
      "id": "arsomega:lingering_bottle"
    },
    "ancient_mirror_shard": {
      "id": "arsomega:ancient_mirror_shard"
    },
    "searing_flesh": {
      "id": "arsomega:searing_flesh"
    },
    "demonic_tooth": {
      "id": "arsomega:demonic_tooth"
    },
    "infused_glass": {
      "id": "arsomega:infused_glass"
    },
    "curse_altar": {
      "id": "arsomega:curse_altar"
    },
    "reflective_coating": {
      "id": "arsomega:reflective_coating"
    },
    "enchanted_mirror_shard": {
      "id": "arsomega:enchanted_mirror_shard"
    },
    "enchanters_cloak": {
      "id": "arsomega:enchanters_cloak"
    },
    "stability_cloak": {
      "id": "arsomega:stability_cloak"
    },
    "arcane_bloom": {
      "id": "arsomega:arcane_bloom"
    },
    "arcane_fiber": {
      "id": "arsomega:arcane_fiber"
    },
    "arcane_cloth": {
      "id": "arsomega:arcane_cloth"
    },
    "magic_clay": {
      "id": "arsomega:magic_clay"
    },
    "marvelous_clay": {
      "id": "arsomega:marvelous_clay"
    },
    "mystic_clay": {
      "id": "arsomega:mystic_clay"
    },
    "arcane_clay": {
      "id": "arsomega:arcane_clay"
    },
    "arcane_essence": {
      "id": "arsomega:arcane_essence"
    },
    "life_essence": {
      "id": "arsomega:life_essence"
    },
    "alchemy_essence": {
      "id": "arsomega:alchemy_essence"
    },
    "nature_essence": {
      "id": "arsomega:nature_essence"
    },
    "demonic_essence": {
      "id": "arsomega:demonic_essence"
    },
    "biome_crystal": {
      "id": "arsomega:biome_crystal"
    },
    "dimension_crystal": {
      "id": "arsomega:dimension_crystal"
    },
    "infused_diamond": {
      "id": "arsomega:infused_diamond"
    },
    "enchanted_diamond": {
      "id": "arsomega:enchanted_diamond"
    },
    "arcane_diamond": {
      "id": "arsomega:arcane_diamond"
    },
    "enchanted_demonic_gem": {
      "id": "arsomega:enchanted_demonic_gem"
    },
    "demonic_gem_block": {
      "id": "arsomega:demonic_gem_block"
    },
    "infused_diamond_block": {
      "id": "arsomega:infused_diamond_block"
    },
    "enchanted_diamond_block": {
      "id": "arsomega:enchanted_diamond_block"
    },
    "arcane_diamond_block": {
      "id": "arsomega:arcane_diamond_block"
    },
    "rope": {
      "id": "arsomega:rope"
    },
    "magic_rope": {
      "id": "arsomega:magic_rope"
    },
    "enchanted_rope": {
      "id": "arsomega:enchanted_rope"
    },
    "basic_elemental_essence": {
      "id": "arsomega:basic_elemental_essence"
    },
    "advanced_elemental_essence": {
      "id": "arsomega:advanced_elemental_essence"
    },
    "infinity_crystal": {
      "id": "arsomega:infinity_crystal"
    },
    "flesh_block": {
      "id": "arsomega:flesh_block"
    },
    "demonic_rift": {
      "id": "arsomega:demonic_rift"
    },
    "magic_clay_block": {
      "id": "arsomega:magic_clay_block"
    },
    "magic_clay_carved": {
      "id": "arsomega:magic_clay_carved"
    },
    "gorgon_stone": {
      "id": "arsomega:gorgon_stone"
    },
    "demonic_glowstone": {
      "id": "arsomega:demonic_glowstone"
    },
    "demonic_glowstone_dust": {
      "id": "arsomega:demonic_glowstone_dust"
    },
    "demon_staff": {
      "id": "arsomega:demon_staff"
    },
    "magic_chalk": {
      "id": "arsomega:magic_chalk"
    },
    "marvelous_chalk": {
      "id": "arsomega:marvelous_chalk"
    },
    "mystic_chalk": {
      "id": "arsomega:mystic_chalk"
    },
    "arcane_chalk": {
      "id": "arsomega:arcane_chalk"
    },
    "chalk": {
      "id": "arsomega:chalk"
    },
    "alchemical_diamond": {
      "id": "arsomega:alchemical_diamond"
    },
    "alchemical_diamond_ore": {
      "id": "arsomega:alchemical_diamond_ore"
    },
    "alchemical_diamond_block": {
      "id": "arsomega:alchemical_diamond_block"
    },
    "alchemical_stone": {
      "id": "arsomega:alchemical_stone"
    },
    "sigil_water": {
      "id": "arsomega:sigil_water"
    },
    "sigil_fire": {
      "id": "arsomega:sigil_fire"
    },
    "sigil_earth": {
      "id": "arsomega:sigil_earth"
    },
    "sigil_air": {
      "id": "arsomega:sigil_air"
    },
    "sigil_binding": {
      "id": "arsomega:sigil_binding"
    },
    "sigil_water_active": {
      "id": "arsomega:sigil_water_active"
    },
    "sigil_fire_active": {
      "id": "arsomega:sigil_fire_active"
    },
    "sigil_earth_active": {
      "id": "arsomega:sigil_earth_active"
    },
    "sigil_air_active": {
      "id": "arsomega:sigil_air_active"
    },
    "sigil_binding_active": {
      "id": "arsomega:sigil_binding_active"
    },
    "sigil_alchemy": {
      "id": "arsomega:sigil_alchemy"
    },
    "sigil_life": {
      "id": "arsomega:sigil_life"
    },
    "sigil_nature": {
      "id": "arsomega:sigil_nature"
    },
    "sigil_alchemy_active": {
      "id": "arsomega:sigil_alchemy_active"
    },
    "sigil_life_active": {
      "id": "arsomega:sigil_life_active"
    },
    "sigil_nature_active": {
      "id": "arsomega:sigil_nature_active"
    },
    "spell_sigil_scald": {
      "id": "arsomega:spell_sigil_scald"
    },
    "spell_sigil_petrify": {
      "id": "arsomega:spell_sigil_petrify"
    },
    "iron_needle": {
      "id": "arsomega:iron_needle"
    },
    "enchanted_diamond_apple": {
      "id": "arsomega:enchanted_diamond_apple"
    },
    "arcane_apple": {
      "id": "arsomega:arcane_apple"
    },
    "cursed_pendant": {
      "id": "arsomega:cursed_pendant"
    },
    "cursed_pendant_strong": {
      "id": "arsomega:cursed_pendant_strong"
    },
    "cursed_pendant_double": {
      "id": "arsomega:cursed_pendant_double"
    },
    "cursed_pendant_double_strong": {
      "id": "arsomega:cursed_pendant_double_strong"
    },
    "cursed_pendant_ultimate": {
      "id": "arsomega:cursed_pendant_ultimate"
    },
    "arcane_compendium": {
      "id": "arsomega:arcane_compendium"
    },
    "maria_rosa": {
      "id": "arsomega:maria_rosa"
    },
    "kaz_carter": {
      "id": "arsomega:kaz_carter"
    },
    "salt": {
      "id": "arsomega:salt"
    },
    "blocky_hills_music_disc": {
      "id": "arsomega:blocky_hills_music_disc"
    },
    "marvelous_clay_block": {
      "id": "arsomega:marvelous_clay_block"
    },
    "marvelous_clay_carved": {
      "id": "arsomega:marvelous_clay_carved"
    },
    "mystic_clay_block": {
      "id": "arsomega:mystic_clay_block"
    },
    "mystic_clay_carved": {
      "id": "arsomega:mystic_clay_carved"
    },
    "arcane_clay_block": {
      "id": "arsomega:arcane_clay_block"
    },
    "arcane_clay_carved": {
      "id": "arsomega:arcane_clay_carved"
    },
    "demon_dance_music_disc": {
      "id": "arsomega:demon_dance_music_disc"
    },
    "basic_demon_spawn_egg": {
      "id": "arsomega:basic_demon_spawn_egg"
    },
    "strong_demon_spawn_egg": {
      "id": "arsomega:strong_demon_spawn_egg"
    },
    "demon_raptor_spawn_egg": {
      "id": "arsomega:demon_raptor_spawn_egg"
    },
    "glyph_propagate_orbit": {
      "id": "arsomega:glyph_propagate_orbit"
    },
    "glyph_curse": {
      "id": "arsomega:glyph_curse"
    },
    "glyph_demonic_curse": {
      "id": "arsomega:glyph_demonic_curse"
    },
    "glyph_demonic_anchoring": {
      "id": "arsomega:glyph_demonic_anchoring"
    },
    "glyph_carve": {
      "id": "arsomega:glyph_carve"
    },
    "glyph_demonic_light": {
      "id": "arsomega:glyph_demonic_light"
    },
    "glyph_dispellant": {
      "id": "arsomega:glyph_dispellant"
    },
    "glyph_whirlpool": {
      "id": "arsomega:glyph_whirlpool"
    },
    "glyph_animate_block": {
      "id": "arsomega:glyph_animate_block"
    },
    "glyph_advanced_evaporate": {
      "id": "arsomega:glyph_advanced_evaporate"
    },
    "glyph_brambles": {
      "id": "arsomega:glyph_brambles"
    },
    "glyph_lead_skin": {
      "id": "arsomega:glyph_lead_skin"
    },
    "glyph_scald": {
      "id": "arsomega:glyph_scald"
    },
    "glyph_dilate_time": {
      "id": "arsomega:glyph_dilate_time"
    },
    "glyph_temporal_collapse": {
      "id": "arsomega:glyph_temporal_collapse"
    },
    "glyph_regen": {
      "id": "arsomega:glyph_regen"
    },
    "glyph_acid": {
      "id": "arsomega:glyph_acid"
    },
    "glyph_soulfire": {
      "id": "arsomega:glyph_soulfire"
    },
    "glyph_adrenaline": {
      "id": "arsomega:glyph_adrenaline"
    },
    "glyph_melt": {
      "id": "arsomega:glyph_melt"
    },
    "glyph_enchant": {
      "id": "arsomega:glyph_enchant"
    },
    "glyph_tornado": {
      "id": "arsomega:glyph_tornado"
    },
    "glyph_poison_flower": {
      "id": "arsomega:glyph_poison_flower"
    },
    "glyph_advanced_grow": {
      "id": "arsomega:glyph_advanced_grow"
    },
    "glyph_disenchant": {
      "id": "arsomega:glyph_disenchant"
    },
    "glyph_greater_aoe": {
      "id": "arsomega:glyph_greater_aoe"
    },
    "glyph_hell_flare": {
      "id": "arsomega:glyph_hell_flare"
    },
    "glyph_advanced_amplify": {
      "id": "arsomega:glyph_advanced_amplify"
    },
    "glyph_heartstop": {
      "id": "arsomega:glyph_heartstop"
    },
    "glyph_earthquake": {
      "id": "arsomega:glyph_earthquake"
    },
    "glyph_vine_grab": {
      "id": "arsomega:glyph_vine_grab"
    },
    "glyph_drown": {
      "id": "arsomega:glyph_drown"
    },
    "glyph_rot": {
      "id": "arsomega:glyph_rot"
    },
    "glyph_propagate_missile": {
      "id": "arsomega:glyph_propagate_missile"
    },
    "glyph_overhead": {
      "id": "arsomega:glyph_overhead"
    },
    "glyph_propagate_underfoot": {
      "id": "arsomega:glyph_propagate_underfoot"
    },
    "glyph_swap_target": {
      "id": "arsomega:glyph_swap_target"
    },
    "glyph_missile": {
      "id": "arsomega:glyph_missile"
    },
    "glyph_flatten": {
      "id": "arsomega:glyph_flatten"
    },
    "glyph_true_underfoot": {
      "id": "arsomega:glyph_true_underfoot"
    },
    "glyph_propagate_overhead": {
      "id": "arsomega:glyph_propagate_overhead"
    },
    "glyph_transmute": {
      "id": "arsomega:glyph_transmute"
    },
    "glyph_diamond": {
      "id": "arsomega:glyph_diamond"
    },
    "glyph_wither_summon": {
      "id": "arsomega:glyph_wither_summon"
    },
    "glyph_divine_smite": {
      "id": "arsomega:glyph_divine_smite"
    },
    "glyph_lesser_aoe": {
      "id": "arsomega:glyph_lesser_aoe"
    },
    "glyph_raise_earth": {
      "id": "arsomega:glyph_raise_earth"
    },
    "glyph_projectile_burst": {
      "id": "arsomega:glyph_projectile_burst"
    },
    "glyph_propagate_self": {
      "id": "arsomega:glyph_propagate_self"
    },
    "glyph_propagate_projectile": {
      "id": "arsomega:glyph_propagate_projectile"
    },
    "glyph_cursed_bind": {
      "id": "arsomega:glyph_cursed_bind"
    },
    "glyph_fireball": {
      "id": "arsomega:glyph_fireball"
    },
    "glyph_demonic_cleanse": {
      "id": "arsomega:glyph_demonic_cleanse"
    },
    "glyph_blood_clot": {
      "id": "arsomega:glyph_blood_clot"
    },
    "glyph_absorption": {
      "id": "arsomega:glyph_absorption"
    },
    "glyph_hellfire": {
      "id": "arsomega:glyph_hellfire"
    },
    "ritual_petrification": {
      "id": "arsomega:ritual_petrification"
    },
    "ritual_shaping": {
      "id": "arsomega:ritual_shaping"
    },
    "ritual_protection": {
      "id": "arsomega:ritual_protection"
    },
    "ritual_advanced_overgrowth": {
      "id": "arsomega:ritual_advanced_overgrowth"
    },
    "ritual_fatigue": {
      "id": "arsomega:ritual_fatigue"
    },
    "ritual_demonic_summoning": {
      "id": "arsomega:ritual_demonic_summoning"
    },
    "ritual_perma_flight": {
      "id": "arsomega:ritual_perma_flight"
    },
    "ritual_open_portal": {
      "id": "arsomega:ritual_open_portal"
    },
    "ritual_dispel": {
      "id": "arsomega:ritual_dispel"
    },
    "ritual_tribute": {
      "id": "arsomega:ritual_tribute"
    },
    "ritual_conjuring": {
      "id": "arsomega:ritual_conjuring"
    },
    "ritual_cleansing": {
      "id": "arsomega:ritual_cleansing"
    },
    "ritual_aura": {
      "id": "arsomega:ritual_aura"
    },
    "ritual_flowing_time": {
      "id": "arsomega:ritual_flowing_time"
    },
    "ritual_banishment": {
      "id": "arsomega:ritual_banishment"
    },
    "ritual_summoning": {
      "id": "arsomega:ritual_summoning"
    }
  },
  "integratedtunnels": {
    "id": "integratedtunnels:part_interface_energy",
    "part_interface_energy": {
      "id": "integratedtunnels:part_interface_energy"
    },
    "part_interface_filter_energy": {
      "id": "integratedtunnels:part_interface_filter_energy"
    },
    "part_importer_energy": {
      "id": "integratedtunnels:part_importer_energy"
    },
    "part_exporter_energy": {
      "id": "integratedtunnels:part_exporter_energy"
    },
    "part_importer_world_energy": {
      "id": "integratedtunnels:part_importer_world_energy"
    },
    "part_exporter_world_energy": {
      "id": "integratedtunnels:part_exporter_world_energy"
    },
    "part_interface_item": {
      "id": "integratedtunnels:part_interface_item"
    },
    "part_interface_filter_item": {
      "id": "integratedtunnels:part_interface_filter_item"
    },
    "part_importer_item": {
      "id": "integratedtunnels:part_importer_item"
    },
    "part_exporter_item": {
      "id": "integratedtunnels:part_exporter_item"
    },
    "part_importer_world_item": {
      "id": "integratedtunnels:part_importer_world_item"
    },
    "part_exporter_world_item": {
      "id": "integratedtunnels:part_exporter_world_item"
    },
    "part_interface_fluid": {
      "id": "integratedtunnels:part_interface_fluid"
    },
    "part_interface_filter_fluid": {
      "id": "integratedtunnels:part_interface_filter_fluid"
    },
    "part_importer_fluid": {
      "id": "integratedtunnels:part_importer_fluid"
    },
    "part_exporter_fluid": {
      "id": "integratedtunnels:part_exporter_fluid"
    },
    "part_importer_world_fluid": {
      "id": "integratedtunnels:part_importer_world_fluid"
    },
    "part_exporter_world_fluid": {
      "id": "integratedtunnels:part_exporter_world_fluid"
    },
    "part_importer_world_block": {
      "id": "integratedtunnels:part_importer_world_block"
    },
    "part_exporter_world_block": {
      "id": "integratedtunnels:part_exporter_world_block"
    },
    "part_player_simulator": {
      "id": "integratedtunnels:part_player_simulator"
    }
  },
  "runelic": {
    "id": "runelic:runelic_pattern",
    "runelic_pattern": {
      "id": "runelic:runelic_pattern"
    }
  },
  "constructionwand": {
    "id": "constructionwand:stone_wand",
    "stone_wand": {
      "id": "constructionwand:stone_wand"
    },
    "iron_wand": {
      "id": "constructionwand:iron_wand"
    },
    "diamond_wand": {
      "id": "constructionwand:diamond_wand"
    },
    "infinity_wand": {
      "id": "constructionwand:infinity_wand"
    },
    "core_angel": {
      "id": "constructionwand:core_angel"
    },
    "core_destruction": {
      "id": "constructionwand:core_destruction"
    }
  },
  "create_crystal_clear": {
    "id": "create_crystal_clear:andesite_glass_casing",
    "andesite_glass_casing": {
      "id": "create_crystal_clear:andesite_glass_casing"
    },
    "brass_glass_casing": {
      "id": "create_crystal_clear:brass_glass_casing"
    },
    "copper_glass_casing": {
      "id": "create_crystal_clear:copper_glass_casing"
    },
    "train_glass_casing": {
      "id": "create_crystal_clear:train_glass_casing"
    },
    "andesite_clear_glass_casing": {
      "id": "create_crystal_clear:andesite_clear_glass_casing"
    },
    "brass_clear_glass_casing": {
      "id": "create_crystal_clear:brass_clear_glass_casing"
    },
    "copper_clear_glass_casing": {
      "id": "create_crystal_clear:copper_clear_glass_casing"
    },
    "train_clear_glass_casing": {
      "id": "create_crystal_clear:train_clear_glass_casing"
    },
    "steel_glass_casing": {
      "id": "create_crystal_clear:steel_glass_casing"
    },
    "steel_tinted_glass_casing": {
      "id": "create_crystal_clear:steel_tinted_glass_casing"
    }
  },
  "createchromaticreturn": {
    "id": "createchromaticreturn:shadow_steel",
    "shadow_steel": {
      "id": "createchromaticreturn:shadow_steel"
    },
    "refined_radiance": {
      "id": "createchromaticreturn:refined_radiance"
    },
    "chromatic_compound": {
      "id": "createchromaticreturn:chromatic_compound"
    },
    "shadow_steel_sword": {
      "id": "createchromaticreturn:shadow_steel_sword"
    },
    "glowing_ingot": {
      "id": "createchromaticreturn:glowing_ingot"
    },
    "raw_nugget": {
      "id": "createchromaticreturn:raw_nugget"
    },
    "carbon_powder": {
      "id": "createchromaticreturn:carbon_powder"
    },
    "shadow_steel_paxel": {
      "id": "createchromaticreturn:shadow_steel_paxel"
    },
    "refined_handle": {
      "id": "createchromaticreturn:refined_handle"
    },
    "handle_cast": {
      "id": "createchromaticreturn:handle_cast"
    },
    "blade_cast": {
      "id": "createchromaticreturn:blade_cast"
    },
    "shadow_steel_blade": {
      "id": "createchromaticreturn:shadow_steel_blade"
    },
    "pickaxe_cast": {
      "id": "createchromaticreturn:pickaxe_cast"
    },
    "shovel_cast": {
      "id": "createchromaticreturn:shovel_cast"
    },
    "axe_cast": {
      "id": "createchromaticreturn:axe_cast"
    },
    "hoe_cast": {
      "id": "createchromaticreturn:hoe_cast"
    },
    "paxel_cast": {
      "id": "createchromaticreturn:paxel_cast"
    },
    "shadow_steel_paxel_head": {
      "id": "createchromaticreturn:shadow_steel_paxel_head"
    },
    "shadow_mechanism": {
      "id": "createchromaticreturn:shadow_mechanism"
    },
    "magmatic_mechanism": {
      "id": "createchromaticreturn:magmatic_mechanism"
    },
    "annealed_mechanism": {
      "id": "createchromaticreturn:annealed_mechanism"
    },
    "refined_mechanism": {
      "id": "createchromaticreturn:refined_mechanism"
    },
    "shadow_steel_powder": {
      "id": "createchromaticreturn:shadow_steel_powder"
    },
    "creative_flour": {
      "id": "createchromaticreturn:creative_flour"
    },
    "multiplite_ingot": {
      "id": "createchromaticreturn:multiplite_ingot"
    },
    "multiplite_handle": {
      "id": "createchromaticreturn:multiplite_handle"
    },
    "radiant_glow_saber": {
      "id": "createchromaticreturn:radiant_glow_saber"
    },
    "radiant_glow_claws": {
      "id": "createchromaticreturn:radiant_glow_claws"
    },
    "multiplite_tube": {
      "id": "createchromaticreturn:multiplite_tube"
    },
    "multiplite_shadow_steel_sword": {
      "id": "createchromaticreturn:multiplite_shadow_steel_sword"
    },
    "plating_cast": {
      "id": "createchromaticreturn:plating_cast"
    },
    "charm_cast": {
      "id": "createchromaticreturn:charm_cast"
    },
    "cyber_plating": {
      "id": "createchromaticreturn:cyber_plating"
    },
    "multiplite_shadow_steel_paxel": {
      "id": "createchromaticreturn:multiplite_shadow_steel_paxel"
    },
    "polonium_nugget": {
      "id": "createchromaticreturn:polonium_nugget"
    },
    "plutonium_nugget": {
      "id": "createchromaticreturn:plutonium_nugget"
    }
  },
  "toms_storage": {
    "id": "toms_storage:ts.inventory_connector",
    "ts.inventory_connector": {
      "id": "toms_storage:ts.inventory_connector"
    },
    "ts.storage_terminal": {
      "id": "toms_storage:ts.storage_terminal"
    },
    "ts.trim": {
      "id": "toms_storage:ts.trim"
    },
    "ts.open_crate": {
      "id": "toms_storage:ts.open_crate"
    },
    "ts.inventory_cable": {
      "id": "toms_storage:ts.inventory_cable"
    },
    "ts.inventory_cable_framed": {
      "id": "toms_storage:ts.inventory_cable_framed"
    },
    "ts.inventory_cable_connector": {
      "id": "toms_storage:ts.inventory_cable_connector"
    },
    "ts.inventory_cable_connector_filtered": {
      "id": "toms_storage:ts.inventory_cable_connector_filtered"
    },
    "ts.inventory_cable_connector_framed": {
      "id": "toms_storage:ts.inventory_cable_connector_framed"
    },
    "ts.inventory_proxy": {
      "id": "toms_storage:ts.inventory_proxy"
    },
    "ts.crafting_terminal": {
      "id": "toms_storage:ts.crafting_terminal"
    },
    "ts.inventory_hopper_basic": {
      "id": "toms_storage:ts.inventory_hopper_basic"
    },
    "ts.level_emitter": {
      "id": "toms_storage:ts.level_emitter"
    },
    "ts.paint_kit": {
      "id": "toms_storage:ts.paint_kit"
    },
    "ts.wireless_terminal": {
      "id": "toms_storage:ts.wireless_terminal"
    },
    "ts.adv_wireless_terminal": {
      "id": "toms_storage:ts.adv_wireless_terminal"
    }
  },
  "effortlessbuilding": {
    "id": "effortlessbuilding:randomizer_bag",
    "randomizer_bag": {
      "id": "effortlessbuilding:randomizer_bag"
    },
    "golden_randomizer_bag": {
      "id": "effortlessbuilding:golden_randomizer_bag"
    },
    "diamond_randomizer_bag": {
      "id": "effortlessbuilding:diamond_randomizer_bag"
    },
    "reach_upgrade1": {
      "id": "effortlessbuilding:reach_upgrade1"
    },
    "reach_upgrade2": {
      "id": "effortlessbuilding:reach_upgrade2"
    },
    "reach_upgrade3": {
      "id": "effortlessbuilding:reach_upgrade3"
    }
  },
  "itemfilters": {
    "id": "itemfilters:always_true",
    "always_true": {
      "id": "itemfilters:always_true"
    },
    "always_false": {
      "id": "itemfilters:always_false"
    },
    "or": {
      "id": "itemfilters:or"
    },
    "and": {
      "id": "itemfilters:and"
    },
    "not": {
      "id": "itemfilters:not"
    },
    "xor": {
      "id": "itemfilters:xor"
    },
    "tag": {
      "id": "itemfilters:tag"
    },
    "mod": {
      "id": "itemfilters:mod"
    },
    "item_group": {
      "id": "itemfilters:item_group"
    },
    "id_regex": {
      "id": "itemfilters:id_regex"
    },
    "damage": {
      "id": "itemfilters:damage"
    },
    "block": {
      "id": "itemfilters:block"
    },
    "max_count": {
      "id": "itemfilters:max_count"
    },
    "strong_nbt": {
      "id": "itemfilters:strong_nbt"
    },
    "weak_nbt": {
      "id": "itemfilters:weak_nbt"
    },
    "custom": {
      "id": "itemfilters:custom"
    }
  },
  "summoningrituals": {
    "id": "summoningrituals:altar",
    "altar": {
      "id": "summoningrituals:altar"
    },
    "indestructible_altar": {
      "id": "summoningrituals:indestructible_altar"
    }
  },
  "createchunkloading": {
    "id": "createchunkloading:chunk_loader",
    "chunk_loader": {
      "id": "createchunkloading:chunk_loader"
    }
  },
  "comforts": {
    "id": "comforts:rope_and_nail",
    "rope_and_nail": {
      "id": "comforts:rope_and_nail"
    },
    "sleeping_bag_white": {
      "id": "comforts:sleeping_bag_white"
    },
    "sleeping_bag_orange": {
      "id": "comforts:sleeping_bag_orange"
    },
    "sleeping_bag_magenta": {
      "id": "comforts:sleeping_bag_magenta"
    },
    "sleeping_bag_light_blue": {
      "id": "comforts:sleeping_bag_light_blue"
    },
    "sleeping_bag_yellow": {
      "id": "comforts:sleeping_bag_yellow"
    },
    "sleeping_bag_lime": {
      "id": "comforts:sleeping_bag_lime"
    },
    "sleeping_bag_pink": {
      "id": "comforts:sleeping_bag_pink"
    },
    "sleeping_bag_gray": {
      "id": "comforts:sleeping_bag_gray"
    },
    "sleeping_bag_light_gray": {
      "id": "comforts:sleeping_bag_light_gray"
    },
    "sleeping_bag_cyan": {
      "id": "comforts:sleeping_bag_cyan"
    },
    "sleeping_bag_purple": {
      "id": "comforts:sleeping_bag_purple"
    },
    "sleeping_bag_blue": {
      "id": "comforts:sleeping_bag_blue"
    },
    "sleeping_bag_brown": {
      "id": "comforts:sleeping_bag_brown"
    },
    "sleeping_bag_green": {
      "id": "comforts:sleeping_bag_green"
    },
    "sleeping_bag_red": {
      "id": "comforts:sleeping_bag_red"
    },
    "sleeping_bag_black": {
      "id": "comforts:sleeping_bag_black"
    },
    "hammock_white": {
      "id": "comforts:hammock_white"
    },
    "hammock_orange": {
      "id": "comforts:hammock_orange"
    },
    "hammock_magenta": {
      "id": "comforts:hammock_magenta"
    },
    "hammock_light_blue": {
      "id": "comforts:hammock_light_blue"
    },
    "hammock_yellow": {
      "id": "comforts:hammock_yellow"
    },
    "hammock_lime": {
      "id": "comforts:hammock_lime"
    },
    "hammock_pink": {
      "id": "comforts:hammock_pink"
    },
    "hammock_gray": {
      "id": "comforts:hammock_gray"
    },
    "hammock_light_gray": {
      "id": "comforts:hammock_light_gray"
    },
    "hammock_cyan": {
      "id": "comforts:hammock_cyan"
    },
    "hammock_purple": {
      "id": "comforts:hammock_purple"
    },
    "hammock_blue": {
      "id": "comforts:hammock_blue"
    },
    "hammock_brown": {
      "id": "comforts:hammock_brown"
    },
    "hammock_green": {
      "id": "comforts:hammock_green"
    },
    "hammock_red": {
      "id": "comforts:hammock_red"
    },
    "hammock_black": {
      "id": "comforts:hammock_black"
    }
  },
  "charginggadgets": {
    "id": "charginggadgets:charging_station",
    "charging_station": {
      "id": "charginggadgets:charging_station"
    }
  },
  "create_confectionery": {
    "id": "create_confectionery:gingerbread_block",
    "gingerbread_block": {
      "id": "create_confectionery:gingerbread_block"
    },
    "gingerbread_stairs": {
      "id": "create_confectionery:gingerbread_stairs"
    },
    "gingerbread_slab": {
      "id": "create_confectionery:gingerbread_slab"
    },
    "gingerbreak_bricks": {
      "id": "create_confectionery:gingerbreak_bricks"
    },
    "gingerbread_brick_stairs": {
      "id": "create_confectionery:gingerbread_brick_stairs"
    },
    "gingerbread_brick_slab": {
      "id": "create_confectionery:gingerbread_brick_slab"
    },
    "chocolate_bricks": {
      "id": "create_confectionery:chocolate_bricks"
    },
    "chocolate_bricks_stairs": {
      "id": "create_confectionery:chocolate_bricks_stairs"
    },
    "chocolate_bricks_slab": {
      "id": "create_confectionery:chocolate_bricks_slab"
    },
    "black_chocolate_bricks": {
      "id": "create_confectionery:black_chocolate_bricks"
    },
    "black_chocolate_bricks_stairs": {
      "id": "create_confectionery:black_chocolate_bricks_stairs"
    },
    "black_chocolate_bricks_slab": {
      "id": "create_confectionery:black_chocolate_bricks_slab"
    },
    "white_chocolate_bricks": {
      "id": "create_confectionery:white_chocolate_bricks"
    },
    "white_chocolate_bricks_stairs": {
      "id": "create_confectionery:white_chocolate_bricks_stairs"
    },
    "white_chocolate_bricks_slab": {
      "id": "create_confectionery:white_chocolate_bricks_slab"
    },
    "ruby_chocolate_bricks": {
      "id": "create_confectionery:ruby_chocolate_bricks"
    },
    "ruby_chocolate_brick_stairs": {
      "id": "create_confectionery:ruby_chocolate_brick_stairs"
    },
    "ruby_chocolate_brick_slab": {
      "id": "create_confectionery:ruby_chocolate_brick_slab"
    },
    "caramel_bricks": {
      "id": "create_confectionery:caramel_bricks"
    },
    "caramel_bricks_stairs": {
      "id": "create_confectionery:caramel_bricks_stairs"
    },
    "caramel_bricks_slab": {
      "id": "create_confectionery:caramel_bricks_slab"
    },
    "candy_cane_block": {
      "id": "create_confectionery:candy_cane_block"
    },
    "gingerdough": {
      "id": "create_confectionery:gingerdough"
    },
    "gingerbread": {
      "id": "create_confectionery:gingerbread"
    },
    "gingerbread_man": {
      "id": "create_confectionery:gingerbread_man"
    },
    "little_gingerbread_man_spawn_egg": {
      "id": "create_confectionery:little_gingerbread_man_spawn_egg"
    },
    "crushed_cocoa": {
      "id": "create_confectionery:crushed_cocoa"
    },
    "cocoa_powder": {
      "id": "create_confectionery:cocoa_powder"
    },
    "cocoa_butter": {
      "id": "create_confectionery:cocoa_butter"
    },
    "bar_of_black_chocolate": {
      "id": "create_confectionery:bar_of_black_chocolate"
    },
    "bar_of_white_chocolate": {
      "id": "create_confectionery:bar_of_white_chocolate"
    },
    "bar_of_ruby_chocolate": {
      "id": "create_confectionery:bar_of_ruby_chocolate"
    },
    "bar_of_caramel": {
      "id": "create_confectionery:bar_of_caramel"
    },
    "black_chocolate_bucket": {
      "id": "create_confectionery:black_chocolate_bucket"
    },
    "white_chocolate_bucket": {
      "id": "create_confectionery:white_chocolate_bucket"
    },
    "ruby_chocolate_bucket": {
      "id": "create_confectionery:ruby_chocolate_bucket"
    },
    "caramel_bucket": {
      "id": "create_confectionery:caramel_bucket"
    },
    "full_chocolate_bar": {
      "id": "create_confectionery:full_chocolate_bar"
    },
    "full_black_chocolate_bar": {
      "id": "create_confectionery:full_black_chocolate_bar"
    },
    "full_white_chocolate_bar": {
      "id": "create_confectionery:full_white_chocolate_bar"
    },
    "full_ruby_chocolate_bar": {
      "id": "create_confectionery:full_ruby_chocolate_bar"
    },
    "hot_chocolate_bottle": {
      "id": "create_confectionery:hot_chocolate_bottle"
    },
    "soothing_hot_chocolate": {
      "id": "create_confectionery:soothing_hot_chocolate"
    },
    "black_chocolate_glazed_berries": {
      "id": "create_confectionery:black_chocolate_glazed_berries"
    },
    "white_chocolate_glazed_berries": {
      "id": "create_confectionery:white_chocolate_glazed_berries"
    },
    "caramel_glazed_berries": {
      "id": "create_confectionery:caramel_glazed_berries"
    },
    "ruby_chocolate_glazed_berries": {
      "id": "create_confectionery:ruby_chocolate_glazed_berries"
    },
    "marshmallow_on_a_stick": {
      "id": "create_confectionery:marshmallow_on_a_stick"
    },
    "caramelized_marshmellow_on_a_stick": {
      "id": "create_confectionery:caramelized_marshmellow_on_a_stick"
    },
    "marshmallow": {
      "id": "create_confectionery:marshmallow"
    },
    "chocolate_glazed_marshmallow": {
      "id": "create_confectionery:chocolate_glazed_marshmallow"
    },
    "black_chocolate_glazed_marshmallow": {
      "id": "create_confectionery:black_chocolate_glazed_marshmallow"
    },
    "white_chocolate_glazed_marshmallow": {
      "id": "create_confectionery:white_chocolate_glazed_marshmallow"
    },
    "ruby_chocolate_glazed_marshmallow": {
      "id": "create_confectionery:ruby_chocolate_glazed_marshmallow"
    },
    "candy_cane": {
      "id": "create_confectionery:candy_cane"
    },
    "the_bright_side": {
      "id": "create_confectionery:the_bright_side"
    },
    "honey_candy": {
      "id": "create_confectionery:honey_candy"
    },
    "chocolate_candy": {
      "id": "create_confectionery:chocolate_candy"
    },
    "chocolate_candy_1": {
      "id": "create_confectionery:chocolate_candy_1"
    },
    "chocolate_candy_2": {
      "id": "create_confectionery:chocolate_candy_2"
    },
    "chocolate_candy_3": {
      "id": "create_confectionery:chocolate_candy_3"
    },
    "black_chocolate_candy": {
      "id": "create_confectionery:black_chocolate_candy"
    },
    "black_chocolate_candy_1": {
      "id": "create_confectionery:black_chocolate_candy_1"
    },
    "black_chocolate_candy_2": {
      "id": "create_confectionery:black_chocolate_candy_2"
    },
    "black_chocolate_candy_3": {
      "id": "create_confectionery:black_chocolate_candy_3"
    },
    "white_chocolate_candy": {
      "id": "create_confectionery:white_chocolate_candy"
    },
    "white_chocolate_candy_1": {
      "id": "create_confectionery:white_chocolate_candy_1"
    },
    "white_chocolate_candy_2": {
      "id": "create_confectionery:white_chocolate_candy_2"
    },
    "white_chocolate_candy_3": {
      "id": "create_confectionery:white_chocolate_candy_3"
    },
    "ruby_chocolate_candy": {
      "id": "create_confectionery:ruby_chocolate_candy"
    },
    "ruby_chocolate_candy_1": {
      "id": "create_confectionery:ruby_chocolate_candy_1"
    },
    "ruby_chocolate_candy_2": {
      "id": "create_confectionery:ruby_chocolate_candy_2"
    },
    "ruby_chocolate_candy_3": {
      "id": "create_confectionery:ruby_chocolate_candy_3"
    }
  },
  "mininggadgets": {
    "id": "mininggadgets:mininggadget_simple",
    "mininggadget_simple": {
      "id": "mininggadgets:mininggadget_simple"
    },
    "mininggadget_fancy": {
      "id": "mininggadgets:mininggadget_fancy"
    },
    "mininggadget": {
      "id": "mininggadgets:mininggadget"
    },
    "modificationtable": {
      "id": "mininggadgets:modificationtable"
    },
    "minerslight": {
      "id": "mininggadgets:minerslight"
    },
    "upgrade_empty": {
      "id": "mininggadgets:upgrade_empty"
    },
    "upgrade_silk": {
      "id": "mininggadgets:upgrade_silk"
    },
    "upgrade_void_junk": {
      "id": "mininggadgets:upgrade_void_junk"
    },
    "upgrade_magnet": {
      "id": "mininggadgets:upgrade_magnet"
    },
    "upgrade_three_by_three": {
      "id": "mininggadgets:upgrade_three_by_three"
    },
    "upgrade_light_placer": {
      "id": "mininggadgets:upgrade_light_placer"
    },
    "upgrade_freezing": {
      "id": "mininggadgets:upgrade_freezing"
    },
    "upgrade_fortune_1": {
      "id": "mininggadgets:upgrade_fortune_1"
    },
    "upgrade_fortune_2": {
      "id": "mininggadgets:upgrade_fortune_2"
    },
    "upgrade_fortune_3": {
      "id": "mininggadgets:upgrade_fortune_3"
    },
    "upgrade_range_1": {
      "id": "mininggadgets:upgrade_range_1"
    },
    "upgrade_range_2": {
      "id": "mininggadgets:upgrade_range_2"
    },
    "upgrade_range_3": {
      "id": "mininggadgets:upgrade_range_3"
    },
    "upgrade_battery_1": {
      "id": "mininggadgets:upgrade_battery_1"
    },
    "upgrade_battery_2": {
      "id": "mininggadgets:upgrade_battery_2"
    },
    "upgrade_battery_3": {
      "id": "mininggadgets:upgrade_battery_3"
    },
    "upgrade_efficiency_1": {
      "id": "mininggadgets:upgrade_efficiency_1"
    },
    "upgrade_efficiency_2": {
      "id": "mininggadgets:upgrade_efficiency_2"
    },
    "upgrade_efficiency_3": {
      "id": "mininggadgets:upgrade_efficiency_3"
    },
    "upgrade_efficiency_4": {
      "id": "mininggadgets:upgrade_efficiency_4"
    },
    "upgrade_efficiency_5": {
      "id": "mininggadgets:upgrade_efficiency_5"
    }
  },
  "ars_nouveau": {
    "id": "ars_nouveau:source_berry",
    "source_berry": {
      "id": "ars_nouveau:source_berry"
    },
    "mage_block": {
      "id": "ars_nouveau:mage_block"
    },
    "agronomic_sourcelink": {
      "id": "ars_nouveau:agronomic_sourcelink"
    },
    "source_jar": {
      "id": "ars_nouveau:source_jar"
    },
    "magebloom_crop": {
      "id": "ars_nouveau:magebloom_crop"
    },
    "enchanting_apparatus": {
      "id": "ars_nouveau:enchanting_apparatus"
    },
    "arcane_pedestal": {
      "id": "ars_nouveau:arcane_pedestal"
    },
    "scribes_table": {
      "id": "ars_nouveau:scribes_table"
    },
    "relay": {
      "id": "ars_nouveau:relay"
    },
    "relay_splitter": {
      "id": "ars_nouveau:relay_splitter"
    },
    "imbuement_chamber": {
      "id": "ars_nouveau:imbuement_chamber"
    },
    "arcane_core": {
      "id": "ars_nouveau:arcane_core"
    },
    "volcanic_sourcelink": {
      "id": "ars_nouveau:volcanic_sourcelink"
    },
    "lava_lily": {
      "id": "ars_nouveau:lava_lily"
    },
    "wixie_cauldron": {
      "id": "ars_nouveau:wixie_cauldron"
    },
    "creative_source_jar": {
      "id": "ars_nouveau:creative_source_jar"
    },
    "relay_warp": {
      "id": "ars_nouveau:relay_warp"
    },
    "relay_deposit": {
      "id": "ars_nouveau:relay_deposit"
    },
    "blue_archwood_leaves": {
      "id": "ars_nouveau:blue_archwood_leaves"
    },
    "blue_archwood_log": {
      "id": "ars_nouveau:blue_archwood_log"
    },
    "blue_archwood_sapling": {
      "id": "ars_nouveau:blue_archwood_sapling"
    },
    "blue_archwood_wood": {
      "id": "ars_nouveau:blue_archwood_wood"
    },
    "purple_archwood_leaves": {
      "id": "ars_nouveau:purple_archwood_leaves"
    },
    "purple_archwood_log": {
      "id": "ars_nouveau:purple_archwood_log"
    },
    "purple_archwood_sapling": {
      "id": "ars_nouveau:purple_archwood_sapling"
    },
    "purple_archwood_wood": {
      "id": "ars_nouveau:purple_archwood_wood"
    },
    "green_archwood_leaves": {
      "id": "ars_nouveau:green_archwood_leaves"
    },
    "green_archwood_log": {
      "id": "ars_nouveau:green_archwood_log"
    },
    "green_archwood_sapling": {
      "id": "ars_nouveau:green_archwood_sapling"
    },
    "green_archwood_wood": {
      "id": "ars_nouveau:green_archwood_wood"
    },
    "red_archwood_leaves": {
      "id": "ars_nouveau:red_archwood_leaves"
    },
    "red_archwood_log": {
      "id": "ars_nouveau:red_archwood_log"
    },
    "red_archwood_sapling": {
      "id": "ars_nouveau:red_archwood_sapling"
    },
    "red_archwood_wood": {
      "id": "ars_nouveau:red_archwood_wood"
    },
    "archwood_planks": {
      "id": "ars_nouveau:archwood_planks"
    },
    "ritual_brazier": {
      "id": "ars_nouveau:ritual_brazier"
    },
    "archwood_button": {
      "id": "ars_nouveau:archwood_button"
    },
    "archwood_stairs": {
      "id": "ars_nouveau:archwood_stairs"
    },
    "archwood_slab": {
      "id": "ars_nouveau:archwood_slab"
    },
    "archwood_fence_gate": {
      "id": "ars_nouveau:archwood_fence_gate"
    },
    "archwood_trapdoor": {
      "id": "ars_nouveau:archwood_trapdoor"
    },
    "archwood_pressure_plate": {
      "id": "ars_nouveau:archwood_pressure_plate"
    },
    "archwood_fence": {
      "id": "ars_nouveau:archwood_fence"
    },
    "archwood_door": {
      "id": "ars_nouveau:archwood_door"
    },
    "stripped_blue_archwood_log": {
      "id": "ars_nouveau:stripped_blue_archwood_log"
    },
    "stripped_blue_archwood_wood": {
      "id": "ars_nouveau:stripped_blue_archwood_wood"
    },
    "stripped_green_archwood_log": {
      "id": "ars_nouveau:stripped_green_archwood_log"
    },
    "stripped_green_archwood_wood": {
      "id": "ars_nouveau:stripped_green_archwood_wood"
    },
    "stripped_red_archwood_log": {
      "id": "ars_nouveau:stripped_red_archwood_log"
    },
    "stripped_red_archwood_wood": {
      "id": "ars_nouveau:stripped_red_archwood_wood"
    },
    "stripped_purple_archwood_log": {
      "id": "ars_nouveau:stripped_purple_archwood_log"
    },
    "stripped_purple_archwood_wood": {
      "id": "ars_nouveau:stripped_purple_archwood_wood"
    },
    "source_gem_block": {
      "id": "ars_nouveau:source_gem_block"
    },
    "potion_jar": {
      "id": "ars_nouveau:potion_jar"
    },
    "potion_melder": {
      "id": "ars_nouveau:potion_melder"
    },
    "sconce": {
      "id": "ars_nouveau:sconce"
    },
    "drygmy_stone": {
      "id": "ars_nouveau:drygmy_stone"
    },
    "alchemical_sourcelink": {
      "id": "ars_nouveau:alchemical_sourcelink"
    },
    "vitalic_sourcelink": {
      "id": "ars_nouveau:vitalic_sourcelink"
    },
    "mycelial_sourcelink": {
      "id": "ars_nouveau:mycelial_sourcelink"
    },
    "bookwyrm_lectern": {
      "id": "ars_nouveau:bookwyrm_lectern"
    },
    "timer_spell_turret": {
      "id": "ars_nouveau:timer_spell_turret"
    },
    "basic_spell_turret": {
      "id": "ars_nouveau:basic_spell_turret"
    },
    "spell_turret": {
      "id": "ars_nouveau:spell_turret"
    },
    "archwood_chest": {
      "id": "ars_nouveau:archwood_chest"
    },
    "spell_prism": {
      "id": "ars_nouveau:spell_prism"
    },
    "whirlisprig_flower": {
      "id": "ars_nouveau:whirlisprig_flower"
    },
    "relay_collector": {
      "id": "ars_nouveau:relay_collector"
    },
    "red_sbed": {
      "id": "ars_nouveau:red_sbed"
    },
    "blue_sbed": {
      "id": "ars_nouveau:blue_sbed"
    },
    "green_sbed": {
      "id": "ars_nouveau:green_sbed"
    },
    "yellow_sbed": {
      "id": "ars_nouveau:yellow_sbed"
    },
    "purple_sbed": {
      "id": "ars_nouveau:purple_sbed"
    },
    "orange_sbed": {
      "id": "ars_nouveau:orange_sbed"
    },
    "scryers_crystal": {
      "id": "ars_nouveau:scryers_crystal"
    },
    "scryers_oculus": {
      "id": "ars_nouveau:scryers_oculus"
    },
    "potion_diffuser": {
      "id": "ars_nouveau:potion_diffuser"
    },
    "mendosteen_pod": {
      "id": "ars_nouveau:mendosteen_pod"
    },
    "bastion_pod": {
      "id": "ars_nouveau:bastion_pod"
    },
    "bombegranate_pod": {
      "id": "ars_nouveau:bombegranate_pod"
    },
    "frostaya_pod": {
      "id": "ars_nouveau:frostaya_pod"
    },
    "sourcestone": {
      "id": "ars_nouveau:sourcestone"
    },
    "sourcestone_mosaic": {
      "id": "ars_nouveau:sourcestone_mosaic"
    },
    "sourcestone_basketweave": {
      "id": "ars_nouveau:sourcestone_basketweave"
    },
    "sourcestone_alternating": {
      "id": "ars_nouveau:sourcestone_alternating"
    },
    "sourcestone_large_bricks": {
      "id": "ars_nouveau:sourcestone_large_bricks"
    },
    "sourcestone_small_bricks": {
      "id": "ars_nouveau:sourcestone_small_bricks"
    },
    "smooth_sourcestone_basketweave": {
      "id": "ars_nouveau:smooth_sourcestone_basketweave"
    },
    "smooth_sourcestone_mosaic": {
      "id": "ars_nouveau:smooth_sourcestone_mosaic"
    },
    "smooth_sourcestone_alternating": {
      "id": "ars_nouveau:smooth_sourcestone_alternating"
    },
    "smooth_sourcestone_large_bricks": {
      "id": "ars_nouveau:smooth_sourcestone_large_bricks"
    },
    "smooth_sourcestone": {
      "id": "ars_nouveau:smooth_sourcestone"
    },
    "smooth_sourcestone_small_bricks": {
      "id": "ars_nouveau:smooth_sourcestone_small_bricks"
    },
    "gilded_sourcestone_mosaic": {
      "id": "ars_nouveau:gilded_sourcestone_mosaic"
    },
    "gilded_sourcestone_basketweave": {
      "id": "ars_nouveau:gilded_sourcestone_basketweave"
    },
    "gilded_sourcestone_alternating": {
      "id": "ars_nouveau:gilded_sourcestone_alternating"
    },
    "gilded_sourcestone_large_bricks": {
      "id": "ars_nouveau:gilded_sourcestone_large_bricks"
    },
    "gilded_sourcestone_small_bricks": {
      "id": "ars_nouveau:gilded_sourcestone_small_bricks"
    },
    "smooth_gilded_sourcestone_mosaic": {
      "id": "ars_nouveau:smooth_gilded_sourcestone_mosaic"
    },
    "smooth_gilded_sourcestone_basketweave": {
      "id": "ars_nouveau:smooth_gilded_sourcestone_basketweave"
    },
    "smooth_gilded_sourcestone_alternating": {
      "id": "ars_nouveau:smooth_gilded_sourcestone_alternating"
    },
    "smooth_gilded_sourcestone_large_bricks": {
      "id": "ars_nouveau:smooth_gilded_sourcestone_large_bricks"
    },
    "smooth_gilded_sourcestone_small_bricks": {
      "id": "ars_nouveau:smooth_gilded_sourcestone_small_bricks"
    },
    "alteration_table": {
      "id": "ars_nouveau:alteration_table"
    },
    "mob_jar": {
      "id": "ars_nouveau:mob_jar"
    },
    "void_prism": {
      "id": "ars_nouveau:void_prism"
    },
    "ghostweave": {
      "id": "ars_nouveau:ghostweave"
    },
    "falseweave": {
      "id": "ars_nouveau:falseweave"
    },
    "mirrorweave": {
      "id": "ars_nouveau:mirrorweave"
    },
    "magebloom_block": {
      "id": "ars_nouveau:magebloom_block"
    },
    "glyph_invisibility": {
      "id": "ars_nouveau:glyph_invisibility"
    },
    "glyph_phantom_block": {
      "id": "ars_nouveau:glyph_phantom_block"
    },
    "glyph_fortune": {
      "id": "ars_nouveau:glyph_fortune"
    },
    "glyph_cut": {
      "id": "ars_nouveau:glyph_cut"
    },
    "glyph_summon_wolves": {
      "id": "ars_nouveau:glyph_summon_wolves"
    },
    "glyph_name": {
      "id": "ars_nouveau:glyph_name"
    },
    "glyph_dampen": {
      "id": "ars_nouveau:glyph_dampen"
    },
    "glyph_gravity": {
      "id": "ars_nouveau:glyph_gravity"
    },
    "glyph_split": {
      "id": "ars_nouveau:glyph_split"
    },
    "glyph_snare": {
      "id": "ars_nouveau:glyph_snare"
    },
    "glyph_touch": {
      "id": "ars_nouveau:glyph_touch"
    },
    "glyph_conjure_water": {
      "id": "ars_nouveau:glyph_conjure_water"
    },
    "glyph_pickup": {
      "id": "ars_nouveau:glyph_pickup"
    },
    "glyph_smelt": {
      "id": "ars_nouveau:glyph_smelt"
    },
    "glyph_rotate": {
      "id": "ars_nouveau:glyph_rotate"
    },
    "glyph_blink": {
      "id": "ars_nouveau:glyph_blink"
    },
    "glyph_ignite": {
      "id": "ars_nouveau:glyph_ignite"
    },
    "glyph_glide": {
      "id": "ars_nouveau:glyph_glide"
    },
    "glyph_leap": {
      "id": "ars_nouveau:glyph_leap"
    },
    "glyph_fangs": {
      "id": "ars_nouveau:glyph_fangs"
    },
    "glyph_exchange": {
      "id": "ars_nouveau:glyph_exchange"
    },
    "glyph_fell": {
      "id": "ars_nouveau:glyph_fell"
    },
    "glyph_intangible": {
      "id": "ars_nouveau:glyph_intangible"
    },
    "glyph_ender_inventory": {
      "id": "ars_nouveau:glyph_ender_inventory"
    },
    "glyph_interact": {
      "id": "ars_nouveau:glyph_interact"
    },
    "glyph_place_block": {
      "id": "ars_nouveau:glyph_place_block"
    },
    "glyph_harvest": {
      "id": "ars_nouveau:glyph_harvest"
    },
    "glyph_freeze": {
      "id": "ars_nouveau:glyph_freeze"
    },
    "glyph_summon_steed": {
      "id": "ars_nouveau:glyph_summon_steed"
    },
    "glyph_self": {
      "id": "ars_nouveau:glyph_self"
    },
    "glyph_aoe": {
      "id": "ars_nouveau:glyph_aoe"
    },
    "glyph_summon_undead": {
      "id": "ars_nouveau:glyph_summon_undead"
    },
    "glyph_rune": {
      "id": "ars_nouveau:glyph_rune"
    },
    "glyph_wind_shear": {
      "id": "ars_nouveau:glyph_wind_shear"
    },
    "glyph_pull": {
      "id": "ars_nouveau:glyph_pull"
    },
    "glyph_slowfall": {
      "id": "ars_nouveau:glyph_slowfall"
    },
    "glyph_extract": {
      "id": "ars_nouveau:glyph_extract"
    },
    "glyph_delay": {
      "id": "ars_nouveau:glyph_delay"
    },
    "glyph_cold_snap": {
      "id": "ars_nouveau:glyph_cold_snap"
    },
    "glyph_summon_decoy": {
      "id": "ars_nouveau:glyph_summon_decoy"
    },
    "glyph_projectile": {
      "id": "ars_nouveau:glyph_projectile"
    },
    "glyph_hex": {
      "id": "ars_nouveau:glyph_hex"
    },
    "glyph_light": {
      "id": "ars_nouveau:glyph_light"
    },
    "glyph_wither": {
      "id": "ars_nouveau:glyph_wither"
    },
    "glyph_toss": {
      "id": "ars_nouveau:glyph_toss"
    },
    "glyph_grow": {
      "id": "ars_nouveau:glyph_grow"
    },
    "glyph_firework": {
      "id": "ars_nouveau:glyph_firework"
    },
    "glyph_crush": {
      "id": "ars_nouveau:glyph_crush"
    },
    "glyph_evaporate": {
      "id": "ars_nouveau:glyph_evaporate"
    },
    "glyph_lightning": {
      "id": "ars_nouveau:glyph_lightning"
    },
    "glyph_launch": {
      "id": "ars_nouveau:glyph_launch"
    },
    "glyph_harm": {
      "id": "ars_nouveau:glyph_harm"
    },
    "glyph_amplify": {
      "id": "ars_nouveau:glyph_amplify"
    },
    "glyph_bounce": {
      "id": "ars_nouveau:glyph_bounce"
    },
    "glyph_heal": {
      "id": "ars_nouveau:glyph_heal"
    },
    "glyph_sensitive": {
      "id": "ars_nouveau:glyph_sensitive"
    },
    "glyph_redstone_signal": {
      "id": "ars_nouveau:glyph_redstone_signal"
    },
    "glyph_duration_down": {
      "id": "ars_nouveau:glyph_duration_down"
    },
    "glyph_gust": {
      "id": "ars_nouveau:glyph_gust"
    },
    "glyph_wall": {
      "id": "ars_nouveau:glyph_wall"
    },
    "glyph_summon_vex": {
      "id": "ars_nouveau:glyph_summon_vex"
    },
    "glyph_decelerate": {
      "id": "ars_nouveau:glyph_decelerate"
    },
    "glyph_extend_time": {
      "id": "ars_nouveau:glyph_extend_time"
    },
    "glyph_orbit": {
      "id": "ars_nouveau:glyph_orbit"
    },
    "glyph_accelerate": {
      "id": "ars_nouveau:glyph_accelerate"
    },
    "glyph_break": {
      "id": "ars_nouveau:glyph_break"
    },
    "glyph_flare": {
      "id": "ars_nouveau:glyph_flare"
    },
    "glyph_explosion": {
      "id": "ars_nouveau:glyph_explosion"
    },
    "glyph_craft": {
      "id": "ars_nouveau:glyph_craft"
    },
    "glyph_sense_magic": {
      "id": "ars_nouveau:glyph_sense_magic"
    },
    "glyph_pierce": {
      "id": "ars_nouveau:glyph_pierce"
    },
    "glyph_infuse": {
      "id": "ars_nouveau:glyph_infuse"
    },
    "glyph_underfoot": {
      "id": "ars_nouveau:glyph_underfoot"
    },
    "glyph_linger": {
      "id": "ars_nouveau:glyph_linger"
    },
    "glyph_dispel": {
      "id": "ars_nouveau:glyph_dispel"
    },
    "ritual_burrowing": {
      "id": "ars_nouveau:ritual_burrowing"
    },
    "ritual_challenge": {
      "id": "ars_nouveau:ritual_challenge"
    },
    "ritual_binding": {
      "id": "ars_nouveau:ritual_binding"
    },
    "ritual_awakening": {
      "id": "ars_nouveau:ritual_awakening"
    },
    "ritual_disintegration": {
      "id": "ars_nouveau:ritual_disintegration"
    },
    "ritual_sunrise": {
      "id": "ars_nouveau:ritual_sunrise"
    },
    "ritual_cloudshaping": {
      "id": "ars_nouveau:ritual_cloudshaping"
    },
    "ritual_flight": {
      "id": "ars_nouveau:ritual_flight"
    },
    "ritual_restoration": {
      "id": "ars_nouveau:ritual_restoration"
    },
    "ritual_warping": {
      "id": "ars_nouveau:ritual_warping"
    },
    "ritual_moonfall": {
      "id": "ars_nouveau:ritual_moonfall"
    },
    "ritual_containment": {
      "id": "ars_nouveau:ritual_containment"
    },
    "ritual_scrying": {
      "id": "ars_nouveau:ritual_scrying"
    },
    "ritual_overgrowth": {
      "id": "ars_nouveau:ritual_overgrowth"
    },
    "ritual_fertility": {
      "id": "ars_nouveau:ritual_fertility"
    },
    "ritual_harvest": {
      "id": "ars_nouveau:ritual_harvest"
    },
    "ritual_wilden_summon": {
      "id": "ars_nouveau:ritual_wilden_summon"
    },
    "familiar_starbuncle": {
      "id": "ars_nouveau:familiar_starbuncle"
    },
    "familiar_wixie": {
      "id": "ars_nouveau:familiar_wixie"
    },
    "familiar_whirlisprig": {
      "id": "ars_nouveau:familiar_whirlisprig"
    },
    "familiar_drygmy": {
      "id": "ars_nouveau:familiar_drygmy"
    },
    "familiar_bookwyrm": {
      "id": "ars_nouveau:familiar_bookwyrm"
    },
    "thread_depths": {
      "id": "ars_nouveau:thread_depths"
    },
    "thread_heights": {
      "id": "ars_nouveau:thread_heights"
    },
    "thread_whirlisprig": {
      "id": "ars_nouveau:thread_whirlisprig"
    },
    "thread_drygmy": {
      "id": "ars_nouveau:thread_drygmy"
    },
    "thread_spellpower": {
      "id": "ars_nouveau:thread_spellpower"
    },
    "thread_life_drain": {
      "id": "ars_nouveau:thread_life_drain"
    },
    "thread_starbuncle": {
      "id": "ars_nouveau:thread_starbuncle"
    },
    "thread_chilling": {
      "id": "ars_nouveau:thread_chilling"
    },
    "thread_undying": {
      "id": "ars_nouveau:thread_undying"
    },
    "thread_feather": {
      "id": "ars_nouveau:thread_feather"
    },
    "thread_warding": {
      "id": "ars_nouveau:thread_warding"
    },
    "thread_gliding": {
      "id": "ars_nouveau:thread_gliding"
    },
    "thread_magic_capacity": {
      "id": "ars_nouveau:thread_magic_capacity"
    },
    "thread_kindling": {
      "id": "ars_nouveau:thread_kindling"
    },
    "thread_wixie": {
      "id": "ars_nouveau:thread_wixie"
    },
    "thread_repairing": {
      "id": "ars_nouveau:thread_repairing"
    },
    "drygmy_se": {
      "id": "ars_nouveau:drygmy_se"
    },
    "starbuncle_se": {
      "id": "ars_nouveau:starbuncle_se"
    },
    "whirlisprig_se": {
      "id": "ars_nouveau:whirlisprig_se"
    },
    "wilden_hunter_se": {
      "id": "ars_nouveau:wilden_hunter_se"
    },
    "wilden_guardian_se": {
      "id": "ars_nouveau:wilden_guardian_se"
    },
    "wilden_stalker_se": {
      "id": "ars_nouveau:wilden_stalker_se"
    },
    "runic_chalk": {
      "id": "ars_nouveau:runic_chalk"
    },
    "novice_spell_book": {
      "id": "ars_nouveau:novice_spell_book"
    },
    "apprentice_spell_book": {
      "id": "ars_nouveau:apprentice_spell_book"
    },
    "archmage_spell_book": {
      "id": "ars_nouveau:archmage_spell_book"
    },
    "creative_spell_book": {
      "id": "ars_nouveau:creative_spell_book"
    },
    "blank_glyph": {
      "id": "ars_nouveau:blank_glyph"
    },
    "bucket_of_source": {
      "id": "ars_nouveau:bucket_of_source"
    },
    "magebloom": {
      "id": "ars_nouveau:magebloom"
    },
    "magebloom_fiber": {
      "id": "ars_nouveau:magebloom_fiber"
    },
    "blaze_fiber": {
      "id": "ars_nouveau:blaze_fiber"
    },
    "end_fiber": {
      "id": "ars_nouveau:end_fiber"
    },
    "mundane_belt": {
      "id": "ars_nouveau:mundane_belt"
    },
    "jar_of_light": {
      "id": "ars_nouveau:jar_of_light"
    },
    "belt_of_levitation": {
      "id": "ars_nouveau:belt_of_levitation"
    },
    "worn_notebook": {
      "id": "ars_nouveau:worn_notebook"
    },
    "ring_of_potential": {
      "id": "ars_nouveau:ring_of_potential"
    },
    "ring_of_lesser_discount": {
      "id": "ars_nouveau:ring_of_lesser_discount"
    },
    "ring_of_greater_discount": {
      "id": "ars_nouveau:ring_of_greater_discount"
    },
    "belt_of_unstable_gifts": {
      "id": "ars_nouveau:belt_of_unstable_gifts"
    },
    "warp_scroll": {
      "id": "ars_nouveau:warp_scroll"
    },
    "spell_parchment": {
      "id": "ars_nouveau:spell_parchment"
    },
    "bookwyrm_charm": {
      "id": "ars_nouveau:bookwyrm_charm"
    },
    "dominion_wand": {
      "id": "ars_nouveau:dominion_wand"
    },
    "amulet_of_mana_boost": {
      "id": "ars_nouveau:amulet_of_mana_boost"
    },
    "amulet_of_mana_regen": {
      "id": "ars_nouveau:amulet_of_mana_regen"
    },
    "dull_trinket": {
      "id": "ars_nouveau:dull_trinket"
    },
    "starbuncle_charm": {
      "id": "ars_nouveau:starbuncle_charm"
    },
    "starbuncle_shards": {
      "id": "ars_nouveau:starbuncle_shards"
    },
    "starbuncle_shades": {
      "id": "ars_nouveau:starbuncle_shades"
    },
    "whirlisprig_charm": {
      "id": "ars_nouveau:whirlisprig_charm"
    },
    "whirlisprig_shards": {
      "id": "ars_nouveau:whirlisprig_shards"
    },
    "source_gem": {
      "id": "ars_nouveau:source_gem"
    },
    "allow_scroll": {
      "id": "ars_nouveau:allow_scroll"
    },
    "deny_scroll": {
      "id": "ars_nouveau:deny_scroll"
    },
    "mimic_scroll": {
      "id": "ars_nouveau:mimic_scroll"
    },
    "blank_parchment": {
      "id": "ars_nouveau:blank_parchment"
    },
    "wand": {
      "id": "ars_nouveau:wand"
    },
    "void_jar": {
      "id": "ars_nouveau:void_jar"
    },
    "wixie_charm": {
      "id": "ars_nouveau:wixie_charm"
    },
    "wixie_shards": {
      "id": "ars_nouveau:wixie_shards"
    },
    "spell_bow": {
      "id": "ars_nouveau:spell_bow"
    },
    "amplify_arrow": {
      "id": "ars_nouveau:amplify_arrow"
    },
    "split_arrow": {
      "id": "ars_nouveau:split_arrow"
    },
    "pierce_arrow": {
      "id": "ars_nouveau:pierce_arrow"
    },
    "wilden_horn": {
      "id": "ars_nouveau:wilden_horn"
    },
    "wilden_spike": {
      "id": "ars_nouveau:wilden_spike"
    },
    "wilden_wing": {
      "id": "ars_nouveau:wilden_wing"
    },
    "potion_flask": {
      "id": "ars_nouveau:potion_flask"
    },
    "potion_flask_amplify": {
      "id": "ars_nouveau:potion_flask_amplify"
    },
    "potion_flask_extend_time": {
      "id": "ars_nouveau:potion_flask_extend_time"
    },
    "experience_gem": {
      "id": "ars_nouveau:experience_gem"
    },
    "greater_experience_gem": {
      "id": "ars_nouveau:greater_experience_gem"
    },
    "enchanters_sword": {
      "id": "ars_nouveau:enchanters_sword"
    },
    "enchanters_shield": {
      "id": "ars_nouveau:enchanters_shield"
    },
    "caster_tome": {
      "id": "ars_nouveau:caster_tome"
    },
    "drygmy_charm": {
      "id": "ars_nouveau:drygmy_charm"
    },
    "drygmy_shard": {
      "id": "ars_nouveau:drygmy_shard"
    },
    "wilden_tribute": {
      "id": "ars_nouveau:wilden_tribute"
    },
    "summon_focus": {
      "id": "ars_nouveau:summon_focus"
    },
    "shapers_focus": {
      "id": "ars_nouveau:shapers_focus"
    },
    "source_berry_pie": {
      "id": "ars_nouveau:source_berry_pie"
    },
    "source_berry_roll": {
      "id": "ars_nouveau:source_berry_roll"
    },
    "enchanters_mirror": {
      "id": "ars_nouveau:enchanters_mirror"
    },
    "novice_boots": {
      "id": "ars_nouveau:novice_boots"
    },
    "novice_leggings": {
      "id": "ars_nouveau:novice_leggings"
    },
    "novice_robes": {
      "id": "ars_nouveau:novice_robes"
    },
    "novice_hood": {
      "id": "ars_nouveau:novice_hood"
    },
    "apprentice_boots": {
      "id": "ars_nouveau:apprentice_boots"
    },
    "apprentice_leggings": {
      "id": "ars_nouveau:apprentice_leggings"
    },
    "apprentice_robes": {
      "id": "ars_nouveau:apprentice_robes"
    },
    "apprentice_hood": {
      "id": "ars_nouveau:apprentice_hood"
    },
    "archmage_boots": {
      "id": "ars_nouveau:archmage_boots"
    },
    "archmage_leggings": {
      "id": "ars_nouveau:archmage_leggings"
    },
    "archmage_robes": {
      "id": "ars_nouveau:archmage_robes"
    },
    "archmage_hood": {
      "id": "ars_nouveau:archmage_hood"
    },
    "dowsing_rod": {
      "id": "ars_nouveau:dowsing_rod"
    },
    "abjuration_essence": {
      "id": "ars_nouveau:abjuration_essence"
    },
    "conjuration_essence": {
      "id": "ars_nouveau:conjuration_essence"
    },
    "air_essence": {
      "id": "ars_nouveau:air_essence"
    },
    "earth_essence": {
      "id": "ars_nouveau:earth_essence"
    },
    "fire_essence": {
      "id": "ars_nouveau:fire_essence"
    },
    "manipulation_essence": {
      "id": "ars_nouveau:manipulation_essence"
    },
    "water_essence": {
      "id": "ars_nouveau:water_essence"
    },
    "amethyst_golem_charm": {
      "id": "ars_nouveau:amethyst_golem_charm"
    },
    "annotated_codex": {
      "id": "ars_nouveau:annotated_codex"
    },
    "scryer_scroll": {
      "id": "ars_nouveau:scryer_scroll"
    },
    "wixie_hat": {
      "id": "ars_nouveau:wixie_hat"
    },
    "alchemists_crown": {
      "id": "ars_nouveau:alchemists_crown"
    },
    "splash_flask_cannon": {
      "id": "ars_nouveau:splash_flask_cannon"
    },
    "lingering_flask_cannon": {
      "id": "ars_nouveau:lingering_flask_cannon"
    },
    "blank_thread": {
      "id": "ars_nouveau:blank_thread"
    },
    "music_disc_aria_biblio": {
      "id": "ars_nouveau:music_disc_aria_biblio"
    },
    "starby_gift": {
      "id": "ars_nouveau:starby_gift"
    },
    "spell_crossbow": {
      "id": "ars_nouveau:spell_crossbow"
    },
    "rotating_spell_turret": {
      "id": "ars_nouveau:rotating_spell_turret"
    }
  },
  "ars_elemental": {
    "id": "ars_elemental:glyph_propagator_homing",
    "glyph_propagator_homing": {
      "id": "ars_elemental:glyph_propagator_homing"
    },
    "glyph_life_link": {
      "id": "ars_elemental:glyph_life_link"
    },
    "glyph_poison_spores": {
      "id": "ars_elemental:glyph_poison_spores"
    },
    "glyph_not_aquatic_filter": {
      "id": "ars_elemental:glyph_not_aquatic_filter"
    },
    "glyph_charm": {
      "id": "ars_elemental:glyph_charm"
    },
    "glyph_discharge": {
      "id": "ars_elemental:glyph_discharge"
    },
    "glyph_not_insect_filter": {
      "id": "ars_elemental:glyph_not_insect_filter"
    },
    "glyph_not_aerial_filter": {
      "id": "ars_elemental:glyph_not_aerial_filter"
    },
    "glyph_watery_grave": {
      "id": "ars_elemental:glyph_watery_grave"
    },
    "glyph_insect_filter": {
      "id": "ars_elemental:glyph_insect_filter"
    },
    "glyph_conjure_terrain": {
      "id": "ars_elemental:glyph_conjure_terrain"
    },
    "glyph_propagator_arc": {
      "id": "ars_elemental:glyph_propagator_arc"
    },
    "glyph_curved_projectile": {
      "id": "ars_elemental:glyph_curved_projectile"
    },
    "glyph_not_undead_filter": {
      "id": "ars_elemental:glyph_not_undead_filter"
    },
    "glyph_homing_projectile": {
      "id": "ars_elemental:glyph_homing_projectile"
    },
    "glyph_undead_filter": {
      "id": "ars_elemental:glyph_undead_filter"
    },
    "glyph_fiery_filter": {
      "id": "ars_elemental:glyph_fiery_filter"
    },
    "glyph_aquatic_filter": {
      "id": "ars_elemental:glyph_aquatic_filter"
    },
    "glyph_aerial_filter": {
      "id": "ars_elemental:glyph_aerial_filter"
    },
    "glyph_not_fiery_filter": {
      "id": "ars_elemental:glyph_not_fiery_filter"
    },
    "ritual_tesla_coil": {
      "id": "ars_elemental:ritual_tesla_coil"
    },
    "ritual_squirrels": {
      "id": "ars_elemental:ritual_squirrels"
    },
    "ritual_attraction": {
      "id": "ars_elemental:ritual_attraction"
    },
    "ritual_repulsion": {
      "id": "ars_elemental:ritual_repulsion"
    },
    "ritual_detection": {
      "id": "ars_elemental:ritual_detection"
    },
    "firenando_familiar": {
      "id": "ars_elemental:firenando_familiar"
    },
    "siren_familiar": {
      "id": "ars_elemental:siren_familiar"
    },
    "thread_spore": {
      "id": "ars_elemental:thread_spore"
    },
    "thread_shock": {
      "id": "ars_elemental:thread_shock"
    },
    "fire_hat": {
      "id": "ars_elemental:fire_hat"
    },
    "fire_robes": {
      "id": "ars_elemental:fire_robes"
    },
    "fire_leggings": {
      "id": "ars_elemental:fire_leggings"
    },
    "fire_boots": {
      "id": "ars_elemental:fire_boots"
    },
    "air_hat": {
      "id": "ars_elemental:air_hat"
    },
    "air_robes": {
      "id": "ars_elemental:air_robes"
    },
    "air_leggings": {
      "id": "ars_elemental:air_leggings"
    },
    "air_boots": {
      "id": "ars_elemental:air_boots"
    },
    "earth_hat": {
      "id": "ars_elemental:earth_hat"
    },
    "earth_robes": {
      "id": "ars_elemental:earth_robes"
    },
    "earth_leggings": {
      "id": "ars_elemental:earth_leggings"
    },
    "earth_boots": {
      "id": "ars_elemental:earth_boots"
    },
    "aqua_hat": {
      "id": "ars_elemental:aqua_hat"
    },
    "aqua_robes": {
      "id": "ars_elemental:aqua_robes"
    },
    "aqua_leggings": {
      "id": "ars_elemental:aqua_leggings"
    },
    "aqua_boots": {
      "id": "ars_elemental:aqua_boots"
    },
    "siren_shards": {
      "id": "ars_elemental:siren_shards"
    },
    "siren_charm": {
      "id": "ars_elemental:siren_charm"
    },
    "firenando_charm": {
      "id": "ars_elemental:firenando_charm"
    },
    "mark_of_mastery": {
      "id": "ars_elemental:mark_of_mastery"
    },
    "anima_essence": {
      "id": "ars_elemental:anima_essence"
    },
    "spell_horn": {
      "id": "ars_elemental:spell_horn"
    },
    "homing_prism_lens": {
      "id": "ars_elemental:homing_prism_lens"
    },
    "arc_prism_lens": {
      "id": "ars_elemental:arc_prism_lens"
    },
    "rainbow_prism_lens": {
      "id": "ars_elemental:rainbow_prism_lens"
    },
    "acceleration_prism_lens": {
      "id": "ars_elemental:acceleration_prism_lens"
    },
    "deceleration_prism_lens": {
      "id": "ars_elemental:deceleration_prism_lens"
    },
    "curio_bag": {
      "id": "ars_elemental:curio_bag"
    },
    "fire_focus": {
      "id": "ars_elemental:fire_focus"
    },
    "water_focus": {
      "id": "ars_elemental:water_focus"
    },
    "air_focus": {
      "id": "ars_elemental:air_focus"
    },
    "earth_focus": {
      "id": "ars_elemental:earth_focus"
    },
    "necrotic_focus": {
      "id": "ars_elemental:necrotic_focus"
    },
    "lesser_fire_focus": {
      "id": "ars_elemental:lesser_fire_focus"
    },
    "lesser_water_focus": {
      "id": "ars_elemental:lesser_water_focus"
    },
    "lesser_air_focus": {
      "id": "ars_elemental:lesser_air_focus"
    },
    "lesser_earth_focus": {
      "id": "ars_elemental:lesser_earth_focus"
    },
    "base_bangle": {
      "id": "ars_elemental:base_bangle"
    },
    "fire_bangle": {
      "id": "ars_elemental:fire_bangle"
    },
    "water_bangle": {
      "id": "ars_elemental:water_bangle"
    },
    "air_bangle": {
      "id": "ars_elemental:air_bangle"
    },
    "earth_bangle": {
      "id": "ars_elemental:earth_bangle"
    },
    "caster_bag": {
      "id": "ars_elemental:caster_bag"
    },
    "fire_caster_tome": {
      "id": "ars_elemental:fire_caster_tome"
    },
    "water_caster_tome": {
      "id": "ars_elemental:water_caster_tome"
    },
    "air_caster_tome": {
      "id": "ars_elemental:air_caster_tome"
    },
    "earth_caster_tome": {
      "id": "ars_elemental:earth_caster_tome"
    },
    "anima_caster_tome": {
      "id": "ars_elemental:anima_caster_tome"
    },
    "everfull_urn": {
      "id": "ars_elemental:everfull_urn"
    },
    "mermaid_rock": {
      "id": "ars_elemental:mermaid_rock"
    },
    "spore_blossom_up": {
      "id": "ars_elemental:spore_blossom_up"
    },
    "water_upstream": {
      "id": "ars_elemental:water_upstream"
    },
    "magma_upstream": {
      "id": "ars_elemental:magma_upstream"
    },
    "air_upstream": {
      "id": "ars_elemental:air_upstream"
    },
    "fire_turret": {
      "id": "ars_elemental:fire_turret"
    },
    "water_turret": {
      "id": "ars_elemental:water_turret"
    },
    "air_turret": {
      "id": "ars_elemental:air_turret"
    },
    "earth_turret": {
      "id": "ars_elemental:earth_turret"
    },
    "advanced_prism": {
      "id": "ars_elemental:advanced_prism"
    },
    "spell_mirror": {
      "id": "ars_elemental:spell_mirror"
    },
    "yellow_archwood_sapling": {
      "id": "ars_elemental:yellow_archwood_sapling"
    },
    "yellow_archwood_leaves": {
      "id": "ars_elemental:yellow_archwood_leaves"
    },
    "stripped_yellow_archwood_log": {
      "id": "ars_elemental:stripped_yellow_archwood_log"
    },
    "stripped_yellow_archwood": {
      "id": "ars_elemental:stripped_yellow_archwood"
    },
    "yellow_archwood_log": {
      "id": "ars_elemental:yellow_archwood_log"
    },
    "yellow_archwood": {
      "id": "ars_elemental:yellow_archwood"
    },
    "flashpine_pod": {
      "id": "ars_elemental:flashpine_pod"
    }
  },
  "ironchest": {
    "id": "ironchest:iron_to_gold_chest_upgrade",
    "iron_to_gold_chest_upgrade": {
      "id": "ironchest:iron_to_gold_chest_upgrade"
    },
    "gold_to_diamond_chest_upgrade": {
      "id": "ironchest:gold_to_diamond_chest_upgrade"
    },
    "copper_to_iron_chest_upgrade": {
      "id": "ironchest:copper_to_iron_chest_upgrade"
    },
    "diamond_to_crystal_chest_upgrade": {
      "id": "ironchest:diamond_to_crystal_chest_upgrade"
    },
    "wood_to_iron_chest_upgrade": {
      "id": "ironchest:wood_to_iron_chest_upgrade"
    },
    "wood_to_copper_chest_upgrade": {
      "id": "ironchest:wood_to_copper_chest_upgrade"
    },
    "diamond_to_obsidian_chest_upgrade": {
      "id": "ironchest:diamond_to_obsidian_chest_upgrade"
    },
    "iron_chest": {
      "id": "ironchest:iron_chest"
    },
    "gold_chest": {
      "id": "ironchest:gold_chest"
    },
    "diamond_chest": {
      "id": "ironchest:diamond_chest"
    },
    "copper_chest": {
      "id": "ironchest:copper_chest"
    },
    "crystal_chest": {
      "id": "ironchest:crystal_chest"
    },
    "obsidian_chest": {
      "id": "ironchest:obsidian_chest"
    },
    "dirt_chest": {
      "id": "ironchest:dirt_chest"
    },
    "trapped_iron_chest": {
      "id": "ironchest:trapped_iron_chest"
    },
    "trapped_gold_chest": {
      "id": "ironchest:trapped_gold_chest"
    },
    "trapped_diamond_chest": {
      "id": "ironchest:trapped_diamond_chest"
    },
    "trapped_copper_chest": {
      "id": "ironchest:trapped_copper_chest"
    },
    "trapped_crystal_chest": {
      "id": "ironchest:trapped_crystal_chest"
    },
    "trapped_obsidian_chest": {
      "id": "ironchest:trapped_obsidian_chest"
    },
    "trapped_dirt_chest": {
      "id": "ironchest:trapped_dirt_chest"
    }
  },
  "integratedcrafting": {
    "id": "integratedcrafting:part_interface_crafting",
    "part_interface_crafting": {
      "id": "integratedcrafting:part_interface_crafting"
    },
    "part_crafting_writer": {
      "id": "integratedcrafting:part_crafting_writer"
    }
  },
  "theoneprobe": {
    "id": "theoneprobe:probe",
    "probe": {
      "id": "theoneprobe:probe"
    },
    "creativeprobe": {
      "id": "theoneprobe:creativeprobe"
    },
    "probenote": {
      "id": "theoneprobe:probenote"
    },
    "diamond_helmet_probe": {
      "id": "theoneprobe:diamond_helmet_probe"
    },
    "gold_helmet_probe": {
      "id": "theoneprobe:gold_helmet_probe"
    },
    "iron_helmet_probe": {
      "id": "theoneprobe:iron_helmet_probe"
    }
  },
  "ftbquests": {
    "id": "ftbquests:book",
    "book": {
      "id": "ftbquests:book"
    },
    "missing_item": {
      "id": "ftbquests:missing_item"
    },
    "custom_icon": {
      "id": "ftbquests:custom_icon"
    },
    "barrier": {
      "id": "ftbquests:barrier"
    },
    "stage_barrier": {
      "id": "ftbquests:stage_barrier"
    },
    "detector": {
      "id": "ftbquests:detector"
    },
    "loot_crate_opener": {
      "id": "ftbquests:loot_crate_opener"
    },
    "screen_1": {
      "id": "ftbquests:screen_1"
    },
    "screen_3": {
      "id": "ftbquests:screen_3"
    },
    "screen_5": {
      "id": "ftbquests:screen_5"
    },
    "screen_7": {
      "id": "ftbquests:screen_7"
    }
  },
  "skyblockbuilder": {
    "id": "skyblockbuilder:structure_saver",
    "structure_saver": {
      "id": "skyblockbuilder:structure_saver"
    }
  },
  "alloyed": {
    "id": "alloyed:bronze_ingot",
    "bronze_ingot": {
      "id": "alloyed:bronze_ingot"
    },
    "steel_ingot": {
      "id": "alloyed:steel_ingot"
    },
    "bronze_nugget": {
      "id": "alloyed:bronze_nugget"
    },
    "steel_nugget": {
      "id": "alloyed:steel_nugget"
    },
    "bronze_sheet": {
      "id": "alloyed:bronze_sheet"
    },
    "steel_sheet": {
      "id": "alloyed:steel_sheet"
    },
    "steel_sword": {
      "id": "alloyed:steel_sword"
    },
    "steel_pickaxe": {
      "id": "alloyed:steel_pickaxe"
    },
    "steel_axe": {
      "id": "alloyed:steel_axe"
    },
    "steel_shovel": {
      "id": "alloyed:steel_shovel"
    },
    "steel_hoe": {
      "id": "alloyed:steel_hoe"
    },
    "steel_shears": {
      "id": "alloyed:steel_shears"
    },
    "steel_fishing_rod": {
      "id": "alloyed:steel_fishing_rod"
    },
    "steel_helmet": {
      "id": "alloyed:steel_helmet"
    },
    "steel_chestplate": {
      "id": "alloyed:steel_chestplate"
    },
    "steel_leggings": {
      "id": "alloyed:steel_leggings"
    },
    "steel_boots": {
      "id": "alloyed:steel_boots"
    },
    "bronze_block": {
      "id": "alloyed:bronze_block"
    },
    "exposed_bronze_block": {
      "id": "alloyed:exposed_bronze_block"
    },
    "weathered_bronze_block": {
      "id": "alloyed:weathered_bronze_block"
    },
    "oxidized_bronze_block": {
      "id": "alloyed:oxidized_bronze_block"
    },
    "waxed_bronze_block": {
      "id": "alloyed:waxed_bronze_block"
    },
    "waxed_exposed_bronze_block": {
      "id": "alloyed:waxed_exposed_bronze_block"
    },
    "waxed_weathered_bronze_block": {
      "id": "alloyed:waxed_weathered_bronze_block"
    },
    "waxed_oxidized_bronze_block": {
      "id": "alloyed:waxed_oxidized_bronze_block"
    },
    "bronze_bell": {
      "id": "alloyed:bronze_bell"
    },
    "steel_block": {
      "id": "alloyed:steel_block"
    },
    "steel_door": {
      "id": "alloyed:steel_door"
    },
    "locked_steel_door": {
      "id": "alloyed:locked_steel_door"
    },
    "steel_sheet_metal": {
      "id": "alloyed:steel_sheet_metal"
    },
    "steel_sheet_stairs": {
      "id": "alloyed:steel_sheet_stairs"
    },
    "steel_sheet_slab": {
      "id": "alloyed:steel_sheet_slab"
    },
    "steel_bars": {
      "id": "alloyed:steel_bars"
    },
    "steel_trapdoor": {
      "id": "alloyed:steel_trapdoor"
    },
    "steel_ladder": {
      "id": "alloyed:steel_ladder"
    },
    "steel_knife": {
      "id": "alloyed:steel_knife"
    },
    "steel_catwalk": {
      "id": "alloyed:steel_catwalk"
    },
    "steel_sheet_vertical_slab": {
      "id": "alloyed:steel_sheet_vertical_slab"
    },
    "steel_mesh_fence": {
      "id": "alloyed:steel_mesh_fence"
    }
  },
  "create": {
    "id": "create:schematicannon",
    "schematicannon": {
      "id": "create:schematicannon"
    },
    "schematic_table": {
      "id": "create:schematic_table"
    },
    "shaft": {
      "id": "create:shaft"
    },
    "cogwheel": {
      "id": "create:cogwheel"
    },
    "large_cogwheel": {
      "id": "create:large_cogwheel"
    },
    "gearbox": {
      "id": "create:gearbox"
    },
    "vertical_gearbox": {
      "id": "create:vertical_gearbox"
    },
    "clutch": {
      "id": "create:clutch"
    },
    "gearshift": {
      "id": "create:gearshift"
    },
    "encased_chain_drive": {
      "id": "create:encased_chain_drive"
    },
    "adjustable_chain_gearshift": {
      "id": "create:adjustable_chain_gearshift"
    },
    "creative_motor": {
      "id": "create:creative_motor"
    },
    "water_wheel": {
      "id": "create:water_wheel"
    },
    "encased_fan": {
      "id": "create:encased_fan"
    },
    "nozzle": {
      "id": "create:nozzle"
    },
    "turntable": {
      "id": "create:turntable"
    },
    "hand_crank": {
      "id": "create:hand_crank"
    },
    "cuckoo_clock": {
      "id": "create:cuckoo_clock"
    },
    "millstone": {
      "id": "create:millstone"
    },
    "crushing_wheel": {
      "id": "create:crushing_wheel"
    },
    "mechanical_press": {
      "id": "create:mechanical_press"
    },
    "mechanical_mixer": {
      "id": "create:mechanical_mixer"
    },
    "basin": {
      "id": "create:basin"
    },
    "empty_blaze_burner": {
      "id": "create:empty_blaze_burner"
    },
    "blaze_burner": {
      "id": "create:blaze_burner"
    },
    "depot": {
      "id": "create:depot"
    },
    "weighted_ejector": {
      "id": "create:weighted_ejector"
    },
    "chute": {
      "id": "create:chute"
    },
    "smart_chute": {
      "id": "create:smart_chute"
    },
    "speedometer": {
      "id": "create:speedometer"
    },
    "stressometer": {
      "id": "create:stressometer"
    },
    "wooden_bracket": {
      "id": "create:wooden_bracket"
    },
    "metal_bracket": {
      "id": "create:metal_bracket"
    },
    "metal_girder": {
      "id": "create:metal_girder"
    },
    "andesite_ladder": {
      "id": "create:andesite_ladder"
    },
    "brass_ladder": {
      "id": "create:brass_ladder"
    },
    "copper_ladder": {
      "id": "create:copper_ladder"
    },
    "fluid_pipe": {
      "id": "create:fluid_pipe"
    },
    "mechanical_pump": {
      "id": "create:mechanical_pump"
    },
    "smart_fluid_pipe": {
      "id": "create:smart_fluid_pipe"
    },
    "fluid_valve": {
      "id": "create:fluid_valve"
    },
    "copper_valve_handle": {
      "id": "create:copper_valve_handle"
    },
    "white_valve_handle": {
      "id": "create:white_valve_handle"
    },
    "orange_valve_handle": {
      "id": "create:orange_valve_handle"
    },
    "magenta_valve_handle": {
      "id": "create:magenta_valve_handle"
    },
    "light_blue_valve_handle": {
      "id": "create:light_blue_valve_handle"
    },
    "yellow_valve_handle": {
      "id": "create:yellow_valve_handle"
    },
    "lime_valve_handle": {
      "id": "create:lime_valve_handle"
    },
    "pink_valve_handle": {
      "id": "create:pink_valve_handle"
    },
    "gray_valve_handle": {
      "id": "create:gray_valve_handle"
    },
    "light_gray_valve_handle": {
      "id": "create:light_gray_valve_handle"
    },
    "cyan_valve_handle": {
      "id": "create:cyan_valve_handle"
    },
    "purple_valve_handle": {
      "id": "create:purple_valve_handle"
    },
    "blue_valve_handle": {
      "id": "create:blue_valve_handle"
    },
    "brown_valve_handle": {
      "id": "create:brown_valve_handle"
    },
    "green_valve_handle": {
      "id": "create:green_valve_handle"
    },
    "red_valve_handle": {
      "id": "create:red_valve_handle"
    },
    "black_valve_handle": {
      "id": "create:black_valve_handle"
    },
    "fluid_tank": {
      "id": "create:fluid_tank"
    },
    "creative_fluid_tank": {
      "id": "create:creative_fluid_tank"
    },
    "hose_pulley": {
      "id": "create:hose_pulley"
    },
    "item_drain": {
      "id": "create:item_drain"
    },
    "spout": {
      "id": "create:spout"
    },
    "portable_fluid_interface": {
      "id": "create:portable_fluid_interface"
    },
    "steam_engine": {
      "id": "create:steam_engine"
    },
    "steam_whistle": {
      "id": "create:steam_whistle"
    },
    "mechanical_piston": {
      "id": "create:mechanical_piston"
    },
    "sticky_mechanical_piston": {
      "id": "create:sticky_mechanical_piston"
    },
    "piston_extension_pole": {
      "id": "create:piston_extension_pole"
    },
    "gantry_carriage": {
      "id": "create:gantry_carriage"
    },
    "gantry_shaft": {
      "id": "create:gantry_shaft"
    },
    "windmill_bearing": {
      "id": "create:windmill_bearing"
    },
    "mechanical_bearing": {
      "id": "create:mechanical_bearing"
    },
    "clockwork_bearing": {
      "id": "create:clockwork_bearing"
    },
    "rope_pulley": {
      "id": "create:rope_pulley"
    },
    "cart_assembler": {
      "id": "create:cart_assembler"
    },
    "controller_rail": {
      "id": "create:controller_rail"
    },
    "linear_chassis": {
      "id": "create:linear_chassis"
    },
    "secondary_linear_chassis": {
      "id": "create:secondary_linear_chassis"
    },
    "radial_chassis": {
      "id": "create:radial_chassis"
    },
    "sticker": {
      "id": "create:sticker"
    },
    "mechanical_drill": {
      "id": "create:mechanical_drill"
    },
    "mechanical_saw": {
      "id": "create:mechanical_saw"
    },
    "deployer": {
      "id": "create:deployer"
    },
    "portable_storage_interface": {
      "id": "create:portable_storage_interface"
    },
    "redstone_contact": {
      "id": "create:redstone_contact"
    },
    "mechanical_harvester": {
      "id": "create:mechanical_harvester"
    },
    "mechanical_plough": {
      "id": "create:mechanical_plough"
    },
    "white_seat": {
      "id": "create:white_seat"
    },
    "orange_seat": {
      "id": "create:orange_seat"
    },
    "magenta_seat": {
      "id": "create:magenta_seat"
    },
    "light_blue_seat": {
      "id": "create:light_blue_seat"
    },
    "yellow_seat": {
      "id": "create:yellow_seat"
    },
    "lime_seat": {
      "id": "create:lime_seat"
    },
    "pink_seat": {
      "id": "create:pink_seat"
    },
    "gray_seat": {
      "id": "create:gray_seat"
    },
    "light_gray_seat": {
      "id": "create:light_gray_seat"
    },
    "cyan_seat": {
      "id": "create:cyan_seat"
    },
    "purple_seat": {
      "id": "create:purple_seat"
    },
    "blue_seat": {
      "id": "create:blue_seat"
    },
    "brown_seat": {
      "id": "create:brown_seat"
    },
    "green_seat": {
      "id": "create:green_seat"
    },
    "red_seat": {
      "id": "create:red_seat"
    },
    "black_seat": {
      "id": "create:black_seat"
    },
    "sail_frame": {
      "id": "create:sail_frame"
    },
    "white_sail": {
      "id": "create:white_sail"
    },
    "andesite_casing": {
      "id": "create:andesite_casing"
    },
    "brass_casing": {
      "id": "create:brass_casing"
    },
    "copper_casing": {
      "id": "create:copper_casing"
    },
    "mechanical_crafter": {
      "id": "create:mechanical_crafter"
    },
    "sequenced_gearshift": {
      "id": "create:sequenced_gearshift"
    },
    "flywheel": {
      "id": "create:flywheel"
    },
    "rotation_speed_controller": {
      "id": "create:rotation_speed_controller"
    },
    "mechanical_arm": {
      "id": "create:mechanical_arm"
    },
    "track": {
      "id": "create:track"
    },
    "railway_casing": {
      "id": "create:railway_casing"
    },
    "schedule": {
      "id": "create:schedule"
    },
    "track_station": {
      "id": "create:track_station"
    },
    "track_signal": {
      "id": "create:track_signal"
    },
    "track_observer": {
      "id": "create:track_observer"
    },
    "controls": {
      "id": "create:controls"
    },
    "train_door": {
      "id": "create:train_door"
    },
    "train_trapdoor": {
      "id": "create:train_trapdoor"
    },
    "framed_glass_door": {
      "id": "create:framed_glass_door"
    },
    "framed_glass_trapdoor": {
      "id": "create:framed_glass_trapdoor"
    },
    "item_vault": {
      "id": "create:item_vault"
    },
    "andesite_funnel": {
      "id": "create:andesite_funnel"
    },
    "brass_funnel": {
      "id": "create:brass_funnel"
    },
    "andesite_tunnel": {
      "id": "create:andesite_tunnel"
    },
    "brass_tunnel": {
      "id": "create:brass_tunnel"
    },
    "content_observer": {
      "id": "create:content_observer"
    },
    "stockpile_switch": {
      "id": "create:stockpile_switch"
    },
    "creative_crate": {
      "id": "create:creative_crate"
    },
    "display_link": {
      "id": "create:display_link"
    },
    "display_board": {
      "id": "create:display_board"
    },
    "nixie_tube": {
      "id": "create:nixie_tube"
    },
    "rose_quartz_lamp": {
      "id": "create:rose_quartz_lamp"
    },
    "redstone_link": {
      "id": "create:redstone_link"
    },
    "analog_lever": {
      "id": "create:analog_lever"
    },
    "placard": {
      "id": "create:placard"
    },
    "pulse_repeater": {
      "id": "create:pulse_repeater"
    },
    "pulse_extender": {
      "id": "create:pulse_extender"
    },
    "powered_latch": {
      "id": "create:powered_latch"
    },
    "powered_toggle_latch": {
      "id": "create:powered_toggle_latch"
    },
    "copper_backtank": {
      "id": "create:copper_backtank"
    },
    "peculiar_bell": {
      "id": "create:peculiar_bell"
    },
    "haunted_bell": {
      "id": "create:haunted_bell"
    },
    "white_toolbox": {
      "id": "create:white_toolbox"
    },
    "orange_toolbox": {
      "id": "create:orange_toolbox"
    },
    "magenta_toolbox": {
      "id": "create:magenta_toolbox"
    },
    "light_blue_toolbox": {
      "id": "create:light_blue_toolbox"
    },
    "yellow_toolbox": {
      "id": "create:yellow_toolbox"
    },
    "lime_toolbox": {
      "id": "create:lime_toolbox"
    },
    "pink_toolbox": {
      "id": "create:pink_toolbox"
    },
    "gray_toolbox": {
      "id": "create:gray_toolbox"
    },
    "light_gray_toolbox": {
      "id": "create:light_gray_toolbox"
    },
    "cyan_toolbox": {
      "id": "create:cyan_toolbox"
    },
    "purple_toolbox": {
      "id": "create:purple_toolbox"
    },
    "blue_toolbox": {
      "id": "create:blue_toolbox"
    },
    "brown_toolbox": {
      "id": "create:brown_toolbox"
    },
    "green_toolbox": {
      "id": "create:green_toolbox"
    },
    "red_toolbox": {
      "id": "create:red_toolbox"
    },
    "black_toolbox": {
      "id": "create:black_toolbox"
    },
    "zinc_ore": {
      "id": "create:zinc_ore"
    },
    "deepslate_zinc_ore": {
      "id": "create:deepslate_zinc_ore"
    },
    "raw_zinc_block": {
      "id": "create:raw_zinc_block"
    },
    "zinc_block": {
      "id": "create:zinc_block"
    },
    "brass_block": {
      "id": "create:brass_block"
    },
    "rose_quartz_block": {
      "id": "create:rose_quartz_block"
    },
    "rose_quartz_tiles": {
      "id": "create:rose_quartz_tiles"
    },
    "small_rose_quartz_tiles": {
      "id": "create:small_rose_quartz_tiles"
    },
    "copper_shingles": {
      "id": "create:copper_shingles"
    },
    "exposed_copper_shingles": {
      "id": "create:exposed_copper_shingles"
    },
    "weathered_copper_shingles": {
      "id": "create:weathered_copper_shingles"
    },
    "oxidized_copper_shingles": {
      "id": "create:oxidized_copper_shingles"
    },
    "copper_shingle_slab": {
      "id": "create:copper_shingle_slab"
    },
    "exposed_copper_shingle_slab": {
      "id": "create:exposed_copper_shingle_slab"
    },
    "weathered_copper_shingle_slab": {
      "id": "create:weathered_copper_shingle_slab"
    },
    "oxidized_copper_shingle_slab": {
      "id": "create:oxidized_copper_shingle_slab"
    },
    "copper_shingle_stairs": {
      "id": "create:copper_shingle_stairs"
    },
    "exposed_copper_shingle_stairs": {
      "id": "create:exposed_copper_shingle_stairs"
    },
    "weathered_copper_shingle_stairs": {
      "id": "create:weathered_copper_shingle_stairs"
    },
    "oxidized_copper_shingle_stairs": {
      "id": "create:oxidized_copper_shingle_stairs"
    },
    "waxed_copper_shingles": {
      "id": "create:waxed_copper_shingles"
    },
    "waxed_exposed_copper_shingles": {
      "id": "create:waxed_exposed_copper_shingles"
    },
    "waxed_weathered_copper_shingles": {
      "id": "create:waxed_weathered_copper_shingles"
    },
    "waxed_oxidized_copper_shingles": {
      "id": "create:waxed_oxidized_copper_shingles"
    },
    "waxed_copper_shingle_slab": {
      "id": "create:waxed_copper_shingle_slab"
    },
    "waxed_exposed_copper_shingle_slab": {
      "id": "create:waxed_exposed_copper_shingle_slab"
    },
    "waxed_weathered_copper_shingle_slab": {
      "id": "create:waxed_weathered_copper_shingle_slab"
    },
    "waxed_oxidized_copper_shingle_slab": {
      "id": "create:waxed_oxidized_copper_shingle_slab"
    },
    "waxed_copper_shingle_stairs": {
      "id": "create:waxed_copper_shingle_stairs"
    },
    "waxed_exposed_copper_shingle_stairs": {
      "id": "create:waxed_exposed_copper_shingle_stairs"
    },
    "waxed_weathered_copper_shingle_stairs": {
      "id": "create:waxed_weathered_copper_shingle_stairs"
    },
    "waxed_oxidized_copper_shingle_stairs": {
      "id": "create:waxed_oxidized_copper_shingle_stairs"
    },
    "copper_tiles": {
      "id": "create:copper_tiles"
    },
    "exposed_copper_tiles": {
      "id": "create:exposed_copper_tiles"
    },
    "weathered_copper_tiles": {
      "id": "create:weathered_copper_tiles"
    },
    "oxidized_copper_tiles": {
      "id": "create:oxidized_copper_tiles"
    },
    "copper_tile_slab": {
      "id": "create:copper_tile_slab"
    },
    "exposed_copper_tile_slab": {
      "id": "create:exposed_copper_tile_slab"
    },
    "weathered_copper_tile_slab": {
      "id": "create:weathered_copper_tile_slab"
    },
    "oxidized_copper_tile_slab": {
      "id": "create:oxidized_copper_tile_slab"
    },
    "copper_tile_stairs": {
      "id": "create:copper_tile_stairs"
    },
    "exposed_copper_tile_stairs": {
      "id": "create:exposed_copper_tile_stairs"
    },
    "weathered_copper_tile_stairs": {
      "id": "create:weathered_copper_tile_stairs"
    },
    "oxidized_copper_tile_stairs": {
      "id": "create:oxidized_copper_tile_stairs"
    },
    "waxed_copper_tiles": {
      "id": "create:waxed_copper_tiles"
    },
    "waxed_exposed_copper_tiles": {
      "id": "create:waxed_exposed_copper_tiles"
    },
    "waxed_weathered_copper_tiles": {
      "id": "create:waxed_weathered_copper_tiles"
    },
    "waxed_oxidized_copper_tiles": {
      "id": "create:waxed_oxidized_copper_tiles"
    },
    "waxed_copper_tile_slab": {
      "id": "create:waxed_copper_tile_slab"
    },
    "waxed_exposed_copper_tile_slab": {
      "id": "create:waxed_exposed_copper_tile_slab"
    },
    "waxed_weathered_copper_tile_slab": {
      "id": "create:waxed_weathered_copper_tile_slab"
    },
    "waxed_oxidized_copper_tile_slab": {
      "id": "create:waxed_oxidized_copper_tile_slab"
    },
    "waxed_copper_tile_stairs": {
      "id": "create:waxed_copper_tile_stairs"
    },
    "waxed_exposed_copper_tile_stairs": {
      "id": "create:waxed_exposed_copper_tile_stairs"
    },
    "waxed_weathered_copper_tile_stairs": {
      "id": "create:waxed_weathered_copper_tile_stairs"
    },
    "waxed_oxidized_copper_tile_stairs": {
      "id": "create:waxed_oxidized_copper_tile_stairs"
    },
    "wheat_flour": {
      "id": "create:wheat_flour"
    },
    "dough": {
      "id": "create:dough"
    },
    "cinder_flour": {
      "id": "create:cinder_flour"
    },
    "rose_quartz": {
      "id": "create:rose_quartz"
    },
    "polished_rose_quartz": {
      "id": "create:polished_rose_quartz"
    },
    "powdered_obsidian": {
      "id": "create:powdered_obsidian"
    },
    "sturdy_sheet": {
      "id": "create:sturdy_sheet"
    },
    "propeller": {
      "id": "create:propeller"
    },
    "whisk": {
      "id": "create:whisk"
    },
    "brass_hand": {
      "id": "create:brass_hand"
    },
    "crafter_slot_cover": {
      "id": "create:crafter_slot_cover"
    },
    "electron_tube": {
      "id": "create:electron_tube"
    },
    "precision_mechanism": {
      "id": "create:precision_mechanism"
    },
    "blaze_cake_base": {
      "id": "create:blaze_cake_base"
    },
    "blaze_cake": {
      "id": "create:blaze_cake"
    },
    "creative_blaze_cake": {
      "id": "create:creative_blaze_cake"
    },
    "bar_of_chocolate": {
      "id": "create:bar_of_chocolate"
    },
    "sweet_roll": {
      "id": "create:sweet_roll"
    },
    "chocolate_glazed_berries": {
      "id": "create:chocolate_glazed_berries"
    },
    "honeyed_apple": {
      "id": "create:honeyed_apple"
    },
    "builders_tea": {
      "id": "create:builders_tea"
    },
    "raw_zinc": {
      "id": "create:raw_zinc"
    },
    "andesite_alloy": {
      "id": "create:andesite_alloy"
    },
    "zinc_ingot": {
      "id": "create:zinc_ingot"
    },
    "brass_ingot": {
      "id": "create:brass_ingot"
    },
    "copper_nugget": {
      "id": "create:copper_nugget"
    },
    "zinc_nugget": {
      "id": "create:zinc_nugget"
    },
    "brass_nugget": {
      "id": "create:brass_nugget"
    },
    "experience_nugget": {
      "id": "create:experience_nugget"
    },
    "copper_sheet": {
      "id": "create:copper_sheet"
    },
    "brass_sheet": {
      "id": "create:brass_sheet"
    },
    "iron_sheet": {
      "id": "create:iron_sheet"
    },
    "golden_sheet": {
      "id": "create:golden_sheet"
    },
    "crushed_iron_ore": {
      "id": "create:crushed_iron_ore"
    },
    "crushed_gold_ore": {
      "id": "create:crushed_gold_ore"
    },
    "crushed_copper_ore": {
      "id": "create:crushed_copper_ore"
    },
    "crushed_zinc_ore": {
      "id": "create:crushed_zinc_ore"
    },
    "crushed_silver_ore": {
      "id": "create:crushed_silver_ore"
    },
    "belt_connector": {
      "id": "create:belt_connector"
    },
    "goggles": {
      "id": "create:goggles"
    },
    "super_glue": {
      "id": "create:super_glue"
    },
    "minecart_coupling": {
      "id": "create:minecart_coupling"
    },
    "crafting_blueprint": {
      "id": "create:crafting_blueprint"
    },
    "diving_helmet": {
      "id": "create:diving_helmet"
    },
    "diving_boots": {
      "id": "create:diving_boots"
    },
    "sand_paper": {
      "id": "create:sand_paper"
    },
    "red_sand_paper": {
      "id": "create:red_sand_paper"
    },
    "wrench": {
      "id": "create:wrench"
    },
    "linked_controller": {
      "id": "create:linked_controller"
    },
    "potato_cannon": {
      "id": "create:potato_cannon"
    },
    "extendo_grip": {
      "id": "create:extendo_grip"
    },
    "wand_of_symmetry": {
      "id": "create:wand_of_symmetry"
    },
    "handheld_worldshaper": {
      "id": "create:handheld_worldshaper"
    },
    "tree_fertilizer": {
      "id": "create:tree_fertilizer"
    },
    "filter": {
      "id": "create:filter"
    },
    "attribute_filter": {
      "id": "create:attribute_filter"
    },
    "empty_schematic": {
      "id": "create:empty_schematic"
    },
    "schematic_and_quill": {
      "id": "create:schematic_and_quill"
    },
    "honey_bucket": {
      "id": "create:honey_bucket"
    },
    "chocolate_bucket": {
      "id": "create:chocolate_bucket"
    },
    "tiled_glass": {
      "id": "create:tiled_glass"
    },
    "framed_glass": {
      "id": "create:framed_glass"
    },
    "horizontal_framed_glass": {
      "id": "create:horizontal_framed_glass"
    },
    "vertical_framed_glass": {
      "id": "create:vertical_framed_glass"
    },
    "tiled_glass_pane": {
      "id": "create:tiled_glass_pane"
    },
    "framed_glass_pane": {
      "id": "create:framed_glass_pane"
    },
    "horizontal_framed_glass_pane": {
      "id": "create:horizontal_framed_glass_pane"
    },
    "vertical_framed_glass_pane": {
      "id": "create:vertical_framed_glass_pane"
    },
    "oak_window": {
      "id": "create:oak_window"
    },
    "spruce_window": {
      "id": "create:spruce_window"
    },
    "birch_window": {
      "id": "create:birch_window"
    },
    "jungle_window": {
      "id": "create:jungle_window"
    },
    "acacia_window": {
      "id": "create:acacia_window"
    },
    "dark_oak_window": {
      "id": "create:dark_oak_window"
    },
    "crimson_window": {
      "id": "create:crimson_window"
    },
    "warped_window": {
      "id": "create:warped_window"
    },
    "ornate_iron_window": {
      "id": "create:ornate_iron_window"
    },
    "oak_window_pane": {
      "id": "create:oak_window_pane"
    },
    "spruce_window_pane": {
      "id": "create:spruce_window_pane"
    },
    "birch_window_pane": {
      "id": "create:birch_window_pane"
    },
    "jungle_window_pane": {
      "id": "create:jungle_window_pane"
    },
    "acacia_window_pane": {
      "id": "create:acacia_window_pane"
    },
    "dark_oak_window_pane": {
      "id": "create:dark_oak_window_pane"
    },
    "crimson_window_pane": {
      "id": "create:crimson_window_pane"
    },
    "warped_window_pane": {
      "id": "create:warped_window_pane"
    },
    "ornate_iron_window_pane": {
      "id": "create:ornate_iron_window_pane"
    },
    "cut_granite": {
      "id": "create:cut_granite"
    },
    "cut_granite_stairs": {
      "id": "create:cut_granite_stairs"
    },
    "cut_granite_slab": {
      "id": "create:cut_granite_slab"
    },
    "cut_granite_wall": {
      "id": "create:cut_granite_wall"
    },
    "polished_cut_granite": {
      "id": "create:polished_cut_granite"
    },
    "polished_cut_granite_stairs": {
      "id": "create:polished_cut_granite_stairs"
    },
    "polished_cut_granite_slab": {
      "id": "create:polished_cut_granite_slab"
    },
    "polished_cut_granite_wall": {
      "id": "create:polished_cut_granite_wall"
    },
    "cut_granite_bricks": {
      "id": "create:cut_granite_bricks"
    },
    "cut_granite_brick_stairs": {
      "id": "create:cut_granite_brick_stairs"
    },
    "cut_granite_brick_slab": {
      "id": "create:cut_granite_brick_slab"
    },
    "cut_granite_brick_wall": {
      "id": "create:cut_granite_brick_wall"
    },
    "small_granite_bricks": {
      "id": "create:small_granite_bricks"
    },
    "small_granite_brick_stairs": {
      "id": "create:small_granite_brick_stairs"
    },
    "small_granite_brick_slab": {
      "id": "create:small_granite_brick_slab"
    },
    "small_granite_brick_wall": {
      "id": "create:small_granite_brick_wall"
    },
    "layered_granite": {
      "id": "create:layered_granite"
    },
    "granite_pillar": {
      "id": "create:granite_pillar"
    },
    "cut_diorite": {
      "id": "create:cut_diorite"
    },
    "cut_diorite_stairs": {
      "id": "create:cut_diorite_stairs"
    },
    "cut_diorite_slab": {
      "id": "create:cut_diorite_slab"
    },
    "cut_diorite_wall": {
      "id": "create:cut_diorite_wall"
    },
    "polished_cut_diorite": {
      "id": "create:polished_cut_diorite"
    },
    "polished_cut_diorite_stairs": {
      "id": "create:polished_cut_diorite_stairs"
    },
    "polished_cut_diorite_slab": {
      "id": "create:polished_cut_diorite_slab"
    },
    "polished_cut_diorite_wall": {
      "id": "create:polished_cut_diorite_wall"
    },
    "cut_diorite_bricks": {
      "id": "create:cut_diorite_bricks"
    },
    "cut_diorite_brick_stairs": {
      "id": "create:cut_diorite_brick_stairs"
    },
    "cut_diorite_brick_slab": {
      "id": "create:cut_diorite_brick_slab"
    },
    "cut_diorite_brick_wall": {
      "id": "create:cut_diorite_brick_wall"
    },
    "small_diorite_bricks": {
      "id": "create:small_diorite_bricks"
    },
    "small_diorite_brick_stairs": {
      "id": "create:small_diorite_brick_stairs"
    },
    "small_diorite_brick_slab": {
      "id": "create:small_diorite_brick_slab"
    },
    "small_diorite_brick_wall": {
      "id": "create:small_diorite_brick_wall"
    },
    "layered_diorite": {
      "id": "create:layered_diorite"
    },
    "diorite_pillar": {
      "id": "create:diorite_pillar"
    },
    "cut_andesite": {
      "id": "create:cut_andesite"
    },
    "cut_andesite_stairs": {
      "id": "create:cut_andesite_stairs"
    },
    "cut_andesite_slab": {
      "id": "create:cut_andesite_slab"
    },
    "cut_andesite_wall": {
      "id": "create:cut_andesite_wall"
    },
    "polished_cut_andesite": {
      "id": "create:polished_cut_andesite"
    },
    "polished_cut_andesite_stairs": {
      "id": "create:polished_cut_andesite_stairs"
    },
    "polished_cut_andesite_slab": {
      "id": "create:polished_cut_andesite_slab"
    },
    "polished_cut_andesite_wall": {
      "id": "create:polished_cut_andesite_wall"
    },
    "cut_andesite_bricks": {
      "id": "create:cut_andesite_bricks"
    },
    "cut_andesite_brick_stairs": {
      "id": "create:cut_andesite_brick_stairs"
    },
    "cut_andesite_brick_slab": {
      "id": "create:cut_andesite_brick_slab"
    },
    "cut_andesite_brick_wall": {
      "id": "create:cut_andesite_brick_wall"
    },
    "small_andesite_bricks": {
      "id": "create:small_andesite_bricks"
    },
    "small_andesite_brick_stairs": {
      "id": "create:small_andesite_brick_stairs"
    },
    "small_andesite_brick_slab": {
      "id": "create:small_andesite_brick_slab"
    },
    "small_andesite_brick_wall": {
      "id": "create:small_andesite_brick_wall"
    },
    "layered_andesite": {
      "id": "create:layered_andesite"
    },
    "andesite_pillar": {
      "id": "create:andesite_pillar"
    },
    "cut_calcite": {
      "id": "create:cut_calcite"
    },
    "cut_calcite_stairs": {
      "id": "create:cut_calcite_stairs"
    },
    "cut_calcite_slab": {
      "id": "create:cut_calcite_slab"
    },
    "cut_calcite_wall": {
      "id": "create:cut_calcite_wall"
    },
    "polished_cut_calcite": {
      "id": "create:polished_cut_calcite"
    },
    "polished_cut_calcite_stairs": {
      "id": "create:polished_cut_calcite_stairs"
    },
    "polished_cut_calcite_slab": {
      "id": "create:polished_cut_calcite_slab"
    },
    "polished_cut_calcite_wall": {
      "id": "create:polished_cut_calcite_wall"
    },
    "cut_calcite_bricks": {
      "id": "create:cut_calcite_bricks"
    },
    "cut_calcite_brick_stairs": {
      "id": "create:cut_calcite_brick_stairs"
    },
    "cut_calcite_brick_slab": {
      "id": "create:cut_calcite_brick_slab"
    },
    "cut_calcite_brick_wall": {
      "id": "create:cut_calcite_brick_wall"
    },
    "small_calcite_bricks": {
      "id": "create:small_calcite_bricks"
    },
    "small_calcite_brick_stairs": {
      "id": "create:small_calcite_brick_stairs"
    },
    "small_calcite_brick_slab": {
      "id": "create:small_calcite_brick_slab"
    },
    "small_calcite_brick_wall": {
      "id": "create:small_calcite_brick_wall"
    },
    "layered_calcite": {
      "id": "create:layered_calcite"
    },
    "calcite_pillar": {
      "id": "create:calcite_pillar"
    },
    "cut_dripstone": {
      "id": "create:cut_dripstone"
    },
    "cut_dripstone_stairs": {
      "id": "create:cut_dripstone_stairs"
    },
    "cut_dripstone_slab": {
      "id": "create:cut_dripstone_slab"
    },
    "cut_dripstone_wall": {
      "id": "create:cut_dripstone_wall"
    },
    "polished_cut_dripstone": {
      "id": "create:polished_cut_dripstone"
    },
    "polished_cut_dripstone_stairs": {
      "id": "create:polished_cut_dripstone_stairs"
    },
    "polished_cut_dripstone_slab": {
      "id": "create:polished_cut_dripstone_slab"
    },
    "polished_cut_dripstone_wall": {
      "id": "create:polished_cut_dripstone_wall"
    },
    "cut_dripstone_bricks": {
      "id": "create:cut_dripstone_bricks"
    },
    "cut_dripstone_brick_stairs": {
      "id": "create:cut_dripstone_brick_stairs"
    },
    "cut_dripstone_brick_slab": {
      "id": "create:cut_dripstone_brick_slab"
    },
    "cut_dripstone_brick_wall": {
      "id": "create:cut_dripstone_brick_wall"
    },
    "small_dripstone_bricks": {
      "id": "create:small_dripstone_bricks"
    },
    "small_dripstone_brick_stairs": {
      "id": "create:small_dripstone_brick_stairs"
    },
    "small_dripstone_brick_slab": {
      "id": "create:small_dripstone_brick_slab"
    },
    "small_dripstone_brick_wall": {
      "id": "create:small_dripstone_brick_wall"
    },
    "layered_dripstone": {
      "id": "create:layered_dripstone"
    },
    "dripstone_pillar": {
      "id": "create:dripstone_pillar"
    },
    "cut_deepslate": {
      "id": "create:cut_deepslate"
    },
    "cut_deepslate_stairs": {
      "id": "create:cut_deepslate_stairs"
    },
    "cut_deepslate_slab": {
      "id": "create:cut_deepslate_slab"
    },
    "cut_deepslate_wall": {
      "id": "create:cut_deepslate_wall"
    },
    "polished_cut_deepslate": {
      "id": "create:polished_cut_deepslate"
    },
    "polished_cut_deepslate_stairs": {
      "id": "create:polished_cut_deepslate_stairs"
    },
    "polished_cut_deepslate_slab": {
      "id": "create:polished_cut_deepslate_slab"
    },
    "polished_cut_deepslate_wall": {
      "id": "create:polished_cut_deepslate_wall"
    },
    "cut_deepslate_bricks": {
      "id": "create:cut_deepslate_bricks"
    },
    "cut_deepslate_brick_stairs": {
      "id": "create:cut_deepslate_brick_stairs"
    },
    "cut_deepslate_brick_slab": {
      "id": "create:cut_deepslate_brick_slab"
    },
    "cut_deepslate_brick_wall": {
      "id": "create:cut_deepslate_brick_wall"
    },
    "small_deepslate_bricks": {
      "id": "create:small_deepslate_bricks"
    },
    "small_deepslate_brick_stairs": {
      "id": "create:small_deepslate_brick_stairs"
    },
    "small_deepslate_brick_slab": {
      "id": "create:small_deepslate_brick_slab"
    },
    "small_deepslate_brick_wall": {
      "id": "create:small_deepslate_brick_wall"
    },
    "layered_deepslate": {
      "id": "create:layered_deepslate"
    },
    "deepslate_pillar": {
      "id": "create:deepslate_pillar"
    },
    "cut_tuff": {
      "id": "create:cut_tuff"
    },
    "cut_tuff_stairs": {
      "id": "create:cut_tuff_stairs"
    },
    "cut_tuff_slab": {
      "id": "create:cut_tuff_slab"
    },
    "cut_tuff_wall": {
      "id": "create:cut_tuff_wall"
    },
    "polished_cut_tuff": {
      "id": "create:polished_cut_tuff"
    },
    "polished_cut_tuff_stairs": {
      "id": "create:polished_cut_tuff_stairs"
    },
    "polished_cut_tuff_slab": {
      "id": "create:polished_cut_tuff_slab"
    },
    "polished_cut_tuff_wall": {
      "id": "create:polished_cut_tuff_wall"
    },
    "cut_tuff_bricks": {
      "id": "create:cut_tuff_bricks"
    },
    "cut_tuff_brick_stairs": {
      "id": "create:cut_tuff_brick_stairs"
    },
    "cut_tuff_brick_slab": {
      "id": "create:cut_tuff_brick_slab"
    },
    "cut_tuff_brick_wall": {
      "id": "create:cut_tuff_brick_wall"
    },
    "small_tuff_bricks": {
      "id": "create:small_tuff_bricks"
    },
    "small_tuff_brick_stairs": {
      "id": "create:small_tuff_brick_stairs"
    },
    "small_tuff_brick_slab": {
      "id": "create:small_tuff_brick_slab"
    },
    "small_tuff_brick_wall": {
      "id": "create:small_tuff_brick_wall"
    },
    "layered_tuff": {
      "id": "create:layered_tuff"
    },
    "tuff_pillar": {
      "id": "create:tuff_pillar"
    },
    "asurine": {
      "id": "create:asurine"
    },
    "cut_asurine": {
      "id": "create:cut_asurine"
    },
    "cut_asurine_stairs": {
      "id": "create:cut_asurine_stairs"
    },
    "cut_asurine_slab": {
      "id": "create:cut_asurine_slab"
    },
    "cut_asurine_wall": {
      "id": "create:cut_asurine_wall"
    },
    "polished_cut_asurine": {
      "id": "create:polished_cut_asurine"
    },
    "polished_cut_asurine_stairs": {
      "id": "create:polished_cut_asurine_stairs"
    },
    "polished_cut_asurine_slab": {
      "id": "create:polished_cut_asurine_slab"
    },
    "polished_cut_asurine_wall": {
      "id": "create:polished_cut_asurine_wall"
    },
    "cut_asurine_bricks": {
      "id": "create:cut_asurine_bricks"
    },
    "cut_asurine_brick_stairs": {
      "id": "create:cut_asurine_brick_stairs"
    },
    "cut_asurine_brick_slab": {
      "id": "create:cut_asurine_brick_slab"
    },
    "cut_asurine_brick_wall": {
      "id": "create:cut_asurine_brick_wall"
    },
    "small_asurine_bricks": {
      "id": "create:small_asurine_bricks"
    },
    "small_asurine_brick_stairs": {
      "id": "create:small_asurine_brick_stairs"
    },
    "small_asurine_brick_slab": {
      "id": "create:small_asurine_brick_slab"
    },
    "small_asurine_brick_wall": {
      "id": "create:small_asurine_brick_wall"
    },
    "layered_asurine": {
      "id": "create:layered_asurine"
    },
    "asurine_pillar": {
      "id": "create:asurine_pillar"
    },
    "crimsite": {
      "id": "create:crimsite"
    },
    "cut_crimsite": {
      "id": "create:cut_crimsite"
    },
    "cut_crimsite_stairs": {
      "id": "create:cut_crimsite_stairs"
    },
    "cut_crimsite_slab": {
      "id": "create:cut_crimsite_slab"
    },
    "cut_crimsite_wall": {
      "id": "create:cut_crimsite_wall"
    },
    "polished_cut_crimsite": {
      "id": "create:polished_cut_crimsite"
    },
    "polished_cut_crimsite_stairs": {
      "id": "create:polished_cut_crimsite_stairs"
    },
    "polished_cut_crimsite_slab": {
      "id": "create:polished_cut_crimsite_slab"
    },
    "polished_cut_crimsite_wall": {
      "id": "create:polished_cut_crimsite_wall"
    },
    "cut_crimsite_bricks": {
      "id": "create:cut_crimsite_bricks"
    },
    "cut_crimsite_brick_stairs": {
      "id": "create:cut_crimsite_brick_stairs"
    },
    "cut_crimsite_brick_slab": {
      "id": "create:cut_crimsite_brick_slab"
    },
    "cut_crimsite_brick_wall": {
      "id": "create:cut_crimsite_brick_wall"
    },
    "small_crimsite_bricks": {
      "id": "create:small_crimsite_bricks"
    },
    "small_crimsite_brick_stairs": {
      "id": "create:small_crimsite_brick_stairs"
    },
    "small_crimsite_brick_slab": {
      "id": "create:small_crimsite_brick_slab"
    },
    "small_crimsite_brick_wall": {
      "id": "create:small_crimsite_brick_wall"
    },
    "layered_crimsite": {
      "id": "create:layered_crimsite"
    },
    "crimsite_pillar": {
      "id": "create:crimsite_pillar"
    },
    "limestone": {
      "id": "create:limestone"
    },
    "cut_limestone": {
      "id": "create:cut_limestone"
    },
    "cut_limestone_stairs": {
      "id": "create:cut_limestone_stairs"
    },
    "cut_limestone_slab": {
      "id": "create:cut_limestone_slab"
    },
    "cut_limestone_wall": {
      "id": "create:cut_limestone_wall"
    },
    "polished_cut_limestone": {
      "id": "create:polished_cut_limestone"
    },
    "polished_cut_limestone_stairs": {
      "id": "create:polished_cut_limestone_stairs"
    },
    "polished_cut_limestone_slab": {
      "id": "create:polished_cut_limestone_slab"
    },
    "polished_cut_limestone_wall": {
      "id": "create:polished_cut_limestone_wall"
    },
    "cut_limestone_bricks": {
      "id": "create:cut_limestone_bricks"
    },
    "cut_limestone_brick_stairs": {
      "id": "create:cut_limestone_brick_stairs"
    },
    "cut_limestone_brick_slab": {
      "id": "create:cut_limestone_brick_slab"
    },
    "cut_limestone_brick_wall": {
      "id": "create:cut_limestone_brick_wall"
    },
    "small_limestone_bricks": {
      "id": "create:small_limestone_bricks"
    },
    "small_limestone_brick_stairs": {
      "id": "create:small_limestone_brick_stairs"
    },
    "small_limestone_brick_slab": {
      "id": "create:small_limestone_brick_slab"
    },
    "small_limestone_brick_wall": {
      "id": "create:small_limestone_brick_wall"
    },
    "layered_limestone": {
      "id": "create:layered_limestone"
    },
    "limestone_pillar": {
      "id": "create:limestone_pillar"
    },
    "ochrum": {
      "id": "create:ochrum"
    },
    "cut_ochrum": {
      "id": "create:cut_ochrum"
    },
    "cut_ochrum_stairs": {
      "id": "create:cut_ochrum_stairs"
    },
    "cut_ochrum_slab": {
      "id": "create:cut_ochrum_slab"
    },
    "cut_ochrum_wall": {
      "id": "create:cut_ochrum_wall"
    },
    "polished_cut_ochrum": {
      "id": "create:polished_cut_ochrum"
    },
    "polished_cut_ochrum_stairs": {
      "id": "create:polished_cut_ochrum_stairs"
    },
    "polished_cut_ochrum_slab": {
      "id": "create:polished_cut_ochrum_slab"
    },
    "polished_cut_ochrum_wall": {
      "id": "create:polished_cut_ochrum_wall"
    },
    "cut_ochrum_bricks": {
      "id": "create:cut_ochrum_bricks"
    },
    "cut_ochrum_brick_stairs": {
      "id": "create:cut_ochrum_brick_stairs"
    },
    "cut_ochrum_brick_slab": {
      "id": "create:cut_ochrum_brick_slab"
    },
    "cut_ochrum_brick_wall": {
      "id": "create:cut_ochrum_brick_wall"
    },
    "small_ochrum_bricks": {
      "id": "create:small_ochrum_bricks"
    },
    "small_ochrum_brick_stairs": {
      "id": "create:small_ochrum_brick_stairs"
    },
    "small_ochrum_brick_slab": {
      "id": "create:small_ochrum_brick_slab"
    },
    "small_ochrum_brick_wall": {
      "id": "create:small_ochrum_brick_wall"
    },
    "layered_ochrum": {
      "id": "create:layered_ochrum"
    },
    "ochrum_pillar": {
      "id": "create:ochrum_pillar"
    },
    "scoria": {
      "id": "create:scoria"
    },
    "cut_scoria": {
      "id": "create:cut_scoria"
    },
    "cut_scoria_stairs": {
      "id": "create:cut_scoria_stairs"
    },
    "cut_scoria_slab": {
      "id": "create:cut_scoria_slab"
    },
    "cut_scoria_wall": {
      "id": "create:cut_scoria_wall"
    },
    "polished_cut_scoria": {
      "id": "create:polished_cut_scoria"
    },
    "polished_cut_scoria_stairs": {
      "id": "create:polished_cut_scoria_stairs"
    },
    "polished_cut_scoria_slab": {
      "id": "create:polished_cut_scoria_slab"
    },
    "polished_cut_scoria_wall": {
      "id": "create:polished_cut_scoria_wall"
    },
    "cut_scoria_bricks": {
      "id": "create:cut_scoria_bricks"
    },
    "cut_scoria_brick_stairs": {
      "id": "create:cut_scoria_brick_stairs"
    },
    "cut_scoria_brick_slab": {
      "id": "create:cut_scoria_brick_slab"
    },
    "cut_scoria_brick_wall": {
      "id": "create:cut_scoria_brick_wall"
    },
    "small_scoria_bricks": {
      "id": "create:small_scoria_bricks"
    },
    "small_scoria_brick_stairs": {
      "id": "create:small_scoria_brick_stairs"
    },
    "small_scoria_brick_slab": {
      "id": "create:small_scoria_brick_slab"
    },
    "small_scoria_brick_wall": {
      "id": "create:small_scoria_brick_wall"
    },
    "layered_scoria": {
      "id": "create:layered_scoria"
    },
    "scoria_pillar": {
      "id": "create:scoria_pillar"
    },
    "scorchia": {
      "id": "create:scorchia"
    },
    "cut_scorchia": {
      "id": "create:cut_scorchia"
    },
    "cut_scorchia_stairs": {
      "id": "create:cut_scorchia_stairs"
    },
    "cut_scorchia_slab": {
      "id": "create:cut_scorchia_slab"
    },
    "cut_scorchia_wall": {
      "id": "create:cut_scorchia_wall"
    },
    "polished_cut_scorchia": {
      "id": "create:polished_cut_scorchia"
    },
    "polished_cut_scorchia_stairs": {
      "id": "create:polished_cut_scorchia_stairs"
    },
    "polished_cut_scorchia_slab": {
      "id": "create:polished_cut_scorchia_slab"
    },
    "polished_cut_scorchia_wall": {
      "id": "create:polished_cut_scorchia_wall"
    },
    "cut_scorchia_bricks": {
      "id": "create:cut_scorchia_bricks"
    },
    "cut_scorchia_brick_stairs": {
      "id": "create:cut_scorchia_brick_stairs"
    },
    "cut_scorchia_brick_slab": {
      "id": "create:cut_scorchia_brick_slab"
    },
    "cut_scorchia_brick_wall": {
      "id": "create:cut_scorchia_brick_wall"
    },
    "small_scorchia_bricks": {
      "id": "create:small_scorchia_bricks"
    },
    "small_scorchia_brick_stairs": {
      "id": "create:small_scorchia_brick_stairs"
    },
    "small_scorchia_brick_slab": {
      "id": "create:small_scorchia_brick_slab"
    },
    "small_scorchia_brick_wall": {
      "id": "create:small_scorchia_brick_wall"
    },
    "layered_scorchia": {
      "id": "create:layered_scorchia"
    },
    "scorchia_pillar": {
      "id": "create:scorchia_pillar"
    },
    "veridium": {
      "id": "create:veridium"
    },
    "cut_veridium": {
      "id": "create:cut_veridium"
    },
    "cut_veridium_stairs": {
      "id": "create:cut_veridium_stairs"
    },
    "cut_veridium_slab": {
      "id": "create:cut_veridium_slab"
    },
    "cut_veridium_wall": {
      "id": "create:cut_veridium_wall"
    },
    "polished_cut_veridium": {
      "id": "create:polished_cut_veridium"
    },
    "polished_cut_veridium_stairs": {
      "id": "create:polished_cut_veridium_stairs"
    },
    "polished_cut_veridium_slab": {
      "id": "create:polished_cut_veridium_slab"
    },
    "polished_cut_veridium_wall": {
      "id": "create:polished_cut_veridium_wall"
    },
    "cut_veridium_bricks": {
      "id": "create:cut_veridium_bricks"
    },
    "cut_veridium_brick_stairs": {
      "id": "create:cut_veridium_brick_stairs"
    },
    "cut_veridium_brick_slab": {
      "id": "create:cut_veridium_brick_slab"
    },
    "cut_veridium_brick_wall": {
      "id": "create:cut_veridium_brick_wall"
    },
    "small_veridium_bricks": {
      "id": "create:small_veridium_bricks"
    },
    "small_veridium_brick_stairs": {
      "id": "create:small_veridium_brick_stairs"
    },
    "small_veridium_brick_slab": {
      "id": "create:small_veridium_brick_slab"
    },
    "small_veridium_brick_wall": {
      "id": "create:small_veridium_brick_wall"
    },
    "layered_veridium": {
      "id": "create:layered_veridium"
    },
    "veridium_pillar": {
      "id": "create:veridium_pillar"
    }
  },
  "createdeco": {
    "id": "createdeco:worn_brick",
    "worn_brick": {
      "id": "createdeco:worn_brick"
    },
    "dean_brick": {
      "id": "createdeco:dean_brick"
    },
    "pearl_brick": {
      "id": "createdeco:pearl_brick"
    },
    "scarlet_brick": {
      "id": "createdeco:scarlet_brick"
    },
    "blue_brick": {
      "id": "createdeco:blue_brick"
    },
    "dusk_brick": {
      "id": "createdeco:dusk_brick"
    },
    "zinc_sheet": {
      "id": "createdeco:zinc_sheet"
    },
    "netherite_sheet": {
      "id": "createdeco:netherite_sheet"
    },
    "netherite_nugget": {
      "id": "createdeco:netherite_nugget"
    },
    "cast_iron_nugget": {
      "id": "createdeco:cast_iron_nugget"
    },
    "cast_iron_ingot": {
      "id": "createdeco:cast_iron_ingot"
    },
    "cast_iron_sheet": {
      "id": "createdeco:cast_iron_sheet"
    },
    "zinc_coin": {
      "id": "createdeco:zinc_coin"
    },
    "zinc_coinstack": {
      "id": "createdeco:zinc_coinstack"
    },
    "copper_coin": {
      "id": "createdeco:copper_coin"
    },
    "copper_coinstack": {
      "id": "createdeco:copper_coinstack"
    },
    "brass_coin": {
      "id": "createdeco:brass_coin"
    },
    "brass_coinstack": {
      "id": "createdeco:brass_coinstack"
    },
    "iron_coin": {
      "id": "createdeco:iron_coin"
    },
    "iron_coinstack": {
      "id": "createdeco:iron_coinstack"
    },
    "gold_coin": {
      "id": "createdeco:gold_coin"
    },
    "gold_coinstack": {
      "id": "createdeco:gold_coinstack"
    },
    "netherite_coin": {
      "id": "createdeco:netherite_coin"
    },
    "netherite_coinstack": {
      "id": "createdeco:netherite_coinstack"
    },
    "cast_iron_coin": {
      "id": "createdeco:cast_iron_coin"
    },
    "cast_iron_coinstack": {
      "id": "createdeco:cast_iron_coinstack"
    },
    "worn_bricks": {
      "id": "createdeco:worn_bricks"
    },
    "worn_bricks_stairs": {
      "id": "createdeco:worn_bricks_stairs"
    },
    "worn_bricks_slab": {
      "id": "createdeco:worn_bricks_slab"
    },
    "worn_bricks_slab_vert": {
      "id": "createdeco:worn_bricks_slab_vert"
    },
    "worn_bricks_wall": {
      "id": "createdeco:worn_bricks_wall"
    },
    "worn_brick_tiles": {
      "id": "createdeco:worn_brick_tiles"
    },
    "worn_brick_tiles_stairs": {
      "id": "createdeco:worn_brick_tiles_stairs"
    },
    "worn_brick_tiles_slab": {
      "id": "createdeco:worn_brick_tiles_slab"
    },
    "worn_brick_tiles_slab_vert": {
      "id": "createdeco:worn_brick_tiles_slab_vert"
    },
    "worn_brick_tiles_wall": {
      "id": "createdeco:worn_brick_tiles_wall"
    },
    "worn_long_bricks": {
      "id": "createdeco:worn_long_bricks"
    },
    "worn_long_bricks_stairs": {
      "id": "createdeco:worn_long_bricks_stairs"
    },
    "worn_long_bricks_slab": {
      "id": "createdeco:worn_long_bricks_slab"
    },
    "worn_long_bricks_slab_vert": {
      "id": "createdeco:worn_long_bricks_slab_vert"
    },
    "worn_long_bricks_wall": {
      "id": "createdeco:worn_long_bricks_wall"
    },
    "worn_short_bricks": {
      "id": "createdeco:worn_short_bricks"
    },
    "worn_short_bricks_stairs": {
      "id": "createdeco:worn_short_bricks_stairs"
    },
    "worn_short_bricks_slab": {
      "id": "createdeco:worn_short_bricks_slab"
    },
    "worn_short_bricks_slab_vert": {
      "id": "createdeco:worn_short_bricks_slab_vert"
    },
    "worn_short_bricks_wall": {
      "id": "createdeco:worn_short_bricks_wall"
    },
    "cracked_worn_bricks": {
      "id": "createdeco:cracked_worn_bricks"
    },
    "cracked_worn_bricks_stairs": {
      "id": "createdeco:cracked_worn_bricks_stairs"
    },
    "cracked_worn_bricks_slab": {
      "id": "createdeco:cracked_worn_bricks_slab"
    },
    "cracked_worn_bricks_slab_vert": {
      "id": "createdeco:cracked_worn_bricks_slab_vert"
    },
    "cracked_worn_bricks_wall": {
      "id": "createdeco:cracked_worn_bricks_wall"
    },
    "cracked_worn_brick_tiles": {
      "id": "createdeco:cracked_worn_brick_tiles"
    },
    "cracked_worn_brick_tiles_stairs": {
      "id": "createdeco:cracked_worn_brick_tiles_stairs"
    },
    "cracked_worn_brick_tiles_slab": {
      "id": "createdeco:cracked_worn_brick_tiles_slab"
    },
    "cracked_worn_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_worn_brick_tiles_slab_vert"
    },
    "cracked_worn_brick_tiles_wall": {
      "id": "createdeco:cracked_worn_brick_tiles_wall"
    },
    "cracked_worn_long_bricks": {
      "id": "createdeco:cracked_worn_long_bricks"
    },
    "cracked_worn_long_bricks_stairs": {
      "id": "createdeco:cracked_worn_long_bricks_stairs"
    },
    "cracked_worn_long_bricks_slab": {
      "id": "createdeco:cracked_worn_long_bricks_slab"
    },
    "cracked_worn_long_bricks_slab_vert": {
      "id": "createdeco:cracked_worn_long_bricks_slab_vert"
    },
    "cracked_worn_long_bricks_wall": {
      "id": "createdeco:cracked_worn_long_bricks_wall"
    },
    "cracked_worn_short_bricks": {
      "id": "createdeco:cracked_worn_short_bricks"
    },
    "cracked_worn_short_bricks_stairs": {
      "id": "createdeco:cracked_worn_short_bricks_stairs"
    },
    "cracked_worn_short_bricks_slab": {
      "id": "createdeco:cracked_worn_short_bricks_slab"
    },
    "cracked_worn_short_bricks_slab_vert": {
      "id": "createdeco:cracked_worn_short_bricks_slab_vert"
    },
    "cracked_worn_short_bricks_wall": {
      "id": "createdeco:cracked_worn_short_bricks_wall"
    },
    "mossy_worn_bricks": {
      "id": "createdeco:mossy_worn_bricks"
    },
    "mossy_worn_bricks_stairs": {
      "id": "createdeco:mossy_worn_bricks_stairs"
    },
    "mossy_worn_bricks_slab": {
      "id": "createdeco:mossy_worn_bricks_slab"
    },
    "mossy_worn_bricks_slab_vert": {
      "id": "createdeco:mossy_worn_bricks_slab_vert"
    },
    "mossy_worn_bricks_wall": {
      "id": "createdeco:mossy_worn_bricks_wall"
    },
    "mossy_worn_brick_tiles": {
      "id": "createdeco:mossy_worn_brick_tiles"
    },
    "mossy_worn_brick_tiles_stairs": {
      "id": "createdeco:mossy_worn_brick_tiles_stairs"
    },
    "mossy_worn_brick_tiles_slab": {
      "id": "createdeco:mossy_worn_brick_tiles_slab"
    },
    "mossy_worn_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_worn_brick_tiles_slab_vert"
    },
    "mossy_worn_brick_tiles_wall": {
      "id": "createdeco:mossy_worn_brick_tiles_wall"
    },
    "mossy_worn_long_bricks": {
      "id": "createdeco:mossy_worn_long_bricks"
    },
    "mossy_worn_long_bricks_stairs": {
      "id": "createdeco:mossy_worn_long_bricks_stairs"
    },
    "mossy_worn_long_bricks_slab": {
      "id": "createdeco:mossy_worn_long_bricks_slab"
    },
    "mossy_worn_long_bricks_slab_vert": {
      "id": "createdeco:mossy_worn_long_bricks_slab_vert"
    },
    "mossy_worn_long_bricks_wall": {
      "id": "createdeco:mossy_worn_long_bricks_wall"
    },
    "mossy_worn_short_bricks": {
      "id": "createdeco:mossy_worn_short_bricks"
    },
    "mossy_worn_short_bricks_stairs": {
      "id": "createdeco:mossy_worn_short_bricks_stairs"
    },
    "mossy_worn_short_bricks_slab": {
      "id": "createdeco:mossy_worn_short_bricks_slab"
    },
    "mossy_worn_short_bricks_slab_vert": {
      "id": "createdeco:mossy_worn_short_bricks_slab_vert"
    },
    "mossy_worn_short_bricks_wall": {
      "id": "createdeco:mossy_worn_short_bricks_wall"
    },
    "red_brick_tiles": {
      "id": "createdeco:red_brick_tiles"
    },
    "red_long_bricks": {
      "id": "createdeco:red_long_bricks"
    },
    "red_short_bricks": {
      "id": "createdeco:red_short_bricks"
    },
    "cracked_red_bricks": {
      "id": "createdeco:cracked_red_bricks"
    },
    "cracked_red_brick_tiles": {
      "id": "createdeco:cracked_red_brick_tiles"
    },
    "cracked_red_long_bricks": {
      "id": "createdeco:cracked_red_long_bricks"
    },
    "cracked_red_short_bricks": {
      "id": "createdeco:cracked_red_short_bricks"
    },
    "mossy_red_bricks": {
      "id": "createdeco:mossy_red_bricks"
    },
    "mossy_red_brick_tiles": {
      "id": "createdeco:mossy_red_brick_tiles"
    },
    "mossy_red_long_bricks": {
      "id": "createdeco:mossy_red_long_bricks"
    },
    "mossy_red_short_bricks": {
      "id": "createdeco:mossy_red_short_bricks"
    },
    "red_bricks_slab_vert": {
      "id": "createdeco:red_bricks_slab_vert"
    },
    "red_brick_tiles_stairs": {
      "id": "createdeco:red_brick_tiles_stairs"
    },
    "red_brick_tiles_slab": {
      "id": "createdeco:red_brick_tiles_slab"
    },
    "red_brick_tiles_wall": {
      "id": "createdeco:red_brick_tiles_wall"
    },
    "red_brick_tiles_slab_vert": {
      "id": "createdeco:red_brick_tiles_slab_vert"
    },
    "red_long_bricks_stairs": {
      "id": "createdeco:red_long_bricks_stairs"
    },
    "red_long_bricks_slab": {
      "id": "createdeco:red_long_bricks_slab"
    },
    "red_long_bricks_wall": {
      "id": "createdeco:red_long_bricks_wall"
    },
    "red_long_bricks_slab_vert": {
      "id": "createdeco:red_long_bricks_slab_vert"
    },
    "red_short_bricks_stairs": {
      "id": "createdeco:red_short_bricks_stairs"
    },
    "red_short_bricks_slab": {
      "id": "createdeco:red_short_bricks_slab"
    },
    "red_short_bricks_wall": {
      "id": "createdeco:red_short_bricks_wall"
    },
    "red_short_bricks_slab_vert": {
      "id": "createdeco:red_short_bricks_slab_vert"
    },
    "cracked_red_bricks_stairs": {
      "id": "createdeco:cracked_red_bricks_stairs"
    },
    "cracked_red_bricks_slab": {
      "id": "createdeco:cracked_red_bricks_slab"
    },
    "cracked_red_bricks_wall": {
      "id": "createdeco:cracked_red_bricks_wall"
    },
    "cracked_red_bricks_slab_vert": {
      "id": "createdeco:cracked_red_bricks_slab_vert"
    },
    "cracked_red_brick_tiles_stairs": {
      "id": "createdeco:cracked_red_brick_tiles_stairs"
    },
    "cracked_red_brick_tiles_slab": {
      "id": "createdeco:cracked_red_brick_tiles_slab"
    },
    "cracked_red_brick_tiles_wall": {
      "id": "createdeco:cracked_red_brick_tiles_wall"
    },
    "cracked_red_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_red_brick_tiles_slab_vert"
    },
    "cracked_red_long_bricks_stairs": {
      "id": "createdeco:cracked_red_long_bricks_stairs"
    },
    "cracked_red_long_bricks_slab": {
      "id": "createdeco:cracked_red_long_bricks_slab"
    },
    "cracked_red_long_bricks_wall": {
      "id": "createdeco:cracked_red_long_bricks_wall"
    },
    "cracked_red_long_bricks_slab_vert": {
      "id": "createdeco:cracked_red_long_bricks_slab_vert"
    },
    "cracked_red_short_bricks_stairs": {
      "id": "createdeco:cracked_red_short_bricks_stairs"
    },
    "cracked_red_short_bricks_slab": {
      "id": "createdeco:cracked_red_short_bricks_slab"
    },
    "cracked_red_short_bricks_wall": {
      "id": "createdeco:cracked_red_short_bricks_wall"
    },
    "cracked_red_short_bricks_slab_vert": {
      "id": "createdeco:cracked_red_short_bricks_slab_vert"
    },
    "mossy_red_bricks_stairs": {
      "id": "createdeco:mossy_red_bricks_stairs"
    },
    "mossy_red_bricks_slab": {
      "id": "createdeco:mossy_red_bricks_slab"
    },
    "mossy_red_bricks_wall": {
      "id": "createdeco:mossy_red_bricks_wall"
    },
    "mossy_red_bricks_slab_vert": {
      "id": "createdeco:mossy_red_bricks_slab_vert"
    },
    "mossy_red_brick_tiles_stairs": {
      "id": "createdeco:mossy_red_brick_tiles_stairs"
    },
    "mossy_red_brick_tiles_slab": {
      "id": "createdeco:mossy_red_brick_tiles_slab"
    },
    "mossy_red_brick_tiles_wall": {
      "id": "createdeco:mossy_red_brick_tiles_wall"
    },
    "mossy_red_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_red_brick_tiles_slab_vert"
    },
    "mossy_red_long_bricks_stairs": {
      "id": "createdeco:mossy_red_long_bricks_stairs"
    },
    "mossy_red_long_bricks_slab": {
      "id": "createdeco:mossy_red_long_bricks_slab"
    },
    "mossy_red_long_bricks_wall": {
      "id": "createdeco:mossy_red_long_bricks_wall"
    },
    "mossy_red_long_bricks_slab_vert": {
      "id": "createdeco:mossy_red_long_bricks_slab_vert"
    },
    "mossy_red_short_bricks_stairs": {
      "id": "createdeco:mossy_red_short_bricks_stairs"
    },
    "mossy_red_short_bricks_slab": {
      "id": "createdeco:mossy_red_short_bricks_slab"
    },
    "mossy_red_short_bricks_wall": {
      "id": "createdeco:mossy_red_short_bricks_wall"
    },
    "mossy_red_short_bricks_slab_vert": {
      "id": "createdeco:mossy_red_short_bricks_slab_vert"
    },
    "dean_bricks": {
      "id": "createdeco:dean_bricks"
    },
    "dean_brick_tiles": {
      "id": "createdeco:dean_brick_tiles"
    },
    "dean_long_bricks": {
      "id": "createdeco:dean_long_bricks"
    },
    "dean_short_bricks": {
      "id": "createdeco:dean_short_bricks"
    },
    "cracked_dean_bricks": {
      "id": "createdeco:cracked_dean_bricks"
    },
    "cracked_dean_brick_tiles": {
      "id": "createdeco:cracked_dean_brick_tiles"
    },
    "cracked_dean_long_bricks": {
      "id": "createdeco:cracked_dean_long_bricks"
    },
    "cracked_dean_short_bricks": {
      "id": "createdeco:cracked_dean_short_bricks"
    },
    "mossy_dean_bricks": {
      "id": "createdeco:mossy_dean_bricks"
    },
    "mossy_dean_brick_tiles": {
      "id": "createdeco:mossy_dean_brick_tiles"
    },
    "mossy_dean_long_bricks": {
      "id": "createdeco:mossy_dean_long_bricks"
    },
    "mossy_dean_short_bricks": {
      "id": "createdeco:mossy_dean_short_bricks"
    },
    "dean_bricks_stairs": {
      "id": "createdeco:dean_bricks_stairs"
    },
    "dean_bricks_slab": {
      "id": "createdeco:dean_bricks_slab"
    },
    "dean_bricks_wall": {
      "id": "createdeco:dean_bricks_wall"
    },
    "dean_bricks_slab_vert": {
      "id": "createdeco:dean_bricks_slab_vert"
    },
    "dean_brick_tiles_stairs": {
      "id": "createdeco:dean_brick_tiles_stairs"
    },
    "dean_brick_tiles_slab": {
      "id": "createdeco:dean_brick_tiles_slab"
    },
    "dean_brick_tiles_wall": {
      "id": "createdeco:dean_brick_tiles_wall"
    },
    "dean_brick_tiles_slab_vert": {
      "id": "createdeco:dean_brick_tiles_slab_vert"
    },
    "dean_long_bricks_stairs": {
      "id": "createdeco:dean_long_bricks_stairs"
    },
    "dean_long_bricks_slab": {
      "id": "createdeco:dean_long_bricks_slab"
    },
    "dean_long_bricks_wall": {
      "id": "createdeco:dean_long_bricks_wall"
    },
    "dean_long_bricks_slab_vert": {
      "id": "createdeco:dean_long_bricks_slab_vert"
    },
    "dean_short_bricks_stairs": {
      "id": "createdeco:dean_short_bricks_stairs"
    },
    "dean_short_bricks_slab": {
      "id": "createdeco:dean_short_bricks_slab"
    },
    "dean_short_bricks_wall": {
      "id": "createdeco:dean_short_bricks_wall"
    },
    "dean_short_bricks_slab_vert": {
      "id": "createdeco:dean_short_bricks_slab_vert"
    },
    "cracked_dean_bricks_stairs": {
      "id": "createdeco:cracked_dean_bricks_stairs"
    },
    "cracked_dean_bricks_slab": {
      "id": "createdeco:cracked_dean_bricks_slab"
    },
    "cracked_dean_bricks_wall": {
      "id": "createdeco:cracked_dean_bricks_wall"
    },
    "cracked_dean_bricks_slab_vert": {
      "id": "createdeco:cracked_dean_bricks_slab_vert"
    },
    "cracked_dean_brick_tiles_stairs": {
      "id": "createdeco:cracked_dean_brick_tiles_stairs"
    },
    "cracked_dean_brick_tiles_slab": {
      "id": "createdeco:cracked_dean_brick_tiles_slab"
    },
    "cracked_dean_brick_tiles_wall": {
      "id": "createdeco:cracked_dean_brick_tiles_wall"
    },
    "cracked_dean_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_dean_brick_tiles_slab_vert"
    },
    "cracked_dean_long_bricks_stairs": {
      "id": "createdeco:cracked_dean_long_bricks_stairs"
    },
    "cracked_dean_long_bricks_slab": {
      "id": "createdeco:cracked_dean_long_bricks_slab"
    },
    "cracked_dean_long_bricks_wall": {
      "id": "createdeco:cracked_dean_long_bricks_wall"
    },
    "cracked_dean_long_bricks_slab_vert": {
      "id": "createdeco:cracked_dean_long_bricks_slab_vert"
    },
    "cracked_dean_short_bricks_stairs": {
      "id": "createdeco:cracked_dean_short_bricks_stairs"
    },
    "cracked_dean_short_bricks_slab": {
      "id": "createdeco:cracked_dean_short_bricks_slab"
    },
    "cracked_dean_short_bricks_wall": {
      "id": "createdeco:cracked_dean_short_bricks_wall"
    },
    "cracked_dean_short_bricks_slab_vert": {
      "id": "createdeco:cracked_dean_short_bricks_slab_vert"
    },
    "mossy_dean_bricks_stairs": {
      "id": "createdeco:mossy_dean_bricks_stairs"
    },
    "mossy_dean_bricks_slab": {
      "id": "createdeco:mossy_dean_bricks_slab"
    },
    "mossy_dean_bricks_wall": {
      "id": "createdeco:mossy_dean_bricks_wall"
    },
    "mossy_dean_bricks_slab_vert": {
      "id": "createdeco:mossy_dean_bricks_slab_vert"
    },
    "mossy_dean_brick_tiles_stairs": {
      "id": "createdeco:mossy_dean_brick_tiles_stairs"
    },
    "mossy_dean_brick_tiles_slab": {
      "id": "createdeco:mossy_dean_brick_tiles_slab"
    },
    "mossy_dean_brick_tiles_wall": {
      "id": "createdeco:mossy_dean_brick_tiles_wall"
    },
    "mossy_dean_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_dean_brick_tiles_slab_vert"
    },
    "mossy_dean_long_bricks_stairs": {
      "id": "createdeco:mossy_dean_long_bricks_stairs"
    },
    "mossy_dean_long_bricks_slab": {
      "id": "createdeco:mossy_dean_long_bricks_slab"
    },
    "mossy_dean_long_bricks_wall": {
      "id": "createdeco:mossy_dean_long_bricks_wall"
    },
    "mossy_dean_long_bricks_slab_vert": {
      "id": "createdeco:mossy_dean_long_bricks_slab_vert"
    },
    "mossy_dean_short_bricks_stairs": {
      "id": "createdeco:mossy_dean_short_bricks_stairs"
    },
    "mossy_dean_short_bricks_slab": {
      "id": "createdeco:mossy_dean_short_bricks_slab"
    },
    "mossy_dean_short_bricks_wall": {
      "id": "createdeco:mossy_dean_short_bricks_wall"
    },
    "mossy_dean_short_bricks_slab_vert": {
      "id": "createdeco:mossy_dean_short_bricks_slab_vert"
    },
    "pearl_bricks": {
      "id": "createdeco:pearl_bricks"
    },
    "pearl_brick_tiles": {
      "id": "createdeco:pearl_brick_tiles"
    },
    "pearl_long_bricks": {
      "id": "createdeco:pearl_long_bricks"
    },
    "pearl_short_bricks": {
      "id": "createdeco:pearl_short_bricks"
    },
    "cracked_pearl_bricks": {
      "id": "createdeco:cracked_pearl_bricks"
    },
    "cracked_pearl_brick_tiles": {
      "id": "createdeco:cracked_pearl_brick_tiles"
    },
    "cracked_pearl_long_bricks": {
      "id": "createdeco:cracked_pearl_long_bricks"
    },
    "cracked_pearl_short_bricks": {
      "id": "createdeco:cracked_pearl_short_bricks"
    },
    "mossy_pearl_bricks": {
      "id": "createdeco:mossy_pearl_bricks"
    },
    "mossy_pearl_brick_tiles": {
      "id": "createdeco:mossy_pearl_brick_tiles"
    },
    "mossy_pearl_long_bricks": {
      "id": "createdeco:mossy_pearl_long_bricks"
    },
    "mossy_pearl_short_bricks": {
      "id": "createdeco:mossy_pearl_short_bricks"
    },
    "pearl_bricks_stairs": {
      "id": "createdeco:pearl_bricks_stairs"
    },
    "pearl_bricks_slab": {
      "id": "createdeco:pearl_bricks_slab"
    },
    "pearl_bricks_wall": {
      "id": "createdeco:pearl_bricks_wall"
    },
    "pearl_bricks_slab_vert": {
      "id": "createdeco:pearl_bricks_slab_vert"
    },
    "pearl_brick_tiles_stairs": {
      "id": "createdeco:pearl_brick_tiles_stairs"
    },
    "pearl_brick_tiles_slab": {
      "id": "createdeco:pearl_brick_tiles_slab"
    },
    "pearl_brick_tiles_wall": {
      "id": "createdeco:pearl_brick_tiles_wall"
    },
    "pearl_brick_tiles_slab_vert": {
      "id": "createdeco:pearl_brick_tiles_slab_vert"
    },
    "pearl_long_bricks_stairs": {
      "id": "createdeco:pearl_long_bricks_stairs"
    },
    "pearl_long_bricks_slab": {
      "id": "createdeco:pearl_long_bricks_slab"
    },
    "pearl_long_bricks_wall": {
      "id": "createdeco:pearl_long_bricks_wall"
    },
    "pearl_long_bricks_slab_vert": {
      "id": "createdeco:pearl_long_bricks_slab_vert"
    },
    "pearl_short_bricks_stairs": {
      "id": "createdeco:pearl_short_bricks_stairs"
    },
    "pearl_short_bricks_slab": {
      "id": "createdeco:pearl_short_bricks_slab"
    },
    "pearl_short_bricks_wall": {
      "id": "createdeco:pearl_short_bricks_wall"
    },
    "pearl_short_bricks_slab_vert": {
      "id": "createdeco:pearl_short_bricks_slab_vert"
    },
    "cracked_pearl_bricks_stairs": {
      "id": "createdeco:cracked_pearl_bricks_stairs"
    },
    "cracked_pearl_bricks_slab": {
      "id": "createdeco:cracked_pearl_bricks_slab"
    },
    "cracked_pearl_bricks_wall": {
      "id": "createdeco:cracked_pearl_bricks_wall"
    },
    "cracked_pearl_bricks_slab_vert": {
      "id": "createdeco:cracked_pearl_bricks_slab_vert"
    },
    "cracked_pearl_brick_tiles_stairs": {
      "id": "createdeco:cracked_pearl_brick_tiles_stairs"
    },
    "cracked_pearl_brick_tiles_slab": {
      "id": "createdeco:cracked_pearl_brick_tiles_slab"
    },
    "cracked_pearl_brick_tiles_wall": {
      "id": "createdeco:cracked_pearl_brick_tiles_wall"
    },
    "cracked_pearl_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_pearl_brick_tiles_slab_vert"
    },
    "cracked_pearl_long_bricks_stairs": {
      "id": "createdeco:cracked_pearl_long_bricks_stairs"
    },
    "cracked_pearl_long_bricks_slab": {
      "id": "createdeco:cracked_pearl_long_bricks_slab"
    },
    "cracked_pearl_long_bricks_wall": {
      "id": "createdeco:cracked_pearl_long_bricks_wall"
    },
    "cracked_pearl_long_bricks_slab_vert": {
      "id": "createdeco:cracked_pearl_long_bricks_slab_vert"
    },
    "cracked_pearl_short_bricks_stairs": {
      "id": "createdeco:cracked_pearl_short_bricks_stairs"
    },
    "cracked_pearl_short_bricks_slab": {
      "id": "createdeco:cracked_pearl_short_bricks_slab"
    },
    "cracked_pearl_short_bricks_wall": {
      "id": "createdeco:cracked_pearl_short_bricks_wall"
    },
    "cracked_pearl_short_bricks_slab_vert": {
      "id": "createdeco:cracked_pearl_short_bricks_slab_vert"
    },
    "mossy_pearl_bricks_stairs": {
      "id": "createdeco:mossy_pearl_bricks_stairs"
    },
    "mossy_pearl_bricks_slab": {
      "id": "createdeco:mossy_pearl_bricks_slab"
    },
    "mossy_pearl_bricks_wall": {
      "id": "createdeco:mossy_pearl_bricks_wall"
    },
    "mossy_pearl_bricks_slab_vert": {
      "id": "createdeco:mossy_pearl_bricks_slab_vert"
    },
    "mossy_pearl_brick_tiles_stairs": {
      "id": "createdeco:mossy_pearl_brick_tiles_stairs"
    },
    "mossy_pearl_brick_tiles_slab": {
      "id": "createdeco:mossy_pearl_brick_tiles_slab"
    },
    "mossy_pearl_brick_tiles_wall": {
      "id": "createdeco:mossy_pearl_brick_tiles_wall"
    },
    "mossy_pearl_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_pearl_brick_tiles_slab_vert"
    },
    "mossy_pearl_long_bricks_stairs": {
      "id": "createdeco:mossy_pearl_long_bricks_stairs"
    },
    "mossy_pearl_long_bricks_slab": {
      "id": "createdeco:mossy_pearl_long_bricks_slab"
    },
    "mossy_pearl_long_bricks_wall": {
      "id": "createdeco:mossy_pearl_long_bricks_wall"
    },
    "mossy_pearl_long_bricks_slab_vert": {
      "id": "createdeco:mossy_pearl_long_bricks_slab_vert"
    },
    "mossy_pearl_short_bricks_stairs": {
      "id": "createdeco:mossy_pearl_short_bricks_stairs"
    },
    "mossy_pearl_short_bricks_slab": {
      "id": "createdeco:mossy_pearl_short_bricks_slab"
    },
    "mossy_pearl_short_bricks_wall": {
      "id": "createdeco:mossy_pearl_short_bricks_wall"
    },
    "mossy_pearl_short_bricks_slab_vert": {
      "id": "createdeco:mossy_pearl_short_bricks_slab_vert"
    },
    "scarlet_bricks": {
      "id": "createdeco:scarlet_bricks"
    },
    "scarlet_brick_tiles": {
      "id": "createdeco:scarlet_brick_tiles"
    },
    "scarlet_long_bricks": {
      "id": "createdeco:scarlet_long_bricks"
    },
    "scarlet_short_bricks": {
      "id": "createdeco:scarlet_short_bricks"
    },
    "cracked_scarlet_bricks": {
      "id": "createdeco:cracked_scarlet_bricks"
    },
    "cracked_scarlet_brick_tiles": {
      "id": "createdeco:cracked_scarlet_brick_tiles"
    },
    "cracked_scarlet_long_bricks": {
      "id": "createdeco:cracked_scarlet_long_bricks"
    },
    "cracked_scarlet_short_bricks": {
      "id": "createdeco:cracked_scarlet_short_bricks"
    },
    "mossy_scarlet_bricks": {
      "id": "createdeco:mossy_scarlet_bricks"
    },
    "mossy_scarlet_brick_tiles": {
      "id": "createdeco:mossy_scarlet_brick_tiles"
    },
    "mossy_scarlet_long_bricks": {
      "id": "createdeco:mossy_scarlet_long_bricks"
    },
    "mossy_scarlet_short_bricks": {
      "id": "createdeco:mossy_scarlet_short_bricks"
    },
    "scarlet_bricks_stairs": {
      "id": "createdeco:scarlet_bricks_stairs"
    },
    "scarlet_bricks_slab": {
      "id": "createdeco:scarlet_bricks_slab"
    },
    "scarlet_bricks_wall": {
      "id": "createdeco:scarlet_bricks_wall"
    },
    "scarlet_bricks_slab_vert": {
      "id": "createdeco:scarlet_bricks_slab_vert"
    },
    "scarlet_brick_tiles_stairs": {
      "id": "createdeco:scarlet_brick_tiles_stairs"
    },
    "scarlet_brick_tiles_slab": {
      "id": "createdeco:scarlet_brick_tiles_slab"
    },
    "scarlet_brick_tiles_wall": {
      "id": "createdeco:scarlet_brick_tiles_wall"
    },
    "scarlet_brick_tiles_slab_vert": {
      "id": "createdeco:scarlet_brick_tiles_slab_vert"
    },
    "scarlet_long_bricks_stairs": {
      "id": "createdeco:scarlet_long_bricks_stairs"
    },
    "scarlet_long_bricks_slab": {
      "id": "createdeco:scarlet_long_bricks_slab"
    },
    "scarlet_long_bricks_wall": {
      "id": "createdeco:scarlet_long_bricks_wall"
    },
    "scarlet_long_bricks_slab_vert": {
      "id": "createdeco:scarlet_long_bricks_slab_vert"
    },
    "scarlet_short_bricks_stairs": {
      "id": "createdeco:scarlet_short_bricks_stairs"
    },
    "scarlet_short_bricks_slab": {
      "id": "createdeco:scarlet_short_bricks_slab"
    },
    "scarlet_short_bricks_wall": {
      "id": "createdeco:scarlet_short_bricks_wall"
    },
    "scarlet_short_bricks_slab_vert": {
      "id": "createdeco:scarlet_short_bricks_slab_vert"
    },
    "cracked_scarlet_bricks_stairs": {
      "id": "createdeco:cracked_scarlet_bricks_stairs"
    },
    "cracked_scarlet_bricks_slab": {
      "id": "createdeco:cracked_scarlet_bricks_slab"
    },
    "cracked_scarlet_bricks_wall": {
      "id": "createdeco:cracked_scarlet_bricks_wall"
    },
    "cracked_scarlet_bricks_slab_vert": {
      "id": "createdeco:cracked_scarlet_bricks_slab_vert"
    },
    "cracked_scarlet_brick_tiles_stairs": {
      "id": "createdeco:cracked_scarlet_brick_tiles_stairs"
    },
    "cracked_scarlet_brick_tiles_slab": {
      "id": "createdeco:cracked_scarlet_brick_tiles_slab"
    },
    "cracked_scarlet_brick_tiles_wall": {
      "id": "createdeco:cracked_scarlet_brick_tiles_wall"
    },
    "cracked_scarlet_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_scarlet_brick_tiles_slab_vert"
    },
    "cracked_scarlet_long_bricks_stairs": {
      "id": "createdeco:cracked_scarlet_long_bricks_stairs"
    },
    "cracked_scarlet_long_bricks_slab": {
      "id": "createdeco:cracked_scarlet_long_bricks_slab"
    },
    "cracked_scarlet_long_bricks_wall": {
      "id": "createdeco:cracked_scarlet_long_bricks_wall"
    },
    "cracked_scarlet_long_bricks_slab_vert": {
      "id": "createdeco:cracked_scarlet_long_bricks_slab_vert"
    },
    "cracked_scarlet_short_bricks_stairs": {
      "id": "createdeco:cracked_scarlet_short_bricks_stairs"
    },
    "cracked_scarlet_short_bricks_slab": {
      "id": "createdeco:cracked_scarlet_short_bricks_slab"
    },
    "cracked_scarlet_short_bricks_wall": {
      "id": "createdeco:cracked_scarlet_short_bricks_wall"
    },
    "cracked_scarlet_short_bricks_slab_vert": {
      "id": "createdeco:cracked_scarlet_short_bricks_slab_vert"
    },
    "mossy_scarlet_bricks_stairs": {
      "id": "createdeco:mossy_scarlet_bricks_stairs"
    },
    "mossy_scarlet_bricks_slab": {
      "id": "createdeco:mossy_scarlet_bricks_slab"
    },
    "mossy_scarlet_bricks_wall": {
      "id": "createdeco:mossy_scarlet_bricks_wall"
    },
    "mossy_scarlet_bricks_slab_vert": {
      "id": "createdeco:mossy_scarlet_bricks_slab_vert"
    },
    "mossy_scarlet_brick_tiles_stairs": {
      "id": "createdeco:mossy_scarlet_brick_tiles_stairs"
    },
    "mossy_scarlet_brick_tiles_slab": {
      "id": "createdeco:mossy_scarlet_brick_tiles_slab"
    },
    "mossy_scarlet_brick_tiles_wall": {
      "id": "createdeco:mossy_scarlet_brick_tiles_wall"
    },
    "mossy_scarlet_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_scarlet_brick_tiles_slab_vert"
    },
    "mossy_scarlet_long_bricks_stairs": {
      "id": "createdeco:mossy_scarlet_long_bricks_stairs"
    },
    "mossy_scarlet_long_bricks_slab": {
      "id": "createdeco:mossy_scarlet_long_bricks_slab"
    },
    "mossy_scarlet_long_bricks_wall": {
      "id": "createdeco:mossy_scarlet_long_bricks_wall"
    },
    "mossy_scarlet_long_bricks_slab_vert": {
      "id": "createdeco:mossy_scarlet_long_bricks_slab_vert"
    },
    "mossy_scarlet_short_bricks_stairs": {
      "id": "createdeco:mossy_scarlet_short_bricks_stairs"
    },
    "mossy_scarlet_short_bricks_slab": {
      "id": "createdeco:mossy_scarlet_short_bricks_slab"
    },
    "mossy_scarlet_short_bricks_wall": {
      "id": "createdeco:mossy_scarlet_short_bricks_wall"
    },
    "mossy_scarlet_short_bricks_slab_vert": {
      "id": "createdeco:mossy_scarlet_short_bricks_slab_vert"
    },
    "blue_bricks": {
      "id": "createdeco:blue_bricks"
    },
    "blue_brick_tiles": {
      "id": "createdeco:blue_brick_tiles"
    },
    "blue_long_bricks": {
      "id": "createdeco:blue_long_bricks"
    },
    "blue_short_bricks": {
      "id": "createdeco:blue_short_bricks"
    },
    "cracked_blue_bricks": {
      "id": "createdeco:cracked_blue_bricks"
    },
    "cracked_blue_brick_tiles": {
      "id": "createdeco:cracked_blue_brick_tiles"
    },
    "cracked_blue_long_bricks": {
      "id": "createdeco:cracked_blue_long_bricks"
    },
    "cracked_blue_short_bricks": {
      "id": "createdeco:cracked_blue_short_bricks"
    },
    "mossy_blue_bricks": {
      "id": "createdeco:mossy_blue_bricks"
    },
    "mossy_blue_brick_tiles": {
      "id": "createdeco:mossy_blue_brick_tiles"
    },
    "mossy_blue_long_bricks": {
      "id": "createdeco:mossy_blue_long_bricks"
    },
    "mossy_blue_short_bricks": {
      "id": "createdeco:mossy_blue_short_bricks"
    },
    "blue_bricks_stairs": {
      "id": "createdeco:blue_bricks_stairs"
    },
    "blue_bricks_slab": {
      "id": "createdeco:blue_bricks_slab"
    },
    "blue_bricks_wall": {
      "id": "createdeco:blue_bricks_wall"
    },
    "blue_bricks_slab_vert": {
      "id": "createdeco:blue_bricks_slab_vert"
    },
    "blue_brick_tiles_stairs": {
      "id": "createdeco:blue_brick_tiles_stairs"
    },
    "blue_brick_tiles_slab": {
      "id": "createdeco:blue_brick_tiles_slab"
    },
    "blue_brick_tiles_wall": {
      "id": "createdeco:blue_brick_tiles_wall"
    },
    "blue_brick_tiles_slab_vert": {
      "id": "createdeco:blue_brick_tiles_slab_vert"
    },
    "blue_long_bricks_stairs": {
      "id": "createdeco:blue_long_bricks_stairs"
    },
    "blue_long_bricks_slab": {
      "id": "createdeco:blue_long_bricks_slab"
    },
    "blue_long_bricks_wall": {
      "id": "createdeco:blue_long_bricks_wall"
    },
    "blue_long_bricks_slab_vert": {
      "id": "createdeco:blue_long_bricks_slab_vert"
    },
    "blue_short_bricks_stairs": {
      "id": "createdeco:blue_short_bricks_stairs"
    },
    "blue_short_bricks_slab": {
      "id": "createdeco:blue_short_bricks_slab"
    },
    "blue_short_bricks_wall": {
      "id": "createdeco:blue_short_bricks_wall"
    },
    "blue_short_bricks_slab_vert": {
      "id": "createdeco:blue_short_bricks_slab_vert"
    },
    "cracked_blue_bricks_stairs": {
      "id": "createdeco:cracked_blue_bricks_stairs"
    },
    "cracked_blue_bricks_slab": {
      "id": "createdeco:cracked_blue_bricks_slab"
    },
    "cracked_blue_bricks_wall": {
      "id": "createdeco:cracked_blue_bricks_wall"
    },
    "cracked_blue_bricks_slab_vert": {
      "id": "createdeco:cracked_blue_bricks_slab_vert"
    },
    "cracked_blue_brick_tiles_stairs": {
      "id": "createdeco:cracked_blue_brick_tiles_stairs"
    },
    "cracked_blue_brick_tiles_slab": {
      "id": "createdeco:cracked_blue_brick_tiles_slab"
    },
    "cracked_blue_brick_tiles_wall": {
      "id": "createdeco:cracked_blue_brick_tiles_wall"
    },
    "cracked_blue_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_blue_brick_tiles_slab_vert"
    },
    "cracked_blue_long_bricks_stairs": {
      "id": "createdeco:cracked_blue_long_bricks_stairs"
    },
    "cracked_blue_long_bricks_slab": {
      "id": "createdeco:cracked_blue_long_bricks_slab"
    },
    "cracked_blue_long_bricks_wall": {
      "id": "createdeco:cracked_blue_long_bricks_wall"
    },
    "cracked_blue_long_bricks_slab_vert": {
      "id": "createdeco:cracked_blue_long_bricks_slab_vert"
    },
    "cracked_blue_short_bricks_stairs": {
      "id": "createdeco:cracked_blue_short_bricks_stairs"
    },
    "cracked_blue_short_bricks_slab": {
      "id": "createdeco:cracked_blue_short_bricks_slab"
    },
    "cracked_blue_short_bricks_wall": {
      "id": "createdeco:cracked_blue_short_bricks_wall"
    },
    "cracked_blue_short_bricks_slab_vert": {
      "id": "createdeco:cracked_blue_short_bricks_slab_vert"
    },
    "mossy_blue_bricks_stairs": {
      "id": "createdeco:mossy_blue_bricks_stairs"
    },
    "mossy_blue_bricks_slab": {
      "id": "createdeco:mossy_blue_bricks_slab"
    },
    "mossy_blue_bricks_wall": {
      "id": "createdeco:mossy_blue_bricks_wall"
    },
    "mossy_blue_bricks_slab_vert": {
      "id": "createdeco:mossy_blue_bricks_slab_vert"
    },
    "mossy_blue_brick_tiles_stairs": {
      "id": "createdeco:mossy_blue_brick_tiles_stairs"
    },
    "mossy_blue_brick_tiles_slab": {
      "id": "createdeco:mossy_blue_brick_tiles_slab"
    },
    "mossy_blue_brick_tiles_wall": {
      "id": "createdeco:mossy_blue_brick_tiles_wall"
    },
    "mossy_blue_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_blue_brick_tiles_slab_vert"
    },
    "mossy_blue_long_bricks_stairs": {
      "id": "createdeco:mossy_blue_long_bricks_stairs"
    },
    "mossy_blue_long_bricks_slab": {
      "id": "createdeco:mossy_blue_long_bricks_slab"
    },
    "mossy_blue_long_bricks_wall": {
      "id": "createdeco:mossy_blue_long_bricks_wall"
    },
    "mossy_blue_long_bricks_slab_vert": {
      "id": "createdeco:mossy_blue_long_bricks_slab_vert"
    },
    "mossy_blue_short_bricks_stairs": {
      "id": "createdeco:mossy_blue_short_bricks_stairs"
    },
    "mossy_blue_short_bricks_slab": {
      "id": "createdeco:mossy_blue_short_bricks_slab"
    },
    "mossy_blue_short_bricks_wall": {
      "id": "createdeco:mossy_blue_short_bricks_wall"
    },
    "mossy_blue_short_bricks_slab_vert": {
      "id": "createdeco:mossy_blue_short_bricks_slab_vert"
    },
    "dusk_bricks": {
      "id": "createdeco:dusk_bricks"
    },
    "dusk_brick_tiles": {
      "id": "createdeco:dusk_brick_tiles"
    },
    "dusk_long_bricks": {
      "id": "createdeco:dusk_long_bricks"
    },
    "dusk_short_bricks": {
      "id": "createdeco:dusk_short_bricks"
    },
    "cracked_dusk_bricks": {
      "id": "createdeco:cracked_dusk_bricks"
    },
    "cracked_dusk_brick_tiles": {
      "id": "createdeco:cracked_dusk_brick_tiles"
    },
    "cracked_dusk_long_bricks": {
      "id": "createdeco:cracked_dusk_long_bricks"
    },
    "cracked_dusk_short_bricks": {
      "id": "createdeco:cracked_dusk_short_bricks"
    },
    "mossy_dusk_bricks": {
      "id": "createdeco:mossy_dusk_bricks"
    },
    "mossy_dusk_brick_tiles": {
      "id": "createdeco:mossy_dusk_brick_tiles"
    },
    "mossy_dusk_long_bricks": {
      "id": "createdeco:mossy_dusk_long_bricks"
    },
    "mossy_dusk_short_bricks": {
      "id": "createdeco:mossy_dusk_short_bricks"
    },
    "dusk_bricks_stairs": {
      "id": "createdeco:dusk_bricks_stairs"
    },
    "dusk_bricks_slab": {
      "id": "createdeco:dusk_bricks_slab"
    },
    "dusk_bricks_wall": {
      "id": "createdeco:dusk_bricks_wall"
    },
    "dusk_bricks_slab_vert": {
      "id": "createdeco:dusk_bricks_slab_vert"
    },
    "dusk_brick_tiles_stairs": {
      "id": "createdeco:dusk_brick_tiles_stairs"
    },
    "dusk_brick_tiles_slab": {
      "id": "createdeco:dusk_brick_tiles_slab"
    },
    "dusk_brick_tiles_wall": {
      "id": "createdeco:dusk_brick_tiles_wall"
    },
    "dusk_brick_tiles_slab_vert": {
      "id": "createdeco:dusk_brick_tiles_slab_vert"
    },
    "dusk_long_bricks_stairs": {
      "id": "createdeco:dusk_long_bricks_stairs"
    },
    "dusk_long_bricks_slab": {
      "id": "createdeco:dusk_long_bricks_slab"
    },
    "dusk_long_bricks_wall": {
      "id": "createdeco:dusk_long_bricks_wall"
    },
    "dusk_long_bricks_slab_vert": {
      "id": "createdeco:dusk_long_bricks_slab_vert"
    },
    "dusk_short_bricks_stairs": {
      "id": "createdeco:dusk_short_bricks_stairs"
    },
    "dusk_short_bricks_slab": {
      "id": "createdeco:dusk_short_bricks_slab"
    },
    "dusk_short_bricks_wall": {
      "id": "createdeco:dusk_short_bricks_wall"
    },
    "dusk_short_bricks_slab_vert": {
      "id": "createdeco:dusk_short_bricks_slab_vert"
    },
    "cracked_dusk_bricks_stairs": {
      "id": "createdeco:cracked_dusk_bricks_stairs"
    },
    "cracked_dusk_bricks_slab": {
      "id": "createdeco:cracked_dusk_bricks_slab"
    },
    "cracked_dusk_bricks_wall": {
      "id": "createdeco:cracked_dusk_bricks_wall"
    },
    "cracked_dusk_bricks_slab_vert": {
      "id": "createdeco:cracked_dusk_bricks_slab_vert"
    },
    "cracked_dusk_brick_tiles_stairs": {
      "id": "createdeco:cracked_dusk_brick_tiles_stairs"
    },
    "cracked_dusk_brick_tiles_slab": {
      "id": "createdeco:cracked_dusk_brick_tiles_slab"
    },
    "cracked_dusk_brick_tiles_wall": {
      "id": "createdeco:cracked_dusk_brick_tiles_wall"
    },
    "cracked_dusk_brick_tiles_slab_vert": {
      "id": "createdeco:cracked_dusk_brick_tiles_slab_vert"
    },
    "cracked_dusk_long_bricks_stairs": {
      "id": "createdeco:cracked_dusk_long_bricks_stairs"
    },
    "cracked_dusk_long_bricks_slab": {
      "id": "createdeco:cracked_dusk_long_bricks_slab"
    },
    "cracked_dusk_long_bricks_wall": {
      "id": "createdeco:cracked_dusk_long_bricks_wall"
    },
    "cracked_dusk_long_bricks_slab_vert": {
      "id": "createdeco:cracked_dusk_long_bricks_slab_vert"
    },
    "cracked_dusk_short_bricks_stairs": {
      "id": "createdeco:cracked_dusk_short_bricks_stairs"
    },
    "cracked_dusk_short_bricks_slab": {
      "id": "createdeco:cracked_dusk_short_bricks_slab"
    },
    "cracked_dusk_short_bricks_wall": {
      "id": "createdeco:cracked_dusk_short_bricks_wall"
    },
    "cracked_dusk_short_bricks_slab_vert": {
      "id": "createdeco:cracked_dusk_short_bricks_slab_vert"
    },
    "mossy_dusk_bricks_stairs": {
      "id": "createdeco:mossy_dusk_bricks_stairs"
    },
    "mossy_dusk_bricks_slab": {
      "id": "createdeco:mossy_dusk_bricks_slab"
    },
    "mossy_dusk_bricks_wall": {
      "id": "createdeco:mossy_dusk_bricks_wall"
    },
    "mossy_dusk_bricks_slab_vert": {
      "id": "createdeco:mossy_dusk_bricks_slab_vert"
    },
    "mossy_dusk_brick_tiles_stairs": {
      "id": "createdeco:mossy_dusk_brick_tiles_stairs"
    },
    "mossy_dusk_brick_tiles_slab": {
      "id": "createdeco:mossy_dusk_brick_tiles_slab"
    },
    "mossy_dusk_brick_tiles_wall": {
      "id": "createdeco:mossy_dusk_brick_tiles_wall"
    },
    "mossy_dusk_brick_tiles_slab_vert": {
      "id": "createdeco:mossy_dusk_brick_tiles_slab_vert"
    },
    "mossy_dusk_long_bricks_stairs": {
      "id": "createdeco:mossy_dusk_long_bricks_stairs"
    },
    "mossy_dusk_long_bricks_slab": {
      "id": "createdeco:mossy_dusk_long_bricks_slab"
    },
    "mossy_dusk_long_bricks_wall": {
      "id": "createdeco:mossy_dusk_long_bricks_wall"
    },
    "mossy_dusk_long_bricks_slab_vert": {
      "id": "createdeco:mossy_dusk_long_bricks_slab_vert"
    },
    "mossy_dusk_short_bricks_stairs": {
      "id": "createdeco:mossy_dusk_short_bricks_stairs"
    },
    "mossy_dusk_short_bricks_slab": {
      "id": "createdeco:mossy_dusk_short_bricks_slab"
    },
    "mossy_dusk_short_bricks_wall": {
      "id": "createdeco:mossy_dusk_short_bricks_wall"
    },
    "mossy_dusk_short_bricks_slab_vert": {
      "id": "createdeco:mossy_dusk_short_bricks_slab_vert"
    },
    "gold_sheet_metal": {
      "id": "createdeco:gold_sheet_metal"
    },
    "gold_sheet_stairs": {
      "id": "createdeco:gold_sheet_stairs"
    },
    "gold_sheet_slab": {
      "id": "createdeco:gold_sheet_slab"
    },
    "gold_sheet_slab_vert": {
      "id": "createdeco:gold_sheet_slab_vert"
    },
    "netherite_sheet_metal": {
      "id": "createdeco:netherite_sheet_metal"
    },
    "netherite_sheet_stairs": {
      "id": "createdeco:netherite_sheet_stairs"
    },
    "netherite_sheet_slab": {
      "id": "createdeco:netherite_sheet_slab"
    },
    "netherite_sheet_slab_vert": {
      "id": "createdeco:netherite_sheet_slab_vert"
    },
    "andesite_sheet_metal": {
      "id": "createdeco:andesite_sheet_metal"
    },
    "andesite_sheet_stairs": {
      "id": "createdeco:andesite_sheet_stairs"
    },
    "andesite_sheet_slab": {
      "id": "createdeco:andesite_sheet_slab"
    },
    "andesite_sheet_slab_vert": {
      "id": "createdeco:andesite_sheet_slab_vert"
    },
    "brass_sheet_metal": {
      "id": "createdeco:brass_sheet_metal"
    },
    "brass_sheet_stairs": {
      "id": "createdeco:brass_sheet_stairs"
    },
    "brass_sheet_slab": {
      "id": "createdeco:brass_sheet_slab"
    },
    "brass_sheet_slab_vert": {
      "id": "createdeco:brass_sheet_slab_vert"
    },
    "cast_iron_sheet_metal": {
      "id": "createdeco:cast_iron_sheet_metal"
    },
    "cast_iron_sheet_stairs": {
      "id": "createdeco:cast_iron_sheet_stairs"
    },
    "cast_iron_sheet_slab": {
      "id": "createdeco:cast_iron_sheet_slab"
    },
    "cast_iron_sheet_slab_vert": {
      "id": "createdeco:cast_iron_sheet_slab_vert"
    },
    "iron_sheet_metal": {
      "id": "createdeco:iron_sheet_metal"
    },
    "iron_sheet_stairs": {
      "id": "createdeco:iron_sheet_stairs"
    },
    "iron_sheet_slab": {
      "id": "createdeco:iron_sheet_slab"
    },
    "iron_sheet_slab_vert": {
      "id": "createdeco:iron_sheet_slab_vert"
    },
    "copper_sheet_metal": {
      "id": "createdeco:copper_sheet_metal"
    },
    "copper_sheet_stairs": {
      "id": "createdeco:copper_sheet_stairs"
    },
    "copper_sheet_slab": {
      "id": "createdeco:copper_sheet_slab"
    },
    "copper_sheet_slab_vert": {
      "id": "createdeco:copper_sheet_slab_vert"
    },
    "zinc_sheet_metal": {
      "id": "createdeco:zinc_sheet_metal"
    },
    "zinc_sheet_stairs": {
      "id": "createdeco:zinc_sheet_stairs"
    },
    "zinc_sheet_slab": {
      "id": "createdeco:zinc_sheet_slab"
    },
    "zinc_sheet_slab_vert": {
      "id": "createdeco:zinc_sheet_slab_vert"
    },
    "andesite_door": {
      "id": "createdeco:andesite_door"
    },
    "brass_door": {
      "id": "createdeco:brass_door"
    },
    "copper_door": {
      "id": "createdeco:copper_door"
    },
    "zinc_door": {
      "id": "createdeco:zinc_door"
    },
    "locked_andesite_door": {
      "id": "createdeco:locked_andesite_door"
    },
    "locked_brass_door": {
      "id": "createdeco:locked_brass_door"
    },
    "locked_copper_door": {
      "id": "createdeco:locked_copper_door"
    },
    "locked_zinc_door": {
      "id": "createdeco:locked_zinc_door"
    },
    "gold_bars": {
      "id": "createdeco:gold_bars"
    },
    "gold_bars_overlay": {
      "id": "createdeco:gold_bars_overlay"
    },
    "gold_mesh_fence": {
      "id": "createdeco:gold_mesh_fence"
    },
    "gold_catwalk": {
      "id": "createdeco:gold_catwalk"
    },
    "netherite_bars": {
      "id": "createdeco:netherite_bars"
    },
    "netherite_bars_overlay": {
      "id": "createdeco:netherite_bars_overlay"
    },
    "netherite_mesh_fence": {
      "id": "createdeco:netherite_mesh_fence"
    },
    "netherite_catwalk": {
      "id": "createdeco:netherite_catwalk"
    },
    "andesite_bars": {
      "id": "createdeco:andesite_bars"
    },
    "andesite_bars_overlay": {
      "id": "createdeco:andesite_bars_overlay"
    },
    "andesite_mesh_fence": {
      "id": "createdeco:andesite_mesh_fence"
    },
    "andesite_catwalk": {
      "id": "createdeco:andesite_catwalk"
    },
    "brass_bars": {
      "id": "createdeco:brass_bars"
    },
    "brass_bars_overlay": {
      "id": "createdeco:brass_bars_overlay"
    },
    "brass_mesh_fence": {
      "id": "createdeco:brass_mesh_fence"
    },
    "brass_catwalk": {
      "id": "createdeco:brass_catwalk"
    },
    "cast_iron_bars": {
      "id": "createdeco:cast_iron_bars"
    },
    "cast_iron_bars_overlay": {
      "id": "createdeco:cast_iron_bars_overlay"
    },
    "cast_iron_mesh_fence": {
      "id": "createdeco:cast_iron_mesh_fence"
    },
    "cast_iron_catwalk": {
      "id": "createdeco:cast_iron_catwalk"
    },
    "polished_iron_bars": {
      "id": "createdeco:polished_iron_bars"
    },
    "polished_iron_bars_overlay": {
      "id": "createdeco:polished_iron_bars_overlay"
    },
    "iron_bars_overlay": {
      "id": "createdeco:iron_bars_overlay"
    },
    "iron_mesh_fence": {
      "id": "createdeco:iron_mesh_fence"
    },
    "iron_catwalk": {
      "id": "createdeco:iron_catwalk"
    },
    "copper_bars": {
      "id": "createdeco:copper_bars"
    },
    "copper_bars_overlay": {
      "id": "createdeco:copper_bars_overlay"
    },
    "copper_mesh_fence": {
      "id": "createdeco:copper_mesh_fence"
    },
    "copper_catwalk": {
      "id": "createdeco:copper_catwalk"
    },
    "zinc_bars": {
      "id": "createdeco:zinc_bars"
    },
    "zinc_bars_overlay": {
      "id": "createdeco:zinc_bars_overlay"
    },
    "zinc_mesh_fence": {
      "id": "createdeco:zinc_mesh_fence"
    },
    "zinc_catwalk": {
      "id": "createdeco:zinc_catwalk"
    },
    "cast_iron_block": {
      "id": "createdeco:cast_iron_block"
    },
    "white_decal": {
      "id": "createdeco:white_decal"
    },
    "orange_decal": {
      "id": "createdeco:orange_decal"
    },
    "magenta_decal": {
      "id": "createdeco:magenta_decal"
    },
    "light_blue_decal": {
      "id": "createdeco:light_blue_decal"
    },
    "yellow_decal": {
      "id": "createdeco:yellow_decal"
    },
    "lime_decal": {
      "id": "createdeco:lime_decal"
    },
    "pink_decal": {
      "id": "createdeco:pink_decal"
    },
    "gray_decal": {
      "id": "createdeco:gray_decal"
    },
    "light_gray_decal": {
      "id": "createdeco:light_gray_decal"
    },
    "cyan_decal": {
      "id": "createdeco:cyan_decal"
    },
    "purple_decal": {
      "id": "createdeco:purple_decal"
    },
    "blue_decal": {
      "id": "createdeco:blue_decal"
    },
    "brown_decal": {
      "id": "createdeco:brown_decal"
    },
    "green_decal": {
      "id": "createdeco:green_decal"
    },
    "red_decal": {
      "id": "createdeco:red_decal"
    },
    "black_decal": {
      "id": "createdeco:black_decal"
    },
    "yellow_gold_lamp": {
      "id": "createdeco:yellow_gold_lamp"
    },
    "red_gold_lamp": {
      "id": "createdeco:red_gold_lamp"
    },
    "green_gold_lamp": {
      "id": "createdeco:green_gold_lamp"
    },
    "blue_gold_lamp": {
      "id": "createdeco:blue_gold_lamp"
    },
    "yellow_netherite_lamp": {
      "id": "createdeco:yellow_netherite_lamp"
    },
    "red_netherite_lamp": {
      "id": "createdeco:red_netherite_lamp"
    },
    "green_netherite_lamp": {
      "id": "createdeco:green_netherite_lamp"
    },
    "blue_netherite_lamp": {
      "id": "createdeco:blue_netherite_lamp"
    },
    "yellow_andesite_lamp": {
      "id": "createdeco:yellow_andesite_lamp"
    },
    "red_andesite_lamp": {
      "id": "createdeco:red_andesite_lamp"
    },
    "green_andesite_lamp": {
      "id": "createdeco:green_andesite_lamp"
    },
    "blue_andesite_lamp": {
      "id": "createdeco:blue_andesite_lamp"
    },
    "yellow_brass_lamp": {
      "id": "createdeco:yellow_brass_lamp"
    },
    "red_brass_lamp": {
      "id": "createdeco:red_brass_lamp"
    },
    "green_brass_lamp": {
      "id": "createdeco:green_brass_lamp"
    },
    "blue_brass_lamp": {
      "id": "createdeco:blue_brass_lamp"
    },
    "yellow_cast_iron_lamp": {
      "id": "createdeco:yellow_cast_iron_lamp"
    },
    "red_cast_iron_lamp": {
      "id": "createdeco:red_cast_iron_lamp"
    },
    "green_cast_iron_lamp": {
      "id": "createdeco:green_cast_iron_lamp"
    },
    "blue_cast_iron_lamp": {
      "id": "createdeco:blue_cast_iron_lamp"
    },
    "yellow_iron_lamp": {
      "id": "createdeco:yellow_iron_lamp"
    },
    "red_iron_lamp": {
      "id": "createdeco:red_iron_lamp"
    },
    "green_iron_lamp": {
      "id": "createdeco:green_iron_lamp"
    },
    "blue_iron_lamp": {
      "id": "createdeco:blue_iron_lamp"
    },
    "yellow_copper_lamp": {
      "id": "createdeco:yellow_copper_lamp"
    },
    "red_copper_lamp": {
      "id": "createdeco:red_copper_lamp"
    },
    "green_copper_lamp": {
      "id": "createdeco:green_copper_lamp"
    },
    "blue_copper_lamp": {
      "id": "createdeco:blue_copper_lamp"
    },
    "yellow_zinc_lamp": {
      "id": "createdeco:yellow_zinc_lamp"
    },
    "red_zinc_lamp": {
      "id": "createdeco:red_zinc_lamp"
    },
    "green_zinc_lamp": {
      "id": "createdeco:green_zinc_lamp"
    },
    "blue_zinc_lamp": {
      "id": "createdeco:blue_zinc_lamp"
    }
  },
  "create_mechanical_extruder": {
    "id": "create_mechanical_extruder:mechanical_extruder",
    "mechanical_extruder": {
      "id": "create_mechanical_extruder:mechanical_extruder"
    }
  },
  "createplus": {
    "id": "createplus:goggle_chainmail_helmet",
    "goggle_chainmail_helmet": {
      "id": "createplus:goggle_chainmail_helmet"
    },
    "goggle_diamond_helmet": {
      "id": "createplus:goggle_diamond_helmet"
    },
    "goggle_golden_helmet": {
      "id": "createplus:goggle_golden_helmet"
    },
    "goggle_iron_helmet": {
      "id": "createplus:goggle_iron_helmet"
    },
    "goggle_leather_helmet": {
      "id": "createplus:goggle_leather_helmet"
    },
    "goggle_turtle_helmet": {
      "id": "createplus:goggle_turtle_helmet"
    },
    "goggle_netherite_helmet": {
      "id": "createplus:goggle_netherite_helmet"
    },
    "goggle_diving_helmet": {
      "id": "createplus:goggle_diving_helmet"
    }
  },
  "ars_creo": {
    "id": "ars_creo:starbuncle_wheel",
    "starbuncle_wheel": {
      "id": "ars_creo:starbuncle_wheel"
    }
  },
  "createsifter": {
    "id": "createsifter:sifter",
    "sifter": {
      "id": "createsifter:sifter"
    },
    "string_mesh": {
      "id": "createsifter:string_mesh"
    },
    "andesite_mesh": {
      "id": "createsifter:andesite_mesh"
    },
    "zinc_mesh": {
      "id": "createsifter:zinc_mesh"
    },
    "brass_mesh": {
      "id": "createsifter:brass_mesh"
    },
    "custom_mesh": {
      "id": "createsifter:custom_mesh"
    }
  },
  "integrateddynamics": {
    "id": "integrateddynamics:bucket_liquid_chorus",
    "bucket_liquid_chorus": {
      "id": "integrateddynamics:bucket_liquid_chorus"
    },
    "bucket_menril_resin": {
      "id": "integrateddynamics:bucket_menril_resin"
    },
    "wrench": {
      "id": "integrateddynamics:wrench"
    },
    "variable": {
      "id": "integrateddynamics:variable"
    },
    "labeller": {
      "id": "integrateddynamics:labeller"
    },
    "facade": {
      "id": "integrateddynamics:facade"
    },
    "crystalized_menril_chunk": {
      "id": "integrateddynamics:crystalized_menril_chunk"
    },
    "variable_transformer_input": {
      "id": "integrateddynamics:variable_transformer_input"
    },
    "variable_transformer_output": {
      "id": "integrateddynamics:variable_transformer_output"
    },
    "menril_berries": {
      "id": "integrateddynamics:menril_berries"
    },
    "portable_logic_programmer": {
      "id": "integrateddynamics:portable_logic_programmer"
    },
    "on_the_dynamics_of_integration": {
      "id": "integrateddynamics:on_the_dynamics_of_integration"
    },
    "crystalized_chorus_chunk": {
      "id": "integrateddynamics:crystalized_chorus_chunk"
    },
    "logic_director": {
      "id": "integrateddynamics:logic_director"
    },
    "proto_chorus": {
      "id": "integrateddynamics:proto_chorus"
    },
    "cable": {
      "id": "integrateddynamics:cable"
    },
    "variablestore": {
      "id": "integrateddynamics:variablestore"
    },
    "logic_programmer": {
      "id": "integrateddynamics:logic_programmer"
    },
    "energy_battery": {
      "id": "integrateddynamics:energy_battery"
    },
    "energy_battery_creative": {
      "id": "integrateddynamics:energy_battery_creative"
    },
    "coal_generator": {
      "id": "integrateddynamics:coal_generator"
    },
    "proxy": {
      "id": "integrateddynamics:proxy"
    },
    "materializer": {
      "id": "integrateddynamics:materializer"
    },
    "menril_log": {
      "id": "integrateddynamics:menril_log"
    },
    "menril_log_stripped": {
      "id": "integrateddynamics:menril_log_stripped"
    },
    "menril_wood": {
      "id": "integrateddynamics:menril_wood"
    },
    "menril_wood_stripped": {
      "id": "integrateddynamics:menril_wood_stripped"
    },
    "menril_log_filled": {
      "id": "integrateddynamics:menril_log_filled"
    },
    "menril_leaves": {
      "id": "integrateddynamics:menril_leaves"
    },
    "menril_sapling": {
      "id": "integrateddynamics:menril_sapling"
    },
    "menril_planks": {
      "id": "integrateddynamics:menril_planks"
    },
    "menril_slab": {
      "id": "integrateddynamics:menril_slab"
    },
    "menril_fence": {
      "id": "integrateddynamics:menril_fence"
    },
    "menril_fence_gate": {
      "id": "integrateddynamics:menril_fence_gate"
    },
    "crystalized_menril_block": {
      "id": "integrateddynamics:crystalized_menril_block"
    },
    "crystalized_menril_brick": {
      "id": "integrateddynamics:crystalized_menril_brick"
    },
    "drying_basin": {
      "id": "integrateddynamics:drying_basin"
    },
    "squeezer": {
      "id": "integrateddynamics:squeezer"
    },
    "menril_door": {
      "id": "integrateddynamics:menril_door"
    },
    "menril_torch": {
      "id": "integrateddynamics:menril_torch"
    },
    "menril_torch_stone": {
      "id": "integrateddynamics:menril_torch_stone"
    },
    "menril_planks_stairs": {
      "id": "integrateddynamics:menril_planks_stairs"
    },
    "crystalized_menril_block_stairs": {
      "id": "integrateddynamics:crystalized_menril_block_stairs"
    },
    "crystalized_menril_brick_stairs": {
      "id": "integrateddynamics:crystalized_menril_brick_stairs"
    },
    "delay": {
      "id": "integrateddynamics:delay"
    },
    "crystalized_chorus_block": {
      "id": "integrateddynamics:crystalized_chorus_block"
    },
    "crystalized_chorus_brick": {
      "id": "integrateddynamics:crystalized_chorus_brick"
    },
    "crystalized_chorus_block_stairs": {
      "id": "integrateddynamics:crystalized_chorus_block_stairs"
    },
    "crystalized_chorus_brick_stairs": {
      "id": "integrateddynamics:crystalized_chorus_brick_stairs"
    },
    "mechanical_squeezer": {
      "id": "integrateddynamics:mechanical_squeezer"
    },
    "mechanical_drying_basin": {
      "id": "integrateddynamics:mechanical_drying_basin"
    },
    "crystalized_menril_block_slab": {
      "id": "integrateddynamics:crystalized_menril_block_slab"
    },
    "crystalized_menril_brick_slab": {
      "id": "integrateddynamics:crystalized_menril_brick_slab"
    },
    "crystalized_chorus_block_slab": {
      "id": "integrateddynamics:crystalized_chorus_block_slab"
    },
    "crystalized_chorus_brick_slab": {
      "id": "integrateddynamics:crystalized_chorus_brick_slab"
    },
    "part_audio_reader": {
      "id": "integrateddynamics:part_audio_reader"
    },
    "part_block_reader": {
      "id": "integrateddynamics:part_block_reader"
    },
    "part_entity_reader": {
      "id": "integrateddynamics:part_entity_reader"
    },
    "part_extradimensional_reader": {
      "id": "integrateddynamics:part_extradimensional_reader"
    },
    "part_fluid_reader": {
      "id": "integrateddynamics:part_fluid_reader"
    },
    "part_inventory_reader": {
      "id": "integrateddynamics:part_inventory_reader"
    },
    "part_machine_reader": {
      "id": "integrateddynamics:part_machine_reader"
    },
    "part_network_reader": {
      "id": "integrateddynamics:part_network_reader"
    },
    "part_redstone_reader": {
      "id": "integrateddynamics:part_redstone_reader"
    },
    "part_world_reader": {
      "id": "integrateddynamics:part_world_reader"
    },
    "part_audio_writer": {
      "id": "integrateddynamics:part_audio_writer"
    },
    "part_effect_writer": {
      "id": "integrateddynamics:part_effect_writer"
    },
    "part_entity_writer": {
      "id": "integrateddynamics:part_entity_writer"
    },
    "part_machine_writer": {
      "id": "integrateddynamics:part_machine_writer"
    },
    "part_inventory_writer": {
      "id": "integrateddynamics:part_inventory_writer"
    },
    "part_redstone_writer": {
      "id": "integrateddynamics:part_redstone_writer"
    },
    "part_static_light_panel": {
      "id": "integrateddynamics:part_static_light_panel"
    },
    "part_dynamic_light_panel": {
      "id": "integrateddynamics:part_dynamic_light_panel"
    },
    "part_display_panel": {
      "id": "integrateddynamics:part_display_panel"
    },
    "part_connector_mono_directional": {
      "id": "integrateddynamics:part_connector_mono_directional"
    },
    "part_connector_omni_directional": {
      "id": "integrateddynamics:part_connector_omni_directional"
    }
  },
  "integratednbt": {
    "id": "integratednbt:nbt_extractor",
    "nbt_extractor": {
      "id": "integratednbt:nbt_extractor"
    },
    "nbt_extractor_remote": {
      "id": "integratednbt:nbt_extractor_remote"
    }
  },
  "create_sa": {
    "id": "create_sa:steam_engine",
    "steam_engine": {
      "id": "create_sa:steam_engine"
    },
    "heat_engine": {
      "id": "create_sa:heat_engine"
    },
    "hydraulic_engine": {
      "id": "create_sa:hydraulic_engine"
    },
    "brass_jetpack_chestplate": {
      "id": "create_sa:brass_jetpack_chestplate"
    },
    "andesite_jetpack_chestplate": {
      "id": "create_sa:andesite_jetpack_chestplate"
    },
    "copper_jetpack_chestplate": {
      "id": "create_sa:copper_jetpack_chestplate"
    },
    "brass_exoskeleton_chestplate": {
      "id": "create_sa:brass_exoskeleton_chestplate"
    },
    "andesite_exoskeleton_chestplate": {
      "id": "create_sa:andesite_exoskeleton_chestplate"
    },
    "copper_exoskeleton_chestplate": {
      "id": "create_sa:copper_exoskeleton_chestplate"
    },
    "small_filling_tank": {
      "id": "create_sa:small_filling_tank"
    },
    "medium_filling_tank": {
      "id": "create_sa:medium_filling_tank"
    },
    "large_filling_tank": {
      "id": "create_sa:large_filling_tank"
    },
    "drone_controller": {
      "id": "create_sa:drone_controller"
    },
    "blazing_pickaxe": {
      "id": "create_sa:blazing_pickaxe"
    },
    "blazing_shovel": {
      "id": "create_sa:blazing_shovel"
    },
    "blazing_axe": {
      "id": "create_sa:blazing_axe"
    },
    "blazing_cleaver": {
      "id": "create_sa:blazing_cleaver"
    },
    "brass_drone_item": {
      "id": "create_sa:brass_drone_item"
    },
    "copper_magnet": {
      "id": "create_sa:copper_magnet"
    },
    "brass_drill_head": {
      "id": "create_sa:brass_drill_head"
    },
    "fan_component": {
      "id": "create_sa:fan_component"
    },
    "vault_component": {
      "id": "create_sa:vault_component"
    },
    "rose_quartz_pickaxe": {
      "id": "create_sa:rose_quartz_pickaxe"
    },
    "rose_quartz_shovel": {
      "id": "create_sa:rose_quartz_shovel"
    },
    "rose_quartz_axe": {
      "id": "create_sa:rose_quartz_axe"
    },
    "rose_quartz_sword": {
      "id": "create_sa:rose_quartz_sword"
    },
    "zinc_handle": {
      "id": "create_sa:zinc_handle"
    },
    "brass_helmet": {
      "id": "create_sa:brass_helmet"
    },
    "brass_chestplate": {
      "id": "create_sa:brass_chestplate"
    },
    "brass_leggings": {
      "id": "create_sa:brass_leggings"
    },
    "brass_boots": {
      "id": "create_sa:brass_boots"
    },
    "brass_pickaxe": {
      "id": "create_sa:brass_pickaxe"
    },
    "brass_axe": {
      "id": "create_sa:brass_axe"
    },
    "brass_sword": {
      "id": "create_sa:brass_sword"
    },
    "brass_shovel": {
      "id": "create_sa:brass_shovel"
    },
    "brass_hoe": {
      "id": "create_sa:brass_hoe"
    },
    "zinc_helmet": {
      "id": "create_sa:zinc_helmet"
    },
    "zinc_chestplate": {
      "id": "create_sa:zinc_chestplate"
    },
    "zinc_leggings": {
      "id": "create_sa:zinc_leggings"
    },
    "zinc_boots": {
      "id": "create_sa:zinc_boots"
    },
    "zinc_pickaxe": {
      "id": "create_sa:zinc_pickaxe"
    },
    "zinc_axe": {
      "id": "create_sa:zinc_axe"
    },
    "zinc_sword": {
      "id": "create_sa:zinc_sword"
    },
    "zinc_shovel": {
      "id": "create_sa:zinc_shovel"
    },
    "zinc_hoe": {
      "id": "create_sa:zinc_hoe"
    },
    "copper_helmet": {
      "id": "create_sa:copper_helmet"
    },
    "copper_chestplate": {
      "id": "create_sa:copper_chestplate"
    },
    "copper_leggings": {
      "id": "create_sa:copper_leggings"
    },
    "copper_boots": {
      "id": "create_sa:copper_boots"
    },
    "copper_pickaxe": {
      "id": "create_sa:copper_pickaxe"
    },
    "copper_axe": {
      "id": "create_sa:copper_axe"
    },
    "copper_sword": {
      "id": "create_sa:copper_sword"
    },
    "copper_shovel": {
      "id": "create_sa:copper_shovel"
    },
    "copper_hoe": {
      "id": "create_sa:copper_hoe"
    },
    "small_fueling_tank": {
      "id": "create_sa:small_fueling_tank"
    },
    "medium_fueling_tank": {
      "id": "create_sa:medium_fueling_tank"
    },
    "large_fueling_tank": {
      "id": "create_sa:large_fueling_tank"
    },
    "flamethrower": {
      "id": "create_sa:flamethrower"
    },
    "experience_pickaxe": {
      "id": "create_sa:experience_pickaxe"
    },
    "experience_shovel": {
      "id": "create_sa:experience_shovel"
    },
    "experience_axe": {
      "id": "create_sa:experience_axe"
    },
    "experience_sword": {
      "id": "create_sa:experience_sword"
    },
    "heap_of_experience": {
      "id": "create_sa:heap_of_experience"
    },
    "slime_helmet": {
      "id": "create_sa:slime_helmet"
    },
    "slime_boots": {
      "id": "create_sa:slime_boots"
    },
    "creative_filling_tank": {
      "id": "create_sa:creative_filling_tank"
    },
    "portable_drill": {
      "id": "create_sa:portable_drill"
    },
    "grapplin_whisk": {
      "id": "create_sa:grapplin_whisk"
    },
    "block_picker": {
      "id": "create_sa:block_picker"
    }
  },
  "experienceobelisk": {
    "id": "experienceobelisk:experience_obelisk",
    "experience_obelisk": {
      "id": "experienceobelisk:experience_obelisk"
    },
    "raw_experience_bucket": {
      "id": "experienceobelisk:raw_experience_bucket"
    }
  },
  "quark": {
    "id": "quark:moss_paste",
    "moss_paste": {
      "id": "quark:moss_paste"
    },
    "midori_block": {
      "id": "quark:midori_block"
    },
    "midori_block_slab": {
      "id": "quark:midori_block_slab"
    },
    "midori_block_stairs": {
      "id": "quark:midori_block_stairs"
    },
    "midori_pillar": {
      "id": "quark:midori_pillar"
    },
    "vertical_oak_planks": {
      "id": "quark:vertical_oak_planks"
    },
    "vertical_spruce_planks": {
      "id": "quark:vertical_spruce_planks"
    },
    "vertical_birch_planks": {
      "id": "quark:vertical_birch_planks"
    },
    "vertical_jungle_planks": {
      "id": "quark:vertical_jungle_planks"
    },
    "vertical_acacia_planks": {
      "id": "quark:vertical_acacia_planks"
    },
    "vertical_dark_oak_planks": {
      "id": "quark:vertical_dark_oak_planks"
    },
    "vertical_crimson_planks": {
      "id": "quark:vertical_crimson_planks"
    },
    "vertical_warped_planks": {
      "id": "quark:vertical_warped_planks"
    },
    "vertical_mangrove_planks": {
      "id": "quark:vertical_mangrove_planks"
    },
    "oak_leaf_carpet": {
      "id": "quark:oak_leaf_carpet"
    },
    "spruce_leaf_carpet": {
      "id": "quark:spruce_leaf_carpet"
    },
    "birch_leaf_carpet": {
      "id": "quark:birch_leaf_carpet"
    },
    "jungle_leaf_carpet": {
      "id": "quark:jungle_leaf_carpet"
    },
    "acacia_leaf_carpet": {
      "id": "quark:acacia_leaf_carpet"
    },
    "dark_oak_leaf_carpet": {
      "id": "quark:dark_oak_leaf_carpet"
    },
    "mangrove_leaf_carpet": {
      "id": "quark:mangrove_leaf_carpet"
    },
    "azalea_leaf_carpet": {
      "id": "quark:azalea_leaf_carpet"
    },
    "flowering_azalea_leaf_carpet": {
      "id": "quark:flowering_azalea_leaf_carpet"
    },
    "shiba_spawn_egg": {
      "id": "quark:shiba_spawn_egg"
    },
    "raw_iron_bricks": {
      "id": "quark:raw_iron_bricks"
    },
    "raw_gold_bricks": {
      "id": "quark:raw_gold_bricks"
    },
    "raw_copper_bricks": {
      "id": "quark:raw_copper_bricks"
    },
    "raw_iron_bricks_slab": {
      "id": "quark:raw_iron_bricks_slab"
    },
    "raw_iron_bricks_stairs": {
      "id": "quark:raw_iron_bricks_stairs"
    },
    "raw_gold_bricks_slab": {
      "id": "quark:raw_gold_bricks_slab"
    },
    "raw_gold_bricks_stairs": {
      "id": "quark:raw_gold_bricks_stairs"
    },
    "raw_copper_bricks_slab": {
      "id": "quark:raw_copper_bricks_slab"
    },
    "raw_copper_bricks_stairs": {
      "id": "quark:raw_copper_bricks_stairs"
    },
    "slime_in_a_bucket": {
      "id": "quark:slime_in_a_bucket"
    },
    "toretoise_spawn_egg": {
      "id": "quark:toretoise_spawn_egg"
    },
    "blue_nether_bricks": {
      "id": "quark:blue_nether_bricks"
    },
    "blue_nether_bricks_slab": {
      "id": "quark:blue_nether_bricks_slab"
    },
    "blue_nether_bricks_stairs": {
      "id": "quark:blue_nether_bricks_stairs"
    },
    "blue_nether_bricks_wall": {
      "id": "quark:blue_nether_bricks_wall"
    },
    "sandstone_bricks": {
      "id": "quark:sandstone_bricks"
    },
    "sandstone_bricks_slab": {
      "id": "quark:sandstone_bricks_slab"
    },
    "sandstone_bricks_stairs": {
      "id": "quark:sandstone_bricks_stairs"
    },
    "sandstone_bricks_wall": {
      "id": "quark:sandstone_bricks_wall"
    },
    "red_sandstone_bricks": {
      "id": "quark:red_sandstone_bricks"
    },
    "red_sandstone_bricks_slab": {
      "id": "quark:red_sandstone_bricks_slab"
    },
    "red_sandstone_bricks_stairs": {
      "id": "quark:red_sandstone_bricks_stairs"
    },
    "red_sandstone_bricks_wall": {
      "id": "quark:red_sandstone_bricks_wall"
    },
    "soul_sandstone_bricks": {
      "id": "quark:soul_sandstone_bricks"
    },
    "soul_sandstone_bricks_slab": {
      "id": "quark:soul_sandstone_bricks_slab"
    },
    "soul_sandstone_bricks_stairs": {
      "id": "quark:soul_sandstone_bricks_stairs"
    },
    "soul_sandstone_bricks_wall": {
      "id": "quark:soul_sandstone_bricks_wall"
    },
    "cobblestone_bricks": {
      "id": "quark:cobblestone_bricks"
    },
    "cobblestone_bricks_slab": {
      "id": "quark:cobblestone_bricks_slab"
    },
    "cobblestone_bricks_stairs": {
      "id": "quark:cobblestone_bricks_stairs"
    },
    "cobblestone_bricks_wall": {
      "id": "quark:cobblestone_bricks_wall"
    },
    "mossy_cobblestone_bricks": {
      "id": "quark:mossy_cobblestone_bricks"
    },
    "mossy_cobblestone_bricks_slab": {
      "id": "quark:mossy_cobblestone_bricks_slab"
    },
    "mossy_cobblestone_bricks_stairs": {
      "id": "quark:mossy_cobblestone_bricks_stairs"
    },
    "mossy_cobblestone_bricks_wall": {
      "id": "quark:mossy_cobblestone_bricks_wall"
    },
    "blackstone_bricks": {
      "id": "quark:blackstone_bricks"
    },
    "blackstone_bricks_slab": {
      "id": "quark:blackstone_bricks_slab"
    },
    "blackstone_bricks_stairs": {
      "id": "quark:blackstone_bricks_stairs"
    },
    "blackstone_bricks_wall": {
      "id": "quark:blackstone_bricks_wall"
    },
    "dirt_bricks": {
      "id": "quark:dirt_bricks"
    },
    "dirt_bricks_slab": {
      "id": "quark:dirt_bricks_slab"
    },
    "dirt_bricks_stairs": {
      "id": "quark:dirt_bricks_stairs"
    },
    "dirt_bricks_wall": {
      "id": "quark:dirt_bricks_wall"
    },
    "netherrack_bricks": {
      "id": "quark:netherrack_bricks"
    },
    "netherrack_bricks_slab": {
      "id": "quark:netherrack_bricks_slab"
    },
    "netherrack_bricks_stairs": {
      "id": "quark:netherrack_bricks_stairs"
    },
    "netherrack_bricks_wall": {
      "id": "quark:netherrack_bricks_wall"
    },
    "spruce_bookshelf": {
      "id": "quark:spruce_bookshelf"
    },
    "birch_bookshelf": {
      "id": "quark:birch_bookshelf"
    },
    "jungle_bookshelf": {
      "id": "quark:jungle_bookshelf"
    },
    "acacia_bookshelf": {
      "id": "quark:acacia_bookshelf"
    },
    "dark_oak_bookshelf": {
      "id": "quark:dark_oak_bookshelf"
    },
    "crimson_bookshelf": {
      "id": "quark:crimson_bookshelf"
    },
    "warped_bookshelf": {
      "id": "quark:warped_bookshelf"
    },
    "mangrove_bookshelf": {
      "id": "quark:mangrove_bookshelf"
    },
    "sturdy_stone": {
      "id": "quark:sturdy_stone"
    },
    "soul_bead": {
      "id": "quark:soul_bead"
    },
    "wraith_spawn_egg": {
      "id": "quark:wraith_spawn_egg"
    },
    "ancient_tome": {
      "id": "quark:ancient_tome"
    },
    "oak_hedge": {
      "id": "quark:oak_hedge"
    },
    "spruce_hedge": {
      "id": "quark:spruce_hedge"
    },
    "birch_hedge": {
      "id": "quark:birch_hedge"
    },
    "jungle_hedge": {
      "id": "quark:jungle_hedge"
    },
    "acacia_hedge": {
      "id": "quark:acacia_hedge"
    },
    "dark_oak_hedge": {
      "id": "quark:dark_oak_hedge"
    },
    "mangrove_hedge": {
      "id": "quark:mangrove_hedge"
    },
    "azalea_hedge": {
      "id": "quark:azalea_hedge"
    },
    "flowering_azalea_hedge": {
      "id": "quark:flowering_azalea_hedge"
    },
    "abacus": {
      "id": "quark:abacus"
    },
    "tiny_potato": {
      "id": "quark:tiny_potato"
    },
    "azalea_log": {
      "id": "quark:azalea_log"
    },
    "azalea_wood": {
      "id": "quark:azalea_wood"
    },
    "stripped_azalea_log": {
      "id": "quark:stripped_azalea_log"
    },
    "stripped_azalea_wood": {
      "id": "quark:stripped_azalea_wood"
    },
    "azalea_planks": {
      "id": "quark:azalea_planks"
    },
    "azalea_planks_slab": {
      "id": "quark:azalea_planks_slab"
    },
    "azalea_planks_stairs": {
      "id": "quark:azalea_planks_stairs"
    },
    "azalea_fence": {
      "id": "quark:azalea_fence"
    },
    "azalea_fence_gate": {
      "id": "quark:azalea_fence_gate"
    },
    "azalea_door": {
      "id": "quark:azalea_door"
    },
    "azalea_trapdoor": {
      "id": "quark:azalea_trapdoor"
    },
    "azalea_button": {
      "id": "quark:azalea_button"
    },
    "azalea_pressure_plate": {
      "id": "quark:azalea_pressure_plate"
    },
    "azalea_bookshelf": {
      "id": "quark:azalea_bookshelf"
    },
    "azalea_ladder": {
      "id": "quark:azalea_ladder"
    },
    "azalea_post": {
      "id": "quark:azalea_post"
    },
    "stripped_azalea_post": {
      "id": "quark:stripped_azalea_post"
    },
    "vertical_azalea_planks": {
      "id": "quark:vertical_azalea_planks"
    },
    "hollow_azalea_log": {
      "id": "quark:hollow_azalea_log"
    },
    "azalea_sign": {
      "id": "quark:azalea_sign"
    },
    "azalea_boat": {
      "id": "quark:azalea_boat"
    },
    "azalea_chest_boat": {
      "id": "quark:azalea_chest_boat"
    },
    "hollow_oak_log": {
      "id": "quark:hollow_oak_log"
    },
    "hollow_spruce_log": {
      "id": "quark:hollow_spruce_log"
    },
    "hollow_birch_log": {
      "id": "quark:hollow_birch_log"
    },
    "hollow_jungle_log": {
      "id": "quark:hollow_jungle_log"
    },
    "hollow_acacia_log": {
      "id": "quark:hollow_acacia_log"
    },
    "hollow_dark_oak_log": {
      "id": "quark:hollow_dark_oak_log"
    },
    "hollow_crimson_stem": {
      "id": "quark:hollow_crimson_stem"
    },
    "hollow_warped_stem": {
      "id": "quark:hollow_warped_stem"
    },
    "hollow_mangrove_log": {
      "id": "quark:hollow_mangrove_log"
    },
    "rope": {
      "id": "quark:rope"
    },
    "framed_glass": {
      "id": "quark:framed_glass"
    },
    "framed_glass_pane": {
      "id": "quark:framed_glass_pane"
    },
    "white_framed_glass": {
      "id": "quark:white_framed_glass"
    },
    "white_framed_glass_pane": {
      "id": "quark:white_framed_glass_pane"
    },
    "orange_framed_glass": {
      "id": "quark:orange_framed_glass"
    },
    "orange_framed_glass_pane": {
      "id": "quark:orange_framed_glass_pane"
    },
    "magenta_framed_glass": {
      "id": "quark:magenta_framed_glass"
    },
    "magenta_framed_glass_pane": {
      "id": "quark:magenta_framed_glass_pane"
    },
    "light_blue_framed_glass": {
      "id": "quark:light_blue_framed_glass"
    },
    "light_blue_framed_glass_pane": {
      "id": "quark:light_blue_framed_glass_pane"
    },
    "yellow_framed_glass": {
      "id": "quark:yellow_framed_glass"
    },
    "yellow_framed_glass_pane": {
      "id": "quark:yellow_framed_glass_pane"
    },
    "lime_framed_glass": {
      "id": "quark:lime_framed_glass"
    },
    "lime_framed_glass_pane": {
      "id": "quark:lime_framed_glass_pane"
    },
    "pink_framed_glass": {
      "id": "quark:pink_framed_glass"
    },
    "pink_framed_glass_pane": {
      "id": "quark:pink_framed_glass_pane"
    },
    "gray_framed_glass": {
      "id": "quark:gray_framed_glass"
    },
    "gray_framed_glass_pane": {
      "id": "quark:gray_framed_glass_pane"
    },
    "light_gray_framed_glass": {
      "id": "quark:light_gray_framed_glass"
    },
    "light_gray_framed_glass_pane": {
      "id": "quark:light_gray_framed_glass_pane"
    },
    "cyan_framed_glass": {
      "id": "quark:cyan_framed_glass"
    },
    "cyan_framed_glass_pane": {
      "id": "quark:cyan_framed_glass_pane"
    },
    "purple_framed_glass": {
      "id": "quark:purple_framed_glass"
    },
    "purple_framed_glass_pane": {
      "id": "quark:purple_framed_glass_pane"
    },
    "blue_framed_glass": {
      "id": "quark:blue_framed_glass"
    },
    "blue_framed_glass_pane": {
      "id": "quark:blue_framed_glass_pane"
    },
    "brown_framed_glass": {
      "id": "quark:brown_framed_glass"
    },
    "brown_framed_glass_pane": {
      "id": "quark:brown_framed_glass_pane"
    },
    "green_framed_glass": {
      "id": "quark:green_framed_glass"
    },
    "green_framed_glass_pane": {
      "id": "quark:green_framed_glass_pane"
    },
    "red_framed_glass": {
      "id": "quark:red_framed_glass"
    },
    "red_framed_glass_pane": {
      "id": "quark:red_framed_glass_pane"
    },
    "black_framed_glass": {
      "id": "quark:black_framed_glass"
    },
    "black_framed_glass_pane": {
      "id": "quark:black_framed_glass_pane"
    },
    "magnet": {
      "id": "quark:magnet"
    },
    "bottled_cloud": {
      "id": "quark:bottled_cloud"
    },
    "music_disc_endermosh": {
      "id": "quark:music_disc_endermosh"
    },
    "grate": {
      "id": "quark:grate"
    },
    "white_rune": {
      "id": "quark:white_rune"
    },
    "orange_rune": {
      "id": "quark:orange_rune"
    },
    "magenta_rune": {
      "id": "quark:magenta_rune"
    },
    "light_blue_rune": {
      "id": "quark:light_blue_rune"
    },
    "yellow_rune": {
      "id": "quark:yellow_rune"
    },
    "lime_rune": {
      "id": "quark:lime_rune"
    },
    "pink_rune": {
      "id": "quark:pink_rune"
    },
    "gray_rune": {
      "id": "quark:gray_rune"
    },
    "light_gray_rune": {
      "id": "quark:light_gray_rune"
    },
    "cyan_rune": {
      "id": "quark:cyan_rune"
    },
    "purple_rune": {
      "id": "quark:purple_rune"
    },
    "blue_rune": {
      "id": "quark:blue_rune"
    },
    "brown_rune": {
      "id": "quark:brown_rune"
    },
    "green_rune": {
      "id": "quark:green_rune"
    },
    "red_rune": {
      "id": "quark:red_rune"
    },
    "black_rune": {
      "id": "quark:black_rune"
    },
    "rainbow_rune": {
      "id": "quark:rainbow_rune"
    },
    "blank_rune": {
      "id": "quark:blank_rune"
    },
    "forgotten_hat": {
      "id": "quark:forgotten_hat"
    },
    "forgotten_spawn_egg": {
      "id": "quark:forgotten_spawn_egg"
    },
    "red_corundum": {
      "id": "quark:red_corundum"
    },
    "waxed_red_corundum": {
      "id": "quark:waxed_red_corundum"
    },
    "red_corundum_pane": {
      "id": "quark:red_corundum_pane"
    },
    "red_corundum_cluster": {
      "id": "quark:red_corundum_cluster"
    },
    "orange_corundum": {
      "id": "quark:orange_corundum"
    },
    "waxed_orange_corundum": {
      "id": "quark:waxed_orange_corundum"
    },
    "orange_corundum_pane": {
      "id": "quark:orange_corundum_pane"
    },
    "orange_corundum_cluster": {
      "id": "quark:orange_corundum_cluster"
    },
    "yellow_corundum": {
      "id": "quark:yellow_corundum"
    },
    "waxed_yellow_corundum": {
      "id": "quark:waxed_yellow_corundum"
    },
    "yellow_corundum_pane": {
      "id": "quark:yellow_corundum_pane"
    },
    "yellow_corundum_cluster": {
      "id": "quark:yellow_corundum_cluster"
    },
    "green_corundum": {
      "id": "quark:green_corundum"
    },
    "waxed_green_corundum": {
      "id": "quark:waxed_green_corundum"
    },
    "green_corundum_pane": {
      "id": "quark:green_corundum_pane"
    },
    "green_corundum_cluster": {
      "id": "quark:green_corundum_cluster"
    },
    "blue_corundum": {
      "id": "quark:blue_corundum"
    },
    "waxed_blue_corundum": {
      "id": "quark:waxed_blue_corundum"
    },
    "blue_corundum_pane": {
      "id": "quark:blue_corundum_pane"
    },
    "blue_corundum_cluster": {
      "id": "quark:blue_corundum_cluster"
    },
    "indigo_corundum": {
      "id": "quark:indigo_corundum"
    },
    "waxed_indigo_corundum": {
      "id": "quark:waxed_indigo_corundum"
    },
    "indigo_corundum_pane": {
      "id": "quark:indigo_corundum_pane"
    },
    "indigo_corundum_cluster": {
      "id": "quark:indigo_corundum_cluster"
    },
    "violet_corundum": {
      "id": "quark:violet_corundum"
    },
    "waxed_violet_corundum": {
      "id": "quark:waxed_violet_corundum"
    },
    "violet_corundum_pane": {
      "id": "quark:violet_corundum_pane"
    },
    "violet_corundum_cluster": {
      "id": "quark:violet_corundum_cluster"
    },
    "white_corundum": {
      "id": "quark:white_corundum"
    },
    "waxed_white_corundum": {
      "id": "quark:waxed_white_corundum"
    },
    "white_corundum_pane": {
      "id": "quark:white_corundum_pane"
    },
    "white_corundum_cluster": {
      "id": "quark:white_corundum_cluster"
    },
    "black_corundum": {
      "id": "quark:black_corundum"
    },
    "waxed_black_corundum": {
      "id": "quark:waxed_black_corundum"
    },
    "black_corundum_pane": {
      "id": "quark:black_corundum_pane"
    },
    "black_corundum_cluster": {
      "id": "quark:black_corundum_cluster"
    },
    "chorus_weeds": {
      "id": "quark:chorus_weeds"
    },
    "chorus_twist": {
      "id": "quark:chorus_twist"
    },
    "diamond_heart": {
      "id": "quark:diamond_heart"
    },
    "stoneling_spawn_egg": {
      "id": "quark:stoneling_spawn_egg"
    },
    "permafrost": {
      "id": "quark:permafrost"
    },
    "permafrost_slab": {
      "id": "quark:permafrost_slab"
    },
    "permafrost_stairs": {
      "id": "quark:permafrost_stairs"
    },
    "permafrost_wall": {
      "id": "quark:permafrost_wall"
    },
    "permafrost_bricks": {
      "id": "quark:permafrost_bricks"
    },
    "permafrost_bricks_slab": {
      "id": "quark:permafrost_bricks_slab"
    },
    "permafrost_bricks_stairs": {
      "id": "quark:permafrost_bricks_stairs"
    },
    "permafrost_bricks_wall": {
      "id": "quark:permafrost_bricks_wall"
    },
    "blossom_log": {
      "id": "quark:blossom_log"
    },
    "blossom_wood": {
      "id": "quark:blossom_wood"
    },
    "stripped_blossom_log": {
      "id": "quark:stripped_blossom_log"
    },
    "stripped_blossom_wood": {
      "id": "quark:stripped_blossom_wood"
    },
    "blossom_planks": {
      "id": "quark:blossom_planks"
    },
    "blossom_planks_slab": {
      "id": "quark:blossom_planks_slab"
    },
    "blossom_planks_stairs": {
      "id": "quark:blossom_planks_stairs"
    },
    "blossom_fence": {
      "id": "quark:blossom_fence"
    },
    "blossom_fence_gate": {
      "id": "quark:blossom_fence_gate"
    },
    "blossom_door": {
      "id": "quark:blossom_door"
    },
    "blossom_trapdoor": {
      "id": "quark:blossom_trapdoor"
    },
    "blossom_button": {
      "id": "quark:blossom_button"
    },
    "blossom_pressure_plate": {
      "id": "quark:blossom_pressure_plate"
    },
    "blossom_bookshelf": {
      "id": "quark:blossom_bookshelf"
    },
    "blossom_ladder": {
      "id": "quark:blossom_ladder"
    },
    "blossom_post": {
      "id": "quark:blossom_post"
    },
    "stripped_blossom_post": {
      "id": "quark:stripped_blossom_post"
    },
    "vertical_blossom_planks": {
      "id": "quark:vertical_blossom_planks"
    },
    "hollow_blossom_log": {
      "id": "quark:hollow_blossom_log"
    },
    "blossom_sign": {
      "id": "quark:blossom_sign"
    },
    "blossom_boat": {
      "id": "quark:blossom_boat"
    },
    "blossom_chest_boat": {
      "id": "quark:blossom_chest_boat"
    },
    "blue_blossom_leaves": {
      "id": "quark:blue_blossom_leaves"
    },
    "blue_blossom_sapling": {
      "id": "quark:blue_blossom_sapling"
    },
    "lavender_blossom_leaves": {
      "id": "quark:lavender_blossom_leaves"
    },
    "lavender_blossom_sapling": {
      "id": "quark:lavender_blossom_sapling"
    },
    "orange_blossom_leaves": {
      "id": "quark:orange_blossom_leaves"
    },
    "orange_blossom_sapling": {
      "id": "quark:orange_blossom_sapling"
    },
    "pink_blossom_leaves": {
      "id": "quark:pink_blossom_leaves"
    },
    "pink_blossom_sapling": {
      "id": "quark:pink_blossom_sapling"
    },
    "yellow_blossom_leaves": {
      "id": "quark:yellow_blossom_leaves"
    },
    "yellow_blossom_sapling": {
      "id": "quark:yellow_blossom_sapling"
    },
    "red_blossom_leaves": {
      "id": "quark:red_blossom_leaves"
    },
    "red_blossom_sapling": {
      "id": "quark:red_blossom_sapling"
    },
    "spruce_ladder": {
      "id": "quark:spruce_ladder"
    },
    "birch_ladder": {
      "id": "quark:birch_ladder"
    },
    "jungle_ladder": {
      "id": "quark:jungle_ladder"
    },
    "acacia_ladder": {
      "id": "quark:acacia_ladder"
    },
    "dark_oak_ladder": {
      "id": "quark:dark_oak_ladder"
    },
    "crimson_ladder": {
      "id": "quark:crimson_ladder"
    },
    "warped_ladder": {
      "id": "quark:warped_ladder"
    },
    "mangrove_ladder": {
      "id": "quark:mangrove_ladder"
    },
    "paper_lantern": {
      "id": "quark:paper_lantern"
    },
    "paper_lantern_sakura": {
      "id": "quark:paper_lantern_sakura"
    },
    "paper_wall": {
      "id": "quark:paper_wall"
    },
    "paper_wall_big": {
      "id": "quark:paper_wall_big"
    },
    "paper_wall_sakura": {
      "id": "quark:paper_wall_sakura"
    },
    "bamboo_mat": {
      "id": "quark:bamboo_mat"
    },
    "bamboo_mat_carpet": {
      "id": "quark:bamboo_mat_carpet"
    },
    "pickarang": {
      "id": "quark:pickarang"
    },
    "flamerang": {
      "id": "quark:flamerang"
    },
    "echorang": {
      "id": "quark:echorang"
    },
    "crate": {
      "id": "quark:crate"
    },
    "oak_post": {
      "id": "quark:oak_post"
    },
    "stripped_oak_post": {
      "id": "quark:stripped_oak_post"
    },
    "spruce_post": {
      "id": "quark:spruce_post"
    },
    "stripped_spruce_post": {
      "id": "quark:stripped_spruce_post"
    },
    "birch_post": {
      "id": "quark:birch_post"
    },
    "stripped_birch_post": {
      "id": "quark:stripped_birch_post"
    },
    "jungle_post": {
      "id": "quark:jungle_post"
    },
    "stripped_jungle_post": {
      "id": "quark:stripped_jungle_post"
    },
    "acacia_post": {
      "id": "quark:acacia_post"
    },
    "stripped_acacia_post": {
      "id": "quark:stripped_acacia_post"
    },
    "dark_oak_post": {
      "id": "quark:dark_oak_post"
    },
    "stripped_dark_oak_post": {
      "id": "quark:stripped_dark_oak_post"
    },
    "crimson_post": {
      "id": "quark:crimson_post"
    },
    "stripped_crimson_post": {
      "id": "quark:stripped_crimson_post"
    },
    "warped_post": {
      "id": "quark:warped_post"
    },
    "stripped_warped_post": {
      "id": "quark:stripped_warped_post"
    },
    "mangrove_post": {
      "id": "quark:mangrove_post"
    },
    "stripped_mangrove_post": {
      "id": "quark:stripped_mangrove_post"
    },
    "charcoal_block": {
      "id": "quark:charcoal_block"
    },
    "sugar_cane_block": {
      "id": "quark:sugar_cane_block"
    },
    "bamboo_block": {
      "id": "quark:bamboo_block"
    },
    "stripped_bamboo_block": {
      "id": "quark:stripped_bamboo_block"
    },
    "cactus_block": {
      "id": "quark:cactus_block"
    },
    "chorus_fruit_block": {
      "id": "quark:chorus_fruit_block"
    },
    "stick_block": {
      "id": "quark:stick_block"
    },
    "golden_apple_crate": {
      "id": "quark:golden_apple_crate"
    },
    "apple_crate": {
      "id": "quark:apple_crate"
    },
    "potato_crate": {
      "id": "quark:potato_crate"
    },
    "carrot_crate": {
      "id": "quark:carrot_crate"
    },
    "golden_carrot_crate": {
      "id": "quark:golden_carrot_crate"
    },
    "beetroot_crate": {
      "id": "quark:beetroot_crate"
    },
    "cocoa_beans_sack": {
      "id": "quark:cocoa_beans_sack"
    },
    "nether_wart_sack": {
      "id": "quark:nether_wart_sack"
    },
    "gunpowder_sack": {
      "id": "quark:gunpowder_sack"
    },
    "berry_sack": {
      "id": "quark:berry_sack"
    },
    "glowberry_sack": {
      "id": "quark:glowberry_sack"
    },
    "blaze_lantern": {
      "id": "quark:blaze_lantern"
    },
    "bonded_leather": {
      "id": "quark:bonded_leather"
    },
    "bonded_rabbit_hide": {
      "id": "quark:bonded_rabbit_hide"
    },
    "iron_plate": {
      "id": "quark:iron_plate"
    },
    "iron_plate_slab": {
      "id": "quark:iron_plate_slab"
    },
    "iron_plate_stairs": {
      "id": "quark:iron_plate_stairs"
    },
    "rusty_iron_plate": {
      "id": "quark:rusty_iron_plate"
    },
    "rusty_iron_plate_slab": {
      "id": "quark:rusty_iron_plate_slab"
    },
    "rusty_iron_plate_stairs": {
      "id": "quark:rusty_iron_plate_stairs"
    },
    "iron_pillar": {
      "id": "quark:iron_pillar"
    },
    "iron_ladder": {
      "id": "quark:iron_ladder"
    },
    "crab_leg": {
      "id": "quark:crab_leg"
    },
    "cooked_crab_leg": {
      "id": "quark:cooked_crab_leg"
    },
    "crab_shell": {
      "id": "quark:crab_shell"
    },
    "crab_spawn_egg": {
      "id": "quark:crab_spawn_egg"
    },
    "torch_arrow": {
      "id": "quark:torch_arrow"
    },
    "soul_sandstone": {
      "id": "quark:soul_sandstone"
    },
    "soul_sandstone_slab": {
      "id": "quark:soul_sandstone_slab"
    },
    "soul_sandstone_stairs": {
      "id": "quark:soul_sandstone_stairs"
    },
    "soul_sandstone_wall": {
      "id": "quark:soul_sandstone_wall"
    },
    "chiseled_soul_sandstone": {
      "id": "quark:chiseled_soul_sandstone"
    },
    "cut_soul_sandstone": {
      "id": "quark:cut_soul_sandstone"
    },
    "cut_soul_sandstone_slab": {
      "id": "quark:cut_soul_sandstone_slab"
    },
    "smooth_soul_sandstone": {
      "id": "quark:smooth_soul_sandstone"
    },
    "smooth_soul_sandstone_slab": {
      "id": "quark:smooth_soul_sandstone_slab"
    },
    "smooth_soul_sandstone_stairs": {
      "id": "quark:smooth_soul_sandstone_stairs"
    },
    "polished_calcite": {
      "id": "quark:polished_calcite"
    },
    "calcite_slab": {
      "id": "quark:calcite_slab"
    },
    "calcite_stairs": {
      "id": "quark:calcite_stairs"
    },
    "calcite_wall": {
      "id": "quark:calcite_wall"
    },
    "polished_calcite_slab": {
      "id": "quark:polished_calcite_slab"
    },
    "polished_calcite_stairs": {
      "id": "quark:polished_calcite_stairs"
    },
    "polished_dripstone": {
      "id": "quark:polished_dripstone"
    },
    "dripstone_block_slab": {
      "id": "quark:dripstone_block_slab"
    },
    "dripstone_block_stairs": {
      "id": "quark:dripstone_block_stairs"
    },
    "dripstone_block_wall": {
      "id": "quark:dripstone_block_wall"
    },
    "polished_dripstone_slab": {
      "id": "quark:polished_dripstone_slab"
    },
    "polished_dripstone_stairs": {
      "id": "quark:polished_dripstone_stairs"
    },
    "polished_tuff": {
      "id": "quark:polished_tuff"
    },
    "tuff_slab": {
      "id": "quark:tuff_slab"
    },
    "tuff_stairs": {
      "id": "quark:tuff_stairs"
    },
    "tuff_wall": {
      "id": "quark:tuff_wall"
    },
    "polished_tuff_slab": {
      "id": "quark:polished_tuff_slab"
    },
    "polished_tuff_stairs": {
      "id": "quark:polished_tuff_stairs"
    },
    "granite_bricks": {
      "id": "quark:granite_bricks"
    },
    "granite_bricks_slab": {
      "id": "quark:granite_bricks_slab"
    },
    "granite_bricks_stairs": {
      "id": "quark:granite_bricks_stairs"
    },
    "granite_bricks_wall": {
      "id": "quark:granite_bricks_wall"
    },
    "chiseled_granite_bricks": {
      "id": "quark:chiseled_granite_bricks"
    },
    "granite_pillar": {
      "id": "quark:granite_pillar"
    },
    "diorite_bricks": {
      "id": "quark:diorite_bricks"
    },
    "diorite_bricks_slab": {
      "id": "quark:diorite_bricks_slab"
    },
    "diorite_bricks_stairs": {
      "id": "quark:diorite_bricks_stairs"
    },
    "diorite_bricks_wall": {
      "id": "quark:diorite_bricks_wall"
    },
    "chiseled_diorite_bricks": {
      "id": "quark:chiseled_diorite_bricks"
    },
    "diorite_pillar": {
      "id": "quark:diorite_pillar"
    },
    "andesite_bricks": {
      "id": "quark:andesite_bricks"
    },
    "andesite_bricks_slab": {
      "id": "quark:andesite_bricks_slab"
    },
    "andesite_bricks_stairs": {
      "id": "quark:andesite_bricks_stairs"
    },
    "andesite_bricks_wall": {
      "id": "quark:andesite_bricks_wall"
    },
    "chiseled_andesite_bricks": {
      "id": "quark:chiseled_andesite_bricks"
    },
    "andesite_pillar": {
      "id": "quark:andesite_pillar"
    },
    "calcite_bricks": {
      "id": "quark:calcite_bricks"
    },
    "calcite_bricks_slab": {
      "id": "quark:calcite_bricks_slab"
    },
    "calcite_bricks_stairs": {
      "id": "quark:calcite_bricks_stairs"
    },
    "calcite_bricks_wall": {
      "id": "quark:calcite_bricks_wall"
    },
    "chiseled_calcite_bricks": {
      "id": "quark:chiseled_calcite_bricks"
    },
    "calcite_pillar": {
      "id": "quark:calcite_pillar"
    },
    "dripstone_bricks": {
      "id": "quark:dripstone_bricks"
    },
    "dripstone_bricks_slab": {
      "id": "quark:dripstone_bricks_slab"
    },
    "dripstone_bricks_stairs": {
      "id": "quark:dripstone_bricks_stairs"
    },
    "dripstone_bricks_wall": {
      "id": "quark:dripstone_bricks_wall"
    },
    "chiseled_dripstone_bricks": {
      "id": "quark:chiseled_dripstone_bricks"
    },
    "dripstone_pillar": {
      "id": "quark:dripstone_pillar"
    },
    "tuff_bricks": {
      "id": "quark:tuff_bricks"
    },
    "tuff_bricks_slab": {
      "id": "quark:tuff_bricks_slab"
    },
    "tuff_bricks_stairs": {
      "id": "quark:tuff_bricks_stairs"
    },
    "tuff_bricks_wall": {
      "id": "quark:tuff_bricks_wall"
    },
    "chiseled_tuff_bricks": {
      "id": "quark:chiseled_tuff_bricks"
    },
    "tuff_pillar": {
      "id": "quark:tuff_pillar"
    },
    "limestone_bricks": {
      "id": "quark:limestone_bricks"
    },
    "limestone_bricks_slab": {
      "id": "quark:limestone_bricks_slab"
    },
    "limestone_bricks_stairs": {
      "id": "quark:limestone_bricks_stairs"
    },
    "limestone_bricks_wall": {
      "id": "quark:limestone_bricks_wall"
    },
    "chiseled_limestone_bricks": {
      "id": "quark:chiseled_limestone_bricks"
    },
    "limestone_pillar": {
      "id": "quark:limestone_pillar"
    },
    "jasper_bricks": {
      "id": "quark:jasper_bricks"
    },
    "jasper_bricks_slab": {
      "id": "quark:jasper_bricks_slab"
    },
    "jasper_bricks_stairs": {
      "id": "quark:jasper_bricks_stairs"
    },
    "jasper_bricks_wall": {
      "id": "quark:jasper_bricks_wall"
    },
    "chiseled_jasper_bricks": {
      "id": "quark:chiseled_jasper_bricks"
    },
    "jasper_pillar": {
      "id": "quark:jasper_pillar"
    },
    "shale_bricks": {
      "id": "quark:shale_bricks"
    },
    "shale_bricks_slab": {
      "id": "quark:shale_bricks_slab"
    },
    "shale_bricks_stairs": {
      "id": "quark:shale_bricks_stairs"
    },
    "shale_bricks_wall": {
      "id": "quark:shale_bricks_wall"
    },
    "chiseled_shale_bricks": {
      "id": "quark:chiseled_shale_bricks"
    },
    "shale_pillar": {
      "id": "quark:shale_pillar"
    },
    "myalite_bricks": {
      "id": "quark:myalite_bricks"
    },
    "myalite_bricks_slab": {
      "id": "quark:myalite_bricks_slab"
    },
    "myalite_bricks_stairs": {
      "id": "quark:myalite_bricks_stairs"
    },
    "myalite_bricks_wall": {
      "id": "quark:myalite_bricks_wall"
    },
    "chiseled_myalite_bricks": {
      "id": "quark:chiseled_myalite_bricks"
    },
    "myalite_pillar": {
      "id": "quark:myalite_pillar"
    },
    "dirty_glass": {
      "id": "quark:dirty_glass"
    },
    "dirty_glass_pane": {
      "id": "quark:dirty_glass_pane"
    },
    "clear_shard": {
      "id": "quark:clear_shard"
    },
    "dirty_shard": {
      "id": "quark:dirty_shard"
    },
    "white_shard": {
      "id": "quark:white_shard"
    },
    "orange_shard": {
      "id": "quark:orange_shard"
    },
    "magenta_shard": {
      "id": "quark:magenta_shard"
    },
    "light_blue_shard": {
      "id": "quark:light_blue_shard"
    },
    "yellow_shard": {
      "id": "quark:yellow_shard"
    },
    "lime_shard": {
      "id": "quark:lime_shard"
    },
    "pink_shard": {
      "id": "quark:pink_shard"
    },
    "gray_shard": {
      "id": "quark:gray_shard"
    },
    "light_gray_shard": {
      "id": "quark:light_gray_shard"
    },
    "cyan_shard": {
      "id": "quark:cyan_shard"
    },
    "purple_shard": {
      "id": "quark:purple_shard"
    },
    "blue_shard": {
      "id": "quark:blue_shard"
    },
    "brown_shard": {
      "id": "quark:brown_shard"
    },
    "green_shard": {
      "id": "quark:green_shard"
    },
    "red_shard": {
      "id": "quark:red_shard"
    },
    "black_shard": {
      "id": "quark:black_shard"
    },
    "backpack": {
      "id": "quark:backpack"
    },
    "ravager_hide": {
      "id": "quark:ravager_hide"
    },
    "bonded_ravager_hide": {
      "id": "quark:bonded_ravager_hide"
    },
    "shingles": {
      "id": "quark:shingles"
    },
    "shingles_slab": {
      "id": "quark:shingles_slab"
    },
    "shingles_stairs": {
      "id": "quark:shingles_stairs"
    },
    "white_shingles": {
      "id": "quark:white_shingles"
    },
    "white_shingles_slab": {
      "id": "quark:white_shingles_slab"
    },
    "white_shingles_stairs": {
      "id": "quark:white_shingles_stairs"
    },
    "orange_shingles": {
      "id": "quark:orange_shingles"
    },
    "orange_shingles_slab": {
      "id": "quark:orange_shingles_slab"
    },
    "orange_shingles_stairs": {
      "id": "quark:orange_shingles_stairs"
    },
    "magenta_shingles": {
      "id": "quark:magenta_shingles"
    },
    "magenta_shingles_slab": {
      "id": "quark:magenta_shingles_slab"
    },
    "magenta_shingles_stairs": {
      "id": "quark:magenta_shingles_stairs"
    },
    "light_blue_shingles": {
      "id": "quark:light_blue_shingles"
    },
    "light_blue_shingles_slab": {
      "id": "quark:light_blue_shingles_slab"
    },
    "light_blue_shingles_stairs": {
      "id": "quark:light_blue_shingles_stairs"
    },
    "yellow_shingles": {
      "id": "quark:yellow_shingles"
    },
    "yellow_shingles_slab": {
      "id": "quark:yellow_shingles_slab"
    },
    "yellow_shingles_stairs": {
      "id": "quark:yellow_shingles_stairs"
    },
    "lime_shingles": {
      "id": "quark:lime_shingles"
    },
    "lime_shingles_slab": {
      "id": "quark:lime_shingles_slab"
    },
    "lime_shingles_stairs": {
      "id": "quark:lime_shingles_stairs"
    },
    "pink_shingles": {
      "id": "quark:pink_shingles"
    },
    "pink_shingles_slab": {
      "id": "quark:pink_shingles_slab"
    },
    "pink_shingles_stairs": {
      "id": "quark:pink_shingles_stairs"
    },
    "gray_shingles": {
      "id": "quark:gray_shingles"
    },
    "gray_shingles_slab": {
      "id": "quark:gray_shingles_slab"
    },
    "gray_shingles_stairs": {
      "id": "quark:gray_shingles_stairs"
    },
    "light_gray_shingles": {
      "id": "quark:light_gray_shingles"
    },
    "light_gray_shingles_slab": {
      "id": "quark:light_gray_shingles_slab"
    },
    "light_gray_shingles_stairs": {
      "id": "quark:light_gray_shingles_stairs"
    },
    "cyan_shingles": {
      "id": "quark:cyan_shingles"
    },
    "cyan_shingles_slab": {
      "id": "quark:cyan_shingles_slab"
    },
    "cyan_shingles_stairs": {
      "id": "quark:cyan_shingles_stairs"
    },
    "purple_shingles": {
      "id": "quark:purple_shingles"
    },
    "purple_shingles_slab": {
      "id": "quark:purple_shingles_slab"
    },
    "purple_shingles_stairs": {
      "id": "quark:purple_shingles_stairs"
    },
    "blue_shingles": {
      "id": "quark:blue_shingles"
    },
    "blue_shingles_slab": {
      "id": "quark:blue_shingles_slab"
    },
    "blue_shingles_stairs": {
      "id": "quark:blue_shingles_stairs"
    },
    "brown_shingles": {
      "id": "quark:brown_shingles"
    },
    "brown_shingles_slab": {
      "id": "quark:brown_shingles_slab"
    },
    "brown_shingles_stairs": {
      "id": "quark:brown_shingles_stairs"
    },
    "green_shingles": {
      "id": "quark:green_shingles"
    },
    "green_shingles_slab": {
      "id": "quark:green_shingles_slab"
    },
    "green_shingles_stairs": {
      "id": "quark:green_shingles_stairs"
    },
    "red_shingles": {
      "id": "quark:red_shingles"
    },
    "red_shingles_slab": {
      "id": "quark:red_shingles_slab"
    },
    "red_shingles_stairs": {
      "id": "quark:red_shingles_stairs"
    },
    "black_shingles": {
      "id": "quark:black_shingles"
    },
    "black_shingles_slab": {
      "id": "quark:black_shingles_slab"
    },
    "black_shingles_stairs": {
      "id": "quark:black_shingles_stairs"
    },
    "iron_rod": {
      "id": "quark:iron_rod"
    },
    "duskbound_block": {
      "id": "quark:duskbound_block"
    },
    "duskbound_block_slab": {
      "id": "quark:duskbound_block_slab"
    },
    "duskbound_block_stairs": {
      "id": "quark:duskbound_block_stairs"
    },
    "duskbound_lantern": {
      "id": "quark:duskbound_lantern"
    },
    "iron_button": {
      "id": "quark:iron_button"
    },
    "gold_button": {
      "id": "quark:gold_button"
    },
    "gold_bars": {
      "id": "quark:gold_bars"
    },
    "egg_parrot_red_blue": {
      "id": "quark:egg_parrot_red_blue"
    },
    "egg_parrot_blue": {
      "id": "quark:egg_parrot_blue"
    },
    "egg_parrot_green": {
      "id": "quark:egg_parrot_green"
    },
    "egg_parrot_yellow_blue": {
      "id": "quark:egg_parrot_yellow_blue"
    },
    "egg_parrot_grey": {
      "id": "quark:egg_parrot_grey"
    },
    "bamboo_planks": {
      "id": "quark:bamboo_planks"
    },
    "bamboo_planks_slab": {
      "id": "quark:bamboo_planks_slab"
    },
    "bamboo_planks_stairs": {
      "id": "quark:bamboo_planks_stairs"
    },
    "bamboo_fence": {
      "id": "quark:bamboo_fence"
    },
    "bamboo_fence_gate": {
      "id": "quark:bamboo_fence_gate"
    },
    "bamboo_door": {
      "id": "quark:bamboo_door"
    },
    "bamboo_trapdoor": {
      "id": "quark:bamboo_trapdoor"
    },
    "bamboo_button": {
      "id": "quark:bamboo_button"
    },
    "bamboo_pressure_plate": {
      "id": "quark:bamboo_pressure_plate"
    },
    "bamboo_bookshelf": {
      "id": "quark:bamboo_bookshelf"
    },
    "bamboo_ladder": {
      "id": "quark:bamboo_ladder"
    },
    "bamboo_post": {
      "id": "quark:bamboo_post"
    },
    "stripped_bamboo_post": {
      "id": "quark:stripped_bamboo_post"
    },
    "vertical_bamboo_planks": {
      "id": "quark:vertical_bamboo_planks"
    },
    "bamboo_sign": {
      "id": "quark:bamboo_sign"
    },
    "bamboo_mosaic": {
      "id": "quark:bamboo_mosaic"
    },
    "obsidian_pressure_plate": {
      "id": "quark:obsidian_pressure_plate"
    },
    "redstone_randomizer": {
      "id": "quark:redstone_randomizer"
    },
    "ender_watcher": {
      "id": "quark:ender_watcher"
    },
    "thatch": {
      "id": "quark:thatch"
    },
    "thatch_slab": {
      "id": "quark:thatch_slab"
    },
    "thatch_stairs": {
      "id": "quark:thatch_stairs"
    },
    "white_stool": {
      "id": "quark:white_stool"
    },
    "orange_stool": {
      "id": "quark:orange_stool"
    },
    "magenta_stool": {
      "id": "quark:magenta_stool"
    },
    "light_blue_stool": {
      "id": "quark:light_blue_stool"
    },
    "yellow_stool": {
      "id": "quark:yellow_stool"
    },
    "lime_stool": {
      "id": "quark:lime_stool"
    },
    "pink_stool": {
      "id": "quark:pink_stool"
    },
    "gray_stool": {
      "id": "quark:gray_stool"
    },
    "light_gray_stool": {
      "id": "quark:light_gray_stool"
    },
    "cyan_stool": {
      "id": "quark:cyan_stool"
    },
    "purple_stool": {
      "id": "quark:purple_stool"
    },
    "blue_stool": {
      "id": "quark:blue_stool"
    },
    "brown_stool": {
      "id": "quark:brown_stool"
    },
    "green_stool": {
      "id": "quark:green_stool"
    },
    "red_stool": {
      "id": "quark:red_stool"
    },
    "black_stool": {
      "id": "quark:black_stool"
    },
    "gravisand": {
      "id": "quark:gravisand"
    },
    "deepslate_furnace": {
      "id": "quark:deepslate_furnace"
    },
    "blackstone_furnace": {
      "id": "quark:blackstone_furnace"
    },
    "pipe": {
      "id": "quark:pipe"
    },
    "encased_pipe": {
      "id": "quark:encased_pipe"
    },
    "glow_shroom": {
      "id": "quark:glow_shroom"
    },
    "glow_lichen_growth": {
      "id": "quark:glow_lichen_growth"
    },
    "glow_shroom_block": {
      "id": "quark:glow_shroom_block"
    },
    "glow_shroom_stem": {
      "id": "quark:glow_shroom_stem"
    },
    "glow_shroom_ring": {
      "id": "quark:glow_shroom_ring"
    },
    "carved_mud_bricks": {
      "id": "quark:carved_mud_bricks"
    },
    "mud_pillar": {
      "id": "quark:mud_pillar"
    },
    "mud_brick_lattice": {
      "id": "quark:mud_brick_lattice"
    },
    "chute": {
      "id": "quark:chute"
    },
    "stone_lamp": {
      "id": "quark:stone_lamp"
    },
    "stone_brick_lamp": {
      "id": "quark:stone_brick_lamp"
    },
    "foxhound_spawn_egg": {
      "id": "quark:foxhound_spawn_egg"
    },
    "ancient_log": {
      "id": "quark:ancient_log"
    },
    "ancient_wood": {
      "id": "quark:ancient_wood"
    },
    "stripped_ancient_log": {
      "id": "quark:stripped_ancient_log"
    },
    "stripped_ancient_wood": {
      "id": "quark:stripped_ancient_wood"
    },
    "ancient_planks": {
      "id": "quark:ancient_planks"
    },
    "ancient_planks_slab": {
      "id": "quark:ancient_planks_slab"
    },
    "ancient_planks_stairs": {
      "id": "quark:ancient_planks_stairs"
    },
    "ancient_fence": {
      "id": "quark:ancient_fence"
    },
    "ancient_fence_gate": {
      "id": "quark:ancient_fence_gate"
    },
    "ancient_door": {
      "id": "quark:ancient_door"
    },
    "ancient_trapdoor": {
      "id": "quark:ancient_trapdoor"
    },
    "ancient_button": {
      "id": "quark:ancient_button"
    },
    "ancient_pressure_plate": {
      "id": "quark:ancient_pressure_plate"
    },
    "ancient_bookshelf": {
      "id": "quark:ancient_bookshelf"
    },
    "ancient_ladder": {
      "id": "quark:ancient_ladder"
    },
    "ancient_post": {
      "id": "quark:ancient_post"
    },
    "stripped_ancient_post": {
      "id": "quark:stripped_ancient_post"
    },
    "vertical_ancient_planks": {
      "id": "quark:vertical_ancient_planks"
    },
    "hollow_ancient_log": {
      "id": "quark:hollow_ancient_log"
    },
    "ancient_sign": {
      "id": "quark:ancient_sign"
    },
    "ancient_boat": {
      "id": "quark:ancient_boat"
    },
    "ancient_chest_boat": {
      "id": "quark:ancient_chest_boat"
    },
    "ancient_leaves": {
      "id": "quark:ancient_leaves"
    },
    "ancient_sapling": {
      "id": "quark:ancient_sapling"
    },
    "ancient_fruit": {
      "id": "quark:ancient_fruit"
    },
    "dragon_scale": {
      "id": "quark:dragon_scale"
    },
    "glass_item_frame": {
      "id": "quark:glass_item_frame"
    },
    "glowing_glass_item_frame": {
      "id": "quark:glowing_glass_item_frame"
    },
    "nether_brick_fence_gate": {
      "id": "quark:nether_brick_fence_gate"
    },
    "matrix_enchanter": {
      "id": "quark:matrix_enchanter"
    },
    "dusky_myalite": {
      "id": "quark:dusky_myalite"
    },
    "myalite_crystal": {
      "id": "quark:myalite_crystal"
    },
    "limestone": {
      "id": "quark:limestone"
    },
    "polished_limestone": {
      "id": "quark:polished_limestone"
    },
    "limestone_slab": {
      "id": "quark:limestone_slab"
    },
    "limestone_stairs": {
      "id": "quark:limestone_stairs"
    },
    "limestone_wall": {
      "id": "quark:limestone_wall"
    },
    "polished_limestone_slab": {
      "id": "quark:polished_limestone_slab"
    },
    "polished_limestone_stairs": {
      "id": "quark:polished_limestone_stairs"
    },
    "jasper": {
      "id": "quark:jasper"
    },
    "polished_jasper": {
      "id": "quark:polished_jasper"
    },
    "jasper_slab": {
      "id": "quark:jasper_slab"
    },
    "jasper_stairs": {
      "id": "quark:jasper_stairs"
    },
    "jasper_wall": {
      "id": "quark:jasper_wall"
    },
    "polished_jasper_slab": {
      "id": "quark:polished_jasper_slab"
    },
    "polished_jasper_stairs": {
      "id": "quark:polished_jasper_stairs"
    },
    "shale": {
      "id": "quark:shale"
    },
    "polished_shale": {
      "id": "quark:polished_shale"
    },
    "shale_slab": {
      "id": "quark:shale_slab"
    },
    "shale_stairs": {
      "id": "quark:shale_stairs"
    },
    "shale_wall": {
      "id": "quark:shale_wall"
    },
    "polished_shale_slab": {
      "id": "quark:polished_shale_slab"
    },
    "polished_shale_stairs": {
      "id": "quark:polished_shale_stairs"
    },
    "myalite": {
      "id": "quark:myalite"
    },
    "polished_myalite": {
      "id": "quark:polished_myalite"
    },
    "myalite_slab": {
      "id": "quark:myalite_slab"
    },
    "myalite_stairs": {
      "id": "quark:myalite_stairs"
    },
    "myalite_wall": {
      "id": "quark:myalite_wall"
    },
    "polished_myalite_slab": {
      "id": "quark:polished_myalite_slab"
    },
    "polished_myalite_stairs": {
      "id": "quark:polished_myalite_stairs"
    },
    "seed_pouch": {
      "id": "quark:seed_pouch"
    },
    "feeding_trough": {
      "id": "quark:feeding_trough"
    },
    "music_disc_drips": {
      "id": "quark:music_disc_drips"
    },
    "music_disc_ocean": {
      "id": "quark:music_disc_ocean"
    },
    "music_disc_rain": {
      "id": "quark:music_disc_rain"
    },
    "music_disc_wind": {
      "id": "quark:music_disc_wind"
    },
    "music_disc_fire": {
      "id": "quark:music_disc_fire"
    },
    "music_disc_clock": {
      "id": "quark:music_disc_clock"
    },
    "music_disc_crickets": {
      "id": "quark:music_disc_crickets"
    },
    "music_disc_chatter": {
      "id": "quark:music_disc_chatter"
    },
    "trowel": {
      "id": "quark:trowel"
    },
    "lavender_blossom_leaf_carpet": {
      "id": "quark:lavender_blossom_leaf_carpet"
    },
    "orange_blossom_leaf_carpet": {
      "id": "quark:orange_blossom_leaf_carpet"
    },
    "red_blossom_leaf_carpet": {
      "id": "quark:red_blossom_leaf_carpet"
    },
    "yellow_blossom_leaf_carpet": {
      "id": "quark:yellow_blossom_leaf_carpet"
    },
    "pink_blossom_leaf_carpet": {
      "id": "quark:pink_blossom_leaf_carpet"
    },
    "blue_blossom_leaf_carpet": {
      "id": "quark:blue_blossom_leaf_carpet"
    },
    "ancient_leaf_carpet": {
      "id": "quark:ancient_leaf_carpet"
    },
    "lavender_blossom_hedge": {
      "id": "quark:lavender_blossom_hedge"
    },
    "orange_blossom_hedge": {
      "id": "quark:orange_blossom_hedge"
    },
    "red_blossom_hedge": {
      "id": "quark:red_blossom_hedge"
    },
    "yellow_blossom_hedge": {
      "id": "quark:yellow_blossom_hedge"
    },
    "pink_blossom_hedge": {
      "id": "quark:pink_blossom_hedge"
    },
    "blue_blossom_hedge": {
      "id": "quark:blue_blossom_hedge"
    },
    "ancient_hedge": {
      "id": "quark:ancient_hedge"
    },
    "acacia_vertical_slab": {
      "id": "quark:acacia_vertical_slab"
    },
    "andesite_vertical_slab": {
      "id": "quark:andesite_vertical_slab"
    },
    "birch_vertical_slab": {
      "id": "quark:birch_vertical_slab"
    },
    "brick_vertical_slab": {
      "id": "quark:brick_vertical_slab"
    },
    "cobblestone_vertical_slab": {
      "id": "quark:cobblestone_vertical_slab"
    },
    "cut_red_sandstone_vertical_slab": {
      "id": "quark:cut_red_sandstone_vertical_slab"
    },
    "cut_sandstone_vertical_slab": {
      "id": "quark:cut_sandstone_vertical_slab"
    },
    "dark_oak_vertical_slab": {
      "id": "quark:dark_oak_vertical_slab"
    },
    "dark_prismarine_vertical_slab": {
      "id": "quark:dark_prismarine_vertical_slab"
    },
    "diorite_vertical_slab": {
      "id": "quark:diorite_vertical_slab"
    },
    "end_stone_brick_vertical_slab": {
      "id": "quark:end_stone_brick_vertical_slab"
    },
    "granite_vertical_slab": {
      "id": "quark:granite_vertical_slab"
    },
    "jungle_vertical_slab": {
      "id": "quark:jungle_vertical_slab"
    },
    "mossy_cobblestone_vertical_slab": {
      "id": "quark:mossy_cobblestone_vertical_slab"
    },
    "mossy_stone_brick_vertical_slab": {
      "id": "quark:mossy_stone_brick_vertical_slab"
    },
    "nether_brick_vertical_slab": {
      "id": "quark:nether_brick_vertical_slab"
    },
    "oak_vertical_slab": {
      "id": "quark:oak_vertical_slab"
    },
    "polished_andesite_vertical_slab": {
      "id": "quark:polished_andesite_vertical_slab"
    },
    "polished_diorite_vertical_slab": {
      "id": "quark:polished_diorite_vertical_slab"
    },
    "polished_granite_vertical_slab": {
      "id": "quark:polished_granite_vertical_slab"
    },
    "prismarine_vertical_slab": {
      "id": "quark:prismarine_vertical_slab"
    },
    "prismarine_brick_vertical_slab": {
      "id": "quark:prismarine_brick_vertical_slab"
    },
    "purpur_vertical_slab": {
      "id": "quark:purpur_vertical_slab"
    },
    "quartz_vertical_slab": {
      "id": "quark:quartz_vertical_slab"
    },
    "red_nether_brick_vertical_slab": {
      "id": "quark:red_nether_brick_vertical_slab"
    },
    "red_sandstone_vertical_slab": {
      "id": "quark:red_sandstone_vertical_slab"
    },
    "sandstone_vertical_slab": {
      "id": "quark:sandstone_vertical_slab"
    },
    "smooth_quartz_vertical_slab": {
      "id": "quark:smooth_quartz_vertical_slab"
    },
    "smooth_red_sandstone_vertical_slab": {
      "id": "quark:smooth_red_sandstone_vertical_slab"
    },
    "smooth_sandstone_vertical_slab": {
      "id": "quark:smooth_sandstone_vertical_slab"
    },
    "smooth_stone_vertical_slab": {
      "id": "quark:smooth_stone_vertical_slab"
    },
    "spruce_vertical_slab": {
      "id": "quark:spruce_vertical_slab"
    },
    "stone_vertical_slab": {
      "id": "quark:stone_vertical_slab"
    },
    "stone_brick_vertical_slab": {
      "id": "quark:stone_brick_vertical_slab"
    },
    "blackstone_vertical_slab": {
      "id": "quark:blackstone_vertical_slab"
    },
    "polished_blackstone_vertical_slab": {
      "id": "quark:polished_blackstone_vertical_slab"
    },
    "polished_blackstone_brick_vertical_slab": {
      "id": "quark:polished_blackstone_brick_vertical_slab"
    },
    "crimson_vertical_slab": {
      "id": "quark:crimson_vertical_slab"
    },
    "warped_vertical_slab": {
      "id": "quark:warped_vertical_slab"
    },
    "cobbled_deepslate_vertical_slab": {
      "id": "quark:cobbled_deepslate_vertical_slab"
    },
    "polished_deepslate_vertical_slab": {
      "id": "quark:polished_deepslate_vertical_slab"
    },
    "deepslate_brick_vertical_slab": {
      "id": "quark:deepslate_brick_vertical_slab"
    },
    "deepslate_tile_vertical_slab": {
      "id": "quark:deepslate_tile_vertical_slab"
    },
    "mangrove_vertical_slab": {
      "id": "quark:mangrove_vertical_slab"
    },
    "mud_brick_vertical_slab": {
      "id": "quark:mud_brick_vertical_slab"
    },
    "cut_copper_vertical_slab": {
      "id": "quark:cut_copper_vertical_slab"
    },
    "waxed_cut_copper_vertical_slab": {
      "id": "quark:waxed_cut_copper_vertical_slab"
    },
    "exposed_cut_copper_vertical_slab": {
      "id": "quark:exposed_cut_copper_vertical_slab"
    },
    "waxed_exposed_cut_copper_vertical_slab": {
      "id": "quark:waxed_exposed_cut_copper_vertical_slab"
    },
    "weathered_cut_copper_vertical_slab": {
      "id": "quark:weathered_cut_copper_vertical_slab"
    },
    "waxed_weathered_cut_copper_vertical_slab": {
      "id": "quark:waxed_weathered_cut_copper_vertical_slab"
    },
    "oxidized_cut_copper_vertical_slab": {
      "id": "quark:oxidized_cut_copper_vertical_slab"
    },
    "waxed_oxidized_cut_copper_vertical_slab": {
      "id": "quark:waxed_oxidized_cut_copper_vertical_slab"
    },
    "midori_block_vertical_slab": {
      "id": "quark:midori_block_vertical_slab"
    },
    "raw_iron_bricks_vertical_slab": {
      "id": "quark:raw_iron_bricks_vertical_slab"
    },
    "raw_gold_bricks_vertical_slab": {
      "id": "quark:raw_gold_bricks_vertical_slab"
    },
    "raw_copper_bricks_vertical_slab": {
      "id": "quark:raw_copper_bricks_vertical_slab"
    },
    "blue_nether_bricks_vertical_slab": {
      "id": "quark:blue_nether_bricks_vertical_slab"
    },
    "sandstone_bricks_vertical_slab": {
      "id": "quark:sandstone_bricks_vertical_slab"
    },
    "red_sandstone_bricks_vertical_slab": {
      "id": "quark:red_sandstone_bricks_vertical_slab"
    },
    "soul_sandstone_bricks_vertical_slab": {
      "id": "quark:soul_sandstone_bricks_vertical_slab"
    },
    "cobblestone_bricks_vertical_slab": {
      "id": "quark:cobblestone_bricks_vertical_slab"
    },
    "mossy_cobblestone_bricks_vertical_slab": {
      "id": "quark:mossy_cobblestone_bricks_vertical_slab"
    },
    "blackstone_bricks_vertical_slab": {
      "id": "quark:blackstone_bricks_vertical_slab"
    },
    "dirt_bricks_vertical_slab": {
      "id": "quark:dirt_bricks_vertical_slab"
    },
    "netherrack_bricks_vertical_slab": {
      "id": "quark:netherrack_bricks_vertical_slab"
    },
    "azalea_planks_vertical_slab": {
      "id": "quark:azalea_planks_vertical_slab"
    },
    "permafrost_vertical_slab": {
      "id": "quark:permafrost_vertical_slab"
    },
    "permafrost_bricks_vertical_slab": {
      "id": "quark:permafrost_bricks_vertical_slab"
    },
    "blossom_planks_vertical_slab": {
      "id": "quark:blossom_planks_vertical_slab"
    },
    "iron_plate_vertical_slab": {
      "id": "quark:iron_plate_vertical_slab"
    },
    "rusty_iron_plate_vertical_slab": {
      "id": "quark:rusty_iron_plate_vertical_slab"
    },
    "soul_sandstone_vertical_slab": {
      "id": "quark:soul_sandstone_vertical_slab"
    },
    "cut_soul_sandstone_vertical_slab": {
      "id": "quark:cut_soul_sandstone_vertical_slab"
    },
    "smooth_soul_sandstone_vertical_slab": {
      "id": "quark:smooth_soul_sandstone_vertical_slab"
    },
    "calcite_vertical_slab": {
      "id": "quark:calcite_vertical_slab"
    },
    "polished_calcite_vertical_slab": {
      "id": "quark:polished_calcite_vertical_slab"
    },
    "dripstone_block_vertical_slab": {
      "id": "quark:dripstone_block_vertical_slab"
    },
    "polished_dripstone_vertical_slab": {
      "id": "quark:polished_dripstone_vertical_slab"
    },
    "tuff_vertical_slab": {
      "id": "quark:tuff_vertical_slab"
    },
    "polished_tuff_vertical_slab": {
      "id": "quark:polished_tuff_vertical_slab"
    },
    "granite_bricks_vertical_slab": {
      "id": "quark:granite_bricks_vertical_slab"
    },
    "diorite_bricks_vertical_slab": {
      "id": "quark:diorite_bricks_vertical_slab"
    },
    "andesite_bricks_vertical_slab": {
      "id": "quark:andesite_bricks_vertical_slab"
    },
    "calcite_bricks_vertical_slab": {
      "id": "quark:calcite_bricks_vertical_slab"
    },
    "dripstone_bricks_vertical_slab": {
      "id": "quark:dripstone_bricks_vertical_slab"
    },
    "tuff_bricks_vertical_slab": {
      "id": "quark:tuff_bricks_vertical_slab"
    },
    "limestone_bricks_vertical_slab": {
      "id": "quark:limestone_bricks_vertical_slab"
    },
    "jasper_bricks_vertical_slab": {
      "id": "quark:jasper_bricks_vertical_slab"
    },
    "shale_bricks_vertical_slab": {
      "id": "quark:shale_bricks_vertical_slab"
    },
    "myalite_bricks_vertical_slab": {
      "id": "quark:myalite_bricks_vertical_slab"
    },
    "shingles_vertical_slab": {
      "id": "quark:shingles_vertical_slab"
    },
    "white_shingles_vertical_slab": {
      "id": "quark:white_shingles_vertical_slab"
    },
    "orange_shingles_vertical_slab": {
      "id": "quark:orange_shingles_vertical_slab"
    },
    "magenta_shingles_vertical_slab": {
      "id": "quark:magenta_shingles_vertical_slab"
    },
    "light_blue_shingles_vertical_slab": {
      "id": "quark:light_blue_shingles_vertical_slab"
    },
    "yellow_shingles_vertical_slab": {
      "id": "quark:yellow_shingles_vertical_slab"
    },
    "lime_shingles_vertical_slab": {
      "id": "quark:lime_shingles_vertical_slab"
    },
    "pink_shingles_vertical_slab": {
      "id": "quark:pink_shingles_vertical_slab"
    },
    "gray_shingles_vertical_slab": {
      "id": "quark:gray_shingles_vertical_slab"
    },
    "light_gray_shingles_vertical_slab": {
      "id": "quark:light_gray_shingles_vertical_slab"
    },
    "cyan_shingles_vertical_slab": {
      "id": "quark:cyan_shingles_vertical_slab"
    },
    "purple_shingles_vertical_slab": {
      "id": "quark:purple_shingles_vertical_slab"
    },
    "blue_shingles_vertical_slab": {
      "id": "quark:blue_shingles_vertical_slab"
    },
    "brown_shingles_vertical_slab": {
      "id": "quark:brown_shingles_vertical_slab"
    },
    "green_shingles_vertical_slab": {
      "id": "quark:green_shingles_vertical_slab"
    },
    "red_shingles_vertical_slab": {
      "id": "quark:red_shingles_vertical_slab"
    },
    "black_shingles_vertical_slab": {
      "id": "quark:black_shingles_vertical_slab"
    },
    "duskbound_block_vertical_slab": {
      "id": "quark:duskbound_block_vertical_slab"
    },
    "bamboo_planks_vertical_slab": {
      "id": "quark:bamboo_planks_vertical_slab"
    },
    "thatch_vertical_slab": {
      "id": "quark:thatch_vertical_slab"
    },
    "ancient_planks_vertical_slab": {
      "id": "quark:ancient_planks_vertical_slab"
    },
    "limestone_vertical_slab": {
      "id": "quark:limestone_vertical_slab"
    },
    "polished_limestone_vertical_slab": {
      "id": "quark:polished_limestone_vertical_slab"
    },
    "jasper_vertical_slab": {
      "id": "quark:jasper_vertical_slab"
    },
    "polished_jasper_vertical_slab": {
      "id": "quark:polished_jasper_vertical_slab"
    },
    "shale_vertical_slab": {
      "id": "quark:shale_vertical_slab"
    },
    "polished_shale_vertical_slab": {
      "id": "quark:polished_shale_vertical_slab"
    },
    "myalite_vertical_slab": {
      "id": "quark:myalite_vertical_slab"
    },
    "polished_myalite_vertical_slab": {
      "id": "quark:polished_myalite_vertical_slab"
    },
    "azalea_chest": {
      "id": "quark:azalea_chest"
    },
    "blossom_chest": {
      "id": "quark:blossom_chest"
    },
    "bamboo_chest": {
      "id": "quark:bamboo_chest"
    },
    "oak_chest": {
      "id": "quark:oak_chest"
    },
    "spruce_chest": {
      "id": "quark:spruce_chest"
    },
    "birch_chest": {
      "id": "quark:birch_chest"
    },
    "jungle_chest": {
      "id": "quark:jungle_chest"
    },
    "acacia_chest": {
      "id": "quark:acacia_chest"
    },
    "dark_oak_chest": {
      "id": "quark:dark_oak_chest"
    },
    "crimson_chest": {
      "id": "quark:crimson_chest"
    },
    "warped_chest": {
      "id": "quark:warped_chest"
    },
    "mangrove_chest": {
      "id": "quark:mangrove_chest"
    },
    "nether_brick_chest": {
      "id": "quark:nether_brick_chest"
    },
    "purpur_chest": {
      "id": "quark:purpur_chest"
    },
    "prismarine_chest": {
      "id": "quark:prismarine_chest"
    },
    "ancient_chest": {
      "id": "quark:ancient_chest"
    },
    "azalea_trapped_chest": {
      "id": "quark:azalea_trapped_chest"
    },
    "blossom_trapped_chest": {
      "id": "quark:blossom_trapped_chest"
    },
    "bamboo_trapped_chest": {
      "id": "quark:bamboo_trapped_chest"
    },
    "oak_trapped_chest": {
      "id": "quark:oak_trapped_chest"
    },
    "spruce_trapped_chest": {
      "id": "quark:spruce_trapped_chest"
    },
    "birch_trapped_chest": {
      "id": "quark:birch_trapped_chest"
    },
    "jungle_trapped_chest": {
      "id": "quark:jungle_trapped_chest"
    },
    "acacia_trapped_chest": {
      "id": "quark:acacia_trapped_chest"
    },
    "dark_oak_trapped_chest": {
      "id": "quark:dark_oak_trapped_chest"
    },
    "crimson_trapped_chest": {
      "id": "quark:crimson_trapped_chest"
    },
    "warped_trapped_chest": {
      "id": "quark:warped_trapped_chest"
    },
    "mangrove_trapped_chest": {
      "id": "quark:mangrove_trapped_chest"
    },
    "nether_brick_trapped_chest": {
      "id": "quark:nether_brick_trapped_chest"
    },
    "purpur_trapped_chest": {
      "id": "quark:purpur_trapped_chest"
    },
    "prismarine_trapped_chest": {
      "id": "quark:prismarine_trapped_chest"
    },
    "ancient_trapped_chest": {
      "id": "quark:ancient_trapped_chest"
    }
  },
  "nocubescreateexp": {
    "id": "nocubescreateexp:exp_block",
    "exp_block": {
      "id": "nocubescreateexp:exp_block"
    }
  },
  "ars_instrumentum": {
    "id": "ars_instrumentum:wizards_armarium",
    "wizards_armarium": {
      "id": "ars_instrumentum:wizards_armarium"
    },
    "scroll_of_save_starbuncle": {
      "id": "ars_instrumentum:scroll_of_save_starbuncle"
    },
    "runic_storage_stone": {
      "id": "ars_instrumentum:runic_storage_stone"
    },
    "copy_paste_spell_scroll": {
      "id": "ars_instrumentum:copy_paste_spell_scroll"
    },
    "fake_wilden_tribute": {
      "id": "ars_instrumentum:fake_wilden_tribute"
    },
    "numeric_mana_charm": {
      "id": "ars_instrumentum:numeric_mana_charm"
    },
    "arcane_applicator": {
      "id": "ars_instrumentum:arcane_applicator"
    }
  },
  "modonomicon": {
    "id": "modonomicon:modonomicon",
    "modonomicon": {
      "id": "modonomicon:modonomicon"
    }
  },
  "occultism": {
    "id": "occultism:dictionary_of_spirits",
    "dictionary_of_spirits": {
      "id": "occultism:dictionary_of_spirits"
    },
    "debug_wand": {
      "id": "occultism:debug_wand"
    },
    "debug_foliot_lumberjack": {
      "id": "occultism:debug_foliot_lumberjack"
    },
    "debug_foliot_transport_items": {
      "id": "occultism:debug_foliot_transport_items"
    },
    "debug_foliot_cleaner": {
      "id": "occultism:debug_foliot_cleaner"
    },
    "debug_foliot_trader": {
      "id": "occultism:debug_foliot_trader"
    },
    "debug_djinni_manage_machine": {
      "id": "occultism:debug_djinni_manage_machine"
    },
    "debug_djinni_test": {
      "id": "occultism:debug_djinni_test"
    },
    "spirit_fire": {
      "id": "occultism:spirit_fire"
    },
    "otherworld_sapling_natural": {
      "id": "occultism:otherworld_sapling_natural"
    },
    "tallow": {
      "id": "occultism:tallow"
    },
    "afrit_essence": {
      "id": "occultism:afrit_essence"
    },
    "dimensional_matrix": {
      "id": "occultism:dimensional_matrix"
    },
    "spirit_attuned_gem": {
      "id": "occultism:spirit_attuned_gem"
    },
    "otherworld_ashes": {
      "id": "occultism:otherworld_ashes"
    },
    "burnt_otherstone": {
      "id": "occultism:burnt_otherstone"
    },
    "otherstone_frame": {
      "id": "occultism:otherstone_frame"
    },
    "wormhole_frame": {
      "id": "occultism:wormhole_frame"
    },
    "otherstone_tablet": {
      "id": "occultism:otherstone_tablet"
    },
    "storage_remote_inert": {
      "id": "occultism:storage_remote_inert"
    },
    "chalk_white_impure": {
      "id": "occultism:chalk_white_impure"
    },
    "chalk_red_impure": {
      "id": "occultism:chalk_red_impure"
    },
    "chalk_gold_impure": {
      "id": "occultism:chalk_gold_impure"
    },
    "chalk_purple_impure": {
      "id": "occultism:chalk_purple_impure"
    },
    "raw_silver": {
      "id": "occultism:raw_silver"
    },
    "raw_iesnium": {
      "id": "occultism:raw_iesnium"
    },
    "silver_ingot": {
      "id": "occultism:silver_ingot"
    },
    "iesnium_ingot": {
      "id": "occultism:iesnium_ingot"
    },
    "silver_nugget": {
      "id": "occultism:silver_nugget"
    },
    "iesnium_nugget": {
      "id": "occultism:iesnium_nugget"
    },
    "obsidian_dust": {
      "id": "occultism:obsidian_dust"
    },
    "iron_dust": {
      "id": "occultism:iron_dust"
    },
    "gold_dust": {
      "id": "occultism:gold_dust"
    },
    "copper_dust": {
      "id": "occultism:copper_dust"
    },
    "silver_dust": {
      "id": "occultism:silver_dust"
    },
    "iesnium_dust": {
      "id": "occultism:iesnium_dust"
    },
    "crushed_end_stone": {
      "id": "occultism:crushed_end_stone"
    },
    "lenses": {
      "id": "occultism:lenses"
    },
    "infused_lenses": {
      "id": "occultism:infused_lenses"
    },
    "lens_frame": {
      "id": "occultism:lens_frame"
    },
    "purified_ink": {
      "id": "occultism:purified_ink"
    },
    "spirit_attuned_pickaxe_head": {
      "id": "occultism:spirit_attuned_pickaxe_head"
    },
    "magic_lamp_empty": {
      "id": "occultism:magic_lamp_empty"
    },
    "storage_remote": {
      "id": "occultism:storage_remote"
    },
    "chalk_white": {
      "id": "occultism:chalk_white"
    },
    "chalk_gold": {
      "id": "occultism:chalk_gold"
    },
    "chalk_purple": {
      "id": "occultism:chalk_purple"
    },
    "chalk_red": {
      "id": "occultism:chalk_red"
    },
    "divination_rod": {
      "id": "occultism:divination_rod"
    },
    "brush": {
      "id": "occultism:brush"
    },
    "butcher_knife": {
      "id": "occultism:butcher_knife"
    },
    "infused_pickaxe": {
      "id": "occultism:infused_pickaxe"
    },
    "iesnium_pickaxe": {
      "id": "occultism:iesnium_pickaxe"
    },
    "soul_gem": {
      "id": "occultism:soul_gem"
    },
    "satchel": {
      "id": "occultism:satchel"
    },
    "familiar_ring": {
      "id": "occultism:familiar_ring"
    },
    "book_of_binding_foliot": {
      "id": "occultism:book_of_binding_foliot"
    },
    "book_of_binding_bound_foliot": {
      "id": "occultism:book_of_binding_bound_foliot"
    },
    "book_of_binding_djinni": {
      "id": "occultism:book_of_binding_djinni"
    },
    "book_of_binding_bound_djinni": {
      "id": "occultism:book_of_binding_bound_djinni"
    },
    "book_of_binding_afrit": {
      "id": "occultism:book_of_binding_afrit"
    },
    "book_of_binding_bound_afrit": {
      "id": "occultism:book_of_binding_bound_afrit"
    },
    "book_of_binding_marid": {
      "id": "occultism:book_of_binding_marid"
    },
    "book_of_binding_bound_marid": {
      "id": "occultism:book_of_binding_bound_marid"
    },
    "book_of_calling_foliot_lumberjack": {
      "id": "occultism:book_of_calling_foliot_lumberjack"
    },
    "book_of_calling_foliot_transport_items": {
      "id": "occultism:book_of_calling_foliot_transport_items"
    },
    "book_of_calling_foliot_cleaner": {
      "id": "occultism:book_of_calling_foliot_cleaner"
    },
    "book_of_calling_djinni_manage_machine": {
      "id": "occultism:book_of_calling_djinni_manage_machine"
    },
    "otherworld_goggles": {
      "id": "occultism:otherworld_goggles"
    },
    "stable_wormhole": {
      "id": "occultism:stable_wormhole"
    },
    "storage_controller": {
      "id": "occultism:storage_controller"
    },
    "datura_seeds": {
      "id": "occultism:datura_seeds"
    },
    "datura": {
      "id": "occultism:datura"
    },
    "miner_debug_unspecialized": {
      "id": "occultism:miner_debug_unspecialized"
    },
    "miner_foliot_unspecialized": {
      "id": "occultism:miner_foliot_unspecialized"
    },
    "miner_djinni_ores": {
      "id": "occultism:miner_djinni_ores"
    },
    "miner_afrit_deeps": {
      "id": "occultism:miner_afrit_deeps"
    },
    "miner_marid_master": {
      "id": "occultism:miner_marid_master"
    },
    "spirit_torch": {
      "id": "occultism:spirit_torch"
    },
    "spawn_egg/foliot": {
      "id": "occultism:spawn_egg/foliot"
    },
    "spawn_egg/djinni": {
      "id": "occultism:spawn_egg/djinni"
    },
    "spawn_egg/afrit": {
      "id": "occultism:spawn_egg/afrit"
    },
    "spawn_egg/afrit_wild": {
      "id": "occultism:spawn_egg/afrit_wild"
    },
    "spawn_egg/marid": {
      "id": "occultism:spawn_egg/marid"
    },
    "spawn_egg/possessed_endermite": {
      "id": "occultism:spawn_egg/possessed_endermite"
    },
    "spawn_egg/possessed_skeleton": {
      "id": "occultism:spawn_egg/possessed_skeleton"
    },
    "spawn_egg/possessed_enderman": {
      "id": "occultism:spawn_egg/possessed_enderman"
    },
    "spawn_egg/wild_hunt_skeleton": {
      "id": "occultism:spawn_egg/wild_hunt_skeleton"
    },
    "spawn_egg/wild_hunt_wither_skeleton": {
      "id": "occultism:spawn_egg/wild_hunt_wither_skeleton"
    },
    "spawn_egg/otherworld_bird": {
      "id": "occultism:spawn_egg/otherworld_bird"
    },
    "spawn_egg/familiar_greedy": {
      "id": "occultism:spawn_egg/familiar_greedy"
    },
    "spawn_egg/familiar_bat": {
      "id": "occultism:spawn_egg/familiar_bat"
    },
    "spawn_egg/familiar_deer": {
      "id": "occultism:spawn_egg/familiar_deer"
    },
    "spawn_egg/familiar_cthulhu": {
      "id": "occultism:spawn_egg/familiar_cthulhu"
    },
    "spawn_egg/familiar_devil": {
      "id": "occultism:spawn_egg/familiar_devil"
    },
    "spawn_egg/familiar_dragon": {
      "id": "occultism:spawn_egg/familiar_dragon"
    },
    "spawn_egg/familiar_blacksmith": {
      "id": "occultism:spawn_egg/familiar_blacksmith"
    },
    "spawn_egg/familiar_guardian": {
      "id": "occultism:spawn_egg/familiar_guardian"
    },
    "spawn_egg/familiar_headless": {
      "id": "occultism:spawn_egg/familiar_headless"
    },
    "spawn_egg/familiar_chimera": {
      "id": "occultism:spawn_egg/familiar_chimera"
    },
    "spawn_egg/familiar_goat": {
      "id": "occultism:spawn_egg/familiar_goat"
    },
    "spawn_egg/familiar_shub_niggurath": {
      "id": "occultism:spawn_egg/familiar_shub_niggurath"
    },
    "spawn_egg/familiar_beholder": {
      "id": "occultism:spawn_egg/familiar_beholder"
    },
    "spawn_egg/familiar_fairy": {
      "id": "occultism:spawn_egg/familiar_fairy"
    },
    "spawn_egg/familiar_mummy": {
      "id": "occultism:spawn_egg/familiar_mummy"
    },
    "spawn_egg/familiar_beaver": {
      "id": "occultism:spawn_egg/familiar_beaver"
    },
    "ritual_dummy/custom_ritual": {
      "id": "occultism:ritual_dummy/custom_ritual"
    },
    "ritual_dummy/craft_dimensional_matrix": {
      "id": "occultism:ritual_dummy/craft_dimensional_matrix"
    },
    "ritual_dummy/craft_dimensional_mineshaft": {
      "id": "occultism:ritual_dummy/craft_dimensional_mineshaft"
    },
    "ritual_dummy/craft_infused_lenses": {
      "id": "occultism:ritual_dummy/craft_infused_lenses"
    },
    "ritual_dummy/craft_infused_pickaxe": {
      "id": "occultism:ritual_dummy/craft_infused_pickaxe"
    },
    "ritual_dummy/craft_miner_afrit_deeps": {
      "id": "occultism:ritual_dummy/craft_miner_afrit_deeps"
    },
    "ritual_dummy/craft_miner_djinni_ores": {
      "id": "occultism:ritual_dummy/craft_miner_djinni_ores"
    },
    "ritual_dummy/craft_miner_foliot_unspecialized": {
      "id": "occultism:ritual_dummy/craft_miner_foliot_unspecialized"
    },
    "ritual_dummy/craft_miner_marid_master": {
      "id": "occultism:ritual_dummy/craft_miner_marid_master"
    },
    "ritual_dummy/craft_satchel": {
      "id": "occultism:ritual_dummy/craft_satchel"
    },
    "ritual_dummy/craft_soul_gem": {
      "id": "occultism:ritual_dummy/craft_soul_gem"
    },
    "ritual_dummy/craft_familiar_ring": {
      "id": "occultism:ritual_dummy/craft_familiar_ring"
    },
    "ritual_dummy/craft_stabilizer_tier1": {
      "id": "occultism:ritual_dummy/craft_stabilizer_tier1"
    },
    "ritual_dummy/craft_stabilizer_tier2": {
      "id": "occultism:ritual_dummy/craft_stabilizer_tier2"
    },
    "ritual_dummy/craft_stabilizer_tier3": {
      "id": "occultism:ritual_dummy/craft_stabilizer_tier3"
    },
    "ritual_dummy/craft_stabilizer_tier4": {
      "id": "occultism:ritual_dummy/craft_stabilizer_tier4"
    },
    "ritual_dummy/craft_stable_wormhole": {
      "id": "occultism:ritual_dummy/craft_stable_wormhole"
    },
    "ritual_dummy/craft_storage_controller_base": {
      "id": "occultism:ritual_dummy/craft_storage_controller_base"
    },
    "ritual_dummy/craft_storage_remote": {
      "id": "occultism:ritual_dummy/craft_storage_remote"
    },
    "ritual_dummy/familiar_otherworld_bird": {
      "id": "occultism:ritual_dummy/familiar_otherworld_bird"
    },
    "ritual_dummy/familiar_parrot": {
      "id": "occultism:ritual_dummy/familiar_parrot"
    },
    "ritual_dummy/familiar_greedy": {
      "id": "occultism:ritual_dummy/familiar_greedy"
    },
    "ritual_dummy/familiar_bat": {
      "id": "occultism:ritual_dummy/familiar_bat"
    },
    "ritual_dummy/familiar_deer": {
      "id": "occultism:ritual_dummy/familiar_deer"
    },
    "ritual_dummy/familiar_cthulhu": {
      "id": "occultism:ritual_dummy/familiar_cthulhu"
    },
    "ritual_dummy/familiar_devil": {
      "id": "occultism:ritual_dummy/familiar_devil"
    },
    "ritual_dummy/familiar_dragon": {
      "id": "occultism:ritual_dummy/familiar_dragon"
    },
    "ritual_dummy/familiar_blacksmith": {
      "id": "occultism:ritual_dummy/familiar_blacksmith"
    },
    "ritual_dummy/familiar_guardian": {
      "id": "occultism:ritual_dummy/familiar_guardian"
    },
    "ritual_dummy/familiar_headless": {
      "id": "occultism:ritual_dummy/familiar_headless"
    },
    "ritual_dummy/familiar_chimera": {
      "id": "occultism:ritual_dummy/familiar_chimera"
    },
    "ritual_dummy/familiar_beholder": {
      "id": "occultism:ritual_dummy/familiar_beholder"
    },
    "ritual_dummy/familiar_fairy": {
      "id": "occultism:ritual_dummy/familiar_fairy"
    },
    "ritual_dummy/familiar_mummy": {
      "id": "occultism:ritual_dummy/familiar_mummy"
    },
    "ritual_dummy/familiar_beaver": {
      "id": "occultism:ritual_dummy/familiar_beaver"
    },
    "ritual_dummy/possess_enderman": {
      "id": "occultism:ritual_dummy/possess_enderman"
    },
    "ritual_dummy/possess_endermite": {
      "id": "occultism:ritual_dummy/possess_endermite"
    },
    "ritual_dummy/possess_skeleton": {
      "id": "occultism:ritual_dummy/possess_skeleton"
    },
    "ritual_dummy/possess_ghast": {
      "id": "occultism:ritual_dummy/possess_ghast"
    },
    "ritual_dummy/summon_afrit_rain_weather": {
      "id": "occultism:ritual_dummy/summon_afrit_rain_weather"
    },
    "ritual_dummy/summon_afrit_thunder_weather": {
      "id": "occultism:ritual_dummy/summon_afrit_thunder_weather"
    },
    "ritual_dummy/summon_djinni_clear_weather": {
      "id": "occultism:ritual_dummy/summon_djinni_clear_weather"
    },
    "ritual_dummy/summon_djinni_day_time": {
      "id": "occultism:ritual_dummy/summon_djinni_day_time"
    },
    "ritual_dummy/summon_djinni_manage_machine": {
      "id": "occultism:ritual_dummy/summon_djinni_manage_machine"
    },
    "ritual_dummy/summon_djinni_night_time": {
      "id": "occultism:ritual_dummy/summon_djinni_night_time"
    },
    "ritual_dummy/summon_foliot_lumberjack": {
      "id": "occultism:ritual_dummy/summon_foliot_lumberjack"
    },
    "ritual_dummy/summon_foliot_otherstone_trader": {
      "id": "occultism:ritual_dummy/summon_foliot_otherstone_trader"
    },
    "ritual_dummy/summon_foliot_sapling_trader": {
      "id": "occultism:ritual_dummy/summon_foliot_sapling_trader"
    },
    "ritual_dummy/summon_foliot_transport_items": {
      "id": "occultism:ritual_dummy/summon_foliot_transport_items"
    },
    "ritual_dummy/summon_foliot_cleaner": {
      "id": "occultism:ritual_dummy/summon_foliot_cleaner"
    },
    "ritual_dummy/summon_wild_afrit": {
      "id": "occultism:ritual_dummy/summon_wild_afrit"
    },
    "ritual_dummy/summon_wild_hunt": {
      "id": "occultism:ritual_dummy/summon_wild_hunt"
    },
    "ritual_dummy/summon_wild_otherworld_bird": {
      "id": "occultism:ritual_dummy/summon_wild_otherworld_bird"
    },
    "ritual_dummy/summon_wild_parrot": {
      "id": "occultism:ritual_dummy/summon_wild_parrot"
    },
    "ritual_dummy/summon_foliot_crusher": {
      "id": "occultism:ritual_dummy/summon_foliot_crusher"
    },
    "ritual_dummy/summon_djinni_crusher": {
      "id": "occultism:ritual_dummy/summon_djinni_crusher"
    },
    "ritual_dummy/summon_afrit_crusher": {
      "id": "occultism:ritual_dummy/summon_afrit_crusher"
    },
    "ritual_dummy/summon_marid_crusher": {
      "id": "occultism:ritual_dummy/summon_marid_crusher"
    },
    "lighted_air": {
      "id": "occultism:lighted_air"
    },
    "otherstone": {
      "id": "occultism:otherstone"
    },
    "otherstone_slab": {
      "id": "occultism:otherstone_slab"
    },
    "otherstone_pedestal": {
      "id": "occultism:otherstone_pedestal"
    },
    "storage_controller_base": {
      "id": "occultism:storage_controller_base"
    },
    "otherstone_natural": {
      "id": "occultism:otherstone_natural"
    },
    "otherworld_log": {
      "id": "occultism:otherworld_log"
    },
    "otherworld_log_natural": {
      "id": "occultism:otherworld_log_natural"
    },
    "otherworld_leaves": {
      "id": "occultism:otherworld_leaves"
    },
    "otherworld_leaves_natural": {
      "id": "occultism:otherworld_leaves_natural"
    },
    "otherworld_sapling": {
      "id": "occultism:otherworld_sapling"
    },
    "silver_ore": {
      "id": "occultism:silver_ore"
    },
    "silver_ore_deepslate": {
      "id": "occultism:silver_ore_deepslate"
    },
    "iesnium_ore": {
      "id": "occultism:iesnium_ore"
    },
    "iesnium_ore_natural": {
      "id": "occultism:iesnium_ore_natural"
    },
    "silver_block": {
      "id": "occultism:silver_block"
    },
    "iesnium_block": {
      "id": "occultism:iesnium_block"
    },
    "candle_white": {
      "id": "occultism:candle_white"
    },
    "spirit_attuned_crystal": {
      "id": "occultism:spirit_attuned_crystal"
    },
    "sacrificial_bowl": {
      "id": "occultism:sacrificial_bowl"
    },
    "golden_sacrificial_bowl": {
      "id": "occultism:golden_sacrificial_bowl"
    },
    "storage_stabilizer_tier1": {
      "id": "occultism:storage_stabilizer_tier1"
    },
    "storage_stabilizer_tier2": {
      "id": "occultism:storage_stabilizer_tier2"
    },
    "storage_stabilizer_tier3": {
      "id": "occultism:storage_stabilizer_tier3"
    },
    "storage_stabilizer_tier4": {
      "id": "occultism:storage_stabilizer_tier4"
    },
    "dimensional_mineshaft": {
      "id": "occultism:dimensional_mineshaft"
    },
    "spirit_lantern": {
      "id": "occultism:spirit_lantern"
    },
    "spirit_campfire": {
      "id": "occultism:spirit_campfire"
    }
  },
  "create_enchantment_industry": {
    "id": "create_enchantment_industry:disenchanter",
    "disenchanter": {
      "id": "create_enchantment_industry:disenchanter"
    },
    "printer": {
      "id": "create_enchantment_industry:printer"
    },
    "hyper_experience_bottle": {
      "id": "create_enchantment_industry:hyper_experience_bottle"
    },
    "ink_bucket": {
      "id": "create_enchantment_industry:ink_bucket"
    },
    "enchanting_guide": {
      "id": "create_enchantment_industry:enchanting_guide"
    },
    "experience_rotor": {
      "id": "create_enchantment_industry:experience_rotor"
    }
  },
  "createaddition": {
    "id": "createaddition:electric_motor",
    "electric_motor": {
      "id": "createaddition:electric_motor"
    },
    "alternator": {
      "id": "createaddition:alternator"
    },
    "rolling_mill": {
      "id": "createaddition:rolling_mill"
    },
    "creative_energy": {
      "id": "createaddition:creative_energy"
    },
    "connector": {
      "id": "createaddition:connector"
    },
    "accumulator": {
      "id": "createaddition:accumulator"
    },
    "redstone_relay": {
      "id": "createaddition:redstone_relay"
    },
    "chocolate_cake": {
      "id": "createaddition:chocolate_cake"
    },
    "honey_cake": {
      "id": "createaddition:honey_cake"
    },
    "barbed_wire": {
      "id": "createaddition:barbed_wire"
    },
    "tesla_coil": {
      "id": "createaddition:tesla_coil"
    },
    "capacitor": {
      "id": "createaddition:capacitor"
    },
    "diamond_grit": {
      "id": "createaddition:diamond_grit"
    },
    "diamond_grit_sandpaper": {
      "id": "createaddition:diamond_grit_sandpaper"
    },
    "zinc_sheet": {
      "id": "createaddition:zinc_sheet"
    },
    "biomass": {
      "id": "createaddition:biomass"
    },
    "biomass_pellet": {
      "id": "createaddition:biomass_pellet"
    },
    "spool": {
      "id": "createaddition:spool"
    },
    "copper_spool": {
      "id": "createaddition:copper_spool"
    },
    "copper_wire": {
      "id": "createaddition:copper_wire"
    },
    "copper_rod": {
      "id": "createaddition:copper_rod"
    },
    "iron_wire": {
      "id": "createaddition:iron_wire"
    },
    "iron_rod": {
      "id": "createaddition:iron_rod"
    },
    "gold_spool": {
      "id": "createaddition:gold_spool"
    },
    "gold_wire": {
      "id": "createaddition:gold_wire"
    },
    "gold_rod": {
      "id": "createaddition:gold_rod"
    },
    "brass_rod": {
      "id": "createaddition:brass_rod"
    },
    "festive_spool": {
      "id": "createaddition:festive_spool"
    },
    "cake_base": {
      "id": "createaddition:cake_base"
    },
    "cake_base_baked": {
      "id": "createaddition:cake_base_baked"
    },
    "straw": {
      "id": "createaddition:straw"
    },
    "seed_oil_bucket": {
      "id": "createaddition:seed_oil_bucket"
    },
    "bioethanol_bucket": {
      "id": "createaddition:bioethanol_bucket"
    }
  }
};
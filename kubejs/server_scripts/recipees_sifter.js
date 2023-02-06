// priority: 9000

const siftOutput = (output, chance) => {
  return { item: `${output}`, chance: chance || 0.95 };
};
const siftCustom = (input, mesh, outputs, waterlogged, processingTime) => {
  return {
    type: 'createsifter:sifting',
    ingredients: [{ item: `${mesh}`}, { item: `${input}` }],
    processingTime: processingTime || 200,
    waterlogged: waterlogged || false,
    results: outputs
  };
};
const siftString = (input, outputs, waterlogged, processingTime) => siftCustom(input, 'createsifter:string_mesh', outputs, waterlogged, processingTime);
const siftZinc = (input, outputs, waterlogged, processingTime) => siftCustom(input, 'createsifter:zinc_mesh', outputs, waterlogged, processingTime);
const siftBrass = (input, outputs, waterlogged, processingTime) => siftCustom(input, 'createsifter:brass_mesh', outputs, waterlogged, processingTime);
const siftAndesite = (input, outputs, waterlogged, processingTime) => siftCustom(input, 'createsifter:andesite_mesh', outputs, waterlogged, processingTime);


const sifterRecipees = (event) => {
  // yellow
  event.custom(siftString(my.ars_elemental.yellow_archwood.id, [
    siftOutput(my.minecraft.gold_nugget.id, 0.75)
  ]));
  event.custom(siftZinc(my.ars_elemental.yellow_archwood.id, [
    siftOutput(my.create.crushed_gold_ore.id, 0.75)
  ]));
  event.custom(siftBrass(my.ars_elemental.yellow_archwood.id, [
    siftOutput(my.minecraft.raw_gold.id, 0.75)
  ]));
  event.custom(siftString(my.ars_elemental.yellow_archwood.id, [
    siftOutput(my.minecraft.glowstone_dust.id, 0.1)
  ], true));
  event.custom(siftZinc(my.ars_elemental.yellow_archwood.id, [
    siftOutput(my.minecraft.dandelion.id, 1)
  ], true));
  event.custom(siftBrass(my.ars_elemental.yellow_archwood.id, [
    siftOutput(my.minecraft.echo_shard.id, 1)
  ], true));
  
  // purple
  event.custom(siftString(my.ars_nouveau.purple_archwood_wood.id, [
    siftOutput(my.create.copper_nugget.id, 0.75)
  ]));
  event.custom(siftZinc(my.ars_nouveau.purple_archwood_wood.id, [
    siftOutput(my.create.crushed_copper_ore.id, 0.75)
  ]));
  event.custom(siftBrass(my.ars_nouveau.purple_archwood_wood.id, [
    siftOutput(my.minecraft.raw_copper.id, 0.75)
  ]));
  event.custom(siftString(my.ars_nouveau.purple_archwood_wood.id, [
    siftOutput(my.farmersdelight.wild_beetroots.id, 0.1),
    siftOutput(my.ars_nouveau.bastion_pod.id, 0.1),
    siftOutput(my.ars_nouveau.frostaya_pod.id, 0.1),
    siftOutput(my.ars_elemental.flashpine_pod.id, 0.1),
    siftOutput(my.ars_nouveau.mendosteen_pod.id, 0.1),
    siftOutput(my.ars_nouveau.bombegranate_pod.id, 0.1),
  ], true));
  event.custom(siftZinc(my.ars_nouveau.purple_archwood_wood.id, [
    siftOutput(my.minecraft.brain_coral.id, 0.2),
    siftOutput(my.minecraft.chorus_fruit.id, 0.2)
  ], true));
  event.custom(siftBrass(my.ars_nouveau.purple_archwood_wood.id, [
    siftOutput(my.minecraft.chorus_flower.id, 0.2),
    siftOutput(my.minecraft.chorus_plant.id, 0.2)
  ], true));

  // red
  event.custom(siftString(my.ars_nouveau.red_archwood_wood.id, [
    siftOutput(my.minecraft.redstone.id, 0.5)
  ]));
  event.custom(siftZinc(my.ars_nouveau.red_archwood_wood.id, [
    siftOutput(my.minecraft.blaze_powder.id, 0.5),
    siftOutput(my.minecraft.gunpowder.id, 0.5)
  ]));
  event.custom(siftBrass(my.ars_nouveau.red_archwood_wood.id, [
    siftOutput(my.minecraft.quartz.id, 0.5)
  ]));
  event.custom(siftString(my.ars_nouveau.red_archwood_wood.id, [
    siftOutput(my.occultism.datura_seeds.id, 0.2),
    siftOutput(my.minecraft.poppy.id, 0.2),
    siftOutput(my.minecraft.rose_bush.id, 0.2),
    siftOutput(my.minecraft.nether_wart.id, 0.2),
  ], true));
  event.custom(siftZinc(my.ars_nouveau.red_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1),
  ], true));
  event.custom(siftBrass(my.ars_nouveau.red_archwood_wood.id, [
    siftOutput(my.minecraft.rose_bush.id, 1)
  ], true));

  // blue
  event.custom(siftString(my.ars_nouveau.blue_archwood_wood.id, [
    siftOutput(my.create.zinc_nugget.id, 0.75)
  ]));
  event.custom(siftZinc(my.ars_nouveau.blue_archwood_wood.id, [
    siftOutput(my.create.crushed_zinc_ore.id, 0.75)
  ]));
  event.custom(siftBrass(my.ars_nouveau.blue_archwood_wood.id, [
    siftOutput(my.create.raw_zinc.id, 0.75)
  ]));
  event.custom(siftString(my.ars_nouveau.blue_archwood_wood.id, [
    siftOutput(my.minecraft.cornflower.id, 0.2),
    siftOutput(my.minecraft.blue_orchid.id, 0.2)
  ], true));
  event.custom(siftZinc(my.ars_nouveau.blue_archwood_wood.id, [
    siftOutput(my.minecraft.lapis_lazuli.id, 0.5)
  ], true));
  event.custom(siftBrass(my.ars_nouveau.blue_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1),
  ], true));

  // green
  event.custom(siftString(my.ars_nouveau.green_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ]));
  event.custom(siftZinc(my.ars_nouveau.green_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ]));
  event.custom(siftBrass(my.ars_nouveau.green_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ]));
  event.custom(siftString(my.ars_nouveau.green_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ], true));
  event.custom(siftZinc(my.ars_nouveau.green_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ], true));
  event.custom(siftBrass(my.ars_nouveau.green_archwood_wood.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ], true));

  // dirt
  event.custom(siftString(my.minecraft.dirt.id, [
    siftOutput(my.minecraft.wheat_seeds.id, 0.1),
    siftOutput(my.minecraft.melon_seeds.id, 0.1),
    siftOutput(my.minecraft.pumpkin_seeds.id, 0.1),
    siftOutput(my.minecraft.oak_sapling.id, 0.1),
    siftOutput(my.minecraft.birch_sapling.id, 0.1),
    siftOutput(my.minecraft.acacia_sapling.id, 0.1),
    siftOutput(my.minecraft.jungle_sapling.id, 0.1),
    siftOutput(my.minecraft.spruce_sapling.id, 0.1),
    siftOutput(my.minecraft.sweet_berries.id, 1),
    siftOutput(my.minecraft.fern.id, 0.1),
    siftOutput(my.minecraft.grass.id, 0.1),
    siftOutput(my.minecraft.cocoa_beans.id, 0.01)
  ]));
  event.custom(siftZinc(my.minecraft.dirt.id, [
    siftOutput(my.minecraft.cocoa_beans.id, 0.2),
    siftOutput(my.minecraft.apple.id, 0.2)
  ]));
  event.custom(siftString(my.minecraft.dirt.id, [
    siftOutput(my.minecraft.kelp.id, 0.4),
    siftOutput(my.minecraft.sea_pickle.id, 0.2),
    siftOutput(my.minecraft.seagrass.id, 0.2)
  ], true));
  event.custom(siftZinc(my.minecraft.dirt.id, [
    siftOutput(my.farmersdelight.rice.id, 0.1),
    siftOutput(my.farmersdelight.tomato_seeds.id, 0.1),
    siftOutput(my.farmersdelight.cabbage_seeds.id, 0.1),
    siftOutput(my.farmersdelight.brown_mushroom_colony.id, 0.1),
    siftOutput(my.farmersdelight.onion.id, 0.1),
    siftOutput(my.farmersdelight.wild_potatoes.id, 0.1),
    siftOutput(my.farmersdelight.wild_onions.id, 0.1),
    siftOutput(my.farmersdelight.wild_cabbages.id, 0.1),
    siftOutput(my.farmersdelight.wild_rice.id, 0.1),
    siftOutput(my.farmersdelight.wild_tomatoes.id, 0.1),
    siftOutput(my.farmersdelight.wild_beetroots.id, 0.1),
  ], true));

  // sand
  event.custom(siftString(my.minecraft.sand.id, [
    siftOutput(my.minecraft.sugar_cane.id, 0.25),
    siftOutput(my.minecraft.cactus.id, 0.25),
    siftOutput(my.minecraft.bamboo.id, 0.25)
  ]));
  event.custom(siftZinc(my.minecraft.sand.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ]));
  event.custom(siftString(my.minecraft.sand.id, [
    siftOutput(my.minecraft.cod.id, 0.1),
    siftOutput(my.minecraft.tropical_fish.id, 0.1),
    siftOutput(my.minecraft.salmon.id, 0.1),
    siftOutput(my.minecraft.pufferfish.id, 0.1),
    siftOutput(my.minecraft.tadpole_bucket.id, 0.1),
  ], true));
  event.custom(siftZinc(my.minecraft.sand.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ], true));

  // gravel
  event.custom(siftString(my.minecraft.gravel.id, [
    siftOutput(my.minecraft.flint.id, 1),
  ]));
  event.custom(siftZinc(my.minecraft.gravel.id, [
    siftOutput(my.minecraft.coal.id, 0.5),
  ]));
  event.custom(siftString(my.minecraft.gravel.id, [
    siftOutput(my.minecraft.pointed_dripstone.id, 0.5),
    siftOutput(my.minecraft.ink_sac.id, 0.5)
  ], true));
  event.custom(siftString(my.minecraft.gravel.id, [
    siftOutput(my.minecraft.spore_blossom.id, 0.2),
    siftOutput(my.minecraft.red_mushroom.id, 0.2),
    siftOutput(my.minecraft.brown_mushroom.id, 0.2),
  ], true));
  
  // menril
  event.custom(siftString(my.integrateddynamics.crystalized_menril_block.id, [
    siftOutput(my.minecraft.iron_nugget.id, 0.75),
    siftOutput(my.integrateddynamics.crystalized_menril_chunk.id, 0.25)
  ]));
  event.custom(siftZinc(my.integrateddynamics.crystalized_menril_block.id, [
    siftOutput(my.create.crushed_iron_ore.id, 0.75),
  ]));
  event.custom(siftString(my.integrateddynamics.crystalized_menril_block.id, [
    siftOutput(my.minecraft.prismarine_crystals.id, 0.45),
    siftOutput(my.minecraft.prismarine_shard.id, 0.45)
  ], true));
  event.custom(siftZinc(my.integrateddynamics.crystalized_menril_block.id, [
    siftOutput(my.minecraft.acacia_door.id, 1)
  ], true));

  // magebloom
  event.custom(siftString(my.ars_nouveau.magebloom_block.id, [
    siftOutput(my.minecraft.phantom_membrane.id, 0.1),
    siftOutput(my.minecraft.rotten_flesh.id, 0.25),
    siftOutput(my.minecraft.bone.id, 0.25),
    siftOutput(my.minecraft.spider_eye.id, 0.25),
  ]));
  event.custom(siftString(my.ars_nouveau.magebloom_block.id, [
    siftOutput(my.minecraft.feather.id, 0.2),
    siftOutput(my.minecraft.leather.id, 0.2),
    siftOutput(my.minecraft.rabbit_foot.id, 0.2),
    siftOutput(my.minecraft.rabbit_hide.id, 0.2),
  ], true));
};
// priority: 9000

const apparatusItem = (item) => ({ item: { item: `${item}` }});
const apparatus = (output, input, inputs, cost) => {
  return {
    'type': 'ars_nouveau:enchanting_apparatus',
    'keepNbtOfReagent': true,
    'output': { 'item': `${output}` },
    'pedestalItems': inputs,
    'reagent': [{'item': `${input}`}],
    'sourceCost': cost || 0
  };
};
const apparatusRaw = (output, input, inputs, cost) => {
  return {
    'type': 'ars_nouveau:enchanting_apparatus',
    'keepNbtOfReagent': true,
    'output': { 'item': `${output}` },
    'pedestalItems': inputs,
    'reagent': [input],
    'sourceCost': cost || 0
  };
};

const arsEnchantmentRecipees = (event) => {
	event.shaped('ars_nouveau:enchanting_apparatus',
    ['YSY', ' M ', 'YSY'],
    { Y: ARCHWOOD_WOOD.yellow, M: 'integrateddynamics:crystalized_menril_block', S: sourcestone });
	event.shaped(`16x ${sourcestone}`,
    ['FFF', 'FGF', 'FFF'],
    { F: 'ars_nouveau:magebloom_block', G: sourcegemblock });
	event.shaped('ars_nouveau:arcane_core', ['SSS', 'YGY', 'SSS'], { S: sourcestone, Y: ARCHWOOD_WOOD.yellow, G: sourcegem });
  
  // ars
  event.custom(apparatusRaw(`${my.ars_nouveau.red_archwood_sapling.id}`, { tag: 'minecraft:saplings' }, [
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
    apparatusItem(my.minecraft.red_dye.id),
  ]));
  event.custom(apparatus(`${my.ars_nouveau.volcanic_sourcelink.id}`, my.ars_elemental.yellow_archwood.id, [
    apparatusItem(my.minecraft.gold_ingot.id),
    apparatusItem(my.minecraft.gold_ingot.id),
    apparatusItem(my.ars_nouveau.source_gem.id),
    apparatusItem(my.ars_nouveau.source_gem.id)
  ]));
  event.custom(apparatus(`${my.ars_nouveau.ritual_flight.id}`, my.ars_elemental.yellow_archwood.id, [
    apparatusItem(my.minecraft.feather.id),
    apparatusItem(my.minecraft.feather.id),
    apparatusItem(my.ars_nouveau.source_gem.id),
    apparatusItem(my.ars_nouveau.source_gem.id)
  ]));
  event.custom(apparatus(`${my.ars_nouveau.ritual_brazier.id}`, my.ars_nouveau.source_gem_block.id, [
    apparatusItem(my.minecraft.gold_ingot.id),
    apparatusItem(my.minecraft.gold_ingot.id),
    apparatusItem(my.minecraft.gold_ingot.id),
    apparatusItem(my.minecraft.gold_ingot.id),
  ]));

  // essence
  event.custom(apparatus(my.ars_nouveau.water_essence.id, sourcegem, Array(3).fill(apparatusItem(menrilchunk)), 200));
  event.custom(apparatus(my.ars_nouveau.air_essence.id, sourcegem, Array(5).fill(apparatusItem(my.minecraft.glowstone_dust.id)), 200));
  event.custom(apparatus(my.ars_nouveau.fire_essence.id, sourcegem, Array(3).fill(apparatusItem(my.minecraft.lava_bucket.id)), 200));
  event.custom(apparatus(my.ars_nouveau.earth_essence.id, sourcegem, Array(5).fill(apparatusItem(my.minecraft.grass_block.id)), 200));
  event.custom(apparatus(my.ars_nouveau.manipulation_essence.id, sourcegem, Array(3).fill(apparatusItem(my.minecraft.redstone.id)).concat([
    apparatusItem(my.ars_nouveau.archwood_button.id),
    apparatusItem(my.minecraft.clock.id)
  ]), 200));

  // sifter - meshes
  event.custom(apparatus(my.createsifter.zinc_mesh.id, my.createsifter.string_mesh.id, Array(8).fill(apparatusItem(my.create.zinc_ingot.id)), 500));
  event.custom(apparatus(my.createsifter.brass_mesh.id, my.createsifter.zinc_mesh.id, Array(8).fill(apparatusItem(my.create.brass_ingot.id)), 1000));
  event.custom(apparatus(my.createsifter.andesite_mesh.id, my.createsifter.brass_mesh.id, Array(8).fill(apparatusItem(my.create.andesite_alloy.id)), 2000));
  
  // vanilla
  event.custom(apparatusRaw(`${my.minecraft.shears.id}`, { item: my.ars_nouveau.red_archwood_wood.id }, [
    { item: { item: my.create.iron_sheet.id} },
    { item: { item: my.create.iron_sheet.id} },
  ], 200));
  event.custom(apparatusRaw(`${my.minecraft.wither_rose.id}`, { tag: 'minecraft:flowers' }, [
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
  ], 1000));
  event.custom(apparatusRaw(`${my.minecraft.wither_skeleton_skull.id}`, { item: my.minecraft.skeleton_skull.id }, [
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
    { item: { item: 'minecraft:black_dye' } },
  ], 1000));
  event.custom(apparatusRaw(`${my.minecraft.campfire.id}`, { item: my.minecraft.charcoal.id }, [
    { item: { item: 'minecraft:stick' } },
    { item: { item: 'minecraft:stick' } },
    { item: { item: 'minecraft:stick' } },
    { item: { tag: 'minecraft:logs_that_burn' } },
    { item: { tag: 'minecraft:logs_that_burn' } },
    { item: { tag: 'minecraft:logs_that_burn' } },
  ], 10));
  event.custom(apparatus(`${my.minecraft.hopper.id}`, my.minecraft.chest.id, [
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.minecraft.piston.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.redstone_block.id)
  ], 500));
  event.custom(apparatus(`${my.minecraft.cauldron.id}`, my.ars_nouveau.water_essence.id, [
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  
  // Create
  event.custom(apparatus(`${my.create.cogwheel.id}`, my.create.shaft.id, Array(8).fill(
    apparatusItem(my.ars_nouveau.archwood_button.id)
  ), 500));
  event.custom(apparatus(`${my.create.large_cogwheel.id}`, my.create.shaft.id, Array(8).fill(
    apparatusItem(my.ars_nouveau.archwood_planks.id)
  ), 500));
  event.custom(apparatus(`${my.create.brass_casing.id}`, my.ars_nouveau.magebloom_block.id, Array(8).fill(
    apparatusItem(my.create.brass_ingot.id)
  ), 500));
  event.custom(apparatus(`${my.create.copper_casing.id}`, my.ars_nouveau.magebloom_block.id, Array(8).fill(
    apparatusItem(my.minecraft.copper_ingot.id)
  ), 500));
  event.custom(apparatus(`${my.create.andesite_casing.id}`, my.ars_nouveau.magebloom_block.id, Array(8).fill(
    apparatusItem(my.minecraft.iron_ingot.id)
  ), 500));
  event.custom(apparatus(`${my.create.item_drain.id}`, my.create.copper_casing.id, [
    apparatusItem(my.minecraft.iron_bars.id)
  ], 500));
  event.custom(apparatus(`${my.create_mechanical_extruder.mechanical_extruder.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id), apparatusItem(my.create.framed_glass.id), apparatusItem(my.minecraft.iron_block.id), apparatusItem(my.create.framed_glass.id)
  ], 500));
  event.custom(apparatus(`${my.create.mechanical_plough.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.minecraft.wooden_shovel.id), apparatusItem(my.minecraft.iron_block.id)
  ], 500));
  event.custom(apparatus(`${my.create.mechanical_harvester.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.minecraft.wooden_hoe.id), apparatusItem(my.minecraft.iron_block.id)
  ], 500));
  event.custom(apparatus(`${my.create.mechanical_press.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id), apparatusItem(my.minecraft.iron_block.id)
  ], 500));
  event.custom(apparatus(`${my.create.mechanical_mixer.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.cogwheel.id), apparatusItem(my.create.whisk.id)
  ], 500));
  event.custom(apparatus(`${my.createsifter.sifter.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id), apparatusItem(my.create.cogwheel.id), apparatusItem(my.ars_nouveau.sourcestone.id)
  ], 500));
  event.custom(apparatus(`${my.create.deployer.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id),
    apparatusItem(my.create.electron_tube.id),
    apparatusItem(my.create.brass_hand.id),
  ], 500));
  event.custom(apparatus(`${my.create.brass_hand.id}`, my.create.iron_sheet.id, [
    apparatusItem(my.create.golden_sheet.id),
    apparatusItem(my.create.golden_sheet.id),
    apparatusItem(my.create.golden_sheet.id),
  ], 500));
  event.custom(apparatus(`${my.create.brass_hand.id}`, my.create.iron_sheet.id, [
    apparatusItem(my.create.brass_sheet.id),
    apparatusItem(my.create.brass_sheet.id),
    apparatusItem(my.create.brass_sheet.id),
  ], 500));
  event.custom(apparatus(`${my.createaddition.rolling_mill.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.create.andesite_funnel.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.minecraft.dried_kelp.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.create.belt_connector.id}`, my.minecraft.dried_kelp.id, [
    apparatusItem(my.minecraft.dried_kelp.id),
    apparatusItem(my.minecraft.dried_kelp.id),
    apparatusItem(my.minecraft.dried_kelp.id),
    apparatusItem(my.minecraft.dried_kelp.id),
    apparatusItem(my.minecraft.dried_kelp.id)
  ], 500));
  event.custom(apparatus(`${my.create.encased_fan.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id), apparatusItem(my.create.propeller.id)
  ], 500));
  event.custom(apparatus(`${my.create.basin.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.create.crushing_wheel.id}`, my.create.shaft.id, [
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
  ], 500));
  event.custom(apparatus(`${my.create.millstone.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.cogwheel.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.create.shaft.id),
    apparatusItem(my.minecraft.iron_block.id),
    apparatusItem(my.minecraft.iron_block.id),
  ], 500));
  event.custom(apparatus(`${my.create.mechanical_saw.id}`, my.create.andesite_casing.id, [
    apparatusItem(my.create.shaft.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.create.whisk.id}`, my.create.shaft.id, [
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.create.propeller.id}`, my.minecraft.iron_ingot.id, [
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id),
    apparatusItem(my.create.iron_sheet.id)
  ], 500));
  event.custom(apparatus(`${my.create.empty_blaze_burner.id}`, my.minecraft.blaze_powder.id, [
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
    apparatusItem(my.minecraft.iron_bars.id),
  ], 500));
  event.custom(apparatus(`${my.create.blaze_burner.id}`, my.create.empty_blaze_burner.id, [
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
    apparatusItem(my.minecraft.blaze_powder.id),
  ], 500));
  event.custom(apparatus(`${my.create.fluid_tank.id}`, my.create.framed_glass.id, [
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
    apparatusItem(my.minecraft.copper_block.id),
  ], 500));
};
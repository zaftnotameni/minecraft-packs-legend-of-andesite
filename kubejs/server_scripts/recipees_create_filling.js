// priority: 9000

const createFillingRecipee = (output, input) => {
  return {
    type: 'create:filling',
    ingredients: input,
    results: output
  };
};

const createFillingRecipees = (event) => {
  // vanilla
  event.custom(createFillingRecipee([Item.of(my.minecraft.blaze_rod.id)], [
    Item.of(my.createaddition.iron_rod.id), Fluid.of('kubejs:molten_blaze', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.observer.id)], [
    Item.of(my.minecraft.smooth_stone.id), Fluid.of('kubejs:molten_redstone', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.dispenser.id)], [
    Item.of(my.minecraft.cobblestone.id), Fluid.of('kubejs:molten_redstone', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.dropper.id)], [
    Item.of(my.minecraft.stone.id), Fluid.of('kubejs:molten_redstone', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.redstone_torch.id)], [
    Item.of(my.minecraft.stick.id), Fluid.of('kubejs:molten_redstone', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.rail.id)], [
    Item.of(my.minecraft.stick.id), Fluid.of('kubejs:molten_iron', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.rail.id)], [
    Item.of(my.minecraft.powered_rail.id), Fluid.of('kubejs:molten_redstone', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.clock.id)], [
    Item.of(my.create.golden_sheet.id), Fluid.of('kubejs:molten_redstone', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.golden_apple.id)], [
    Item.of(my.minecraft.apple.id), Fluid.of('kubejs:molten_gold', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.enchanted_golden_apple.id)], [
    Item.of(my.minecraft.apple.id), Fluid.of('kubejs:molten_brass', 125).toJson()
  ]));
  [my.create.iron_sheet.id, my.createaddition.zinc_sheet.id].forEach(i => {
    event.custom(createFillingRecipee([Item.of(my.minecraft.compass.id)], [
      Item.of(i), Fluid.of('kubejs:molten_redstone', 125).toJson()
    ]));
  });

  event.custom(createFillingRecipee([Item.of(my.create.brass_ingot.id)], [
    Item.of(my.create.golden_sheet.id), Fluid.of('kubejs:molten_brass', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.ars_nouveau.bucket_of_source.id)], [
    Item.of(my.minecraft.bucket.id), Fluid.of('kubejs:molten_source', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of('ars_nouveau:source_jar', '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:1000}}')], [
    Item.of(my.create.framed_glass.id), Fluid.of('kubejs:molten_source', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.ender_eye.id)], [
    Item.of(my.minecraft.ender_pearl.id), Fluid.of('kubejs:molten_blaze', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.end_crystal.id)], [
    Item.of(my.minecraft.ghast_tear.id), Fluid.of('kubejs:molten_blaze', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.nether_star.id)], [
    Item.of(my.ars_nouveau.starbuncle_shards.id), Fluid.of('kubejs:molten_diamond', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.magma_block.id)], [
    Item.of(my.minecraft.blackstone.id), Fluid.of('kubejs:molten_blaze', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.blaze_powder.id)], [
    Item.of(my.minecraft.gunpowder.id), Fluid.of('kubejs:molten_blaze', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.blaze_powder.id)], [
    Item.of(my.minecraft.gunpowder.id), Fluid.of('create:honey', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.ars_nouveau.source_berry.id)], [
    Item.of(my.minecraft.sweet_berries.id), Fluid.of('kubejs:molten_source', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.amethyst_block.id)], [
    Item.of(my.minecraft.diamond_block.id), Fluid.of('kubejs:molten_source', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.amethyst_shard.id)], [
    Item.of(my.minecraft.diamond.id), Fluid.of('kubejs:molten_source', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.budding_amethyst.id)], [
    Item.of(my.minecraft.emerald_block.id), Fluid.of('kubejs:molten_source', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.amethyst_cluster.id)], [
    Item.of(my.minecraft.emerald.id), Fluid.of('kubejs:molten_source', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of('minecraft:warped_wart_block')], [
    { tag: 'minecraft:leaves' }, Fluid.of('integrateddynamics:menril_resin', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of('minecraft:nether_wart_block')], [
    { tag: 'minecraft:leaves' }, Fluid.of('kubejs:molten_redstone', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of('minecraft:snowball')], [
    { tag: 'minecraft:flowers' }, Fluid.of('integrateddynamics:menril_resin', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.shulker_box.id)], [
    Item.of(my.minecraft.chest.id), Fluid.of('integrateddynamics:liquid_chorus', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.integrateddynamics.crystalized_chorus_block.id)], [
    Item.of(my.integrateddynamics.crystalized_menril_block.id), Fluid.of('integrateddynamics:liquid_chorus', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.integratedterminals.terminal_storage_portable.id)], [
    Item.of(my.integratedterminals.part_terminal_storage.id), Fluid.of('kubejs:molten_ender', 1000).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.minecraft.totem_of_undying.id)], [
    Item.of(my.minecraft.pointed_dripstone.id), Fluid.of('kubejs:molten_gold', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.ars_nouveau.wilden_horn.id)], [
    Item.of(my.minecraft.pointed_dripstone.id), Fluid.of('kubejs:molten_quartz', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.ars_nouveau.wilden_spike.id)], [
    Item.of(my.minecraft.pointed_dripstone.id), Fluid.of('kubejs:molten_copper', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.ars_nouveau.wilden_wing.id)], [
    Item.of(my.minecraft.wooden_axe.id), Fluid.of('create_confectionery:black_chocolate', 125).toJson()
  ]));
  event.custom(createFillingRecipee([Item.of(my.ars_nouveau.wilden_tribute.id)], [
    Item.of(my.ars_nouveau.ritual_wilden_summon.id), Fluid.of('create_confectionery:hot_chocolate', 125).toJson()
  ]));
};
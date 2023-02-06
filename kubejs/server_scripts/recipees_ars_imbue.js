// priority: 9000

const imbueRaw = (input, output, pedestals, source) => {
  return {
    'type': 'ars_nouveau:imbuement',
    'count': 1,
    'input': input,
    'output': output,
    'pedestalItems': (pedestals || []).map(i => ({ item: { item: `${i}` } })),
    'source': source || 10
  };
};
const imbue = (input, output, pedestals, source) => imbueRaw({ 'item': `${input}` }, `${output}`, pedestals, source);

const arsImbueRecipees = (event) => {
  event.shaped(
    '1x ars_nouveau:imbuement_chamber',
    ['SYS', 'YYY', 'PPP'],
    { P: ARCHWOOD_WOOD.purple, Y: ARCHWOOD_WOOD.yellow, S: sourcestone }
  );
  event.shaped(
    '1x itemcollectors:basic_collector',
    [' X ', 'CCC'],
    { X: my.create.chute.id, C: my.ars_nouveau.archwood_chest.id }
  );
  event.shaped(
    '1x itemcollectors:advanced_collector',
    [' X ', 'CCC'],
    { X: my.create.smart_chute.id, C: my.ars_nouveau.archwood_chest.id }
  );
  event.shaped(
    '1x ars_nouveau:arcane_pedestal',
    ['SPS', 'YSY', 'YSY'],
    { P: ARCHWOOD_WOOD.purple, Y: ARCHWOOD_WOOD.yellow, S: sourcestone }
  );
  event.shaped(
    '1x ars_nouveau:dull_trinket',
    ['FFF', 'FSF', 'FFF'],
    { F: 'ars_nouveau:magebloom_fiber', S: sourcegem }
  );
  
  event.custom(imbue(my.ars_nouveau.basic_spell_turret.id, my.ars_nouveau.rotating_spell_turret.id, [my.create.brass_casing.id], 1000));
  event.custom(imbue(sourcegem, my.ars_nouveau.basic_spell_turret.id, [my.create.andesite_casing.id], 1000));
  event.custom(imbue(sourcegem, my.ars_nouveau.spell_turret.id, [my.create.copper_casing.id], 1000));
  event.custom(imbue(my.ars_nouveau.purple_archwood_sapling.id, magebloomseed, [sourcegem], 200));
  event.custom(imbue(ARCHWOOD_WOOD.purple, sourcegemblock, [], 200));
  event.custom(imbue(magebloomseed, my.integrateddynamics.menril_sapling.id, [sourcegem], 200));
  event.custom(imbue(sourcegemblock, 'ars_nouveau:apprentice_spell_book', [ARCHWOOD_WOOD.yellow, ARCHWOOD_WOOD.yellow], 200));
  event.custom(imbue(my.minecraft.stick.id, my.minecraft.bow.id, Array(3).fill(my.minecraft.string.id), 200));
  event.custom(imbue(my.minecraft.stone.id, my.minecraft.brain_coral_block.id, Array(8).fill(my.minecraft.brain_coral.id), 200));
  event.custom(imbue(my.minecraft.slime_ball.id, my.minecraft.egg.id, Array(8).fill(my.minecraft.bone_meal.id), 200));
  event.custom(imbue(my.ars_nouveau.starbuncle_shards.id, my.ars_nouveau.starbuncle_charm.id, Array(8).fill(my.ars_nouveau.magebloom_fiber.id), 200));
  event.custom(imbue(my.ars_nouveau.wixie_shards.id, my.ars_nouveau.wixie_charm.id, Array(8).fill(my.ars_nouveau.magebloom_fiber.id), 200));
  event.custom(imbue(my.ars_nouveau.whirlisprig_shards.id, my.ars_nouveau.whirlisprig_charm.id, Array(8).fill(my.ars_nouveau.magebloom_fiber.id), 200));
  event.custom(imbue(my.ars_elemental.siren_shards.id, my.ars_elemental.siren_charm.id, Array(8).fill(my.ars_nouveau.magebloom_fiber.id), 200));
  event.custom(imbue('itemcollectors:basic_collector', my.ars_nouveau.drygmy_charm.id, Array(8).fill(my.ars_nouveau.magebloom_fiber.id), 200));
  event.custom(imbue(my.create.water_wheel.id, my.ars_creo.starbuncle_wheel.id, Array(1).fill(my.ars_nouveau.starbuncle_charm.id), 200));
  event.custom(imbue(my.create.large_cogwheel.id, my.create.water_wheel.id, Array(8).fill(my.minecraft.stick.id), 200));
  event.custom(imbue(my.minecraft.string.id, my.createsifter.string_mesh.id, Array(8).fill(my.minecraft.stick.id), 200));
  
  // vanilla
  event.custom(imbueRaw({ item: my.create.framed_glass.id }, my.minecraft.glass_bottle.id, [my.ars_nouveau.archwood_slab.id], 40));
  event.custom(imbueRaw({ item: my.minecraft.glass_bottle.id }, my.minecraft.potion.id, [my.ars_nouveau.water_essence.id], 40));
  event.shapeless({ item: my.minecraft.potion.id, nbt: '{Potion:"minecraft:water"}' }, [my.minecraft.potion.id]);
  event.custom(imbue(my.minecraft.bucket.id, my.minecraft.water_bucket.id, Array(8).fill(my.ars_nouveau.water_essence.id), 20));
  event.custom(imbue(my.minecraft.kelp.id, my.minecraft.dried_kelp.id, Array(8).fill(my.ars_nouveau.fire_essence.id), 20));
  event.custom(imbue(my.minecraft.potato.id, my.minecraft.baked_potato.id, Array(8).fill(my.ars_nouveau.fire_essence.id), 20));
  event.custom(imbueRaw({ tag: 'minecraft:logs_that_burn' }, my.minecraft.charcoal.id, Array(8).fill(my.ars_nouveau.fire_essence.id), 20));
  
  // create
  event.custom(imbue(my.create.andesite_casing.id, my.create.gearbox.id, Array(4).fill(my.create.cogwheel.id), 200));
  event.custom(imbue(my.create.andesite_casing.id, my.create.encased_chain_drive.id, [my.create.shaft.id], 200));
  event.custom(imbue(my.minecraft.iron_block.id, my.create.shaft.id, [], 400));
  event.custom(imbue(my.create.tiled_glass.id, my.create.framed_glass.id, [], 100));
  event.custom(imbue(my.create.gearbox.id, my.create.vertical_gearbox.id, [], 10));
  event.custom(imbue(my.create.vertical_gearbox.id, my.create.gearbox.id, [], 10));
  event.custom(imbue(my.create.copper_sheet.id, my.create.fluid_pipe.id, [my.ars_nouveau.water_essence.id], 10));
  event.custom(imbue(my.create.fluid_pipe.id, my.create.mechanical_pump.id, [my.create.cogwheel.id], 10));
  event.custom(imbue(my.create.fluid_pipe.id, my.create.smart_fluid_pipe.id, [my.create.filter.id], 10));
  event.custom(imbue(my.minecraft.paper.id, my.create.filter.id, [my.minecraft.iron_bars.id], 10));
  event.custom(imbue(my.create.filter.id, my.create.attribute_filter.id, [my.minecraft.paper.id], 10));

  // glyphs
  event.custom(imbue(my.minecraft.shears.id, my.ars_nouveau.glyph_sensitive.id, [], 400));
  event.custom(imbue(my.minecraft.wooden_sword.id, my.ars_nouveau.glyph_cut.id, [], 400));
  event.custom(imbue(my.minecraft.wooden_axe.id, my.ars_nouveau.glyph_fell.id, [my.ars_elemental.yellow_archwood_log.id, my.ars_elemental.stripped_yellow_archwood_log.id], 400));
  event.custom(imbue(my.ars_nouveau.archwood_planks.id, my.ars_nouveau.glyph_crush.id, [my.ars_nouveau.archwood_button.id, my.ars_nouveau.archwood_button.id], 400));
  event.custom(imbue(my.minecraft.dirt.id, my.ars_nouveau.glyph_grow.id, [my.minecraft.bone_meal.id, sourcegem], 400));
  event.custom(imbue(my.minecraft.dirt.id, my.arsomega.glyph_advanced_grow.id, [magebloomseed, sourcegemblock], 4000));

};
// priority: 0

ServerEvents.recipes(event => {
  recipeeRemovals(event);
  
  event.shapeless(my.minecraft.iron_block.id, [`9x ${my.minecraft.iron_ingot.id}`]);
  event.shapeless(my.minecraft.gold_block.id, [`9x ${my.minecraft.gold_ingot.id}`]);
  event.shapeless(my.minecraft.copper_block.id, [`9x ${my.minecraft.copper_ingot.id}`]);
  
  event.shaped(my.minecraft.lantern.id, [' N ', 'NSN', ' N '], { N: my.minecraft.gold_nugget.id, S: my.minecraft.stick.id });
  
  event.shaped('toms_storage:ts.crafting_terminal', ['CIC', 'ZTU', 'CGC'], {
    T: 'toms_storage:ts.storage_terminal',
    C: my.minecraft.crafting_table.id,
    I: my.minecraft.iron_block.id,
    G: my.minecraft.gold_block.id,
    U: my.minecraft.copper_block.id,
    Z: my.create.zinc_block.id
  });

  // vanilla
  event.shaped(my.minecraft.bucket.id, ['S S', ' S '], { S: my.create.iron_sheet.id });
  event.shaped(my.minecraft.chest.id, ['AWA', 'WNW', 'AWA'], { W: my.ars_nouveau.archwood_planks.id, N: '#forge:nuggets', A: '#forge:logs/archwood' });
  event.shapeless(my.minecraft.stick.id, ['1x #forge:logs/archwood']);
  event.shapeless(my.ars_nouveau.archwood_planks.id, ['3x #forge:logs/archwood']);
  event.shapeless(my.minecraft.flint_and_steel.id, [my.alloyed.steel_ingot.id, my.minecraft.flint.id]);
  
  // create
  event.shapeless(my.create.wrench.id, [my.minecraft.gold_nugget.id, my.minecraft.gold_nugget.id, my.create.cogwheel.id, my.minecraft.stick.id]);
  event.shapeless(my.create.goggles.id, [my.minecraft.gold_nugget.id, my.create.framed_glass.id, my.create.framed_glass.id]);
  
  // integrated dynamics
  event.shapeless(my.integrateddynamics.crystalized_menril_block.id, Array(4).fill(my.integrateddynamics.crystalized_menril_chunk.id));
  event.shapeless(my.integrateddynamics.wrench.id, [my.integrateddynamics.crystalized_menril_chunk.id, my.integrateddynamics.crystalized_menril_chunk.id, my.minecraft.stick.id]);
  event.shaped(my.integrateddynamics.mechanical_drying_basin.id, ['W W', 'W W', 'WWW'], { W: my.ars_nouveau.purple_archwood_wood.id });
  event.shaped(my.integrateddynamics.mechanical_squeezer.id, ['III', 'W W', 'III'], { W: my.ars_nouveau.purple_archwood_wood.id, I: my.minecraft.iron_block.id });
  
  // ars
  event.shapeless('kubejs:molten_source_bucket', my.ars_nouveau.bucket_of_source.id);
  event.shapeless(my.ars_nouveau.bucket_of_source.id, 'kubejs:molten_source_bucket');
  event.shapeless(my.ars_nouveau.archmage_spell_book.id, [
    my.ars_nouveau.apprentice_spell_book.id,
    my.minecraft.copper_block.id, my.minecraft.iron_block.id, my.minecraft.gold_block.id,
    my.minecraft.glowstone_dust.id, my.ars_nouveau.starbuncle_charm.id, my.minecraft.kelp.id,
    my.create.andesite_casing.id, my.create.copper_casing.id]);
  event.shapeless(my.arsomega.arcane_book.id, [
    my.ars_nouveau.archmage_spell_book.id,
    my.minecraft.redstone_block.id, my.minecraft.dried_kelp_block.id, my.create.zinc_block.id,
    my.minecraft.quartz_block.id, my.create.electron_tube.id, my.minecraft.blaze_powder.id,
    my.minecraft.gunpowder.id, my.minecraft.netherrack.id]);

  arsImbueRecipees(event);
  arsCrushRecipees(event);
  arsEnchantmentRecipees(event);
  arsGlyphRecipees(event);
  summoningRitualsRecipees(event);
  sifterRecipees(event);
  extrudingerRecipees(event);
  createSawRecipees(event);
  createAssemblyRecipees(event);
  createCompactingRecipees(event);
  createPressingRecipees(event);
  createMixingRecipees(event);
  createFillingRecipees(event);
  createDeployingRecipees(event);
  
});


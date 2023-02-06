// priority: 9000

const removeNormalCrafting = (event, params) => {
  const shaped = { type: 'minecraft:crafting_shaped' };
  const shapeless = { type: 'minecraft:crafting_shapeless' };
  ['mod', 'tag', 'input', 'output'].forEach(k => { if (params[k]) { shaped[k] = params[k]; shapeless[k] = params[k]; } });
  event.remove(shaped);
  event.remove(shapeless);
};
const removeNormalCraftingId = (event, params) => {
  const shaped = { type: 'minecraft:crafting_shaped' };
  const shapeless = { type: 'minecraft:crafting_shapeless' };
  ['id'].forEach(k => { if (params[k]) { shaped[k] = params[k]; shapeless[k] = params[k]; } });
  event.remove(shaped);
  event.remove(shapeless);
};
ServerEvents.recipes(e => {
  e.forEachRecipe({ mod: 'minecraft', input: '#forge:ingots' }, r => {
    if (/sword|chestplate|boot|helmet|pant|hoe|anvil|trip|cutt|cross|rod/.test(`${r.getId()}`)) return;
    removeNormalCraftingId(e, { id: r.getId() });
  });
  e.forEachRecipe({ output: '#forge:tools' }, r => {
    if (/pickaxe|sword|wood|hoe/.test(`${r.getId()}`)) return;
    removeNormalCraftingId(e, { id: r.getId() });
  });
});

const recipeeRemovals = (event) => {
  // recipe category removal
  event.remove({ type: 'createsifter:sifting' });

  // full mod removal
  removeNormalCrafting(event, { mod: 'integrateddynamics' });
  removeNormalCrafting(event, { mod: 'create_sa' });
  event.remove({ mod: 'quark' });
  
  event.remove({ output: sourcegem });
  event.remove({ output: my.integrateddynamics.facade.id });
  event.remove({ output: my.integratedtunnels.part_interface_item.id });
  event.remove({ output: my.integratedtunnels.part_interface_filter_item.id });
  event.remove({ output: my.integratedtunnels.part_interface_fluid.id });
  event.remove({ output: my.integratedtunnels.part_interface_filter_fluid.id });
  event.remove({ output: my.integratedterminals.terminal_storage_portable.id });
  removeNormalCrafting(event, { output: my.ars_nouveau.red_archwood_sapling.id });
  removeNormalCrafting(event, { output: my.ars_nouveau.blue_archwood_sapling.id });
  removeNormalCrafting(event, { output: my.ars_nouveau.green_archwood_sapling.id });
  removeNormalCrafting(event, { output: my.ars_nouveau.purple_archwood_sapling.id });
  removeNormalCrafting(event, { output: my.ars_elemental.yellow_archwood_sapling.id });
  
  // basic recipees
  removeNormalCrafting(event, { output: 'minecraft:andesite' });
  removeNormalCrafting(event, { output: 'minecraft:granite' });
  removeNormalCrafting(event, { output: my.minecraft.magma_block.id });
  removeNormalCrafting(event, { output: my.minecraft.ender_eye.id });
  removeNormalCrafting(event, { output: 'minecraft:cobblestone' });
  removeNormalCrafting(event, { input: 'minecraft:cobblestone', mod: 'minecraft' });
  removeNormalCrafting(event, { output: '#minecraft:planks' });
  removeNormalCrafting(event, { output: my.minecraft.stick.id });
  removeNormalCrafting(event, { input: my.minecraft.glass.id, mod: 'minecraft' });
  removeNormalCrafting(event, { output: my.minecraft.iron_nugget.id });
  removeNormalCrafting(event, { output: my.minecraft.gold_nugget.id });
  removeNormalCrafting(event, { output: my.minecraft.white_wool.id });
  removeNormalCrafting(event, { output: my.minecraft.campfire.id });
  removeNormalCrafting(event, { output: my.minecraft.soul_campfire.id });
  
  // create
  event.remove({ output: my.minecraft.chest.id });
  event.remove({ output: my.minecraft.hopper.id });
  event.remove({ output: my.minecraft.blaze_powder.id });
  event.remove({ output: my.minecraft.blaze_rod.id });
  event.remove({ output: my.minecraft.andesite.id });
  event.remove({ output: my.create.electron_tube.id });
  event.remove({ output: my.create.empty_blaze_burner.id });
  event.remove({ output: my.create.belt_connector.id });
  event.remove({ output: my.create.andesite_alloy.id });
  event.remove({ output: my.create.cogwheel.id });
  event.remove({ output: my.create.large_cogwheel.id });
  event.remove({ output: my.create.depot.id });
  event.remove({ output: my.create.chute.id });
  event.remove({ output: my.create.shaft.id });
  event.remove({ output: my.create.brass_casing.id });
  event.remove({ output: my.create.copper_casing.id });
  event.remove({ output: my.create.andesite_casing.id });
  event.remove({ output: my.create.mechanical_arm.id });
  event.remove({ output: my.create.mechanical_press.id });
  event.remove({ output: my.create.mechanical_mixer.id });
  event.remove({ output: my.create.encased_fan.id });
  event.remove({ output: my.create.encased_chain_drive.id });
  event.remove({ output: my.create.gearbox.id });
  event.remove({ output: my.create.vertical_gearbox.id });
  event.remove({ output: my.create.propeller.id });
  event.remove({ output: my.create.whisk.id });
  event.remove({ output: my.create.mechanical_saw.id });
  event.remove({ output: my.create.brass_ingot.id, type: 'create:mixing' });
  removeNormalCrafting(event, { input: my.create.electron_tube.id });
  removeNormalCrafting(event, { output: my.create.electron_tube.id });
  removeNormalCrafting(event, { input: my.create.fluid_pipe.id });
  removeNormalCrafting(event, { output: my.create.fluid_pipe.id });
  removeNormalCrafting(event, { input: my.create.cogwheel.id });
  removeNormalCrafting(event, { input: my.create.large_cogwheel.id });
  removeNormalCrafting(event, { input: my.create.shaft.id });
  removeNormalCrafting(event, { input: my.create.andesite_alloy.id });
  removeNormalCrafting(event, { input: my.create.andesite_casing.id });
  removeNormalCrafting(event, { input: my.create.copper_casing.id });
  removeNormalCrafting(event, { input: my.create.brass_casing.id });
  removeNormalCrafting(event, { input: my.create.railway_casing.id });
  removeNormalCrafting(event, { output: my.createsifter.zinc_mesh.id });
  removeNormalCrafting(event, { output: my.createsifter.string_mesh.id });
  removeNormalCrafting(event, { output: my.createsifter.brass_mesh.id });
  removeNormalCrafting(event, { output: my.createsifter.andesite_mesh.id });
  removeNormalCrafting(event, { output: my.ars_creo.starbuncle_wheel.id });
  removeNormalCrafting(event, { output: my.ars_nouveau.starbuncle_shards.id });
  removeNormalCrafting(event, { output: my.ars_nouveau.starbuncle_charm.id });
};

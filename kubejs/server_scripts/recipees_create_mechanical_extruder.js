// priority: 9000

const extrudeItem = (item) => ({ item: item });
const extrudeFluid = (fluid) => ({ fluid:fluid, amount: 1000 });
const extrudinger = (produces, bottom, left, right) => {
  return {
    'type': 'create_mechanical_extruder:extruding',
    'ingredients': [left, right],
    'catalyst': bottom,
    'result': produces
  };
};

const extrudingerRecipees = (event) => {
  event.custom(extrudinger(
    extrudeItem(my.create.ochrum.id),
    extrudeItem(my.minecraft.gold_block.id),
    extrudeItem(my.ars_elemental.yellow_archwood.id),
    extrudeFluid('create:honey')
  ));
  event.custom(extrudinger(
    extrudeItem(my.minecraft.dirt.id),
    extrudeItem(my.minecraft.mud_bricks.id),
    extrudeFluid('minecraft:water'),
    extrudeFluid('createaddition:seed_oil'),
  ));
  event.custom(extrudinger(
    extrudeItem(my.integrateddynamics.crystalized_menril_block.id),
    extrudeItem(my.integrateddynamics.menril_log.id),
    extrudeItem(my.integrateddynamics.menril_log_stripped.id),
    extrudeItem(my.integrateddynamics.menril_planks.id)
  ));
};
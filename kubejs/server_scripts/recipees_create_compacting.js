// priority: 9000

const compactingRecipee = (output, input) => {
  return { type: 'create:compacting', ingredients: input, results: output };
};
const pressingRecipee = (output, input) => {
  return { type: 'create:pressing', ingredients: input, results: output };
};

const createPressingRecipees = (event) => {
  event.custom(pressingRecipee([Item.of(my.create.chute.id)], [{ item: my.minecraft.hopper.id }]));
};
const createCompactingRecipees = (event) => {
  event.custom(compactingRecipee([Item.of(my.minecraft.dirt.id)], [
    { tag: 'minecraft:saplings' },
    { fluid: 'minecraft:water', amount: 125 },
    { fluid: 'createaddition:seed_oil', amount: 125 },
  ]));

  event.custom(compactingRecipee([Item.of(my.create.blaze_cake_base.id)], [
    { item: my.create.dough.id },
    { item: my.create_confectionery.gingerdough.id },
    { item: my.createcafe.oreo_dough.id },
  ]));

  event.custom(compactingRecipee([{ fluid: 'integrateddynamics:liquid_chorus', amount: 125 }], [
    Item.of(my.ars_nouveau.purple_archwood_leaves.id),
  ]));
  event.custom(compactingRecipee([{ fluid: 'minecraft:lava', amount: 125 }], [
    Item.of(my.ars_nouveau.red_archwood_leaves.id),
  ]));
  event.custom(compactingRecipee([{ fluid: 'create:honey', amount: 125 }], [
    Item.of(my.ars_elemental.yellow_archwood_leaves.id),
  ]));
  event.custom(compactingRecipee([{ fluid: 'integrateddynamics:menril_resin', amount: 125 }], [
    Item.of(my.ars_nouveau.blue_archwood_leaves.id),
  ]));
  event.custom(compactingRecipee([{ fluid: 'create_things_and_misc:slime', amount: 125 }], [
    Item.of(my.ars_nouveau.green_archwood_leaves.id),
  ]));
};
// priority: 9000
// 
const sawInput = (item) => ({ item: `${item}` });
const sawInputTag = (item) => ({ tag: `${item}` });
const sawOutput = (item, count) => ({ item: `${item}`, count: count || 1 });
const sawRecipee = (input, output, count, time) => {
  return {
    'type': 'create:cutting',
    'ingredients': [sawInput(input)],
    'results': [sawOutput(output, count)],
    'processingTime': time || 200
  };
};
const sawRecipeeTag = (input, output, count, time) => {
  return {
    'type': 'create:cutting',
    'ingredients': [sawInputTag(input)],
    'results': [sawOutput(output, count)],
    'processingTime': time || 200
  };
};

const createSawRecipees = (event) => {
  event.custom(sawRecipeeTag('forge:logs/archwood', my.ars_nouveau.archwood_planks.id, 8, 1000));
  event.custom(sawRecipeeTag('forge:planks/archwood', my.minecraft.stick.id, 8, 1000));
  event.custom(sawRecipee(my.minecraft.iron_block.id, my.create.shaft.id, 3, 1000));
  event.custom(sawRecipee(my.minecraft.iron_ingot.id, my.minecraft.iron_bars.id, 1, 200));
  event.custom(sawRecipee(my.create.zinc_block.id, my.create.shaft.id, 6, 1000));
  event.custom(sawRecipee(my.integrateddynamics.crystalized_menril_block.id, my.integrateddynamics.cable.id, 8));
  event.custom(sawRecipee(my.integrateddynamics.crystalized_chorus_block.id, my.integrateddynamics.logic_director.id, 1));
};
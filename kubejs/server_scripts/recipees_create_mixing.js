// priority: 9000

const createMixingRecipee = (output, input, heating) => {
  return {
    'type': 'create:mixing',
    'ingredients': input, // [ { 'tag': 'forge:cobblestone' } ],
    'results': output, // [ { 'fluid': 'minecraft:lava', 'amount': 50 } ],
    'heatRequirement': heating || 'superheated'
  };
};


const createMixingRecipees = (event) => {
  event.custom(createMixingRecipee([{ fluid: 'minecraft:milk', amount: 500 }], [{ fluid: 'createaddition:seed_oil', amount: 500 }]));

  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_iron', amount: 500 }], [{ item: my.minecraft.iron_block.id }]));
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_copper', amount: 500 }], [{ item: my.minecraft.copper_block.id }]));
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_gold', amount: 500 }], [{ item: my.minecraft.gold_block.id }]));
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_zinc', amount: 500 }], [{ item: my.create.zinc_block.id }])); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_brass', amount: 500 }], [{ item: my.create.brass_block.id }])); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_diamond', amount: 500 }], [{ item: my.minecraft.diamond_block.id }])); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_emerald', amount: 500 }], [{ item: my.minecraft.emerald_block.id }])); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_source', amount: 500 }], [{ item: my.ars_nouveau.source_gem_block.id }])); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_ender', amount: 125 }], [{ item: my.integrateddynamics.crystalized_chorus_block.id }, { item: my.minecraft.green_dye.id }])); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_blaze', amount: 500 }], Array(4).fill({ item: my.minecraft.blaze_powder.id }))); 

  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_brass', amount: 1000 }], [{ fluid: 'kubejs:molten_copper', amount: 500 }, { fluid: 'kubejs:molten_zinc', amount: 500 }], 'heated'));

  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_redstone', amount: 125 }], [{ item: my.minecraft.redstone.id }], 'heated')); 
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_quartz', amount: 125 }], [{ item: my.minecraft.quartz.id }], 'heated')); 

  event.custom(createMixingRecipee([{ item: my.minecraft.nether_quartz_ore.id }], [{ item: my.minecraft.netherrack.id }, { fluid: 'kubejs:molten_quartz', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.minecraft.diamond_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_diamond', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.minecraft.emerald_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_emerald', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.minecraft.iron_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_iron', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.minecraft.copper_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_copper', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.minecraft.gold_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_gold', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.minecraft.redstone_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_redstone', amount: 500 }]));
  event.custom(createMixingRecipee([{ item: my.create.zinc_ore.id }], [{ item: my.minecraft.stone.id }, { fluid: 'kubejs:molten_zinc', amount: 500 }]));

  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_source', amount: 125 }], [
    Item.of(my.ars_nouveau.purple_archwood_leaves.id), { fluid: 'kubejs:molten_quartz', amount: 125 }
  ], 'heated'));
  event.custom(createMixingRecipee([{ fluid: 'minecraft:water', amount: 125 }], [
    Item.of(my.ars_nouveau.red_archwood_leaves.id),
  ], 'heated'));
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_blaze', amount: 125 }], [
    Item.of(my.ars_elemental.yellow_archwood_leaves.id),
  ], 'heated'));
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_diamond', amount: 125 }], [
    Item.of(my.ars_nouveau.blue_archwood_leaves.id), { fluid: 'kubejs:molten_quartz', amount: 125 }
  ], 'heated'));
  event.custom(createMixingRecipee([{ fluid: 'kubejs:molten_emerald', amount: 125 }], [
    Item.of(my.ars_nouveau.green_archwood_leaves.id), { fluid: 'kubejs:molten_quartz', amount: 125 }
  ], 'heated'));

  event.custom(createMixingRecipee([{ item: my.ars_nouveau.green_archwood_leaves.id }], [
    { fluid: 'kubejs:molten_brass', amount: 500 },
    { fluid: 'minecraft:water', amount: 500 },
    { tag: 'minecraft:leaves' }
  ]));

  event.custom(createMixingRecipee([{ item: my.minecraft.ender_pearl.id }], [
    { fluid: 'kubejs:molten_zinc', amount: 500 },
    { tag: 'forge:ores/emerald' }
  ]));
  
  Ingredient.all.itemIds.forEach((i) => {
    event.custom(createMixingRecipee(Array(4).fill({ item: `${i}` }), [{ item: my.create.andesite_alloy.id }, { item: `${i}` }]));
  });
};
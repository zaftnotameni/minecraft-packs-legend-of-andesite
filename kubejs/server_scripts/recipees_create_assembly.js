// priority: 9000
//
const createAssemblyRecipee = (output, input, placeholder, steps, loops) => {
  return {
    'type': 'create:sequenced_assembly',
    'ingredient': input, // { 'item': 'create:powdered_obsidian' },
    'transitionalItem': placeholder, // { 'item': 'create:unprocessed_obsidian_sheet' },
    'sequence': steps, // { 'type': 'create:filling', 'ingredients': [ { 'item': 'create:unprocessed_obsidian_sheet' }, { 'fluid': 'minecraft:lava', 'nbt': {}, 'amount': 500 } ], 'results': [ { 'item': 'create:unprocessed_obsidian_sheet' } ]
    'results': output, // [ { 'item': 'create:sturdy_sheet' } ],
    'loops': loops || 1
  };
}


const createAssemblyRecipees = (event) => {
  event.custom(createAssemblyRecipee(
    [Item.of(my.create.andesite_alloy.id)],
    Ingredient.of(my.minecraft.iron_ingot.id),
    Item.of('kubejs:andesite_alloy_assembly'),
    [
      { type:'create:filling', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }, { 'fluid': 'minecraft:lava', 'amount': 100 }], results: [{ item: 'kubejs:andesite_alloy_assembly' }]},
      { type:'create:filling', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }, { 'fluid': 'create:honey', 'amount': 100 }], results: [{ item: 'kubejs:andesite_alloy_assembly' }]},
      { type:'create:filling', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }, { 'fluid': 'create:chocolate', 'amount': 100 }], results: [{ item: 'kubejs:andesite_alloy_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }], results: [{ item: 'kubejs:andesite_alloy_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }], results: [{ item: 'kubejs:andesite_alloy_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }], results: [{ item: 'kubejs:andesite_alloy_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:andesite_alloy_assembly' }], results: [{ item: 'create:andesite_alloy' }]},
    ]
  ));
  event.custom(createAssemblyRecipee(
    [Item.of(my.create.electron_tube.id)],
    Ingredient.of(my.create.iron_sheet.id),
    Item.of('kubejs:electron_tube_assembly'),
    [
      { type:'create:filling', ingredients: [{ item: 'kubejs:electron_tube_assembly' }, { 'fluid': 'kubejs:molten_redstone', 'amount': 100 }], results: [{ item: 'kubejs:electron_tube_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:electron_tube_assembly' }], results: [{ item: 'kubejs:electron_tube_assembly' }]},
      { type:'create:filling', ingredients: [{ item: 'kubejs:electron_tube_assembly' }, { 'fluid': 'kubejs:molten_quartz', 'amount': 100 }], results: [{ item: 'kubejs:electron_tube_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:electron_tube_assembly' }], results: [{ item: 'kubejs:electron_tube_assembly' }]},
      { type:'create:filling', ingredients: [{ item: 'kubejs:electron_tube_assembly' }, { 'fluid': 'minecraft:lava', 'amount': 100 }], results: [{ item: 'kubejs:electron_tube_assembly' }]},
      { type:'create:pressing', ingredients: [{ item: 'kubejs:electron_tube_assembly' }], results: [{ item: 'kubejs:electron_tube_assembly' }]},
    ],
    5
  ));
  
  const andesiteCasingAssembly = 'kubejs:andesite_casing_assembly';
  const copperCasingAssembly = 'kubejs:copper_casing_assembly';
  const brassCasingAssembly = 'kubejs:brass_casing_assembly';
  const fluidTankAssembly = 'kubejs:fluid_tank_assembly';
  const largeCogAssembly = 'kubejs:large_cogwheel_assembly';
  const cogAssembly = 'kubejs:cogwheel_assembly';
  
  event.custom(createAssemblyRecipee(
    [Item.of(my.create.andesite_casing.id)],
    Ingredient.of(my.ars_nouveau.red_archwood_wood.id),
    Item.of(andesiteCasingAssembly),
    [
      { type:'create:deploying', ingredients: [{ item: andesiteCasingAssembly }, { item: my.createaddition.iron_rod.id }], results: [{ item: andesiteCasingAssembly }]},
      { type:'create:pressing', ingredients: [{ item: andesiteCasingAssembly }], results: [{ item: andesiteCasingAssembly }]},
    ],
    8
  ));
  event.custom(createAssemblyRecipee(
    [Item.of(my.create.copper_casing.id)],
    Ingredient.of(my.ars_nouveau.blue_archwood_wood.id),
    Item.of(copperCasingAssembly),
    [
      { type:'create:deploying', ingredients: [{ item: copperCasingAssembly}, { item: my.createaddition.copper_rod.id }], results: [{ item: copperCasingAssembly}]},
      { type:'create:pressing', ingredients: [{ item: copperCasingAssembly}], results: [{ item: copperCasingAssembly}]},
    ],
    8
  ));
  event.custom(createAssemblyRecipee(
    [Item.of(my.create.brass_casing.id)],
    Ingredient.of(my.ars_nouveau.green_archwood_wood.id),
    Item.of(brassCasingAssembly),
    [
      { type:'create:deploying', ingredients: [{ item: brassCasingAssembly}, { item: my.createaddition.brass_rod.id }], results: [{ item: brassCasingAssembly}]},
      { type:'create:pressing', ingredients: [{ item: brassCasingAssembly}], results: [{ item: brassCasingAssembly}]},
    ],
    8
  ));

  event.custom(createAssemblyRecipee(
    [Item.of(my.create.fluid_tank.id)],
    Ingredient.of(my.create.framed_glass.id),
    Item.of(fluidTankAssembly),
    [
      { type:'create:deploying', ingredients: [{ item: fluidTankAssembly}, { item: my.createaddition.copper_rod.id }], results: [{ item: fluidTankAssembly}]},
      { type:'create:pressing', ingredients: [{ item: fluidTankAssembly}], results: [{ item: fluidTankAssembly}]},
    ],
    8
  ));
  
  event.custom(createAssemblyRecipee(
    [Item.of(my.create.large_cogwheel.id, 8)],
    Ingredient.of(my.create.shaft.id),
    Item.of(largeCogAssembly),
    [
      { type:'create:deploying', ingredients: [{ item: largeCogAssembly}, { item: my.ars_nouveau.archwood_planks.id }], results: [{ item: largeCogAssembly}]},
      { type:'create:cutting', ingredients: [{ item: largeCogAssembly}], results: [{ item: largeCogAssembly}]},
    ],
    8
  ));

  event.custom(createAssemblyRecipee(
    [Item.of(my.create.cogwheel.id, 8)],
    Ingredient.of(my.create.shaft.id),
    Item.of(cogAssembly),
    [
      { type:'create:deploying', ingredients: [{ item: cogAssembly}, { item: my.ars_nouveau.archwood_button.id }], results: [{ item: cogAssembly}]},
      { type:'create:cutting', ingredients: [{ item: cogAssembly}], results: [{ item: cogAssembly}]},
    ],
    8
  ));
};
ItemEvents.tooltip(e => {
  e.add(my.ars_nouveau.purple_archwood_sapling.id, [
    'Created by right clicking with a yellow (flashing) sapling on something purple',
    'Do not ask how or why that works...'
  ]);
  
  // e.addAdvanced(Ingredient.all, (item, advanced, text) => {
  //   if (e.alt && item.nbt) {
  //     text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)));
  //   }
  // });
});
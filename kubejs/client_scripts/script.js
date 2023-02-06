// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
});

JEIEvents.information(e => {
  e.addItem(my.ars_nouveau.purple_archwood_sapling.id, [
    'Created by right clicking with a yellow (flashing) sapling on something purple',
    'Do not ask how or why that works...'
  ]);
  [
    my.ars_nouveau.red_archwood_log.id,
    my.ars_nouveau.green_archwood_log.id,
    my.ars_nouveau.purple_archwood_log.id,
    my.ars_nouveau.blue_archwood_log.id,
    my.ars_elemental.yellow_archwood_log.id
  ].forEach((i) => {
    e.addItem(Ingredient.of(i), [
      'Can be woodcut in world with an axe (left click) to make planks'
    ]);
  });
  [
    my.ars_nouveau.archwood_planks.id
  ].forEach((i) => {
    e.addItem(Ingredient.of(i), [
      'Can be woodcut in world with an axe (left click) to make sticks',
      'Can be made from cutting archwood in world with an axe (left click)'
    ]);
  });
  [
    my.minecraft.stick.id
  ].forEach((i) => {
    e.addItem(Ingredient.of(i), [
      'Can be made from cutting archwood planks in world with an axe (left click)'
    ]);
  });
});

// ItemEvents.clientLeftClicked((event) => {
//   // const item = event.getItem();
//   // console.log(`item: ${item.id}`);
//   // console.log(`nbt: ${item.nbtString}`);
//   // const tagIterator = item.tags.iterator();
//   // while (tagIterator.hasNext()) {
//   //   let tag = tagIterator.next(); 
//   //   console.log(`tag: ${tag}`);
//   // };
// });
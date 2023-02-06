
const archwoodPlanks = (event, player, item, block) => {
  if (!/log/.test(`${block.id}`)) return;
  if (!/axe/.test(`${item.id}`)) return;
  block.set('minecraft:air');
  const itemEntity = block.createEntity('item');
  itemEntity.y+=0.8;
  itemEntity.x+=0.5;
  itemEntity.z+=0.5;
  itemEntity.item = Item.of(my.ars_nouveau.archwood_planks.id);
  itemEntity.item.count = 2;
  itemEntity.spawn();
  event.cancel();
  return true;
};
const archwoodSticks = (event, player, item, block) => {
  if (!/plank/.test(`${block.id}`)) return;
  if (!/axe/.test(`${item.id}`)) return;
  block.set('minecraft:air');
  const itemEntity = block.createEntity('item');
  itemEntity.y+=0.8;
  itemEntity.x+=0.5;
  itemEntity.z+=0.5;
  itemEntity.item = Item.of(my.minecraft.stick.id);
  itemEntity.item.count = 2;
  itemEntity.spawn();
  event.cancel();
  return true;
};

const punchTree = (event, player, item, block) => {
  if (!/wood|log/.test(`${block.id}`)) return;
  if (!/air/.test(`${item.id}`)) return;
  if (!player.stages.has('tried_to_punch_tree')) {
    player.stages.add('tried_to_punch_tree');
  } else {
    player.addExhaustion(90);
    const itemEntity = block.createEntity('item');
    itemEntity.y+=0.8;
    itemEntity.x+=0.5;
    itemEntity.z+=0.5;
    itemEntity.item = Item.of(my.minecraft.splash_potion.id, {Potion:'minecraft:strong_harming'});
    itemEntity.item.count = 1;
    itemEntity.spawn();
    player.tell('If you insist... here, I will give you a helping hand');
  }
  event.cancel();
  return true;
};
ItemEvents.firstLeftClicked((event) => {
  const { item, player } = event;
  const target = event.getTarget();
  if (target && target.block) {
    let block = target.block;
    const result = punchTree(event, player, item, block) ||
      archwoodPlanks(event, player, item, block) ||
      archwoodSticks(event, player, item, block) ||
      false;
  }
  if (/zaftnotameni/.test(`${player.name}`)) {
    if (item.id == my.quark.diamond_heart.id) {
      player.stages.clear();
      player.tell('stages cleared');
    }
    player.tell(Component.prettyPrintNbt(item.nbt));
    console.log(Component.prettyPrintNbt(item.nbt));
  }
  return true;
});
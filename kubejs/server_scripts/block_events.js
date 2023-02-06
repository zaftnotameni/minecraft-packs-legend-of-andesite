// priority: 0

const ih = Java.loadClass('net.minecraft.world.InteractionHand');
const autoRichFarm = (player, item, block) => {
  if (block.id !== 'minecraft:podzol' && block.id !== 'minecraft:dirt' && my.farmersdelight.rich_soil.id !== block.id) return;
  if (item.id !== magebloomseed) return;
  block.set(richfarm);
};
const yellowToPurple = (player, item, block) => {
  if (item.id !== ARCHWOOD_SAPLINGS.yellow) return;
  if (!(/sourcestone/i).test(block.id)) return;
  player.give(ARCHWOOD_SAPLINGS.purple);
  item.setCount(item.getCount() - 1);
};
const pickEnderPortal = (player, item, block) => {
	if (item != `create:wrench`) return;
  if (!player.isCrouching()) return;
  if (!/minecraft:end_portal/.test(`${block}`)) return;
  if (/minecraft:end_portal$/.test(`${block}`)) { block.set(`minecraft:air`); return; }
  player.give(`minecraft:end_portal_frame`);
  if (block.properties.eye == `true`) player.give(`minecraft:ender_eye`);
  block.set(`minecraft:air`);
};
BlockEvents.rightClicked('item.right_click', (event) => {
  const { player, item, block, hand } = event;
  if (`${hand}` != `${ih.MAIN_HAND}`) return;
  if (/zaftnotameni/.test(`${player.name}`)) player.tell(`using ${item.id}, right clicked on: ${block.id}`);
  autoRichFarm(player, item, block, event);
  yellowToPurple(player, item, block, event);
  pickEnderPortal(player, item, block, event);
});
BlockEvents.leftClicked('item.left_click', (event) => {
  const { player, item, block } = event;
  if (/zaftnotameni/.test(`${player.name}`)) player.tell(`using ${item.id}, left clicked on: ${block.id}, facing: ${event.facing}`);
});
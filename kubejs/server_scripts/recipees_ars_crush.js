// priority: 9000

const arscrushoutput = (output, count, chance) => {
  return {
    'chance': chance || 1.0,
    'count': count || 1,
    'item': `${output}`
  };
};
const arscrush = (input, output, count, chance, otherOutputs, inPlace) => {
  const outputs = [arscrushoutput(output, count, chance)];
  if (otherOutputs) outputs.push(otherOutputs);
  return {
    'type': 'ars_nouveau:crush',
    'input': { 'item': `${input}` },
    'output': outputs,
    skip_block_place: !inPlace
  }
};
const arscrushTag = (input, output, count, chance, otherOutputs) => {
  const outputs = [arscrushoutput(output, count, chance)];
  if (otherOutputs) outputs.push(otherOutputs);
  return {
    'type': 'ars_nouveau:crush',
    'input': { 'tag': `${input}` },
    'output': outputs,
    skip_block_place: true
  }
};
const arsCrushRecipees = (event) => {
  event.custom(arscrush(sourcegemblock, sourcegem, 4));
  event.custom(arscrush('integrateddynamics:menril_log', 'integrateddynamics:crystalized_menril_chunk', 12));
  event.custom(arscrush('integrateddynamics:menril_leaves', 'integrateddynamics:menril_berries', 8, 1.0, arscrushoutput('integrateddynamics:menril_sapling', 2)));
  event.custom(arscrush(my.ars_elemental.yellow_archwood_leaves.id, my.ars_elemental.yellow_archwood_sapling.id, 4));
  event.custom(arscrush(my.ars_nouveau.purple_archwood_leaves.id, my.ars_nouveau.purple_archwood_sapling.id, 4));
  event.custom(arscrush(my.ars_nouveau.red_archwood_leaves.id, my.ars_nouveau.red_archwood_sapling.id, 4));
  event.custom(arscrush(my.ars_nouveau.green_archwood_leaves.id, my.ars_nouveau.green_archwood_sapling.id, 4));
  event.custom(arscrush(my.ars_nouveau.blue_archwood_leaves.id, my.ars_nouveau.blue_archwood_sapling.id, 4));
  event.custom(arscrushTag('forge:logs/archwood', my.ars_nouveau.archwood_planks.id, 3));
  event.custom(arscrushTag('forge:planks/archwood', my.minecraft.stick.id, 3));
  event.custom(arscrush(my.integrateddynamics.crystalized_menril_block.id, my.create.framed_glass.id, 1, 1, false, true));
  event.custom(arscrush(my.create.framed_glass.id, my.quark.clear_shard.id, 8));
  event.custom(arscrush(my.create.water_wheel.id, my.create.crushing_wheel.id, 1));
  event.custom(arscrush(my.minecraft.shulker_box.id, my.minecraft.shulker_shell.id, 2));
};
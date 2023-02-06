// priority: 9000

const summoningRitualsRecipees = (event) => {
  event.shaped('summoningrituals:altar', ['YGY', ' P ', ' P '], {
    Y: ARCHWOOD_WOOD.yellow, P: ARCHWOOD_LOGS.purple, G: sourcegemblock
  });
  event.shaped('minecraft:lead', ['FF ', 'FF ', '  F'], {
    F: 'ars_nouveau:magebloom_fiber'
  });

  event.recipes.summoningrituals
    .altar(my.minecraft.bone_meal.id)
    .input(`${my.minecraft.wheat_seeds.id}`)
    .input(`${my.minecraft.pumpkin_seeds.id}`)
    .input(`${my.minecraft.melon_seeds.id}`)
    .itemOutput(my.ars_nouveau.whirlisprig_shards.id)
    .blockBelow(sourcegemblock);
  
  event.recipes.summoningrituals
    .altar(my.create.chute.id)
    .input(`${my.ars_nouveau.archwood_chest.id}`)
    .itemOutput(my.ars_nouveau.drygmy_charm.id)
    .blockBelow(sourcegemblock);

  event.recipes.summoningrituals
    .altar(my.minecraft.glass_bottle.id)
    .input(`${my.minecraft.cauldron.id}`)
    .itemOutput(my.ars_nouveau.wixie_shards.id)
    .blockBelow(sourcegemblock);
  
  event.recipes.summoningrituals
    .altar(my.ars_nouveau.magebloom_fiber.id)
    .itemOutput(my.minecraft.string.id)
    .blockBelow(sourcegemblock)
    .recipeTime(5);
  
  event.recipes.summoningrituals
    .altar(my.minecraft.string.id)
    .input(`8x ${my.quark.clear_shard.id}`)
    .itemOutput(my.create.tiled_glass.id)
    .blockBelow(sourcegemblock)
    .recipeTime(100);

  event.recipes.summoningrituals
    .altar('ars_nouveau:magebloom')
    .mobOutput('ars_nouveau:starbuncle')
    .input(`3x ${sourcegem}`)
    .blockBelow(sourcegemblock);

  event.recipes.summoningrituals
      .altar(my.minecraft.lead.id)
      .itemOutput(my.ars_nouveau.starbuncle_shards.id)
      .input(my.ars_nouveau.magebloom.id)
      .sacrifice('ars_nouveau:starbuncle')
      .sacrificeRegion(8, 5)
      .blockBelow(my.ars_nouveau.source_gem_block.id);

  event.recipes.summoningrituals
      .altar(my.minecraft.campfire.id)
      .itemOutput(my.minecraft.soul_campfire.id)
      .sacrifice('ars_nouveau:starbuncle')
      .sacrificeRegion(8, 5)
      .blockBelow(my.ars_nouveau.source_gem_block.id);
};
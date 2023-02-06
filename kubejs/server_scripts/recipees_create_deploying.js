// priority: 9000

const createDeployingRecipee = (results, bottom, top) => {
  return {
    type:'create:deploying',
    ingredients: [bottom, top],
    results: results
  }
};
const simpleDeployingRecipee = (result, bottom, top) => createDeployingRecipee([{ item: result }], { item: bottom }, { item: top });


const translateComponent = (c) => ({ shaft: 'shaft', cog: 'cogwheel', electron: 'electron_tube' }[c] || c);
const createDeployingRecipees = (event) => {
  [
    { tier: 'basic', create: 'andesite' },
    { tier: 'fluid', create: 'copper' },
    { tier: 'advanced', create: 'brass' }
  ].forEach((entry) => {
    const tier = entry.tier;
    const create = entry.create;
    let xitem, yitem, zitem;
    ['shaft', 'cog', 'electron'].forEach((x, i) => {
      xitem = `kubejs:${tier}_casing_${x}`;
      event.custom(createDeployingRecipee(
        [{ item: `${xitem}` }], { item: `create:${create}_casing` }, { item: `create:${translateComponent(x)}` },
      ));
      ['shaft', 'cog', 'electron'].forEach((y, ii) => {
        if (ii > i) {
          yitem = `${xitem}_${y}`;
          event.custom(createDeployingRecipee(
            [{ item: `${yitem}` }], { item: `${xitem}` }, { item: `create:${translateComponent(y)}` },
          ));
          ['shaft', 'cog', 'electron'].forEach((z, iii) => {
            if (iii > ii) {
              zitem = `${yitem}_${z}`;
              event.custom(createDeployingRecipee(
                [{ item: `${zitem}` }], { item: `${yitem}` }, { item: `create:${translateComponent(z)}` },
              ));
            }
          });
        }
      });
    });
  });

  event.custom(simpleDeployingRecipee(my.minecraft.blast_furnace.id, my.minecraft.campfire.id, my.create.iron_sheet.id));
  event.custom(simpleDeployingRecipee(my.minecraft.piston.id, my.minecraft.redstone_block.id, my.create.iron_sheet.id));
  event.custom(simpleDeployingRecipee(my.minecraft.hopper.id, my.minecraft.chest.id, my.create.iron_sheet.id));
  event.custom(simpleDeployingRecipee(my.create.andesite_funnel.id, basicCasing, my.minecraft.dried_kelp.id));
  event.custom(simpleDeployingRecipee(my.create.andesite_funnel.id, basicCasingS, my.minecraft.dried_kelp.id));
  event.custom(simpleDeployingRecipee(my.create.brass_funnel.id, my.create.andesite_funnel.id, my.create.electron_tube.id));
  event.custom(simpleDeployingRecipee(my.create.brass_tunnel.id, my.create.andesite_tunnel.id, my.create.electron_tube.id));
  event.custom(simpleDeployingRecipee(my.create.depot.id, basicCasing, my.create.iron_sheet.id));
  event.custom(simpleDeployingRecipee(my.create.chute.id, basicCasing, my.minecraft.hopper.id));
  event.custom(simpleDeployingRecipee(my.create.smart_chute.id, my.create.chute.id, my.create.electron_tube.id ));
  event.custom(simpleDeployingRecipee(my.create.deployer.id, basicCasingSE, my.create.brass_hand.id));
  event.custom(simpleDeployingRecipee(my.create.mechanical_plough.id, basicCasing, my.minecraft.wooden_shovel.id));
  event.custom(simpleDeployingRecipee(my.create.mechanical_harvester.id, basicCasing, my.minecraft.wooden_hoe.id));
  event.custom(simpleDeployingRecipee(my.create.mechanical_mixer.id, basicCasingC, my.create.whisk.id));
  event.custom(simpleDeployingRecipee(my.create.mechanical_press.id, basicCasingS, my.minecraft.iron_block.id));
  event.custom(simpleDeployingRecipee(my.create.portable_storage_interface.id, basicCasing, my.create.chute.id));
  event.custom(simpleDeployingRecipee(my.create.millstone.id, basicCasingC, my.create.cogwheel.id));
  event.custom(simpleDeployingRecipee(my.create.stressometer.id, basicCasing, my.minecraft.comparator.id));
  event.custom(simpleDeployingRecipee(my.create.speedometer.id, basicCasing, my.minecraft.repeater.id));
  event.custom(simpleDeployingRecipee(my.createsifter.sifter.id, my.create.millstone.id, my.create.cogwheel.id));
  event.custom(simpleDeployingRecipee(my.create_mechanical_extruder.mechanical_extruder.id, my.create.mechanical_press.id, my.create.framed_glass.id));
  event.custom(simpleDeployingRecipee(my.create.gearbox.id, basicCasingS, my.create.shaft.id));
  event.custom(simpleDeployingRecipee(my.create.vertical_gearbox.id, my.create.gearbox.id, my.create.shaft.id));
  event.custom(simpleDeployingRecipee(my.createaddition.rolling_mill.id, basicCasingS, my.minecraft.bamboo.id));
  event.custom(simpleDeployingRecipee(my.create.steam_engine.id, fluidCasingS, my.create.golden_sheet.id));
  event.custom(simpleDeployingRecipee(my.create.portable_fluid_interface.id, fluidCasing, my.create.fluid_pipe.id));
  event.custom(simpleDeployingRecipee(my.create.fluid_tank.id, fluidCasing, my.create.framed_glass.id));
  event.custom(simpleDeployingRecipee(my.create.fluid_pipe.id, my.create.copper_nugget.id, my.create.copper_sheet.id));
  event.custom(simpleDeployingRecipee(my.create.smart_fluid_pipe.id, my.create.fluid_pipe.id, my.create.electron_tube.id));
  event.custom(simpleDeployingRecipee(my.create.mechanical_pump.id, my.create.fluid_pipe.id, my.create.cogwheel.id));
  event.custom(simpleDeployingRecipee(my.create.fluid_valve.id, my.create.fluid_pipe.id, my.create.copper_valve_handle.id));
  event.custom(simpleDeployingRecipee(my.create.rotation_speed_controller.id, advancedCasingSCE, my.create.shaft.id));
  event.custom(simpleDeployingRecipee(my.create.filter.id, my.minecraft.paper.id, my.minecraft.iron_bars.id));
  event.custom(simpleDeployingRecipee(my.create.attribute_filter.id, my.create.filter.id, my.create.electron_tube.id));
  event.custom(simpleDeployingRecipee(my.create.smart_chute.id, advancedCasingE, my.minecraft.hopper.id ));
  event.custom(simpleDeployingRecipee(my.create.brass_funnel.id, advancedCasingE, my.minecraft.dried_kelp.id ));
  event.custom(simpleDeployingRecipee(my.create.brass_tunnel.id, advancedCasingSE, my.minecraft.dried_kelp.id ));

  event.custom(simpleDeployingRecipee(my.integratedtunnels.part_interface_item.id, my.create.chute.id, my.integrateddynamics.cable.id));
  event.custom(simpleDeployingRecipee(my.integratedtunnels.part_interface_filter_item.id, my.create.smart_chute.id, my.integrateddynamics.cable.id));
  event.custom(simpleDeployingRecipee(my.integratedtunnels.part_interface_fluid.id, my.create.mechanical_pump.id, my.integrateddynamics.cable.id));
  event.custom(simpleDeployingRecipee(my.integratedtunnels.part_interface_filter_fluid.id, my.create.smart_fluid_pipe.id, my.integrateddynamics.cable.id));
  event.custom(simpleDeployingRecipee(my.integrateddynamics.part_connector_mono_directional.id, my.create.andesite_funnel.id, my.integrateddynamics.cable.id));
  event.custom(simpleDeployingRecipee(my.integrateddynamics.part_connector_omni_directional.id, my.integrateddynamics.part_connector_mono_directional.id, my.integrateddynamics.logic_director.id));
  event.custom(simpleDeployingRecipee(my.integratedterminals.part_terminal_storage.id, my.create.portable_storage_interface.id, my.integrateddynamics.cable.id));
};
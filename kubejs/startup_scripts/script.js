// priority: 0

StartupEvents.registry('item', (e) => {
  [
    { tier: 'basic', create: 'andesite', label: 'Basic', },
    { tier: 'fluid', create: 'copper', label: 'Fluid', },
    { tier: 'advanced', create: 'brass', label: 'Advanced' }
  ].forEach((entry) => {
    const tier = entry.tier;
    const create = entry.create;
    const label = entry.label;
    ['shaft', 'cog', 'electron'].forEach((x, i) => {
      e.create(`${tier}_casing_${x}`).tag('partial_assemblies')
        .parentModel(`create:block/${create}_casing`)
        .displayName(`${label} Casing with ${x}`);
      ['shaft', 'cog', 'electron'].forEach((y, ii) => {
        if (ii > i) {
          e.create(`${tier}_casing_${x}_${y}`).tag('partial_assemblies')
            .parentModel(`create:block/${create}_casing`)
            .displayName(`${label} Casing with ${x} and ${y}`);
          ['shaft', 'cog', 'electron'].forEach((z, iii) => {
            if (iii > ii) {
              e.create(`${tier}_casing_${x}_${y}_${z}`).tag('partial_assemblies')
                .parentModel(`create:block/${create}_casing`)
                .displayName(`${label} Casing with ${x} and ${y} and ${z}`);
            }
          });
        }
      });
    });
  });
  e.create('andesite_casing_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:block/andesite_casing')
    .displayName('Unfinished Basic Casing');
  e.create('copper_casing_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:block/andesite_casing')
    .displayName('Unfinished Fluid Casing');
  e.create('brass_casing_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:block/brass_casing')
    .displayName('Unfinished Advanced Casing');
  e.create('fluid_tank_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/fluid_tank')
    .displayName('Unfinished Fluid Tank');
  e.create('steam_engine_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/steam_engine')
    .displayName('Unfinished Steam Engine');
  e.create('deployer_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/deployer')
    .displayName('Unfinished Deployer');
  e.create('mechanical_press_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/mechanical_press')
    .displayName('Unfinished Mechanical Press');
  e.create('mechanical_mixer_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/mechanical_mixer')
    .displayName('Unfinished Mechanical Mixer');
  e.create('encased_fan_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/encased_fan')
    .displayName('Unfinished Encased Fan');
  e.create('crushing_wheel_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:block/crushing_wheel')
    .displayName('Unfinished Crushing Wheel');
  e.create('millstone_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/millstone')
    .displayName('Unfinished Millstone');
  e.create('electron_tube_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/electron_tube')
    .displayName('Unfinished Electron Tube');
  e.create('empty_blaze_burner_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/empty_blaze_burner')
    .displayName('Unfinished Empty Blaze Burner');
  e.create('mechanical_crafter_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:item/mechanical_crafter')
    .displayName('Unfinished Mechanical Crafter');
  e.create('cogwheel_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:block/cogwheel')
    .displayName('Unfinished Cogwheel');
  e.create('large_cogwheel_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create:block/large_cogwheel')
    .displayName('Unfinished Large Cogwheel');
  e.create('mechanical_extruder_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('create_mechanical_extruder:item/mechanical_extruder')
    .displayName('Unfinished Mechanical Extruder');
  e.create('mechanical_sifter_assembly').maxStackSize(1).tag('incomplete_assemblies')
    .parentModel('createsifter:item/sifter')
    .displayName('Unfinished Mechanical Sifter');
  e.create('andesite_alloy_assembly').maxStackSize(1).glow(true).tag('incomplete_assemblies')
    .parentModel('create:item/andesite_alloy')
    .displayName('Unfinished Andesite Alloy');
});
StartupEvents.registry('fluid', (e) => {
	e.create('molten_quartz').thickTexture(0xEEEEEE).bucketColor(0xEEEEEE).displayName('Molten Quartz').tag('molten').luminosity(1);
	e.create('molten_silver').thickTexture(0x8888FF).bucketColor(0x8888FF).displayName('Molten Silver').tag('molten').luminosity(1);
	e.create('molten_redstone').thickTexture(0xFF0000).bucketColor(0xFF0000).displayName('Molten Redstone').tag('molten').luminosity(1);
	e.create('molten_iron').thickTexture(0x660000).bucketColor(0x660000).displayName('Molten Iron').tag('molten').luminosity(1);
	e.create('molten_gold').thickTexture(0xcccc00).bucketColor(0xcccc00).displayName('Molten Gold').tag('molten').luminosity(1);
	e.create('molten_copper').thickTexture(0xA04000).bucketColor(0xA04000).displayName('Molten Copper').tag('molten').luminosity(1);
	e.create('molten_steel').thickTexture(0x303030).bucketColor(0x303030).displayName('Molten Steel').tag('molten').luminosity(1);
	e.create('molten_zinc').thickTexture(0x00AAAA).bucketColor(0x00AAAA).displayName('Molten Zinc').tag('molten').luminosity(1);
	e.create('molten_andesite').thickTexture(0x888888).bucketColor(0x888888).displayName('Molten Andesite').tag('molten').luminosity(1);
	e.create('molten_brass').thickTexture(0xFFDD44).bucketColor(0xFFDD44).displayName('Molten Brass').tag('molten').luminosity(1);
	e.create('molten_blaze').thickTexture(0xFFFF88).bucketColor(0xFFFF88).displayName('Molten Blaze').tag('molten').luminosity(1);
	e.create('molten_source').thickTexture(0x992277).bucketColor(0x992277).displayName('Molten Source').tag('molten').luminosity(1);
	e.create('molten_diamond').thickTexture(0x0000FF).bucketColor(0x0000FF).displayName('Molten Diamond').tag('molten').luminosity(1);
	e.create('molten_emerald').thickTexture(0x00FF00).bucketColor(0x00FF00).displayName('Molten Emerald').tag('molten').luminosity(1);
	e.create('molten_ender').thickTexture(0x006600).bucketColor(0x006600).displayName('Molten Ender').tag('molten').luminosity(1);
	e.create('molten_carbon').thickTexture(0x111111).bucketColor(0x111111).displayName('Molten Carbon').tag('molten').luminosity(0);
});

BlockEvents.modification(e => {
});
// priority: 9000

const glyphCustom = (glyph, inputs, exp) => {
  return {
    'type': 'ars_nouveau:glyph',
    'count': 1,
    'exp': exp || 0,
    'inputItems': (inputs || []).map(i => ({ 'item': { 'item': `${i}` } })),
    'output': `${glyph}`
  };
};
const arsGlyphRecipees = (event) => {
  // doesn't seem to work
  // event.custom(glyphCustom('ars_nouveau:glyph_fell', ['minecraft:wooden_axe']));
};
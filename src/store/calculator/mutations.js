const paramKeys = [
  'attack',
  'bossAttack',
  'agility',
  'criticalRate',
  'criticalDamage',
  'bossCriticalDamage',
  'elementBonus',
  'defenseCut',
  'extraDamage',
  'bossExtraDamage',
  'skillDamage',
  'singleSkillDamage',
  'areaSkillDamage',
  'normalAttackDamage',
  'limitDamage',
  'mobDamage',
  'breakDamage',
  'breakPower',
  'hit',
  'penetration',
  'blockCut',
];

const equipKeys = [
  'specialAF1',
  'specialAF2',
  'specialAF3',
  'specialGW1',
  'specialGW2',
  'specialGW3',
];
const mutations = {
  updateParameters(state, parameters) {
    console.log(parameters);
    parameters.forEach((p, i) => {
      state.parameters[paramKeys[i]] = Number(p);
    });
  },
  updateEquipments(state, equipments) {
    console.log(equipments);
    equipments.forEach((e, i) => {
      state.equipments[equipKeys[i]] = e;
    });
  },
};

export default mutations;

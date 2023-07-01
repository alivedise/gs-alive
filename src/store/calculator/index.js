import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  version: 1,
  // GS
  parameters: {
    attack: 0,
    bossAttack: 0,
    agility: 0,
    criticalRate: 0,
    criticalDamage: 0,
    bossCriticalDamage: 0,
    elementBonus: 0,
    defenseCut: 0,
    extraDamage: 0,
    bossExtraDamage: 0,
    skillDamage: 0,
    singleSkillDamage: 0,
    areaSkillDamage: 0,
    normalAttackDamage: 0,
    limitDamage: 0,
    mobDamage: 0,
    breakDamage: 0,
    breakPower: 0,
    hit: 0,
    penetration: 0,
    blockCut: 0,
  },
  equipments: {
    specialAF1: false,
    specialAF2: false,
    specialAF3: false,
    specialGW1: false,
    specialGW2: false,
    specialGW3: false,
  },
};

const calculator = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

export default calculator;

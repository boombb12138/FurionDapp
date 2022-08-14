import _ from 'lodash';

export const strict = true;

export const plugins = [];

export const mutations = {
  update(state, [key, value]) {
    _.set(state, key, value);
  },
  save(state, [key, value, context = this, opt = {}]) {
    context.$cookies.set(key, value, opt);
    _.set(state, key, value);
  },
};

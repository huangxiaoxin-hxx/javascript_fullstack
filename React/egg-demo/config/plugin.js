'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cor: {
    enable: true,
    package: 'egg-cors',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  }
};

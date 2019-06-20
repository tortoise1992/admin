'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  passport:{
    enable: true,
    package: 'egg-passport',
  },
  jwt:{
    enable: true,
    package: "egg-jwt"
  },
  mysql:{
    enable: true,
    package: 'egg-mysql'
  }
};


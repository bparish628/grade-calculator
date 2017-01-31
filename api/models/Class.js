/**
 * Class.js
 *
 * @description :: This represents a class
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { 
      type: 'string',
      required: true
    },

    grades: {
      collection: 'Grade'
    }
  }
};


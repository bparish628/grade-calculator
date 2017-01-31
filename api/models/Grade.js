/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { 
      type: 'string',
      required: true
    },

    grade: {
      type: 'integer',
      required: true
    },

    weight: {
      type: 'integer',
      required: true
    },

    associatedClass: {
      model: 'class'
    }
  }
};


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
      collection: 'Grade',
      via: 'associatedClass'
    },

    getCurrentGrade: function() {
      const numerator = this.grades.reduce((actualGrade, grade) => actualGrade += (grade.grade * grade.weight), 0);
      const denominator = this.grades.reduce((actualWeight, grade) => actualWeight += grade.weight, 0);
      return denominator !== 0 ? Math.round((numerator / denominator) *100) /100 : 0;
    },

    toJSON: function () {
      let obj = this.toObject();
      obj.currentGrade = this.getCurrentGrade();
      return obj;
    }
  }
};


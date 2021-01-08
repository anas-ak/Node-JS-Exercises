const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];

const arrayObjects = [
    {example: 'example1'}, 
    {example: 'example2'},
    {example: 'example3'}
];

const userInput = {
    personalInfo: {
                    streetAddress: '123456P',
                    city: 'Pindi',
                    state: 'ISL'
                  }, 
    preferences: arrayString
};

/* We are going to tackle this problem by breaking down
   the userInput into sections. We're going to develop 
   a schema for personalInfo and preferences*/

const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(3).required()
});

/* Instead of using Joi.object().keys(), we use .array.
   We're going to use a helper method called 'items'
   Items takes in ANY SCHEMA as an argument.
   We want to make sure all items in the array are strings. 
*/
const preferencesSchema = Joi.array().items(Joi.string());

/* Combine both schemas into one.*/
const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

Joi.validate(userInput, schema, (err,result) => {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

const Joi = require("joi");

const userSchema = Joi.object().keys({
	username: Joi.string().alphanum(),
	email: Joi.string()
		.email({ minDomainSegments: 2 })
		.required(),
	name: Joi.string()
		.alphanum()
        .min(3)
        .max(30)
		.allow(null),
	bio: Joi.string().allow(null),
});

module.exports = { userSchema }
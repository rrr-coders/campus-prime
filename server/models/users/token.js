const mongoose = require('mongoose');
const config = require('../../config/database')

// Token Schema 

const TokenSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    tokens: [String]
});

const Token = module.exports = mongoose.model('Token', TokenSchema);

module.exports.addToken = function (token, callback) {
// Token.update(query, token, { upsert: true, setDefaultsOnInsert: true }, callback)
}

module.exports.getTokensByUsername = function (username, callback) {
    query = {
        username: username
    }
    Token.findOne(query, callback);
}

// module.exports
// Token.update(query, token, { upsert: true, setDefaultsOnInsert: true }, callback)

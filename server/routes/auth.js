const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/users/user')
const Token = require('../models/users/token')
const config = require('../config/database')

router.post('', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUser({ username: username }, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 900 // 15 mins
                });

                const refreshToken = jwt.sign({ data: user }, config.refreshSecret, {
                    expiresIn: 904800 // 1 week
                })

                // save token in database
                var tkn = new Token({
                    username: username,
                    tokens: [token]
                });
                Token.addToken(tkn, (err, token) => {
                    if (err) {
                        throw err;
                    }
                    else {
                        // console.log(token);

                    }
                })

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    refreshToken: refreshToken,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'User not found'
                });
            }

        });
    });
})


router.get('/tokens/:username', (req, res) => {
    const username = req.params.username;
    console.log(username);

    Token.getTokensByUsername(username, (err, tokens) => {
        if (err) {
            throw err;
        }
        if (tokens) {
            return res.json({
                success: true,
                tokens: tokens
            });
        } else {
            return res.json({
                success: false,
                message: 'not found'
            })
        }
    });
})

module.exports = router;
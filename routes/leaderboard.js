const express = require('express')
const axios = require('axios')
const router = express.Router()
const path = require('path')
const Handlebars = require('handlebars')
const mongoose = require("mongoose");
const apicache = require('apicache');
const config = require('../config.json')

let cache = apicache.middleware

require('dotenv').config();
// const xp = require('simply-xp')
// xp.connect(process.env.MONGOOSEURI)

router.get('/leaderboards', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages', 'leaderboard', 'leaderboard.html'))
})
router.get('/leaderboards/:gid', cache('15 minutes'), (req, res) => {
    if(req.params.gid.toLowerCase() == 'skrossi' || req.params.gid == '749948917940092938' ) {
        axios.request({ url: `${config.leaderboardApi}/leaderboard/749948917940092938`, method: "GET" })
            .then((r) => { 
                res.render('skrossi-lb', {
                    lbdata: r.data
                })
                
            })
    }
    else 
        res.sendFile(path.join(__dirname, '../pages', 'Errors', '404.html'))
})
Handlebars.registerHelper('positionColor', function (x) {
    let gold = '#ffb53fcd',
    silver = '#a8a3a3ae',
    bronze = '#b57944d3',
    grey = '#dbdada20'

    if (x === 0)
        return gold;
    else if (x === 1) 
        return silver;
    else if (x === 2)
        return bronze;
    else 
        return grey;
});


module.exports = router
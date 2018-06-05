const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors());
//Require AdUnit model in our routes module
let AdUnit = require('../models/AdUnit');

//Define store route
router.post('/add', (req, res) => {
    let adUnit = new AdUnit(req.body);
    console.log('depuis le serveur', req.body);
    adUnit.save((err, addUnit)=>{
        if(err){
            res.json({success: false, msg: err});
        }else {
            res.json({success: true, msg:"AdUnit in added successufully"});
        }
    });
});

router.get('/', (req, res) => {
    AdUnit.find((err, adUnits) => {
        if(err){
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, adUnits});
        }
    });
});

router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    AdUnit.findById(id, (err, adUnit) => {
        res.json(adUnit);
    });
});


router.post('/update/:id', (req, res) => {
    AdUnit.findById(req.params.id, (err, adUnit) => {
        if(!adUnit)
            return next(new Error('Could not load Document'));
        else {
            adUnit.unit_name = req.body.unit_name;
            adUnit.unit_price = req.body.unit_price;
            adUnit.save().then(adUnit => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    AdUnit.findByIdAndRemove({_id: req.params.id}, (err, adUnit) => {
        if(err)
            res.json(err);
        else    
            res.json('Succefully removed');
    });
});

module.exports = router;
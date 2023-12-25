const knex = require("../config/bdconnection");
const express = require("express");
const { virifiToken } = require("../middelwear/jwt");
const errorlog = require("./error");
const router = express.Router()

router.post("/" ,async (req,res)=>{
    try {
        let {username,PhotoId,address,category,Area,additionalinfo,description,price,pricePerSqft,phoneNo} = req.body
        if (!!username && !!price && !!PhotoId && !!address && !!category && !!Area && !!additionalinfo && !!description && !!pricePerSqft && !!phoneNo) {
            await knex("Property_info").insert(req.body)
            res.status(200).send(inserted);
        }else{
            res.sendStatus(404);
        }
    } catch (error) {
        errorlog(error, "line -- 17 Property_info.js error on post api");
        res.send("smthing went wrong")
    }
})

module.exports = router
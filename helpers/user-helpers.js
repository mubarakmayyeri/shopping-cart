var db = require('../config/connection')
var collection = require('../config/collections');
const bcrypt = require('bcrypt');
const { resolve, reject } = require('promise');

module.exports={

    doSignUp:(userData)=>{

        return new Promise(async(resolve,reject)=>{

            userData.Password =await bcrypt.hash(userData.Password, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{

                resolve(data.insertId)
            })
        })
    },

    doLogin:(userData)=>{

        return new Promise(async(resolve,reject)=>{
            let loginStatus = false
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status){
                        console.log("login success");
                        response.user = user
                        response.status = true
                        resolve(response)
                    }else {
                        console.log("login failed");
                        resolve({status:false})
                    }
                })
            }else {
                console.log("user not found");
                resolve({status:false})
            }
        })
    }
}
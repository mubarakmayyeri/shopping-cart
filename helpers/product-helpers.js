var db = require('../config/connection')
var collection = require('../config/collections');
const { reject, resolve } = require('promise');
var objectId = require('mongodb').ObjectId

module.exports = {
    addProduct:(product,callback)=>{
        console.log(product);

        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            callback(data.insertedId);
        })
    },
    
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },

    deleteProducts:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objectId(productId)}).then((response)=>{
                resolve()
            })
        })
    },

    getProductDetails:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(productId)}).then((product)=>{
                resolve(product)
            })
        })
    },

    updateProduct:(productId, productDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:objectId(productId)},{
                $set:{
                    Name:productDetails.Name,
                    Category:productDetails.Category,
                    Price:productDetails.Price,
                    Description:productDetails.Description
                }
            }).then((response)=>{
                resolve()
            })
        })
    }
}
const {getBillData,saveBillData,updateBillData} = require('../services/billService');
exports.getBills = async function(req,res,next){
    var id = req.params.patientId;
    try{
        var bills = await getBillData(id);
        console.log(bills)
        if(bills.length>0){
            return res.status(200)
            .json({
                status:200,
                data:bills,
                message:"Bills retrived"
            });
        }
        else{
           return res.status(200).send("Bill Data does not exist")
        }
    }
    catch(e){
        return res.status(400).json({status:400,message:e.message})

    }
}

exports.saveBills = async function(req,res,next){
        try{
            var post = await saveBillData(req.body);
            console.log(post)
            if(post.saved){
                return res.status(200)
                .json({
                    status:200,
                    message:"Bills Saved Successfully",
                    completeData:post.data
                });
            }
            else{
               return res.status(200).send(post.message)
            }
        }
        catch(e){
            return res.status(400).json({status:400,message:e.message})
    
        }
}

exports.updateBills = async function(req,res,next){
    try{
        var update = await updateBillData(req.body);
        console.log(update)
        if(update.saved){
            return res.status(200)
            .json({
                status:200,
                message:"Bills updated Successfully",
                dataAfterUpdation:update.data
            });
        }
        else{
           return res.status(200).send(update.message)
        }
    }
    catch(e){
        return res.status(400).json({status:400,message:e.message})

    }
}
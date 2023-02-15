const patientData = [
    {
        patientId:100,
        name:"Antony",
        dateOfService:"01/13/2023",
        hospital:"St.Richards",
        billData:{
            wheelChair:5,
            bed:15,
            ambulance:20,
            pharma:50,
            xRay:10
        }
    },
    {
        patientId:101,
        name:"Elanga",
        dateOfService:"01/13/2020",
        hospital:"St.Richards",
        billData:{
            wheelChair:5,
            bed:15,
            ambulance:20,
            pharma:50,
            xRay:10
        }
    },
    {
        patientId:103,
        name:"Robert",
        dateOfService:"10/09/2021",
        hospital:"St.Richards",
        billData:{
            wheelChair:5,
            bed:15,
            ambulance:20,
            pharma:50,
            xRay:10
        }
    },
    {
        patientId:104,
        name:"Perry",
        dateOfService:"11/13/2022",
        hospital:"St.Richards",
        billData:{
            wheelChair:5,
            bed:15,
            ambulance:20,
            pharma:50,
            xRay:10,
        }
    },
    {
        patientId:105,
        name:"Emma",
        dateOfService:"12/13/2022",
        hospital:"St.Richards",
        billData:{
            wheelChair:15,
            bed:10,
            ambulance:10,
            pharma:10,
            xRay:10
        }
    }
]

function getTotalBill(billData){
    let total = 0;
    total = total + billData.wheelChair;
    total = total + billData.bed;
    total = total + billData.pharma;
    total = total + billData.xRay;
    total = total + billData.ambulance;
    return total;
    }
    
    exports.getBillData = async function(id){
        let result = [];
        let tempData = {
            data:"",
            total:""
        }
        try{
            await Promise.all(
                patientData.map(async items=>{
                    if(items.patientId.toString() === id){
                        tempData.data = items;
                        tempData.total =  getTotalBill(items.billData);
                        return result.push(tempData);
                    }
                })
            )
            console.log(result)
            return result;
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
    }

exports.saveBillData = async function(props){
    const {patientId} = props
    let flag = false;
    let tempData = {}
        try{
            await Promise.all(
                patientData.map(items=>{
                    console.log(items)
                    if(items.patientId.toString() === patientId){
                        flag = true
                        tempData =  {saved:false,message:"PatientId already present"}
                    }
                })
            )
            patientData.push(props)
            if(!flag){
                return {saved:true,message:"Patient Data pushed",data:patientData}
            }
            else{
                return tempData
            }
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
}

exports.updateBillData = async function(props){
    const {patientId,billData} = props
    let flag = false;
    let tempData = {}
        try{
            await Promise.all(
                patientData.map(items=>{
                    if(items.patientId.toString() === patientId.toString()){
                        flag = true;
                        items.billData = billData;
                        tempData = {saved:true,message:"PatientData replaced",data:items};
                    }
                })
            )
            if(!flag){
                return {saved:false,message:"PatientId not present"}
            }
            else{
                return tempData
            }
        }
        catch(e){
            console.log(e);
            throw Error(e);
        }
}
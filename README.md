# Truffle Health - Backend Assessment

- Download Zip or Clone project to the device.
- Open terminal for the particular folder.
- If node modules are not working/node modules are not installed, please install using - npm install
- start the app using - npm start
- Open postman application
- Click on the 'Create New' option -> click on basic HTTP request
- Make a 'Get' call with API url as - "http://localhost:3000/bills/getBills/:patientId
   - This 'Get' API will get the Bills with details such as Patient Id, Patient Name, Date Of service, hospital, billData (with total amount).
- Make a 'Post' call with API url as - "http://localhost:3000/bills/saveBill"
  -Body JSON - {
        "id":8,
        "patientId":108,
        "name":"Antony",
        "hospital":"St.Richards",
        "billData":{
            "wheelChair":5,
            "bed":15,
            "ambulance":20,
            "pharma":50,
            "xRay":10
        }
}
  - This API will save the data in the application.
 - Make a 'Post' call with API url as - "http://localhost:3000/bills/updateBill"
  - Body JSON - {
        "patientId":103,
        "billData":{
            "wheelChair":1,
            "bed":15,
            "ambulance":20,
            "pharma":50,
            "xRay":10
        }
}
  - This API will update the parameter values in the application.

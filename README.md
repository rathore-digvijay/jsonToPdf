# JSON To PDF

## Information

* The Service is using Node and Express.

* Clone the repository.

* Go to repository by 

        `cd jsonToPdf`

* Check all the dependencies are installed by commmand

        `npm install`

* Start the server by 

        `node app.js`

* Goto Link [http:localhost:3000/pdfMake/pdf]()


* A pdf file will get downloaded after 5 min. 
If the API is called once again then previous timer will get restarted.


* The services/pdfMake.js file contains the API code.

* I have used a JSON file services/catlague_questions.json as sample json input.
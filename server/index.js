// const { Configuration, OpenAIApi } = require("openai");
// const express = require('express');
// const configuration = new Configuration({
//     organization: "org-LbM6Iz8XVXYIHQPBFnw3IvLH",
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);
// // const response = await openai.listEngines();
// async function callApi(){
//     try{
// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Say this is a test",
//   max_tokens: 7,
//   temperature: 0,
// });
// console.log(response.data.choices[0].text)
//     }catch(err){
//         console.log("error");
//     }
// }

// callApi()

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');

const configuration = new Configuration({
    organization: "org-MGaTwNDByZFGM5qv3bwIyqgc",
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);


    



const app = express();
const port = 3001;
app.post('/',async (req,res)=>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text);
      res.json({data:response.data})
})



app.listen(port,()=>{
    console.log("SERVER RUNNING")
})

// // Add your code here
// // fetch(destinationURL, configurationObject);
// const configurationObject = {
//     method: "POST",// http verb
//     //entails information abt the data we want to send
//     headers: {
//         "Content-Type": "application/json", // specifies to the server the format of the data to be send
//         Accept: "application/json", // tells serverthe format we want in return
//         // add data
        
//       },
//       // add data (needs to ba a string)
//       body:JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//       },
      
//       ),

//     };
//     fetch("http://localhost:3000/dogs", configurationObject)
//     // reps what the server sent back takes it built in method json()
//     .then (function(response){
//         return response.json
//     })
//     // result of the first then is made available to the second then
//     .then (function(object){
//         console.log(object);

//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });


function submitData(name, email){
return fetch("http://localhost:3000/users",{

    method: "POST",
    headers: {
        "Content-Type": "application/json", 
        Accept: "application/json", 
   
      },
    
      body:JSON.stringify({
        name,
        email
      })
    })
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        return document.body.innerHTML= data['id']
    })
    .catch (function(errors){
        return document.body.innerHTML= errors.message
    })
}
submitData("Judy mwai","jay@gmail.com")


     
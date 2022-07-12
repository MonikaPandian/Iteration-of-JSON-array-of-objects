//Step 1:creating an XHR(XML-HTTP Request) object
//XML-HTTP Request are a way to interact with the servers via API
//API is restcountries
var request=new XMLHttpRequest();
//Step 2:create a request/open a request
//open is an inbuilt method.open method consists of two parameters:HTTP method,API-URL
request.open("GET","https://restcountries.com/v2/all");
//Step 3:creating a bridge
request.send();
//Step 4:Status code for success:200
//once the data successfully received from the server
//the data travelling from the server
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
  
   //Iterating through for loop
for(var i=0;i<result.length;i++){
  console.log(result[i]);
}
//Iterating through for-of loop
for(let s of result){
  console.log(s);
}

//Iterating through for-each loop
result.forEach(element => console.log(element));

//Iterating through for-in loop
for (var key in result) {
  console.log(result[key]);
  
}


}

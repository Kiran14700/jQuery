console.log("Ajax tutorials in one video");

let fetchbtn=document.getElementById('fetchbtn');

fetchbtn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    
    //instantionate the xhr object  matlab XMLHttpRequest() ka ek object create kiya
    let fetchbtn=document.getElementById('fetchbtn');
    
    fetchbtn.addEventListener("click",buttonClickHandler);
    const xhr=new XMLHttpRequest();
    console.log("Clicked");

    //Open the object   sabse pehla toh yeh request daalko ki data post karne ha ya get
    //fir file ka name  
    // fir asynchronous  kare matlab data pehla yeh load ho  asynchronous matlab yehi hotah ki yeh data pehla run ho
    // xhr.open("Get","Kiran5.txt",true);


    // // //3 to check JSON we use fake json data search it on google
    // xhr.open("Get","https://jsonplaceholder.typicode.com/todos/1",true);


    //4 use this for post request  and get this http link form dummy restapiexample
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');  //4 yahpr hame daalna hoga ki kya type data send kar rah ah ham JSON meh bhej rah ha isliye json likha ha
 
    //What to do on progress     agar ham chahe toh use bhi kar saktah ha yah nahi bhi
    //isme ham loading circle add kar saktah ha
    xhr.onprogress=function(){
    
        console.log("on progress");
    }


    // //its an old function 
    // //in  this we can use 0 1 2 3 4 function which we can learn in http onreadystatechange

    // xhr.onreadystatechange=function(){
    //     console.log(xhr.readyState);
    // }


    //onload matlab jab sab load ho jaye tab kya karna ha
    xhr.onload=function(){

        //agar status code 200 jo ki OK ha woh nhi hua toh error ayega
       if(this.status === 200){
        console.log(this.responseText);  //jo bhi text me likha hoga woh show karega

       }
       else{
        console.error("Some error occured");
       }
      
    }

    //send the request IT IS USED  FOR //1 //2 //3
    // xhr.send();   //jab ham send() karte ha tabhi yeh functions chalte ha
    
    // console.log("We are done");   //3 it will firstly execute because we make our XMLHttpRequest Asynchronous true
   
    //4 adding data on params
    params=`{"name":"test056","salary":"123045","age":"23500"} `;  //4 yeh work kar rah ha bas hame har waqt todhe changes karne padengeh kuki duplicate entries yeh receive nhi karta
    xhr.send(params);   //4 ham data send kar rah ha matlab post use kar rah ha
}



// 5 hamne button ko liya uske id naam se
let popBtn=document.getElementById('popBtn');

// fir usma click listener laga diya ki agar button pr click kiya toh popHandler() function run ho
popBtn.addEventListener("click",popHandler);


function popHandler(){

    console.log("Clicked on popHandler");
    const xhr=new XMLHttpRequest();
   
    //5 get link liya restapiexample search karke
    xhr.open("GET","https://dummy.restapiexample.com/api/v1/employees",true);

    xhr.onload=function(){
       if(this.status=== 200){ 

        // 5 jo data arah ha use JSon.parse se JSON format meh leliya aur obj meh store kardiya
        let obj=JSON.parse(this.responseText);
        console.log(obj);


        let list=document.getElementById('list');
        str="";
        //5 fir obj meh se
        for (key in obj){
            // 5 ${obj[key].employee_name} it is not working  
            str+=`<li>${obj[key]}</li>`;
           
        }
        // jo bhi data str meh add kiya use innerHtml meh se id="list" meh bhej diya 
        list.innerHTML=str;
       }
       else{
        console.error("Some error occured");
       }    
    }
    xhr.send();
    console.log("We are fetching data");
}



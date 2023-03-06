let formdata=document.getElementById("user");
let userID=document.getElementById("userid");
let userName=document.getElementById("username");
let userAge=document.getElementById("userage");
let cat=document.getElementsByName("category");
let prioritySel=document.getElementById("priority-sel");
let vaccineSel=document.getElementById("vaccine-sel");


let UserDataBase=JSON.parse(localStorage.getItem("register")) || [];


formdata.addEventListener("submit",function (e){
    e.preventDefault();
    fetchData();
})

function fetchData(){


    let UID=userID.value;
    let Name=userName.value;
    let age=+userAge.value;
    let Priority=prioritySel.value;
    let Vaccine=vaccineSel.value;
    let Category;
    
    for(let i of cat){
        if(i.type==="radio" && i.checked){
            Category=i.value;
            break;
        }
    }
    

    if(UID && Name && (age>=18 && age<=40) && Priority && Vaccine && Category){

        let obj={
            id:UID,
            name:Name,
            Age:age,
            category:Category,
            priority:Priority,
            vaccine:Vaccine
        }

        storeData(obj);
       
    }
    else{
        alert("Please Enter All valid details !")
    }

}


function storeData(obj){

    let out=checkduplicate(obj);
    
    if(!out){

        let otp=Math.floor((Math.random() * 9000)+1000);
        obj.OTP=otp;

        UserDataBase.push(obj);
        localStorage.setItem("register",JSON.stringify(UserDataBase));
        alert("Registration done successfully !"+"Your OTP of Registration is : "+otp);
        Display();
    }
    else{
        alert("User already exists !");
    }

} 



function checkduplicate(obj){
    let out=UserDataBase.filter((item)=>{
        return item.id===obj.id
    })

    if(out.length!==0){
        return true;
    }
    else{
        return false;
    }
}

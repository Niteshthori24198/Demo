
let UserDataBase=JSON.parse(localStorage.getItem("register")) || [];
//console.log(UserDataBase)
let bodyele=document.querySelector("tbody");

let filterbypri=document.getElementById("priorityfilter");
let sortuser=document.getElementById("sortdata");
let vaccinefil=document.getElementById("vaccinefilter");

let DataBase=[...UserDataBase];

// console.log(DataBase)


Display(UserDataBase);


function Display(data){

    let rowitem=getrow(data);
    bodyele.innerHTML=rowitem;
   
}


function getrow(data){

    let rows=data.map((item)=>{
        return createrow(item.id,item.name,item.Age,item.category,item.priority,item.vaccine)
    }).join('')

    return rows;

}


function createrow(id,name,age,cat,pri,vacc){
    return ` 
    <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${cat}</td>
        <td>${pri}</td>
        <td>${vacc}</td>
        <td class="remove">Delete</td>
        <td class="vaccination">Vaccinate</td>
    </tr>
    `
}

filterbypri.addEventListener("change",function (e){
    e.preventDefault()

    //console.log(typeof filterbypri.value)

    if(filterbypri.value===""){
        window.location.reload()
    }
    else{
        let fd=UserDataBase.filter((item)=>{
            return item.priority===filterbypri.value
        })
        Display(fd)
    }
    
})


vaccinefil.addEventListener("change",function (e){
    e.preventDefault()

    //console.log(typeof filterbypri.value)

    if(vaccinefil.value===""){
        window.location.reload()
    }
    else{
        let fd=UserDataBase.filter((item)=>{
            return item.vaccine===vaccinefil.value
        })
        Display(fd)
    }
    
})

sortuser.addEventListener("change",function (e){

    e.preventDefault()

    if(sortuser.value===""){
        window.location.reload()
    }
    else if(sortuser.value==="High to Low"){
        DataBase.sort((x,y)=>{
            
            return y.Age-x.Age
        })
        console.log(DataBase)
        Display(DataBase)
    }
    else if(sortuser.value==="Low to High"){
        DataBase.sort((x,y)=>{
            return x.Age-y.Age
        })
        Display(DataBase)
    }

})


let vaccinatebtn=document.querySelectorAll(".vaccination");

for(let i of vaccinatebtn){
    i.addEventListener("click",function(e){
        e.preventDefault()
        window.location="otp.html"
       
    })
}




let rowremove=document.querySelectorAll(".remove");

for(let i in rowremove){


    rowremove[i].addEventListener("click",function(e){
        e.preventDefault()
        UserDataBase.splice(i,1)
        localStorage.setItem("register",JSON.stringify(UserDataBase));
        DataBase=[...UserDataBase];
        
        window.location.reload()

    })
    
}





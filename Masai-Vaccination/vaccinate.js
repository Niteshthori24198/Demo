
let vaccinatedUser=JSON.parse(localStorage.getItem("vaccinated")) || [];


let bodyele=document.querySelector("tbody");

let filterbypri=document.getElementById("priorityfilter");
let sortuser=document.getElementById("sortdata");
let vaccinefil=document.getElementById("vaccinefilter");

let DataBase=[...vaccinatedUser]

console.log(DataBase)


Display(vaccinatedUser);


function Display(data){

    let rowitem=getrow(data);
    bodyele.innerHTML=rowitem;
   
}


function getrow(data){

    let rows=data.map((item,index)=>{
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
    </tr>
    `
}

filterbypri.addEventListener("change",function (e){
    e.preventDefault()

    //console.log(typeof filterbypri.value)

    if(filterbypri.value===""){
        Display(vaccinatedUser)
    }
    else{
        let fd=vaccinatedUser.filter((item)=>{
            return item.priority===filterbypri.value
        })
        Display(fd)
    }
    
})

vaccinefil.addEventListener("change",function (e){
    e.preventDefault()

    //console.log(typeof filterbypri.value)

    if(vaccinefil.value===""){
        Display(vaccinatedUser)
    }
    else{
        let fd=vaccinatedUser.filter((item)=>{
            return item.vaccine===vaccinefil.value
        })
        Display(fd)
    }
    
})

sortuser.addEventListener("change",function (e){

    e.preventDefault()

    if(sortuser.value===""){
        Display(vaccinatedUser)
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
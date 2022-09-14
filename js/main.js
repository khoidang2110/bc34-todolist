class Task {
    constructor(taskContent,taskCode) {

        this.taskContent= taskContent;
        this.taskCode = taskCode;
        
    }
}


let listTask = [];
let listTaskDone =[];

document.querySelector("#addItem").onclick = () => {


    listTask = loadData();
  
    //DOM tới input lấy giá trị
    let taskContent = document.querySelector("#newTask").value;




 let taskCode=Math.random();


    //khai báo và gán dữ liệu cho đối tượng food
    let task = new Task( taskContent, taskCode);
    // cách viết es5
    // listFood.push(food);

    // cách viết es6
    if(listTask)
   {listTask = [...listTask, task];}
   else {listTask=[task]}

    // gọi hàm lưu data lên localstorage
    saveData(listTask);

    //gọi data từ localstorage
    showData(listTask);
}

let showData = (getListTask)=> {


    // document.querySelector('#addItem').onclick =()=>{
    
    //  taskRender =  
    // document.querySelector("#todo").innerHTML += 
    
    // }

    let ketQua = "";

    if (getListTask) {
        getListTask.map((item) => {
            ketQua += `<li>
            <div class='col-9'>
            ${item.taskContent}
            </div>
           <button class="border border-white bg-white col-1" onclick="deleteTask(${item.taskCode})"> <i class='fa fa-trash text-muted'></i></button>
           <button class="border border-white bg-white col-1" onclick="checkTask(${item.taskCode})">  <i class='fa fa-check-circle text-muted'></i></button>
            </li>
            `
        })
    }

    document.querySelector("#todo").innerHTML = ketQua;
}
let loadData = () => {
    return JSON.parse(localStorage.getItem("taskList"));
}
let saveData = (data) => {
    localStorage.setItem("taskList", JSON.stringify(data));
}

let showDataCheck = (getListTask)=> {


    // document.querySelector('#addItem').onclick =()=>{
    
    //  taskRender =  
    // document.querySelector("#todo").innerHTML += 
    
    // }

    let ketQua = "";

    if (getListTask) {
        getListTask.map((item) => {
            ketQua += `<li>
            <div class='col-9'>
            ${item.taskContent}
            </div>
           <button class="border border-white bg-white col-1" onclick="deleteTaskCheck(${item.taskCode})"> <i class='fa fa-trash text-muted'></i></button>
           <button class="border border-white bg-white col-1" onclick="checkTask(${item.taskCode})">  <i class='fa fa-check-circle text-success'></i></button>
            </li>
            `
        })
    }

    document.querySelector("#completed").innerHTML = ketQua;
}
let loadDataCheck = () => {
    return JSON.parse(localStorage.getItem("taskListChecked"));
}
let saveDataCheck = (data) => {
    localStorage.setItem("taskListChecked", JSON.stringify(data));
}
const deleteTaskCheck = (taskCode) => {
    // lấy dữ liệu từ localStorage
    listTaskDone = loadDataCheck();

    //C1 xóa bằng splice
    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    //listFood.splice(foodIndex, 1);

    //C2 filter ngược
    let arrayTask = listTaskDone.filter(item => item.taskCode != taskCode);

   

    // gọi hàm lưu data lên localstorage
    saveDataCheck(arrayTask);

    //gọi data từ localstorage
    showDataCheck(arrayTask);
}


const deleteTask = (taskCode) => {
    // lấy dữ liệu từ localStorage
    listTask = loadData();

    //C1 xóa bằng splice
    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    //listFood.splice(foodIndex, 1);

    //C2 filter ngược
    let arrayTask = listTask.filter(item => item.taskCode != taskCode);

   

    // gọi hàm lưu data lên localstorage
    saveData(arrayTask);

    //gọi data từ localstorage
    showData(arrayTask);
}


const checkTask = (taskCode) =>{
   listTask=loadData();
   listTaskDone = loadDataCheck();
    
    let arrayTask = listTask.find(item => item.taskCode == taskCode);



    //khai báo và gán dữ liệu cho đối tượng food
    let task = new Task( arrayTask.taskContent, taskCode);
    // cách viết es5
    // listFood.push(food);

    // cách viết es6
    if(listTaskDone)
   {listTaskDone = [...listTaskDone, task];}
   else {listTaskDone=[task]}

   saveDataCheck(listTaskDone);
   showDataCheck(listTaskDone);

deleteTask(taskCode);


}
//xắp xếp a-z
document.querySelector("#two").onclick = () =>{
    listTask=loadData();
    console.log(listTask);
    listTask.sort(function(a, b) {
        return a.taskContent.localeCompare(b.taskContent);
     });
    saveData(listTask);
    showData(listTask);
}
//xắp xếp z-a
document.querySelector("#three").onclick = () =>{
    listTask=loadData();
    console.log(listTask);
    listTask.sort(function(b, a) {
        return a.taskContent.localeCompare(b.taskContent);
     });
    saveData(listTask);
    showData(listTask);
}

window.onload = showData(loadData());
window.onload = showDataCheck(loadDataCheck());
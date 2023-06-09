// declearing
let addBtn = document.querySelector(`[type="button"]`);
let input = document.querySelector(`[type="text"]`);
let tasks = [];
let start = document.querySelector(".tasks > p");

// add task to the page

addBtn.addEventListener("click", addFun);

function addFun () {
        if (input.value === "" || input.value === " ") {
        } else {
if (window.localStorage.getItem("tasks") !== "[]" ) {
    tasks = tasks.concat(JSON.parse(window.localStorage.tasks));
    start.remove();
};
            let task = document.createElement("div");
            let taskText = document.createElement("span");
            let del = document.createElement("button");
            
            task.title = `${input.value}`;
            
            // reset input value to be ready to recive another task
            input.value = "";
            
            taskText.innerHTML = task.title;
            del.innerHTML = "delete";
            
            task.append(taskText);
            task.append(del);
            
            // styling
            task.style.cssText = "margin-top: 5px; text-align: center";
            del.style.cssText = "color: black; margin-left: 10px; cursor: pointer; border: none; border-radius: 10px;padding: 5px;background-color: white;"
            taskText.style.cssText = "  width: 60%; display: inline-block;  color: black; font-weight: bold; margin-right: 10px; border-radius: 10px; padding: 5px; background-color: white;"
            
            document.querySelector(".tasks").append(task);
            
            tasks.push(task.title);
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            
            del.addEventListener("click", delFun);
            
            function delFun (ele) {
                
                ele.target.parentElement.remove();
                
                let objTR = JSON.parse(window.localStorage.tasks);
                let filterDel = objTR.filter(function (el, ind) {
                    return el !== ele.currentTarget.previousElementSibling.innerHTML;
                });
                window.localStorage.tasks = JSON.stringify(filterDel);
            }; 
        }
        };
        
// add to localStorage then the page again 
window.addEventListener("load", addFun2);

function addFun2 () {
    
    if (window.localStorage.getItem("tasks")) {

        for( let i = 0; i < JSON.parse(window.localStorage.tasks).length; i++) {
            let task = document.createElement("div");
            let taskText = document.createElement("span");
            let del = document.createElement("button");
            
            del.innerHTML = "delete";
            
            taskText.innerHTML = JSON.parse(window.localStorage.tasks)[i];
            
            task.append(taskText);
            task.append(del);
// styling
            task.style.cssText = "margin-top: 5px; text-align: center";
            del.style.cssText = "color: black; margin-left: 10px; cursor: pointer; border: none; border-radius: 10px;padding: 5px;background-color: white;"
            taskText.style.cssText = "  width: 60%; display: inline-block;  color: black; font-weight: bold; margin-right: 10px; border-radius: 10px; padding: 5px; background-color: white;"

            document.querySelector(".tasks").append(task);
            
            del.addEventListener("click", delFun);
            
            function delFun (ele) {

                ele.target.parentElement.remove();
                
                    let objTR = JSON.parse(window.localStorage.tasks);
                    let filterDelTasks = objTR.filter(function (el) {
                        return el !== ele.currentTarget.previousElementSibling.innerHTML;
                    });
                    window.localStorage.setItem("tasks", JSON.stringify(filterDelTasks));
                }; 
            };   
    };
};

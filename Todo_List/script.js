const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You  must have to enter something : ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "&#10060;";
        li.appendChild(span);
        
    }
    inputBox.value = "";
    showData();
}

inputBox.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
  
    event.preventDefault();
    
    document.getElementById("mybtn").click();
  }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        showData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        showData();
    }
},false);

function showData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
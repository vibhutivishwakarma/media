 function getTasks() {
     fetch('./data.json').then(data => data.json()).then(data => addTasks(data))
 }
 
 function added() {
     alert('Your task is successfully added')
 }

 function addTasks(tasks) {
     
     let ul = document.getElementById('tasks')
     tasks.map(task => {
         let newTask = document.createElement('li')
         newTask.setAttribute('class', 'list-group-item')
         newTask.setAttribute('style','text-align: center;')
         newTask.innerHTML = `
         <img src=${task} alt="" style="margin-bottom:20px; width: 150px;">
         <br>
         <span>Score:</span>
         <select>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
             
             </select>`
             ul.appendChild(newTask)
             
         })
     let submitButton = document.createElement('button')
     submitButton.setAttribute('class','btn btn-primary')
     submitButton.innerText='Submit Score'
     submitButton.addEventListener('click', ()=>{
         alert('Scores added')
     })
     
     ul.appendChild(submitButton)

     
 }

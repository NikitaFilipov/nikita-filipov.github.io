let input = document.querySelector('#field');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		// здесь будет код для добавление новой li в список
       
        let createLi= () =>{
            let li = document.createElement('li');
		
            let task = document.createElement('span');
            task.classList.add('task');
            task.textContent = this.value;
            li.appendChild(task);
            task.addEventListener('dblclick',function(){
                let text=this.textContent
                this.textContent=''

                let elem =document.createElement('input')
                elem.value = text
                this.appendChild(elem)
                let self=this
                elem.addEventListener('keypress',function(e){
                    if(e.key == 'Enter'){
                        self.textContent=this.value
                    }
                })
            })
            let remove = document.createElement('span');
            remove.classList.add('remove');
            remove.textContent = 'удалить';
            li.appendChild(remove);
            remove.addEventListener('click',function(){
                this.parentElement.remove()
            })
            let mark = document.createElement('span');
            mark.classList.add('mark');
            mark.textContent = 'сделано';
            li.appendChild(mark);
            mark.addEventListener('click',function(){
                task.classList.add('checked')
            })

            list.appendChild(li);
            
            this.value = '';
        }
        createLi()
    }
});
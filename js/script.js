window.addEventListener("contextmenu", e => e.preventDefault());

const { createApp } = Vue;

createApp ({
    data() {
        return{
            tasks : [
                {
                    text: 'Fare la spesa',
                    done: false,
                    edit: false
                },
                {
                    text: 'Portare il cane',
                    done: false,
                    edit: false
                },
                {
                    text: 'Fare i bonus',
                    done: false,
                    edit: false
                },
                {
                    text: 'Pulire la macchina',
                    done: false,
                    edit: false
                }
            ],
            newContent: '',
            editContent: ''
        }
    },
    methods: {
        eliminateTask: function(index){
            this.tasks.splice(index, 1);
        },
        addTask: function() {
            if (this.newContent.length > 0) {
                let newTask = {text: this.newContent, done: false};
                this.tasks.unshift(newTask);
                this.newContent = ''
            } else {
                console.warn('No text to add');
            }
        },
        switchStatus: function(index){
            this.tasks[index].done = this.tasks[index].done == false ? true : false;
            if (this.tasks[index].done == true) {
                this.tasks.splice(this.tasks.length - 1, 0, this.tasks.splice(index, 1)[0]);
            } else {
                this.tasks.splice(0, 0, this.tasks.splice(index, 1)[0]);
            }
        },
        editTask: function(index){
            if (this.editContent.length > 0) {
                this.tasks[index].text = this.editContent;
                this.editContent='';
            }
            this.tasks[index].edit = false;
        },
        showEdit: function(index){
            this.tasks[index].edit = true;
        }
    }
}).mount('#app')
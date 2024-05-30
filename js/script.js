const { createApp } = Vue;

createApp ({
    data() {
        return{
            tasks : [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Portare il cane',
                    done: false 
                },
                {
                    text: 'Fare i bonus',
                    done: false 
                },
                {
                    text: 'Pulire la macchina',
                    done: false 
                }
            ],
            newContent: ''
        }
    },
    methods: {
        eliminateTask: function(index){
            this.tasks.splice(index, 1);
        },
        addTask: function() {
            if (this.newContent.length > 0) {
                let newTask = {text: this.newContent, done: false};
                this.tasks.push(newTask);
                this.newContent = ''
            } else {
                console.warn('No text to add')
            }
        },
        switchStatus: function(index){
            this.tasks[index].done = this.tasks[index].done == false ? true : false;
        }
    }
}).mount('#app')
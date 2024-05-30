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
            ]
        }
    },
    methods: {
        eliminateTask: function(index){
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app')
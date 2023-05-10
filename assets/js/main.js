const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask:{
          text: "",
          done: false
        },

        inputError: false,

        taskList:[
          {text: "Svegliarsi alle 8:00", done: true},
          {text: "Fare colazione", done: false},
          {text: "Lavarsi i denti", done: false},
        ]
      }
    },
    methods: {
      // funzione che aggiunge una task nuova
      addTask(){
        if (this.newTask.text.length >= this.taskList.length){
          this.inputError = false;
          let copyTask = {...this.newTask};
          this.taskList.push(copyTask);
          this.newTask.text = "";
        } else{
          this.inputError = true; 
        }      
      },
      // funzione che rimuove task completate
      remove(i){
        this.taskList.splice(i, 1);
      },
      // funzione che aggiunge la classe "dashed" alla task completata
      getClass(i){  
        return (this.taskList[i].done === true) ? "noStyle dashed" : "noStyle";
      },
      // funzione che cambia il [done] da true a false o viceversa
      change(i){
        this.taskList[i].done = !this.taskList[i].done;
      }
    }
  }).mount('#app')
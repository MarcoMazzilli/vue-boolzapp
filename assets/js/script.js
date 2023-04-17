import contactsArray from "./dbContacts.js"
console.log("Hello world!")

const {createApp} = Vue


createApp({
    data(){
        return{
            message: "Click to show array in console",
        }
    },
    methods:{
        log(){
            console.log(contactsArray)
        }
    },
}).mount("#app")
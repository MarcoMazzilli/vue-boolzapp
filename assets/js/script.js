import contactsArray from "./dbContacts.js"
console.log("Hello world!")

const {createApp} = Vue


createApp({
    data(){
        return{
        contactsArray,
        }
    },
    methods:{
        log(){
            console.log(contactsArray)
        }
    },
}).mount("#app")
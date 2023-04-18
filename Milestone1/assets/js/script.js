import contactsArray from "./dbContacts.js"
console.log("Hello world!")

const {createApp} = Vue


createApp({
    data(){
        return{
        contactsArray,
        clickedThumb: 0,
        }
    },
    methods:{
        log(contact,i){
            console.log(contact,i)
        },
        changeTopBar(i){
            this.clickedThumb = i ;
            console.log(this.clickedThumb)
        }
    },
}).mount("#app")
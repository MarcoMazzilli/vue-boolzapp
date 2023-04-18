import contactsArray from "./dbContacts.js"
console.log("Hello world!")

const {createApp} = Vue


createApp({
    data(){
        return{
        contactsArray,
        clickedThumb: 0,
        obj :{},
        newSentMessageInput :"",
        }
    },
    methods:{

        log(){
            console.log(this.contactsArray[this.clickedThumb])
        },

        changeTopBar(i){
            this.clickedThumb = i ;
            console.log(this.clickedThumb)
        },

        newSentMessage(){
            this.obj = {
                date: '10/01/2020 15:30:55',
                textMessage: this.newSentMessageInput,
                status: 'sent'
            }
            this.contactsArray[this.clickedThumb].messages.push(this.obj)
            this.newSentMessageInput = ""
            console.log(this.contactsArray[this.clickedThumb]);
        }
    },
}).mount("#app")
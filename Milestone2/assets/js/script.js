import contactsArray from "./dbContacts.js"
const dt = luxon.DateTime
console.log(dt);

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

//TODO: set time on messages 
        newSentMessage(){
            this.obj = {
                date: '10/01/2020 15:30:55',
                textMessage: this.newSentMessageInput,
                status: 'sent'
            }
            this.contactsArray[this.clickedThumb].messages.push(this.obj)
            this.newSentMessageInput = "",
            //auto answer
           setTimeout(() => {
            this.obj = {
                date: '10/01/2020 15:30:55',
                textMessage: "ok",
                status: 'recived'
            }
            this.contactsArray[this.clickedThumb].messages.push(this.obj)
           }, 1000);
            console.log(this.contactsArray[this.clickedThumb]);
        }
    },
}).mount("#app")
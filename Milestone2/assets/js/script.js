import contactsArray from "./dbContacts.js"
const dt = luxon.DateTime

console.log(dt.now().toFormat('HH'+':'+'mm'));
console.log(dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT))

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
                date: {
                    dayDate :"", 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: this.newSentMessageInput,
                status: 'sent'
            }
            this.contactsArray[this.clickedThumb].messages.push(this.obj)
            this.newSentMessageInput = "",
            //auto answer
           setTimeout(() => {
            this.obj = {
                date: {
                    dayDate :"", 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: "ok",
                status: 'recived'
            }
            this.contactsArray[this.clickedThumb].messages.push(this.obj)
           }, 2000);
            console.log(this.contactsArray[this.clickedThumb]);
        }
    },
}).mount("#app")
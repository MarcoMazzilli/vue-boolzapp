import contactsArray from "./dbContacts.js"
const dt = luxon.DateTime

const {createApp} = Vue


createApp({
    data(){
        return{
        contactsArray,
        clickedThumb: 0,
        obj :{},
        newSentMessageInput :"",
        letterToSearch:"",
        lightTheme : true,
        }
    },
    methods:{

        log(){
            console.warn(this.lightTheme)
        },

        changeTopBar(i){
            this.clickedThumb = i ;
        },

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
        },

        searchUser(){
            this.contactsArray.forEach(contact => {

                    contact.visible = contact.ContactName.toUpperCase().includes(this.letterToSearch.toUpperCase())

                console.warn(this.letterToSearch)
            })
        },

        deleteMessage(i){
            this.contactsArray[this.clickedThumb].messages.splice( i , 1)
        }
    },

}).mount("#app")
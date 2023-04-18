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
        }
    },
    methods:{

        log(){
            console.log(this.letterToSearch)
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

        searchConversation(){
            this.contactsArray.forEach(contact => {

                    contact.visible = contact.ContactName.toUpperCase().includes(this.letterToSearch.toUpperCase())

                console.warn(this.letterToSearch)
            })
        }
    },

}).mount("#app")



// if (contact.ContactName.includes(this.letterToSearch)) {
//     contact.visible = false
// }
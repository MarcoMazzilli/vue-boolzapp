import contactsArray from "./dbContacts.js"
const dt = luxon.DateTime

const { createApp } = Vue


createApp({
    data() {
        return {
            contactsArray,
            clickedThumb: 0,
            obj: {},
            newSentMessageInput: "",
            letterToSearch: "",
            lightTheme: true,
            counterBackground: 0,
            showThumbs: false,
            backgroundArray: [
                "assets/img/mine.jpg",
                "assets/img/mineDark.jpg",
                "assets/img/travel.jpg",
                "assets/img/paint.jpg",
                "assets/img/rain.gif",
            ]
        }
    },

    methods: {

        changeTheme() {
            this.lightTheme = !this.lightTheme;
            const css = document.querySelector('#dark-mode');
            css.href = css.getAttribute('data-dark');

            if (this.lightTheme) {
                css.href = css.getAttribute('data-light');
            }
        },

        changeTopBar(i) {
            this.clickedThumb = i;
        },

        newSentMessage() {

            this.obj = {
                date: {
                    dayDate: "",
                    dayTime: dt.now().toFormat('HH' + ':' + 'mm')
                },
                textMessage: this.newSentMessageInput,
                status: 'sent'
            }

            this.contactsArray[this.clickedThumb].messages.push(this.obj);
            this.newSentMessageInput = "";

            //auto answer
            setTimeout(() => {
                this.obj = {
                    date: {
                        dayDate: "",
                        dayTime: dt.now().toFormat('HH' + ':' + 'mm')
                    },
                    textMessage: "ok",
                    status: 'recived'
                }
                this.contactsArray[this.clickedThumb].messages.push(this.obj)
                showNotification('Perfetto')
            }, 2000);
            console.log(this.contactsArray[this.clickedThumb]);
        },

        searchUser() {
            this.contactsArray.forEach(contact => {
                contact.visible = contact.ContactName.toUpperCase().includes(this.letterToSearch.toUpperCase())
            })
        },

        deleteMessage(i) {
            this.contactsArray[this.clickedThumb].messages.splice(i, 1)
        },

        changeBackground() {
            const bgChange = document.querySelector(".conversation-container");
            bgChange.style.backgroundImage = `url(${this.backgroundArray[this.counterBackground]})`;

        },

        deleteChat() {
            this.contactsArray[this.clickedThumb].messages = []
        },

        deleteConversation() {
            this.contactsArray.splice(this.clickedThumb, 1)
        }

    },

}).mount('#app');

function showNotification(message) {
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            const options = {
                body: message,
                icon: "path/to/logo.png",
                image: "path/to/image.png"
            };
            const notification = new Notification("Nuovo messaggio in arrivo", options);
            notification.onclick = function () {
                console.log("La notifica è stata cliccata");
            };
        }
    });
}






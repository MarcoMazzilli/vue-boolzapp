const dt = luxon.DateTime
export default [
    {
        ContactName: 'Michele',
        profilePic: 'assets/img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Con te non ci parlo, da ora ti risponderò soltanto "ok".',
                status: 'received'
            },
        ]
    },
    {
        ContactName: 'Fabio',
        profilePic: 'assets/img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            },
        ],
    },
    {
        ContactName: 'Samuele',
        profilePic: 'assets/img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'La Marianna va in campagna',
                status: 'recived'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Ah scusa!',
                status: 'recived'
            },
            
        ],
    },
    {
        ContactName: 'Alessandro B.',
        profilePic: 'assets/img/avatar_4.jpg',
        visible: true,
        messages:[
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Si, ma preferirei andare al cinema.',
                status: 'recived'
            },
        ]
    },
    {
        ContactName: 'Alessandro L.',
        profilePic: 'assets/img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },    
                textMessage: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },    
                textMessage: 'Va bene, stasera la sento',
                status: 'recived'
            },
        ],
    },
    {
        ContactName: 'Claudia',
        profilePic: 'assets/img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Non ancora',
                status: 'recived'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Nessuna nuova, buona nuova',
                status: 'sent'
            },
        ],
    },
    {
        ContactName: 'Federico',
        profilePic: 'assets/img/avatar_7.jpg',
        visible: true,
        messages:[
            {
            date: {
                dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                dayTime :dt.now().toFormat('HH'+':'+'mm')
            },         
            textMessage: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: {
                dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                dayTime :dt.now().toFormat('HH'+':'+'mm')
            },         
            textMessage: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'recived'
            },
        ],
    },
    {
        ContactName: 'Davide',
        profilePic: 'assets/img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'recived'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'OK!',
                status: 'recived'
            },
        ],
    }
]

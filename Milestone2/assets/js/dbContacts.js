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
<<<<<<< HEAD
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
=======
                date: dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT) + " " + dt.now().toFormat('HH'+':'+'mm'),
>>>>>>> 4a4937b5a11246580fe08472bf494cbd5e88c87e
                textMessage: 'Tutto fatto!',
                status: 'received'
            },
        ]
    },
    {
        ContactName: 'Fabio',
        profilePic: 'assets/img/avatar_2.jpg',
        visible: false,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
        ],
    },
    {
        ContactName: 'Samuele',
        profilePic: 'assets/img/avatar_3.jpg',
        visible: false,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
        ],
    },
    {
        ContactName: 'Alessandro B.',
        profilePic: 'assets/img/avatar_4.jpg',
        visible: false,
        messages:[
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
        ]
    },
    {
        ContactName: 'Alessandro L.',
        profilePic: 'assets/img/avatar_5.jpg',
        visible: false,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },    
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
        ],
    },
    {
        ContactName: 'Claudia',
        profilePic: 'assets/img/avatar_6.jpg',
        visible: false,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
        ],
    },
    {
        ContactName: 'Federico',
        profilePic: 'assets/img/avatar_7.jpg',
        visible: false,
        messages:[            {
            date: {
                dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                dayTime :dt.now().toFormat('HH'+':'+'mm')
            },         
            textMessage: 'Hai portato a spasso il cane?',
            status: 'sent'
        },],
    },
    {
        ContactName: 'Davide',
        profilePic: 'assets/img/avatar_8.jpg',
        visible: false,
        messages: [
            {
                date: {
                    dayDate :dt.now().setLocale('it').toLocaleString(dt.DATE_SHORT), 
                    dayTime :dt.now().toFormat('HH'+':'+'mm')
                },
                textMessage: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
        ],
    }
]

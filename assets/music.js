const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    songs:[
        {
            name: 'Miên Man',
            singer: 'Minh Huy',
            path:'assets/music/MienMan-MinhHuy-7561811.mp3',
            image:'assets/img/1.jpg'
        },
        {
            name: 'Tình cờ yêu em',
            singer: 'Kunn Đức Nam',
            path:'assets/music/TinhCoYeuEm-KuunDucNam-9634825.mp3',
            image:'assets/img/tinh co yeu em.jpg'
        }
    ],
    render: function() {
        console.log(123)
    },
    start: function() {
        this.render()
    }
}
    app.start()
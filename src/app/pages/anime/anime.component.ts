import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animes = [
    {
       id: 1,
       name: 'Black Cover',
       cover: 'https://hypeabis.id/assets/content/20220422113434000000maxresdefault5.jpg'
    },
    {
       id: 2,
       name: 'Boruto: Naruto Next Generations',
       cover: 'https://www.viu.com/ott/id/articles/wp-content/uploads/2022/01/nonton-anime-boruto-naruto-next-generations-sub-indo-viu.jpg'
    },
    {
       id: 3,
       name: 'Haikyuu',
       cover: 'https://i.ytimg.com/vi/wrnqUWHzdXA/maxresdefault.jpg'
    },
    {
       id: 4,
       name: 'One Punch Man',
       cover: 'https://asset.kompas.com/crops/BE7U9R1lnG4JGpa84XOmOOrodMQ=/0x12:938x638/750x500/data/photo/2021/02/22/6033910891095.jpg'
    },
    {
       id: 5,
       name: 'One Piece',
       cover: 'https://akcdn.detik.net.id/visual/2020/01/30/fd8a89f8-cd07-4d7e-9a24-17c440c90e4d_169.png'
    },
    {
       id: 6,
       name: 'Detective Conan',
       cover: 'https://static.republika.co.id/uploads/images/inpicture_slide/detektif-conan-_121124000454-120.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  article: any;

  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.get_Article().subscribe(res =>
      {
        this.article = res.map(data =>
          {
            return {
              id: data.payload.doc.id,
              gambar: data.payload.doc.data()['gambar'],
              judul: data.payload.doc.data()['judul'],
              keterangan: data.payload.doc.data()['keterangan'],
              link: data.payload.doc.data()['link']
            };
          })
          console.log(this.article);
      })
  }

}

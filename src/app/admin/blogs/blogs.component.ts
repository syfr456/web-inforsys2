import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
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
  edt(record){
    record.edit = true;
    record.replacegambar = record.gambar;
    record.replacejudul = record.judul;
    record.replaceketerangan = record.keterangan;
    record.replacelink = record.link;
  }
  edit(up){
    let data = {};
    data['gambar'] = up.replacegambar;
    data['judul'] = up.replacejudul;
    data['keterangan'] = up.replaceketerangan;
    data['link'] = up.replacelink;
    this.authservice.edit(up.id, data);
    up.edit = false;

  }
  deleteOi(id)
  {
    alert('Yakin Nak Hapos?? HAaaaaaaa??');
    this.authservice.deleted(id);
  }

}

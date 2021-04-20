import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  judul: string;
  gambar: string;
  keterangan: string;
  link: string;

  tambah_artikel(){
    let article = {};
    article['judul'] = this.judul;
    article['gambar'] = this.gambar;
    article['keterangan'] = this.keterangan;
    article['link'] = this.link;
    this.authservice.save(article).then(res =>{
      this.judul = "";
      this.gambar = "";
      this.keterangan = "";
      this.link = "";
      console.log(res);
      alert('Data Tersimpan');
      this.router.navigate(['/admin/blogs']);




    }).catch(error =>{
      alert(error);
    } )
  }

}

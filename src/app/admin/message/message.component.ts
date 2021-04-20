import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  contact: any;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  message: void;

  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.get_Allcontact().subscribe(data => {
      this.contact = data.map(e =>{
        return{
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          email: e.payload.doc.data()['email'],
          message: e.payload.doc.data()['message'],
        };
      })
      console.log(this.contact);
    })
  }
  deleteItem(id){
    alert('Anda yakin ingin menghapus?');
    this.authservice.delete(id);
  }

}

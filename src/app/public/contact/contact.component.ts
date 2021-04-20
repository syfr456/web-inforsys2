import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contact: string;
contactName: string;
contactEmail: string;
contactMessage: string;
message: void;

  constructor(public authservice:AuthService) { }
  
  createRecord()
  {
    let Record = {};
    Record['name'] = this.contactName;
    Record['email'] = this.contactEmail;
    Record['message'] = this.contactMessage;

    this.authservice.createNewcontact(Record).then(res => {
      this.contactName = "";
      this.contactEmail = "";
      this.contactMessage = "";
      console.log(res);
      this.message = alert("Pesan Telah Terkirim");
    }).catch(error => {
      console.log(error);
    });
  }
  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../../services/api.service';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-statusmanager',
  templateUrl: './statusmanager.component.html',
  styleUrls: ['./statusmanager.component.css']
})
export class StatusmanagerComponent implements OnInit {
constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toastr-banner',
  templateUrl: './toastr-banner.component.html',
  styleUrls: ['./toastr-banner.component.scss']
})
export class ToastrBannerComponent implements OnInit {

  isClosed: boolean;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.isClosed = true;
  }

}

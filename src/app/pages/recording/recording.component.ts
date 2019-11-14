import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss'],
})
export class RecordingComponent implements OnInit {

  url: any;
  constructor(private sanitize: DomSanitizer) {
    this.url = sanitize.bypassSecurityTrustResourceUrl("http://192.168.1.8/");
  }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
// var ftpClient = require('../../../../../node_modules/ftp-client')
import * as ftpClient from 'ftp-client';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {


  sourceVideo = "http://192.168.1.8:8081/"
  param = 1;
  isSuccess = false;

  constructor(
    private http: HttpClient,
    public navCtrl: NavController,
    public platform: Platform
  ) { 
    
  }

  ngOnInit() {
    let url = "http://192.168.1.8:8081/"
    // this.http.get(url).subscribe((res) => {
    //   this.isSuccess = true;
    // }, error => this.isSuccess = false)

    let config = {
      host: 'ftp://192.168.1.8',
      port: 21,
      user: 'admin',
      password: ''
    }
    let options = {
      logging: 'basic'
    }
    // let client = ftpClient(config, options);
    // client.connect(function (){
    //   client.download('/2019-11-09', 'test/', {
    //     overwrite: 'all'
    //   }, function(result){
    //     console.log(result);
    //   });
    // });

    this.param = 1;
    this.sourceVideo = "http://192.168.1.8:8081/"
  }

  changeCam(id) {
    this.sourceVideo = "http://192.168.1.8:808" + id + "/"
    this.param = id;
  }

}

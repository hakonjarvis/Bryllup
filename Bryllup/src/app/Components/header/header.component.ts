import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  deviceInfo = null;
  showHeaderPictures = true;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.getDeviceInfo();
  }

  getDeviceInfo(){
    // this.deviceInfo = this.deviceService.getDeviceInfo();
    if(this.deviceService.isMobile()){
      this.showHeaderPictures = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ScreenAdsService } from 'src/app/Services/screen-ads.service';
import { IScreenAds } from './../../Interfaces/screenAds';

@Component({
  selector: 'app-screen-ads',
  templateUrl: './screen-ads.component.html',
  styleUrls: ['./screen-ads.component.scss']
})
export class ScreenAdsComponent implements OnInit {

  adsList: IScreenAds[] = [];
  aad:IScreenAds;
  constructor(private adsService: ScreenAdsService) { }

  ngOnInit(): void {
    this.getAds();
  }

  getAds(){
  this.adsService.getAds().subscribe(success => {
    this.adsList = success;
    console.log(success,"hhh",this.adsList)
    console.log("yes1")
    for(let ad of this.adsList){
      console.log("yes",ad)
      this.aad = ad;
    }
  });
}
}

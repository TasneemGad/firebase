import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ScreenAdsService } from 'src/app/Services/screen-ads.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  addForm: FormGroup
  constructor(private fb: FormBuilder, private adsService:ScreenAdsService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: ['', Validators.required],
      image: ['', Validators.required],
      video: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required]
    })
  }

  addAds(){
    console.log('hjjjjgjj',this.addForm.value)
    this.adsService.addAds(this.addForm.value).subscribe(success => {
      console.log('in')
    });
  }
}

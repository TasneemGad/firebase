import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IScreenAds } from './../Interfaces/screenAds';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenAdsService {

  constructor(private http: HttpClient) { }

  getAds(): Observable<IScreenAds[]> {
    return this.http.get<IScreenAds[]>(`${environment.url}/Ads.json`)
  }

  addAds(ads:IScreenAds): Observable<IScreenAds> {
    return this.http.post<IScreenAds>(`${environment.url}/Ads.json`, ads)
  }

  // deleteAds(adsId:IScreenAds): Observable<IScreenAds> {
  //   return this.http.delete<IScreenAds>(`${environment.url}/Ads.json`, adsId.id)
  // }

  // updateAds(user:IScreenAds): Observable<IScreenAds> {
  //   console.log("ser",user)
  //   return this.http.post<IScreenAds>(`${environment.url}/Ads.json`, user)
  // }
}

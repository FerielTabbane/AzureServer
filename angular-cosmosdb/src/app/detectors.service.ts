import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detector } from './classes/detector';
//const data = require("./detecteurs.json");


@Injectable({
  providedIn: 'root',
})
export class DetectorsService {
  picture:boolean=false;
  currentDetectorIndex = 0;
  selected = 0;
  go = false;
  value = 0;
  nb = 0;
  maxValue = 0;
  step = 0;
  api = '/api';
  detectors: any[]=[];
  selectedDetector: Detector;

  //detectors: Detector[]=data.detecteurs;

  constructor(private http: HttpClient) {
    
  }

  

  getHeroes() {
    return this.http.get<Array<Detector>>(`${this.api}/Detectors`)
  }

  deleteHero(detector: Detector) {
    return this.http.delete(`${this.api}/Detectors/${detector.id}`);
  }

  addHero(detector: Detector) {
    return this.http.post<Detector>(`${this.api}/Detectors/`, detector);
  }

  updateHero(detector: Detector) {
    return this.http.put<Detector>(`${this.api}/Detectors/${detector.id}`, detector);
  }

  
  nextQuestion(): void {
    
    if (this.selected + 1 < this.detectors.length) {
      this.selected++;
      this.go = false;
      this.incrementBar();
    }
  }
  getCurrentDetector(): Detector {
    return this.detectors[this.currentDetectorIndex];
  }

  previousQuestion(): void {
    if (this.selected > 0) {
      this.selected--;
      this.nb += 1;
      if (this.nb > 0) {
        this.go = true;
      }
    }
    this.decrementBar();
  }


  incrementBar(): void {
    if (this.value >= 100) {
      return;
    } else {
      this.value += this.step;
    }
  }

  decrementBar(): void {
    if (this.value <= 0) {
      return;
    } else {
      this.value -= this.step;
    }
  }

  /*

  getCurrentQuestion(): Detector {
    return this.detectors[this.currentDetectorIndex];
  }

  incrementCurrentIndex(): void {
    this.currentDetectorIndex++;
  }
  arrowForward(): void {
    if (this.nb > 0) {
      this.selected++;
      this.nb--;
      this.incrementBar();
      if (!(this.nb > 0)) {
        this.go = false;
      }
    }
  }
  */
}

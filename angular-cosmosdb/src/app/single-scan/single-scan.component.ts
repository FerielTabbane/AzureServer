import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnDestroy, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetectorsService } from 'src/app/detectors.service';
import { Detector } from '../classes/detector';

@Component({
  selector: 'app-single-scan',
  templateUrl: './single-scan.component.html',
  styleUrls: ['./single-scan.component.css'],
})
export class SingleScanComponent implements AfterViewInit {
  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement> ;
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  private baseCtx: CanvasRenderingContext2D ;
  new: boolean=false;
  stream:boolean=true;
  detector: Detector;
  constructor(@Inject(PLATFORM_ID) private _platform: Object, private router: Router, public detectorsService: DetectorsService) {

  }
  
    
  

  ngAfterViewInit(): void {
    this.baseCtx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.detector=this.detectorsService.getCurrentDetector();
    this.onStart();

  }

  
  onStart(): void {
    if (isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((ms: MediaStream) => {
          const _video = this.video.nativeElement;
          _video.srcObject = ms;
          _video.play();
        });
    }
    console.log(this.router.url);
  }

  onStop(): void {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject as MediaStream)
      .getVideoTracks()[0]
      .stop();
    this.video.nativeElement.srcObject = null;

  }

  onScreenshot(): void {
    const imageWidth = this.video.nativeElement.videoWidth;
    const imageHeight = this.video.nativeElement.videoHeight;
    this.canvas.nativeElement.width = imageWidth;
    this.canvas.nativeElement.height = imageHeight;
    this.baseCtx.drawImage(this.video.nativeElement, 0, 0, imageWidth, imageHeight);
    this.new=true;
    this.stream=false;
    this.onStop();
  }

  ngOnDestroy() {
    (this.video.nativeElement.srcObject as MediaStream)
      .getVideoTracks()[0]
      .stop();
  }
}

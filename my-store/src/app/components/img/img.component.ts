import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input()
  set changeImg(newImg: string) {
    this.img = newImg;
    // console.log('Change just img => ', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/meme.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // No async -- once time
    // console.log('constructor', 'imageValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before/simultaneos render
    // change inputs -- times
    // console.log('ngOnChanges', 'imageValue =>', this.img);
    // console.log('changes: ', changes);
  }

  ngOnInit(): void {
    // before render
    // Yes async - data base petitions -- once time
    // console.log('ngOnInit', 'imageValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    // console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    // console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }
  imgLoaded() {
    // console.log('Log Hijo');
    this.loaded.emit(this.img);
  }
}

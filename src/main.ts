import { keyframes } from '@angular/animations';
import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {  Subscription, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit, OnDestroy {
  name = 'Angular';

  sub! : Subscription;
  subArray!: Subscription;
  subFrom! : Subscription;
  subStrings! : Subscription;
  subEvent! : Subscription;
  subKey! : Subscription;

  ngOnInit() {

    // this.sub = of(2,4,6,8).subscribe(item => { console.log(`Value from of : ${item}`)}) ;
    // this.subArray = of([2,4,6,8]).subscribe(item =>console.log(`Value from of array : ${item}`))
    // this.subFrom = from([20,15,10,5]).subscribe({
    //   next: item => console.log('Value from From:', item),
    //   error: err => console.log('From error:', err),
    //   complete: () => console.log('No more apples, go home')
    // });
    // this.subStrings = of('APPLE1', 'APPLE2', 'APPLE3').subscribe({
    //   next : item => console.log('hhh', item),
    //   error: err => console.log('ssss', err),
    //   complete: ()=> console.log('No more apples, go home')

    // });

    this.subEvent = fromEvent(document, 'click').subscribe({
      next: ev => console.log('CLick event', ev.target),

    });

    const keys: string[]=[];
this.subKey = fromEvent(document, 'keydown').subscribe(
  ev => { 
    keys.push( (ev as KeyboardEvent).key);
    console.log('Key Array:', keys);
  
  });

  
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subStrings.unsubscribe();
    this.subKey.unsubscribe();

  }
}
bootstrapApplication(App);
 

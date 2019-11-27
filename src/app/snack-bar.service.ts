import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SnackBarService {
public val:BehaviorSubject= new BehaviorSubject(1);
  constructor() { 
    console.log("service instance created ");
  }
check():any
{
 
  return this.val;
}

setVal(value)
{
  console.log("inside set value");
  this.val.next(value);
  
}
}
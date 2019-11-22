import { Component, Input,OnInit } from '@angular/core';
import{Message} from './message';
@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class parentComponent implements OnInit {
  @Input() name: string;
  i=0;
 message:Message;
  ngOnInit()
  {
  }
  captureSendBack(data)
  {
    console.log(data);
  }
showSnack()
{
this.i++;
  this.message=new Message();
  this.message.content=this.i.toString();
  if(this.i%3){
  this.message.type="success";}
   if(this.i%5){
  this.message.type="error";}

}

}

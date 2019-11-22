import { Component,OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import{Message} from './message';
@Component({
  selector: 'snackBar',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ],
  animations:[
    
    trigger('item',[

      transition(':enter',[
        style({transform: 'translate3d(100%, 0, 0)'}),
        animate('.25s',style({transform: 'translate3d(0, 0, 0)'}))
      ]),
      transition(':leave',
      
      [
        style({transform: 'translate3d(0, 0, 0)'}),
        animate('.25s',style({transform: 'translate3d(100%, 0, 0)'}))
      ])
    ]    
      )    
    
    
  ]
  
})
export class childComponent implements OnChanges  {
  name = 'Angular';
  i=0;
  @Input("data")
   message:Message;
  @Output("sharmi")
   sreemathiSendBack=new EventEmitter();
   messageList:Message[]=[];
  ngOnInit()
  {
    console.log("init");
console.log(this.message);
  }
  showSnack()
  {     
    this.messageList.push(this.message);
    setTimeout(()=>{
      if(this.messageList.length>0){
    this.messageList.splice(0,1);
      
    }},this.message.time+500);
   
    {
      this.sreemathiSendBack.emit("completed from snackbar");
    }
  }
  ngOnChanges(simpleChange)
  {
if(simpleChange.message.currentValue&&simpleChange.message.currentValue.content!="")
{
  console.log(this.message);
  this.showSnack();
}
  }
}


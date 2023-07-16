import {
    AfterContentInit, AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input, OnChanges, OnDestroy,
    OnInit,
    Output, SimpleChanges, ViewChild,


} from '@angular/core';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnDestroy{
    ngOnDestroy(): void {
    }


}

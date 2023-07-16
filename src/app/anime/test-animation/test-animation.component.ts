import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { animate, AnimationEvent, keyframes, style, transition, trigger } from "@angular/animations";
import { on } from "@ngrx/store";
import { slideAnimation } from "../slide-animation";

@Component({
    selector: 'app-test-animation',
    templateUrl: './test-animation.component.html',
    styleUrls: ['./test-animation.component.css'],
    animations: [
        slideAnimation
    ]
})
export class TestAnimationComponent {
    data = [111111]

    onAdd() {
        this.data.push(11111)
    }

    onRemove() {
        this.data.pop()
    }

    start(event: AnimationEvent) {

    }

    done(event: AnimationEvent) {

    }

    @ViewChild("paragraph") paragraph: ElementRef<HTMLParagraphElement> | undefined
    @ViewChild("item") items: QueryList<HTMLLIElement> | undefined

    inputValue=''
    person={
        name:'alice',
        address:{
            city: 'somewhere'
        }
    }

}

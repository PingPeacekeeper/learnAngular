import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';


interface Options {
    bgColor?: string
}

@Directive({
    selector: '[appMyDirect]'
})
export class MyDirectDirective implements AfterViewInit {
    @Input("onHover") appHover: Options = {}

    @HostListener('mouseenter') onEnter() {
        this.element.style.background = "red"
    }
    @HostListener('mouseLeave') onLeave(){
        this.element.style.backgroundColor="green"
    }

    // 使用native html元素操作
    element: HTMLElement

    // 注入指令所在的元素的引用
    constructor(private elementRef: ElementRef) {
        this.element = this.elementRef.nativeElement
    }

    ngAfterViewInit(): void {
        this.element.style.backgroundColor = this.appHover.bgColor || "skyblue"
    }

}

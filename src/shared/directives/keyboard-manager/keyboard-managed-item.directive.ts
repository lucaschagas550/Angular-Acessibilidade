import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective {

    constructor(private elementRef: ElementRef<HTMLElement>) {

    }

    public focusElement(): void {
        this.elementRef.nativeElement.focus();
    }

    public isFocused(): boolean {
        return this.elementRef.nativeElement === document.activeElement;
    }
}
import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagerItemDirective } from "./keyboard-managed-item.directive";


@Directive({
    selector: '[appKm]'
})
export class KeyboardManagerDirective {
    
    @ContentChildren(KeyboardManagerItemDirective) public items:QueryList<KeyboardManagerItemDirective> = null;

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void{
        switch(event.key){
            case 'ArrowUp':
                console.log('up');
                console.log(this.items);
                break;
            case 'ArrowDown':
                console.log('down');
                break;
            case 'ArrowLeft':
                console.log('left');
                break;
            case 'ArrowRight':
                console.log('right');
                break;
            default:
                console.log('default');
                break;
        }
    }
}
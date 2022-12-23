import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagerItemDirective } from "./keyboard-managed-item.directive";


@Directive({
    selector: '[appKm]'
})
export class KeyboardManagerDirective {

    @ContentChildren(KeyboardManagerItemDirective) public items: QueryList<KeyboardManagerItemDirective> = null;

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
                this.moveFocus(ArrowDirection.RIGHT).focusElement();
                break;
            case 'ArrowDown':
                this.moveFocus(ArrowDirection.LEFT).focusElement();
                break;
            case 'ArrowLeft':
                this.moveFocus(ArrowDirection.LEFT).focusElement();
                break;
            case 'ArrowRight':
                this.moveFocus(ArrowDirection.RIGHT).focusElement();
                break;
            default:
                console.log('default');
                break;
        }
    }

    public moveFocus(direction: ArrowDirection): KeyboardManagerItemDirective {
        const items = this.items.toArray();
        const currentSelectedIndex = items.findIndex(item => item.isFocused());
        const targetElementFocus = items[currentSelectedIndex + direction];
        if (targetElementFocus) {
            return targetElementFocus;
        }

        return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
    }
}

enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
}
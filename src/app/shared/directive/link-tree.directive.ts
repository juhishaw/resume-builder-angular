import { AfterViewChecked, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLinkTree]'
})
export class LinkTreeDirective implements AfterViewChecked {

  // element Id to match height
  @Input() appLinkTree: string;

  // class name for array inside that match height
  @Input() matchClass: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {
      // call our matchHeight function here later
      this.matchHeight(this.el.nativeElement, this.appLinkTree);
  }

  @HostListener('window:resize')
  onResize() {
      // call our matchHeight function here later
      this.matchHeight(this.el.nativeElement, this.appLinkTree);
  }

  matchHeight(element: HTMLElement, elementIdTomatch: string) {
      // match height logic here

      if (!element) {
          return;
      }

      const elementTomatch = document.getElementById(elementIdTomatch);

      if (!elementTomatch && !this.matchClass) {
          return;
      }

      element.style.height = 'initial';
      if (!this.matchClass) {
        // Check if elementTomatch is null
        const elementTomatch = document.getElementById(elementIdTomatch);
        if (elementTomatch !== null) {
          // gather all height
          const itemHeight = elementTomatch.getBoundingClientRect().height;
          // apply height
          element.style.height = `${itemHeight}px`;
        }
      }else {
        try {
            if (elementTomatch) {
                const classElements = elementTomatch.getElementsByClassName(this.matchClass);

                const itemHeight = classElements[classElements.length - 1].getBoundingClientRect().bottom -
                    (classElements[classElements.length - 1].getBoundingClientRect().height / 2)
                    - classElements[0].getBoundingClientRect().top + 10;
                // apply height
                element.style.height = `${itemHeight}px`;

            } else {
                const classElements = document.getElementsByClassName(this.matchClass);

                const itemHeight = classElements[classElements.length - 1].getBoundingClientRect().bottom
                    - classElements[0].getBoundingClientRect().top;
                // apply height
                element.style.height = `${itemHeight}px`;
            }
        } catch (e) {
        }

    }
      

  }
}

import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWithoutDescription]',
})
export class WithoutDescriptionDirective implements OnInit {
  @Input() description = '';
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText("Repository description is missing");

    this.renderer.appendChild(div,text);
    this.renderer.appendChild(this.element.nativeElement, div);
  }
}

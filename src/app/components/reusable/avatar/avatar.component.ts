import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-avatar',
    imports: [CommonModule],

  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterViewInit, OnDestroy {
  @Input() profileImage!: string;
  @Input() enableInteractions: boolean = true;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  private frame!: HTMLElement;
  private animationFrame!: number;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private isHovering: boolean = false;
  private listeners: (() => void)[] = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.initializeAvatar();
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private initializeAvatar(): void {
    this.frame = this.el.nativeElement.querySelector('.avatar-frame');
    
    if (!this.frame || !this.enableInteractions) return;

    this.setupEventListeners();
    this.startAnimation();
  }

  private setupEventListeners(): void {
    const mouseMove = this.renderer.listen(
      this.frame,
      'mousemove',
      (e: MouseEvent) => this.handleMouseMove(e)
    );

    const mouseEnter = this.renderer.listen(
      this.frame,
      'mouseenter',
      () => this.isHovering = true
    );

    const mouseLeave = this.renderer.listen(
      this.frame,
      'mouseleave',
      () => {
        this.isHovering = false;
        this.resetTransform();
      }
    );

    this.listeners.push(mouseMove, mouseEnter, mouseLeave);
  }

  private handleMouseMove(e: MouseEvent): void {
    const rect = this.frame.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    this.mouseX = (e.clientX - centerX) / (rect.width / 2);
    this.mouseY = (e.clientY - centerY) / (rect.height / 2);
  }

  private startAnimation(): void {
    const animate = () => {
      if (this.isHovering) {
        this.updateTransform();
      }
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  private updateTransform(): void {
    // Subtle 3D tilt effect
    const maxTilt = 8; // Reduced from 15 for subtlety
    const rotateY = this.mouseX * maxTilt;
    const rotateX = this.mouseY * -maxTilt;
    
    this.renderer.setStyle(
      this.frame,
      'transform',
      `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    );
  }

  private resetTransform(): void {
    this.renderer.setStyle(
      this.frame,
      'transform',
      'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    );
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.frame) this.resetTransform();
  }

  // Simple pulse effect
  public triggerPulse(): void {
    if (!this.frame) return;
    
    this.renderer.addClass(this.frame, 'pulse-animation');
    setTimeout(() => {
      this.renderer.removeClass(this.frame, 'pulse-animation');
    }, 1000);
  }

  private cleanup(): void {
    this.listeners.forEach(removeListener => removeListener());
    this.listeners = [];
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
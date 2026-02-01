import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent implements AfterContentInit {
  @Input() labels: { label: string; icon?: string }[] = [];

  @ContentChildren('tabPanel') tabPanels!: QueryList<any>;

  activeIndex = 0;

  ngAfterContentInit() {
    if (this.tabPanels.length === 0) {
      console.warn('No tab panels projected into <app-tabs>');
    }
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
  }
}

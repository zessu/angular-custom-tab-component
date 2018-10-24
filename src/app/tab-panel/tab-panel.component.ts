import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
    console.log('template is', this.template);
  }

  selectTab(tab) {
    this.tabs.forEach(item => item.selected = false);
    tab.selected = true;
  }

  get getTabs() {
    return {
      tabs: this.tabs
    };
  }

  submit() { }
}

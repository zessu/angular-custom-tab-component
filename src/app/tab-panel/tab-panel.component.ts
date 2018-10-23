import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }
}

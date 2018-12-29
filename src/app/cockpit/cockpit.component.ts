import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() addNewServer = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() addNewServerBlue = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.addNewServer.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.addNewServerBlue.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}

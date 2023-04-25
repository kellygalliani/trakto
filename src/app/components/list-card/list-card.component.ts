import { Component, Input } from '@angular/core';
import { RetrieveProjectsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {
  @Input() showAll = false;
  projects: any[] = [];

  constructor(private retrieveProjectsService: RetrieveProjectsService) {}

  ngOnInit() {
    if (this.showAll) {
      this.retrieveProjectsService.getProjects(true).subscribe(projects => {
        this.projects = projects;
      });
    } else {
      this.retrieveProjectsService.getProjects().subscribe(projects => {
        console.log(projects)
        this.projects = projects.data;
      });
    }
    console.log(this.projects)
  }
}

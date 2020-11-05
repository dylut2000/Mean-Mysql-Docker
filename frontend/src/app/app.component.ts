import { Component, OnInit } from '@angular/core';
import { Job } from './Job.model';
import { JobService } from './job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'frontend';

  jobs: Job[] = [];

  constructor (public jobService: JobService) { }

  ngOnInit (): void {
    this.getJobs();
  }

  getJobs (): void {
    this.jobService.getJobs()
      .subscribe(result => {
        this.jobs = result;
        console.log("jobs " + JSON.stringify(result));
      });
  }
}

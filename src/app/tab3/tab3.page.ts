import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { Activity } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  activityDetail: Observable<Activity>;
  constructor(
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
  ) {
    const ACTIVITYID = activatedRoute.snapshot.params['activityId'];
    this.activityDetail = activityService.getActivity(ACTIVITYID);
  }
  ngOnInit() {}
}

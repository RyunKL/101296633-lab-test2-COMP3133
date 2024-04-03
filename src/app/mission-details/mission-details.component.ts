import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionListComponent } from '../mission-list/mission-list.component';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [MissionDetailsComponent],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.scss'
})
export class MissionDetailsComponent {

}
// export class MissionDetailsComponent implements OnInit{
//   launchId: number;
//   launchDetails: any;

//   constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

//   ngOnInit(): void {
//     this.launchId = +this.route.snapshot.paramMap.get('id');
//     this.fetchLaunchDetails();
//   }

//   fetchLaunchDetails() {
//     this.httpClient.get(`https://api.spacexdata.com/v3/launches/${this.launchId}`).subscribe((data: any) => {
//       this.launchDetails = data;
//     });
//   }



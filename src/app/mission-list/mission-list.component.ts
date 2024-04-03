import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes,  RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.scss'
})
export class MissionListComponent implements OnInit{
  launches: any[] = [];
  missionfilter: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    let url = 'https://api.spacexdata.com/v3/launches';
    if (this.missionfilter) {
      url += `?launch_year=${this.missionfilter}`;
    }
    this.httpClient.get<any[]>(url).subscribe(data => {
      console.log(data);
      this.launches = data;
    });
  }
}

// https://api.spacexdata.com/v3/launches
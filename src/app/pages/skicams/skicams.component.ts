import { Component, OnInit } from '@angular/core';
import { CamsApiService } from 'src/app/http/camsapi.service';
import { ResortApi } from '../../http/camsapi.structure';

@Component({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit {

  aResortDatas: { [key: number]: ResortApi };
  dTodayDate: Date = new Date();
  private aNameResort = [  'Castione della Presolana', 'Campo Tures', 'Cavalese', 'Sestriere'  ];
  iMaxCamsToShow = 2;
  sApiError: string;

  constructor(private oCamsApiService: CamsApiService) { }

  ngOnInit() {
    this.oCamsApiService.getAllResorts().subscribe(data => {
      this.aResortDatas = Object.values(data).filter(v => this.aNameResort.indexOf(v.name) !== -1);
    },
    error => {
      this.sApiError = error.message;
      console.log('Not good: ' + this.sApiError );
    }
    );

  }



}

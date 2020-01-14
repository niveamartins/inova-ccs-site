import { Component, OnInit } from '@angular/core';
import { LabsService } from 'src/app/labs.service';

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.css']
})
export class QuemsomosComponent implements OnInit {

  constructor(public labsService: LabsService) {

  }

  getLabs(): void {
    this.labsService.getLabs().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { LabsService } from 'src/app/labs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
labs: any[];
labSelected: any[];
public labID: number;


constructor(private labsService: LabsService) {

  }
// essa função está aqui para pegar todas as coordenadas do BD

getLabs(): void {
    this.labsService.getLabs().subscribe(
      (res) => {
        console.log(res);
        this.labs = res;
      }
    );

  }

getLab_byId(id): void {
  console.log(id);
  console.log('entrei aqui');
  const transf = id.toString();
  this.labsService.getLab_byId(transf).subscribe(
    (res) => {
      this.labSelected = res;
      console.log(this.labSelected);
    }
  );
}

onClick(json: any){
  this.labID = json.Id;
  this.getLab_byId(this.labID);

}
ngOnInit() {
    this.getLabs();
  }

}

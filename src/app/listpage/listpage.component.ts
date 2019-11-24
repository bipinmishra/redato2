import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css']
})
export class ListpageComponent implements OnInit {
  listData;
  isloaded =false;
  userFilter: any = { Title: '' };
  constructor(private rest :RestService, private router :Router) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
  const endpoint = '&i=tt0944947&Season=1'

    this.rest.getData(endpoint).subscribe(
      (data)=>{
        console.log(data);
        this.listData = data;
        this.isloaded = true;

      },
      (err) =>{
        console.log(err);
      }
    )
  }

  gotoDetailPage(index){
    this.router.navigate(['/detail/' + this.listData.Episodes[index].imdbID])
  }

}

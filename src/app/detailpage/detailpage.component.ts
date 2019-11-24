import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  episodeData;
  isloaded = false;
  _id;
  constructor(private rest :RestService,  route : ActivatedRoute) { 
    this._id = route.snapshot.params.id;
 
  }

  ngOnInit() {
    console.log(this._id);
    this.getEpisode();
  }


  getEpisode(){
    const endpoint = '&i='+this._id;
  
      this.rest.getData(endpoint).subscribe(
        (data)=>{
          console.log(data);
          this.episodeData = data;
          this.isloaded = true;
  
        },
        (err) =>{
          console.log(err);
        }
      )
    }

}

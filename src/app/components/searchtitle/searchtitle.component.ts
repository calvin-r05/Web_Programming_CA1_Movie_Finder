import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-searchtitle',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  movieData:IOMDBResponse | undefined;
  errorMessage:any;
constructor(private  _omdbService:OmdbApiService) { }

getMovieDetails(movieName:string): boolean {
  this._omdbService.getMovieData(movieName).subscribe(
    movieData => {
      this.movieData=movieData;
      //console.log("Director Name: " + this.movieData.Director);
    }
  )
  return false;
}
}

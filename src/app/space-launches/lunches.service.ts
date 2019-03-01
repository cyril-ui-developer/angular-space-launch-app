import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ILaunch } from './launch';

interface ICurrentWeatherData {
  flight_number: number;
  launch_year: string;
  rocket: {
    rocket_name: string,
  };
  details: string;
  links: {
    presskit: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class LunchesService {

  constructor(private httpClient: HttpClient) { }

  public getAllLunches(): Observable<ILaunch[]> {
    return this.httpClient
      .get<ICurrentWeatherData[]>(
        `${environment.baseUrl}launches?limit=5&order=desc`
      )
      .pipe(map(data => this.transformToILunch(data)))
      .pipe(
        catchError(this.handleError('getAllLunches', []))
      );
  }

  private transformToILunch(data: ICurrentWeatherData[]): ILaunch[] {
    return data.map((d) => {
      return {
        flightNumber: d.flight_number,
        launchYear: d.launch_year,
        rocketName: d.rocket.rocket_name,
        details: d.details,
        presskit: d.links.presskit

      }

    })
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // LUNCH: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // LUNCH: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

import { Injectable, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetListAPI } from '../interfaces/exercise-set';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ExerciseSetsService {
  private httpClient = inject(HttpClient);

  private url = 'http://localhost:3001/diary';//'diary';

  private authService = inject(AuthService);


  getInitialList(): Observable<ExerciseSetListAPI> {
    // const headers = new HttpHeaders().set('X-TELEMETRY', 'true');
    // return this.httpClient.get<ExerciseSetListAPI>(this.url, { headers });
    console.log(`Bearer ${this.authService.token}`)
    //const headers = new HttpHeaders({ Authorization: `Bearer ${this.authService.token}`}) //to be replaced by interceptor
    return this.httpClient.get<ExerciseSetListAPI>(this.url)//,{ headers })
  }

  refreshList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  addNewItem(item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }

  deleteItem(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.url}/${id}`);
  }

  updateItem(id: string, item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  getItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.get<ExerciseSet>(`${this.url}/${id}`);
  }
}

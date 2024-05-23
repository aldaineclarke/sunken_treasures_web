import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  private baseApi = environment.apiUrl;
}

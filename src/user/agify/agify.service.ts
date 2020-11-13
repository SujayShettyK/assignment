import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AgifyService {
    constructor(private http: HttpService){
    }
    async getAge(name){
        return await this.http.get('https://api.agify.io?name='+name)
            .pipe(
                map(response => response.data)
            );
    }

    async getNation(name){
        return await this.http.get('https://api.nationalize.io?name='+name)
            .pipe(
                map(response => response.data)
            );
    }
}

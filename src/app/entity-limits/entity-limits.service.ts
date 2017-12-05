import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LimitsService {
    limitsArr: any;

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private EntityLimitsUrl = 'http://localhost:9000/api/v1/entitylimits';

    constructor(private http: Http) { }

    getLimits(id: number) {
        this.limitsArr = [];
        return this.http.get(this.EntityLimitsUrl)
            .toPromise()
            .then(response => {
                response.json().forEach(limit => {
                    if (limit.Entity_Id === Number(id)) {
                        this.limitsArr.push(limit);
                    }
                });
                return this.limitsArr;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

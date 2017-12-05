import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EntityService {

    private EntitiesUrl = 'http://localhost:9000/api/v1/entityrelationships';
    parentEntitiesObjArr: any;
    childEntitiesObjArr: any;

    constructor(private http: Http) { }

    getParents() {
        this.parentEntitiesObjArr = [];
        return this.http.get(this.EntitiesUrl)
            .toPromise()
            .then(response => {
                response.json().forEach(parentEntity => {
                    const newParentObj = {};

                    newParentObj['Parent_Entity_Id'] = parentEntity.Parent_Entity_Id;
                    newParentObj['Parent_Entity_Name'] = parentEntity.Parent_Entity_Name;

                    if (!this.parentEntitiesObjArr.find(entity => {
                        return entity.Parent_Entity_Id === parentEntity.Parent_Entity_Id;
                    })) {
                        this.parentEntitiesObjArr.push(newParentObj);
                    }

                });
                return this.parentEntitiesObjArr;
            })
            .catch(this.handleError);
    }

    getChildren(id: number) {
        this.childEntitiesObjArr = [];
        return this.http.get(this.EntitiesUrl)
            .toPromise()
            .then(response => {
                response.json().forEach(childEntity => {
                    if (childEntity.Parent_Entity_Id === Number(id)) {
                        this.childEntitiesObjArr.push(childEntity);
                    }
                });
                return this.childEntitiesObjArr;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

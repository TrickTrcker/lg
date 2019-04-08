import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttributesResponse } from '../../models/attribute/attributes-response';
import { Attribute } from '../../models/attribute/attribute';
import { AttributeLink } from '../../models/attribute/attribute-link';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private connectionString = 'https://lifegraphapi.azurewebsites.net/';

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getAllAttributes(): Observable<AttributesResponse> {
    return this.httpClient.get<AttributesResponse>(this.connectionString + 'core/attributes');
  }

  createAttribute(attribute: Attribute): Observable<any> {
    return this.httpClient.post<any>(this.connectionString + 'core/attributes', attribute);
  }

  overrideAttributeOnSkill(skillId: string, attributeLink: Array<AttributeLink>): Observable<any> {
    return this.httpClient.put<any>(this.connectionString + 'core/attributes/link/' + skillId, attributeLink);
  }
}

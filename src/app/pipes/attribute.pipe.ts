import { Pipe, PipeTransform } from '@angular/core';
import { StartupService } from '../services/startup/startup.service';

@Pipe({
  name: 'attribute'
})
export class AttributePipe implements PipeTransform {

  constructor(private startupService: StartupService) {}

  transform(value: string): any {
    if (this.startupService.getAttributes().find(e => e.uid === value)) {
      return this.startupService.getAttributes().find(e => e.uid === value).displayName;
    } else {
      return "";
    }
  }

}

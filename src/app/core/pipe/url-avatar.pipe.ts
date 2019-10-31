import { Pipe, PipeTransform } from '@angular/core';
import { SystemConstants } from '../common/system.constants';

@Pipe({
  name: 'urlAvatar'
})
export class UrlAvatarPipe implements PipeTransform {

  transform(value: string): string {
    return SystemConstants.BASE_API + value;
  }

}

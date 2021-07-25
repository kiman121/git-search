import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateExtractor',
})
export class DateExtractorPipe implements PipeTransform {
  transform(value: any): unknown {
    var creationDate = value.substring(0, value.indexOf('T'));
    var creationTime = value.substring(
      value.indexOf('T') + 1,
      value.indexOf('Z')
    );

    return creationDate + ' At ' + creationTime;
  }
}

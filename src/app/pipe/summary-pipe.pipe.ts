import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summaryPipe'
})
export class SummaryPipePipe implements PipeTransform {
    transform(value: string, limit?: number): string {
        return value.substring(0, limit || 10)+'...';
    }
}

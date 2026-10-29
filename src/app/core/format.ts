import { Pipe, PipeTransform } from '@angular/core';

const dateFmt = new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tokyo' });

/** "2026年10月25日" */
@Pipe({ name: 'jaDate' })
export class JaDatePipe implements PipeTransform {
  transform(iso: string | null | undefined): string {
    return iso ? dateFmt.format(new Date(iso)) : '';
  }
}

/** ISO の日時を YYYY-MM-DD (日本時間) に */
export const isoDay = (iso: string) => new Date(new Date(iso).getTime() + 9 * 3600_000).toISOString().slice(0, 10);

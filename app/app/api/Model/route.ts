import {
  getDescriptor,
  parseDescriptor,
} from '@craftercms/content';
import { firstValueFrom, map } from 'rxjs';

export async function GET() {
  const path = "/site/website/index.xml";
  return await firstValueFrom(
    getDescriptor(path, { flatten: true }).pipe(
      map((descriptor) => parseDescriptor(descriptor, { parseFieldValueTypes: true }))
      // Can use this for debugging purposes.
      // tap(console.log)
    )
  );
}
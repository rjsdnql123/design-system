import { Button } from '@monorepo/cui';
import { Radio } from '@monorepo/cui';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Button>dd</Button>
      <Radio />
      <Link href={'/test'} > go test</Link>
    </main>
  );
}

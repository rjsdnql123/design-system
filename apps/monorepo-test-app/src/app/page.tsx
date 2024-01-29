import { Button } from '@monorepo/cui';
import { Radio } from '@monorepo/cui';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Button>dd</Button>
      <Radio />
      <Link href={'https://design-system-monorepo-test-app.vercel.app/test'} > go test</Link>
    </main>
  );
}

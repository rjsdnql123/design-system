import { createRandomId } from '@monorepo/common';
import { Button } from '@monorepo/cui';
import { Radio } from '@monorepo/cui';
import Link from 'next/link';
import { useId } from 'react';

export default function Home() {
  const asdf = createRandomId();
  console.log(asdf)
  return (
    <main>
      <Button>dd</Button>
      {asdf}
      <Radio />
      <Link href={`https://design-system-monorepo-test-app.vercel.app/test/${asdf}`} > go test</Link>
    </main>
  );
}

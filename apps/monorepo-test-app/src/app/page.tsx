import { createRandomId } from '@monorepo/common';
import { Button } from '@monorepo/cui';
import { Radio } from '@monorepo/cui';
import Link from 'next/link';

export default function Home() {
  const asdf = createRandomId();
  console.log(asdf)
  return (
    <main>
      <Button>dd</Button>
      {asdf}
      <Radio />
      <Link href={`http://localhost:3000/test/${asdf}`} > go test</Link>
    </main>
  );
}

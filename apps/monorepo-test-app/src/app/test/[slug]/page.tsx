import { createRandomId } from "@monorepo/common";
import Link from "next/link";


async function getProjects():Promise<string> {
  return new Promise((res, rej) => {
    const asdf = createRandomId();
    res('asdf123123213 - ' + asdf)
  })
}

export default async function  Test() {
  const a = await getProjects()
    return (
      <main>
        ㅁㄴㅇㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㄹㅁㄴㅇ
        <div>
          {a}
        </div>
        <div>
          <Link href={`http://localhost:3000/test/${a}`}></Link>
        </div>
      </main>
    );
  }
  
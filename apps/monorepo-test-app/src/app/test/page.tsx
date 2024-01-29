async function getProjects() {
  return new Promise((res, rej) => {
    res('123123')
  })
}

export default async function  Test() {
  const a = await getProjects()
    return (
      <main>
        qwkejqlwkejqwlke
        <div>
          {a}
        </div>
      </main>
    );
  }
  
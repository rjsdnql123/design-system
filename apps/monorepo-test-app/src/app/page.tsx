
import TestComponent from '../../component/TestComponent';

export default function Home() {
  // const testId = createRandomId();
  // console.log(testId)
  
  return (
    <main>
      <div>전 shadowDOM이 아니에요</div>
      <TestComponent/>
    </main>
  );
}

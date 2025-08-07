import {Button} from "../../components/ui/button"
import Counter from "../../components/Counter"
import  Link  from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-4 px-10 py-5">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>This is a simple static page using the App Router.</p>
     
      <h1>Below is the counter from Step 3 React Refresher</h1>
      <Counter initial={0}></Counter>

      <Link href="../api/hello">
      <Button variant="default">Go to hello page</Button>
      </Link>
      
      
    </div>
  );
}

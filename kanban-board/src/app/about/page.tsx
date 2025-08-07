import {Button} from "../../components/ui/button"

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>This is a simple static page using the App Router.</p>
      <Button variant="default">Click me</Button>
    </div>
  );
}

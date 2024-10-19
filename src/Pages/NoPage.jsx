import Nav from "../Components/Nav";

export default function NoPage() {
  return (
    <div>
      <Nav />
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="font-bold">Page Not Found</h1>
        <h2 className="text-3xl font-bold">Error: 404</h2>
      </div>
    </div>
  );
}

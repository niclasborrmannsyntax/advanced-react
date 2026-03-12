import Counter from "./components/Counter";

export default function TestingPage() {
  return (
    <div className="min-h-screen w-screen p-8 flex flex-col gap-8 items-center justify-start">
      <h1 className="text-2xl font-bold">Testing playground</h1>
      <section className="w-full max-w-md">
        <Counter />
      </section>
    </div>
  );
}

import CatViewer from "@/components/CatViewer";

export default function Fetch() {
  return (
    <main className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-24">
      <h1 className="flex justify-start text-2xl sm:text-xl font-bold mb-4">The Daily Cat</h1>
      <CatViewer />
    </main>
  );
}

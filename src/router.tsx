import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center text-5xl">
        CONFIMEX FUNCIONA
      </div>
    </>
  );
}
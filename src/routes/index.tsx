import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-900 text-white text-5xl min-h-screen">
        CONFIMEX FUNCIONA
      </div>
    </>
  );
}
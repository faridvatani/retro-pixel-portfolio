import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button type="button" className="nes-btn is-primary">
        Primary
      </button>
      <button type="button" className="nes-btn is-success">
        Success
      </button>
    </main>
  );
}

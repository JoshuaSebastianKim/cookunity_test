"use client";
import CardBattleLobby from "@/app/_components/CardBattleLobby";
import { CardProvider } from "@/app/_providers/CardProvider";

export default function CardPage({ params }: { params: { id: string } }) {
  return (
    <CardProvider id={params.id}>
      <main className="container mx-auto px-4 py-6">
        <CardBattleLobby />
      </main>
    </CardProvider>
  );
}

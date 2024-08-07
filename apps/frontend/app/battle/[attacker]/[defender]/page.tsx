import CardBattleSimulation from "@/app/_components/CardBattleSimulation";
import BattleProvider from "@/app/_providers/BattleProvider";

export default function BattleSimulationPage({
  params: { attacker, defender },
}: {
  params: { attacker: string; defender: string };
}) {
  return (
    <BattleProvider attackerId={attacker} defenderId={defender}>
      <main className="container mx-auto px-4 py-6">
        <CardBattleSimulation />
      </main>
    </BattleProvider>
  );
}

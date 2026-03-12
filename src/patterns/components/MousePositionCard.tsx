export default function MousePositionCard({ x, y }: { x: number; y: number }) {
  return (
    <div className="bg-white/20 rounded-2xl p-4 text-center font-bold max-w-sm">
      Mausposition: {x} / {y}
    </div>
  );
}

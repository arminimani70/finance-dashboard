interface SummaryCardProps {
  label: string;
  amount: number;
  variant: "income" | "expense" | "balance";
}

function SummaryCard({ label, amount, variant }: SummaryCardProps) {
  const colorMap = {
    income: "text-green-600",
    expense: "text-red-500",
    balance: "text-blue-600",
  };

  const formatted = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${colorMap[variant]}`}>{formatted}</p>
    </div>
  );
}

export default SummaryCard;

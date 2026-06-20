import type { Transaction } from "../types";

interface TransactionRowProps {
  transaction: Transaction;
}

function TransactionRow({ transaction }: TransactionRowProps) {
  const isIncome = transaction.type === "income";

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4 text-sm text-gray-500">{transaction.date}</td>
      <td className="py-3 px-4 text-sm text-gray-800">
        {transaction.description}
      </td>
      <td className="py-3 px-4 text-sm text-gray-500">
        {transaction.category}
      </td>
      <td
        className={`py-3 px-4 text-sm font-semibold text-right ${isIncome ? "text-green-600" : "text-red-500"}`}
      >
        {isIncome ? "+" : "-"}${transaction.amount.toLocaleString()}
      </td>
    </tr>
  );
}

export default TransactionRow;

import { useState, useMemo } from "react";
import FilterButtons from "../components/FilterButtons";
import TransactionRow from "../components/TransactionRow";
import { transactions } from "../data/transactions";

type FilterValue = "all" | "income" | "expense";

function Transactions() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter((t) => t.type === filter);
  }, [filter]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h2>

      <FilterButtons active={filter} onChange={setFilter} />

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-400">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((t) => (
                <TransactionRow key={t.id} transaction={t} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;

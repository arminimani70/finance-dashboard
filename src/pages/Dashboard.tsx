import SummaryCard from "../components/SummaryCard";
import MonthlyChart from "../components/MonthlyChart";
import { transactions } from "../data/transactions";
import {
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getMonthlySummary,
} from "../utils/calculations";

function Dashboard() {
  const income = getTotalIncome(transactions);
  const expenses = getTotalExpenses(transactions);
  const balance = getBalance(transactions);
  const monthlyData = getMonthlySummary(transactions);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <SummaryCard label="Total Income" amount={income} variant="income" />
        <SummaryCard
          label="Total Expenses"
          amount={expenses}
          variant="expense"
        />
        <SummaryCard label="Balance" amount={balance} variant="balance" />
      </div>

      <MonthlyChart data={monthlyData} />
    </div>
  );
}

export default Dashboard;

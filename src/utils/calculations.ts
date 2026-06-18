import type { Transaction, MonthlySummary } from "../types";

export function getTotalIncome(transactions: Transaction[]): number {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getTotalExpenses(transactions: Transaction[]): number {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getBalance(transactions: Transaction[]): number {
  return getTotalIncome(transactions) - getTotalExpenses(transactions);
}

export function getMonthlySummary(
  transactions: Transaction[],
): MonthlySummary[] {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const summaryMap = new Map<string, MonthlySummary>();

  transactions.forEach((t) => {
    const monthIndex = new Date(t.date).getMonth();
    const monthLabel = monthNames[monthIndex];

    if (!summaryMap.has(monthLabel)) {
      summaryMap.set(monthLabel, { month: monthLabel, income: 0, expenses: 0 });
    }

    const summary = summaryMap.get(monthLabel)!;
    if (t.type === "income") {
      summary.income += t.amount;
    } else {
      summary.expenses += t.amount;
    }
  });

  return Array.from(summaryMap.values());
}

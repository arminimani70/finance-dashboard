export type TransactionType = "income" | "expense";

export type Category =
  | "Salary"
  | "Freelance"
  | "Groceries"
  | "Rent"
  | "Utilities"
  | "Transport"
  | "Entertainment"
  | "Health"
  | "Other";

export interface Transaction {
  id: string;
  date: string; // ISO format: '2026-06-01'
  description: string;
  category: Category;
  amount: number; // always positive, sign comes from `type`
  type: TransactionType;
}

export interface MonthlySummary {
  month: string; // e.g. 'Jan', 'Feb'
  income: number;
  expenses: number;
}

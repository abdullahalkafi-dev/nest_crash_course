export const data: TData = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid2',
      source: 'Rent',
      amount: 1200,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
    {
      id: 'uuid3',
      source: 'Groceries',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
    {
      id: 'uuid4',
      source: 'Utilities',
      amount: 150,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },
    {
      id: 'uuid5',
      source: 'Transportation',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'expense',
    },

    // Income entries
    {
      id: 'uuid6',
      source: 'Freelancing',
      amount: 2500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid7',
      source: 'Consulting',
      amount: 1500,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid8',
      source: 'Investment',
      amount: 2000,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid9',
      source: 'Business',
      amount: 5000,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid10',
      source: 'Dividends',
      amount: 800,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
    {
      id: 'uuid11',
      source: 'Bonus',
      amount: 1200,
      created_at: new Date(),
      updated_at: new Date(),
      type: 'income',
    },
  ],
};

export const ReportType = {
  INCOME: 'income',
  EXPENSE: 'expense',
};

export type TData = {
  report: TReport[];
};

export type TReport = {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: 'expense' | 'income';
};

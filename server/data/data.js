export const kpis = {
  dailyTransactions: [
    {
      date: '2024-03-01',
      amount: 500, // Net income: revenue - expenses = 2000 - 1500 = 500
      isCredit: true, // Credit for income
    },
    {
      date: '2024-03-02',
      amount: 400, // Net income: revenue - expenses = 1800 - 1400 = 400
      isCredit: true, // Credit for income
    },
    // More days for March...
    {
      date: '2024-03-31',
      amount: 600, // Net income: revenue - expenses = 2200 - 1600 = 600
      isCredit: true, // Credit for income
    },
    {
      date: '2024-04-01',
      amount: 550, // Net income: revenue - expenses = 2100 - 1550 = 550
      isCredit: true, // Credit for income
    },
    {
      date: '2024-04-02',
      amount: 450, // Net income: revenue - expenses = 1900 - 1450 = 450
      isCredit: true, // Credit for income
    },
    // More days for April...
    {
      date: '2024-04-30',
      amount: 650, // Net income: revenue - expenses = 2300 - 1650 = 650
      isCredit: true, // Credit for income
    },
  ],
  monthlyTransactions: [
    {
      month: 'March',
      transactions: [
        {
          date: '2024-03-01',
          amount: 500, // Net income: revenue - expenses = 2000 - 1500 = 500
          isCredit: true, // Credit for income
        },
        // More days for March...
      ],
    },
    {
      month: 'April',
      transactions: [
        {
          date: '2024-04-01',
          amount: 550, // Net income: revenue - expenses = 2100 - 1550 = 550
          isCredit: true, // Credit for income
        },
        // More days for April...
      ],
    },
  ],
  yearlyTransactions: [
    {
      year: 2024,
      transactions: [
        {
          date: '2024-03-01',
          amount: 500, // Net income: revenue - expenses = 2000 - 1500 = 500
          isCredit: true, // Credit for income
        },
        {
          date: '2024-04-01',
          amount: 550, // Net income: revenue - expenses = 2100 - 1550 = 550
          isCredit: true, // Credit for income
        },
      ],
    },
  ],
}

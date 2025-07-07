export const totalPaymentsPipeline = [
  { $match: { isDeleted: false } },
  {
    $group: {
      _id: null,
      totalPayments: { $sum: '$amount' },
    },
  },
];

import { AntDesign, FontAwesome6, FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons"

export const BAL_SPEND = [
  {
    id: 0,
    name: 'Income',
    amount: "$ 256789",
    iconName: 'arrowdown',
    iconHome: AntDesign
  },
  {
    id: 1,
    name: 'Expense',
    amount: "$ 76856",
    iconName: 'arrowup',
    iconHome: AntDesign
  },
]

export const REC_TRAN = [
  {
    id: 0,
    name: 'Health',
    desc: 'checkup fee',
    amount: '$ 30',
    date: '2022-01-01',
    iconName: 'heart',
    iconHome: AntDesign,
    type: 'expense'
  },
  {
    id: 1,
    name: 'Salary',
    desc: 'Pay day',
    amount: '$ 100',
    date: '2022-02-15',
    iconName: 'sack-dollar',
    iconHome: FontAwesome6,
    type: 'income'
  },
  {
    id: 2,
    name: 'Groceries',
    desc: 'bought groceries',
    amount: '$ 50',
    date: '2022-02-10',
    iconName: 'shopping-cart',
    iconHome: FontAwesome,
    type: 'expense'
  },
  {
    id: 3,
    name: 'Salary',
    desc: 'salary payment',
    amount: '$ 3000',
    date: '2022-02-01',
    iconName: 'sack-dollar',
    iconHome: FontAwesome6,
    type: 'income'
  },
  {
    id: 4,
    name: 'Transportation',
    desc: 'car rental',
    amount: '$ 150',
    date: '2022-02-20',
    iconName: 'car',
    iconHome: FontAwesome,
    type: ''
  },
  {
    id: 5,
    name: 'Dining',
    desc: 'Just having some fun',
    amount: '$ 2500',
    date: '2022-02-01',
    iconName: 'local-dining',
    iconHome: MaterialIcons,
    type: 'expense'
  },
  {
    id: 6,
    name: 'Clothing',
    desc: 'Giving some cloth',
    amount: '$ 3000',
    date: '2022-02-01',
    iconName: 'shirt',
    iconHome: Ionicons,
    type: ''
  }
]
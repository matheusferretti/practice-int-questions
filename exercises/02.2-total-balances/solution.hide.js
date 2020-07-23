// 🇪🇸 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
const sortClientsTotalBalances = () => {
    const clientsWithTotalBalance = clients.map(client => {
      const totalBalance = accounts.reduce((balance, item) => {
        return client.id === item.clientId ? balance + item.balance : balance
      }, 0)
      return { ...client, balance: totalBalance }
    })
    .sort((a, b) => b.balance - a.balance)
    .map(client => client.name)
  
    return clientsWithTotalBalance
  }
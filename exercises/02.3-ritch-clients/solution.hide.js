// 🇪🇸 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en Bank of America

//Filtra cuentas por cliente suministrado
const accountsFilterByClient = (accountsList, client, bank) => {
    return accountsList.filter((account) => account.bankId === bank && account.clientId === client.id)
  }
  //Devuelve el balance total del cliente suministrado
const totalBalance = (accountsList) => {
    return accountsList.reduce((totalBalance, account) => {return totalBalance +  account.balance}, 0)
  }
  
const richClientsBalances = () => {
    const balances = clients.map((client) => {
      return accountsFilterByClient(accounts, client, 1).length > 0? totalBalance(accountsFilterByClient(accounts, client, 1)) : false
    })
    .filter((client) => client)
    .sort((a, b) => b - a)
  
    return balances
  }
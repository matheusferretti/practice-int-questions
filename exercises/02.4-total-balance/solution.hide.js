// 🇪🇸 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.

//Filtra cuentas por banco suministrado
const accountsFilterByBank = (accountsList, bank) => {
    return accountsList.filter((account) => account.bankId === bank.id)
}

//Devuelve el balance total del cliente suministrado
const totalBalance = (accountsList) => {
    return accountsList.reduce((totalBalance, account) => { return totalBalance + account.balance }, 0)
}
const banksRankingByTotalBalance = () => {
    const banksTotalBalances = banks.map((bank) => {
        return { ...bank, totalBalance: totalBalance(accountsFilterByBank(accounts, bank)) }
    })
        .sort((a, b) => a.totalBalance - b.totalBalance)
        .map((bank) => bank.id)

    return banksTotalBalances
}
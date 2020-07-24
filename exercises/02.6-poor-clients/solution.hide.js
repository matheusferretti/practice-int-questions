// 🇪🇸 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.

//Filtra cuentas por cliente suministrado
const accountsFilterByClient = (accountsList, client, bank) => {
    return accountsList.filter((account) => account.bankId === bank && account.clientId === client.id)
}

//Devuelve el balance total del cliente suministrado
const totalBalance = (accountsList) => {
    return accountsList.reduce((totalBalance, account) => { return totalBalance + account.balance }, 0)
}

const banksPoorClients = () => {
    const banksWithClient = banks.map((bank) => {
        const clientData = clients.map((client) => {
            if (accountsFilterByClient(accounts, client, bank.id).length > 0) {
                return ({
                    clientId: client.id,
                    balance: totalBalance(accountsFilterByClient(accounts, client, bank.id))
                })
            } else false
        }).filter((client) => client)
        return { ...bank, clients: clientData }
    })
    const banksPoorClients = banksWithClient.reduce((banksInfo, bank) => {
        const { name } = bank
        const poorClient = bank.clients.sort((a, b) => a.balance - b.balance)
        return { ...banksInfo, [name]: poorClient.shift().clientId }
    }, {})

    return banksPoorClients
}
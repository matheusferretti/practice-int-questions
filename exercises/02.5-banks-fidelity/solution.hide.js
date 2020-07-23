// 🇪🇸 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.

const banksFidelity = () => {
    let result = {}
    banks.forEach(bank => 
      result[bank.name] = accounts.filter(account => 
        (accounts.filter(item => item.clientId === account.clientId && item.bankId !== account.bankId)).length === 0 && account.bankId === bank.id).length
    )
    return result
  }
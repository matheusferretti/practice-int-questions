const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];

function listClientsIdsSortByTaxNumber() {
    // array with the ids of the clients sorted by taxNumber
    clients.sort(function(a , b) {
        if(a.taxNumber > b.taxNumber){
            return 1;
        }
        if(a.taxNumber < b.taxNumber){
            return -1;
        }

        return 0;
    });
    return clients.map((client) => client.id)
};

console.log(listClientsIdsSortByTaxNumber())
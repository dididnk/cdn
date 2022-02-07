let i = 0;
var contractsParPays = new Map();
var villeParContrat = new Map();


//On récupère la liste de tous les contrats
fetch("https://api.jcdecaux.com/vls/v3/contracts?&apiKey=7886a12c53604b2668a08582a04795afcc9375b0")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            var nom = data[i].name;
            var pays = data[i].country_code;
            var villes = data[i].cities;
            contractsParPays.set(nom, pays);
            villeParContrat.set(nom, villes);
            i++;
        });
        //On met en place la liste
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        document.getElementById('body').appendChild(table);

        //header
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Pays";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Contrat";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "villes";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        thead.appendChild(row_1);
        for (var [key, value] of contractsParPays) {
            let row = document.createElement('tr');
            let row_data_1 = document.createElement('td');
            row_data_1.innerHTML = value;
            let row_data_2 = document.createElement('td');
            row_data_2.innerHTML = key;
            let row_data_3 = document.createElement('td');
            row_data_3.innerHTML = villeParContrat.get(key);

            row.appendChild(row_data_1);
            row.appendChild(row_data_2);
            row.appendChild(row_data_3);
            tbody.appendChild(row);
        }
    })
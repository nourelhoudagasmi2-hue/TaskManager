const API_URL = "http://localhost/TaskManager/api.php";


async function chargerTaches() {
    const response = await fetch(`${API_URL}?action=lister`);
    return await response.json();
}


async function ajouterTacheBDD(titre) {
    const response = await fetch(`${API_URL}?action=ajouter`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ titre: titre })
    });

    return await response.json();
}


async function modifierTacheBDD(id, terminee) {
    const response = await fetch(`${API_URL}?action=terminer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            terminee: terminee
        })
    });

    return await response.json();
}

async function supprimerTacheBDD(id) {
    const response = await fetch(`${API_URL}?action=supprimer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id })
    });

    return await response.json();
}

async function modifierTexteBDD(id, titre) {
    const response = await fetch(`${API_URL}?action=modifier`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            titre: titre
        })
    });

    return await response.json();
}

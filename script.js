const tacheInput = document.getElementById("tacheInput");
const ajouterBtn = document.getElementById("ajouterBtn");
const listeTaches = document.getElementById("listeTaches");

const rechercheInput = document.getElementById("rechercheInput");

const toutesBtn = document.getElementById("toutesBtn");
const encoursBtn = document.getElementById("encoursBtn");
const termineesBtn = document.getElementById("termineesBtn");

const totalTaches = document.getElementById("totalTaches");
const tachesEnCours = document.getElementById("tachesEnCours");
const tachesTerminees = document.getElementById("tachesTerminees");


let taches = [];

let rechercheActuelle = "";

let filtreActuel = "toutes";



try {
    const sauvegarde = localStorage.getItem("taskManagerTasks");

    if (sauvegarde) {
        const donnees = JSON.parse(sauvegarde);

        if (Array.isArray(donnees)) {
            taches = donnees.filter(
                tache =>
                    tache &&
                    typeof tache.texte === "string" &&
                    typeof tache.terminee === "boolean"
            );
        }
    }
} catch (erreur) {
    console.error("Impossible de charger les tâches :", erreur);
    taches = [];
}


function sauvegarder() {

    localStorage.setItem(
        "taskManagerTasks",
        JSON.stringify(taches)
    );

}


ajouterBtn.addEventListener("click", () => {

    const texte = tacheInput.value.trim();

    if (texte === "") {

        alert("Veuillez entrer une tâche !");

        return;
    }


    const nouvelleTache = {

        texte: texte,

        terminee: false

    };


    taches.push(nouvelleTache);


    sauvegarder();


    afficherTaches();


    tacheInput.value = "";

});

tacheInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ajouterBtn.click();
    }
});


rechercheInput.addEventListener("input", () => {

    rechercheActuelle = rechercheInput.value;

    afficherTaches();

});


toutesBtn.addEventListener("click", () => {

    filtreActuel = "toutes";

    afficherTaches();

});


encoursBtn.addEventListener("click", () => {

    filtreActuel = "encours";

    afficherTaches();

});



termineesBtn.addEventListener("click", () => {

    filtreActuel = "terminees";

    afficherTaches();

});


function afficherTaches() {

    listeTaches.innerHTML = "";


    for (const tache of taches) {



        const correspondRecherche =
            tache.texte
                .toLowerCase()
                .includes(
                    rechercheActuelle.toLowerCase()
                );


        let correspondFiltre = true;


        if (filtreActuel === "encours") {

            correspondFiltre = !tache.terminee;

        }


        if (filtreActuel === "terminees") {

            correspondFiltre = tache.terminee;

        }



        if (!correspondRecherche || !correspondFiltre) {

            continue;

        }
    

        const nouvelleTache =
            document.createElement("li");



        const texteTache =
            document.createElement("span");


        texteTache.textContent =
            tache.texte;


        nouvelleTache.appendChild(
            texteTache
        );

        if (tache.terminee) {

            nouvelleTache.classList.add(
                "terminee"
            );

        }


        nouvelleTache.addEventListener(
            "click",
            () => {

                tache.terminee =
                    !tache.terminee;


                sauvegarder();


                afficherTaches();

            }
        );


        const modifierBtn =
            document.createElement("button");


        modifierBtn.textContent =
            "Modifier";


        modifierBtn.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                const nouveauTexte =
                    prompt(
                        "Modifier la tâche :",
                        tache.texte
                    );


                if (nouveauTexte === null) {

                    return;

                }


                const texte =
                    nouveauTexte.trim();


                if (texte === "") {

                    alert(
                        "La tâche ne peut pas être vide !"
                    );

                    return;

                }


                tache.texte = texte;


                sauvegarder();


                afficherTaches();

            }
        );


        const supprimerBtn =
            document.createElement("button");


        supprimerBtn.textContent =
            "Supprimer";


        supprimerBtn.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                const index =
                    taches.indexOf(tache);


                taches.splice(index, 1);


                sauvegarder();


                afficherTaches();

            }
        );


        nouvelleTache.appendChild(
            modifierBtn
        );


        nouvelleTache.appendChild(
            supprimerBtn
        );

        listeTaches.appendChild(
            nouvelleTache
        );

    }


    mettreAJourStatistiques();

}


function mettreAJourStatistiques() {

    const total = taches.length;


    let terminees = 0;


    for (const tache of taches) {

        if (tache.terminee) {

            terminees++;

        }

    }


    const enCours =
        total - terminees;


    totalTaches.textContent =
        total;


    tachesTerminees.textContent =
        terminees;


    tachesEnCours.textContent =
        enCours;

}

afficherTaches();
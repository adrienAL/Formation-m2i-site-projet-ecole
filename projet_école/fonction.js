


let tblEleves = [
    {
        "idEleve": 1, "nom": "Mark", "prenom": "Otto", "notes": [
            { "id_Note": 1, "valeur": 8, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 2, "nom": "Jacob", "prenom": "Thornton", "notes": [
            { "id_Note": 1, "valeur": 1, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 3, "nom": "Larry", "prenom": "the Bird", "notes": [
            { "id_Note": 1, "valeur": 9, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 4, "nom": "Durant", "prenom": "Corentin", "notes": [
            { "id_Note": 1, "valeur": 9, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 5, "nom": "Lassus", "prenom": "Quentin", "notes": [
            { "id_Note": 1, "valeur": 9, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 6, "nom": "Beyer", "prenom": "Luck", "notes": [
            { "id_Note": 1, "valeur": 9, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Math", "date_exam": "18/02/2019" }
        ]
    }
]
let nbEleves = tblEleves.length;
 //////////////////////////////////////////////////////////////////////////////////////
//Ajoute un nouvel élève au tableau des élèves et l'enregistre dans le tableau élève//
/////////////////////////////////////////////////////////////////////////////////////
function AjoutNouvelEleve()
{
    nom = $("#txtNom").val();
    prenom = $("#txtPrenom").val();
    if (nom == null || nom == "" || prenom == null || prenom == "") {
      alert("Entrer le nom et le prénom de l'éleve")
      return;
    }
    nbEleves++;
    id = nbEleves;
    let ligne = $("<tr></tr>")
    ligne.append($("<th></th>").append($("<button></button>").attr("class", "btn btn-link select").attr("data-idEleve", id).text("Selectionner")))
    ligne.append($("<td></td>").text(nom))
    ligne.append($("<td></td>").text(prenom))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link update").attr("data-idEleve", id).attr("data-toggle", "modal").attr("data-target", "#ModifierModalCenter").text("Modifier")))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link delet").attr("data-idEleve", id).text("Supprimer")))

    //on ajoute la nouvelle ligne et on remet les champs à zero
    $("#tblEleves").append(ligne);
    $("#txtNom").val("");
    $("#txtPrenom").val("");
    $("#collapseNouveau").collapse('hide');

    let newElleve = {}
    newElleve.idEleve = id;
    newElleve.nom = nom;
    newElleve.prenom = prenom;
    newElleve.notes = [];

    tblEleves.push(newElleve);
}

 //////////////////////////////////////////////////////////////////////////////////////////////
//Ajoute une nouvel note à la liste de note d'un élève et l'enregistre dans le tableau élève//
/////////////////////////////////////////////////////////////////////////////////////////////
function AjoutNouvelleNoteAEleve()
{
    id = $("#IDNoteEleveModif").val()
    note = $("#NoteEleveModif").val()
    coef = $("#CoefEleveModif").val()
    matiere = $("#MatiereEleveModif").val()
    date = $("#DateEleveModif").val()

    let ligne = $("<tr></tr>")
    ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(id)))
    ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(note)))
    ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(coef)))
    ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(matiere)))
    ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(date)))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link supprNote").attr("data-idEleveSuppr", id).text("supprimer")))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link modifNote").attr("data-idEleveModif", id).text("modifier")))
    $("#ModifNoteEleve").append(ligne);

    let newNote = {}
    newNote.id_Note = id;
    newNote.valeur = note;
    newNote.coef = coef;
    newNote.matiere = matiere;
    newNote.date_exam = date;
    tblEleves[idEleveEnCours - 1].notes.push(newNote)



}

 ///////////////////////////////////////////////////////////////////////////////////////
//Permet de recupérer les note de l'élève à partire d'un tableau d'éleve et de son id//
//////////////////////////////////////////////////////////////////////////////////////
function RecupereNotesDeLeleve(idEleve) 
{
    eleves = tblEleves;
    for (i = 0; i < eleves.length; i++) {
        if (eleves[i].idEleve == idEleve)
            tblNotes = eleves[i].notes;
    }
    return JSON.stringify(tblNotes);
}

 //////////////////////////////////////////////////////////////////////////////
//Génère le tableau de note qui sera affiché quand l'on clic sur selectionné//
/////////////////////////////////////////////////////////////////////////////
function GenereTableauDeNotes(listeDesNotes) 
{
    $("#infoEleve").empty(); //suprime tous les element enfant 

    let notes = JSON.parse(listeDesNotes);

    for (i = 0; i < notes.length; i++) {
        let ligne = $("<tr></tr>");
        ligne.append($("<td></td>").text(notes[i].valeur));
        ligne.append($("<td></td>").text(notes[i].coef));
        ligne.append($("<td></td>").text(notes[i].matiere));
        ligne.append($("<td></td>").text(notes[i].date_exam));

        $("#infoEleve").append(ligne);
    }

    $("#tblDeEleve").collapse("show");
}

function ModifierLeleve(listeDesEleves, id) 
{
    $("#ModifNoteEleve").empty();
    let eleves = listeDesEleves;

    note = null

    for (i = 0; i < eleves.length; i++) {
        if (eleves[i].idEleve == id) {
            note = eleves[i].notes;
            nom = eleves[i].nom;
            prenom = eleves[i].prenom;
        }
    }
    $("#nomEleveModif").val(nom)
    $("#prenomEleveModif").val(prenom)

    if (note == null)
        return

    for (i = 0; i < note.length; i++) {
        let ligne = $("<tr></tr>");
        ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(note[i].id_Note)));
        ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(note[i].valeur)));
        ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(note[i].coef)));
        ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(note[i].matiere)));
        ligne.append($("<td></td>").append($("<input></input>").attr("class", "col-md form-control").attr("readonly", true).val(note[i].date_exam)));
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link supprNote").attr("data-idEleveSuppr", note[i].id_Note).text("Supprimer")))
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link modifNote").attr("data-idEleveModif", note[i].id_Note).text("Modifier")))
        $("#ModifNoteEleve").append(ligne);
    }
}


function RemplirTableauEleve(tableauDeDonnees, composantGraphiqueParent) 
{
    composantGraphiqueParent.empty();

    for (eleve of tableauDeDonnees) {
        let ligne = $("<tr></tr>");
        ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link select").attr("data-idEleve", eleve.idEleve).html("Selectionner")));

        ligne.append($("<td></td>").html(eleve.nom));
        ligne.append($("<td></td>").html(eleve.prenom));

        ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link update").attr("data-idEleve", eleve.idEleve).attr("data-toggle", "modal").attr("data-target", "#ModifierModalCenter").html("Modifier")));

        ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link delet").attr("data-idEleve", eleve.idEleve).html("Supprimer")));

        composantGraphiqueParent.append(ligne);
    }

}



let tblEleves = [
    {
        "idEleve": 1, "nom": "PARKER", "prenom": "Peter", "notes": [
            { "id_Note": 1, "valeur": 16, "coef": 2, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Histoire", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 12, "coef": 4, "matiere": "Français", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 2, "nom": "BANNER", "prenom": "Bruce", "notes": [
            { "id_Note": 1, "valeur": 10, "coef": 2, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 9, "coef": 4, "matiere": "Histoire", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 7, "coef": 4, "matiere": "Français", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 3, "nom": "STARK", "prenom": "Tony", "notes": [
            { "id_Note": 1, "valeur": 9, "coef": 2, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Histoire", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Français", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 4, "nom": "ROGERS", "prenom": "Steve", "notes": [
            { "id_Note": 1, "valeur": 19, "coef": 2, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 18, "coef": 4, "matiere": "Histoire", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 18, "coef": 4, "matiere": "Français", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 5, "nom": "ROMANOVA", "prenom": "Natasha", "notes": [
            { "id_Note": 1, "valeur": 9, "coef": 2, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 8, "coef": 4, "matiere": "Histoire", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 8, "coef": 4, "matiere": "Français", "date_exam": "18/02/2019" }
        ]
    },
    {
        "idEleve": 6, "nom": "DANVERS", "prenom": "Carol", "notes": [
            { "id_Note": 1, "valeur": 12, "coef": 2, "matiere": "Math", "date_exam": "18/02/2019" },
            { "id_Note": 2, "valeur": 14, "coef": 4, "matiere": "Histoire", "date_exam": "18/02/2019" },
            { "id_Note": 3, "valeur": 11, "coef": 4, "matiere": "Français", "date_exam": "18/02/2019" }
        ]
    }
]
let nbEleves = tblEleves.length;
 /////////////////////////////////////////////////////////////////////////////////////////
//Ajoute un nouvel élève au tableau des élèves et l'enregistre dans le tableau tblEleve//
////////////////////////////////////////////////////////////////////////////////////////
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
    ligne.append($("<th></th>").append($("<button></button>").attr("class", "btn btn-link text-danger select").attr("data-idEleve", id).text("Selectionner")))
    ligne.append($("<td></td>").text(nom))
    ligne.append($("<td></td>").text(prenom))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link text-danger update").attr("data-idEleve", id).attr("data-toggle", "modal").attr("data-target", "#ModifierModalCenter").text("Modifier")))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link text-danger delet").attr("data-idEleve", id).text("Supprimer")))

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

 ////////////////////////////////////////////////////////////////////////////////////////////////////
//Ajoute une nouvelle note à la liste de notes d'un élève et l'enregistre dans le tableau tblEleve//
///////////////////////////////////////////////////////////////////////////////////////////////////
function AjoutNouvelleNoteAEleve()
{
    id = $("#IDNoteEleveModif").val()
    //verifie que l'id note n'éxiste pas déjà
    for(i=0;i<tblEleves[idEleveEnCours-1].notes.length;i++)
    {
        if(tblEleves[idEleveEnCours-1].notes[i].id_Note == id)
        {
            alert("identifiant note déjà éxisatant")
            return
        }
    }
    if(id == "" || id == null)
    {
        alert("entrer un identifiant de note")
        return
    }
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
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link text-danger supprNote").attr("data-idEleveSuppr", id).text("supprimer")))
    ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link text-danger modifNote").attr("data-idEleveModif", id).text("modifier")))
    $("#ModifNoteEleve").append(ligne);

    let newNote = {}
    newNote.id_Note = id;
    newNote.valeur = note;
    newNote.coef = coef;
    newNote.matiere = matiere;
    newNote.date_exam = date;
    tblEleves[idEleveEnCours - 1].notes.push(newNote)



}

 ////////////////////////////////////////////////////////////////////////////////////////
//Permet de recupérer les notes de l'élève à partir d'un tableau d'élèves et de son id//
///////////////////////////////////////////////////////////////////////////////////////
function RecupereNotesDeLeleve(idEleve) 
{
    eleves = tblEleves;
    for (i = 0; i < eleves.length; i++) {
        if (eleves[i].idEleve == idEleve)
            tblNotes = eleves[i].notes;
    }
    return JSON.stringify(tblNotes);
}

 ////////////////////////////////////////////////////////////////////////////////
//Génère le tableau de notes qui sera affiché quand l'on clic sur selectionner//
///////////////////////////////////////////////////////////////////////////////
function GenereTableauDeNotes(listeDesNotes) 
{
    $("#infoEleve").empty(); //supprime tous les élements enfant 

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
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link text-danger supprNote").attr("data-idEleveSuppr", note[i].id_Note).text("Supprimer")))
        ligne.append($("<td></td>").append($("<button></button>").attr("class", "btn btn-link text-danger modifNote").attr("data-idEleveModif", note[i].id_Note).text("Modifier")))
        $("#ModifNoteEleve").append(ligne);
    }
}


function RemplirTableauEleve(tableauDeDonnees, composantGraphiqueParent) 
{
    composantGraphiqueParent.empty();

    for (eleve of tableauDeDonnees) {
        let ligne = $("<tr></tr>");
        ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link text-danger select").attr("data-idEleve", eleve.idEleve).html("Selectionner")));

        ligne.append($("<td></td>").html(eleve.nom));
        ligne.append($("<td></td>").html(eleve.prenom));

        ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link text-danger update").attr("data-idEleve", eleve.idEleve).attr("data-toggle", "modal").attr("data-target", "#ModifierModalCenter").html("Modifier")));

        ligne.append($("<td></td>").append($("<button></button>")
            .addClass("btn btn-link text-danger delet").attr("data-idEleve", eleve.idEleve).html("Supprimer")));

        composantGraphiqueParent.append(ligne);
    }

}
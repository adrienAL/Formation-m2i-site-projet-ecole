let idEleveEnCours
$(document).ready(function () {
  
   //////////////////////////////////////////////////////////////////////////
  //Remplie le tableau des élèves à partir du tableau defini dans fonction//
 //////////////////////////////////////////////////////////////////////////
  RemplirTableauEleve(tblEleves, $("#bodytable"));

   //////////////////////////////////////////////////////////////////////////
  //Ajoute l'élève entré dans le formulair à une nouvelle ligne du tableau//
 //////////////////////////////////////////////////////////////////////////
  $("#ajoutEleve").click(function () {
    AjoutNouvelEleve()
  });

   /////////////////////////////////////////////////////////////////////////////////////////
  //Affiche les informations relative aux notee de l'élève dans un tableau en bas de page//
 /////////////////////////////////////////////////////////////////////////////////////////
  $("#tblEleves tbody").on("click", ".select", function () {
    // $("#eleve").text($(this).parent().siblings().html().toUpperCase() + "  " + $(this).parent().siblings().next().html())
    $("#eleve").text(tblEleves[$(this).attr("data-idEleve") - 1].nom + "  " + tblEleves[$(this).attr("data-idEleve") - 1].prenom)
    GenereTableauDeNotes(RecupereNotesDeLeleve($(this).attr("data-idEleve")));
  });

   ////////////////////////////////////////
  //bouton modifier de la page principal//
  ///////////////////////////////////////
  $("#tblEleves tbody").on("click", ".update", function () {
    ModifierLeleve(tblEleves, $(this).attr("data-idEleve"))
    idEleveEnCours = $(this).attr("data-idEleve");
  });

   /////////////////////////////////////////
  //bouton supprimer de la page principal//
  ////////////////////////////////////////
  $("#tblEleves tbody").on("click", ".delet", function () {
    let monIndex = tblEleves.findIndex(elem => elem.idEleve == $(this).attr("data-idEleve"))
    tblEleves.splice(monIndex, 1);
    RemplirTableauEleve(tblEleves, $("#bodytable"));
  });

   //////////////////////
  //Supprimer du modal//
 //////////////////////
  $("#ModifNoteEleve").on("click", ".supprNote", function () {
    let monIndex = tblEleves[idEleveEnCours - 1].notes.findIndex(elem => elem.id_Note == $(this).attr("data-idEleveSuppr"))
    $(this).parent().parent().remove();
    tblEleves[idEleveEnCours - 1].notes.splice(monIndex, 1)
  });

  $("#ModifNoteEleve").on("click", ".modifNote", function () {

    $(this).parent().prev().prev().children().attr("readonly",false)
    $(this).parent().prev().prev().prev().children().attr("readonly",false)
    $(this).parent().prev().prev().prev().prev().children().attr("readonly",false)
    $(this).parent().prev().prev().prev().prev().prev().children().attr("readonly",false)
    
    $(this).html("Enregistrer").removeAttr("class").attr("class", "btn btn-link enregistrerNote")

  });

  $("#ModifNoteEleve").on("click", ".enregistrerNote", function () 
  {
    idNote = $(this).parent().prev().prev().prev().prev().prev().prev().children().val()
    let monIndex = tblEleves[idEleveEnCours - 1].notes.findIndex(elem => elem.id_Note == idNote)

    tblEleves[idEleveEnCours-1].notes[monIndex].date_exam = $(this).parent().prev().prev().children().val()
    tblEleves[idEleveEnCours-1].notes[monIndex].matiere =$(this).parent().prev().prev().prev().children().val()
    tblEleves[idEleveEnCours-1].notes[monIndex].coef =$(this).parent().prev().prev().prev().prev().children().val()
    tblEleves[idEleveEnCours-1].notes[monIndex].note =$(this).parent().prev().prev().prev().prev().prev().children().val()

    $(this).parent().siblings().children().attr("readonly",true)    
    $(this).html("Modifier").removeAttr("class").attr("class", "btn btn-link modifNote")

  });


   ////////////////////////////////
  //bouton Ajouter note du modal//
 ////////////////////////////////
  $("#appliquerLesModificationNote").on("click", function () {
    AjoutNouvelleNoteAEleve()
  });


  $("#appliquerLesModificationEleve").on("click", function () {
    tblEleves[idEleveEnCours-1].nom = $("#nomEleveModif").val()
    tblEleves[idEleveEnCours-1].prenom = $("#prenomEleveModif").val()
    RemplirTableauEleve(tblEleves, $("#bodytable"));

  });


});

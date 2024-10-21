console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

//Diese Funktion versteckt das Fehler-Element (tosError), indem das hidden-Attribut hinzugefügt wird. Das bedeutet, wenn diese Funktion aufgerufen wird, wird die Fehlermeldung ausgeblendet.
function hideTosError() {
  tosError.setAttribute("hidden", "");
}

//Diese Funktion zeigt das Fehler-Element (tosError) an, indem das hidden-Attribut entfernt wird. Wenn der Benutzer die Checkbox nicht aktiviert hat, wird diese Funktion aufgerufen, um den Fehler anzuzeigen.
function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  // prüft, ob die Checkbox nicht markiert- Wenn ja Codeblock: Fehler wird gezeigt und Funktion wird über return sofort beendet. Rest inklusive alert wird nicht ausgeführt.
  if (!tosCheckbox.checked){
    showTosError();
    return;
   } 
// wenn Checkbox markiert, wird die Fehlermeldung ausgeblendet und alert wird ausgeführt
   hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

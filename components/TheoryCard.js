export default function TheoryCard({ theory }) {
  return 
    <div class="theory-card" data-theory="${theory.id}">
      <h3>${theory.name[appState.currentLanguage]}</h3>
      <p>${theory.description[appState.currentLanguage].substring(0, 100)}...</p>
      <button class="view-details">${translate('view_details')}</button>
    </div>
  ;
}

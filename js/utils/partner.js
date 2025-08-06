function getPartnerInfo(personalityType, lang) {
  const data = partnerInfo[lang];
  return data[personalityType] || data['S'];
}

function getSimilarPersonalities(primary, lang) {
  const map = { D: "I", I: "D", S: "C", C: "S" };
  return [personalityTypes[lang][map[primary]]];
}
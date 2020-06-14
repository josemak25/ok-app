export default function getCompanyLogo(companyName: string) {
  const [firstWord, secondWord] = companyName.split(' ');

  if (secondWord) return `${firstWord[0] + secondWord[0]}`;

  return firstWord[0];
}

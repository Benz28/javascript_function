const github_fun = () => { console.log('test'); }

const GenerateInStatement = (data) => {
  let inStatement = '';
  
  data.forEach((item) => {
      inStatement += `, '${item}' `;
  })
  
  inStatement = `( ${inStatement.replace(",", "")} )`;
  return inStatement;
}
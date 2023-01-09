const github_fun = () => { console.log('test'); }

const generateInStatement = (data) => {
  let inStatement = '';
  
  data.forEach((item) => {
      inStatement += `, '${item}' `;
  })
  
  inStatement = `( ${inStatement.replace(",", "")} )`;
  return inStatement;
}
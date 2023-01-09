const github_fun = () => { console.log('test'); }

const GenerateInStatement = async (data) => {
  let inStatement = '';
  
  data.forEach((item) => {
      inStatement += `, '${item}' `;
  })
  
  inStatement = `( ${inStatement.replace(",", "")} )`;
  return await inStatement;
}
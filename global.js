const github_fun = () => { console.log('test'); }

async function GenerateInStatement(data) {
  let inStatement = '';
  
  data.forEach((item) => {
      inStatement += `, '${item}' `;
  })
  
  inStatement = `( ${inStatement.replace(",", "")} )`;
  return await inStatement;
}
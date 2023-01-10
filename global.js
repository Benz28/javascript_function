const github_fun = () => { console.log('test'); }

const generateInStatement = async (data) => {
  let inStatement = '';
  
  if (data.length === 0) {
    return await `('')`;
  }
  
  data.forEach((item) => {
      inStatement += `, '${item}' `;
  })
  
  inStatement = `( ${inStatement.replace(",", "")} )`;
  return await inStatement;
}
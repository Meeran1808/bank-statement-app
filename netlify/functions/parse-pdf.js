const pdf = require('pdf-parse')

exports.handler = async (event) => {
  const body = Buffer.from(event.body, 'base64')
  
  try {
    const data = await pdf(body)

    // simplified classification logic (improve as needed)
    const transactions = data.text.split('\n').map(line => {
      if (line.match(/\$\d+/)) {
        const parts = line.split(' ')
        return { 
          date: parts[0], 
          description: parts.slice(1, -1).join(' '), 
          amount: parts[parts.length - 1],
          category: classify(parts.slice(1, -1).join(' '))
        }
      }
    }).filter(Boolean)

    return {
      statusCode: 200,
      body: JSON.stringify({ transactions }),
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}

function classify(description) {
  const desc = description.toLowerCase()
  if (desc.includes('restaurant') || desc.includes('coffee')) return 'Food'
  if (desc.includes('uber') || desc.includes('lyft')) return 'Transport'
  if (desc.includes('rent') || desc.includes('housing')) return 'Housing'
  return 'Others'
}

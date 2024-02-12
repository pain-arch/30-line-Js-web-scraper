const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.othoba.com/'

axios(url)
  .then(response =>{
    const html= response.data
    const $ = cheerio.load(html)
    const products = []

    $('.product-name', html).each(function() {
       const title = $(this).text()
       const url = $(this).find('a').attr('href')
       const price = $(this).find('ins')
       products.push({
        title,
        url
       })
    })

    console.log(products);
    
  })

app.listen(PORT, () =>console.log(`server running on PORT ${PORT}`))
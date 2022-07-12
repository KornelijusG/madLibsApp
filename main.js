const c2promise = firstName => {
   return new Promise ((resolve, reject) => {
     setTimeout(() => {
      if (!firstName) reject(new Error('no firstname passed in!'))
  
        const fullName = `${firstName} Smith` 
        resolve(fullName)
   }, 1000)
  });
}
  c2promise('Ben').then(console.log)
  c2promise().catch(console.log)

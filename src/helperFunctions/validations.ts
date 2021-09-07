const validateEmail = (email: string) => {
  let validated: boolean = true 
  if (email.split("@").length !== 2) {
    // There must be only 1 @ symbol
    validated = false
  }
  if (!email.includes('.')) {
    validated = false
  }
  return validated
} 

const validatePassword = (password: string) =>{
  let validate: boolean = true
  if (password.length < 8) {
    validate = false
  }
  return validate
}

export {
  validateEmail, validatePassword
}
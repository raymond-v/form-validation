const email = document.getElementById('email')
const emailError = document.getElementById('emailError')

const country = document.getElementById('country')
const countryError = document.getElementById('countryError')

const postal = document.getElementById('postal')
const postalError = document.getElementById('postalError')

const pass = document.getElementById('pass')
const passError = document.getElementById('passError')

const passcon = document.getElementById('passcon')
const passconError = document.getElementById('passconError')

// Email validation
function validateEmail() {
    if (!email.validity.valid) {
        emailError.textContent = "Email is invalid"
    } else {
        emailError.textContent = ""
    }
}
email.addEventListener('input', validateEmail)
email.addEventListener('blur', validateEmail)

// Country validation
function validateCountry() {
    if (!country.validity.valid) {
        countryError.textContent = "Country is required"
    } else {
        countryError.textContent = ""
    }
}
country.addEventListener('input', validateCountry)
country.addEventListener('blur', validateCountry)

// Postal validation
function validatePostal() {
    if (!postal.validity.valid) {
        postalError.textContent = "Postal code is required"
    } else {
        postalError.textContent = ""
    }
}
postal.addEventListener('input', validatePostal)
postal.addEventListener('blur', validatePostal)

// Password validation
function validatePass() {
    if (!pass.validity.valid) {
        passError.textContent = "Password is invalid"
    } else {
        passError.textContent = ""
    }

    validatePassCon()
}

pass.addEventListener('input', validatePass)
pass.addEventListener('blur', validatePass)

// Password confirmation validation
function validatePassCon() {
    passcon.setCustomValidity(
        pass.value !== passcon.value ? "Passwords do not match" : ""
    )
    if (!passcon.validity.valid) {
        passconError.textContent = "Confirmation is invalid"
    } else {
        passconError.textContent = ""
    }
}
passcon.addEventListener('input', validatePassCon)
passcon.addEventListener('blur', validatePassCon)

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateEmail()
    validateCountry()
    validatePostal()
    validatePass()
    validatePassCon()

    if (
        email.validity.valid &&
        country.validity.valid &&
        postal.validity.valid &&
        pass.validity.valid &&
        passcon.validity.valid &&
        pass.value === passcon.value
    ) {
        alert("Works perfectly")
    } else {
        alert("Please fix the errors in the form")
    }
})
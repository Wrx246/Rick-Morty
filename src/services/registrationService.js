

const setRegistration = (username, email, password) => {
    localStorage.setItem('Username', JSON.stringify(username))
    localStorage.setItem('Password', JSON.stringify(password))
    localStorage.setItem('Email', JSON.stringify(email))
    localStorage.setItem('FavoriteList', '[]')
}

export default setRegistration;
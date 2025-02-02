function setCookies() {
    // Récupérer les valeurs des inputs
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    // Définir les cookies
    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    // Créer un élément paragraphe
    const p = document.createElement('p');
    
    // Récupérer tous les cookies
    const cookies = document.cookie.split(';')
        .map(cookie => cookie.trim())
        .join(' ');

    // Définir le contenu du paragraphe
    p.innerHTML = `Cookies: ${cookies}`;
    
    // Ajouter le paragraphe à la fin du body
    document.body.appendChild(p);
}
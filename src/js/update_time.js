function updateTime() {
    const now = new Date();
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('fr-FR', options);
    const formattedTime = now.toLocaleTimeString();

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Appeler updateTime chaque seconde pour mettre à jour l'heure
setInterval(updateTime, 1000);

// Mettre à jour l'heure une fois au chargement de la page
updateTime();
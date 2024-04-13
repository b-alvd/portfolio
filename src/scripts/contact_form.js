document.getElementById('discordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let society = document.getElementById('society').value;
    let message = document.getElementById('message').value;

    let webhookUrl = 'https://discord.com/api/webhooks/1228832850329997373/5d1Gxh68_rB9ZmgcWY1Yep1BPN7pcHBX02ru8jEUVBgt2kMdBH3k6BbYuUz3JQLfSG6a';

    let requestData = {
        username: nom,
        embeds: [{
            title: 'Nouveau message du formulaire [Portfolio]',
            color: 0xFF6600, 
            fields: [
                { name: 'Nom & Prénom', value: nom, inline: true },
                { name: 'Email', value: email },
                { name: 'Téléphone', value: phone },
                { name: 'Entreprise', value: society },
                { name: 'Message', value: message }
            ]
        }]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi du message à Discord.');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
        // document.getElementById('popup').style.display = 'block';
        // setTimeout(function() {
        //     document.getElementById('popup').style.display = 'none';
        // }, 3000);
        document.getElementById('nom').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('society').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message à Discord.');
    });
});
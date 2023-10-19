const contrateOpcoes = opt => {
    const contrateCard = document.getElementById('contrate-card');
    const carouselImg = document.getElementById('carousel');
    const barraTrabalhe = document.getElementById('')

    switch(opt){
        case 0:
            contrateCard.innerHTML = `
            <h2>Encontre o profissional ideal</h2>
            <p>Mão de obra qualificada e acessível, perto de você.</p>
            <a href="https://forms.gle/D8NprQg2McPBtnsT8" target="_blank"><button>Encontre um profissional</button></a>`
            carouselImg.style.backgroundImage = "url('../assets/carousel1.svg')"
            break
        case 1:
            contrateCard.innerHTML = `
            <h2>Ofereça seus serviços</h2>
            <p>Trazemos clientes para você!</p>
            <a href="https://forms.gle/1yMseEtD8mSjBNQr7" target="_blank"><button id="verde">Ofereça seus serviços</button></a>`
            carouselImg.style.backgroundImage = "url('../assets/carousel2.svg')"
            break
        
    }

}


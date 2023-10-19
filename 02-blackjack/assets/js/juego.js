  const moduloBlackjack = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K']

    let puntosJugadores = []

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo')

    const puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas')

    const buttonsState = (action) => {
      btnPedir.disabled = action
      btnDetener.disabled = action
    }

    const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck()
      puntosJugadores = []

      for (let i = 0; i < numJugadores; i++){
        puntosJugadores.push(0)
      }

      puntosHTML.forEach(elem => elem.innerText = 0)
      divCartasJugadores.forEach(elem => elem.innerHTML = '')
      buttonsState(false)
    }

    const crearDeck = () => {
      deck = []

      for (let tipo of tipos){
        for(let i = 2; i<= 10; i++){
          deck.push(i + tipo)
        }
        for (let esp of especiales){
          deck.push(esp + tipo)
        }
      }

      return _.shuffle(deck)
    }

    const pedirCarta = () => {
      if (deck.length === 0){
        throw 'No hay cartas en el deck'
      }

      return deck.pop()
    }

    const valorCarta = (carta) => {
      const valor = carta.substring(0, carta.length -1)
      return (isNaN(valor)) ?
              (valor === 'A') ? 11 : 10
              : valor * 1
    }

    // el último turno será siempre la computadora
    const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] += valorCarta(carta)
      puntosHTML[turno].innerText = puntosJugadores[turno]

      return puntosJugadores[turno]
    }

    const crearCarta = (carta, turno) => {
      const imgCarta = document.createElement('img')
      imgCarta.src = `assets/cartas/${carta}.png`
      imgCarta.classList.add('carta')
      divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador = () => {
      const [puntosMinimos, puntosComputadora] = puntosJugadores

      setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
          alert('Empate')
        } else if (puntosMinimos > 21) {
          alert('La computadora gana')
        } else if (puntosComputadora > 21) {
          alert('El jugador gana')
        } else { 
          alert('La computadora gana')
        }
      }, 100)
    }

    const turnoComputadora = (puntosMinimos) => {
      let puntosComputadora = 0

      do{
        const carta = pedirCarta(),
              turno = puntosJugadores.length - 1
        
        puntosComputadora = acumularPuntos(carta, turno)
        crearCarta(carta, turno)

      } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))

      determinarGanador()
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(),
            puntosJugador = acumularPuntos(carta, 0)
        
      crearCarta(carta, 0)

      if (puntosJugador > 21) {
        console.warn('Perdiste')
      } else if (puntosJugador === 21) {
        console.warn('21, genial!!')
      } else return

      buttonsState(true)
      turnoComputadora(puntosJugador)
    })

    btnDetener.addEventListener('click', () => {
      buttonsState(true)
      turnoComputadora(puntosJugadores[0])
    })

    btnNuevo.addEventListener('click', () => {
      inicializarJuego()      
    })

    return { 
      nuevoJuego: inicializarJuego
    }

  })()
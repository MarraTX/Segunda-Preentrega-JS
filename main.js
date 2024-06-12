const armas = {
    'RIFLE DE ASALTO': {
        'ACR': ['Mira Holográfica', 'Empuñadura delantera', 'Culata táctica'],
        'RAM-7': ['Mira Reflex', 'Silenciador ligero', 'Cañón extendido']
    },
    'SUBFUSIL': {
        'MP5': ['Mira Reflex', 'Cargador ampliado', 'Empuñadura punteada'],
        'HRM-9': ['Mira Holográfica', 'Empuñadura punteada', 'Silenciador ligero']
    },
    'FRANCOTIRADOR': {
        'KAR-97': ['Mira de francotirador x8', 'Bipode', 'Culata acolchada'],
        'MORS': ['Visor térmico', 'Silenciador pesado', 'Cañón pesado']
    }
};

alert('Bienvenido al selector de clases para Warzone 2.0');

const categorias = ['RIFLE DE ASALTO', 'SUBFUSIL', 'FRANCOTIRADOR'];

function mostrarArmasDisponibles(categoria) {
    return Object.keys(armas[categoria]).join(', ');
}

function mostrarAccesorios(accesorios) {
    return accesorios.map(accesorio => accesorio).join(', ');
}

function seleccionarClase() {
    let seguirSeleccionandoClase = true;
    let armasSeleccionadas = 0;

    while (seguirSeleccionandoClase) {
        let categoria = '';
        let arma = '';
        let accesorios = '';

        categoria = prompt('Seleccione una categoría:\n1. Rifle de Asalto\n2. Subfusil\n3. Francotirador\n4. Salir');
        const categoriaValida = categorias.filter((cat, index) => categoria === (index + 1).toString()).length > 0;

        if (!categoriaValida) {
            if (categoria === "4") {
                alert('Saliendo...');
                alert('Cantidad de armas seleccionadas: ' + armasSeleccionadas);
                return false;
            } else {
                alert('Por favor, seleccione una opción válida.');
                continue;
            }
        } else {
            categoria = categorias[parseInt(categoria) - 1];
        }

        let seguirSeleccionandoArma = true;
        while (seguirSeleccionandoArma) {
            const armasDisponibles = mostrarArmasDisponibles(categoria);
            arma = prompt('Armas disponibles en la categoría ' + categoria + ': ' + armasDisponibles).toUpperCase();
            if (!(arma in armas[categoria])) {
                alert('Por favor, seleccione un arma válida.');
            } else {
                armasSeleccionadas++;
                accesorios = armas[categoria][arma];
                const accesoriosLista = mostrarAccesorios(accesorios);
                alert('Los mejores accesorios para el arma ' + arma + ' son los siguientes: ' + accesoriosLista);

                seguirSeleccionandoArma = confirm('¿Quieres seleccionar otra arma en la misma categoría?');
            }
        }

        seguirSeleccionandoClase = confirm('¿Quieres seleccionar una nueva clase de arma?');
    }

    alert('Cantidad de armas seleccionadas: ' + armasSeleccionadas);
    return true; 
}

let seguirSeleccionando = true;
while (seguirSeleccionando) {
    seguirSeleccionando = seleccionarClase(); 
}

alert('Gracias por utilizar el selector de clases para Warzone 2.0!');



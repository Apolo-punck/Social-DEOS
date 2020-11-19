const rootTallerImagen = document.querySelector('#taller-imagen');
const rootTallerCorporal = document.querySelector('#taller-corporal');
const rootTallerSalud = document.querySelector('#taller-salud');
const rootTallerMentalidad = document.querySelector('#taller-mentalidad');
const rootInstructor = document.querySelector('#img-instructor');

// Titulos

// db is the object database; 

let db = firebase.firestore();

let consultarImagenes =  async () => {

    let imagenes = db.collection('imagenes');
    try {

        const snapshot = await imagenes.get();
        let res = snapshot.docs.map( doc  => doc.data().url);
        return res;
    } catch (error) {

        console.log(error);
    }
    
}



let renderImages = async () => { 
    
    let res = await consultarImagenes();

    // imgagen emma corbata roja
    const tallerImgImagen = document.createElement('img');
    tallerImgImagen.className = 'img-fluid';
    tallerImgImagen.src = res[1];
    tallerImgImagen.style.width = '100%'

    // Nicole sentada
    const tallerImgCorporal = document.createElement('img');
    tallerImgCorporal.className = 'img-fluid';
    tallerImgCorporal.src = res[3];

    //mentalidad emma lentes
    const tallerImgMentalidad = document.createElement('img');
    tallerImgMentalidad.className = 'img-fluid';
    tallerImgMentalidad.src = res[0];

    // Salud apolo
    const tallerImgSalud = document.createElement('img');
    tallerImgSalud.className = 'img-fluid';
    tallerImgSalud.src = res[5];

    //instructor
    const imgInstructor = document.createElement('img');
    imgInstructor.className = 'img-fluid';
    imgInstructor.src = res[2];

    rootTallerImagen.appendChild(tallerImgImagen);
    rootTallerCorporal.appendChild(tallerImgCorporal);
    rootTallerMentalidad.appendChild(tallerImgMentalidad);
    rootTallerSalud.appendChild(tallerImgSalud);
    rootInstructor.appendChild(imgInstructor);


    console.log(res);
    
}

document.addEventListener('DOMContentLoaded', async () => {

    try {
        let res = await renderImages();
        console.log(res);
    } catch (error) {
        console.log(err)
    }
});


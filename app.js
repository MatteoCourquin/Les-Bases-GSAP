const img1 = document.querySelector('.container-images img:nth-child(1)')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const img3 = document.querySelector('.container-images img:nth-child(3)')
const btnCat = document.querySelector('.cat-fade')


// MÉTHODE TO
// GSAP.TO (depuis leurs positions/propriétés => ce qu'on leurs assignes)

// gsap.to(mon Obj a animer, objet:{animation, duration})
gsap.to(img1, {x: 100, y: 100, rotate: 90, scale: 0.3 ,duration: 2})

// transform = 
// X = translate sur X
// Y = translate sur Y
// scale = scale
// rotate = rotate

gsap.to('h1', {color: 'red', backgroundColor:'pink' , duration: 3})


// MÉTHODE FROM
// GSAP.FROM (depuis la positions/propriétés assignés => leurs propriétés initiales)

gsap.from(img2, {opacity: 0, duration: 1})


// Gérer des bugg
btnCat.addEventListener('click', () => {
    gsap.from(img2, {opacity: 0, duration: 1})
    // Lors du double click, l'animation s'initie avec une faible opacité puisque l'animation générer au premier click n'était pas finie
})


// MÉTHODE FROMTO
// GSAP.FROMTO (depuis la positions/propriétés assignés => la seconde positions/propriétés assignés)

btnCat.addEventListener('click', () => {
    gsap.fromTo(img1, {opacity: 0}, {opacity: 1, duration: 8})
    // Lors du double click, l'animation s'initie avec une faible opacité puisque l'animation générer au premier click n'était pas finie
})


// REPEAT & DELAY

gsap.to(img2, {rotation: 180, repeat: 2, duration: 2, delay: 1, repeatDelay: 2})

// repaet = nombre de fois que se joue l'animation
// delay = delai avant le lancement de l'animation
// repeatDelay = delai entre chaque fois que l'animation va se répéter




// EASINGS
gsap.to(img3, {rotation: 720, duration: 5, ease: "power1"})

// differents types de ease :
// https://greensock.com/docs/v3/Eases

// ease: 
// elastic = effet de rebond lent
// bounce = effet de rebond
// power1 = rapide > lent
// steps(12) = escalier (nombres de marches)
// ...


// STAGGER

gsap.to('.container-btns button', {duration: 0.2, x: 50, stagger: 0.1, duration: 1})

// Permet de décaler le déclanchement des animations d'un meme groupe (a vérifier pour le meme groupe)



// RANDOM

gsap.to('.container-btns button', {duration: 0.2, x: "random(-100 , 100)", stagger: 0.1, duration: 1})

// random(-100 , 100) = valeur aléatoire entre -100 et 100
// random([50, 30, -30, 80]) = valeur aléatoire entre toutes les valeurs données dans le tableau
// random(-100 , 100, 10) = valeur aléatoire arrondie a la dizaine entre -100 et 100 



// KEYFRAMES

gsap.to('.container-btns :nth-child(1)', {keyframes:[
        {duration: 0.3, y: -10},
        {duration: 0.3, scale: 1.3},
        {duration: 0.3, scale: 1},
        {duration: 0.3, y: 0}
    ]})
    
// keyframe nous permet de faire des animations css directements dans la timeline
    
    
    
// CALLBACK
    
gsap.to('.container-btns :nth-child(2)', {
    x: 100,
    repeat: 1,
    onComplete: () => console.log('Terminer'),
    onStart: () => console.log('Démarer'),
    onUpdate: () => console.log('En cours'),
    onRepeat: () => console.log('Répéter')
})

// Permet de déclancher quelque chose a un certain moment (Terminer / Démarer / En cours / Répéter)




// ENREGISTRER DES ANIMATIONS

gsap.registerEffect({
    name: "animRotate",
    effect: (target, config) => {
        return gsap.to(target, {duration: config.duration, rotate: 360})
    },
    defaults : {duration: 2} // Valeur par défaut dans le cas ou on ne lui donne pas de "duration" (important pour éviter que l'animation ne se déclanche pas en cas d'oublie du parametre)
})
// "register effect" permet d'enregistré des animations de maniere a pouvoir les réutiliser

gsap.effects.animRotate(".container-btns :nth-child(2)", {duration: 5});
// J'appelle ma fonction enregistrer plus haut




// SET

gsap.set(".container-images", {opacity: 0})

// Sert a redefinir une propriété d'un élément 



// YOYO

const anim = gsap.to(".container-images img:nth-child(3)", {y: 250, yoyo:true, repeat:1})

// Sert a faire rebondir l'élément




// MÉTHODES TWEENS

const anim = gsap.to(".container-images img:nth-child(3)", {y: 250, yoyo:true, repeat:1})

// Permet de controler les animations en dehors de celles ci

anim.duration(5) // redefini sa duré
// anim.pause() // la met en pause
// anim.resume() // reprend mon animation
// anim.kill() // tue mon animation
// anim.seek(2.5) // démare a partir de 2.5s dans mon animation
// anim.resume() // reprend mon animation



// TIMELINE
import self from "../img/Sujet.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(250,200,0)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Eric",
    lastName: "Busing",
    initials: "eb", // the example uses first and last, but feel free to use three or more if you like.
    position: "développeur web junior",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        // {
        //     emoji: '🌎',
        //     text: 'habite en France'
        // },
        // {
        //     emoji: "💼",
        //     text: "Systems Engineer at Google"
        // },
        {
            emoji: "📧",
            text: "busing.eric@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/ericbusing",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/eric-busing-11981bb4/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Après 14 ans d'expérience dans le commerce et la gestion d'équipe, j'ai voulu donner un nouveau souffle à ma carrière. Je suis désormais fraichement diplomé d'une formation de Développeur Web au cours de laquelle j'ai réalisé 6 projets, mon nouvel objectif est de faire de cette passion mon métier.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'nodejs', 'mongodb'],
            workOn: ['mysql', 'sql']
        }
    ,
    hobbies: [
        {
            label: 'cinéma',
        },
        {
            label: 'musique',
        },
        {
            label: 'lecture',
        },
        {
            label: 'voyages',
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Projet Booki",
            live: "https://ericbusing.github.io/Openclassrooms-P2/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ericbusing/Openclassrooms-P2", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Projet Ohmyfood!",
            live: "https://ericbusing.github.io/Openclassrooms-P3/",
            source: "https://github.com/ericbusing/Openclassrooms-P3/tree/main",
            image: mock2
        },
        {
            title: "Projet La Panthère",
            live: "https://ericbusing.github.io/Openclassrooms-P4/",
            source: "https://github.com/ericbusing/Openclassrooms-P4/tree/main",
            image: mock3
        },
        {
            title: "Projet Kanap",
            live: "https://paytonpierce.dev",
            source: "https://github.com/ericbusing/OpenClassrooms-P5/tree/main",
            image: mock4
        },
        {
            title: "Projet Hot Takes",
            live: "https://paytonpierce.dev",
            source: "https://github.com/ericbusing/Openclassrooms-P6/tree/main",
            image: mock5
        },
        {
            title: "Projet Groupomania",
            live: "https://paytonpierce.dev",
            source: "https://github.com/ericbusing/Groupomania",
            image: mock5
        }
    ]
}
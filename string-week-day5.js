let submissions = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
// split into array 
submissions = submissions.split(','); 

// filter for empty space beginning and end
submissions = submissions.filter(n => n == n.trim());

// filter for 'S'
submissions = submissions.filter( n => !n.includes('S'));

// filter for length of pun (cannot be multiple of 5)
submissions = submissions.filter( n => n.length % 5 !== 0); 

// filter for forbidden words ('dog', 'bark', or 'bone')
const forbiddenWords = ['dog', 'bark', 'bone']

function filterItems(arr, query) {
    return arr.filter((el) => !el.toLowerCase().includes(query.toLowerCase()));
}

for (let keyword of forbiddenWords) {
    submissions = filterItems(submissions, keyword); 
}

// sum of the charCodes of the 1st and last characters must be odd 
submissions = submissions.filter( n => (n.charCodeAt(0) + n.charCodeAt(n.length - 1)) % 2 !== 0); 

//Character directly after the middle of the string may not be 'e' 
submissions = submissions.filter( n => {
    const index = Math.round(n.length / 2)
    return n[index] !== 'e' || n[index] !== 'E'; 
})

// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
submissions = submissions.filter( n => {
    let lowerCount = 0; 
    for (let i = 0; i < n.length; i++) {
        if (n[i] == n[i].toLowerCase()) {
            lowerCount++; 
        }
    }
    return lowerCount % 2 == 0; 
})

// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
submissions = submissions.filter( n => {
    let upperCount = 0; 
    for (let i = 0; i < n.length; i++) {
        if (n[i] == n[i].toUpperCase()) {
            upperCount++; 
        }
    }
    return upperCount >= 2; 
})
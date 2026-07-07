const games = {

  "minecraft": {
    title: "Minecraft",

    theory: `
    <p>Les Endermen seraient les descendants d'une ancienne civilisation humaine ayant fui vers l'End.</p>
    <p>
    Ils possèdent une silhouette humaine, peuvent transporter des blocs et craignent l'eau.
    Selon cette théorie, une exposition prolongée à l'End ainsi que la consommation de fruits Chorus auraient progressivement modifié leur apparence et leur comportement.
    Cette civilisation aurait construit les Cités de l'End et les Navires de l'End afin de combattre les Dragons de l'End et récupérer de précieuses ressources comme les Élytres.
    Certains fans pensent également que les Forteresses, les Mines abandonnées et les Anciennes Cités ont été construites par cette même civilisation.
    </p>
    <br>
    <p>Les Piglins vivaient autrefois dans le Monde Normal.</p><p>
    Avant l'arrivée des humains, les Piglins auraient peuplé l'Overworld.
    Une mystérieuse épidémie zombie les aurait forcés à ouvrir des milliers de portails vers le Nether.
    Selon cette théorie, l'air froid provenant du Monde Normal aurait refroidi certaines régions du Nether, donnant naissance aux Deltas de Basalte.
    À l'inverse, la chaleur du Nether aurait contribué à la fonte des glaces dans l'Overworld, provoquant l'apparition des océans actuels.
    </p>
    `,

    background:
      "Background/MC_BG.jpg"
  },

  "poppy playtime": {
    title: "Poppy Playtime",

    theory: `
    <p>L'univers de Poppy Playtime est rempli de mystères et de secrets. Depuis des années, les fans analysent chaque détail afin de reconstituer l'histoire complète du jeu.</p>
    <br>
    <p>CatNap et le Prototype étaient-ils amis ?</p>
    <p>
    Selon cette théorie, lorsque Playcare était encore en activité, le Prototype aurait été l'ami imaginaire de Theodore, le futur CatNap.
    Le Prototype aurait convaincu Theodore de voler un GrabPack afin d'organiser une évasion.
    Cependant, Theodore fut gravement blessé lors de cette tentative.
    Au lieu de s'enfuir seul, le Prototype l'aurait ramené auprès du personnel médical de Playcare.
    Par la suite, Theodore aurait été transformé en CatNap afin de survivre à ses blessures.
    Depuis cet événement, CatNap considérerait le Prototype comme une figure divine.
    </p>
    <p>
    Cette théorie est notamment soutenue par plusieurs cassettes audio du Chapitre 3 ainsi que par les informations fournies par Ollie au cours de l'aventure.
    </p>
    `,

    background:
      "Background/PPT_BG.jpg"
  },

  "cyberpunk 2077": {
    title: "Cyberpunk 2077",

    theory: `
    <p>L'univers de Cyberpunk 2077 cache de nombreux secrets qui dépassent largement les intrigues des mégacorporations.</p>
    <p>
    L'une des théories les plus populaires concerne Mr. Blue Eyes, un personnage mystérieux apparaissant à plusieurs moments clés du scénario.
    Ses yeux brillants et son comportement inhabituel ont rapidement attiré l'attention des joueurs.
    </p>
    <p>
    Certains fans pensent qu'il est contrôlé par une intelligence artificielle située au-delà du Blackwall.
    Le Blackwall est une barrière numérique créée pour isoler les IA devenues incontrôlables après le DataKrash.
    Cependant, plusieurs indices suggèrent que certaines d'entre elles pourraient encore influencer le monde réel.
    </p>
    <p>
    L'histoire de Jefferson Peralez renforce cette hypothèse.
    Au fil de l'intrigue, il découvre que ses souvenirs et ses pensées semblent être modifiés par une force inconnue.
    De nombreux joueurs considèrent alors que la véritable menace de Cyberpunk 2077 n'est pas représentée par les corporations, mais par les intelligences artificielles cachées derrière le Blackwall.
    </p>
    `,

    background:
      "Background/CYBERPUNK_BG.jpg" 
  },

  "fnaf": {
    title: "Five Nights At Freddy's",

    theory: `
    <p>Le lore de Five Nights at Freddy's est considéré comme l'un des plus complexes de l'histoire du jeu vidéo.</p>
    <p>Selon une théorie populaire, William Afton menait des expériences sur le Remnant, une substance mystérieuse capable de conserver l'énergie des âmes humaines.
    </p><p>
    Cela expliquerait pourquoi les esprits des enfants victimes se retrouvent piégés à l'intérieur des animatroniques.
    Les fans pensent également que le Bite of '83 et le Bite of '87 correspondent à deux événements distincts.
    </p><p>
    Certaines théories affirment que le Crying Child serait devenu Golden Freddy, tandis que d'autres le relient à Fredbear.
    L'ensemble de la saga tourne autour de thèmes récurrents comme la culpabilité, les expériences scientifiques et la quête de l'immortalité.
    </p>
    `,

    background:
      "Background/FNAF_BG.jpg"
  },

  "undertale": {
    title: "Undertale",

    theory: `
    <p>Après avoir terminé Undertale, de nombreux joueurs se plongent dans les théories afin de mieux comprendre son univers complexe.</p>
    <br>
    <p>Sans et Papyrus auraient été créés par Gaster.</p><p>
    Selon cette théorie, Gaster aurait utilisé une faible quantité de Détermination afin de créer Sans et Papyrus grâce à ses connaissances scientifiques.
    Cette hypothèse repose sur les nombreux mystères entourant l'ancien scientifique royal.
    </p><br><p>Sans ne serait pas un simple squelette mais un revenant.</p>
    <p>
    Dans plusieurs légendes médiévales, les revenants sont des êtres revenus d'entre les morts afin d'accomplir une vengeance.
    Ils possèdent souvent des capacités surnaturelles et poursuivent leur cible sans relâche.
    </p>
    <p>
    Les partisans de cette théorie soulignent plusieurs similitudes avec Sans : sa vitesse exceptionnelle, son œil lumineux lors du combat du Génocide Route et l'apparition de sang après sa défaite.
    Selon cette interprétation, Sans poursuivrait les responsables de sa mort à travers les différentes lignes temporelles.
    </p>
    `,

    background:
      "Background/UNDERTALE_BG.png"
  }
};

function goBack() {
  document.getElementById("gameContent").innerHTML = `
    <h2>Bienvenue sur FanTheories</h2>
    <p>
    Découvrez les théories les plus populaires autour des jeux vidéo.
    Explorez les mystères et les secrets cachés de vos univers préférés.
    </p>
    `;
  document.body.style.backgroundImage =
  `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
   url('Background/Background.png')`;
  document.getElementById("backButton").style.display = "none";
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function searchSite() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  if (games[input]) {
    openGame(input);
  }

  else {
    alert("Aucun résultat trouvé.");
  }
}

function openGame(gameName) {
  document.getElementById("backButton").style.display = "block";
  const game = games[gameName];
  document.getElementById("gameContent").innerHTML = 
  `<h2>${game.title}</h2>
   <p>${game.theory}</p>`;
  document.body.style.backgroundImage =
  `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
   url('${game.background}')`;
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showSuggestions() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";
  if (input === "") {
    return;
  }

  for (let key in games) {
    if (key.includes(input)) {
      const div = document.createElement("div");
      div.classList.add("suggestion");
      div.innerText = games[key].title;
      div.onclick = () => {
        document.getElementById("searchInput").value = key;
        suggestions.innerHTML = "";
        openGame(key);
      };
      suggestions.appendChild(div);
    }
  }
}

function handleKey(event) {

  if (event.key === "Enter") {

    searchSite();
  }
}
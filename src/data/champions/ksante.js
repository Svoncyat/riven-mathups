import { DIFFICULTY_LEVELS } from '../constants.js';

export const ksanteMatchup = {
  id: 'ksante',
  name: "K'Sante",
  nickname: "El Orgullo de Nazumah",
  difficulty: DIFFICULTY_LEVELS.HARD,
  portrait: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/KSante.png",
  
  abilities: {
    passive: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Icons_KSante_P.png",
    q: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KSanteQ.png",
    w: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KSanteW.png",
    e: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KSanteE.png",
    r: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/KSanteR.png"
  },
  
  runes: {
    primary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png',
      keystone: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png',
      rune3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/LastStand/LastStand.png'
    },
    secondary: {
      tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png',
      rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png',
      rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png'
    },
    statShards: {
      shard1: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png",
      shard2: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
      shard3: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png"
    }
  },
  
  items: {
    starting: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png", // Doran's Blade
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png"  // Health Potion
    ],
    recommended: [
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png", // Black Cleaver
      "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png", // Ionian Boots of Lucidity
    ]
  },
  
  summonerSpells: {
    d: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png",
    f: "https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerTeleport.png"
  },
  strategy: {
    notes: [
      "Haz cheese en el nivel 1 para obtener ventaja temprana.",
      "Espera a que use su W y abusa de su alto cooldown después (sin ella, no puede detenerte efectivamente en los trades).",
      "Si mantienes buen espaciado temprano, le será difícil jugar agresivamente.",
      "Una vez que obtenga sus objetos core (Tabis + Guantelete Helado), se vuelve difícil matarlo.",
      "Naturalmente construirá armadura, haciendo que sea desafiante ganarle en duelos."
    ],
    toDo: [
      "Ve por trades cortos para reducir su vida gradualmente."
    ],
    toAvoid: [
      "Evita los all-ins, especialmente una vez que tenga objetos defensivos."
    ]
  },
  
  lastUpdated: "2024-12-19",
  patch: "15.15.1",
  author: "Riven Guide"
}
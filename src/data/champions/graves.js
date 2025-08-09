 import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';

export const gravesMatchup = {
    id: 'graves',
    name: await getChampionInfo.getChampionName('Graves'),
    nickname: await getChampionInfo.getChampionTitle('Graves'),
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    portrait: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Graves.png',
    abilities: {
        passive: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/GravesTrueGrit.png',
        q: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GravesQLineSpell.png',
        w: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GravesSmokeGrenade.png',
        e: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GravesMove.png',
        r: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/GravesChargeShot.png'
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
            tree: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png',
            rune1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png',
            rune2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png'
        },
        statShards: {
            shard1: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
            shard2: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
            shard3: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
        }
    },
    items: {
        starting: [
            'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png',
            'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png'
        ],
        recommended: [
            'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/6692.png',
            'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3071.png',
            'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/3158.png'
        ]
    },
    summonerSpells: {
        d: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerFlash.png',
        f: 'https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/SummonerDot.png'
    },
    strategy: {
        notes: [
            'Lucha de forma agresiva, esquiva sus habilidades y luego haz un all-in. Si usa su deslizamiento (E), déjalo escapar.',
            'Al principio del juego, intenta acampar en un arbusto; puedes ganarle fácilmente en 1v1 con Destello e Ignición.'
        ],
        toDo: [
            'Comienza con la Q (Alas Rotas).',
            'Lleva Ignición como hechizo de invocador.',
            'Construye Eclipse como primer objeto.'
        ],
        toAvoid: [
            'No sigas a Graves cuando se deslice para escapar; en su lugar, espera a que tu Q (Alas Rotas) vuelva a estar disponible.'
        ]
    },
    lastUpdated: '2024-07-29',
    patch: '15.15.1',
    author: 'Svonccy'
};
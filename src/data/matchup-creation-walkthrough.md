# 📝 Guía Paso a Paso para Crear Nuevos Matchups

> Este documento sirve como una guía detallada para añadir un nuevo archivo de matchup de campeón al proyecto, asegurando la consistencia de la API y evitando errores comunes.

---

## 📂 Estructura del Archivo

Cada campeón debe tener su propio archivo `.js` dentro de `src/data/champions/`. El archivo debe exportar un objeto constante con el siguiente formato. Usaremos a **Aatrox** como ejemplo del nuevo formato.

### 1. Importaciones Requeridas

Todos los archivos de matchup deben comenzar con estas importaciones obligatorias:

```javascript
import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js';
```

- **`DIFFICULTY_LEVELS`**: Constantes para los niveles de dificultad del matchup.
- **`getChampionInfo`**: Funciones helper que obtienen información dinámica del campeón basada en la última versión del parche de League of Legends.
- **`generateImageUrl`**: Funciones helper que generan URLs dinámicas basadas en la última versión del parche de League of Legends.

### 2. Información Básica del Campeón

Define los datos principales del campeón usando el nuevo formato dinámico:

```javascript
export const aatroxMatchup = {
  id: 'aatrox', // ID único en minúsculas (generalmente el nombre del campeón)
  name: 'Aatrox', // Nombre oficial del campeón
  nickname: 'La Espada Darkin', // Título o apodo oficial del campeón puedes consultar la API https://ddragon.leagueoflegends.com/cdn/15.15.1/data/es_MX/champion.json para revisar el apodo correspondiente.
  difficulty: DIFFICULTY_LEVELS.MEDIUM, // Nivel de dificultad (EASY, MEDIUM, HARD, EXTREME)
  portrait: await generateImageUrl.championPortrait('Aatrox'), // URL dinámica del retrato
  // ... resto de la estructura
};
```

**Campos explicados:**
- **`id`**: Identificador único en minúsculas, debe coincidir con el nombre del archivo.
- **`name`**: Nombre oficial del campeón con la primera letra en mayúscula.
- **`nickname`**: Título oficial del campeón en español. Puedes encontrarlo en la [API de campeones](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/es_MX/champion.json).
- **`difficulty`**: Usa una de las constantes: `DIFFICULTY_LEVELS.EASY`, `DIFFICULTY_LEVELS.MEDIUM`, `DIFFICULTY_LEVELS.HARD`, o `DIFFICULTY_LEVELS.EXTREME`.
- **`portrait`**: **IMPORTANTE**: Usa `await generateImageUrl.championPortrait('ChampionName')` donde `ChampionName` es el nombre exacto del campeón como aparece en la API.

### 3. Habilidades

Las URLs de las habilidades ahora se generan dinámicamente usando las funciones helper:

```javascript
  abilities: {
    passive: await generateImageUrl.championPassive('Aatrox_Passive'),
    q: await generateImageUrl.championSpell('AatroxQ'),
    w: await generateImageUrl.championSpell('AatroxW'),
    e: await generateImageUrl.championSpell('AatroxE'),
    r: await generateImageUrl.championSpell('AatroxR'),
  },
```

**Funciones para habilidades:**
- **`championPassive(passiveName)`**: Para la habilidad pasiva. El nombre varía por campeón (ej. `'Aatrox_Passive'`, `'Garen_Passive'`).
- **`championSpell(spellName)`**: Para habilidades activas. Sigue el patrón `{ChampionName}{Key}` (ej. `'AatroxQ'`, `'GarenW'`).

**IMPORTANTE**: Los nombres de las habilidades deben ser exactos. Consúltalos en la API específica del campeón: `https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion/{ChampionName}.json`

### 4. Runas

La estructura de runas usa el nuevo sistema dinámico para todos los elementos:

```javascript
  runes: {
    primary: {
      tree: await generateImageUrl.runeTree('7201_Precision'),
      keystone: await generateImageUrl.rune('Precision/Conqueror/Conqueror'),
      rune1: await generateImageUrl.rune('Precision/Triumph'),
      rune2: await generateImageUrl.rune('Precision/LegendHaste/LegendHaste'),
      rune3: await generateImageUrl.rune('Sorcery/LastStand/LastStand')
    },
    secondary: {
      tree: await generateImageUrl.runeTree('7203_Whimsy'),
      rune1: await generateImageUrl.rune('Inspiration/BiscuitDelivery/BiscuitDelivery'),
      rune2: await generateImageUrl.rune('Inspiration/JackOfAllTrades/JackofAllTrades2')
    },
    statShards: {
      shard1: await generateImageUrl.statShard('StatModsCDRScalingIcon'),
      shard2: await generateImageUrl.statShard('StatModsAdaptiveForceIcon'),
      shard3: await generateImageUrl.statShard('StatModsHealthPlusIcon')
    }
  },
```

**Funciones para runas:**
- **`runeTree(treeId)`**: Para árboles de runas. IDs disponibles:
  - `'7201_Precision'` (Precisión)
  - `'7202_Sorcery'` (Brujería)
  - `'7203_Whimsy'` (Inspiración)
  - `'7204_Resolve'` (Valor)
  - `'7200_Domination'` (Dominación)

- **`rune(runePath)`**: Para runas individuales. Sigue el patrón `{Tree}/{RuneCategory}/{RuneName}` (ej. `'Precision/Conqueror/Conqueror'`).

- **`statShard(shardName)`**: Para fragmentos estadísticos. Nombres comunes:
  - `'StatModsAdaptiveForceIcon'` (Fuerza Adaptativa)
  - `'StatModsCDRScalingIcon'` (Reducción de Enfriamiento)
  - `'StatModsHealthPlusIcon'` (Vida)
  - `'StatModsArmorIcon'` (Armadura)
  - `'StatModsMagicResIcon'` (Resistencia Mágica)

**CRÍTICO**: Consulta la [API de Runas Reforjadas](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/runesReforged.json) para obtener los nombres exactos de runas y sus rutas.

¡Algunas runas están donde no deberían estar! Asi que cuidado con el directorio de las runas algunas no son lo que aparentan, por ejemplo la runa 'Unflinching' debería estar en el árbol de 'Resolve' de esta manera:'Resolve/Unflinching/Unflinching.png'. Pero en su lugar, la ruta correcta (desde la API) es: 'Sorcery/Unflinching/Unflinching.png' como ves se encuentra en 'Sorcery', asi que ¡No asumas!. Esto parece ser un error de Riot Games, es por eso que deberás consultar la API para asegurar una URL correcta.

### 5. Objetos

En esta proyecto no se planea guiar la manera de armado de un campeón, algo así como una build core, en su lugar se desea recomendar objetos de armado para las situación del matchup.
Los objetos usan funciones dinámicas para generar URLs:

```javascript
  items: {
    starting: [ // ¡Máximo 2 objetos!

      await generateImageUrl.item('1055'), // Doran's Blade
      await generateImageUrl.item('2003') // Health Potion
    ],
    recommended: [ // ¡Máximo 3 objetos!
      await generateImageUrl.item('3123') // Executioner's Calling
    ]
  },
```

**Función para objetos:**
- **`item(itemId)`**: Usa el ID numérico del objeto como string (ej. `'1055'`, `'3071'`).

**Estructura requerida:**
- **`starting`**: Array de objetos iniciales (generalmente Doran's + pociones).
- **`recommended`**: Array de objetos recomendados para el matchup.

**IMPORTANTE**: Los IDs de objetos se encuentran en la [API de Objetos](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/item.json).

### 6. Hechizos de Invocador

Los hechizos de invocador también usan el sistema dinámico:

```javascript
  summonerSpells: {
    d: await generateImageUrl.summonerSpell('SummonerFlash'), // Flash
    f: await generateImageUrl.summonerSpell('SummonerDot') // Ignite - Caso extraño pero en la API Dot se refiere a Ignite
  },
```

**Función para hechizos:**
- **`summonerSpell(spellName)`**: Usa el nombre interno del hechizo.

**Hechizos comunes:**
- `'SummonerFlash'` (Flash)
- `'SummonerDot'` (Ignite)
- `'SummonerTeleport'` (Teleport)
- `'SummonerHeal'` (Heal)
- `'SummonerBarrier'` (Barrier)
- `'SummonerExhaust'` (Exhaust)

**Estructura requerida:**
- **`d`**: Hechizo asignado a la tecla D.
- **`f`**: Hechizo asignado a la tecla F.

### 7. Estrategia

La información de estrategia mantiene la misma estructura pero debe estar completamente en español:

```javascript
  strategy: {
    notes: [
      'Enfrentamiento de habilidad',
      'Si se apresura en comprar las Tabi, prioriza el farmeo y las placas de torre.',
      '¡Cuando consigue el Puñal Serrado (Serrated Dirk), es un campeón diferente!',
      // ... más notas
    ],
    toDo: [
      'Ve con todo a nivel 1',
      'Abusa de él al principio del juego y engáñalo para que gaste su W/E.',
      // ... más acciones
    ],
    toAvoid: [
      'Evita subestimar su pico de poder con el Puñal Serrado(Serrated Dirk).',
      'Evita subestimar su curación.',
      // ... más cosas a evitar
    ]
  },
```

**Campos de estrategia:**
- **`notes`**: Array de strings con consejos generales y observaciones sobre el enfrentamiento **EN ESPAÑOL**.
- **`toDo`**: Array de strings con acciones recomendadas que Riven debe hacer **EN ESPAÑOL**.
- **`toAvoid`**: Array de strings con acciones y situaciones que Riven debe evitar **EN ESPAÑOL**.

**IMPORTANTE**: Toda la información debe estar traducida e interpretada al español, no simplemente copiada de fuentes en inglés.

### 8. Metadatos

Finalmente, añade los metadatos de la creación del archivo:

```javascript
  lastUpdated: '2025-08-03', // Fecha en formato YYYY-MM-DD
  patch: '15.15.1', // Versión del parche de LoL
  author: 'Svonccy' // Tu nombre de autor
};
```

**Campos de metadatos:**
- **`lastUpdated`**: Fecha de última actualización en formato ISO (YYYY-MM-DD).
- **`patch`**: Versión del parche de League of Legends (debe coincidir con la versión fallback en constants.js).
- **`author`**: Nombre del autor que creó o actualizó el matchup.

---

## 🔧 Sistema de URLs Dinámicas

### Cómo Funcionan las Funciones `generateImageUrl`

El nuevo sistema utiliza funciones asíncronas que:

1. **Obtienen automáticamente la última versión** del parche de League of Legends desde la API oficial.
2. **Generan URLs dinámicas** basadas en esa versión.
3. **Tienen un fallback** a la versión `15.15.1` si la API no está disponible.

### Funciones Disponibles

```javascript
// Todas estas funciones son asíncronas y deben usarse con 'await'
await generateImageUrl.championPortrait('ChampionName')
await generateImageUrl.championPassive('PassiveName')
await generateImageUrl.championSpell('SpellName')
await generateImageUrl.item('ItemId')
await generateImageUrl.summonerSpell('SpellName')
await generateImageUrl.runeTree('TreeId')
await generateImageUrl.rune('RunePath')
await generateImageUrl.statShard('ShardName')
```

### Ventajas del Nuevo Sistema

- **Actualización automática**: Las URLs se actualizan automáticamente con cada nuevo parche.
- **Menos errores**: Reduce errores de URLs hardcodeadas incorrectas.
- **Mantenimiento simplificado**: No necesitas actualizar manualmente las versiones en cada archivo.
- **Consistencia**: Todas las URLs siguen el mismo patrón dinámico.

---

## ✅ Checklist Final

1. [ ] ¿El archivo importa `DIFFICULTY_LEVELS` y `generateImageUrl` de `../constants.js`?
2. [ ] ¿El nombre del archivo es `{championName}.js` en minúsculas?
3. [ ] ¿El objeto exportado se llama `{championName}Matchup`?
4. [ ] ¿Todas las URLs usan las funciones `await generateImageUrl.*()` en lugar de URLs hardcodeadas?
5. [ ] ¿Los nombres de habilidades, runas y objetos son exactos según las APIs oficiales?
6. [ ] ¿La estructura del objeto coincide exactamente con la de `aatrox.js`?
7. [ ] ¿La información de estrategia está completamente traducida al español?
8. [ ] ¿Se han completado todos los campos, incluyendo los metadatos?
9. [ ] ¿La dificultad usa una de las constantes `DIFFICULTY_LEVELS`?
10. [ ] ¿Los arrays `starting` y `recommended` en items están correctamente estructurados?

> Siguiendo esta guía actualizada, asegurarás que los nuevos matchups usen el sistema dinámico de URLs y se integren correctamente en la aplicación.

---

## ⚙️ Integración en la Aplicación

Una vez que hayas creado el archivo del campeón, debes seguir estos pasos para que aparezca en la aplicación.

### 1. Actualizar `src/data/index.js`

Este archivo es el índice principal de todos los matchups. Debes importar y exportar tu nuevo campeón aquí.

**A. Importa el nuevo matchup:**

Añade la línea de importación junto con las demás, manteniendo el orden alfabético.

```javascript
// c:\Workspaces\react\riven-matchups\src\data\index.js

// ... otras importaciones
import { aatroxMatchup } from './champions/aatrox.js';
import { dariusMatchup } from './champions/darius.js';
import { garenMatchup } from './champions/garen.js'; // <-- AÑADIR NUEVA LÍNEA AQUÍ
import { DIFFICULTY_LEVELS } from './constants.js';
```

**B. Añádelo al array `matchupsData`:**

Agrega el objeto del matchup al array principal.

```javascript
// c:\Workspaces\react\riven-matchups\src\data\index.js

export const matchupsData = [
  // ... otros matchups
  aatroxMatchup,
  dariusMatchup,
  garenMatchup // <-- AÑADIR NUEVA LÍNEA AQUÍ
];
```

**C. Expórtalo individualmente:**

Finalmente, añade tu matchup a la lista de exportaciones individuales al final del archivo.

```javascript
// c:\Workspaces\react\riven-matchups\src\data\index.js

export {
  // ... otras exportaciones
  aatroxMatchup,
  dariusMatchup,
  garenMatchup // <-- AÑADIR NUEVA LÍNEA AQUÍ
};
```

### 2. Actualizar `src/AppLayout.jsx`

Para que el nuevo matchup se renderice en la página principal, añade su componente `MatchupInfo` en este archivo **en orden alfabético**.

```javascript
// c:\Workspaces\react\riven-matchups\src\AppLayout.jsx

export function AppLayout() {
    return (
        <section className='App'>
            {/* ... otros componentes */}
            <MatchupInfo matchupId="aatrox" />
            <MatchupInfo matchupId="darius" />
            <MatchupInfo matchupId="garen" /> {/* <-- AÑADIR NUEVA LÍNEA AQUÍ */}
        </section>
    )
}
```

**IMPORTANTE**: Mantén el orden alfabético de los componentes `MatchupInfo` para consistencia.

---

## 🚨 Errores Comunes y Soluciones

### 1. Error: "Cannot use import statement outside a module"
**Causa**: Falta la extensión `.js` en las importaciones.
**Solución**: Asegúrate de que todas las importaciones incluyan `.js`:
```javascript
import { DIFFICULTY_LEVELS, getChampionInfo, generateImageUrl } from '../constants.js'; // ✅ Correcto
```

### 2. Error: "Cannot read property of undefined"
**Causa**: Nombre incorrecto en las funciones `generateImageUrl`.
**Solución**: Verifica que los nombres sean exactos según las APIs oficiales.

### 3. Error: "SyntaxError: await is only valid in async functions"
**Causa**: Usar `await` fuera de un contexto asíncrono.
**Solución**: Este error no debería ocurrir en los archivos de matchup, pero si aparece, verifica que estés usando la sintaxis correcta.

### 4. Imágenes no cargan
**Causa**: Nombres incorrectos de habilidades, runas o objetos.
**Solución**: Consulta las APIs oficiales para obtener los nombres exactos.

---

¡Y eso es todo! Con estos cambios y siguiendo el nuevo formato dinámico, tu matchup estará completamente integrado y actualizado automáticamente con cada parche de League of Legends.
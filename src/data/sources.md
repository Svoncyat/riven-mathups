# 📚 Guía de Recursos y APIs - Riven Matchups

> **Documentación completa de todas las fuentes de datos utilizadas en la aplicación**

---

## 🎯 Fuentes de Información de Matchups

Los datos estratégicos y de matchups provienen de fuentes confiables de la comunidad:

- 🌟 **[Riven Guide - Matchups](https://riven.saltyy.at/)** - Guía principal con estrategias detalladas
- 📊 **[Riven Matchup Sheet](https://docs.google.com/spreadsheets/d/1JT2zJyhWEhD1f01CrJGHXUkHAGIy1dwLDZZ5PjLIsPs/edit?gid=0#gid=0)** - Hoja de cálculo colaborativa con datos actualizados

---

## 🛡️ Objetos e Items

### 📋 Patrón de URL
```
https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/{código_del_objeto}.png
```

### 💡 Ejemplos
| Item | Código | Preview |
|------|--------|----------|
| Escudo de Doran | `1054` | ![Escudo de Doran](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1054.png) |
| Espada de Doran | `1055` | ![Espada de Doran](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/1055.png) |
| Poción de Vida | `2003` | ![Poción de Vida](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/item/2003.png) |

### 🔗 API de Referencia
- **[📋 Lista completa de objetos](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/item.json)** - Todos los códigos y metadatos

---

## ⚔️ Campeones y Habilidades

### 🖼️ Retratos de Campeones
```
https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/{Nombre_del_campeón}.png
```

**Ejemplos:**
- ![Aatrox](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Aatrox.png) **[Aatrox](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Aatrox.png)**
- ![Akali](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Akali.png) **[Akali](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Akali.png)**
- ![Akshan](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Akshan.png) **[Akshan](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Akshan.png)**

### 🎭 Habilidades

#### 🔮 Habilidades Pasivas
```
https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/{nombre_pasiva}.png
```

> ⚠️ **Nota importante:** Los nombres de las pasivas varían por campeón. Consulta la API individual.

**Ejemplos:**
- **Aatrox:** `Aatrox_Passive.png` → ![Pasiva Aatrox](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Aatrox_Passive.png)
- **Akali:** `Akali_P.png` → ![Pasiva Akali](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/passive/Akali_P.png)

#### ⚡ Habilidades Activas (Q, W, E, R)
```
https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/{CampeónHabilidad}.png
```

**Patrón estándar:** `{Campeón}{Q|W|E|R}.png`

| Campeón | Q | W | E | R |
|---------|---|---|---|---|
| **Aatrox** | ![Q](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AatroxQ.png) | ![W](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AatroxW.png) | ![E](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AatroxE.png) | ![R](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AatroxR.png) |
| **Akali** | ![Q](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliQ.png) | ![W](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliW.png) | ![E](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliE.png) | ![R](https://ddragon.leagueoflegends.com/cdn/15.15.1/img/spell/AkaliR.png) |

### 🔗 APIs de Campeones
- **[📋 Lista de todos los campeones](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion.json)**
- **[🔍 API específica de Aatrox](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion/Aatrox.json)**
- **[🔍 API específica de Akali](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion/Akali.json)**

---

## 📊 Fragmentos de Estadística

### 🎯 URL Base
```
https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/
```

### 💡 Todos los fragmentos

| Fragmento | Nombre | Icono |
|------|--------|----------|
| Fuerza Adaptativa | `StatModsAdaptiveForceIcon` | ![Fuerza Adaptativa](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png) |
| Escalado de Fuerza Adaptativa | `StatModsAdaptiveForceScalingIcon` | ![Fuerza Adaptativa](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceScalingIcon.png) |
| Armadura | `StatModsArmorIcon` | ![Armadura](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsArmorIcon.png) |
| Velocidad de Ataque | `StatModsAttackSpeedIcon` | ![Velocidad de Ataque](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAttackSpeedIcon.png) |
| Escalado de CDR | `StatModsCDRScalingIcon` | ![Escalado de CDR](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsCDRScalingIcon.png) |
| Vida Extra | `StatModsHealthPlusIcon` | ![Vida Extra](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png) |
| Resistencia Mágica | `StatModsMagicResIcon` | ![Resistencia Mágica](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsMagicResIcon.png) |
| Velocidad de Movimiento | `StatModsMovementSpeedIcon` | ![Velocidad de Movimiento](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsMovementSpeedIcon.png) |
| Tenacidad | `StatModsTenacityIcon` | ![Tenacidad](https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsTenacityIcon.png) |


---

## 🌟 Sistema de Runas

### 🎨 Estructura de URLs

#### 🌳 Árboles de Runas
```
https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/{código}_{nombre}.png
```

#### 💎 Runas Individuales
```
https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/{árbol}/{runa}/{runa}.png
```

### 🎯 Ejemplos Prácticos

#### 🌳 Árboles Principales
| Árbol | Código | Icono |
|-------|--------|-------|
| **Dominación** | `7200_Domination` | ![Dominación](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png) |
| **Precisión** | `7201_Precision` | ![Precisión](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png) |
| **Brujería** | `7202_Sorcery` | ![Brujería](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png) |
| **Inspiración** | `7203_Whimsy` | ![Inspiración](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png) |
| **Valor** | `7204_Resolve` | ![Valor](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png) |

#### ⚡ Runas Clave (Keystones)
| Runa | Árbol | Icono |
|------|-------|-------|
| **Conquistador** | Precisión | ![Conquistador](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png) |
| **Electrocutar** | Dominación | ![Electrocutar](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png) |

#### 🔧 Runas Secundarias
| Runa | Árbol | Icono |
|------|-------|-------|
| **Triunfo** | Precisión | ![Triunfo](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph.png) |
| **Impacto Súbito** | Dominación | ![Impacto Súbito](https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png) |

Cuidado con el directorio de las runas algunas no son lo que aparentan, por ejemplo la runa de Unflinching debería estar en el árbol de 'Resolve' de esta manera:'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/Unflinching/Unflinching.png'. Pero en su lugar la ruta correcta (que da la API) es: 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png' como ves se encuentra en 'Sorcery'. Esto parece ser un problema de Riot Games, deberás consultar la API para asegurarte una URL correcta.

### 🔗 API de Runas
- **[📋 API completa de runas](https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/runesReforged.json)** - Códigos, nombres y estructura completa

---

## 🚀 Notas para Desarrolladores

### 📝 Consejos de Implementación
- ✅ **Versión actual:** `15.15.1` - Actualizar cuando salgan nuevos parches
- 🔄 **Cache:** Considera implementar cache para las imágenes
- 🌐 **CDN:** Todas las URLs utilizan el CDN oficial de Riot Games
- 📱 **Responsive:** Las imágenes se adaptan automáticamente

### 🛠️ Mantenimiento
- 🔍 **Verificación:** Revisar URLs después de cada parche
- 📊 **Monitoreo:** Implementar verificación automática de enlaces
- 🔄 **Actualización:** Proceso semi-automático para nuevas versiones

---

*📅 Última actualización: Parche 15.15.1*  
*🔗 Mantenido por: Equipo de desarrollo Riven Matchups*
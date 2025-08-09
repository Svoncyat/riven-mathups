# Script para actualizar archivos de campeones con getChampionInfo
# Preserva la codificacion UTF-8 para caracteres especiales del espanol

$championsDir = "c:\Workspaces\react\riven-matchups\src\data\champions"
$files = Get-ChildItem -Path $championsDir -Filter "*.js"

Write-Host "Iniciando actualizacion de archivos de campeones..." -ForegroundColor Green
Write-Host "Archivos encontrados: $($files.Count)" -ForegroundColor Yellow

foreach ($file in $files) {
    $filePath = $file.FullName
    
    # Leer el archivo con codificacion UTF-8 explicita
    $content = Get-Content -Path $filePath -Raw -Encoding UTF8
    $originalContent = $content
    
    # Extraer el nombre del campeon del nombre del archivo
    $championKey = $file.BaseName
    $championKeyCapitalized = $championKey.Substring(0,1).ToUpper() + $championKey.Substring(1)
    
    Write-Host "  Procesando: $($file.Name)" -ForegroundColor Cyan
    
    # Agregar getChampionInfo al import si no existe
    if (-not $content.Contains('getChampionInfo')) {
        $oldImport = 'import { DIFFICULTY_LEVELS } from'
        $newImport = 'import { DIFFICULTY_LEVELS, getChampionInfo } from'
        $content = $content.Replace($oldImport, $newImport)
    }
    
    # Dividir en lineas preservando los saltos de linea originales
    $lines = $content -split "(`r`n|`n|`r)"
    $modified = $false
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        $trimmedLine = $line.Trim()
        
        # Buscar lineas que empiecen con name: y contengan comillas simples
        if ($trimmedLine.StartsWith('name:') -and $trimmedLine.Contains("'") -and -not $trimmedLine.Contains('await')) {
            # Obtener indentacion original
            $indentation = ""
            for ($j = 0; $j -lt $line.Length; $j++) {
                $char = $line[$j]
                if ($char -eq ' ' -or $char -eq "`t") {
                    $indentation += $char
                } else {
                    break
                }
            }
            $newLine = $indentation + "name: await getChampionInfo.getChampionName('" + $championKeyCapitalized + "'),"
            $lines[$i] = $newLine
            $modified = $true
        }
        
        # Buscar lineas que empiecen con nickname: y contengan comillas simples
        if ($trimmedLine.StartsWith('nickname:') -and $trimmedLine.Contains("'") -and -not $trimmedLine.Contains('await')) {
            # Obtener indentacion original
            $indentation = ""
            for ($j = 0; $j -lt $line.Length; $j++) {
                $char = $line[$j]
                if ($char -eq ' ' -or $char -eq "`t") {
                    $indentation += $char
                } else {
                    break
                }
            }
            $newLine = $indentation + "nickname: await getChampionInfo.getChampionTitle('" + $championKeyCapitalized + "'),"
            $lines[$i] = $newLine
            $modified = $true
        }
    }
    
    # Si hubo modificaciones, guardar el archivo con codificacion UTF-8
    if ($modified) {
        $newContent = $lines -join ""
        # Usar UTF-8 sin BOM para preservar caracteres especiales
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($filePath, $newContent, $utf8NoBom)
        Write-Host "    Actualizado correctamente" -ForegroundColor Green
    } else {
        Write-Host "    Sin cambios necesarios" -ForegroundColor Yellow
    }
}

Write-Host "Actualizacion completada!" -ForegroundColor Green
Write-Host "Todos los archivos han sido procesados preservando la codificacion UTF-8" -ForegroundColor White
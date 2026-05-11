$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$mongoExe = 'C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe'
$nodeExe = 'C:\Program Files\nodejs\node.exe'
$dbDir = Join-Path $root '.mongo-data'

if (-not (Test-Path $dbDir)) {
    New-Item -ItemType Directory -Path $dbDir | Out-Null
}

$mongoListening = Test-NetConnection -ComputerName 127.0.0.1 -Port 27017 -WarningAction SilentlyContinue
if (-not $mongoListening.TcpTestSucceeded) {
    Start-Process -FilePath $mongoExe `
        -ArgumentList '--dbpath', $dbDir, '--bind_ip', '127.0.0.1', '--port', '27017' `
        -WorkingDirectory $root
    Start-Sleep -Seconds 3
}

Set-Location $root
& $nodeExe --openssl-legacy-provider --max-old-space-size=8192 app.js

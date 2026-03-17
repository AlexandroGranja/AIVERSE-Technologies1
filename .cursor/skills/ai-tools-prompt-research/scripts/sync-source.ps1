param(
    [string]$RepoUrl = "https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools.git",
    [string]$TargetPath = "content/system-prompts-and-models-of-ai-tools"
)

if (Test-Path $TargetPath) {
    Write-Host "Atualizando espelho local em $TargetPath..."
    git -C $TargetPath pull --ff-only
}
else {
    Write-Host "Clonando repositório em $TargetPath..."
    git clone --depth 1 $RepoUrl $TargetPath
}

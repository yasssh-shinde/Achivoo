# File Cleanup Script for VSS Website
# Run this to remove duplicate and temporary files

Write-Host "VSS Website - File Cleanup Script" -ForegroundColor Cyan
Write-Host "==================================`n" -ForegroundColor Cyan

$rootPath = "c:\Users\Yash\Achivoo"
$filesToDelete = @(
    "5-landing-page-tweaks-to-double-conversions.html",
    "yash-sh.html",
    "png_list.txt",
    "server.log"
)

Write-Host "Files to be deleted:" -ForegroundColor Yellow
foreach ($file in $filesToDelete) {
    $fullPath = Join-Path $rootPath $file
    if (Test-Path $fullPath) {
        Write-Host "  ✓ $file (exists)" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file (not found)" -ForegroundColor Gray
    }
}

Write-Host "`nDo you want to proceed with deletion? (Y/N): " -ForegroundColor Yellow -NoNewline
$confirmation = Read-Host

if ($confirmation -eq 'Y' -or $confirmation -eq 'y') {
    Write-Host "`nDeleting files..." -ForegroundColor Cyan
    
    foreach ($file in $filesToDelete) {
        $fullPath = Join-Path $rootPath $file
        if (Test-Path $fullPath) {
            try {
                Remove-Item $fullPath -Force
                Write-Host "  ✓ Deleted: $file" -ForegroundColor Green
            } catch {
                Write-Host "  ✗ Failed to delete: $file" -ForegroundColor Red
                Write-Host "    Error: $_" -ForegroundColor Red
            }
        }
    }
    
    Write-Host "`n✅ Cleanup complete!" -ForegroundColor Green
} else {
    Write-Host "`n❌ Cleanup cancelled." -ForegroundColor Yellow
}

Write-Host "`nPress any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

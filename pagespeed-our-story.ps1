# PageSpeed Insights Test for Our Story Page
# Run this script after waiting for rate limit to reset (wait 2-3 hours from last attempt)

Write-Host "Fetching Mobile PageSpeed Insights for /our-story page..." -ForegroundColor Cyan

try {
    $url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://downright-plumbing.vercel.app/our-story&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO&strategy=MOBILE"
    $data = Invoke-RestMethod -Uri $url
    $data | ConvertTo-Json -Depth 100 | Out-File "our-story-mobile-results.json" -Encoding UTF8
    Write-Host "✓ Results saved to our-story-mobile-results.json" -ForegroundColor Green
    
    # Extract and display scores
    Write-Host "`n=== PAGESPEED INSIGHTS SCORES ===" -ForegroundColor Yellow
    Write-Host "Performance: $([math]::Round($data.lighthouseResult.categories.performance.score * 100))" -ForegroundColor White
    Write-Host "Accessibility: $([math]::Round($data.lighthouseResult.categories.accessibility.score * 100))" -ForegroundColor White
    Write-Host "Best Practices: $([math]::Round($data.lighthouseResult.categories.'best-practices'.score * 100))" -ForegroundColor White
    Write-Host "SEO: $([math]::Round($data.lighthouseResult.categories.seo.score * 100))" -ForegroundColor White
    
    # Display key metrics
    Write-Host "`n=== CORE WEB VITALS & KEY METRICS ===" -ForegroundColor Yellow
    $audits = $data.lighthouseResult.audits
    
    if ($audits.'largest-contentful-paint') {
        $lcpValue = $audits.'largest-contentful-paint'.displayValue
        $lcpScore = $audits.'largest-contentful-paint'.score
        $lcpColor = if ($lcpScore -ge 0.9) { "Green" } elseif ($lcpScore -ge 0.5) { "Yellow" } else { "Red" }
        Write-Host "LCP (Largest Contentful Paint): $lcpValue" -ForegroundColor $lcpColor
    }
    
    if ($audits.'first-contentful-paint') {
        $fcpValue = $audits.'first-contentful-paint'.displayValue
        $fcpScore = $audits.'first-contentful-paint'.score
        $fcpColor = if ($fcpScore -ge 0.9) { "Green" } elseif ($fcpScore -ge 0.5) { "Yellow" } else { "Red" }
        Write-Host "FCP (First Contentful Paint): $fcpValue" -ForegroundColor $fcpColor
    }
    
    if ($audits.'total-blocking-time') {
        $tbtValue = $audits.'total-blocking-time'.displayValue
        $tbtScore = $audits.'total-blocking-time'.score
        $tbtColor = if ($tbtScore -ge 0.9) { "Green" } elseif ($tbtScore -ge 0.5) { "Yellow" } else { "Red" }
        Write-Host "TBT (Total Blocking Time): $tbtValue" -ForegroundColor $tbtColor
    }
    
    if ($audits.'cumulative-layout-shift') {
        $clsValue = $audits.'cumulative-layout-shift'.displayValue
        $clsScore = $audits.'cumulative-layout-shift'.score
        $clsColor = if ($clsScore -ge 0.9) { "Green" } elseif ($clsScore -ge 0.5) { "Yellow" } else { "Red" }
        Write-Host "CLS (Cumulative Layout Shift): $clsValue" -ForegroundColor $clsColor
    }
    
    if ($audits.'speed-index') {
        $siValue = $audits.'speed-index'.displayValue
        $siScore = $audits.'speed-index'.score
        $siColor = if ($siScore -ge 0.9) { "Green" } elseif ($siScore -ge 0.5) { "Yellow" } else { "Red" }
        Write-Host "Speed Index: $siValue" -ForegroundColor $siColor
    }
    
    if ($audits.'interactive') {
        Write-Host "Time to Interactive: $($audits.'interactive'.displayValue)" -ForegroundColor White
    }
    
    # Display opportunities (performance improvements)
    Write-Host "`n=== PERFORMANCE OPPORTUNITIES ===" -ForegroundColor Yellow
    $opportunities = $audits.PSObject.Properties | Where-Object { 
        $_.Value.score -ne $null -and 
        $_.Value.score -lt 0.9 -and 
        $_.Value.details.type -eq 'opportunity' -and
        $_.Value.numericValue -gt 0
    } | Sort-Object { $_.Value.numericValue } -Descending
    
    if ($opportunities.Count -eq 0) {
        Write-Host "  No major opportunities found!" -ForegroundColor Green
    } else {
        foreach ($opp in $opportunities) {
            $savings = if ($opp.Value.displayValue) { " - Potential savings: $($opp.Value.displayValue)" } else { "" }
            $color = if ($opp.Value.score -lt 0.5) { "Red" } else { "Yellow" }
            Write-Host "  • $($opp.Value.title)$savings" -ForegroundColor $color
            if ($opp.Value.description) {
                Write-Host "    $($opp.Value.description)" -ForegroundColor Gray
            }
        }
    }
    
    # Display diagnostics (issues that don't have savings estimates)
    Write-Host "`n=== DIAGNOSTICS ===" -ForegroundColor Yellow
    $diagnostics = $audits.PSObject.Properties | Where-Object { 
        $_.Value.score -ne $null -and 
        $_.Value.score -lt 0.9 -and 
        $_.Value.details.type -eq 'table' -and
        $_.Name -notmatch 'opportunity'
    } | Select-Object -First 10
    
    if ($diagnostics.Count -eq 0) {
        Write-Host "  No major diagnostic issues found!" -ForegroundColor Green
    } else {
        foreach ($diag in $diagnostics) {
            $color = if ($diag.Value.score -lt 0.5) { "Red" } else { "Yellow" }
            Write-Host "  • $($diag.Value.title)" -ForegroundColor $color
        }
    }
    
    # Display accessibility issues
    Write-Host "`n=== ACCESSIBILITY ISSUES ===" -ForegroundColor Yellow
    $a11yIssues = $audits.PSObject.Properties | Where-Object { 
        $_.Value.score -ne $null -and 
        $_.Value.score -lt 1 -and 
        ($_.Name -match 'aria|color-contrast|image-alt|label|heading|link-name|button-name|input|tabindex|landmark|list|meta-viewport|document-title|html-has-lang|valid-lang|duplicate-id' -or
         $_.Value.id -match 'accessibility')
    }
    
    if ($a11yIssues.Count -eq 0) {
        Write-Host "  No accessibility issues found!" -ForegroundColor Green
    } else {
        foreach ($issue in $a11yIssues) {
            $color = if ($issue.Value.score -eq 0) { "Red" } else { "Yellow" }
            Write-Host "  • $($issue.Value.title)" -ForegroundColor $color
            if ($issue.Value.description) {
                Write-Host "    $($issue.Value.description)" -ForegroundColor Gray
            }
        }
    }
    
    # Display SEO issues
    Write-Host "`n=== SEO ISSUES ===" -ForegroundColor Yellow
    $seoIssues = $audits.PSObject.Properties | Where-Object { 
        $_.Value.score -ne $null -and 
        $_.Value.score -lt 1 -and 
        ($_.Name -match 'meta-description|document-title|link-text|crawlable|robots-txt|hreflang|canonical|structured-data|font-size|tap-targets|viewport' -or
         $_.Value.id -match 'seo')
    }
    
    if ($seoIssues.Count -eq 0) {
        Write-Host "  No SEO issues found!" -ForegroundColor Green
    } else {
        foreach ($issue in $seoIssues) {
            $color = if ($issue.Value.score -eq 0) { "Red" } else { "Yellow" }
            Write-Host "  • $($issue.Value.title)" -ForegroundColor $color
            if ($issue.Value.description) {
                Write-Host "    $($issue.Value.description)" -ForegroundColor Gray
            }
        }
    }
    
    # Display Best Practices issues
    Write-Host "`n=== BEST PRACTICES ISSUES ===" -ForegroundColor Yellow
    $bpIssues = $audits.PSObject.Properties | Where-Object { 
        $_.Value.score -ne $null -and 
        $_.Value.score -lt 1 -and 
        ($_.Name -match 'errors-in-console|image-aspect-ratio|image-size-responsive|doctype|charset|no-vulnerable-libraries|csp|https|geolocation-on-start|notification-on-start|paste-preventing-inputs' -or
         $_.Value.id -match 'best-practices')
    }
    
    if ($bpIssues.Count -eq 0) {
        Write-Host "  No best practices issues found!" -ForegroundColor Green
    } else {
        foreach ($issue in $bpIssues) {
            $color = if ($issue.Value.score -eq 0) { "Red" } else { "Yellow" }
            Write-Host "  • $($issue.Value.title)" -ForegroundColor $color
        }
    }
    
    Write-Host "`n=== SUMMARY ===" -ForegroundColor Cyan
    Write-Host "Full detailed results saved to: our-story-mobile-results.json" -ForegroundColor White
    Write-Host "You can view the JSON file for complete details of all audits." -ForegroundColor White
    
} catch {
    Write-Host "Error fetching results: $_" -ForegroundColor Red
    if ($_.Exception.Message -match "429") {
        Write-Host "`nYou are being rate-limited by Google's API." -ForegroundColor Yellow
        Write-Host "Please wait 2-3 hours and try again, OR" -ForegroundColor Yellow
        Write-Host "Visit https://pagespeed.web.dev/ manually in your browser." -ForegroundColor Yellow
    }
}

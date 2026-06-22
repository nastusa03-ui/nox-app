cat > NOX.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NOX — Harness Your Darkness</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
HTMLEOF
cat css/style.css >> NOX.html
cat >> NOX.html << 'HTMLEOF'
</style>
</head>
<body>
HTMLEOF
sed -n '/<body>/,/<\/body>/p' index.html | sed '1d;$d' >> NOX.html
cat >> NOX.html << 'HTMLEOF'
<script>
HTMLEOF
cat js/app.js >> NOX.html
echo "" >> NOX.html
cat js/games.js >> NOX.html
echo "" >> NOX.html
cat js/blockchain.js >> NOX.html
cat >> NOX.html << 'HTMLEOF'
</script>
</body>
</html>
HTMLEOF
echo "NOX.html built: $(wc -c < NOX.html) bytes"

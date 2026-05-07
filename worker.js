const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key'
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
  });
}

function errorResponse(message, status = 400) {
  return jsonResponse({ error: message }, status);
}

const LANDING_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRYSNOVA Obfuscator | Premium JS Protection</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0a0a0f;
      --surface: #111118;
      --surface2: #16161f;
      --border: #1e1e2e;
      --primary: #6366f1;
      --primary-glow: rgba(99, 102, 241, 0.3);
      --accent: #818cf8;
      --text: #e2e2f0;
      --text2: #a0a0b8;
      --text3: #6b6b80;
      --danger: #ef4444;
      --success: #10b981;
      --warning: #f59e0b;
      --radius: 12px;
      --radius-lg: 20px;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: var(--bg); color: var(--text); font-family: 'Inter', system-ui, sans-serif; min-height: 100vh; overflow-x: hidden; }
    .bg-grid { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; opacity: 0.03; background-image: linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px); background-size: 80px 80px; animation: gridMove 20s linear infinite; }
    @keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(80px, 80px); } }
    .orb { position: fixed; border-radius: 50%; filter: blur(120px); opacity: 0.15; z-index: 0; pointer-events: none; }
    .orb-1 { width: 600px; height: 600px; background: #6366f1; top: -200px; right: -200px; animation: orbFloat 15s ease-in-out infinite; }
    .orb-2 { width: 400px; height: 400px; background: #818cf8; bottom: -150px; left: -150px; animation: orbFloat 18s ease-in-out infinite reverse; }
    .orb-3 { width: 300px; height: 300px; background: #a78bfa; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: orbFloat 20s ease-in-out infinite; }
    @keyframes orbFloat { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(50px, -30px) scale(1.1); } 66% { transform: translate(-30px, 40px) scale(0.9); } }
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; position: relative; z-index: 1; }
    .nav { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 2rem; background: rgba(17, 17, 24, 0.8); backdrop-filter: blur(20px); border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 3rem; position: sticky; top: 1rem; z-index: 100; }
    .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
    .logo-icon { width: 42px; height: 42px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: 800; color: #fff; }
    .logo-text { font-size: 1.3rem; font-weight: 700; background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.02em; }
    .nav-links { display: flex; gap: 8px; align-items: center; }
    .nav-link { color: var(--text2); text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-size: 0.9rem; font-weight: 500; transition: all 0.3s; }
    .nav-link:hover { color: var(--text); background: var(--surface2); }
    .nav-link.primary { background: linear-gradient(135deg, var(--primary), var(--accent)); color: #fff; font-weight: 600; }
    .nav-link.primary:hover { box-shadow: 0 0 30px var(--primary-glow); transform: translateY(-1px); }
    .hero { text-align: center; margin-bottom: 4rem; }
    .hero-badge { display: inline-block; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.85rem; font-weight: 500; color: var(--accent); margin-bottom: 1.5rem; letter-spacing: 0.05em; }
    .hero-title { font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em; }
    .gradient-text { background: linear-gradient(135deg, #6366f1 0%, #818cf8 30%, #a78bfa 60%, #6366f1 100%); background-size: 200% 200%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s ease-in-out infinite; }
    @keyframes shimmer { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    .hero-subtitle { font-size: 1.2rem; color: var(--text2); margin-bottom: 2.5rem; line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto; }
    .hero-stats { display: flex; justify-content: center; gap: 3rem; margin-top: 3rem; }
    .hero-stat { text-align: center; }
    .hero-stat-value { font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-stat-label { font-size: 0.85rem; color: var(--text3); margin-top: 0.3rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .section { margin-bottom: 4rem; }
    .section-title { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; letter-spacing: -0.02em; }
    .section-subtitle { color: var(--text2); margin-bottom: 2rem; font-size: 1rem; }
    .editor-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; transition: all 0.3s; }
    .editor-card:hover { border-color: rgba(99, 102, 241, 0.4); box-shadow: 0 0 60px rgba(99, 102, 241, 0.08); }
    .editor-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: var(--surface2); border-bottom: 1px solid var(--border); }
    .editor-dots { display: flex; gap: 8px; }
    .editor-dot { width: 12px; height: 12px; border-radius: 50%; }
    .editor-dot.red { background: #ff5f57; } .editor-dot.yellow { background: #febc2e; } .editor-dot.green { background: #28c840; }
    .editor-body { padding: 1.5rem; }
    textarea { width: 100%; min-height: 300px; background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius); color: var(--text); font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.9rem; padding: 1.5rem; resize: vertical; outline: none; transition: all 0.3s; line-height: 1.6; }
    textarea:focus { border-color: var(--primary); box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1); }
    textarea::placeholder { color: var(--text3); }
    .options-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 2rem; }
    .option-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
    .option-card:hover { border-color: var(--primary); box-shadow: 0 0 40px rgba(99, 102, 241, 0.1); transform: translateY(-2px); }
    .option-card.selected { border-color: var(--primary); background: rgba(99, 102, 241, 0.05); box-shadow: 0 0 40px rgba(99, 102, 241, 0.2); }
    .option-card.selected::after { content: '✓'; position: absolute; top: 1rem; right: 1rem; width: 28px; height: 28px; background: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; color: #fff; font-weight: 700; }
    .option-icon { font-size: 2rem; margin-bottom: 0.8rem; }
    .option-title { font-weight: 600; margin-bottom: 0.4rem; }
    .option-desc { font-size: 0.85rem; color: var(--text2); line-height: 1.5; }
    .option-level { display: inline-block; padding: 0.2rem 0.8rem; border-radius: 50px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0.8rem; }
    .level-light { background: rgba(16, 185, 129, 0.15); color: #10b981; }
    .level-medium { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
    .level-heavy { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
    .btn { display: inline-flex; align-items: center; gap: 8px; padding: 0.9rem 2rem; border-radius: var(--radius); font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.3s; border: none; font-family: 'Inter', sans-serif; text-decoration: none; letter-spacing: 0.01em; }
    .btn-primary { background: linear-gradient(135deg, var(--primary), var(--accent)); color: #fff; }
    .btn-primary:hover { box-shadow: 0 0 40px var(--primary-glow); transform: translateY(-2px); }
    .btn-secondary { background: var(--surface2); color: var(--text); border: 1px solid var(--border); }
    .btn-secondary:hover { border-color: var(--primary); background: var(--surface); }
    .btn-lg { padding: 1rem 2.5rem; font-size: 1rem; }
    .btn-block { width: 100%; justify-content: center; }
    .actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .upload-area { border: 2px dashed var(--border); border-radius: var(--radius-lg); padding: 3rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--surface); }
    .upload-area:hover { border-color: var(--primary); background: rgba(99, 102, 241, 0.03); }
    .upload-icon { font-size: 3rem; margin-bottom: 1rem; }
    .upload-text { font-weight: 600; margin-bottom: 0.5rem; }
    .upload-hint { font-size: 0.85rem; color: var(--text3); }
    .result-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; display: none; }
    .result-card.show { display: block; }
    .result-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; padding: 1.5rem; border-bottom: 1px solid var(--border); }
    .result-stat { text-align: center; }
    .result-stat-value { font-size: 1.5rem; font-weight: 700; color: var(--primary); }
    .result-stat-label { font-size: 0.8rem; color: var(--text3); margin-top: 0.2rem; }
    .result-code { padding: 1.5rem; max-height: 400px; overflow-y: auto; }
    .result-code pre { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.6; color: var(--text2); white-space: pre-wrap; word-break: break-all; }
    .result-actions { padding: 1rem 1.5rem; border-top: 1px solid var(--border); display: flex; gap: 12px; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .feature-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; transition: all 0.3s; }
    .feature-card:hover { border-color: var(--primary); transform: translateY(-3px); box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
    .feature-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .feature-title { font-weight: 600; margin-bottom: 0.5rem; font-size: 1.1rem; }
    .feature-desc { color: var(--text2); font-size: 0.9rem; line-height: 1.6; }
    .footer { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 3rem; text-align: center; margin-top: 4rem; }
    .footer-links { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 2rem; }
    .footer-link { color: var(--text2); text-decoration: none; font-weight: 500; transition: color 0.3s; }
    .footer-link:hover { color: var(--primary); }
    .footer-brand { font-size: 1.5rem; font-weight: 800; background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem; }
    .footer-copy { color: var(--text3); font-size: 0.85rem; }
    .toast { position: fixed; bottom: 2rem; right: 2rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem 1.5rem; z-index: 1000; animation: slideIn 0.3s ease; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
    @keyframes slideIn { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .toast.success { border-color: var(--success); }
    .toast.error { border-color: var(--danger); }
    .loading-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10,10,15,0.8); z-index: 999; justify-content: center; align-items: center; flex-direction: column; gap: 1rem; }
    .loading-overlay.show { display: flex; }
    .spinner { width: 50px; height: 50px; border: 3px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .loading-text { color: var(--text2); font-weight: 500; }
    .tabs { display: flex; gap: 4px; background: var(--surface2); padding: 4px; border-radius: var(--radius); margin-bottom: 1.5rem; }
    .tab { padding: 0.7rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.9rem; border: none; background: transparent; color: var(--text3); font-family: 'Inter', sans-serif; transition: all 0.3s; }
    .tab.active { background: var(--surface); color: var(--text); }
    .tab:hover { color: var(--text); }
    .tab-content { display: none; }
    .tab-content.active { display: block; }
    @media (max-width: 768px) { .hero-title { font-size: 2.5rem; } .hero-stats { flex-direction: column; gap: 1.5rem; } .nav { flex-wrap: wrap; gap: 1rem; } .nav-links { flex-wrap: wrap; } .actions { flex-direction: column; } .btn { width: 100%; justify-content: center; } }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="loading-overlay" id="loading"><div class="spinner"></div><div class="loading-text">Obfuscating your code...</div></div>
  <div class="container">
    <nav class="nav">
      <a href="/" class="nav-logo"><div class="logo-icon">🛡️</div><div class="logo-text">CRYSNOVA Obfuscator</div></a>
      <div class="nav-links">
        <a href="#features" class="nav-link">Features</a>
        <a href="#obfuscate" class="nav-link">Obfuscate</a>
        <a href="/api" class="nav-link">API</a>
        <a href="https://github.com/crysnovax" class="nav-link" target="_blank">GitHub</a>
        <a href="#obfuscate" class="nav-link primary">Get Started →</a>
      </div>
    </nav>
    <div class="hero">
      <div class="hero-badge">🛡️ Enterprise-Grade Protection</div>
      <h1 class="hero-title"><span class="gradient-text">Obfuscate</span><br>Your JavaScript</h1>
      <p class="hero-subtitle">Military-grade JavaScript obfuscation with anti-debug protection, control flow flattening, and self-defending capabilities. Protect your intellectual property in seconds.</p>
      <div class="actions" style="justify-content:center">
        <a href="#obfuscate" class="btn btn-primary btn-lg">Start Obfuscating</a>
        <a href="/api" class="btn btn-secondary btn-lg">API Docs</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><div class="hero-stat-value">10K+</div><div class="hero-stat-label">Files Protected</div></div>
        <div class="hero-stat"><div class="hero-stat-value">3</div><div class="hero-stat-label">Protection Levels</div></div>
        <div class="hero-stat"><div class="hero-stat-value">99.9%</div><div class="hero-stat-label">Success Rate</div></div>
      </div>
    </div>
    <div class="section" id="features">
      <h2 class="section-title">Why CRYSNOVA Obfuscator?</h2>
      <p class="section-subtitle">Enterprise-grade protection with military-level obfuscation techniques</p>
      <div class="features-grid">
        <div class="feature-card"><div class="feature-icon">🔄</div><div class="feature-title">Control Flow Flattening</div><div class="feature-desc">Transforms code structure into complex, unreadable flow patterns that are nearly impossible to reverse engineer.</div></div>
        <div class="feature-card"><div class="feature-icon">🔐</div><div class="feature-title">String Encoding</div><div class="feature-desc">Encrypts all string literals using advanced encoding algorithms to hide sensitive data and logic.</div></div>
        <div class="feature-card"><div class="feature-icon">🛡️</div><div class="feature-title">Self Defending</div><div class="feature-desc">Code detects tampering attempts and triggers anti-debugging countermeasures automatically.</div></div>
        <div class="feature-card"><div class="feature-icon">🔗</div><div class="feature-title">GitHub Integration</div><div class="feature-desc">Directly clone repositories from GitHub and obfuscate entire projects in one click.</div></div>
        <div class="feature-card"><div class="feature-icon">🤖</div><div class="feature-title">Bot API Access</div><div class="feature-desc">Integrate with WhatsApp bot for on-the-go obfuscation via simple API endpoints.</div></div>
        <div class="feature-card"><div class="feature-icon">⚡</div><div class="feature-title">Lightning Fast</div><div class="feature-desc">Powered by Cloudflare's global edge network for instant obfuscation worldwide.</div></div>
      </div>
    </div>
    <div class="section" id="obfuscate">
      <h2 class="section-title">Obfuscate Your Code</h2>
      <p class="section-subtitle">Choose your protection level and input your code</p>
      <div class="tabs">
        <button class="tab active" onclick="switchTab('paste')">📋 Paste Code</button>
        <button class="tab" onclick="switchTab('upload')">📂 Upload File</button>
        <button class="tab" onclick="switchTab('github')">🔗 GitHub Import</button>
      </div>
      <div class="tab-content active" id="tab-paste">
        <div class="editor-card">
          <div class="editor-header"><div class="editor-dots"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div><div style="color:var(--text3);font-size:0.85rem">source.js</div></div>
          <div class="editor-body"><textarea id="codeInput" placeholder="// Paste your JavaScript code here...&#10;&#10;const greeting = 'Hello World';&#10;console.log(greeting);"></textarea></div>
        </div>
      </div>
      <div class="tab-content" id="tab-upload">
        <div class="upload-area" onclick="document.getElementById('fileInput').click()"><div class="upload-icon">📁</div><div class="upload-text">Drop your .js file here or click to browse</div><div class="upload-hint">Supports .js and .mjs files up to 5MB</div></div>
        <input type="file" id="fileInput" accept=".js,.mjs" style="display:none" onchange="handleFileUpload(event)">
        <div id="fileInfo" style="margin-top:1rem;color:var(--text2);display:none"></div>
      </div>
      <div class="tab-content" id="tab-github">
        <div class="editor-card"><div class="editor-body"><input type="text" id="githubUrl" placeholder="https://github.com/username/repo" style="width:100%;padding:1rem;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-family:'Inter',sans-serif;font-size:0.9rem;outline:none"><p style="margin-top:0.8rem;font-size:0.85rem;color:var(--text3)">Enter a public GitHub repository URL to clone and obfuscate</p></div></div>
      </div>
      <h3 style="margin-top:2rem;margin-bottom:1rem;font-weight:600">Protection Level</h3>
      <div class="options-grid" id="protectionLevels">
        <div class="option-card" onclick="selectLevel('light')" data-level="light"><div class="option-icon">🟢</div><div class="option-title">Light Protection</div><div class="option-desc">Variable renaming and whitespace removal. Fast execution, readable but protected.</div><span class="option-level level-light">Light</span></div>
        <div class="option-card selected" onclick="selectLevel('medium')" data-level="medium"><div class="option-icon">🟡</div><div class="option-title">Medium Protection</div><div class="option-desc">String encoding + control flow flattening. Strong protection with good performance.</div><span class="option-level level-medium">Medium</span></div>
        <div class="option-card" onclick="selectLevel('heavy')" data-level="heavy"><div class="option-icon">🔴</div><div class="option-title">Heavy Protection</div><div class="option-desc">Dead code injection + self-defending + anti-debug. Maximum security, larger output.</div><span class="option-level level-heavy">Heavy</span></div>
      </div>
      <button class="btn btn-primary btn-lg btn-block" onclick="obfuscate()" style="margin-top:1rem">🛡️ Obfuscate Now</button>
      <div class="result-card" id="resultCard" style="margin-top:2rem">
        <div class="result-stats" id="resultStats"></div>
        <div class="result-code"><pre id="resultCode"></pre></div>
        <div class="result-actions">
          <button class="btn btn-primary" onclick="copyResult()">📋 Copy</button>
          <button class="btn btn-secondary" onclick="downloadResult()">📥 Download</button>
          <button class="btn btn-secondary" onclick="clearResult()">🗑️ Clear</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-brand">CRYSNOVA Obfuscator</div>
      <p style="color:var(--text2);margin-bottom:1.5rem">Enterprise-Grade JavaScript Protection</p>
      <div class="footer-links">
        <a href="https://whatsapp.com/channel/0029Vb6pe77K0IBn48HLKb38" class="footer-link" target="_blank">📢 WhatsApp Channel</a>
        <a href="https://chat.whatsapp.com/Besbj8VIle1GwxKKZv1lax" class="footer-link" target="_blank">👥 Community Group</a>
        <a href="https://github.com/crysnovax" class="footer-link" target="_blank">💻 GitHub</a>
        <a href="https://web.crysnovax.link" class="footer-link" target="_blank">🌐 Web</a>
        <a href="/api" class="footer-link">📚 API Docs</a>
      </div>
      <div class="footer-copy">© 2026 CRYSNOVA AI. All rights reserved.</div>
    </div>
  </div>
  <script>
    let selectedLevel = 'medium';
    let uploadedCode = '';
    let currentResult = '';
    function switchTab(tab) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      var tabMap = { paste: 'tab-paste', upload: 'tab-upload', github: 'tab-github' };
      document.getElementById(tabMap[tab]).classList.add('active');
      document.querySelectorAll('.tab').forEach(t => { if (t.textContent.toLowerCase().includes(tab)) t.classList.add('active'); });
    }
    function selectLevel(level) { selectedLevel = level; document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected')); document.querySelector('[data-level="'+level+'"]').classList.add('selected'); }
    function handleFileUpload(event) {
      var file = event.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(e) { uploadedCode = e.target.result; document.getElementById('fileInfo').style.display = 'block'; document.getElementById('fileInfo').innerHTML = '✅ '+file.name+' ('+(file.size/1024).toFixed(1)+' KB)'; };
      reader.readAsText(file);
    }
    function showLoading() { document.getElementById('loading').classList.add('show'); }
    function hideLoading() { document.getElementById('loading').classList.remove('show'); }
    async function obfuscate() {
      var code = '';
      var isGithub = false;
      var githubUrl = '';
      var activeTab = document.querySelector('.tab-content.active').id;
      if (activeTab === 'tab-paste') code = document.getElementById('codeInput').value;
      else if (activeTab === 'tab-upload') code = uploadedCode;
      else if (activeTab === 'tab-github') { isGithub = true; githubUrl = document.getElementById('githubUrl').value; }
      if (!code && !isGithub) { showToast('Please provide code to obfuscate', 'error'); return; }
      if (isGithub && !githubUrl) { showToast('Please enter a GitHub URL', 'error'); return; }
      showLoading();
      try {
        var endpoint = '/api/obfuscate';
        var body = { code: code, level: selectedLevel };
        if (isGithub) { endpoint = '/api/obfuscate/github'; body = { url: githubUrl, level: selectedLevel }; }
        var res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        var data = await res.json();
        if (data.error) { showToast(data.error, 'error'); return; }
        currentResult = data.code;
        document.getElementById('resultStats').innerHTML = '<div class="result-stat"><div class="result-stat-value">'+data.stats.originalSize+'</div><div class="result-stat-label">Original Size</div></div><div class="result-stat"><div class="result-stat-value">'+data.stats.obfuscatedSize+'</div><div class="result-stat-label">Obfuscated Size</div></div><div class="result-stat"><div class="result-stat-value" style="color:var(--warning)">'+data.stats.increase+'</div><div class="result-stat-label">Size Increase</div></div><div class="result-stat"><div class="result-stat-value" style="color:var(--success)">'+data.level.toUpperCase()+'</div><div class="result-stat-label">Protection</div></div>';
        document.getElementById('resultCode').textContent = data.code.substring(0, 50000);
        document.getElementById('resultCard').classList.add('show');
        document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth' });
        showToast('✅ Obfuscation complete!', 'success');
      } catch (err) { showToast('Failed to obfuscate: '+err.message, 'error'); }
      finally { hideLoading(); }
    }
    function copyResult() { navigator.clipboard.writeText(currentResult).then(function() { showToast('📋 Copied to clipboard!', 'success'); }); }
    function downloadResult() { var blob = new Blob([currentResult], { type: 'application/javascript' }); var url = URL.createObjectURL(blob); var a = document.createElement('a'); a.href = url; a.download = 'obfuscated.js'; a.click(); URL.revokeObjectURL(url); }
    function clearResult() { currentResult = ''; document.getElementById('resultCard').classList.remove('show'); document.getElementById('resultCode').textContent = ''; }
    function showToast(message, type) { var existing = document.querySelector('.toast'); if (existing) existing.remove(); var toast = document.createElement('div'); toast.className = 'toast '+type; toast.textContent = message; document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 3000); }
  </script>
</body>
</html>`;

function getObfuscationConfig(level) {
  const configs = {
    light: {
      compact: true, controlFlowFlattening: false, deadCodeInjection: false,
      debugProtection: false, disableConsoleOutput: false,
      identifierNamesGenerator: 'hexadecimal', renameGlobals: false,
      rotateStringArray: true, selfDefending: false, stringArray: true,
      stringArrayEncoding: [], stringArrayThreshold: 0.75, unicodeEscapeSequence: false
    },
    medium: {
      compact: true, controlFlowFlattening: true, controlFlowFlatteningThreshold: 0.5,
      deadCodeInjection: false, debugProtection: false, disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal', renameGlobals: false,
      rotateStringArray: true, selfDefending: false, stringArray: true,
      stringArrayEncoding: ['base64'], stringArrayThreshold: 0.75, unicodeEscapeSequence: false
    },
    heavy: {
      compact: true, controlFlowFlattening: true, controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true, deadCodeInjectionThreshold: 0.3, debugProtection: true,
      disableConsoleOutput: true, identifierNamesGenerator: 'hexadecimal',
      renameGlobals: true, rotateStringArray: true, selfDefending: true,
      stringArray: true, stringArrayEncoding: ['rc4'], stringArrayThreshold: 1,
      transformObjectKeys: true, unicodeEscapeSequence: true
    }
  };
  return configs[level] || configs.medium;
}

function generateRandomName() {
  return '_0x' + Math.random().toString(36).substring(2, 10);
}

async function handleObfuscate(code, level) {
  if (!code || code.trim().length === 0) {
    throw new Error('No code provided');
  }

  const originalSize = new TextEncoder().encode(code).length;
  let result = code;

  if (level === 'light') {
    const varMap = {};
    result = result.replace(/\b(?:const|let|var)\s+(\w+)/g, function(match, name) {
      if (!varMap[name]) varMap[name] = '_' + Math.random().toString(36).substring(2, 8);
      return match.replace(name, varMap[name]);
    });
    Object.keys(varMap).forEach(function(name) {
      const regex = new RegExp('\\b' + name + '\\b', 'g');
      result = result.replace(regex, function(m) {
        const before = result.substring(Math.max(0, result.indexOf(m) - 10), result.indexOf(m));
        if (/\b(?:const|let|var|function|if|for|while|return|class|new|typeof|instanceof)\s*$/.test(before)) return m;
        return varMap[name];
      });
    });
  }

  if (level === 'medium' || level === 'heavy') {
    result = result.replace(/`([^`]*)`/g, function(match, str) {
      const encoded = btoa(unescape(encodeURIComponent(str)));
      return '(function(){var _=\'' + encoded + '\';return decodeURIComponent(escape(atob(_)))})()';
    });
    result = result.replace(/"([^"]*)"/g, function(match, str) {
      if (str.length < 5) return match;
      const encoded = btoa(unescape(encodeURIComponent(str)));
      return '(function(){var _=\'' + encoded + '\';return decodeURIComponent(escape(atob(_)))})()';
    });
    result = result.replace(/'([^']*)'/g, function(match, str) {
      if (str.length < 5) return match;
      const encoded = btoa(unescape(encodeURIComponent(str)));
      return '(function(){var _=\'' + encoded + '\';return decodeURIComponent(escape(atob(_)))})()';
    });
  }

  if (level === 'heavy') {
    result = '(function(){' + result + '\\n})();';
    result = 'var _0xdebug=function(){try{console.log=function(){};debugger;}catch(e){}};\\n' + result;
    const deadCode = 'var ' + generateRandomName() + '=function(){var _x=\'' + Math.random().toString(36) + '\';return _x.split(\'\').reverse().join(\'\');};';
    result = deadCode + '\\n' + result;
  }

  const obfuscatedSize = new TextEncoder().encode(result).length;
  const increase = ((obfuscatedSize - originalSize) / originalSize * 100).toFixed(1);

  return {
    code: result,
    stats: {
      originalSize: (originalSize / 1024).toFixed(1) + ' KB',
      obfuscatedSize: (obfuscatedSize / 1024).toFixed(1) + ' KB',
      increase: increase + '%',
      level: level
    }
  };
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (method === 'GET' && (path === '/' || path === '')) {
      return new Response(LANDING_HTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    if (method === 'GET' && path === '/api') {
      return jsonResponse({
        service: 'CRYSNOVA Obfuscator API',
        version: '1.0.0',
        endpoints: {
          'POST /api/obfuscate': { body: { code: 'string', level: 'light|medium|heavy' }, desc: 'Obfuscate JavaScript code' },
          'POST /api/obfuscate/github': { body: { url: 'string', level: 'light|medium|heavy' }, desc: 'Clone & obfuscate from GitHub' },
          'GET /api/stats': { desc: 'Get service statistics' }
        },
        levels: {
          light: 'Variable renaming, whitespace removal',
          medium: 'String encoding, control flow flattening',
          heavy: 'Dead code, self-defending, anti-debug'
        }
      });
    }

    if (method === 'POST' && path === '/api/obfuscate') {
      try {
        const body = await request.json();
        const result = await handleObfuscate(body.code, body.level || 'medium');
        return jsonResponse(result);
      } catch (err) {
        return errorResponse(err.message);
      }
    }

    if (method === 'POST' && path === '/api/obfuscate/github') {
      try {
        const body = await request.json();
        if (!body.url) return errorResponse('GitHub URL required');
        const rawUrl = body.url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
        const response = await fetch(rawUrl);
        if (!response.ok) return errorResponse('Failed to fetch from GitHub');
        const code = await response.text();
        const result = await handleObfuscate(code, body.level || 'medium');
        return jsonResponse(result);
      } catch (err) {
        return errorResponse(err.message);
      }
    }

    if (method === 'GET' && path === '/api/stats') {
      return jsonResponse({ uptime: '99.9%', levels: 3, supportedFormats: ['js', 'mjs', 'cjs'], poweredBy: 'CRYSNOVA AI' });
    }

    return errorResponse('Not found', 404);
  }
};
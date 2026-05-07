## OBF
Web obfuscator >> PROTECT YOUR SOURCE CODE 🏷️

## 🛡️ CRYSNOVA OBFUSCATOR API

**Base URL:** `https://obf.crysnovax.link`

Military-grade JavaScript obfuscation with anti-debug protection, control flow flattening, and self-defending capabilities.

---

### `POST /api/obfuscate`

Obfuscate JavaScript code.

**Request Body (JSON):**
```json
{
  "code": "const greeting = 'Hello World';\nconsole.log(greeting);",
  "level": "heavy"
}
```

| Field | Type | Required | Values |
|-------|------|----------|--------|
| `code` | string | ✅ | JavaScript source code |
| `level` | string | ❌ (default: `medium`) | `light`, `medium`, `heavy` |

**Protection Levels:**

| Level | Description |
|-------|-------------|
| 🟢 `light` | Variable renaming, whitespace removal |
| 🟡 `medium` | High obfuscation via external API |
| 🔴 `heavy` | Extreme obfuscation via external API |

**Success Response (200):**
```json
{
  "code": "(function(){var _='SGVsbG8gV29ybGQ=';return decodeURIComponent(escape(atob(_)))})();",
  "stats": {
    "originalSize": "0.1 KB",
    "obfuscatedSize": "0.3 KB",
    "increase": "200.0%",
    "level": "heavy"
  }
}
```

**Error Response (400):**
```json
{
  "error": "No code provided"
}
```

---

### `POST /api/obfuscate/github`

Clone and obfuscate from a GitHub file URL.

**Request Body (JSON):**
```json
{
  "url": "https://github.com/user/repo/blob/main/file.js",
  "level": "heavy"
}
```

---

### `GET /api`

Returns full API documentation.

### `GET /api/stats`

Returns service statistics.

---

### Examples

**cURL:**
```bash
curl -X POST https://obf.crysnovax.link/api/obfuscate \
  -H "Content-Type: application/json" \
  -d '{"code":"const x = 1 + 1;","level":"heavy"}'
```

**JavaScript (fetch):**
```js
const res = await fetch('https://obf.crysnovax.link/api/obfuscate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ code: 'const secret = "my-api-key";', level: 'heavy' })
});
const data = await res.json();
console.log(data.code);
```

**Node.js (axios):**
```js
const axios = require('axios');
const { data } = await axios.post('https://obf.crysnovax.link/api/obfuscate', {
  code: 'console.log("protect me");',
  level: 'heavy'
});
```

**Python:**
```python
import requests
r = requests.post('https://obf.crysnovax.link/api/obfuscate', json={
    'code': 'const apiKey = "secret";',
    'level': 'heavy'
})
print(r.json()['code'])
```

**WhatsApp Bot:**
```
.encryptcode heavy (reply to code or .js file)
```

---

**Rate Limits:** None currently. Use responsibly.  
**Powered by:** [CRYSNOVA AI](https://github.com/crysnovax) | [WhatsApp Channel](https://whatsapp.com/channel/0029Vb6pe77K0IBn48HLKb38) | [Web](https://web.crysnovax.link)



# Piano: Sostituzione Emoji con Icone Lucide + Effetto Neon

## Panoramica
Sostituirò tutte le emoji rimaste nel progetto con icone Lucide eleganti e aggiungerò l'effetto neon verde coerente con il resto dell'interfaccia.

---

## Emoji da sostituire

| Componente | Emoji | Icona Lucide |
|------------|-------|--------------|
| Header.tsx | 🔥 | `Flame` |
| InsightsBox.tsx | 💡 | `Lightbulb` |
| InsightsBox.tsx | 🎯 | `Target` |
| PrizeSection.tsx | 🏆 | `Trophy` |
| PrizeSection.tsx | 🥇🥈🥉 | `Medal` con colori oro/argento/bronzo |
| CountdownTimer.tsx | ⚠️ | `AlertTriangle` |
| CountdownTimer.tsx | 🏆 | `Trophy` |
| CountdownTimer.tsx | 💣 | `Timer` |
| BaitChart.tsx | 🎯 | `Target` |
| BaitChart.tsx | 🎣 | `Fish` |
| Index.tsx | 🎯 | `Target` |

---

## Modifiche per file

### 1. Header.tsx
**Riga 52**: `🔥 Pesca. Competi. Domina. 🔥`

Sostituirò con due icone `Flame` con effetto neon ai lati del testo.

### 2. InsightsBox.tsx
**Riga 7**: `💡 Pro Tip del Periodo`
**Riga 15**: `🎯 Consiglio:`

Aggiungerò icone `Lightbulb` e `Target` con neon glow inline.

### 3. PrizeSection.tsx
**Riga 28**: `🏆 Prossimo Premio`
**Riga 45**: `🥇 1° Classificato`, `🥈 2° Classificato`, `🥉 3° Classificato`

Userò `Trophy` per il premio e `Medal` con colori diversi per i badge (oro: `#FFD700`, argento: `#C0C0C0`, bronzo: `#CD7F32`).

### 4. CountdownTimer.tsx
**Riga 149**: `⚠️` / `💣` (stato compresso mobile)
**Riga 156**: `⚠️ ULTIMA ORA!` / `🏆 Prossimo Premio`

Sostituirò con `AlertTriangle`, `Timer`, e `Trophy` con effetto neon appropriato.

### 5. BaitChart.tsx
**Riga 60**: `🎯 Brand con più catture`
**Riga 70**: `🎣` (icona brand)

Userò `Target` e `Fish` con neon glow.

### 6. Index.tsx
**Riga 126**: `🎯 Pro Tips & Analytics`

Aggiungerò icona `Target` con effetto neon.

---

## Stile neon applicato

Tutte le icone avranno lo stesso effetto neon coerente:

```css
filter: drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) 
        drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))
```

Le icone per le medaglie avranno colori specifici:
- **Oro**: `#FFD700` con glow dorato
- **Argento**: `#C0C0C0` con glow argentato  
- **Bronzo**: `#CD7F32` con glow ramato

---

## Sezione tecnica

### Import necessari per ogni file:

```typescript
// Header.tsx
import { Flame } from 'lucide-react';

// InsightsBox.tsx
import { Lightbulb, Target } from 'lucide-react';

// PrizeSection.tsx
import { Trophy, Medal } from 'lucide-react';

// CountdownTimer.tsx
import { AlertTriangle, Timer, Trophy } from 'lucide-react';

// BaitChart.tsx
import { Target, Fish } from 'lucide-react';

// Index.tsx
import { Target } from 'lucide-react';
```

### Componente helper per icone inline

Creerò un pattern riutilizzabile per le icone inline con neon:

```tsx
<span 
  className="inline-flex items-center"
  style={{
    filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
  }}
>
  <IconName size={16} strokeWidth={1.5} style={{ color: '#00FF66' }} />
</span>
```

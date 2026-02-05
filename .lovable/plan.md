
# Piano: Animazione Hover sul Timer

## Panoramica
Aggiungerò animazioni eleganti al componente CountdownTimer che si attivano al passaggio del mouse (hover), rendendo l'interazione più dinamica e coinvolgente.

---

## Animazioni da aggiungere all'hover

| Effetto | Descrizione |
|---------|-------------|
| **Scale up** | Ingrandimento leggero (1.08x) |
| **Glow intensificato** | Box-shadow neon più forte |
| **Rotazione anello accelerata** | L'anello ruota più velocemente |
| **Spark più brillante** | La scintilla sulla miccia pulsa più intensamente |
| **Border più luminoso** | Bordo verde più acceso |

---

## Modifiche

### 1. CountdownTimer.tsx

Aggiungerò uno stato `isHovered` per tracciare il passaggio del mouse e applicare stili dinamici.

**Nuovo stato:**
```tsx
const [isHovered, setIsHovered] = useState(false);
```

**Eventi hover sul container:**
```tsx
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
```

**Stili hover applicati:**
- `transform: scale(1.08)` - ingrandimento
- Box-shadow intensificato con doppio glow neon
- Transizione fluida su tutti gli effetti

### 2. index.css

Aggiungerò una nuova keyframe animation per l'effetto hover:

```css
@keyframes timerHoverGlow {
  0%, 100% {
    box-shadow: 
      0 0 40px rgba(0, 255, 68, 0.7),
      0 0 80px rgba(0, 255, 68, 0.4);
  }
  50% {
    box-shadow: 
      0 0 60px rgba(0, 255, 68, 0.9),
      0 0 120px rgba(0, 255, 68, 0.5);
  }
}
```

---

## Risultato visivo

Quando l'utente passa il mouse sul timer:
1. Il timer si ingrandisce leggermente con una transizione fluida
2. Il bagliore neon verde si intensifica e pulsa
3. L'anello rotante accelera (da 10s a 3s)
4. La scintilla sulla miccia diventa più grande e brillante
5. Il bordo verde diventa più luminoso

---

## Sezione tecnica

### Stato hover

```tsx
const [isHovered, setIsHovered] = useState(false);
```

### Eventi sul container

```tsx
<div
  onClick={handleClick}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className={...}
  style={{
    ...
    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
    boxShadow: isHovered
      ? '0 0 50px rgba(0, 255, 68, 0.7), 0 0 100px rgba(0, 255, 68, 0.4), inset 0 0 30px rgba(0, 255, 68, 0.25)'
      : '0 0 20px rgba(0, 255, 68, 0.4), 0 0 40px rgba(0, 255, 68, 0.2), inset 0 0 15px rgba(0, 255, 68, 0.1)',
    border: isHovered ? '3px solid #00FF66' : '2px solid #00FF66',
  }}
>
```

### Anello rotante accelerato all'hover

```tsx
animation: isHovered 
  ? 'timerRotate 3s linear infinite' 
  : (isUrgent ? 'timerRotate 3s linear infinite' : 'timerRotate 10s linear infinite')
```

### Spark più intenso all'hover

```tsx
style={{
  width: isHovered || isUrgent ? 14 : 10,
  height: isHovered || isUrgent ? 14 : 10,
  boxShadow: isHovered || isUrgent 
    ? '0 0 25px #00FF66, 0 0 50px #00FF66, 0 0 75px #00FF44'
    : '0 0 15px #00FF66, 0 0 30px #00FF66'
}}
```

 // Atualiza ano automaticamente
    document.getElementById('year').textContent = new Date().getFullYear();

    // Alterna entre visual com bandeira e visual neutro para uso fora de junho
    const toggle = document.getElementById('toggleTheme');
    toggle.addEventListener('click', () => {
      const pressed = toggle.getAttribute('aria-pressed') === 'true';
      toggle.setAttribute('aria-pressed', String(!pressed));
      document.body.classList.toggle('neutral');
    });

    // Copia a declaração para reutilizar em outras páginas/rodapés
    const copyBtn = document.getElementById('copyText');
    copyBtn.addEventListener('click', async () => {
      const text = 'Nossa cafeteria valoriza o respeito e acolhimento a todas as pessoas, independentemente de gênero, orientação sexual, identidade ou expressão de gênero.';
      try{
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => copyBtn.textContent = 'Copiar declaração', 1600);
      } catch(e){
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => copyBtn.textContent = 'Copiar declaração', 1600);
      }
    });
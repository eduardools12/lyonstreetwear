/* =============================================
   VELOUR — Loja de Roupas
   script.js
   ============================================= */

'use strict';

// ─── CONFIGURAÇÃO ────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '5534999916990'; // ← Substitua pelo número real (DDI + DDD + número)

// ─── PRODUTOS ────────────────────────────────────────────────────────────────
const products = [
  // FEMININO
  {
    id: 1, code: 'VLR-F001',
    name: 'Camiseta Linho Suave',
    category: 'camisetas', gender: 'camisetas',
    price: 189, originalPrice: null,
    emoji: '👚',
    desc: 'Blusa em linho com caimento fluido, perfeita para dias quentes. Tecido respirável e textura natural que proporciona máximo conforto ao longo do dia.',
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    isNew: true, isPromo: false,
  },
  {
    id: 2, code: 'VLR-F002',
    name: 'Vestido Midi Floral',
    category: 'vestidos', gender: 'feminino',
    price: 259, originalPrice: 380,
    emoji: '👗',
    desc: 'Vestido midi com estampa floral exclusiva, abertura frontal e cinto incluso. Tecido leve e elegante, perfeito para ocasiões especiais e jantares.',
    sizes: ['PP', 'P', 'M', 'G'],
    isNew: false, isPromo: true,
  },
  {
    id: 3, code: 'VLR-F003',
    name: 'Calça Wide Leg Premium',
    category: 'calças', gender: 'feminino',
    price: 229, originalPrice: null,
    emoji: '👖',
    desc: 'Calça wide leg de alfaiataria com tecido de alta qualidade. Versatilidade e elegância para o ambiente corporativo e look casual de luxo.',
    sizes: ['36', '38', '40', '42', '44'],
    isNew: false, isPromo: false,
  },
  {
    id: 4, code: 'VLR-F004',
    name: 'Casaco Oversized Tweed',
    category: 'casacos', gender: 'feminino',
    price: 349, originalPrice: 490,
    emoji: '🧥',
    desc: 'Casaco oversized em tweed com botões dourados e forro interno. Uma peça atemporal que eleva qualquer look com sofisticação.',
    sizes: ['P', 'M', 'G'],
    isNew: false, isPromo: true,
  },
  {
    id: 5, code: 'VLR-F005',
    name: 'Top Cropped Cetim',
    category: 'camisetas', gender: 'feminino',
    price: 149, originalPrice: null,
    emoji: '👙',
    desc: 'Top cropped em cetim com alças finas e detalhe franzido na frente. Ideal para composições fashion com calça de alfaiataria ou saia midi.',
    sizes: ['PP', 'P', 'M', 'G'],
    isNew: true, isPromo: false,
  },
  {
    id: 6, code: 'VLR-F006',
    name: 'Saia Plissada Midi',
    category: 'vestidos', gender: 'feminino',
    price: 199, originalPrice: 280,
    emoji: '🩱',
    desc: 'Saia plissada com movimento fluido e cintura elástica confortável. Disponível em várias cores, perfeita para ocasiões do dia e da noite.',
    sizes: ['P', 'M', 'G', 'GG'],
    isNew: false, isPromo: true,
  },

  // MASCULINO
  {
    id: 7, code: 'VLR-M001',
    name: 'Camiseta Pima Cotton',
    category: 'camisetas', gender: 'masculino',
    price: 129, originalPrice: null,
    emoji: '👕',
    desc: 'Camiseta de algodão Pima com corte slim e costura reforçada. Tecido macio ao toque com durabilidade superior e toque premium.',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    isNew: true, isPromo: false,
  },
  {
    id: 8, code: 'VLR-M002',
    name: 'Calça Chino Slim Fit',
    category: 'calças', gender: 'masculino',
    price: 219, originalPrice: 310,
    emoji: '👖',
    desc: 'Calça chino slim fit com acabamento refinado e tecido stretch para maior mobilidade. Versátil para ambientes formais e looks casuais.',
    sizes: ['38', '40', '42', '44', '46'],
    isNew: false, isPromo: true,
  },
  {
    id: 9, code: 'VLR-M003',
    name: 'Camisa Linho Oxford',
    category: 'camisetas', gender: 'masculino',
    price: 189, originalPrice: null,
    emoji: '👔',
    desc: 'Camisa de linho no estilo oxford com botões perolados e acabamento impecável. Leveza e frescor garantidos para o dia a dia.',
    sizes: ['P', 'M', 'G', 'GG'],
    isNew: false, isPromo: false,
  },
  {
    id: 10, code: 'VLR-M004',
    name: 'Jaqueta Jeans Vintage',
    category: 'casacos', gender: 'masculino',
    price: 299, originalPrice: 420,
    emoji: '🧥',
    desc: 'Jaqueta jeans lavagem vintage com detalhes desgastados autênticos. Um clássico reinventado para o guarda-roupa masculino moderno.',
    sizes: ['P', 'M', 'G', 'GG'],
    isNew: false, isPromo: true,
  },
  {
    id: 11, code: 'VLR-M005',
    name: 'Bermuda Linho Italiano',
    category: 'calças', gender: 'masculino',
    price: 169, originalPrice: null,
    emoji: '🩳',
    desc: 'Bermuda em linho italiano com bolsos funcionais e cintura ajustável. Conforto máximo e estilo para os dias de calor.',
    sizes: ['38', '40', '42', '44', '46'],
    isNew: true, isPromo: false,
  },
  {
    id: 12, code: 'VLR-M006',
    name: 'Moletom Fleece Premium',
    category: 'casacos', gender: 'masculino',
    price: 239, originalPrice: 320,
    emoji: '🧣',
    desc: 'Moletom oversized em fleece premium com capuz e bolso canguru. Máximo conforto e estilo para os dias mais frios do ano.',
    sizes: ['M', 'G', 'GG', 'XG'],
    isNew: false, isPromo: true,
  },

  // ACESSÓRIOS
  {
    id: 13, code: 'VLR-A001',
    name: 'Cinto Couro Artesanal',
    category: 'acessórios', gender: 'acessorios',
    price: 139, originalPrice: null,
    emoji: '🪢',
    desc: 'Cinto em couro legítimo artesanal com fivela dourada. Cada peça é feita à mão pelos melhores artesãos, garantindo unicidade e qualidade.',
    sizes: ['Único'],
    isNew: false, isPromo: false,
  },
  {
    id: 14, code: 'VLR-A002',
    name: 'Bolsa Tote Canvas',
    category: 'acessórios', gender: 'acessorios',
    price: 179, originalPrice: 250,
    emoji: '👜',
    desc: 'Bolsa tote em canvas resistente com alças reforçadas de couro. Espaçosa e elegante para o uso diário, com bolso interno organizado.',
    sizes: ['Único'],
    isNew: false, isPromo: true,
  },
  {
    id: 15, code: 'VLR-A003',
    name: 'Boné Aba Curva',
    category: 'acessórios', gender: 'acessorios',
    price: 89, originalPrice: null,
    emoji: '🧢',
    desc: 'Boné de aba curva em algodão premium com bordado frontal exclusivo. Ajustável e extremamente confortável para o uso diário.',
    sizes: ['Único'],
    isNew: true, isPromo: false,
  },
  {
    id: 16, code: 'VLR-A004',
    name: 'Lenço Seda Italiana',
    category: 'acessórios', gender: 'acessorios',
    price: 119, originalPrice: 180,
    emoji: '🧣',
    desc: 'Lenço em seda italiana com estampa exclusiva e borda trabalhada. Extremamente versátil: use no pescoço, como lenço de bolso ou nos cabelos.',
    sizes: ['Único'],
    isNew: false, isPromo: true,
  },
];

// ─── ESTADO ──────────────────────────────────────────────────────────────────
let state = {
  section:      'all',
  category:     'all',
  maxPrice:     600,
  sort:         'default',
  selectedId:   null,
  cartCount:    0,
};

// ─── UTILITÁRIOS ─────────────────────────────────────────────────────────────

/**
 * Calcula o percentual de desconto de um produto.
 * @param {number} price
 * @param {number} originalPrice
 * @returns {number}
 */
function discountPct(price, originalPrice) {
  return Math.round((1 - price / originalPrice) * 100);
}

/**
 * Formata valor para BRL sem casas decimais quando inteiro.
 * @param {number} value
 * @returns {string}
 */
function formatBRL(value) {
  return `R$ ${value.toLocaleString('pt-BR')}`;
}

/**
 * Filtra a lista de produtos conforme o estado global.
 * @param {Function} sectionFilter
 * @returns {Array}
 */
function getFiltered(sectionFilter) {
  let list = products.filter(p => {
    const catOk   = state.category === 'all' || p.category === state.category;
    const priceOk = p.price <= state.maxPrice;
    return sectionFilter(p) && catOk && priceOk;
  });

  if (state.sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'discount')   list.sort((a, b) => {
    const da = a.originalPrice ? discountPct(a.price, a.originalPrice) : 0;
    const db = b.originalPrice ? discountPct(b.price, b.originalPrice) : 0;
    return db - da;
  });

  return list;
}

// ─── RENDERIZAÇÃO ─────────────────────────────────────────────────────────────

/**
 * Gera o HTML de um card de produto.
 * @param {Object} p - Produto
 * @returns {string}
 */
function cardHTML(p) {
  const pct = p.originalPrice ? discountPct(p.price, p.originalPrice) : 0;

  const badge = p.isPromo
    ? `<span class="badge-promo">-${pct}%</span>`
    : p.isNew
      ? `<span class="badge-new">Novo</span>`
      : '';

  const pricesHTML = p.originalPrice
    ? `<span class="price-now">${formatBRL(p.price)}</span>
       <span class="price-was">${formatBRL(p.originalPrice)}</span>
       <span class="price-off">-${pct}%</span>`
    : `<span class="price-now">${formatBRL(p.price)}</span>`;

  return `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="product-card" tabindex="0" role="button"
           aria-label="Ver detalhes de ${p.name}"
           onclick="openModal(${p.id})"
           onkeydown="if(event.key==='Enter')openModal(${p.id})">
        <div class="product-thumb">
          ${p.emoji}
          ${badge}
          <div class="badge-wishlist" title="Favoritar" onclick="event.stopPropagation()">
            <i class="bi bi-heart"></i>
          </div>
        </div>
        <div class="product-body">
          <div class="product-cat-tag">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-prices">${pricesHTML}</div>
        </div>
      </div>
    </div>`;
}

/**
 * Renderiza um grid de produtos em um container.
 * @param {string} gridId
 * @param {Array} items
 * @param {string} countId
 */
function renderGrid(gridId, items, countId) {
  const grid  = document.getElementById(gridId);
  const count = document.getElementById(countId);

  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="no-results">
          <span class="no-icon">🔍</span>
          <p>Nenhuma peça encontrada com estes filtros.</p>
        </div>
      </div>`;
  } else {
    grid.innerHTML = items.map(cardHTML).join('');
  }

  if (count) {
    count.textContent = items.length > 0
      ? `${items.length} peça${items.length !== 1 ? 's' : ''} encontrada${items.length !== 1 ? 's' : ''}`
      : '';
  }
}

/**
 * Re-renderiza todos os grids com base no estado atual.
 */
function renderAll() {
  renderGrid('all-grid',        getFiltered(() => true),                    'all-count');
  renderGrid('feminino-grid',   getFiltered(p => p.gender === 'feminino'),  'feminino-count');
  renderGrid('masculino-grid',  getFiltered(p => p.gender === 'masculino'), 'masculino-count');
  renderGrid('acessorios-grid', getFiltered(p => p.gender === 'acessorios'),'acessorios-count');
  renderGrid('promo-grid',      getFiltered(p => p.isPromo),                'promo-count');
}

// ─── NAVEGAÇÃO POR ABAS ──────────────────────────────────────────────────────

/**
 * Exibe a seção escolhida e atualiza estado.
 * @param {string} section
 */
function showSection(section) {
  state.section = section;

  // Sections
  document.querySelectorAll('.store-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`${section}-section`);
  if (target) target.classList.add('active');

  // Tabs
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });

  // Hero só aparece na aba "Tudo"
  const heroArea = document.getElementById('heroArea');
  if (heroArea) heroArea.style.display = section === 'all' ? '' : 'none';

  // Scroll para topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── FILTROS ─────────────────────────────────────────────────────────────────

/**
 * Atualiza o filtro de categoria.
 * @param {string} cat
 * @param {HTMLElement} btn
 */
function filterCategory(cat, btn) {
  state.category = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAll();
}

/**
 * Atualiza o filtro de preço.
 * @param {HTMLInputElement} input
 */
function filterPrice(input) {
  state.maxPrice = parseInt(input.value);
  const pct = ((state.maxPrice - 50) / (600 - 50)) * 100;
  input.style.setProperty('--pct', `${pct}%`);
  document.getElementById('priceDisplay').textContent = `até ${formatBRL(state.maxPrice)}`;
  renderAll();
}

/**
 * Atualiza a ordenação.
 * @param {string} value
 */
function sortProducts(value) {
  state.sort = value;
  renderAll();
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

/**
 * Abre o modal de detalhe de um produto.
 * @param {number} id
 */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  state.selectedId = id;

  const pct = p.originalPrice ? discountPct(p.price, p.originalPrice) : 0;

  // Imagem / emoji
  const imgEl = document.getElementById('modalImg');
  imgEl.innerHTML = p.emoji;
  if (p.isPromo) {
    imgEl.innerHTML += `<span class="badge-promo" style="top:14px;left:14px;position:absolute">-${pct}%</span>`;
  } else if (p.isNew) {
    imgEl.innerHTML += `<span class="badge-new" style="top:14px;left:14px;position:absolute">Novo</span>`;
  }

  // Textos
  document.getElementById('modalCat').textContent  = `${p.category.toUpperCase()} · ${p.gender.toUpperCase()}`;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalCode').textContent = p.code;
  document.getElementById('modalDesc').textContent = p.desc;

  // Preços
  const pricesEl = document.getElementById('modalPrices');
  if (p.originalPrice) {
    pricesEl.innerHTML = `
      <span class="modal-price-now">${formatBRL(p.price)}</span>
      <span class="modal-price-was">${formatBRL(p.originalPrice)}</span>
      <span class="price-off">-${pct}%</span>`;
  } else {
    pricesEl.innerHTML = `<span class="modal-price-now">${formatBRL(p.price)}</span>`;
  }

  // Tamanhos
  const sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = p.sizes.map((s, i) => `
    <button class="size-opt${i === 0 ? ' active' : ''}"
            onclick="selectSize(this)">${s}</button>
  `).join('');

  // Link WhatsApp
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no produto:\n*${p.name}*\nCódigo: ${p.code}\nPreço: ${formatBRL(p.price)}\n\nPoderia me dar mais informações?`
  );
  document.getElementById('whatsappLink').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  // Reset botão copiar
  const copyBtn = document.getElementById('copyCodeBtn');
  copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
  copyBtn.classList.remove('copied');

  // Abrir modal Bootstrap
  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('productModal'));
  modal.show();
}

/**
 * Seleciona um tamanho no modal.
 * @param {HTMLElement} btn
 */
function selectSize(btn) {
  document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/**
 * Copia o código do produto para a área de transferência.
 */
function copyCode() {
  const p = products.find(x => x.id === state.selectedId);
  if (!p) return;

  navigator.clipboard.writeText(p.code).then(() => {
    const copyBtn = document.getElementById('copyCodeBtn');
    copyBtn.innerHTML = '<i class="bi bi-clipboard-check"></i>';
    copyBtn.classList.add('copied');

    // Toast
    const toastEl = document.getElementById('copyToast');
    const toast   = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2500 });
    toast.show();

    setTimeout(() => {
      copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
      copyBtn.classList.remove('copied');
    }, 3000);
  }).catch(() => {
    // Fallback para browsers sem clipboard API
    const ta = document.createElement('textarea');
    ta.value = p.code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

// ─── ANIMAÇÃO DE ENTRADA ─────────────────────────────────────────────────────

/**
 * Aplica animação de entrada nos elementos com [data-animate].
 */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ─── NAVBAR SCROLL ────────────────────────────────────────────────────────────

/**
 * Adiciona classe ao navbar quando a página é rolada.
 */
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(22,18,14,0.35)'
      : 'none';
  }, { passive: true });
}

// ─── INICIALIZAÇÃO ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Tabs de seção
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // Filtros de categoria
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => filterCategory(btn.dataset.cat, btn));
  });

  // Slider de preço
  const priceRange = document.getElementById('priceRange');
  priceRange.style.setProperty('--pct', '100%');
  priceRange.addEventListener('input', () => filterPrice(priceRange));

  // Ordenação
  document.getElementById('sortSelect').addEventListener('change', function () {
    sortProducts(this.value);
  });

  // Botão copiar código
  document.getElementById('copyCodeBtn').addEventListener('click', copyCode);

  // Render inicial
  renderAll();
  initAnimations();
  initNavbarScroll();
});

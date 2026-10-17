document.addEventListener('DOMContentLoaded', () => {
  const asset = '../img/Gridcard/';
  const cars = {
    onixplus: ['Onix Plus', 'Onix Plus/onix-plus-premiere-sedan.png', 'R$ 106.790', '82 cv', 'Manual de 6 marchas', '1.0 Flex'],
    onix: ['Onix', 'Onix Hatch/onix-premiere-azul-hatch.png', 'R$ 99.990', '82 cv', 'Manual de 6 marchas', '1.0 Flex'],
    montana: ['Montana', 'Montana/flyout-montana.png', 'R$ 141.590', '133 cv', 'Manual de 6 marchas', '1.2 Turbo Flex'],
    s10: ['S10', 'S10/s10.png', 'R$ 276.990', '200 cv', 'Automático de 8 marchas', '2.8 Turbo Diesel'],
    silverado: ['Silverado', 'Silverado/silverado.png', 'R$ 469.900', '420 cv', 'Automático de 10 marchas', 'V8 6.2L'],
    tracker: ['Tracker', 'Tracker/tracker-premiere-prata.png', 'R$ 119.900', '116 cv', 'Automático de 6 marchas', '1.0 Turbo Flex'],
    tracker100anos: ['Tracker 100 Anos', 'Tracker _100_Anos/flyout_tracker_100_anos.png', 'R$ 175.990', '116 cv', 'Automático de 6 marchas', '1.0 Turbo Flex'],
    trailblazer: ['Trailblazer', 'Trailblazer/trailblazer.png', 'R$ 411.690', '200 cv', 'Automático de 8 marchas', '2.8 Turbo Diesel'],
    spin: ['Spin', 'Spin/spin-jelly-flyout.png', 'R$ 119.900', '111 cv', 'Automático de 6 marchas', '1.8 Flex'],
    equinox: ['Equinox', 'Equinox/equinox.png', 'R$ 285.490', '172 cv', 'Automático', '1.5 Turbo'],
    blazerevrs: ['Blazer EV RS', 'Blazer EV RS/blazerev.png', 'R$ 503.190', '347 cv', 'Elétrico', 'Motor elétrico'],
    equinoxev: ['Equinox EV', 'Equinox EV/equinoxev.png', 'R$ 349.990', '292 cv', 'Elétrico', 'Motor elétrico'],
    spark: ['Spark', 'Spark/spark-jpg.png', 'R$ 159.990', '140 cv', 'Elétrico', 'Motor elétrico'],
    captivaev: ['Captiva EV', 'Captiva EV/captiva_ev_fly.png', 'Lançamento em breve', 'Em breve', 'Elétrico', 'Motor elétrico']
  };
  const id = new URLSearchParams(location.search).get('carro') || 'onixplus';
  const car = cars[id] || cars.onixplus;
  const [name, image, price, power, transmission, engine] = car;
  const versions = id === 'onixplus'
    ? [['Onix Plus 1.0 MT', 'R$ 106.790', '82 cv', 'Manual de 6 marchas', '1.0 Flex'], ['Onix Plus Turbo AT', 'R$ 118.990', '116 cv', 'Automático de 6 marchas', '1.0 Turbo Flex'], ['Onix Plus LTZ Turbo AT', 'R$ 129.990', '116 cv', 'Automático de 6 marchas', '1.0 Turbo Flex'], ['Onix Plus Premier Turbo AT', 'R$ 136.490', '116 cv', 'Automático de 6 marchas', '1.0 Turbo Flex']]
    : [[name, price, power, transmission, engine]];
  const get = selector => document.querySelector(selector);
  document.title = `${name} | Chevrolet`;
  get('#vehicle-image').src = asset + image;
  get('#vehicle-image').alt = name;
  get('#exterior-image').src = asset + image;
  get('#exterior-image').alt = `Vista externa do ${name}`;
  get('#vehicle-description').textContent = `Conheça as versões, equipamentos e configurações disponíveis para o ${name}.`;
  get('#interior-text').textContent = `O ${name} foi pensado para oferecer conforto, conectividade e praticidade em todos os trajetos.`;
  get('#option-list').innerHTML = ['Conectividade Chevrolet', 'Itens de segurança e assistência ao motorista', 'Acabamentos e acessórios conforme a versão'].map(item => `<li>${item}</li>`).join('');
  get('#colors').innerHTML = [['Prata', '#9aa0a5'], ['Branco', '#f7f7f4'], ['Preto', '#202328']].map((color, index) => `<button class="color-button${index ? '' : ' active'}" style="background:${color[1]}" title="${color[0]}" aria-label="Cor ${color[0]}"></button>`).join('');
  get('#colors').addEventListener('click', event => { if (event.target.matches('.color-button')) { get('#colors .active').classList.remove('active'); event.target.classList.add('active'); get('#selection-message').textContent = `Cor ${event.target.title} selecionada.`; } });
  function choose(version, index) { get('#vehicle-price').textContent = `A partir de ${version[1]}`; get('#spec-power').textContent = version[2]; get('#spec-transmission').textContent = version[3]; get('#spec-engine').textContent = version[4]; get('#versions').querySelectorAll('button').forEach((button, position) => button.classList.toggle('active', position === index)); get('#buy-link').href = `comprar.html?carro=${encodeURIComponent(name)}&versao=${encodeURIComponent(version[0])}`; get('#selection-message').textContent = `${version[0]} selecionada.`; }
  get('#versions').innerHTML = versions.map((version, index) => `<button class="version-button${index ? '' : ' active'}">${version[0]}</button>`).join('');
  get('#versions').querySelectorAll('button').forEach((button, index) => button.addEventListener('click', () => choose(versions[index], index)));
  choose(versions[0], 0);
});

import React from 'react';
import { Menu, Clock, Phone, MapPin, Instagram, Facebook, Wine, Beer, Coffee, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold">Matboden</h1>
              <div className="hidden md:flex space-x-8">
                <a href="#menu" className="text-white hover:text-gray-300">Meny</a>
                <a href="#about" className="text-white hover:text-gray-300">Om oss</a>
                <a href="#contact" className="text-white hover:text-gray-300">Kontakt</a>
              </div>
            </div>
          </nav>
          
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-white text-6xl font-bold mb-4">Matboden</h1>
              <p className="text-white text-xl mb-8">Traditionell svensk mat med moderna inslag</p>
              <a 
                href="#menu"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Se vår meny
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Menu className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-4xl font-bold mb-4">Vår Meny</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Förrätter & Sallader */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Förrätter</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Gravad lax
                    <span className="text-yellow-500">159 kr</span>
                  </h4>
                  <p className="text-gray-600">Med hovmästarsås, citron och dill</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Skagentoast
                    <span className="text-yellow-500">159 kr</span>
                  </h4>
                  <p className="text-gray-600">Rostat bröd med sallad, tomat, gurka toppad med skagenröra</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-8">Sallader</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Caesarsallad
                    <span className="text-yellow-500">79 kr</span>
                  </h4>
                  <p className="text-gray-600">Serveras med kyckling, krispig romansallad, krutonger, knaprigt stekt bacon, parmesan och Caesardressing</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Räksallad
                    <span className="text-yellow-500">89 kr</span>
                  </h4>
                  <p className="text-gray-600">Serveras med blandsallad, handskalade räkor, fetaost, citron, rostat bröd och Rhode Island dressing</p>
                </div>
              </div>
            </div>

            {/* Kötträtter */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Kötträtter</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Ostfylld Oxfilé
                    <span className="text-yellow-500">269 kr</span>
                  </h4>
                  <p className="text-gray-600">200g grillad ostfylld oxfilé serveras med stekta grönsaker, kantarellsås och klyftpotatis</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Fransk Pepparstek
                    <span className="text-yellow-500">269 kr</span>
                  </h4>
                  <p className="text-gray-600">200g grillad oxfilé doppad i välbalanserad pepparmix, serveras med grillad grön chili, stekta grönsaker, husets speciella pepparsås och klyftpotatis</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Stekt Entrecote
                    <span className="text-yellow-500">249 kr</span>
                  </h4>
                  <p className="text-gray-600">200g stekt entrecote serveras med grönsaker, rödvinssky, persiljesmör och friterade potatisklyftor</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Fläskfilé Oscar
                    <span className="text-yellow-500">259 kr</span>
                  </h4>
                  <p className="text-gray-600">Serveras med stekta grönsaker, bearnaisesås, räkor, grönsparris och klyftpotatis</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Plankstek
                    <span className="text-yellow-500">189 kr</span>
                  </h4>
                  <p className="text-gray-600">Grillad biff på planka med gratinerad potatismos, bacon lindad grön sparris, bearnaisesås och grillad tomat</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Grillad Kycklingfilé
                    <span className="text-yellow-500">189 kr</span>
                  </h4>
                  <p className="text-gray-600">Serveras med stekta grönsaker, rödvinssås, tzatziki och klyftpotatis</p>
                </div>
              </div>
            </div>

            {/* Fiskrätter */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Fiskrätter</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Stekt Rödingsfilé
                    <span className="text-yellow-500">249 kr</span>
                  </h4>
                  <p className="text-gray-600">Stekt rödingsfilé serveras med stekta grönsaker, pressad potatis, grillad citron och vitvinssås</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Gösfilé
                    <span className="text-yellow-500">229 kr</span>
                  </h4>
                  <p className="text-gray-600">Stekt lättpanerad gösfilé serveras med varma grönsaker, kokt potatis, citron och skagenröra</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Lax på planka
                    <span className="text-yellow-500">229 kr</span>
                  </h4>
                  <p className="text-gray-600">Halstrad laxfilé på planka och gratinerad potatismos serveras med hollandaisesås, bacon lindad grön sparris, citron och grillad tomat</p>
                </div>
              </div>
            </div>

            {/* Pastarätter */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Pastarätter</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Oxfilé Pasta
                    <span className="text-yellow-500">179 kr</span>
                  </h4>
                  <p className="text-gray-600">En krämig oxfilépasta med champinjoner, broccoli, vitlök och grön chili i gräddsås</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Pasta Al Pollo
                    <span className="text-yellow-500">179 kr</span>
                  </h4>
                  <p className="text-gray-600">Smakfull kycklingpasta med paprika, broccoli och champinjoner i gräddsås</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Scampi Tagliatelle
                    <span className="text-yellow-500">159 kr</span>
                  </h4>
                  <p className="text-gray-600">Scampiräkor med lök, vitlök och grön chili i en krämig hummersås</p>
                </div>
              </div>
            </div>

            {/* Barnmeny */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Barnmeny</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Liten Filé
                    <span className="text-yellow-500">129 kr</span>
                  </h4>
                  <p className="text-gray-600">En bit fläskfilé serveras med kalla grönsaker bearnaisesås och pommes</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Naggets Favorit!
                    <span className="text-yellow-500">100 kr</span>
                  </h4>
                  <p className="text-gray-600">8 st. Naggets med pommes och dressing</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Klassisk Cheeseburgare
                    <span className="text-yellow-500">110 kr</span>
                  </h4>
                  <p className="text-gray-600">90g med briochebröd, originaldressing, ost, sallad, pommes</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Dessert</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Konjak flamberad banan
                    <span className="text-yellow-500">79 kr</span>
                  </h4>
                  <p className="text-gray-600">Serveras med gammaldags vaniljglass</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold flex justify-between">
                    Kub Glass
                    <span className="text-yellow-500">69 kr</span>
                  </h4>
                  <p className="text-gray-600">3 kulor glass av vanilj, choklad och mango sorbet</p>
                </div>
              </div>
            </div>

            {/* Drycker */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Drycker</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Coffee className="w-5 h-5 mr-2" />
                  Kalla Drycker
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['Coca-Cola', '35'],
                    ['Coca-Cola Zero', '35'],
                    ['Fanta', '35'],
                    ['Sprite', '35'],
                    ['Kolsyrat Citronvatten', '35'],
                    ['Kolsyrat Naturell Vatten', '35'],
                    ['Apelsinjuice', '35'],
                    ['Red Bull', '45']
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-800">{name}</span>
                      <span className="text-yellow-500">{price} kr</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Beer className="w-5 h-5 mr-2" />
                  Öl
                </h4>
                <div className="space-y-2">
                  {[
                    ['Mariestads Export 50cl', '75'],
                    ['Falcon Export 50cl', '70'],
                    ['Carlsberg Export 33cl', '55'],
                    ['Carlsberg Hof 33cl', '55'],
                    ['Corona Extra 33cl', '55'],
                    ['Eriksberg Original Alkoholfri', '40']
                  ].map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center">
                      <span className="text-gray-800">{name}</span>
                      <span className="text-yellow-500">{price} kr</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Wine className="w-5 h-5 mr-2" />
                  Vin
                </h4>
                <div className="space-y-2">
                  {[
                    ['Campo Viejo', '65', '370'],
                    ['Caliza', '55', '320'],
                    ["Jacob's Creek", '65', '340'],
                    ['Crasillero del Diablo', '65', '340']
                  ].map(([name, glasPrice, bottlePrice]) => (
                    <div key={name}>
                      <p className="text-gray-800">{name}</p>
                      <p className="text-gray-600">Glas {glasPrice} kr / Flaska {bottlePrice} kr</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Om Matboden</h2>
            <p className="text-gray-600 mb-12 text-center">
              Sedan 1995 har vi serverat traditionell svensk husmanskost med moderna inslag. 
              Vårt kök använder lokala råvaror och lagar allt från grunden med kärlek och omsorg.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Clock className="w-8 h-8 mb-4 text-yellow-500" />
                <h3 className="font-semibold text-xl mb-4">Öppettider</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Lunchbuffé</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Mån–Fre: 11:00 – 14:30</li>
                    <li>Lör–Sön: 12:00 – 15:00</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Restaurang</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Måndag–Torsdag: 11:00 – 21:00</li>
                    <li>Fredag: 11:00 – 22:00</li>
                    <li>Lördag: 12:00 – 22:00</li>
                    <li>Söndag: 12:00 – 21:00</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <MapPin className="w-8 h-8 mb-4 text-yellow-500" />
                <h3 className="font-semibold text-xl mb-4">Hitta hit</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Adress</p>
                    <p className="text-gray-600">Drottninggatan 25</p>
                    <p className="text-gray-600">556 32 Huskvarna</p>
                  </div>
                  <div>
                    <p className="font-semibold">Kontakt</p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> 036-53 52 1
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> italiunchrestaurang@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Matboden</h3>
              <p className="text-gray-400">Traditionell svensk mat med moderna inslag</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Öppettider</h4>
              <div className="text-gray-400 space-y-2">
                <p>Mån-Tor: 11:00 – 21:00</p>
                <p>Fre: 11:00 – 22:00</p>
                <p>Lör: 12:00 – 22:00</p>
                <p>Sön: 12:00 – 21:00</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
              <div className="text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Drottninggatan 25, Huskvarna
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 036-53 52 1
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> italiunchrestaurang@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Matboden. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProductoBase {
  nombre: string;
  descripcion: string;
}

interface Producto extends ProductoBase {
  imagen: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  datosProductos: ProductoBase[] = [
    { nombre: 'Transformador', descripcion: '24v 3amp' },
    { nombre: 'Fuente Swiching', descripcion: '12v 50amp' },
    { nombre: 'Transformador', descripcion: '24v 1amp' },
    { nombre: 'Campanilla', descripcion: '220v 100mml' },
    { nombre: 'Fuente Swiching', descripcion: '12v 15amp' },
    { nombre: 'Transformador', descripcion: '16v 1.5amp' },
    { nombre: 'Protoboard', descripcion: '830 puntos' },
    { nombre: 'Fuente Swiching', descripcion: '24v 2.5amp' },
    { nombre: 'Tester Unit', descripcion: 'UT 33c' },
    { nombre: 'Batería', descripcion: '6v 3.3amp' },
    { nombre: 'Batería', descripcion: '6v 4amp' },
    { nombre: 'Batería', descripcion: '12v 2.6amp' },
    { nombre: 'Batería', descripcion: '12v 1.3amp' },
    { nombre: 'Interrumptor', descripcion: '10amp' },
    { nombre: 'Interruptor', descripcion: '16amp' },
    { nombre: 'Motor Reductor', descripcion: '3v a 6v' },
    { nombre: 'Potenciométro Alambre', descripcion: '10 kilos' },
    { nombre: 'Cable USB', descripcion: '' },
    { nombre: 'Arduino 1', descripcion: '' },
    { nombre: 'Rele', descripcion: '12v DC con base' },
    { nombre: 'Interrumptor', descripcion: '15amp' },
    { nombre: 'Flux Líquido', descripcion: '60ml' },
    { nombre: 'Malla soldadora', descripcion: '' },
    { nombre: 'Pasta para soldar', descripcion: '10g' },
    { nombre: 'Puente rectificador', descripcion: '25amp 1000v' },
    { nombre: 'Soldadura', descripcion: '1mm 16g' },
    { nombre: 'Pasta flux', descripcion: '' },
    { nombre: 'Teste Unit', descripcion: 'UT 210' },
    { nombre: 'Cautin', descripcion: 'Proskit 25watts' },
    { nombre: 'Kit para armar', descripcion: 'Tanque' },
    { nombre: 'Kit para armar', descripcion: 'Trabajador' },
    { nombre: 'Kit para armar', descripcion: 'Tesla' },
    { nombre: 'Surtido de pilas / Eliminador de pilas', descripcion: '' },
    { nombre: 'Pila', descripcion: '123A' },
    { nombre: 'Aire comprimido', descripcion: '' },
    { nombre: 'Ácido Férrico', descripcion: '' },
    { nombre: 'Amplificador', descripcion: 'Stereo' },
    { nombre: 'Amplificador', descripcion: 'Stereo con radio USB' },
    { nombre: 'Microfono Dinámico', descripcion: '' },
    { nombre: 'Kit de limpieza', descripcion: '' },
    { nombre: 'Pistola de calor', descripcion: '2000w' },
    { nombre: 'Baliza', descripcion: '220v y 12v' },
    { nombre: 'Cable tag 16', descripcion: 'Surtido de colores' },
    { nombre: 'Cable tag 18', descripcion: '' },
    { nombre: 'Soldadura', descripcion: '1mm 60./40 250gr' },
    { nombre: 'Cable tag 18', descripcion: '100m' },
    { nombre: 'Cable paralelo', descripcion: '2X20 100m' },
    { nombre: 'Sirena', descripcion: '220v' },
    { nombre: 'Sirena', descripcion: '12v' },
    { nombre: 'Organizador de Plástico', descripcion: '' },
    { nombre: 'Gabinete plástico', descripcion: '' },
    { nombre: 'Surtido de pulsadores', descripcion: '' },
    { nombre: 'Speakon audio', descripcion: '' },
    { nombre: 'Potenciómetro', descripcion: 'Audio 10 kilos' },
    { nombre: 'Final de carrera', descripcion: '15amp' },
    { nombre: 'Interruptor ON/OFF', descripcion: '16amp' },
    { nombre: 'Conector tipo avión', descripcion: '' },
    { nombre: 'Pasta disipadora', descripcion: '' },
    { nombre: 'Surtido de pulsadores', descripcion: '' },
    { nombre: 'Conectores DC', descripcion: '' },
    { nombre: 'Surtido de Alicates', descripcion: '' },
    { nombre: 'Kit de termo retráctil', descripcion: '580 piezas' },
    { nombre: 'Fuente de poder', descripcion: '5v 2amp' },
    { nombre: 'Condensador de partida', descripcion: '1,5 ufx450v' },
    { nombre: 'Batería', descripcion: '6v 3 3amp' },
    { nombre: 'Batería', descripcion: '12v 5amp' },
    { nombre: 'Conector', descripcion: '12v 12pin' },
    { nombre: 'Calculadora', descripcion: 'Casio básica' },
    { nombre: 'Calculadora', descripcion: 'Casio negro' },
    { nombre: 'Calculadora', descripcion: 'Casio color ' },
    { nombre: 'Campanilla', descripcion: '220v 20mm' },
    { nombre: 'Fuente switching', descripcion: '24v y 12v' },
    { nombre: 'Estabilizador', descripcion: '1000w' },
    { nombre: 'Estabilizador de voltaje', descripcion: '2000w' },
    { nombre: 'Surtido de cables paralelo', descripcion: '' },
    { nombre: 'Microfono shure', descripcion: 'beta57a' },
    { nombre: 'Cautin pistola', descripcion: '' },
    { nombre: 'Cautin', descripcion: '50watts gotas' },
    { nombre: 'Cautin', descripcion: '30watts' },
    { nombre: 'Cautin', descripcion: '25watts' },
    { nombre: 'Cable', descripcion: '2x16' },
    { nombre: 'Campanilla', descripcion: '220v' },
    { nombre: 'Batería', descripcion: '12v 2.6amp' },
    { nombre: 'Pila', descripcion: 'AA duracell' },
    { nombre: 'Kit de arduino', descripcion: '' },
    { nombre: 'Kit escolar', descripcion: '' },
    { nombre: 'Cautin', descripcion: '100watts' },
    { nombre: 'Autotrafo', descripcion: '300watts' },
    { nombre: 'Autotrafo', descripcion: '500watts' },
    { nombre: 'Autotrafo', descripcion: '200watts' },
    { nombre: 'Autotrafo', descripcion: '100watts' },
    { nombre: 'Autotrafo', descripcion: '2000watts' },
    { nombre: 'Cable de internet', descripcion: 'cat 6 10mts' },
    { nombre: 'Cable UTP', descripcion: 'cat 6' },
    { nombre: 'Ups', descripcion: '650va 360watts' },
    { nombre: 'Fuente de poder', descripcion: '6v 500ms' },
    { nombre: 'Cloruro Ferrico 40% 1L', descripcion: '' },
    { nombre: 'Jgos de caiman caiman', descripcion: '' },
    { nombre: 'Surtido de condensado', descripcion: 'partida desde 10uf hasta 60 uf x 450v' },
    { nombre: 'Surtido de cordón eléctrico', descripcion: '' },
    { nombre: 'Surtido de conectores faston', descripcion: '' },
    { nombre: 'Antena tv Exterior', descripcion: '' },
    { nombre: 'Antena tv Interior', descripcion: '' },
    { nombre: 'Power com 220v', descripcion: '' },
    { nombre: 'Lupa tercera mano', descripcion: '' },
    { nombre: 'Cautin gotts 20-200w', descripcion: '' }

  ];

  terminoBusqueda = '';
  paginaActual = 1;
  productosPorPagina = 8;

  ngOnInit(): void {
    this.productos = this.datosProductos.map((producto, i) => {
      const numero = i + 1;
      const extension = numero <= 6 ? 'jpg' : 'jpeg';

      return {
        ...producto,
        imagen: `assets/images/products/Image${numero}.${extension}`
      };
    });

    this.productosFiltrados = [...this.productos];

    this.route.queryParams.subscribe(params => {
      this.terminoBusqueda = params['filtro'] || '';
      this.filtrarProductos();
    });
  }

  filtrarProductos(): void {
    const termino = this.terminoBusqueda.trim().toLowerCase();

    if (!termino) {
      this.productosFiltrados = [...this.productos];
    } else {
      this.productosFiltrados = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino)
      );
    }

    this.paginaActual = 1;
  }

  get totalPaginas(): number {
    return Math.ceil(this.productosFiltrados.length / this.productosPorPagina);
  }

  get productosPaginados(): Producto[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    const fin = inicio + this.productosPorPagina;
    return this.productosFiltrados.slice(inicio, fin);
  }

  get paginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

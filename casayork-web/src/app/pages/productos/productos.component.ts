import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProductoBase {
  nombre: string;
  descripcion: string;
  precio: string;
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
  constructor(private route: ActivatedRoute) {}

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  datosProductos: ProductoBase[] = [
    { nombre: 'Transformador', descripcion: '24v 3amp', precio: '$19.900' },
    { nombre: 'Fuente Swiching', descripcion: '12v 50amp', precio: '33.900' },
    { nombre: 'Transformador', descripcion: '24v 1amp', precio: '$8.900' },
    { nombre: 'Campanilla', descripcion: '220v 100mml', precio: '$9.900' },
    { nombre: 'Fuente Swiching', descripcion: '12v 15amp', precio: '$15.900' },
    { nombre: 'Transformador', descripcion: '16v 1.5amp', precio: '$11.900' },
    { nombre: 'Protoboard', descripcion: '830 puntos', precio: '$3.500' },
    { nombre: 'Fuente Swiching', descripcion: '24v 2.5amp', precio: '$15.900' },
    { nombre: 'Tester Unit', descripcion: 'UT 33c', precio: '$21.900' },
    { nombre: 'Batería', descripcion: '6v 3.3amp', precio: '$8.900' },
    { nombre: 'Batería', descripcion: '6v 4amp', precio: '$7.900' },
    { nombre: 'Batería', descripcion: '12v 2.6amp', precio: '$14.900' },
    { nombre: 'Batería', descripcion: '12v 1.3amp', precio: '$9.500' },
    { nombre: 'Interrumptor', descripcion: '10amp', precio: '$7.900' },
    { nombre: 'Interruptor', descripcion: '16amp', precio: '$12.900' },
    { nombre: 'Motor Reductor', descripcion: '3v a 6v', precio: '$1.990' },
    { nombre: 'Potenciométro Alambre', descripcion: '10 kilos', precio: '$3.900' },
    { nombre: 'Cable USB', descripcion: '', precio: '' },
    { nombre: 'Arduino 1', descripcion: '', precio: '$14.900' },
    { nombre: 'Rele', descripcion: '12v DC con base', precio: '$4.500' },
    { nombre: 'Interrumptor', descripcion: '15amp', precio: '$10.900' },
    { nombre: 'Flux Líquido', descripcion: '60ml', precio: '$4.500' },
    { nombre: 'Malla soldadora', descripcion: '', precio: '$1.800' },
    { nombre: 'Pasta para soldar', descripcion: '10g', precio: '$1.990' },
    { nombre: 'Puente rectificador', descripcion: '25amp 1000v', precio: '$2.500' },
    { nombre: 'Soldadura', descripcion: '1mm 16g', precio: '$2.800' },
    { nombre: 'Pasta flux', descripcion: '', precio: '$3.500' },
    { nombre: 'Teste Unit', descripcion: 'UT 210', precio: '$82.900' },
    { nombre: 'Cautin', descripcion: 'Proskit 25watts', precio: '$6.900' },
    { nombre: 'Kit para armar', descripcion: 'Tanque', precio: '$8.900' },
    { nombre: 'Kit para armar', descripcion: 'Trabajador', precio: '$8.900' },
    { nombre: 'Kit para armar', descripcion: 'Tesla', precio: '$13.900' },
    { nombre: 'Surtido de pilas / Eliminador de pilas', descripcion: '', precio: '' },
    { nombre: 'Pila', descripcion: '123A', precio: '$6.000' },
    { nombre: 'Aire comprimido', descripcion: '', precio: '$6.900' },
    { nombre: 'Ácido Férrico', descripcion: '', precio: '$2.500' },
    { nombre: 'Amplificador', descripcion: 'Stereo', precio: '$22.900' },
    { nombre: 'Amplificador', descripcion: 'Stereo con radio USB', precio: '$33.900' },
    { nombre: 'Microfono Dinámico', descripcion: '', precio: '$7.900' },
    { nombre: 'Kit de limpieza', descripcion: '', precio: '$7.900' },
    { nombre: 'Pistola de calor', descripcion: '2000w', precio: '$29.900' },
    { nombre: 'Baliza', descripcion: '220v y 12v', precio: '' },
    { nombre: 'Cable tag 16', descripcion: 'Surtido de colores', precio: '$14.000' },
    { nombre: 'Cable tag 18', descripcion: '', precio: '$12.000' },
    { nombre: 'Soldadura', descripcion: '1mm 60./40 250gr', precio: '$22.900' },
    { nombre: 'Cable tag 18', descripcion: '100m', precio: '' },
    { nombre: 'Cable paralelo', descripcion: '2X20 100m', precio: '$43.000' },
    { nombre: 'Sirena', descripcion: '220v', precio: '$48.000' },
    { nombre: 'Sirena', descripcion: '12v', precio: '$18.900' },
    { nombre: 'Organizador de Plástico', descripcion: '', precio: '$31.900' },
    { nombre: 'Gabinete plástico', descripcion: '', precio: '$25.900' },
    { nombre: 'Surtido de pulsadores', descripcion: '', precio: '' },
    { nombre: 'Speakon audio', descripcion: '', precio: '$1.500' },
    { nombre: 'Potenciómetro', descripcion: 'Audio 10 kilos', precio: '$2.500' },
    { nombre: 'Final de carrera', descripcion: '15amp', precio: '$990' },
    { nombre: 'Interruptor ON/OFF', descripcion: '16amp', precio: '$2.500' },
    { nombre: 'Conector tipo avión', descripcion: '', precio: '$1.500' },
    { nombre: 'Pasta disipadora', descripcion: '', precio: '$1.500' },
    { nombre: 'Surtido de pulsadores', descripcion: '', precio: '$890' },
    { nombre: 'Conectores DC', descripcion: '', precio: '$990' },
    { nombre: 'Surtido de Alicates', descripcion: '', precio: '' },
    { nombre: 'Kit de termo retráctil', descripcion: '580 piezas', precio: '$5.900' },
    { nombre: 'Fuente de poder', descripcion: '5v 2amp', precio: '$5.500' },
    { nombre: 'Condensador de partida', descripcion: '1,5 ufx450v', precio: '$1.500' },
    { nombre: 'Batería', descripcion: '6v 3 3amp', precio: '$8.900' },
    { nombre: 'Batería', descripcion: '12v 5amp', precio: '$13.900' },
    { nombre: 'Conector', descripcion: '12v 12pin', precio: '$2.500' },
    { nombre: 'Calculadora', descripcion: 'Casio básica', precio: '$9.900' },
    { nombre: 'Calculadora', descripcion: 'Casio negro', precio: '$9.900' },
    { nombre: 'Calculadora', descripcion: 'Casio color ', precio: '$9.900' },
    { nombre: 'Campanilla', descripcion: '220v 20mm', precio: '$21.900' },
    { nombre: 'Fuente switching', descripcion: '24v y 12v', precio: '' },
    { nombre: 'Estabilizador', descripcion: '1000w', precio: '$59.900' },
    { nombre: 'Estabilizador de voltaje', descripcion: '2000w', precio: '$79.900' },
    { nombre: 'Surtido de cables paralelo', descripcion: '', precio: '' },
    { nombre: 'Microfono shure', descripcion: 'beta57a', precio: '$24.900' },
    { nombre: 'Cautin pistola', descripcion: '', precio: '$9.500' },
    { nombre: 'Cautin', descripcion: '50watts gotas', precio: '$14.900' },
    { nombre: 'Cautin', descripcion: '30watts', precio: '$7.900' },
    { nombre: 'Cautin', descripcion: '25watts', precio: '$6.900' },
    { nombre: 'Cable', descripcion: '2x16', precio: '$24.900' },
    { nombre: 'Campanilla', descripcion: '220v', precio: '$7.900' },
    { nombre: 'Batería', descripcion: '12v 2.6amp', precio: '$14.900' },
    { nombre: 'Pila', descripcion: 'AA duracell', precio: '$2.400' },
    { nombre: 'Kit de arduino', descripcion: '', precio: '$18.900' },
    { nombre: 'Kit escolar', descripcion: '', precio: '$3.500' },
    { nombre: 'Cautin', descripcion: '100watts', precio: '$19.900' },
    { nombre: 'Autotrafo', descripcion: '300watts', precio: '$25.900' },
    { nombre: 'Autotrafo', descripcion: '500watts', precio: '$35.900' },
    { nombre: 'Autotrafo', descripcion: '200watts', precio: '$18.900' },
    { nombre: 'Autotrafo', descripcion: '100watts', precio: '$15.900' },
    { nombre: 'Autotrafo', descripcion: '2000watts', precio: '$129.900' },
    { nombre: 'Cable de internet', descripcion: 'cat 6 10mts', precio: '$9.900' },
    { nombre: 'Cable UTP', descripcion: 'cat 6' , precio: '$31.900' },
    { nombre: 'Ups', descripcion: '650va 360watts', precio: '$89.900' },
    { nombre: 'Fuente de poder', descripcion: '6v 500ms', precio: '$6.500' },
    { nombre: 'Ácido para placa pcv', descripcion: '1 Litro', precio: '$4.500' }
  
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
'use client';

import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Play,
  X,
  Menu,
  MapPin,
  Check,
  Copy,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { photos, films, occasions, nav } from '@/content/site';
import { Photo } from '@/components/rancho/photo';

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [visit, setVisit] = useState(false);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [gallery, setGallery] = useState<number | null>(null);
  const [film, setFilm] = useState<number | null>(null);
  const [summary, setSummary] = useState('');
  const [copied, setCopied] = useState('');
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const d = new Date();
    setMinDate(
      d.getFullYear() +
        '-' +
        String(d.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(d.getDate()).padStart(2, '0'),
    );
  }, []);
  useEffect(() => {
    if (gallery === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setGallery((i) => (i === null ? null : (i + 1) % photos.length));
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setGallery((i) =>
          i === null ? null : (i + photos.length - 1) % photos.length,
        );
      }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [gallery]);
  function openVisit(type?: string) {
    if (type) setOccasion(type);
    setSummary('');
    setCopied('');
    setVisit(true);
  }
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const date = String(d.get('date') || 'Por definir');
    setSummary(
      `Hola, soy ${String(d.get('name')).trim()}. Me gustaría conocer Rancho La Concepción para: ${occasion.toLowerCase()}.\nFecha tentativa: ${date}.\nInvitados aproximados: ${d.get('guests') || 'Por definir'}.\n${d.get('message') || 'Me gustaría planear una visita y conocer las opciones.'}`,
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied('Solicitud copiada. No se ha enviado.');
    } catch {
      setCopied(
        'No fue posible copiar automáticamente. Puedes seleccionar el texto de la solicitud.',
      );
    }
  }
  return (
    <main id="inicio">
      <a className="skip-link" href="#el-rancho">
        Saltar al contenido
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Rancho La Concepción, inicio"
        >
          <span>RANCHO</span>La Concepción
        </a>
        <nav aria-label="Navegación principal">
          {nav.map(([title, id]) => (
            <a key={id} href={'#' + id}>
              {title}
            </a>
          ))}
          <button className="nav-cta" onClick={() => openVisit()}>
            Planea tu visita <ArrowUpRight size={16} />
          </button>
        </nav>
        <button
          className="mobile-menu"
          aria-label="Abrir menú"
          onClick={() => setMenu(true)}
        >
          <Menu size={25} />
        </button>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <Photo index={0} className="hero-image" eager />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">VILLA VICTORIA · ESTADO DE MÉXICO</p>
          <h1 id="hero-title">
            Hay lugares.
            <br />Y hay <em>historias.</em>
          </h1>
          <p>
            Un rancho entre pinos. Una historia de familia.
            <br />
            Un lugar para comenzar la tuya.
          </p>
          <a className="button light" href="#el-rancho">
            Descubre La Concepción <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="hero-bottom">
          <span>NATURALEZA · ENCUENTRO · TRADICIÓN</span>
          <a href="#el-rancho">
            Comienza el recorrido <ArrowDown size={16} />
          </a>
        </div>
      </section>
      <section className="intro section" id="el-rancho">
        <p className="eyebrow">01 / NUESTRA ESENCIA</p>
        <div>
          <h2>
            Un lugar que se siente.
            <br />
            <em>Una historia que se comparte.</em>
          </h2>
          <p>
            Entre el bosque, la madera y el paso de los caballos, La Concepción
            conserva lo que le dio origen: el amor por la tierra y la fuerza de
            una familia.
          </p>
          <p>
            Aquí, los detalles tienen raíces. Las caballerizas, la capilla y los
            caminos cuentan una historia hecha con las manos, que sigue
            creciendo con cada encuentro.
          </p>
        </div>
      </section>
      <section className="celebrations section" id="celebraciones">
        <div className="celebration-photos">
          <button
            className="photo-button chapel-photo"
            aria-label="Ampliar fotografía de la capilla"
            onClick={() => setGallery(1)}
          >
            <Photo index={1} />
            <span className="image-corner">
              <ArrowUpRight size={20} />
            </span>
          </button>
          <figure className="inset-photo">
            <button
              className="photo-button"
              aria-label="Ampliar interior de la capilla"
              onClick={() => setGallery(2)}
            >
              <Photo index={2} />
            </button>
            <figcaption>Un espacio para encontrarse.</figcaption>
          </figure>
        </div>
        <div className="chapter-copy">
          <p className="eyebrow">02 / CELEBRAR CON SENTIDO</p>
          <h2>
            El escenario.
            <br />
            <em>La emoción.</em>
            <br />
            Tu historia.
          </h2>
          <p>
            Una capilla abierta al paisaje, jardines y el bosque como compañía.
            Imagina un encuentro que se sienta tan tuyo como las personas con
            quienes lo compartes.
          </p>
          <div className="occasion-links">
            <button onClick={() => openVisit('Boda o ceremonia')}>
              <span>Bodas y ceremonias</span>
              <ArrowUpRight size={21} />
            </button>
            <button onClick={() => openVisit('Evento social')}>
              <span>Celebraciones y encuentros</span>
              <ArrowUpRight size={21} />
            </button>
            <button onClick={() => openVisit('Encuentro de equipo')}>
              <span>Un día fuera de la rutina</span>
              <ArrowUpRight size={21} />
            </button>
          </div>
          <p className="note">
            Cada celebración comienza con una conversación. Espacios, servicios
            y disponibilidad se definen según tu evento.
          </p>
        </div>
      </section>
      <section className="equestrian" id="ecuestre">
        <div className="equestrian-copy">
          <p className="eyebrow">03 / NUESTRA RAÍZ ECUESTRE</p>
          <h2>
            La tierra marca
            <br />
            <em>otro ritmo.</em>
          </h2>
          <p>
            Antes de imaginar celebraciones, hubo una pasión por los caballos.
            De ella nacieron las caballerizas y una forma de vivir el rancho:
            con presencia, paciencia y respeto.
          </p>
          <button className="text-link" onClick={() => setFilm(1)}>
            <span className="play-small">
              <Play size={14} fill="currentColor" />
            </span>
            Un momento en la pista <ArrowUpRight size={18} />
          </button>
          <div className="equestrian-foot">
            <span>CABALLERIZAS</span>
            <span>PISTA</span>
            <span>NATURALEZA</span>
          </div>
        </div>
        <button
          className="equestrian-photo photo-button"
          onClick={() => setGallery(3)}
          aria-label="Ampliar fotografía del caballo"
        >
          <Photo index={3} />
          <span className="image-caption">El alma de La Concepción.</span>
          <span className="image-corner">
            <ArrowUpRight size={22} />
          </span>
        </button>
      </section>
      <section className="films section" id="recorridos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / ASÓMATE AL RANCHO</p>
            <h2>
              Estar aquí,
              <br />
              <em>por un instante.</em>
            </h2>
          </div>
          <p>
            Abre una puerta. Sigue un paso.
            <br />
            Tómate una pausa entre pinos.
          </p>
        </div>
        <div className="film-grid">
          {films.map((f, i) => (
            <button
              className="film-card"
              key={f.file}
              onClick={() => setFilm(i)}
              aria-label={'Reproducir ' + f.title + ', ' + f.duration}
            >
              <img
                src={'/media/' + f.file + '-poster.jpg'}
                alt=""
                loading="lazy"
                width={540}
                height={960}
              />
              <span className="film-shade" />
              <span className="film-meta">
                {f.label}
                <span>{f.duration}</span>
              </span>
              <span className="play-orbit">
                <Play size={23} fill="currentColor" />
              </span>
              <span className="film-title">
                {f.title}
                <ArrowUpRight size={22} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="legacy section">
        <p className="eyebrow">HECHO DE TIERRA. CUIDADO EN FAMILIA.</p>
        <h2>
          La madera guarda el tiempo.
          <br />
          El bosque, las raíces.
          <br />
          <em>Nosotros, las historias.</em>
        </h2>
        <p>
          La Concepción nace del vínculo entre hermanos y de una manera de
          construir que aprovecha lo que la tierra ofrece. La madera del lugar
          vuelve a vivir en sus espacios. Lo que hoy se comparte, mañana será
          parte del legado.
        </p>
        <div className="legacy-signature">
          <span />
          <span />
          <i>Rancho La Concepción</i>
        </div>
      </section>
      <section className="gallery-section section" id="galeria">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / EL LUGAR, DE CERCA</p>
            <h2>
              Detalles que <em>se quedan.</em>
            </h2>
          </div>
          <button className="text-link" onClick={() => setGallery(0)}>
            Ver las 8 fotografías <ArrowUpRight size={19} />
          </button>
        </div>
        <div className="gallery-grid">
          {[2, 4, 5, 0].map((n, i) => (
            <button
              className={'gallery-item gallery-item-' + i}
              key={n}
              aria-label={'Ampliar: ' + photos[n].title}
              onClick={() => setGallery(n)}
            >
              <Photo index={n} />
              <span>
                {photos[n].title}
                <ArrowUpRight size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="future section">
        <p className="eyebrow">LA HISTORIA CONTINÚA</p>
        <div>
          <h3>
            Más tiempo para <em>quedarse.</em>
          </h3>
          <p>
            Imaginamos cabañas para prolongar la estancia entre los árboles. Un
            próximo capítulo de La Concepción, todavía en desarrollo.
          </p>
          <span className="status-label">
            PROYECTO FUTURO · SIN RESERVAS DISPONIBLES
          </span>
        </div>
      </section>
      <section className="visit section" id="visita">
        <p className="eyebrow">TU HISTORIA PUEDE COMENZAR AQUÍ</p>
        <h2>
          Hay que estar aquí
          <br />
          <em>para sentirlo.</em>
        </h2>
        <p>
          Cuéntanos qué tienes en mente.
          <br />
          El primer paso es imaginarlo juntos.
        </p>
        <button className="button light" onClick={() => openVisit()}>
          Planea tu visita <ArrowUpRight size={20} />
        </button>
        <div className="location">
          <MapPin size={17} />
          <span>Villa Victoria, Estado de México</span>
        </div>
        <p className="demo-note">
          Versión beta · Contacto en demostración. No se envían solicitudes.
        </p>
      </section>
      <footer className="site-footer">
        <a className="wordmark" href="#inicio">
          <span>RANCHO</span>La Concepción
        </a>
        <p>
          Naturaleza que reúne.
          <br />
          Historias que permanecen.
        </p>
        <div>
          <a href="#inicio">Volver al inicio ↑</a>
          <span>© {new Date().getFullYear()} Rancho La Concepción · Beta</span>
        </div>
      </footer>
      <Sheet open={menu} onOpenChange={setMenu}>
        <SheetContent className="mobile-sheet" showCloseButton={false}>
          <SheetClose className="close-control" aria-label="Cerrar menú">
            <X />
          </SheetClose>
          <SheetTitle className="menu-title">La Concepción</SheetTitle>
          <SheetDescription>Un lugar para tu historia.</SheetDescription>
          <nav aria-label="Menú móvil">
            {nav.map(([title, id]) => (
              <a key={id} href={'#' + id} onClick={() => setMenu(false)}>
                {title}
                <ArrowUpRight size={22} />
              </a>
            ))}
          </nav>
          <button
            className="button"
            onClick={() => {
              setMenu(false);
              openVisit();
            }}
          >
            Planea tu visita <ArrowUpRight size={20} />
          </button>
          <p className="eyebrow">VILLA VICTORIA · ESTADO DE MÉXICO</p>
        </SheetContent>
      </Sheet>
      <Dialog
        open={gallery !== null}
        onOpenChange={(o) => {
          if (!o) setGallery(null);
        }}
      >
        <DialogContent className="gallery-dialog" showCloseButton={false}>
          <DialogClose className="close-control" aria-label="Cerrar galería">
            <X />
          </DialogClose>
          <DialogTitle className="sr-only">
            {gallery !== null ? photos[gallery].title : 'Galería'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Fotografías reales del rancho. Usa las flechas para recorrerlas.
          </DialogDescription>
          {gallery !== null && (
            <>
              <img
                className="lightbox-image"
                src={'/media/' + photos[gallery].file + '-2000.webp'}
                alt={photos[gallery].alt}
              />
              <div className="lightbox-controls">
                <button
                  aria-label="Fotografía anterior"
                  onClick={() =>
                    setGallery((gallery + photos.length - 1) % photos.length)
                  }
                >
                  <ArrowLeft />
                </button>
                <div>
                  <p>{photos[gallery].title}</p>
                  <span>{String(gallery + 1).padStart(2, '0')} / 08</span>
                </div>
                <button
                  aria-label="Fotografía siguiente"
                  onClick={() => setGallery((gallery + 1) % photos.length)}
                >
                  <ArrowRight />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={film !== null}
        onOpenChange={(o) => {
          if (!o) setFilm(null);
        }}
      >
        <DialogContent className="film-dialog" showCloseButton={false}>
          <DialogClose className="close-control" aria-label="Cerrar video">
            <X />
          </DialogClose>
          <DialogTitle className="film-dialog-title">
            {film !== null ? films[film].title : 'Recorrido'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Recorrido visual sin audio original.
          </DialogDescription>
          {film !== null && (
            <video
              key={films[film].file}
              src={'/media/' + films[film].file + '.mp4'}
              poster={'/media/' + films[film].file + '-poster.jpg'}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              aria-label={films[film].title}
            />
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={visit} onOpenChange={setVisit}>
        <DialogContent className="visit-dialog" showCloseButton={false}>
          <DialogClose className="close-control" aria-label="Cerrar solicitud">
            <X />
          </DialogClose>
          <p className="eyebrow">UN PRIMER ENCUENTRO</p>
          <DialogTitle className="visit-title">
            {summary ? 'Imaginémoslo juntos.' : 'Tu historia, aquí.'}
          </DialogTitle>
          <DialogDescription className="visit-description">
            Demostración de contacto: no se envían datos ni se confirma una
            reserva.
          </DialogDescription>
          {!summary ? (
            <form onSubmit={prepare}>
              <label htmlFor="visitor-name">¿Cómo te llamas?</label>
              <input
                id="visitor-name"
                name="name"
                placeholder="Tu nombre"
                required
                maxLength={80}
                autoComplete="given-name"
              />
              <fieldset>
                <legend>¿Qué tienes en mente?</legend>
                <RadioGroup
                  value={occasion}
                  onValueChange={(v) => setOccasion(String(v))}
                  className="occasion-radio"
                  aria-label="Tipo de encuentro"
                >
                  {occasions.map((o, i) => (
                    <label
                      key={o}
                      htmlFor={'occasion-' + i}
                      className={occasion === o ? 'chosen' : ''}
                    >
                      <RadioGroupItem id={'occasion-' + i} value={o} />
                      <span>{o}</span>
                    </label>
                  ))}
                </RadioGroup>
              </fieldset>
              <div className="form-row">
                <div>
                  <label htmlFor="visit-date">Fecha tentativa</label>
                  <input
                    id="visit-date"
                    name="date"
                    type="date"
                    min={minDate}
                  />
                </div>
                <div>
                  <label htmlFor="visit-guests">Invitados aproximados</label>
                  <input
                    id="visit-guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="99999"
                    placeholder="Por definir"
                  />
                </div>
              </div>
              <label htmlFor="visit-message">
                Cuéntanos un poco más <span>(opcional)</span>
              </label>
              <textarea
                id="visit-message"
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Lo que haría especial este encuentro…"
              />
              <button className="button" type="submit">
                Simular solicitud <ArrowUpRight size={19} />
              </button>
              <p className="form-footnote">
                Puedes usar datos de ejemplo. La información se mantiene solo
                mientras esta página está abierta.
              </p>
            </form>
          ) : (
            <div className="demo-result">
              <span className="result-icon">
                <Check size={25} />
              </span>
              <p className="result-label">Vista previa de tu solicitud</p>
              <p className="request-summary">{summary}</p>
              <p className="result-note">
                Esta solicitud no se ha enviado. El canal oficial y la dirección
                exacta se incorporarán cuando estén confirmados.
              </p>
              <button className="button" onClick={copy}>
                <Copy size={17} />
                Copiar solicitud
              </button>
              <p className="copy-status" role="status">
                {copied}
              </p>
              <button
                className="text-link"
                onClick={() => {
                  setSummary('');
                  setCopied('');
                }}
              >
                Crear otra solicitud <ArrowRight size={17} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

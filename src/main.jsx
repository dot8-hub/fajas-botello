import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BadgeCheck,
  ChevronDown,
  Heart,
  MapPin,
  MessageCircle,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { contact, products } from "./data/catalog";
import "./styles.css";

const whatsappUrl = (message) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

function ProductCard({ product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  const message = useMemo(
    () =>
      `Hola Botello, quiero comprar ${product.name}. Talla: ${size}. Color: ${color}. Estoy en Mexico y quiero confirmar disponibilidad, pago y envio.`,
    [product.name, size, color],
  );

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price}</strong>

        <div className="option-group" aria-label={`Tallas para ${product.name}`}>
          <span>Talla</span>
          <div className="segmented">
            {product.sizes.map((item) => (
              <button
                key={item}
                className={size === item ? "active" : ""}
                type="button"
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="option-group" aria-label={`Colores para ${product.name}`}>
          <span>Color</span>
          <div className="swatches">
            {product.colors.map((item) => (
              <button
                key={item}
                className={color === item ? "active" : ""}
                type="button"
                onClick={() => setColor(item)}
                aria-label={item}
                title={item}
              >
                <span style={{ background: product.colorMap[item] }} />
              </button>
            ))}
          </div>
        </div>

        <a className="button button-primary full" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Comprar
        </a>
      </div>
    </article>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{question}</span>
        <ChevronDown className={open ? "rotate" : ""} size={18} />
      </button>
      {open && <p>{answer}</p>}
    </div>
  );
}

function App() {
  const heroMessage =
    "Hola Botello, quiero asesoría para elegir mi faja colombiana. Estoy en Mexico.";

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Botello inicio">
          <img src="/assets/logo.jpeg" alt="Botello" />
        </a>
        <nav>
          <a href="#coleccion">Colección</a>
          <a href="#politicas">Políticas</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="button button-gold header-cta" href={whatsappUrl(heroMessage)} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">Fajas colombianas originales</p>
            <h1>BOTELLO</h1>
            <p className="script">Moldea tu figura. Resalta tu esencia.</p>
            <p className="hero-copy">
              Fajas de compresión colombiana con asesoría personalizada por WhatsApp y envíos a todo México.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl(heroMessage)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Comprar por WhatsApp
              </a>
              <a className="button button-light" href="#coleccion">
                Ver colección
              </a>
            </div>
            <div className="delivery-note">
              <Truck size={17} />
              Envíos a todo México
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/producto-temporal.png" alt="" />
            <div className="quality-badge">
              <span>Calidad</span>
              Colombiana
              <small>100% original</small>
            </div>
          </div>
        </section>

        <section className="benefits" aria-label="Beneficios">
          <div>
            <Ruler />
            <h2>Moldea tu cintura</h2>
            <p>Define tu figura y marca tu silueta.</p>
          </div>
          <div>
            <Sparkles />
            <h2>Realza tus curvas</h2>
            <p>Compresión pensada para uso diario.</p>
          </div>
          <div>
            <Heart />
            <h2>Máxima comodidad</h2>
            <p>Materiales suaves y ajuste firme.</p>
          </div>
          <div>
            <PackageCheck />
            <h2>Atención personal</h2>
            <p>Compra guiada por WhatsApp.</p>
          </div>
        </section>

        <section className="section" id="coleccion">
          <div className="section-heading">
            <p className="eyebrow">Nuestra colección</p>
            <h2>Elige tu faja y confirma talla por WhatsApp</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="trust-band">
          <div>
            <BadgeCheck />
            <h2>Calidad colombiana</h2>
            <p>Diseños seleccionados para moldear, sostener y acompañar tu rutina.</p>
          </div>
          <div>
            <MapPin />
            <h2>Venta en México</h2>
            <p>Disponibilidad, costos de envío y tiempos se confirman antes de pagar.</p>
          </div>
          <div>
            <ShieldCheck />
            <h2>Compra asesorada</h2>
            <p>La talla se valida por WhatsApp para reducir cambios y errores.</p>
          </div>
        </section>

        <section className="section policies" id="politicas">
          <div className="section-heading">
            <p className="eyebrow">Compra clara</p>
            <h2>Políticas básicas</h2>
          </div>
          <div className="policy-grid">
            <article>
              <h3>Pagos</h3>
              <p>El pago se acuerda directamente por WhatsApp. Este sitio no procesa pagos ni guarda datos bancarios.</p>
            </article>
            <article>
              <h3>Envíos</h3>
              <p>Envíos dentro de México. Costo, paquetería y tiempo estimado se confirman antes de pagar.</p>
            </article>
            <article>
              <h3>Cambios</h3>
              <p>Cambios solo por talla dentro de los 3 días posteriores a la entrega, con producto limpio, sin uso y con empaque.</p>
            </article>
            <article>
              <h3>Higiene</h3>
              <p>No hay devoluciones si la faja fue usada, lavada, dañada, alterada o no conserva condiciones originales.</p>
            </article>
            <article>
              <h3>Disponibilidad</h3>
              <p>Colores, tallas y stock están sujetos a confirmación por WhatsApp antes de cerrar la compra.</p>
            </article>
            <article>
              <h3>Privacidad</h3>
              <p>Los datos enviados por WhatsApp se usan solo para atender compra, pago, entrega y seguimiento.</p>
            </article>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Dudas frecuentes</p>
            <h2>Preguntas frecuentes</h2>
          </div>
          <div className="faq-grid">
            <FaqItem
              question="¿Cómo sé cuál es mi talla?"
              answer="Escríbenos por WhatsApp con tus medidas de cintura, cadera y busto para recomendarte una talla antes de comprar."
            />
            <FaqItem
              question="¿Puedo cambiar mi faja?"
              answer="Sí, solo por talla y dentro de 3 días después de recibirla, siempre que esté sin uso, limpia y con empaque."
            />
            <FaqItem
              question="¿Dónde entregan?"
              answer="Por ahora vendemos y enviamos dentro de México. El costo se confirma según ciudad y paquetería."
            />
            <FaqItem
              question="¿El pago es dentro de la página?"
              answer="No. La compra se coordina por WhatsApp para confirmar disponibilidad, pago y envío de forma personalizada."
            />
          </div>
        </section>
      </main>

      <footer className="footer" id="contacto">
        <div>
          <img src="/assets/logo.jpeg" alt="Botello" />
          <p>Fajas colombianas para México.</p>
        </div>
        <div>
          <h2>Contacto</h2>
          <a href={whatsappUrl(heroMessage)} target="_blank" rel="noreferrer">
            WhatsApp: {contact.displayPhone}
          </a>
          <span>{contact.domain}</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl(heroMessage)} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
        <MessageCircle size={25} />
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

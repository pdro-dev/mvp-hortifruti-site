import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">oZ</span>
              </div>
              <span className="font-bold text-lg">oZé Hortifruti</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digitalização Inteligente do Agronegócio
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/produtor" className="hover:text-primary transition-colors">
                  Para Produtores
                </Link>
              </li>
              <li>
                <Link href="/intermediario" className="hover:text-primary transition-colors">
                  Para Intermediários
                </Link>
              </li>
              <li>
                <Link href="/comercio" className="hover:text-primary transition-colors">
                  Para Comércios
                </Link>
              </li>
              <li>
                <Link href="/funcionalidades" className="hover:text-primary transition-colors">
                  Funcionalidades
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacidade" className="hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} oZé Hortifruti Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


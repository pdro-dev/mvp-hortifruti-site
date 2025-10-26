import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Smartphone, 
  Zap,
  ArrowRight,
  Leaf,
  Store,
  Truck
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 sm:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                Digitalização Inteligente do Agronegócio
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Elimine ligações e notinhas.{" "}
                <span className="text-primary">Ganhe controle total.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Do produtor ao comércio, conectamos toda a cadeia hortifruti com tecnologia e inteligência artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/comecar">
                    Começar Grátis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/sobre">Saiba Mais</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">R$ 72k</div>
                  <div className="text-sm text-muted-foreground">Economia/ano</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Produtores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground">Papel</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-400 to-green-600 p-1">
                <div className="w-full h-full rounded-xl bg-white p-6 flex items-center justify-center">
                  <img 
                    src="/images/hero-illustration.png" 
                    alt="Como funciona o oZé - Do produtor ao intermediário" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">O Problema</h2>
            <p className="text-xl text-muted-foreground">
              O setor hortifruti ainda opera de forma manual e custosa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">150 ligações/dia</CardTitle>
                <CardDescription>
                  Atravessadores gastam horas ao telefone consultando disponibilidade
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">100+ notinhas físicas</CardTitle>
                <CardDescription>
                  Produtores preenchem dezenas de papéis diariamente
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">Decisões de R$ 70k</CardTitle>
                <CardDescription>
                  Baseadas apenas em memória, sem dados históricos
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">A Solução</h2>
            <p className="text-xl text-muted-foreground">
              oZé Hortifruti Digital automatiza toda a cadeia de comercialização
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-primary">Cadastro por Voz</CardTitle>
                <CardDescription>
                  Produtores registram ofertas em segundos usando comandos de voz
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-primary">Dashboard em Tempo Real</CardTitle>
                <CardDescription>
                  Intermediários visualizam tudo consolidado em uma única tela
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-primary">IA Recomenda</CardTitle>
                <CardDescription>
                  Sistema sugere os melhores negócios automaticamente
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfis de Usuário */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Escolha Seu Perfil</h2>
            <p className="text-xl text-muted-foreground">
              Soluções específicas para cada elo da cadeia hortifruti
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Produtor */}
            <Link href="/produtor">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Produtor</CardTitle>
                  <CardDescription>
                    Organize sua produção, elimine papel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Elimine notinhas físicas e ligações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Organize gratuitamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Aumente sua visibilidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Controle custos e margens</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Intermediário */}
            <Link href="/intermediario">
              <Card className="group hover:shadow-lg transition-all cursor-pointer border-primary h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Intermediário</CardTitle>
                  <CardDescription>
                    Economize R$ 72k/ano, ganhe controle total
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Elimine 150 ligações diárias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dashboard consolidado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Recomendações de IA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Inteligência de mercado</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Comércio */}
            <Link href="/comercio">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Store className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Comércio</CardTitle>
                  <CardDescription>
                    Encontre fornecedores confiáveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Acesso direto a produtores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Previsibilidade de oferta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rastreabilidade completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Melhores preços</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Funcionalidades Principais</h2>
            <p className="text-xl text-muted-foreground">
              Tecnologia de ponta para transformar seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cadastro por Voz</CardTitle>
                <CardDescription>
                  Registre ofertas em segundos usando comandos de voz natural
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Dashboard em Tempo Real</CardTitle>
                <CardDescription>
                  Visualize toda sua operação consolidada em uma única tela
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Recomendações de IA</CardTitle>
                <CardDescription>
                  Sistema sugere os melhores negócios automaticamente
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Relatórios Automáticos</CardTitle>
                <CardDescription>
                  Dados de pagamento e histórico gerados automaticamente
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>QR Code Rastreamento</CardTitle>
                <CardDescription>
                  Rastreabilidade completa de cada lote do produtor ao cliente
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Gestão de Custos</CardTitle>
                <CardDescription>
                  Controle custos, perdas e margens por lote automaticamente
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Como Funciona</h2>
            <p className="text-xl text-muted-foreground">
              Do cadastro à entrega, tudo digitalizado e automatizado
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/fluxo_funcionalidades_visual.png" 
              alt="Fluxo de Funcionalidades" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Validação/Social Proof */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Validado por Líderes do Setor</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">R$ 400-500M</div>
                <div className="text-green-100">Faturamento anual do cliente âncora</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-green-100">Produtores diretos conectados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Top 3</div>
                <div className="text-green-100">Entre 1.000+ atravessadores regionais</div>
              </div>
            </div>
            <p className="text-xl text-green-100">
              "Isso aí já é coisa de louco. Com esses dados, as possibilidades são infinitas."
            </p>
            <p className="text-green-200">— Tico, Cliente Âncora</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pronto para Digitalizar Seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece gratuitamente com o oZé Starter e evolua conforme sua necessidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/comecar">
                  Começar Grátis Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contato">Falar com Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


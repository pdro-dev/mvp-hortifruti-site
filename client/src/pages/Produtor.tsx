import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Leaf, 
  Smartphone, 
  BarChart3, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Clock,
  DollarSign,
  Users,
  FileText,
  Zap
} from "lucide-react";
import { Link } from "wouter";

export default function Produtor() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 sm:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
              Para Produtores Rurais
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Elimine notinhas físicas.{" "}
              <span className="text-primary">Organize gratuitamente.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Do cadastro por voz à gestão completa de custos e margens. 
              Escolha a versão ideal para o seu momento e evolua conforme cresce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/comecar">
                  Começar Grátis
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

      {/* Problema do Produtor */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Reconhece Esses Problemas?</h2>
            <p className="text-xl text-muted-foreground">
              Produtores rurais enfrentam desafios diários que consomem tempo e dinheiro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">100+ notinhas/dia</CardTitle>
                <CardDescription>
                  Preenchimento manual de papéis para cada lote vendido
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">Ligações constantes</CardTitle>
                <CardDescription>
                  Atender dezenas de ligações para informar disponibilidade
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">Zero visibilidade</CardTitle>
                <CardDescription>
                  Sem controle de custos, perdas e margens reais
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Versões do oZé */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">4 Versões. 1 Jornada.</h2>
            <p className="text-xl text-muted-foreground">
              Comece grátis e evolua conforme seu negócio cresce. Sem compromisso, sem burocracia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* oZé Starter */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                GRÁTIS
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">oZé Starter</CardTitle>
                <CardDescription className="text-base">
                  Elimine notinhas físicas e ligações. Organize gratuitamente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Funcionalidades:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Cadastro por Voz:</strong> Registre ofertas em segundos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Organização Digital:</strong> Elimine 100% do papel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Notificações Push:</strong> Receba alertas de interesse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Histórico Básico:</strong> Consulte vendas passadas</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4" />
                    <span>Economia: 2h/dia em ligações e papelada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Investimento: R$ 0/mês</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Começar Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* oZé Vitrine+ */}
            <Card className="relative overflow-hidden border-primary">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                POPULAR
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">oZé Vitrine+</CardTitle>
                <CardDescription className="text-base">
                  Aumente sua visibilidade e alcance novos compradores.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Tudo do Starter, mais:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Perfil Público:</strong> Vitrine digital da sua produção</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Busca Ativa:</strong> Apareça para novos compradores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Certificações:</strong> Destaque qualidade e origem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Fotos de Produtos:</strong> Mostre sua produção</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Potencial: +30% de alcance de mercado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Investimento: R$ 49/mês</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* oZé Gestão+ */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">oZé Gestão+</CardTitle>
                <CardDescription className="text-base">
                  Controle custos, perdas e margens automaticamente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Tudo do Vitrine+, mais:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Gestão de Custos:</strong> Controle por lote automaticamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Controle de Perdas:</strong> Monitore desperdícios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Cálculo de Margens:</strong> Veja lucro real por produto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Relatórios Gerenciais:</strong> Dashboards de desempenho</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Resultado: +15% de margem líquida</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Investimento: R$ 149/mês</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" variant="outline">
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* oZé Pro */}
            <Card className="relative overflow-hidden border-2 border-primary">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-green-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                COMPLETO
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">oZé Pro</CardTitle>
                <CardDescription className="text-base">
                  IA recomenda, você decide. Máxima inteligência de mercado.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Tudo do Gestão+, mais:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>IA Recomenda Preços:</strong> Sugestões baseadas em mercado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Previsão de Demanda:</strong> Antecipe necessidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Alertas Inteligentes:</strong> Oportunidades em tempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Análise Preditiva:</strong> Tendências e sazonalidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Suporte Prioritário:</strong> Atendimento VIP</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Zap className="h-4 w-4" />
                    <span>Resultado: +25% de rentabilidade</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>Investimento: R$ 299/mês</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Começar Teste Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Comparação */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Compare as Versões</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Funcionalidade</th>
                        <th className="text-center py-3 px-4">Starter</th>
                        <th className="text-center py-3 px-4 bg-primary/5">Vitrine+</th>
                        <th className="text-center py-3 px-4">Gestão+</th>
                        <th className="text-center py-3 px-4 bg-primary/5">Pro</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Cadastro por Voz</td>
                        <td className="text-center py-3 px-4"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Notificações Push</td>
                        <td className="text-center py-3 px-4"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Perfil Público</td>
                        <td className="text-center py-3 px-4">—</td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Gestão de Custos</td>
                        <td className="text-center py-3 px-4">—</td>
                        <td className="text-center py-3 px-4 bg-primary/5">—</td>
                        <td className="text-center py-3 px-4"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">IA e Recomendações</td>
                        <td className="text-center py-3 px-4">—</td>
                        <td className="text-center py-3 px-4 bg-primary/5">—</td>
                        <td className="text-center py-3 px-4">—</td>
                        <td className="text-center py-3 px-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Preço</td>
                        <td className="text-center py-3 px-4 font-semibold text-primary">Grátis</td>
                        <td className="text-center py-3 px-4 bg-primary/5 font-semibold text-primary">R$ 49/mês</td>
                        <td className="text-center py-3 px-4 font-semibold text-primary">R$ 149/mês</td>
                        <td className="text-center py-3 px-4 bg-primary/5 font-semibold text-primary">R$ 299/mês</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evolução Progressiva */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Evolua no Seu Ritmo</h2>
            <p className="text-xl text-muted-foreground">
              Comece grátis e adicione funcionalidades conforme seu negócio cresce
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Comece Grátis</h3>
                <p className="text-sm text-muted-foreground">
                  Elimine papel e ligações com o oZé Starter
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Aumente Alcance</h3>
                <p className="text-sm text-muted-foreground">
                  Vitrine digital para novos compradores
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Controle Custos</h3>
                <p className="text-sm text-muted-foreground">
                  Gestão completa de margens e perdas
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-semibold mb-2">IA Recomenda</h3>
                <p className="text-sm text-muted-foreground">
                  Decisões inteligentes com dados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pronto para Eliminar as Notinhas?
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece gratuitamente hoje mesmo. Sem cartão de crédito, sem compromisso.
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


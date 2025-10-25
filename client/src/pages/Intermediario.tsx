import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Truck, 
  BarChart3, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Clock,
  Phone,
  Target,
  Brain
} from "lucide-react";
import { Link } from "wouter";

export default function Intermediario() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-white py-20 sm:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Para Intermediários e Atravessadores
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Elimine 150 ligações/dia.{" "}
                <span className="text-primary">Economize R$ 72k/ano.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Dashboard consolidado em tempo real. Recomendações de IA. 
                Controle total sobre 150+ produtores em uma única tela.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/comecar">
                    Solicitar Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contato">Falar com Especialista</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary to-green-600 p-1">
                <div className="w-full h-full rounded-xl bg-white p-6 flex items-center justify-center">
                  <img 
                    src="/images/arquitetura_sistema_visual.png" 
                    alt="Dashboard do Intermediário" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">ROI Comprovado</h2>
            <p className="text-xl text-green-100">
              Baseado em dados reais do cliente âncora (R$ 400-500M/ano)
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">R$ 72k</div>
                <div className="text-green-100">Economia anual</div>
                <div className="text-sm text-green-200 mt-2">
                  Eliminação de custos operacionais
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">150</div>
                <div className="text-green-100">Ligações/dia eliminadas</div>
                <div className="text-sm text-green-200 mt-2">
                  = 4h/dia de produtividade
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-green-100">Visibilidade em tempo real</div>
                <div className="text-sm text-green-200 mt-2">
                  Sobre 150+ produtores
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">O Custo da Gestão Manual</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/50">
              <CardHeader>
                <Phone className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-destructive">150 ligações/dia</CardTitle>
                <CardDescription>
                  4 horas diárias consultando disponibilidade
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-destructive/50">
              <CardHeader>
                <Target className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-destructive">Decisões às cegas</CardTitle>
                <CardDescription>
                  Compras de R$ 70k baseadas em memória
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-destructive/50">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-destructive">Sem dados</CardTitle>
                <CardDescription>
                  Planilhas desatualizadas, sem histórico
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Dashboard Consolidado</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Painel de Controle</CardTitle>
                <CardDescription>Visão consolidada em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>150+ produtores em uma tela</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Disponibilidade atualizada automaticamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Filtros inteligentes por produto/região</span>
                  </li>
                </ul>
                <div className="pt-4 border-t mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Economia: 4h/dia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Recomendações de IA</CardTitle>
                <CardDescription>Sistema sugere melhores negócios</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Melhor custo-benefício por produto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Previsão de demanda baseada em histórico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Alertas de oportunidade em tempo real</span>
                  </li>
                </ul>
                <div className="pt-4 border-t mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Brain className="h-4 w-4" />
                    <span>Decisões baseadas em dados</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Gestão de Chegadas</CardTitle>
                <CardDescription>Controle total do barracão</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conferência digital por QR Code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Registro de divergências automatizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rastreabilidade completa por lote</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Relatórios Automáticos</CardTitle>
                <CardDescription>Dados de pagamento e histórico</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Relatórios de pagamento por produtor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Histórico de transações completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Exportação para contabilidade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pronto para Economizar R$ 72k/ano?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/comecar">
                  Solicitar Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


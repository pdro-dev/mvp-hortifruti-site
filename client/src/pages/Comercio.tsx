import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Store, CheckCircle2, ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Comercio() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Para Comércios e Varejistas
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Encontre fornecedores confiáveis.{" "}
              <span className="text-primary">Melhores preços.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Acesso direto a produtores, previsibilidade de oferta e rastreabilidade completa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/comecar">Começar Grátis<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Benefícios Principais</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Acesso Direto</CardTitle>
                <CardDescription>Conecte-se diretamente com produtores</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Previsibilidade</CardTitle>
                <CardDescription>Saiba o que está disponível em tempo real</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Rastreabilidade</CardTitle>
                <CardDescription>Origem e qualidade garantidas</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Pronto para Começar?</h2>
            <Button size="lg" asChild>
              <Link href="/comecar">Começar Agora<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

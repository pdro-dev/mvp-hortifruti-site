import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Sobre() {
  return (
    <div className="flex flex-col">
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Sobre o <span className="text-primary">oZé Hortifruti Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Digitalizando o agronegócio brasileiro, um produtor de cada vez.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Nossa Missão</h2>
            <p className="text-xl text-muted-foreground">
              Eliminar a ineficiência operacional do setor hortifruti através de tecnologia e inteligência artificial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ser a plataforma líder de digitalização do agronegócio no Brasil.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Simplicidade, eficiência e evolução progressiva.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Estratégia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Level 1 do joguinho" - comece simples, evolua conforme cresce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Quer Saber Mais?</h2>
            <Button size="lg" asChild>
              <Link href="/contato">Entre em Contato<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

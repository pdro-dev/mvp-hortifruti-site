import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <div className="flex flex-col">
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar. Envie sua mensagem e retornaremos em breve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">E-mail</h3>
                      <p className="text-sm text-muted-foreground">contato@ozehortifruti.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-sm text-muted-foreground">(35) 9 0000-0000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Localização</h3>
                      <p className="text-sm text-muted-foreground">Sul de Minas Gerais / Interior de São Paulo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

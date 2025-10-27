import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Phone, 
  MessageCircle, 
  Check,
  X,
  Clock,
  User,
  Package,
  MapPin,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export default function AppIntermediarioBasico() {
  const [filtro, setFiltro] = useState("todos");
  const [busca, setBusca] = useState("");

  // Dados mockados de ofertas consolidadas
  const ofertas = [
    {
      id: 1,
      produtor: "João Silva",
      produto: "Morango Premium",
      quantidade: 500,
      unidade: "caixas",
      preco: 14,
      disponivel: "Hoje, 14h",
      local: "Pouso Alegre, MG",
      telefone: "(35) 99999-1111",
      status: "disponivel",
      qualidade: "premium",
      foto: "🍓"
    },
    {
      id: 2,
      produtor: "Maria Santos",
      produto: "Morango Orgânico",
      quantidade: 300,
      unidade: "caixas",
      preco: 16,
      disponivel: "Amanhã, 10h",
      local: "Cambuí, MG",
      telefone: "(35) 99999-2222",
      status: "disponivel",
      qualidade: "organico",
      foto: "🍓"
    },
    {
      id: 3,
      produtor: "Pedro Costa",
      produto: "Morango Comum",
      quantidade: 800,
      unidade: "caixas",
      preco: 12,
      disponivel: "29/10, 8h",
      local: "Estiva, MG",
      telefone: "(35) 99999-3333",
      status: "disponivel",
      qualidade: "comum",
      foto: "🍓"
    },
    {
      id: 4,
      produtor: "Ana Oliveira",
      produto: "Tomate Cereja",
      quantidade: 200,
      unidade: "caixas",
      preco: 18,
      disponivel: "Hoje, 16h",
      local: "Borda da Mata, MG",
      telefone: "(35) 99999-4444",
      status: "disponivel",
      qualidade: "premium",
      foto: "🍅"
    },
    {
      id: 5,
      produtor: "Carlos Mendes",
      produto: "Alface Americana",
      quantidade: 1000,
      unidade: "pés",
      preco: 2.5,
      disponivel: "Amanhã, 6h",
      local: "Pouso Alegre, MG",
      telefone: "(35) 99999-5555",
      status: "disponivel",
      qualidade: "comum",
      foto: "🥬"
    },
    {
      id: 6,
      produtor: "José Ferreira",
      produto: "Morango Premium",
      quantidade: 400,
      unidade: "caixas",
      preco: 15,
      disponivel: "30/10, 14h",
      local: "Senador Amaral, MG",
      telefone: "(35) 99999-6666",
      status: "reservado",
      qualidade: "premium",
      foto: "🍓"
    },
  ];

  const ofertasFiltradas = ofertas.filter(oferta => {
    const matchBusca = oferta.produtor.toLowerCase().includes(busca.toLowerCase()) ||
                       oferta.produto.toLowerCase().includes(busca.toLowerCase()) ||
                       oferta.local.toLowerCase().includes(busca.toLowerCase());
    
    if (filtro === "todos") return matchBusca;
    if (filtro === "disponivel") return matchBusca && oferta.status === "disponivel";
    if (filtro === "reservado") return matchBusca && oferta.status === "reservado";
    if (filtro === "premium") return matchBusca && oferta.qualidade === "premium";
    
    return matchBusca;
  });

  const stats = {
    total: ofertas.length,
    disponiveis: ofertas.filter(o => o.status === "disponivel").length,
    reservados: ofertas.filter(o => o.status === "reservado").length,
    produtores: new Set(ofertas.map(o => o.produtor)).size,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">🌾 oZé Intermediário</h1>
              <p className="text-sm text-muted-foreground">Dashboard Consolidado</p>
            </div>
            <Badge className="bg-green-100 text-green-700">MVP Básico</Badge>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">{stats.total}</div>
                <div className="text-xs text-blue-100">Ofertas Totais</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">{stats.disponiveis}</div>
                <div className="text-xs text-green-100">Disponíveis</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">{stats.reservados}</div>
                <div className="text-xs text-orange-100">Reservados</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">{stats.produtores}</div>
                <div className="text-xs text-purple-100">Produtores</div>
              </CardContent>
            </Card>
          </div>

          {/* Busca e Filtros */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por produtor, produto ou local..." 
                className="pl-10"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <Select value={filtro} onValueChange={setFiltro}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="disponivel">Disponíveis</SelectItem>
                <SelectItem value="reservado">Reservados</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Lista de Ofertas */}
      <div className="container py-6">
        {/* Alerta de Economia */}
        <Card className="bg-green-50 border-green-200 mb-6">
          <CardContent className="p-4 flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold text-green-900">Economia de Tempo</div>
              <div className="text-sm text-green-700">
                Com este dashboard, você elimina <strong>150 ligações diárias</strong> e economiza <strong>R$ 72.000/ano</strong> em custos operacionais
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid de Ofertas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ofertasFiltradas.map((oferta) => (
            <Card key={oferta.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{oferta.foto}</span>
                    <div>
                      <CardTitle className="text-lg">{oferta.produto}</CardTitle>
                      <CardDescription className="text-xs flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {oferta.produtor}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={oferta.status === "disponivel" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {oferta.status === "disponivel" ? "Disponível" : "Reservado"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Informações */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">Quantidade</div>
                    <div className="font-semibold">
                      {oferta.quantidade} {oferta.unidade}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Preço</div>
                    <div className="font-semibold text-primary">
                      R$ {oferta.preco.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{oferta.disponivel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span>{oferta.local}</span>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" variant="default">
                    <Phone className="h-3 w-3 mr-1" />
                    Ligar
                  </Button>
                  <Button size="sm" className="flex-1" variant="outline">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    WhatsApp
                  </Button>
                </div>

                {oferta.status === "disponivel" && (
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" variant="default">
                      <Check className="h-3 w-3 mr-1" />
                      Reservar
                    </Button>
                    <Button size="sm" variant="ghost">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {ofertasFiltradas.length === 0 && (
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nenhuma oferta encontrada com os filtros selecionados</p>
            </div>
          </Card>
        )}
      </div>

      {/* Funcionalidades */}
      <div className="container py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Funcionalidades da Versão Básica</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Dashboard Consolidado
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Veja todas as ofertas de 150+ produtores em um só lugar
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Busca e Filtros
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Encontre rapidamente o que precisa por produto, local ou produtor
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Contato Direto
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Ligue ou envie WhatsApp direto do dashboard
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Reserva Rápida
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Reserve ofertas com 1 clique e notifique o produtor
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Atualização em Tempo Real
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Ofertas atualizadas automaticamente quando produtores cadastram
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                Zero Ligações
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Elimine as 150 ligações diárias para saber disponibilidade
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ROI */}
      <div className="bg-primary text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">ROI Comprovado</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">R$ 72k/ano</div>
                <div className="text-green-100">Economia em custos operacionais</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150</div>
                <div className="text-green-100">Ligações eliminadas por dia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4h/dia</div>
                <div className="text-green-100">Tempo economizado</div>
              </div>
            </div>
            <p className="text-lg text-green-100">
              "Isso aí já é coisa de louco. Com esses dados, as possibilidades são infinitas." — Tico, Cliente Âncora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

